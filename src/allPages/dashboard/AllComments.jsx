import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./DashBoard.scss";
import Avatar from "../../assets/images/avatar.jpg";
import LoadingState from "../../Utility/LoadingState";

const AllComments = () => {
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
    <div className="all-comments">
      <table className="blog-table">
        <thead>
          <tr>
            <th>Comment</th>
            <th>Post Name</th>
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
                  <div className="comment-container">                   
                    <div className="comment-title">{post.title}</div>
                  </div>
                </td>
                <td>
                    <div className="comment-container">                   
                        <div className="post-title">{post.title}</div>
                    </div>
                </td>
                <td>date</td>
                <td>
                <div className="btn-group">
                  <div className="btn outline edit-btn" onClick={()=>EditBlog(post.id)}>Approve</div>
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

export default AllComments;
