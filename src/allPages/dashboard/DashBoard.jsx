import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import "./DashBoard.scss";

const DashBoard = () => {
  return (
    <div className="container page-dashboard">
        <div className="dashboard-header">
            <h2>Dash board</h2>
            <p>View your dashboard, manage your posts, subscription and edit and profile.</p>
        </div>
        <div className="dashboard-content">
            <div className="dashboard-sidebar">
                <ul>
                    <li><NavLink to="/dashboard/all-posts" end>All Posts</NavLink></li>
                    <li><NavLink to="/dashboard/create-post" end>Create Post</NavLink></li>
                    <li><NavLink to="/dashboard/edit-profile" end>Edit Profile</NavLink></li>
                </ul>
            </div>
            <div className="dashboard-content-section">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default DashBoard
