'use client'

import { useState } from 'react'
import { Typography, Form, Input, Button, Checkbox, Row, Col, Spin } from 'antd'
import {
  MailOutlined,
  LockOutlined,
  NotificationOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function SettingsPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: userData, isLoading } = Api.user.findUnique.useQuery({
    where: { id: user?.id },
    include: { notifications: true },
  })

  const { mutateAsync: updateUser } = Api.user.update.useMutation()

  const [form] = Form.useForm()

  const handleFormSubmit = async (values: any) => {
    try {
      await updateUser({
        where: { id: user?.id },
        data: {
          email: values.email,
          password: values.password,
          notifications: {
            update: {
              email: values.emailNotifications,
              sms: values.smsNotifications,
            },
          },
        },
      })
      enqueueSnackbar('Settings updated successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to update settings', { variant: 'error' })
    }
  }

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Account Settings</Title>
      <Text>
        Update your account settings and notification preferences below.
      </Text>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFormSubmit}
        initialValues={{
          email: userData?.email,
          emailNotifications: userData?.notifications?.email,
          smsNotifications: userData?.notifications?.sms,
        }}
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>
        <Form.Item name="emailNotifications" valuePropName="checked">
          <Checkbox>
            <NotificationOutlined /> Email Notifications
          </Checkbox>
        </Form.Item>
        <Form.Item name="smsNotifications" valuePropName="checked">
          <Checkbox>
            <NotificationOutlined /> SMS Notifications
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Row justify="center">
            <Col>
              <Button type="primary" htmlType="submit">
                Save Changes
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </PageLayout>
  )
}
