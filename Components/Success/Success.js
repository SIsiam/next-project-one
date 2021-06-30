import React from 'react';
import Image from "next/image";
import img from "../../Images/error.png";
import Button from '@material-ui/core/Button';
import style from "../../styles/compromise.module.css";


const Success = () => {

    return (
        <div className="container">
            <div className={style.success}>

                <div className="text-center">
                    <h2>Our Partners are Catalysts for Success</h2>
                    <p>Industry-leading Technologies and Service Providers</p>
                </div>


                <div className="row">
                    <div className="col-md-3">
                        <Image src={img} alt="Picture of the author" width={100} height={100} />
                    </div>
                    <div className="col-md-3">
                        <Image src={img} alt="Picture of the author" width={100} height={100} />
                    </div>
                    <div className="col-md-2">
                        <Image src={img} alt="Picture of the author" width={100} height={100} />
                    </div>
                    <div className="col-md-2">
                        <Image src={img} alt="Picture of the author" width={100} height={100} />
                    </div>
                    <div className="col-md-2">
                        <Image src={img} alt="Picture of the author" width={100} height={100} />
                    </div>
                </div>

                <div className="text-center">
                    <p>Our Catalysts are partners with years of experience accelerating projects with some of the industrys best-of-breed technologies.</p>
                    <Button variant="outlined" color="secondary">LEARN MORE</Button>
                    <Button variant="outlined" color="secondary">LEARN MORE</Button>
                </div>
            </div>


            <div className="container">
                <div className={style.founding}>
                    <div className="row">
                        <div className="col-md-4">
                            <Image src={img} alt="Picture of the author" width={100} height={100} />
                        </div>
                        <div className="col-md-8">
                            <h5>Contentstack is a founding member of the MACH Alliance, providing the industry leading best-of-breed CMS and Experience Management solutions via microservices, API-first, cloud-native SaaS, and headless technologies.</h5>
                            <Button variant="outlined" color="secondary">LEARN MORE</Button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Success;