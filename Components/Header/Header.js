import React from 'react';
import Nav from '../Navigation/Nav';
import Button from '@material-ui/core/Button';
import Image from 'next/image'
import img from "../../Images/WaveChart_Homepage.jpg";
import Swipper from '../Swipper/Swipper';
import styles from "../../styles/Header.module.css";

const Header = () => {
    return (
        <div>
            {/* navbar  */}
            <Nav />

            <div className={styles.bg}>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>HOW DOES TRADITIONAL CMS MANAGE TO MANAGE SO BADLY?</h1>
                            <p>See how to empower teams, free developers, and get more done faster with headless, agile CMS.</p>
                            <Button variant="outlined" color="secondary">LEARN MORE</Button>
                        </div>
                        <div className="col-md-6">
                         
                        </div>
                    </div>
                </div>
            </div>

            {/* Swipper  */}

            <div className="mt-5 p-3">
                <Swipper />
            </div>

            {/* after Swipper Section  */}

            <div className={styles.chartSection}>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <Image
                                src={img}
                                alt="Picture of the author"
                                width={350}
                                height={350}
                            />
                        </div>

                        <div className="col-md-6">
                            <h1>Contentstack named a Strong Performer in the Forrester Wave for Agile CMS</h1>
                            <p>Contentstack named a Strong Performer in the Forrester Wave™ : Agile Content Management Systems (CMSes), Q1 2021</p>
                            <Button variant="outlined" color="secondary">LEARN MORE</Button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Header;