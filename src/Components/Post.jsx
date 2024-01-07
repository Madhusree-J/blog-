import React, { useState } from 'react';
import { createBlogPost } from './firebase-service';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleCreatePost = async () => {
        try {
            await createBlogPost(title, content);
            console.log('Blog post created successfully!');
        } catch (error) {
            console.error('Error creating blog post:', error.message);
        }
    };

    return (
        <div>
            <h2>Create Blog Post</h2>
            <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Content" onChange={(e) => setContent(e.target.value)} />
            <button onClick={handleCreatePost}>Create Post</button>
        </div>
    );
};

export default CreatePost;