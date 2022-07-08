import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import loadingGif from '../assets/loading.gif'
const About = () => {
  const [profile, setProfile] = useState()
  const [loading, setLoading] = useState(true)
  async function getUser() {
    try {
      const profile = await axios.get(
        'https://api.github.com/users/selman-s?client_id=3b925c08aab40ac38d05&client_secret=31be1b1285e20f238e8777adb3bc11907739a47b'
      )
      setProfile(profile)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getUser()
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div>
      {loading ? (
        <div>
          <img src={loadingGif} alt="loading..." />
        </div>
      ) : (
        <div className="about-main">
          <div className="main">
            <div className="cart-top bg-info">
              <div className="profile-img">
                <img src={profile.data.avatar_url} alt="ss" />
              </div>
            </div>
            <div className="cart-bottom">
              <div className="desc">
                <div className="desc-name">
                  <p className="user-name">{profile.data.name}</p>
                </div>
                <Link className="link bg-info" to={profile.data.html_url}>
                  View Profile
                </Link>
                <div className="fans">
                  <div className="fans-div">
                    <p className="quantity">{profile.data.public_repos}</p>
                    <p className="fan">Public Repos</p>
                  </div>
                  <div className="fans-div">
                    <p className="quantity">{profile.data.followers}</p>
                    <p className="fan">Followwers</p>
                  </div>
                  <div className="fans-div">
                    <p className="quantity">{profile.data.following}</p>
                    <p className="fan">Followings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default About
