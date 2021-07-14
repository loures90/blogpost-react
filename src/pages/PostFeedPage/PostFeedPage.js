import React from 'react';
import Button from '@material-ui/core/Button';
import useProtectedPage from '../../hooks/useProtectedPage';

const PostFeed = () => {
    useProtectedPage()
    return (
        <div>
            <h1>Post Feed</h1>
            <Button variant="contained" color="primary">
                Primary
            </Button>
        </div>
    )
}
export default PostFeed;