import { React } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';

function MyJumbotron(props) {
    
    const JumbotronStyle = {
        margin: 'auto', 
        minHeight: '450px',
        paddingTop: 160, 
        backgroundImage: props.background,
        backgroundPosition: 'center center',
        backgroundColor: 'white',
        backgroundRepeat: 'no-repeat'
    }
    const ImageStyle = {
        border: '2px solid black', 
        backgroundColor: 'white',
        maxWidth: '190px'
    }
    const TitleStyle = {
        fontSize:'6vw', 
        color:'white'
    }

    return (
        <div>
            <Jumbotron style={JumbotronStyle}>
                <h1 className="specialFont" style={TitleStyle}>{props.team}</h1>
                <Row>
                    <Col xs={12} md={5} lg={4} xl={3}>
                        <Image src={props.logo} style={ImageStyle} rounded fluid/>
                    </Col>        
                </Row>
            </Jumbotron>
        </div>
    )
}

export default MyJumbotron;