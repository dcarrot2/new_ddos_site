import { createAction } from 'redux-actions';
import {
    BLOG_POSTS_REQUEST,
    BLOG_POSTS_SUCCESS,
    BLOG_POSTS_FAILURE
} from './types';

const blogRequest = createAction(BLOG_POSTS_REQUEST);
const blogRequestSuccess = createAction(BLOG_POSTS_SUCCESS);
const blogRequestFailure = createAction(BLOG_POSTS_FAILURE);

export function requestBlogs() {
    return dispatch => {
        // API call goes here
    }
}
