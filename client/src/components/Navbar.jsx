import React from 'react';
import video from '../assets/video.mp4';

const Navbar = () => {
    return (
        <header id="header">
            <video className="nav-video" muted loop autoPlay>
                <source src={video}/>
            </video>
            <h1>My Thought Journal</h1>
        </header>
    )
}

export default Navbar
