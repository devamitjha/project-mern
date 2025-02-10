import React from 'react';
import "./DashBoard.scss";
import Avatar from "../../assets/images/avatar.jpg";

const AllPosts = () => {
  return (
    <div className="all-posts">
      <table className="blog-table">
        <thead>
          <tr>
            <th>Article</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>
                <div className="post-container">
                  <div className="post-image">
                    <img src={Avatar} alt="Post Image"/>
                  </div>
                  <div className="post-title">Tokyo Fashion Week Is Making Itself Great Again</div>
                </div>
              </td>
              <td><div className="state active">Active</div></td>
              <td>date</td>
              <td>
               <div className="btn-group">
                <div className="btn outline edit-btn">Edit</div>
                <div className="btn outline delete-btn">Delete</div>
               </div>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AllPosts
