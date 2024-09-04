'use client'

import { useState } from 'react'
import { Prisma } from '@prisma/client'
import { Typography, List, Avatar, Input, Button, Row, Col, Spin } from 'antd'
import { SendOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
const { TextArea } = Input
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function MessagesPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [messageContent, setMessageContent] = useState<string>('')

  const { data: conversations, isLoading: isLoadingConversations } =
    Api.message.findMany.useQuery({
      where: {
        OR: [{ senderId: user?.id }, { receiverId: user?.id }],
      },
      include: {
        sender: true,
        receiver: true,
      },
    })

  const { mutateAsync: sendMessage } = Api.message.create.useMutation()

  const handleSendMessage = async () => {
    if (!messageContent.trim()) {
      enqueueSnackbar('Message content cannot be empty', { variant: 'error' })
      return
    }

    try {
      await sendMessage({
        data: {
          content: messageContent,
          senderId: user?.id,
          receiverId: params.receiverId, // Assuming receiverId is passed in params
        },
      })
      setMessageContent('')
      enqueueSnackbar('Message sent successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to send message', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Direct Messages</Title>
      <Paragraph>View and manage your direct message conversations.</Paragraph>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Title level={4}>Conversations</Title>
          {isLoadingConversations ? (
            <Spin />
          ) : (
            <List
              itemLayout="horizontal"
              dataSource={conversations}
              renderItem={conversation => {
                const otherUser =
                  conversation.senderId === user?.id
                    ? conversation.receiver
                    : conversation.sender
                return (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src={otherUser?.pictureUrl} />}
                      title={<Text>{otherUser?.name}</Text>}
                      description={
                        <Text>
                          {dayjs(conversation.dateCreated).format(
                            'MMM D, YYYY h:mm A',
                          )}
                        </Text>
                      }
                    />
                  </List.Item>
                )
              }}
            />
          )}
        </Col>
        <Col xs={24} md={16}>
          <Title level={4}>New Message</Title>
          <TextArea
            rows={4}
            value={messageContent}
            onChange={e => setMessageContent(e.target.value)}
            placeholder="Type your message here..."
          />
          <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={handleSendMessage}
            style={{ marginTop: '10px' }}
          >
            Send
          </Button>
        </Col>
      </Row>
    </PageLayout>
  )
}
