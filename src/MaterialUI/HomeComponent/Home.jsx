// @flow strict


import React, { useState } from 'react';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Home.css';
import { Container, ImageList, ImageListItem, TextField } from '@material-ui/core';
import ImagesData from '../ImagesData.json'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    text: {
        "marginTop": "60px",
        "textAlign": "center"
    }
})


function Home() {

    const [data] = useState({

    })
    const classes = useStyles();

    return (
        <div>
            <AppBar >
                <Toolbar>
                    <CameraAltIcon />
                    <Typography variant="h6">Photograpy</Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.text} >
                <Typography variant="h2">
                    Our latest version of Photograpy
                </Typography>
                <Typography paragraph>Pleasure to take your photo as well,please fill the below from for any requests</Typography>
            </Container>
            <Container>
                <ImageList rowHeight={170} cols={3}>
                    {ImagesData.map(imageObj =>
                        <ImageListItem key={imageObj.id} cols={1}>
                            <img src={imageObj.img} alt={imageObj.title} />
                        </ImageListItem>
                    )}
                </ImageList>
            </Container>
            <center>
                <Container>
                    <Typography variant="h4">Contact form</Typography>
                    <form>
                        <TextField style={{ width: "500px", margin: "5px" }}
                            id="outlined-basic"
                            type="text"
                            name="Name"
                            value={data.Name}
                            label="Name"
                            variant="outlined" /><br />
                        <TextField style={{ width: "500px", margin: "5px" }}
                            type="email" name="Email" label="Email" value={data.Email} variant="outlined" /><br />
                        <TextField style={{ "width": "500px", "margin": "5px" }} type="text"
                            name="Proposal" label="Proposal" value={data.Proposal} variant="outlined" /><br />
                        <TextField style={{ "width": "500px", "margin": "5px" }} type="text"
                            name="Adress" label="Adress" value={data.Adress} variant="outlined" /><br />
                        <Button variant="contained" color="primary">submit</Button>
                    </form>
                </Container>
            </center>
        </div>
    );
};

export default Home;
