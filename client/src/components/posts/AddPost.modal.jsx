import React from 'react'
// import { Modal, Button, Form } from 'react-bootstrap'
import { Modal, Button, Form, Input } from 'antd'
import { useContext, useState } from 'react'
import { PostContext } from '../../contexts/PostsContext'
import { notification } from 'antd';

const AddPostModal = () => {
  //Context
  const { showAddPostModal, setShowAddPostModal, addPost } = useContext(PostContext)


  // State
  const [newPost, setNeWPost] = useState({
    title: '',
    description: '',
    url: '',
    status: 'TO LEARN'
  })


  const { TextArea } = Input;

  const { title, description, url } = newPost

  const onChangeNewPostForm = e => setNeWPost({ ...newPost, [e.target.name]: e.target.value })

  const closeModal = () => {
    resetAddNewPost()
  }

  // Send to server
  const onFinish = async e => {
    resetAddNewPost()
    if (newPost.title === '') {
      closeModal()
    } else {
      e.preventDefault()
      const { success, message } = await addPost(newPost)
      return openNotification()
    }
  }

  const resetAddNewPost = () => {
    setNeWPost({ title: '', description: '', url: '' })
    setShowAddPostModal(false)
  }


  // Noti success

  const openNotification = () => {
    notification.open({
      message: 'Successfully',
      description:
        'Enjoy learning',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  return (
    <>
      <Modal title="What's up mann?" visible={showAddPostModal} onCancel={closeModal} onOk={onFinish}>
        <Form name="basic" onFinish={onFinish}
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 18,
          }}
          initialValues={{
            remember: true,
          }}>
          <Form.Item
            label='Title'
            type='text'
            placeholder='Title'
            name='title'
            onChange={onChangeNewPostForm}
            rules={[
              {
                required: true,
                message: 'Please enter title!',
              },
            ]} >
            <Input value={newPost.title} name='title' />
          </Form.Item>
          <Form.Item
            label='Description'
            title='Description'
            as='textarea'
            placeholder='Description'
            name='description'
            value={newPost.description}
            onChange={onChangeNewPostForm}
          >
            <TextArea rows={4} name='description' />
          </Form.Item>
          <Form.Item
            label='Link to learn'
            type='text'
            placeholder='Youtube Tutorial URL'
            name='url'
            value={newPost.url}
            onChange={onChangeNewPostForm}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>

    </>
    // <>
    //   <Modal show={showAddPostModal} onHide={closeModal}>
    //     <Modal.Header closeButton>
    //       <Modal.Title>What do you want to learn?</Modal.Title>
    //     </Modal.Header>
    //     <Form onSubmit={onFinish}>
    //       <Modal.Body>
    //         <Form.Group>
    //           <Form.Control
    //             type='text'
    //             placeholder='Title'
    //             name='title'
    //             required
    //             aria-describedby='title-help'
    //             value={title}
    //             onChange={onChangeNewPostForm}
    //           />
    //           <Form.Text id='title-help' muted>
    //             Required
    //           </Form.Text>
    //         </Form.Group>
    //         <Form.Group>
    //           <Form.Control
    //             as='textarea'
    //             rows={3}
    //             placeholder='Description'
    //             name='description'
    //             value={description}
    //             onChange={onChangeNewPostForm}
    //           />
    //         </Form.Group>
    //         <Form.Group>
    //           <Form.Control
    //             type='text'
    //             placeholder='Youtube Tutorial URL'
    //             name='url'
    //             value={url}
    //             onChange={onChangeNewPostForm}
    //           />
    //         </Form.Group>
    //       </Modal.Body>
    //       <Modal.Footer>
    //         <Button variant='secondary' onClick={closeModal}>
    //           Cancel
    //         </Button>
    //         <Button variant='primary' type='submit'>
    //           LearnIt!
    //         </Button>
    //       </Modal.Footer>
    //     </Form>
    //   </Modal>
    // </>

  )
}

export default AddPostModal