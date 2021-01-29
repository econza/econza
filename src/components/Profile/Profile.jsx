import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import Post from './MyPosts/Post/Post';
import s from './Profile.module.css';

const Profile = () => {
    return      <div className={s.content}>
        <div>
        <img src='https://www.swift.com/sites/default/files/styles/overview_thumbnail_400x225_/public/images/swift-image-lighttrails-car5-1440x600.jpg?itok=axX8aYsj'></img>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts />
    </div>
 }

 export default Profile;