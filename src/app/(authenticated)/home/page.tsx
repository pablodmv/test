'use client'

import { useState } from 'react'
import { Prisma } from '@prisma/client'
import { Typography, List, Button, Input, Space, Row, Col } from 'antd'
import {
  LikeOutlined,
  RetweetOutlined,
  MessageOutlined,
  SendOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
const { TextArea } = Input
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [newTweetContent, setNewTweetContent] = useState<string>('')

  const {
    data: tweets,
    isLoading,
    refetch,
  } = Api.tweet.findMany.useQuery({
    where: { user: { followsAsFollower: { some: { followerId: user?.id } } } },
    include: { user: true, likes: true, retweets: true, comments: true },
  })

  const { mutateAsync: createTweet } = Api.tweet.create.useMutation()
  const { mutateAsync: likeTweet } = Api.like.create.useMutation()
  const { mutateAsync: retweetTweet } = Api.retweet.create.useMutation()
  const { mutateAsync: createComment } = Api.comment.create.useMutation()

  const handleCreateTweet = async () => {
    if (!newTweetContent) {
      enqueueSnackbar('Tweet content cannot be empty', { variant: 'error' })
      return
    }
    try {
      await createTweet({
        data: { content: newTweetContent, userId: user?.id },
      })
      setNewTweetContent('')
      refetch()
      enqueueSnackbar('Tweet created successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to create tweet', { variant: 'error' })
    }
  }

  const handleLikeTweet = async (tweetId: string) => {
    try {
      await likeTweet({ data: { tweetId, userId: user?.id } })
      refetch()
      enqueueSnackbar('Tweet liked', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to like tweet', { variant: 'error' })
    }
  }

  const handleRetweet = async (tweetId: string) => {
    try {
      await retweetTweet({ data: { tweetId, userId: user?.id } })
      refetch()
      enqueueSnackbar('Tweet retweeted', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to retweet', { variant: 'error' })
    }
  }

  const handleCreateComment = async (tweetId: string, content: string) => {
    if (!content) {
      enqueueSnackbar('Comment content cannot be empty', { variant: 'error' })
      return
    }
    try {
      await createComment({ data: { tweetId, userId: user?.id, content } })
      refetch()
      enqueueSnackbar('Comment added', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to add comment', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Home</Title>
      <Paragraph>
        Stay updated with the latest tweets from people you follow.
      </Paragraph>
      <Row justify="center">
        <Col span={24}>
          <TextArea
            rows={4}
            placeholder="What's happening?"
            value={newTweetContent}
            onChange={e => setNewTweetContent(e.target.value)}
          />
          <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={handleCreateTweet}
          >
            Tweet
          </Button>
        </Col>
      </Row>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={tweets}
        loading={isLoading}
        renderItem={tweet => (
          <List.Item
            key={tweet.id}
            actions={[
              <Space>
                <Button
                  icon={<LikeOutlined />}
                  onClick={() => handleLikeTweet(tweet.id)}
                >
                  {tweet.likes?.length.toString()}
                </Button>
                <Button
                  icon={<RetweetOutlined />}
                  onClick={() => handleRetweet(tweet.id)}
                >
                  {tweet.retweets?.length.toString()}
                </Button>
                <Button
                  icon={<MessageOutlined />}
                  onClick={() => router.push(`/tweets/${tweet.id}`)}
                >
                  {tweet.comments?.length.toString()}
                </Button>
              </Space>,
            ]}
          >
            <List.Item.Meta
              title={
                <a onClick={() => router.push(`/users/${tweet.user?.id}`)}>
                  {tweet.user?.name}
                </a>
              }
              description={dayjs(tweet.dateCreated).format(
                'MMMM D, YYYY h:mm A',
              )}
            />
            <Text>{tweet.content}</Text>
          </List.Item>
        )}
      />
    </PageLayout>
  )
}
