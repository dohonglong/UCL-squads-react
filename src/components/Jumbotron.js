import { React } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';

function MyJumbotron() {
    const JumbotronStyle = {
        margin: 'auto', 
        minHeight: '350px',
        paddingTop: 150, 
        paddingBottom: 30
    }

    return (
        <div>
            <Jumbotron style={JumbotronStyle}>
                <h1 className="specialFont" style={{ fontSize:'5.5vw' }}>FRANCE</h1>
                <Col xs={6} md={4} lg={2}>
                    <Image src="./images/logos/france.jpg" width='200' style={{ border: '1px solid black' }} rounded />
                </Col>           
              
                
            </Jumbotron>
        </div>
    )
}

export default MyJumbotron;