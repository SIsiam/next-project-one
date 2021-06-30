import React from 'react';
import Button from '@material-ui/core/Button';
import Image from "next/image";
import img1 from "../../Images/1.png";
import img2 from "../../Images/2.png";
import img3 from "../../Images/3.png";
import img4 from "../../Images/4.png";
import img5 from "../../Images/5.png";
import img6 from "../../Images/6.png";



const Integration = () => {
    return (
        <div className="container">
            <div className="text-center">
                <h2>Integrations for Every Industry</h2>
                <p>Our API-first headless CMS makes it easy. Easily integrate your preferred business and marketing technologies to meet your needs.</p>
                <Button variant="outlined" color="secondary">LEARN MORE</Button>
            </div>
            <div className="row">
                <div className="d-flex bd-highlight mb-3">
                    <div className="p-2 bd-highlight">
                        <Image
                            src={img1}
                            alt="Picture of the author"
                            width={160}
                            height={160}
                        />
                    </div>
                    <div className="p-2 bd-highlight">
                        <Image
                            src={img2}
                            alt="Picture of the author"
                            width={160}
                            height={160}
                        />
                    </div>
                    <div className="p-2 bd-highlight">
                        <Image
                            src={img3}
                            alt="Picture of the author"
                            width={160}
                            height={160}
                        />
                    </div>
                    <div className="p-2 bd-highlight">
                        <Image
                            src={img4}
                            alt="Picture of the author"
                            width={160}
                            height={160}
                        />
                    </div>
                    <div className="p-2 bd-highlight">
                        <Image
                            src={img5}
                            alt="Picture of the author"
                            width={160}
                            height={160}
                        />
                    </div>
                    <div className="p-2 bd-highlight">
                        <Image
                            src={img6}
                            alt="Picture of the author"
                            width={160}
                            height={160}
                        />
                    </div>

                </div>








                <div className="d-flex bd-highlight mb-3">
                    <div className="p-2 bd-highlight">
                        <Image
                            src={img1}
                            alt="Picture of the author"
                            width={160}
                            height={160}
                        />
                    </div>
                    <div className="p-2 bd-highlight">
                        <Image
                            src={img2}
                            alt="Picture of the author"
                            width={160}
                            height={160}
                        />
                    </div>
                    <div className="p-2 bd-highlight">
                        <Image
                            src={img3}
                            alt="Picture of the author"
                            width={160}
                            height={160}
                        />
                    </div>
                    <div className="p-2 bd-highlight">
                        <Image
                            src={img4}
                            alt="Picture of the author"
                            width={160}
                            height={160}
                        />
                    </div>
                    <div className="p-2 bd-highlight">
                        <Image
                            src={img5}
                            alt="Picture of the author"
                            width={160}
                            height={160}
                        />
                    </div>
                    <div className="p-2 bd-highlight">
                        <Image
                            src={img6}
                            alt="Picture of the author"
                            width={160}
                            height={160}
                        />
                    </div>

                </div>



            </div>
        </div >
    );
};

export default Integration;