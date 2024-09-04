'use client'

import { Prisma } from '@prisma/client'
import { useState, useEffect } from 'react'
import { Button, Row, Col, Card, Typography, Avatar, List } from 'antd'
import {
  UserOutlined,
  TwitterOutlined,
  UserAddOutlined,
  UserDeleteOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function UserProfilePage() {
  const router = useRouter()
  const params = useParams<{ userId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: profileUser,
    isLoading,
    refetch,
  } = Api.user.findUnique.useQuery({
    where: { id: params.userId },
    include: {
      tweets: {
        include: {
          likes: true,
          retweets: true,
          comments: true,
          tweetHashtags: true,
        },
      },
      followsAsFollower: { include: { followee: true } },
      followsAsFollowee: { include: { follower: true } },
    },
  })

  const { mutateAsync: followUser } = Api.follow.create.useMutation()
  const { mutateAsync: unfollowUser } = Api.follow.delete.useMutation()

  const [isFollowing, setIsFollowing] = useState(false)

  useEffect(() => {
    if (profileUser && user) {
      setIsFollowing(
        profileUser.followsAsFollowee.some(
          follow => follow.followerId === user.id,
        ),
      )
    }
  }, [profileUser, user])

  const handleFollow = async () => {
    try {
      if (isFollowing) {
        await unfollowUser({
          where: {
            id: profileUser.followsAsFollowee.find(
              follow => follow.followerId === user.id,
            )?.id,
          },
        })
        enqueueSnackbar('Unfollowed successfully', { variant: 'success' })
      } else {
        await followUser({
          data: { followerId: user.id, followeeId: profileUser.id },
        })
        enqueueSnackbar('Followed successfully', { variant: 'success' })
      }
      refetch()
    } catch (error) {
      enqueueSnackbar('An error occurred', { variant: 'error' })
    }
  }

  if (isLoading) {
    return <PageLayout layout="narrow">Loading...</PageLayout>
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>User Profile</Title>
      <Paragraph>
        View user details, tweets, followers, and following.
      </Paragraph>
      <Row justify="center">
        <Col xs={24} sm={24} md={16} lg={12}>
          <Card>
            <Row align="middle">
              <Col span={6}>
                <Avatar
                  size={64}
                  icon={<UserOutlined />}
                  src={profileUser.pictureUrl}
                />
              </Col>
              <Col span={18}>
                <Title level={4}>{profileUser.name}</Title>
                <Text>{profileUser.email}</Text>
                <br />
                <Button
                  type="primary"
                  icon={
                    isFollowing ? <UserDeleteOutlined /> : <UserAddOutlined />
                  }
                  onClick={handleFollow}
                >
                  {isFollowing ? 'Unfollow' : 'Follow'}
                </Button>
              </Col>
            </Row>
          </Card>
          <Card title="Tweets" style={{ marginTop: 16 }}>
            <List
              itemLayout="vertical"
              dataSource={profileUser.tweets}
              renderItem={tweet => (
                <List.Item key={tweet.id}>
                  <List.Item.Meta
                    avatar={<Avatar icon={<TwitterOutlined />} />}
                    title={tweet.content}
                    description={`Created at: ${tweet.dateCreated}`}
                  />
                </List.Item>
              )}
            />
          </Card>
          <Card title="Followers" style={{ marginTop: 16 }}>
            <List
              itemLayout="horizontal"
              dataSource={profileUser.followsAsFollowee}
              renderItem={follow => (
                <List.Item key={follow.follower.id}>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        icon={<UserOutlined />}
                        src={follow.follower.pictureUrl}
                      />
                    }
                    title={follow.follower.name}
                  />
                </List.Item>
              )}
            />
          </Card>
          <Card title="Following" style={{ marginTop: 16 }}>
            <List
              itemLayout="horizontal"
              dataSource={profileUser.followsAsFollower}
              renderItem={follow => (
                <List.Item key={follow.followee.id}>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        icon={<UserOutlined />}
                        src={follow.followee.pictureUrl}
                      />
                    }
                    title={follow.followee.name}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
