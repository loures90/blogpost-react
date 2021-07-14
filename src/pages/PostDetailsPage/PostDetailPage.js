import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';

const PostDetails = () =>{
    useProtectedPage()
    return (
        <div>
            <h1>Post Details</h1>
        </div>
    )
}
export default PostDetails;