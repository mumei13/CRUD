import React, { useCallback } from 'react'
// import { useEffect } from 'react'
import { Modal, Form, Input, Button } from 'antd'
import { useContext } from 'react'
import { PostContext } from '../../contexts/PostsContext'
import { notification } from 'antd';
import './style.scss'

const AddPostModal = () => {
  const [form] = Form.useForm()
  //Context
  const { showAddPostModal, setShowAddPostModal, addPost } = useContext(PostContext)

  const { TextArea } = Input;

  // useEffect(() => {
  //   if (showAddPostModal && form) {
  //     // form.resetFields()
  //   }
  // }, [showAddPostModal, form])

  const closeModal = useCallback(() => {
    form.resetFields()
    setShowAddPostModal(false)
  }, [form, setShowAddPostModal])



  // Noti success
  const openNotification = useCallback(() => {
    notification.open({
      message: 'Successfully',
      description:
        'Enjoy learning',
    });
  }, [])



  // Validate Form
  const onFinish = useCallback(async values => {
    if (values.title === '') {
      closeModal()
    } else {
      await addPost(values)
      closeModal()
      return openNotification()
    }
  }, [closeModal, addPost, openNotification])



  return (
    <>
      <Modal title="What's up mann?" visible={showAddPostModal} onCancel={closeModal}
        footer={null}
      >
        <Form form={form} name="basic"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 18,
          }}
          initialValues={{
            title: '',
            description: '',
            url: '',
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label='Title'
            name="title"
            rules={[
              {
                required: true,
                message: 'Please enter title!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Description'
            name='description'
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            label='Link to learn'
            name='url'
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button onClick={closeModal} className='form-modal-button submit'>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default AddPostModal