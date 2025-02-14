import React, { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const CreatePosts = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postExcerpt, setPostExcerpt] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [featuredImage, setFeaturedImage] = useState(null);
  const [featuredImagePreview, setFeaturedImagePreview] = useState(null);
  const [postContent, setPostContent] = useState('');

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image'],
      ],
    },
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Validate file type & size
      const allowedTypes = ['image/png', 'image/jpeg', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        alert('Only PNG, JPG, and GIF files are allowed.');
        return;
      }

      if (file.size > 2 * 1024 * 1024) {
        alert('File size must be less than 2MB.');
        return;
      }

      setFeaturedImage(file);
      setFeaturedImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', postTitle);
    formData.append('excerpt', postExcerpt);
    formData.append('category', category);
    formData.append('tags', tags);
    formData.append('content', postContent);
    if (featuredImage) {
      formData.append('featuredImage', featuredImage);
    }

    console.log('Form Data:');
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    // Reset form fields after submission
    setPostTitle('');
    setPostExcerpt('');
    setCategory('');
    setTags('');
    setFeaturedImage(null);
    setFeaturedImagePreview(null);
    setPostContent('');
  };


  return (
    <div className="create-post">
      <form onSubmit={handleSubmit} className="create-post-form">
        <div className="input-container">
          <label>Post Title:</label>
          <input type="text" value={postTitle} onChange={(e) => setPostTitle(e.target.value)} required/>
        </div>
        <div className="input-container text-area">
          <label>Post Excerpt:</label>
          <textarea value={postExcerpt} onChange={(e) => setPostExcerpt(e.target.value)} required />
          <p>Brief description for your article. URLs are hyperlinked.</p>
        </div>
        <div className="input-container group">
          <div className="item category-selection">
            <label>Category:</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} required>
              <option value="">Select Category</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
              <option value="Business">Business</option>
            </select>
          </div>
          <div className="item tags-container">
            <label>Tags (comma separated):</label>
            <input type="text" value={tags} onChange={(e) => setTags(e.target.value)}/>
          </div>
        </div>
        <div className="input-container">
          <label>Featured Image:</label>
          <div className="file-group" onClick={() => document.getElementById('fileInput').click()}>
            <input id="fileInput" type="file" accept="image/png, image/jpeg, image/gif" onChange={handleFileChange} style={{ display: 'none' }}/>
            {featuredImagePreview ? (
                <img src={featuredImagePreview} alt="Preview" style={{ maxWidth: '100%', height: '150px', objectFit: 'contain' }}/>
              ) : (
                <p>
                  <strong>Upload a file</strong> or drag and drop                
                  <small>PNG, JPG, GIF up to 2MB</small>
                </p>
              )}
          </div>
        </div>
        <div className="input-container post-content">
          <label>Post Content:</label>
          <ReactQuill
            theme="snow"
            value={postContent}
            onChange={setPostContent}
            modules={modules}
            className="richText"
          />
        </div>
        <button type="submit" className="btn filled submit-button">
          Submit Post
        </button>
      </form>
    </div>
  );
};

export default CreatePosts;
