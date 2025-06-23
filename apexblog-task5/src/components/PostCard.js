import React from 'react';

const PostCard = ({ post, onEdit, onDelete }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] border-t-4 border-blue-500">
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h3>
      <p className="text-gray-700 mb-4 line-clamp-3">{post.content}</p>
    </div>
    <div className="text-sm text-gray-500 mb-4">By: <span className="font-semibold">{post.author}</span> on {post.createdAt}</div>
    <div className="flex justify-end space-x-3 mt-auto">
      <button onClick={() => onEdit(post)} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">Edit</button>
      <button onClick={() => onDelete(post.id)} className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">Delete</button>
    </div>
  </div>
);

export default PostCard;