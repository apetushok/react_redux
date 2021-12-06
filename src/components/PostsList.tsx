import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActionCreators} from "../hooks/useActionCreator";

const PostsList = () => {
    const {fetchPosts} = useActionCreators()
    const {userId, isLoading, error, posts} = useTypedSelector(state => state.postsState)

    useEffect(() => {
        fetchPosts(userId)
    }, [userId])

    if(isLoading) {
        return <div>Loading...</div>
    }
    if(error) {
        return <div>{error}</div>
    }
    return (
        <div className="posts-list">
            <h3>Posts list</h3>
            {posts.map(post =>
                <div className="post-block" key={post.id}>{post.title}</div>
            )}
        </div>
    );
};

export default PostsList;