import { React } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';

function MyJumbotron(props) {
    
    const JumbotronStyle = {
        margin: 'auto', 
        minHeight: '550px',
        paddingTop: 250, 
        paddingBottom: 25,
        backgroundImage: props.background,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    }
    const ImageStyle = {
        border: '5px solid black', 
        backgroundColor: 'white'
    }
    const TitleStyle = {
        fontSize:'6vw', 
        color:'white', 
        textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black'
    }

    return (
        <div>
            <Jumbotron style={JumbotronStyle}>
                <h1 className="specialFont" style={TitleStyle}>{props.team}</h1>
                <Col xs={12} md={12} lg={2}>
                    <Image src={props.logo} width='200' style={ImageStyle} rounded />
                </Col>           
            </Jumbotron>
        </div>
    )
}

export default MyJumbotron;