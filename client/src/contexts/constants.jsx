export const apiUrl = process.env.NODE_ENV !== 'production'
  ? 'https://dry-thicket-42484.herokuapp.com/'
  // ? 'http://localhost:5000/api'
  : 'https://dry-thicket-42484.herokuapp.com/'
// : 'https://frozen-anchorage-71281.herokuapp.com/api'

export const LOCAL_STORAGE_TOKEN_NAME = 'learn-mern'

export const POSTS_LOADED_SUCCESS = 'POSTS_LOADED_SUCCESS'

export const POSTS_LOADED_FAIL = 'POSTS_LOADED_FAIL'

export const ADD_POST = 'ADD_POST'
export const FIND_POST = 'FIND_POST'
export const DELETE_POST = 'DELETE_POST'
export const UPDATE_POST = 'UPDATE_POST'