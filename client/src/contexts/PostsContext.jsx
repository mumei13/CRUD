import { createContext, useReducer, useContext } from "react";
import { postReducer } from "../reducer/postReducer";
import { apiUrl, POSTS_LOADED_SUCCESS, POSTS_LOADED_FAIL } from "./constants";
import axios from "axios";

export const PostContext = createContext()

const PostContextProvider = ({children}) => {

// State
const [postState, dispatch] = useReducer(postReducer, {
  post:[],
  postloading: true
})

// Get All Post
const getPosts = async () => {
  try {
    const response = await axios.get(`${apiUrl}/posts`)
    if (response.data.success) {
      dispatch({type: POSTS_LOADED_SUCCESS, payload: response.data.posts})
    }
  } catch (error) {
    dispatch({type: POSTS_LOADED_FAIL})
  }
}

// Post context data
const postContextData = { postState, getPosts }

  return (
    <PostContext.Provider value={postContextData}>
      {children}
    </PostContext.Provider>
  )
}

export default PostContextProvider