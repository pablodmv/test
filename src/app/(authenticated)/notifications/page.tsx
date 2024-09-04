'use client'

import { Typography, List, Avatar, Spin } from 'antd'
import {
  LikeOutlined,
  RetweetOutlined,
  MessageOutlined,
  UserAddOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function NotificationsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: notifications,
    isLoading,
    refetch,
  } = Api.notification.findMany.useQuery({
    where: { userId: user?.id },
    include: {
      user: true,
      tweet: true,
      follower: true,
    },
  })

  const renderNotificationIcon = (type: string) => {
    switch (type) {
      case 'like':
        return <LikeOutlined style={{ color: '#1890ff' }} />
      case 'retweet':
        return <RetweetOutlined style={{ color: '#52c41a' }} />
      case 'reply':
        return <MessageOutlined style={{ color: '#faad14' }} />
      case 'follow':
        return <UserAddOutlined style={{ color: '#eb2f96' }} />
      default:
        return null
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Notifications</Title>
      <Text>
        Stay informed about interactions with your content and new followers.
      </Text>
      <div style={{ marginTop: '20px' }}>
        {isLoading ? (
          <Spin size="large" />
        ) : (
          <List
            itemLayout="horizontal"
            dataSource={notifications}
            renderItem={notification => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar icon={renderNotificationIcon(notification.type)} />
                  }
                  title={
                    <Text>
                      {notification.type === 'follow' ? (
                        `${notification.follower?.name} started following you`
                      ) : (
                        <>
                          {notification.user?.name} {notification.type}ed your
                          tweet
                        </>
                      )}
                    </Text>
                  }
                  description={dayjs(notification.dateCreated).format(
                    'MMMM D, YYYY h:mm A',
                  )}
                />
              </List.Item>
            )}
          />
        )}
      </div>
    </PageLayout>
  )
}
