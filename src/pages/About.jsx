import React from 'react'
import './About.scss'
import img2 from '../icons/Image3.png'
import box1 from '../icons/about-box1.png'
import box2 from '../icons/about-box2.png'
import box3 from '../icons/about-box3.png'
import box4 from '../icons/about-box4.png'

const About = () => {
    return (
        <div className='about'>
            <div className="box1">
                <h1>A brand built on the love of craftmanship, <br />
                    quality and outstanding customer service</h1>
                <button>View our products</button>
            </div>
            <div className="box2">
                <div className="text">
                    <h3>It started with a small idea</h3>
                    <p>A global brand with local beginnings, our story begain in a <br />
                        small studio in South London in early 2014</p>
                    <button>View collection</button>
                </div>
                <img src='https://s3-alpha-sig.figma.com/img/d37e/124a/23bc7512aabb96d158dbac6d898734fb?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GKl4ziw5-ZR~WMoSTs1srlvPJA~f2UpXaHdDvbFPAXsb53JH6EgB8IO-76d4wNWm565LcRdmO2OI3WsLZSapsOH0me8xi5ZbrEBciXZppMoPMA14FPor~iBNSsynE1aURYzcxUg1SE~PR~x4qgk3Af7pycDcqSay2wmE~nEk0kL6rzqM6aC0M-OmivJqaapVibs-eGZcu23TT8WzfxV7ubJ8t0zP22h8~7INnXr-ZsXPbpGTOGoctHInVkamMF8dtXjeXRGEypqk1Ti~rdzZRCDp8YDnu3yxZRTo-g60Z1f7XlT-YSfWtz88SHpSB02lasuhiN1Rb191BfYJ2oAVXw__' alt="" />
            </div>
            <div className="box3">
                <img src={img2} alt="" />
                <div className="text">
                    <h3>From a studio in London to a global brand with <br />
                        over 400 outlets</h3>
                    <p>When we started Avion, the idea was simple. Make high quality furniture <br />
                        affordable and available for the mass market. <br /><br />
                        Handmade, and lovingly crafted furniture and homeware is what we live, <br />
                        breathe and design so our Chelsea boutique become the hotbed for the <br />
                        London interior design community.</p>
                    <button>Get in touch</button>
                </div>
            </div>
            <div className="about">
                <h2>What makes our brand different</h2>
                <div className="boxes">
                    <div className="box">
                        <img src={box1} alt="" />
                        <h6>Next day as standard</h6>
                        <p>Order before 3pm and get your order <br />
                            the next day as standard</p>
                    </div>
                    <div className="box">
                        <img src={box2} alt="" />
                        <h6>Made by true artisans</h6>
                        <p>Handmade crafted goods made with  <br />
                            real passion and craftmanship</p>
                    </div>
                    <div className="box">
                        <img src={box3} alt="" />
                        <h6>Unbeatable prices</h6>
                        <p>For our materials and quality you <br /> won’t find better prices anywhere</p>
                    </div>
                    <div className="box">
                        <img src={box4} alt="" />
                        <h6>Recycled packaging</h6>
                        <p>We use 100% recycled packaging to <br /> ensure our footprint is manageable</p>
                    </div>
                </div>
            </div>
            <div className="end">
                <h2>Join the club and get the benefits</h2>
                <p>Sign up for our newsletter and receive exclusive offers on new <br />
                    ranges, sales, pop up stores and more</p>
                <div className="join">
                    <input type="text" placeholder='your@email.com' />
                    <button>Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default About