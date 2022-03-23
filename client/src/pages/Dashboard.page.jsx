import React from 'react'
import './css/Dashboard.scss'
import { PostContext } from '../contexts/PostsContext'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import SinglePost from '../components/posts/Post.modal'
import AddPostModal from '../components/posts/AddPost.modal'

import { Card, Col, Row, Tooltip } from 'antd';
import { Button, Spinner, Toast, OverlayTrigger } from 'react-bootstrap'



const Dashboard = () => {
  // Contexts
  const {
    authState: { user: { username } } } = useContext(AuthContext)
  const { postState: { posts, postsLoading }, getPosts, setShowAddPostModal } = useContext(PostContext)


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
            <Button variant='primary' onClick={setShowAddPostModal.bind(this, true)}>Start Study</Button>
          </Card>
        </Card>
      </>
    )
  } else {
    body = (
      <>
        <Row gutter={[16, 24]} className=''>
          {posts.map(post => (
            <Col span={8} key={post._id} className=''>
              <SinglePost post={post} />
            </Col>
          ))}
        </Row>
        {/* Opend Add Post Modal */}
        <Button className='btn-floating' onClick={setShowAddPostModal.bind(this, true)}>
          + Add
        </Button>
      </>
    )
  }

  return (
    <>
      <h1>DASHBOARD</h1>
      {body}
      <AddPostModal />
    </>
  )
}

export default Dashboard