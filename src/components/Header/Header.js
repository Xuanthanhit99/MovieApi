import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";
import user from "../../images/user.png";
import "./Header.scss";

const Header = () => {
  const [search,setSearch] = useState('')
  const dispatch = useDispatch()
  const movieText = 'Harry'
  const showText = 'friends'
  const searchChange = (e) => {
    setSearch(e.target.value)
  }

  const submitHandle = (e) => {
    e.preventDefault()
      dispatch(fetchAsyncMovies(search));
      dispatch(fetchAsyncShows(search));
      setSearch("")
  }

  const homePage = (e) => {
    e.preventDefault()
      dispatch(fetchAsyncMovies(movieText));
      dispatch(fetchAsyncShows(showText));
      setSearch("")
  }
  return (
    <div className="header">
      <Link to="/" onClick={homePage}>
        <div className="logo">Movie App</div>
      </Link>
      <div className="search-bar">
        <form onSubmit={submitHandle}>
          <input type="text" value={search} onChange={searchChange}/>
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
