import React from 'react';
import Image from "next/image";
import img from "../../Images/error.png";
import style from "../../styles/Resource.module.css";

import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const Resources = () => {

    const classes = useStyles();

    return (
        <div className="">
            <div className="container">
                <div className={style.resources}>

                    <h2 className="text-center">Recommended Resources</h2>

                    <div className="row">


                        <div className="col-md-4">
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <Image src={img} alt="Picture of the author" width={100} height={100} />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>

                        <div className="col-md-4">
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <Image src={img} alt="Picture of the author" width={100} height={100} />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>

                        <div className="col-md-4">
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <Image src={img} alt="Picture of the author" width={100} height={100} />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>


            <div className={style.try}>

                <div className="container p-3">
                    <h2 className="text-center">TRY IT TO BELIEVE IT</h2>
                    <div className="text-center">
                        <Button variant="outlined" color="secondary">LEARN MORE</Button>
                        <Button variant="outlined" color="secondary">LEARN MORE</Button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Resources;