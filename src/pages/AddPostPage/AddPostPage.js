import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';

const AddPost = () =>{
    useProtectedPage()
    return (
        <div>
            <h1>Add Post</h1>
        </div>
    )
}
export default AddPost;