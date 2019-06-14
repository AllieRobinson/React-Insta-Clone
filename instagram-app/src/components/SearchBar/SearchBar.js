import React from 'react';
import './searchbar.css';

const SearchBar = () => {
    return (
    <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="col-sm">
                    <div className="paddingline">
                        <i className="fab fa-instagram"></i>
                    </div> 
                    <a className="navbar-brand" href="#">Instagram</a>
                </div>
                <div className="col-sm">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search"></input>
                        <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                </div>
                <div className="col-sm">
                    <i className="far fa-compass"></i>
                    <i className="far fa-heart"></i>
                    <i className="far fa-user"></i>
                </div>
            </nav>
    </div>
    );
};

export default SearchBar;