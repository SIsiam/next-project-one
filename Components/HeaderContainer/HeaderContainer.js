import React, { useState, useEffect } from 'react';
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/css/modal-video.min.css";
import YouTubeIcon from '@material-ui/icons/YouTube';
import style from "../../styles/HeaderContainer.module.css";

const HeaderContainer = () => {
    const [isOpen, setOpen] = useState(false);


    return (
        <div>

            <div className="">
                <div className="container mt-5">
                    <h1>Why Choose Contentstack?</h1>

                    <div className={style.container}>
                        <div className={style.Mainindex}>
                            <div className={style.index}>
                                <h3>Creating Content Faster</h3>
                                <p>Contentstack named a Strong Performer in the Forrester Wave for Agile CMS</p>
                            </div>
                            <div className={style.index}>
                                <h3>Managing Content Easier</h3>
                                <p>Contentstack named a Strong Performer in the Forrester Wave for Agile CMS</p>
                            </div>
                            <div className={style.index}>
                                <h3>Made for the Enterprise</h3>
                                <p>Contentstack named a Strong Performer in the Forrester Wave for Agile CMS</p>
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
    );
};

export default HeaderContainer;