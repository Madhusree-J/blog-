import React, { useEffect, useState } from 'react';
import { getBlogPosts } from './firebase-service';

const Blog = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            const posts = await getBlogPosts();
            setBlogPosts(posts);
        };

        fetchBlogPosts();
    }, []);

    return (
        <div>
            <h1>My Blog</h1>
            <ul>
                {blogPosts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blog;