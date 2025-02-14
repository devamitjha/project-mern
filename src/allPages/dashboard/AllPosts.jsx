import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./DashBoard.scss";
import Avatar from "../../assets/images/avatar.jpg";
import LoadingState from "../../Utility/LoadingState";

const AllPosts = () => {
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 2; // Change this if needed

  // Fetch posts from API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/posts");
        setPosts(response.data.posts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(true);
      }
    };

    fetchPosts();
  }, []);

  // Calculate pagination details
  const offset = currentPage * postsPerPage;
  const currentPosts = posts.slice(offset, offset + postsPerPage);
  const pageCount = Math.ceil(posts.length / postsPerPage);

  // Handle page change
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const EditBlog = (id)=>{
    alert(id);
  }

  const DeleteBlog = (id)=>{
    alert(id);
  }

 

  return (
    <div className="all-posts">
      <table className="blog-table">
        <thead>
          <tr>
            <th>Article</th>
            <th>Author</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
         {
            loading ? <LoadingState type="card"/> :         
            currentPosts.map((post) => (
              <tr key={post.id}>
                <td>
                  <div className="post-container">
                    <div className="post-image">
                      <img src={Avatar} alt="Post Image"/>
                    </div>
                    <div className="post-title">{post.title}</div>
                  </div>
                </td>
                <td>Author</td>
                <td><div className="state active">Active</div></td>
                <td>date</td>
                <td>
                <div className="btn-group">
                  <div className="btn outline edit-btn" onClick={()=>EditBlog(post.id)}>Edit</div>
                  <div className="btn outline delete-btn" onClick={()=>DeleteBlog(post.id)}>Delete</div>
                </div>
                </td>
              </tr>
            ))
          }
        
        </tbody>
      </table>

      {/* Pagination Component */}
      <ReactPaginate
        previousLabel={"← Prev"}
        nextLabel={"Next →"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default AllPosts;
