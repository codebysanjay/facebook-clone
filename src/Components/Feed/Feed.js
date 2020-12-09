import React from 'react';
import './Feed.css';
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';
import StoryReel from './StoryReel/StoryReel';

function Feed() {
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender/>
            
            <Post/>
            <Post/>
            <Post/>
            
        </div>
    )
}

export default Feed
