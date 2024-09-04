'use client'

import { useState } from 'react'
import {
  Typography,
  Avatar,
  Button,
  Form,
  Input,
  Row,
  Col,
  Spin,
  List,
} from 'antd'
import { EditOutlined, SaveOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function MyProfilePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [isEditing, setIsEditing] = useState(false)
  const [form] = Form.useForm()

  const {
    data: userProfile,
    isLoading,
    refetch,
  } = Api.user.findUnique.useQuery({
    where: { id: user?.id },
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

  const { mutateAsync: updateUser } = Api.user.update.useMutation()

  const handleEdit = () => {
    setIsEditing(true)
    form.setFieldsValue({
      pictureUrl: userProfile?.pictureUrl,
    })
  }

  const handleSave = async (values: { pictureUrl: string }) => {
    try {
      await updateUser({
        where: { id: user?.id },
        data: values,
      })
      enqueueSnackbar('Profile updated successfully!', { variant: 'success' })
      setIsEditing(false)
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to update profile.', { variant: 'error' })
    }
  }

  if (isLoading) {
    return <Spin />
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>My Profile</Title>
      <Paragraph>View and edit your profile information.</Paragraph>
      <Row justify="center" gutter={[16, 16]}>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Avatar size={100} src={userProfile?.pictureUrl} />
          <Title level={3}>{userProfile?.name}</Title>
          <Text>{userProfile?.email}</Text>
        </Col>
        <Col span={24}>
          {isEditing ? (
            <Form form={form} onFinish={handleSave} layout="vertical">
              <Form.Item name="pictureUrl" label="Profile Picture URL">
                <Input />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<SaveOutlined />}
                >
                  Save
                </Button>
              </Form.Item>
            </Form>
          ) : (
            <>
              <Button onClick={handleEdit} icon={<EditOutlined />}>
                Edit Profile
              </Button>
            </>
          )}
        </Col>
        <Col span={24}>
          <Title level={4}>Tweets</Title>
          <List
            itemLayout="vertical"
            dataSource={userProfile?.tweets}
            renderItem={tweet => (
              <List.Item key={tweet.id}>
                <List.Item.Meta
                  title={dayjs(tweet.dateCreated).format('MMMM D, YYYY')}
                  description={tweet.content}
                />
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Title level={4}>Followers</Title>
          <List
            itemLayout="vertical"
            dataSource={userProfile?.followsAsFollowee}
            renderItem={follow => (
              <List.Item key={follow.follower?.id}>
                <List.Item.Meta
                  title={follow.follower?.name}
                  description={follow.follower?.email}
                />
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Title level={4}>Following</Title>
          <List
            itemLayout="vertical"
            dataSource={userProfile?.followsAsFollower}
            renderItem={follow => (
              <List.Item key={follow.followee?.id}>
                <List.Item.Meta
                  title={follow.followee?.name}
                  description={follow.followee?.email}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </PageLayout>
  )
}
