import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import Layout from "./Layout";
import Home from "./allPages/mobile/home/Home";
import Post from "./allPages/mobile/post/Post";
import PostDetails from "./allPages/mobile/postDetails/PostDetails";
import Login from "./allPages/mobile/login/Login";
import Register from "./allPages/mobile/register/Register";
import Category from "./allPages/mobile/category/Category";

import DesktopHome from "./allPages/desktop/home/Home";
import DesktopPost from "./allPages/desktop/post/Post";
import DesktopPostDetails from "./allPages/desktop/postDetails/PostDetails";
import DesktopLogin from "./allPages/desktop/login/Login";
import DesktopRegister from "./allPages/desktop/register/Register";
import DesktopCategory from "./allPages/desktop/category/Category";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1180);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1180);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {isMobile ? (
          <>
            <Route index element={<Home />} />
            <Route path="blog/post" element={<Post />} />
            <Route
              path="blog/post/:category/:title/:id"
              element={<PostDetails />}
            />
            <Route path="blog/categories" element={<Category />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </>
        ) : (
          <>
            <Route index element={<DesktopHome />} />
            <Route path="blog/post" element={<DesktopPost />} />
            <Route
              path="blog/post/:category/:title/:id"
              element={<DesktopPostDetails />}
            />
            <Route path="blog/categories" element={<DesktopCategory />} />
            <Route path="login" element={<DesktopLogin />} />
            <Route path="register" element={<DesktopRegister />} />
          </>
        )}
      </Route>
    </Routes>
  );
}

export default App;
