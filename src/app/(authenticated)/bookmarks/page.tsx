'use client'

import { List, Typography, Spin, Row, Col } from 'antd'
import { BookOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function BookmarksPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: bookmarks,
    isLoading,
    refetch,
  } = Api.tweet.findMany.useQuery({
    where: { likes: { some: { userId: user?.id } } },
    include: {
      user: true,
      likes: true,
      retweets: true,
      comments: true,
      tweetHashtags: true,
    },
  })

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
          <Spin size="large" />
        </Row>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center">
        <Col span={24}>
          <Title level={2}>
            <BookOutlined /> My Bookmarked Tweets
          </Title>
          <Text>Here you can find all the tweets you have bookmarked.</Text>
        </Col>
      </Row>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={bookmarks}
        renderItem={tweet => (
          <List.Item key={tweet.id}>
            <List.Item.Meta
              title={
                <a onClick={() => router.push(`/tweets/${tweet.id}`)}>
                  {tweet.user?.name}
                </a>
              }
              description={dayjs(tweet.dateCreated).format('MMMM D, YYYY')}
            />
            <Text>{tweet.content}</Text>
          </List.Item>
        )}
      />
    </PageLayout>
  )
}
