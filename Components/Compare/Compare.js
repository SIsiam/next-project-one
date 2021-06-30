import Button from '@material-ui/core/Button';
import Image from "next/image";
import img from "../../Images/error.png";
import style from "../../styles/compaire.module.css";

const Compare = () => {
    return (
        <div className={style.bg}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Image
                            src={img}
                            alt="Picture of the author"
                            width={500}
                            height={500}
                        />
                        <h2 className="text-light">Developers</h2>
                        <h3 className="text-light">Free to Build. Freed from fixes.</h3>
                        <p className="text-light">Finally developers can build cool digital experiences faster with an agnostic framework that makes integrations across multiple channels a breeze.</p>
                        <Button variant="outlined" color="secondary">LEARN MORE</Button>
                    </div>


                    <div className="col-md-6">
                        <Image
                            src={img}
                            alt="Picture of the author"
                            width={500}
                            height={500}
                        />
                        <h2 className="text-light">Business Users</h2>
                        <h3 className="text-light">Empowered to do more faster.</h3>
                        <p className="text-light">Take control of content creation with an intuitive experience that lets you build more, publish faster, and get more results from your digital content strategy.</p>
                        <Button variant="outlined" color="secondary">LEARN MORE</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Compare;