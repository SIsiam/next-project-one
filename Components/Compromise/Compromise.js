/* eslint-disable react/no-unescaped-entities */

import React, { useState, useEffect } from 'react';
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/css/modal-video.min.css";
import YouTubeIcon from '@material-ui/icons/YouTube';
import Button from '@material-ui/core/Button';
import style from "../../styles/compromise.module.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


const Compromise = () => {
    const [isOpen, setOpen] = useState(false);


    return (
        <div className={style.bg}>
            {/* 
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6 text-light">
                            <h2>Care Without CompromiseTM</h2>
                            <h3>We&apos;re obsessed with our customer&apos;s success</h3>
                            <p>Our Customer Care team provides exceptional whiteglove service with unprecedented response time to support customers goals.</p>
                            <Button variant="outlined" color="secondary">LEARN MORE</Button>
                        </div>

                        <div className="col-md-6">
                            <div className={style.video}>

                                <React.Fragment>
                                    <ModalVideo
                                        channel="youtube"
                                        autoplay
                                        isOpen={isOpen}
                                        videoId="5Piwk5gRJfY"
                                        onClose={() => setOpen(false)}
                                    />

                                    <button className="btn-primary" onClick={() => setOpen(true)}>
                                        <YouTubeIcon fontSize="large" />
                                    </button>
                                </React.Fragment>
                            </div>

                        </div>
                    </div>
                </div>
            </div> */}




            <div>

                <div className="">
                    <div className="container mt-5">

                        <div className={style.container}>
                            <div className={style.Mainindex}>
                                <div className="text-light">
                                    <h2>Care Without CompromiseTM</h2>
                                    <h3>We&apos;re obsessed with our customer&apos;s success</h3>
                                    <p>Our Customer Care team provides exceptional whiteglove service with unprecedented response time to support customers goals.</p>
                                    <Button variant="outlined" color="secondary">LEARN MORE</Button>
                                </div>

                            </div>


                            <div className={style.video}>

                                <React.Fragment>
                                    <ModalVideo
                                        channel="youtube"
                                        autoplay
                                        isOpen={isOpen}
                                        videoId="5Piwk5gRJfY"
                                        onClose={() => setOpen(false)}
                                    />
                                    <button className={style.videoBtn} onClick={() => setOpen(true)}>
                                        <div className="bg-warning">
                                            <YouTubeIcon fontSize="large" />
                                        </div>
                                    </button>
                                </React.Fragment>

                            </div>
                        </div>
                    </div>
                </div>

            </div>



































            <div className="container mt-5 mb-5">
                <Swiper
                    className="mySwiper"
                    slidesPerView={2}
                    spaceBetween={50}
                    clickable={true}
                    pagination={true}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}>

                    <SwiperSlide>
                        <div className={style.swipper}>
                            <h2>Ellie Mae</h2>
                            <h3>Financial Services</h3>
                            <p>"Contentstack isn't just a CMS of today. It's the CMS of the future. I don't know how we operated without Contentstack."</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={style.swipper}>
                            <h2>Ellie Mae</h2>
                            <h3>Financial Services</h3>
                            <p>"Contentstack isn't just a CMS of today. It's the CMS of the future. I don't know how we operated without Contentstack."</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={style.swipper}>
                            <h2>Ellie Mae</h2>
                            <h3>Financial Services</h3>
                            <p>"Contentstack isn't just a CMS of today. It's the CMS of the future. I don't know how we operated without Contentstack."</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={style.swipper}>
                            <h2>Ellie Mae</h2>
                            <h3>Financial Services</h3>
                            <p>"Contentstack isn't just a CMS of today. It's the CMS of the future. I don't know how we operated without Contentstack."</p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

        </div>
    );
};

export default Compromise;