import { createContext, useReducer, useContext } from "react";
import { postReducer } from "../reducer/postReducer";
import { apiUrl } from "./constants";
import axios from "axios";

export const PostContext = createContext()

const PostContextProvider = ({children}) => {

// State
const [postState, dispath] = useReducer(postReducer, {
  post:[],
  postloading: true
})

// Get All Post
const getPosts = async () => {
  try {
    const response = await axios.get(`${apiUrl}/post`)
    if (response.data.success) {
      dispath({type: 'POST_LOADED_SUCCESS', payload: response.data.posts})
    }
  } catch (error) {
    return error.response.data ? error.response.data : { success: false, message: 'Server Error' }
  }
}

// Post context data
const PostContextData = { postState, getPosts }

  return (
    <PostContext.Provider value={PostContextData}>
      {children}
    </PostContext.Provider>
  )
}

export default PostContextProvider