import React from 'react'
import { Button, Tooltip } from 'antd'
import { CaretRightOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { PostContext } from '../../contexts/PostsContext';


const ActionButton = ({ url, _id }) => {
  // const { deletePost } = useContext(PostContext)
  const { deletePost } = useContext(
    PostContext
  )
  // const navigate = useNavigate()
  // const openLink = navigate(`${url}`, {replace: true})
  return (
    <>
      <Button
        style={{ margin: '2px' }}
        className='button-has-link'
        shape="circle"
        icon={<CaretRightOutlined />}
        size="large"
        href={url}
        target='_blank'
        type='primary'
      />
      <Button
        style={{ margin: '2px' }}
        shape='circle'
        icon={<EditOutlined />}
        size='large'
      />

      <Button
        onClick={deletePost.bind(this, _id)}
        style={{ margin: '2px' }}
        shape='circle'
        icon={<DeleteOutlined />}
        size='large'
      />
    </>
  )
}

export default ActionButton