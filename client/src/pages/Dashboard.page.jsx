import React from 'react'
import {PostContext} from '../contexts/PostsContext'
import { useContext, useEffect } from 'react'
import {AuthContext} from '../contexts/AuthContext'

import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Toast from 'react-bootstrap/Toast'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Col from 'react-bootstrap/Col'


const Dashboard = () => {
  // Contexts
  const {
		authState: {
			user: { username }
		}
	} = useContext(AuthContext)
  const{ postState: {posts, postsLoading}, getPosts } = useContext(PostContext)


  // Start get all posts
  useEffect(() => getPosts(), [])

  let body = null

  if (postsLoading) {
    body = (
      <div className='spinner-container'>
         <Spinner animation="border" variant='info' />
      </div>
    )
  } else if (!posts) {
    <>
       <Card className='text-center'>
	 				<Card.Header as='h1'>Hi {username}</Card.Header>
	 				<Card.Body>
	 					<Card.Title>Welcome to LearnIt</Card.Title>
 					  <Card.Text>
	 						Click the button below to track your first skill to learn
	 					</Card.Text>
	 					{/* <Button
	 						variant='primary'
	 						onClick={setShowAddPostModal.bind(this, true)}
	 					>
	 						LearnIt!
	 					</Button> */}
	 				</Card.Body>
       </Card>
      </>
  } else {
    body = (
			<>
				<Row className='row-cols-1 row-cols-md-3 g-4 mx-auto mt-3'>
					{posts.map(post => (
						<Col key={post._id} className='my-2'>
							{/* <SinglePost post={post} /> */}
						</Col>
					))}
				</Row>

				{/* Open Add Post Modal */}
				<OverlayTrigger
					placement='left'
					overlay={<Tooltip>Add a new thing to learn</Tooltip>}
				>
					<Button
						className='btn-floating'
						// onClick={setShowAddPostModal.bind(this, true)}
					>
						{/* <img src={addIcon} alt='add-post' width='60' height='60' /> */}
					</Button>
				</OverlayTrigger>
			</>
		)
  }


  return (
    <div>
      <h1>DASHBOARD</h1>
      <div className='snowflake' aria-hidden="true">

        <div className='snowflake'>❅</div>

        <div className='snowflake'>❆</div>

        <div className='snowflake'>❅</div>

        <div className='snowflake'>❆</div>

        <div className='snowflake'>❅</div>

        <div className='snowflake'>❆</div>

        <div className='snowflake'>❅</div>

        <div className='snowflake'>❆</div>

        <div className='snowflake'>❅</div>

        <div className='snowflake'>❆</div>

        <div className='snowflake'>❅</div>

        <div className='snowflake'>❆</div>

      </div>


    </div>
  )
}

export default Dashboard