import React from 'react'
import { Button, Tooltip } from 'antd'
import { SearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

import { useNavigate } from 'react-router-dom';


const ActionButton = ({url, _id}) => {
  // const navigate = useNavigate()
  // const openLink = navigate(`${url}`, {replace: true})
  return (
    <>
      {/* <Button shape="circle" icon={<PlayCircleFilled />} href={url} target='_blank' size="large" /> */}
      <Button className='button-has-link'
        shape="circle"
        icon={<SearchOutlined />}
        size="large"
        href={url}
        target='_blank' 
        type='primary'
      />
      <Button  shape='circle' icon={<EditOutlined />} size='large' />
      
      <Button shape='circle' icon={<DeleteOutlined />} size='large' />
    </>
  )
}

export default ActionButton