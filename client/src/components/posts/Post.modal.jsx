// import { Card, Row, Col, Badge } from 'react-bootstrap/'
import { Card, Row, Col, Badge } from 'antd/'
import ActionButton from './ActionButton'
import React from 'react'

const SinglePost = ({ post: { _id, status, title, description, url } }) => (
  <Badge.Ribbon color={status === 'LEARNED' ? 'green' : status === 'LEARNING' ? 'volcano' : 'red'} text={status}>
    <Card className='shadow' bordered='true'>
      <Row>
        <Col>
          <p className='post-title'>{title}</p>
        </Col>
        <Col className='text-right' style={{ marginLeft: 'auto' }}>
          <ActionButton url={url} _id={_id} />
        </Col>
      </Row>
      <div>{description}</div>
    </Card>
  </Badge.Ribbon>
)

export default SinglePost