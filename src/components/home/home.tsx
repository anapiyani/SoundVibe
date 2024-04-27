import React from "react";
import './home.scss';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import HeadsetIcon from '@mui/icons-material/Headset';

const Home = () => {
    return (
        <div className="home">
            <div className="content">
                <div className="texts">
                    <h1 className="greeting">Hello & Welcome!</h1>
                    <h3 className="about">Created using <span className="react">REACT</span> + <span className="spotify">SPOTIFY API</span></h3>
                    <Link to="/search"><Button variant="outlined" endIcon={<HeadsetIcon />}>GET TO SEARCH</Button></Link>
                    <p className="goon">Go and search for your favorite songs</p>
                </div>
            </div>
        </div>
    )
}

export default Home;