import React from 'react';
import PostLists from '../../../components/mobile/PostLists/PostLists';
import Trending from '../../../components/mobile/Ttrending/Trending';
import "./Search.scss";

const Search = () => {
  return (
    <div className="search-page">
      <div class="title-large">
        <div class="title-large-text">Search</div>
      </div>
      <form>
        <div className="search-input">
          <div className="input-group">
            <span className="icon-box"><i className="fa fa-search"/></span>
            <input type="search" placeholder="Search" className="search-input"/>
            <div className="btn filled searchbtn">Search</div>
          </div>
        </div>
      </form>
      
      <Trending title="Categories"/>
      <PostLists title="Suggested" type="post"/>
    </div>
  )
}

export default Search
