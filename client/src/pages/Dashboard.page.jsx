import React from 'react'
import {PostContext} from '../contexts/PostsContext'
import { useContext, useEffect } from 'react'
import {AuthContext} from '../contexts/AuthContext'
import SinglePost from '../components/posts/PostModal'

import { Card, Col, Row, Button } from 'antd';
import Spinner from 'react-bootstrap/Spinner'
import Toast from 'react-bootstrap/Toast'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'


const Dashboard = () => {
  // Contexts
  const {
		authState: {user: { username }}} = useContext(AuthContext)
  const{ postState: {posts, postsLoading}, getPosts } = useContext(PostContext)


  // Start get all posts
  useEffect(() => getPosts(), [])

  let body = null

  if (postsLoading) {
    body = (
      <div className="spinner-container">
        <Spinner animation='border' variant='info' />
      </div>
    )
  } else if (posts.length === 0) {
    body = (
      <>
        <Card className='text-center'>
          <div as='h1'>Hi {username}</div>
          <Card title="Card title" bordered={true}>
            <p>
              Click the button below to track first skill to learn
            </p>
            <Button variant='primary'>Learn mern</Button>
          </Card>
        </Card>
      </>
    )
  } else {
    body = (
      <>
        <Row gutter={16} className=''>
          {posts.map(post =>(
            <Col span={8} key={post._id} className=''>
              <SinglePost post={post} />
            </Col>
          ))}
        </Row>
      </>
    )
  }

  return (
    <>
    <h1>DASHBOARD</h1>
    {body}
    </>
  )
}

export default Dashboard