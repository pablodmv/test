'use client'

import { useState } from 'react'
import { Typography, List, Button, Modal, Input, Spin } from 'antd'
import { PlusOutlined, EyeOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ListsPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [newListName, setNewListName] = useState('')
  const {
    data: lists,
    isLoading,
    refetch,
  } = Api.list.findMany.useQuery({ where: { userId: user?.id } })
  const { mutateAsync: createList } = Api.list.create.useMutation()

  const handleCreateList = async () => {
    try {
      await createList({ data: { name: newListName, userId: user?.id } })
      enqueueSnackbar('List created successfully', { variant: 'success' })
      setIsModalVisible(false)
      setNewListName('')
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to create list', { variant: 'error' })
    }
  }

  const handleViewList = (listId: string) => {
    router.push(`/lists/${listId}`)
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>My Lists</Title>
      <Text>Manage and view all your lists here.</Text>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => setIsModalVisible(true)}
        style={{ marginTop: 16 }}
      >
        Create New List
      </Button>
      {isLoading ? (
        <Spin style={{ marginTop: 16 }} />
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={lists}
          renderItem={list => (
            <List.Item
              actions={[
                <Button
                  icon={<EyeOutlined />}
                  onClick={() => handleViewList(list.id)}
                >
                  View
                </Button>,
              ]}
            >
              <List.Item.Meta title={list.name} />
            </List.Item>
          )}
          style={{ marginTop: 16 }}
        />
      )}
      <Modal
        title="Create New List"
        visible={isModalVisible}
        onOk={handleCreateList}
        onCancel={() => setIsModalVisible(false)}
        okText="Create"
        cancelText="Cancel"
      >
        <Input
          placeholder="List Name"
          value={newListName}
          onChange={e => setNewListName(e.target.value)}
        />
      </Modal>
    </PageLayout>
  )
}
