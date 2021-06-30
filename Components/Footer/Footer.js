import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGooglePlusG, faGithub, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import style from "../../styles/Footer.module.css";

const Footer = () => {

    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">

                    <div className="col-md-4">
                        <h5>logo</h5>
                        <ul className="social-media list-inline">


                            <li className="list-inline-item">
                                <a href="//google.com">
                                    <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                                </a>
                                facebook
                            </li>

                            <li className="list-inline-item"><a href="//instagram.com">
                                <FontAwesomeIcon className="icon" icon={faInstagram} />
                            </a>facebook</li>

                            <li className="list-inline-item"><a href="//instagram.com">
                                <FontAwesomeIcon className="icon" icon={faGithub} />
                            </a>facebook</li>

                            <li className="list-inline-item"><a href="//instagram.com">
                                <FontAwesomeIcon className="icon" icon={faMicrosoft} />
                            </a>facebook</li>

                        </ul>

                    </div>

                    <div className="col-md-2">
                        <h5>Product</h5>
                        <ul className={style.list}>
                            <li>About</li>
                            <li>News</li>
                            <li>Press</li>
                            <li>Careers</li>
                            <li>Become a Partner</li>
                            <li>Contact US </li>
                        </ul>

                    </div>

                    <div className="col-md-2">
                        <h5>Users</h5>
                        <ul className={style.list}>
                            <li>About</li>
                            <li>News</li>
                            <li>Press</li>
                            <li>Careers</li>
                            <li>Become a Partner</li>
                            <li>Contact US </li>
                        </ul>

                    </div>

                    <div className="col-md-2">
                        <h5>Education</h5>
                        <ul className={style.list}>
                            <li>About</li>
                            <li>News</li>
                            <li>Press</li>
                            <li>Careers</li>
                            <li>Become a Partner</li>
                            <li>Contact US </li>
                        </ul>

                    </div>
                    <div className="col-md-2">
                        <h5>Company</h5>
                        <ul className={style.list}>
                            <li>About</li>
                            <li>News</li>
                            <li>Press</li>
                            <li>Careers</li>
                            <li>Become a Partner</li>
                            <li>Contact US </li>
                        </ul>
                    </div>


                </div>
                <div className="copyRight text-center  p-4">
                    <p>&#169; Copyright Author siam {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;