// src/components/Profile.js
import React from 'react';
import profileData from './data/profileData.json';
import './Profile.css';
import img from './ttt.svg';
import cover from './cover.avif';
import profileImage from './profile.jpeg';
import insta from './insta.png';
import love from './love.png';
import likes from './likes.png';
import stars from './stars.png';
import views from './views.png'
const Profile = () => {
    return (
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <img className="logo-img" src={img} alt="Profile" />
                </div>
                <div className='line'>
                    
                </div>
                <div className="heading">
                    <h2>S T O R I E S</h2>
                </div>
                <div className="btn">
                    <button>Courses</button>
                </div>
            </div>
            <div className="profile-container">
                <div className="coverImage">
                    <img src={cover} alt="Cover" />
                </div>
                <div className="profile-details_1">
                    <div className='profile-image'>
                        <img src={profileImage} alt="Profile" />
                    </div>

                    <div>
                        <h2>{profileData.name}</h2>
                    </div>
                </div>
                <div className="profile-stats">
                    <div className='post'>
                        <button><strong>{profileData.posts}</strong></button> posts
                    </div>
                    <div>
                        <button><strong>{profileData.followers}</strong></button> followers
                    </div>
                    <div>
                        <button><strong>{profileData.following}</strong> </button>following
                    </div>
                </div>
                <div className="profile-details_2">
                    <div className='bio'>
                        <p>{profileData.bio}</p>
                    </div>
                    <div className="instagram">
                        <img src={insta} alt="" />
                        <a href="https://www.instagram.com/anujgosalia"><span>instagram</span></a>
                    </div>
                    <div className="icons">
                        <div className="icon">
                            <img src={stars} alt="" />
                            <span>{profileData.stars}</span>
                        </div>
                        <div className="icon">
                            <img src={likes} alt="" />
                            <span>{profileData.likes}</span>
                        </div>
                        <div className="icon">
                            <img src={views} alt="" />
                            <span>{profileData.view}k</span>
                        </div>
                        <div className="icon">
                            <img src={love} alt="" />
                            <span>{profileData.love}k</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;



