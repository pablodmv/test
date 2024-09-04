'use client'

import { Prisma } from '@prisma/client'
import { useState } from 'react'
import { Typography, Button, Input, List, Avatar, Space } from 'antd'
import {
  LikeOutlined,
  RetweetOutlined,
  MessageOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function TweetDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const tweetId = params.tweetId

  const {
    data: tweet,
    isLoading: tweetLoading,
    refetch: refetchTweet,
  } = Api.tweet.findUnique.useQuery({
    where: { id: tweetId },
    include: {
      user: true,
      likes: true,
      retweets: true,
      comments: {
        include: {
          user: true,
        },
      },
    },
  })

  const { mutateAsync: likeTweet } = Api.like.create.useMutation()
  const { mutateAsync: retweetTweet } = Api.retweet.create.useMutation()
  const { mutateAsync: replyTweet } = Api.comment.create.useMutation()

  const [replyContent, setReplyContent] = useState<string>('')

  const handleLike = async () => {
    try {
      await likeTweet({ data: { tweetId, userId: user.id } })
      enqueueSnackbar('Tweet liked!', { variant: 'success' })
      refetchTweet()
    } catch (error) {
      enqueueSnackbar('Failed to like tweet', { variant: 'error' })
    }
  }

  const handleRetweet = async () => {
    try {
      await retweetTweet({ data: { tweetId, userId: user.id } })
      enqueueSnackbar('Tweet retweeted!', { variant: 'success' })
      refetchTweet()
    } catch (error) {
      enqueueSnackbar('Failed to retweet', { variant: 'error' })
    }
  }

  const handleReply = async () => {
    try {
      await replyTweet({
        data: { tweetId, userId: user.id, content: replyContent },
      })
      enqueueSnackbar('Reply posted!', { variant: 'success' })
      setReplyContent('')
      refetchTweet()
    } catch (error) {
      enqueueSnackbar('Failed to post reply', { variant: 'error' })
    }
  }

  if (tweetLoading) {
    return <PageLayout layout="narrow">Loading...</PageLayout>
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Tweet Details</Title>
      <Paragraph>
        Engage with the tweet by liking, retweeting, or replying.
      </Paragraph>
      <div style={{ textAlign: 'center' }}>
        <Avatar src={tweet?.user?.pictureUrl} size="large" />
        <Title level={4}>{tweet?.user?.name}</Title>
        <Text>{dayjs(tweet?.dateCreated).format('MMMM D, YYYY h:mm A')}</Text>
        <Paragraph>{tweet?.content}</Paragraph>
        <Space>
          <Button icon={<LikeOutlined />} onClick={handleLike}>
            {tweet?.likes?.length?.toString()} Likes
          </Button>
          <Button icon={<RetweetOutlined />} onClick={handleRetweet}>
            {tweet?.retweets?.length?.toString()} Retweets
          </Button>
        </Space>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Title level={4}>Replies</Title>
        <List
          itemLayout="horizontal"
          dataSource={tweet?.comments}
          renderItem={comment => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={comment.user?.pictureUrl} />}
                title={comment.user?.name}
                description={comment.content}
              />
            </List.Item>
          )}
        />
      </div>
      <div style={{ marginTop: '20px' }}>
        <Title level={4}>Post a Reply</Title>
        <Input.TextArea
          rows={4}
          value={replyContent}
          onChange={e => setReplyContent(e.target.value)}
          placeholder="Write your reply..."
        />
        <Button
          type="primary"
          onClick={handleReply}
          style={{ marginTop: '10px' }}
        >
          Reply
        </Button>
      </div>
    </PageLayout>
  )
}
