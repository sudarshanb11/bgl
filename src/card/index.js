import React from 'react'
import './card.scss'
import profileImage from '../assets/images/image-profile.png'


const Card = () => {
    return (
        <div className='card'>
            <div className='card-media'>
                <div className='card-profilepic'>
                    <img src={profileImage} alt='profile' />
                </div>   
            </div>
            <div className='card-container'>
                <h2>Welcome back Mark</h2>
                <p>
                    Nice to see you back, a few things have changed since your last year visit. so sit back and we'll show you whats new.
                </p>
                <button className='btn btn-block btn-blue'>OK let's do this</button>
                <button className='btn btn-block btn-white'>Not right now</button>
            </div>
        </div>
    )
}

export default Card
