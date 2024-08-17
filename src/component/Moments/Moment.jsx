import React from 'react'
import './moment.css'
import vidoe1 from '../../Assets/video4.mp4'
import vidoe2 from '../../Assets/video2.mp4'
import vidoe3 from '../../Assets/video3.mp4'
import moment from '../../Assets/citie3.jpg'
import moment2 from '../../Assets/citie4.jpg'
// import ReactPlayer from 'react-player'
// import cloudinary from 'cloudinary-video-player';
import "cloudinary-video-player/cld-video-player.min.css";
function Moment() {
  return (
    <div>
      <section className='moment'>
        <div className="secmement">
          <div className="secmomenttitle">
            <h2 className="secTitlemoment">
              Travel Moments
            </h2>
            <div className='histro '>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero quis dolor iure necessitatibus quisquam. Nam quibusdam odio possimus facilis libero.
            </div>
          </div>
          <div className="videosecg">
            <div className="video">
              <div className="videocount">
                <video src={vidoe1} controls width="35%"></video>
              </div>
            </div>
            <div className="video">
              <div className="videocount">
                <video src={vidoe2} controls width="35%"></video>
              </div>
            </div>
            <div className="video">
              <div className="videocount">
                <video src={vidoe3} controls width="35%"></video>
              </div>
            </div>

          </div>


        </div>

        <div className="bestMoment">
          <div className="momentView">
            <div className="videocountMoment">
              <div className="image">
                <img src={moment} alt="" />
              </div>
              <div className="momentTex">
                <div className="title">
                  <h5>Hurry Up</h5>
                  <h4>Best deal Asia tours</h4>
                  <button className='btn flex'>
                    Explore Tour
                    {/* <BsArrowRightShort className='icon' /> */}
                  </button>
                </div>
              </div>
            </div>

            <div className="videocountMoment">
              <div className="image">
                <img src={moment2} alt="" />
              </div>
              <div className="title">
                <h5>Hurry Up</h5>
                <h4>Best Deal for Europe tours</h4>
                <button className='btn flex'>
                  Explore Tour
                  {/* <BsArrowRightShort className='icon' /> */}
                </button>
              </div>
            </div>


          </div>
        </div>
      </section>
    </div>
  )
}

export default Moment