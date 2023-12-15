import React, { useState } from 'react'
import '../../src/index.css'
import { IoMdArrowDropdown } from "react-icons/io";


const Blog = () => {
    return (
        <div className='blog'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 blog-menu">
                        <ul>
                            <li ><a href="#" className='active'>All Posts(32)</a></li>
                            <li><a href="#">Article</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">Education</a></li>
                            <li><a href="#">Job</a></li>
                        </ul>

                    </div>
                    <div className="col-lg-4 d-flex gap-3 ">
                        <div className='d-flex align-items-center write-post '>
                            <div>Write a Post</div><IoMdArrowDropdown className='down_arrow' />
                        </div>
                        <div className='d-flex align-items-center join-group'>
                            <img src="/assets/user.png" className='user-icon' /><span>Join group</span>
                        </div>
                    </div>
                    {/* <hr className='line' /> */}

                    {/* blog cards */}
                    <div className="d-flex justify-content-between ms-lg-4  ">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="cards">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-9 p-0 ">
                                                <img src="/assets/blog-img-1.png" className='blog-image' />
                                                <div className='ms-4 mt-4 '>
                                                    <p className='article'>✍️ Article</p>
                                                    <div className='d-flex '>
                                                        <p className='tagline'>What if famous brands had regular fonts? Meet RegulaBrands!</p>
                                                        <i class="fa fa-ellipsis-h three-dots"></i>
                                                    </div>
                                                    <p className='description'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                                                    <div className='d-flex justify-content-between'>
                                                        <div className='d-flex'>
                                                            <img src="/assets/thumbnail1.png" className="thumbnail" />
                                                            <h4 className='user-name'>Sarthak Kamra</h4>
                                                        </div>
                                                        <div className='d-flex views justify-content-between '>
                                                            <div className='d-flex justify-content-between '>
                                                                <div className='d-flex'>
                                                                    <span><i className='fa fa-eye'></i></span>
                                                                    <p className='me-4 '>1.4k views</p>
                                                                </div>
                                                                <div className="share">
                                                                    <span><i className='fa fa-share'></i></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="cards">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-9 p-0 ">
                                                <img src="/assets/blog-img-2.png" className='blog-image' />
                                                <div className='ms-4 mt-4 '>
                                                    <p className='article'>🔬️ Education</p>
                                                    <div className='d-flex '>
                                                        <p className='tagline'>Tax Benefits for Investment under National Pension Scheme launched by Government</p>
                                                        <i class="fa fa-ellipsis-h three-dots"></i>
                                                    </div>
                                                    <p className='description'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                                                    <div className='d-flex justify-content-between'>
                                                        <div className='d-flex'>
                                                            <img src="/assets/thumbnail2.png" className="thumbnail" />
                                                            <h4 className='user-name'>Sarah West</h4>
                                                        </div>
                                                        <div className='d-flex views justify-content-between '>
                                                            <div className='d-flex justify-content-between '>
                                                                <div className='d-flex'>
                                                                    <span><i className='fa fa-eye'></i></span>
                                                                    <p className='me-4 '>1.4k views</p>
                                                                </div>
                                                                <div className="share">
                                                                    <span><i className='fa fa-share'></i></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="cards">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-9 p-0 ">
                                                <img src="/assets/blog-img-3.png" className='blog-image' />
                                                <div className='ms-4 mt-4 '>
                                                    <p className='article'>🗓️ Meetup</p>
                                                    <div className='d-flex '>
                                                        <p className='tagline'>Finance & Investment Elite Social Mixer @Lujiazui</p>
                                                        <i class="fa fa-ellipsis-h three-dots" ></i>
                                                    </div>

                                                    <div className='d-flex gap-lg-5 '>
                                                        <div className='d-flex '>
                                                            <i class="fa fa-calendar"></i>
                                                            <p className='date'>Fri, 12 Oct, 2018</p>
                                                        </div>
                                                        <div className='d-flex  '>
                                                            <i class="fa fa-map-marker"></i>
                                                            <p className='city'>Ahmedabad, India</p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <button className='visit-website'>Visit Website</button>
                                                    </div>
                                                    <div className='d-flex justify-content-between'>
                                                        <div className='d-flex mt-3'>
                                                            <img src="/assets/thumbnail3.png" className="thumbnail" />
                                                            <h4 className='user-name'>Sarthak Kamra</h4>
                                                        </div>
                                                        <div className='d-flex views justify-content-between '>
                                                            <div className='d-flex justify-content-between mt-3 '>
                                                                <div className='d-flex '>
                                                                    <span><i className='fa fa-eye'></i></span>
                                                                    <p className='me-4 '>1.4k views</p>
                                                                </div>
                                                                <div className="share">
                                                                    <span><i className='fa fa-share'></i></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="cards-last">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-9 p-0 ">
                                                <div className='ms-4 mt-4 '>
                                                    <p className='article'>💼️ Job</p>
                                                    <div className='d-flex '>
                                                        <p className='tagline'>Software Developer</p>
                                                        <i class="fa fa-ellipsis-h three-dots"></i>
                                                    </div>

                                                    <div className='d-flex gap-lg-5 '>
                                                        <div className='d-flex '>
                                                            <i class="fa fa-shopping-bag"></i>
                                                            <p className='company'>Innovaccer Analytics Private Ltd.</p>
                                                        </div>
                                                        <div className='d-flex  '>
                                                            <i class="fa fa-map-marker"></i>
                                                            <p className='city'>Noida, India</p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <button className='jobs'>Apply on Timesjobs</button>
                                                    </div>
                                                    <div className='d-flex justify-content-between'>
                                                        <div className='d-flex mt-3'>
                                                            <img src="/assets/thumbnail4.png" className="thumbnail" />
                                                            <h4 className='user-name'>Sarthak Kamra</h4>
                                                        </div>
                                                        <div className='d-flex views justify-content-between '>
                                                            <div className='d-flex justify-content-between mt-3 '>
                                                                <div className='d-flex '>
                                                                    <span><i className='fa fa-eye'></i></span>
                                                                    <p className='me-4 '>1.4k views</p>
                                                                </div>
                                                                <div className="share">
                                                                    <span><i className='fa fa-share'></i></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div className="col-md-4 location-card">
                            <div className=" d-flex ms-4 location gap-lg-5">
                                <div className='d-flex  '>
                                    <i className='fa fa-map-marker mt-1'></i>
                                    <p>Noida , India</p>
                                </div>
                                <div className='ms-5'>
                                    <i className='fa fa-pencil'></i>
                                </div>
                            </div>
                            <hr className='line'/>

                            <div className='d-flex gap-2 ms-4 '>
                            <i class="fas fa-exclamation-circle"></i>
                            <p className='para'>Your location will help us serve better and extend a personalised experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Blog