'use client'

import { Prisma } from '@prisma/client'
import { Typography, Row, Col, Card, Spin } from 'antd'
import { FireOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function TrendsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: trendingTopics,
    isLoading,
    refetch,
  } = Api.hashtag.findMany.useQuery({
    include: { tweetHashtags: true },
  })

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Trending Topics</Title>
      <Text>Stay updated with what is popular on the platform.</Text>
      {isLoading ? (
        <Spin size="large" />
      ) : (
        <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
          {trendingTopics?.map(
            (
              hashtag: Prisma.HashtagGetPayload<{
                include: { tweetHashtags: true }
              }>,
            ) => (
              <Col xs={24} sm={12} md={8} lg={6} key={hashtag.id}>
                <Card hoverable>
                  <Card.Meta
                    avatar={
                      <FireOutlined
                        style={{ fontSize: '24px', color: '#fa8c16' }}
                      />
                    }
                    title={`#${hashtag.name}`}
                    description={`${hashtag.tweetHashtags?.length.toString()} Tweets`}
                  />
                </Card>
              </Col>
            ),
          )}
        </Row>
      )}
    </PageLayout>
  )
}
