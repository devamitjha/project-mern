import { createBrowserRouter, RouterProvider, ScrollRestoration, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from './Layout';
import Home from './allPages/mobile/home/Home';
import Post from './allPages/mobile/post/Post';
import PostDetails from './allPages/mobile/postDetails/PostDetails';
import Login from './allPages/mobile/login/Login';
import Register from './allPages/mobile/register/Register';
import Category from './allPages/mobile/category/Category';
import DesktopHome from './allPages/desktop/home/Home';
import DesktopPost from './allPages/desktop/post/Post';
import DesktopPostDetails from './allPages/desktop/postDetails/PostDetails';
import DesktopLogin from './allPages/desktop/login/Login';
import DesktopRegister from './allPages/desktop/register/Register';
import DesktopCategory from './allPages/desktop/category/Category';
import DesktopCategoryByName from './allPages/desktop/category/SingleCategory';
import DesktopAuthor from './allPages/desktop/author/Author';
import DesktopAuthorPosts from './allPages/desktop/author/AuthorPosts';
import DesktopCategoryByTags from './allPages/desktop/tags/TagsByName';
import DashBoard from './allPages/dashboard/DashBoard';
import PageNotFound from './allPages/pageNotFound';
import AllPosts from './allPages/dashboard/AllPosts';
import CreatePosts from './allPages/dashboard/CreatePosts';
import EditPosts from './allPages/dashboard/EditPosts';
import UpdateProfile from './allPages/dashboard/UpdateProfile';
import AllComments from './allPages/dashboard/AllComments';
import ContactForm from './allPages/desktop/contact/ContactForm';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1180);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1180);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define your routes
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <ScrollRestoration />
          <Layout />
        </>
      ),
      children: isMobile
      ? [
          { index: true, element: <Home /> },
          { path: "blog/post", element: <Post /> },
          { path: "blog/post/:category/:title/:id", element: <PostDetails /> },
          { path: "blog/categories", element: <Category /> },
          { path: "login", element: <Login /> },
          { path: "register", element: <Register /> },
          { path: "*", element: <PageNotFound /> },
        ]
      : [
          { index: true, element: <DesktopHome /> },
          { path: "blog/post", element: <DesktopPost /> },
          { path: "blog/post/:category/:title/:id", element: <DesktopPostDetails /> },

          {
            path: "blog/categories",
            element: <DesktopCategory />,
            children: [
              { index: true, element: <DesktopCategoryByName /> }, 
              { path: ":catname", element: <DesktopCategoryByName /> },
            ],
          },       

          { path: "blog/tags/:tag", element: <DesktopCategoryByTags /> },

          { path: "blog/authors", element: <DesktopAuthor /> },
          { path: "blog/authors/:authorname", element: <DesktopAuthorPosts /> },         
          
          { path: "contact", element: <ContactForm /> },
          { path: "login", element: <DesktopLogin /> },
          { path: "register", element: <DesktopRegister /> },


          {
            path: "dashboard",
            element: <DashBoard />,
            children: [
              { index: true, element: <Navigate to="/dashboard/all-posts" replace /> }, 
              { path: "all-posts", element: <AllPosts /> },
              { path: "create-post", element: <CreatePosts /> },
              { path: "edit-post/:title/:id", element: <EditPosts /> },
              { path: "edit-profile", element: <UpdateProfile /> },
              { path: "all-comments", element: <AllComments /> },
            ],
          }, 



          { path: "*", element: <PageNotFound /> },
        ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;