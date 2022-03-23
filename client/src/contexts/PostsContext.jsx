import { createContext, useReducer, useState } from "react";
import { postReducer } from "../reducer/postReducer";
import { apiUrl, POSTS_LOADED_SUCCESS, POSTS_LOADED_FAIL, ADD_POST, DELETE_POST } from "./constants";
import axios from "axios";

export const PostContext = createContext()

const PostContextProvider = ({ children }) => {

  // State
  const [postState, dispatch] = useReducer(postReducer, {
    post: null,
    posts: [],
    postsloading: true
  })


  const [showAddPostModal, setShowAddPostModal] = useState(false)


  // Get All Post
  const getPosts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/posts`)
      if (response.data.success) {
        dispatch({ type: POSTS_LOADED_SUCCESS, payload: response.data.posts })
      }
    } catch (error) {
      dispatch({ type: POSTS_LOADED_FAIL })
    }
  }

  // Add Post
  const addPost = async newPost => {
    try {
      const response = await axios.post(`${apiUrl}/posts`, newPost)
      if (response.data.success) {
        dispatch({ type: ADD_POST, payload: response.data.post })
        return response.data
      }
    } catch (error) {
      return error.response.data ? error.response.data : { success: false, message: 'Server Error' }
    }
  }

  //Delete Post
  // const deletePost = async postId => {
  //   try {
  //     const response = await axios.delete(`${apiUrl}/posts/${postId}`)
  //     if (response.data.success)
  //       dispatch({ type: DELETE_POST, payload: postId })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  const deletePost = async postId => {
    try {
      const response = await axios.delete(`${apiUrl}/posts/${postId}`)
      if (response.data.success)
        dispatch({ type: DELETE_POST, payload: postId })
    } catch (error) {
      console.log(error)
    }
  }


  // Post context data
  const postContextData = { postState, getPosts, showAddPostModal, setShowAddPostModal, addPost, deletePost }

  return (
    <PostContext.Provider value={postContextData}>
      {children}
    </PostContext.Provider>
  )
}

export default PostContextProvider