import React, { useState } from 'react';

const PostForm = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [author, setAuthor] = useState(initialData?.author || 'Admin');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title || !content) {
      console.error('Please fill in both title and content.');
      return;
    }
    onSubmit({ ...initialData, title, content, author });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg shadow-md text-xl transition duration-300 ease-in-out transform hover:scale-105">
        {initialData ? 'Update Post' : 'Add Post'}
      </button>
    </form>
  );
};

export default PostForm;