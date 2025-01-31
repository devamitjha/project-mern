import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./PostDetails.scss"
import BlogSidebar from '../../../components/desktop/BlogSidebar/BlogSidebar';
import SampleImage from "../../../assets/images/avatar-3.jpg";
import Avatar from "../../../assets/images/avatar.jpg";
import TitleDecoration from '../../../components/TitleDecoration';
import FeaturePost from '../../../components/FeaturePost';
import HomeWave from '../../../components/HomeWave';

const AuthorCard = ()=>{  
  return(
    <div className="author-card">
      <div className="author-avatar">
        <img src={SampleImage} alt="author name"/>
      </div>      
      <div className="bio">
        <span>Written By</span>
        <h3>Adriana Martins </h3>
        <p>Hello! My name is Adriana Martins working from Chile. I create some Ghost and Wordpress themes for differents markets, also, i offer live support via our ticket system.</p>
        <div className="btn filled viewAll">View All Posts</div>
      </div>
    </div>
  )
}

const notUser = ()=>{
  return(
      <div className="is-user">
        <h2>Start the conversation</h2>
        <p>Become a member of <strong>DA</strong> to start commenting.</p>
        <div className="btn filled signup">Sign up now</div>
        <span>Already a member? <Link to="/login">Sign in</Link></span>
      </div>
  )
}
const isUser = (id)=>{
  return(
    <div className="conment-input">
      <h3>Responses (10)</h3>
      <form className="comment-form" action="#">
        <textarea className="input-textarea" rows="4" placeholder="Add to discussion" required=""/>
        <div className="btn-group">
          <div className="btn filled">Submit</div>
          <div className="btn outline">Cancel</div>
        </div>
      </form>
    </div>
  )
}

const PostDetails = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState(true);
  const [openReplyId, setOpenReplyId] = useState(null); // Track which comment/reply's reply box is open
  const [replies, setReplies] = useState({}); // Store replies for each comment/reply

  const comments = [
    { id: 1, author: "Adriana Martins", date: "Oct 21, 2023", content: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio." },
    { id: 2, author: "John Doe", date: "Oct 22, 2023", content: "Another comment here." },
    // Add more comments as needed
  ];

  const SubmitReply = (parentId, replyText) => {
    // Add the reply to the replies state
    setReplies((prevReplies) => ({
      ...prevReplies,
      [parentId]: [
        ...(prevReplies[parentId] || []),
        { id: Date.now(), author: "Current User", date: new Date().toLocaleDateString(), content: replyText },
      ],
    }));
    setOpenReplyId(null); // Close the reply box after submitting
  };

  const ReplyComment = (parentId) => {
    if (user) {
      setOpenReplyId(parentId); // Open the reply box for the specific comment/reply
    } else {
      navigate("/login");
    }
  };

  const CancleComment = () => {
    setOpenReplyId(null); // Close the reply box
  };

  // Recursive function to render comments and their replies
  const renderComment = (comment, isReply = false) => (
    <div key={comment.id} className="parent-container">
    <div className={isReply ? "comment-reply replied" : "comment-reply"}>
      <div className="comment-author">
        <img src={Avatar} alt="author" />
      </div>
      <div className="comment-text">
        <div className="author-name">
          <Link to="#">{comment.author}</Link>
          <div className="date"><span className="dot"></span>{comment.date}</div>
        </div>
        <p>{comment.content}</p>

        {/* Reply input box */}
        {user && openReplyId === comment.id && (
          <div className="reply-input">
            <form
              className="comment-form"
              onSubmit={(e) => {
                e.preventDefault();
                const replyText = e.target.reply.value.trim();
                if (replyText) {
                  SubmitReply(comment.id, replyText);
                  e.target.reset(); // Clear the textarea
                }
              }}
            >
              <textarea
                className="input-textarea"
                name="reply"
                rows="4"
                placeholder="Add to discussion"
                required
              />
              <div className="btn-group">
                <button type="submit" className="btn filled">Submit</button>
                <div className="btn outline" onClick={CancleComment}>Cancel</div>
              </div>
            </form>
          </div>
        )}

        {/* Like and Reply buttons */}
        {!openReplyId && (
          <div className="reply-group">
            <div className="like-btn">
              <i className="fa fa-heart-o" />
              <span>20</span>
            </div>
            <div className="like-btn" onClick={() => ReplyComment(comment.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="reply-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path>
              </svg>
              <span>Reply</span>
            </div>
          </div>
        )}        
      </div>
    </div>
    {/* Render replies for this comment */}
    {replies[comment.id] && replies[comment.id].map((reply) => renderComment(reply, true))}
    </div>
  );

  return (
    <div className="content-wrapper post-detail-page">   
      <div classname="full-width" style={{position:'absolute', overflow:'hidden', width:'100%', height:'100vh', top:'0', zIndex:'-1'}}>
        <HomeWave/>
      </div>   
      <div className="container">
        <div className="section-post-title">
          <div className="post-title-container">
            <div className="category-name">
              <h6>Artificial Intelligence</h6>
            </div>
            <h2>Modern and colorful style of caricatures created by AI</h2>
            <div className="section-author">
              <div className="meta">
                <Link to="/" className="author-bio">
                  <span className="img">
                    <img src={Avatar} alt="Author" />
                  </span>
                  <span className="author-name">
                    <p>By <span>Author Name</span></p>
                    <time className="time">
                      <span className="dot"></span>
                      October 21, 2023
                    </time>
                  </span>
                </Link>
               
              </div>
              <div className="social">
                <div className="icon-box value">
                  <i className="fa fa-heart-o"></i>
                  <span>40</span>
                </div>
                <div className="icon-box value">
                  <i className="fa fa-comment-o"></i>
                  <span>20</span>
                </div>
                <div className="icon-box">
                  <i className="fa fa-bookmark-o"></i>
                </div>
                <div className="icon-box">
                  <i className="fa fa-share-square-o"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-blog-post">
          <div className="section-blog-list">
            <div className="post-feature-image">
              <img src={SampleImage} alt="Post Details"/>              
            </div>
            <div className="post-text">
              <p>Caricatures have long been a beloved form of art and satire. With the advent of artificial intelligence (AI), the world of caricatures has witnessed a modern and colorful transformation.</p>
              <p>AI-powered tools and algorithms have redefined caricature creation in novel and exciting ways.</p>
              <p>AI-driven caricature creation represents a digital revolution. Artists and enthusiasts now have access to sophisticated tools that can generate caricatures with remarkable precision, bringing fresh life to this traditional art form.</p>
              <p>Caricatures produced by AI incorporate intricate details and vivid colors, pushing the boundaries of what's possible in caricature art.</p>
            </div>
            <div className="section-tags">
              <ul>
                <li><Link to="#">AI</Link></li>
                <li><Link to="#">Development</Link></li>
                <li><Link to="#">UI Design</Link></li>
                <li><Link to="#">Business</Link></li>
                <li><Link to="#">Business</Link></li>
                <li><Link to="#">Business</Link></li>
                <li><Link to="#">Business</Link></li>
                <li><Link to="#">Business</Link></li>
                <li><Link to="#">Business</Link></li>
                <li><Link to="#">Business</Link></li>
                <li><Link to="#">Business</Link></li>
                <li><Link to="#">Business</Link></li>
                <li><Link to="#">Business</Link></li>
                <li><Link to="#">Business</Link></li>
              </ul>
            </div>
            <div className="post-author">
              <TitleDecoration title="About the Author" size="big"/>
              {AuthorCard()}
            </div>
            <div className="related-article">
              <TitleDecoration title="Related Articles" size="big"/>
              <div className="meta">
                <FeaturePost date={true}/>
                <FeaturePost date={true}/>
              </div>
            </div>
            <div className="post-comment">
              {               
                user ? isUser("id") : notUser()                
              }     
             {comments.map((comment) => renderComment(comment))}  
            </div>
          </div>
          <BlogSidebar/>       
        </div>
      </div>
    </div>
  )
}

export default PostDetails
