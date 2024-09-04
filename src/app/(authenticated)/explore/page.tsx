'use client'

import { Prisma } from '@prisma/client'
import { useState } from 'react'
import { Typography, Input, List, Card, Row, Col, Spin } from 'antd'
import { SearchOutlined, FireOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ExplorePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [searchTerm, setSearchTerm] = useState<string>('')

  const { data: trendingTopics, isLoading: isLoadingTrending } =
    Api.hashtag.findMany.useQuery({
      orderBy: { dateCreated: 'desc' },
      take: 10,
    })

  const { data: popularTweets, isLoading: isLoadingTweets } =
    Api.tweet.findMany.useQuery({
      orderBy: { dateCreated: 'desc' },
      take: 10,
      include: { user: true, likes: true, retweets: true, comments: true },
    })

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const filteredTweets = popularTweets?.filter(
    tweet =>
      tweet.content?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tweet.user?.name?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Explore</Title>
      <Text>
        Discover new content and find tweets, users, or hashtags relevant to
        your interests.
      </Text>
      <Input
        placeholder="Search tweets, users, or hashtags"
        prefix={<SearchOutlined />}
        value={searchTerm}
        onChange={handleSearch}
        style={{ margin: '20px 0' }}
      />
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Title level={3}>
            <FireOutlined /> Trending Topics
          </Title>
          {isLoadingTrending ? (
            <Spin />
          ) : (
            <List
              dataSource={trendingTopics}
              renderItem={topic => (
                <List.Item>
                  <Card>
                    <Text>#{topic.name}</Text>
                  </Card>
                </List.Item>
              )}
            />
          )}
        </Col>
        <Col xs={24} md={12}>
          <Title level={3}>
            <FireOutlined /> Popular Tweets
          </Title>
          {isLoadingTweets ? (
            <Spin />
          ) : (
            <List
              dataSource={filteredTweets}
              renderItem={tweet => (
                <List.Item>
                  <Card>
                    <Text strong>{tweet.user?.name}</Text>
                    <Text>{tweet.content}</Text>
                  </Card>
                </List.Item>
              )}
            />
          )}
        </Col>
      </Row>
    </PageLayout>
  )
}
