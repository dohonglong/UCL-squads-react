import { React } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "bootstrap/dist/css/bootstrap.min.css";



function MyButton(props) {
    return(
        <div>
            <Dropdown as={ButtonGroup} alignRight>
                <Dropdown.Toggle variant="success" size="lg" style={{ fontSize:'22px' , fontWeight: "bold" }}>Team&nbsp;</Dropdown.Toggle>
                <Dropdown.Menu style={{ backgroundColor: '#E0E0E0' }}> 
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;Group A</h5>
                        <Dropdown.Item as="button" value="Manchester City"      onClick={props.click}><span className="flag-icon flag-icon-gb-eng"> </span>&nbsp;&nbsp;Man City</Dropdown.Item>
                        <Dropdown.Item as="button" value="Paris Saint-Germain"  onClick={props.click}><span className="flag-icon flag-icon-fr">     </span>&nbsp;&nbsp;Paris SG</Dropdown.Item>
                        <Dropdown.Item as="button" value="RB Leipzig"           onClick={props.click}><span className="flag-icon flag-icon-de">     </span>&nbsp;&nbsp;RB Leipzig</Dropdown.Item>
                        <Dropdown.Item as="button" value="Club Brugge"          onClick={props.click}><span className="flag-icon flag-icon-be">     </span>&nbsp;&nbsp;Club Brugge</Dropdown.Item>
                    <Dropdown.Divider />
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;Group B</h5>
                        
                    <Dropdown.Divider />
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;Group C</h5>
                    
                    <Dropdown.Divider />
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;Group D</h5>
                        
                    <Dropdown.Divider />
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;Group E</h5>
                       
                    <Dropdown.Divider />
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;Group F</h5>
                        <Dropdown.Item as="button" value="Manchester United"    onClick={props.click}><span className="flag-icon flag-icon-gb-eng"> </span>&nbsp;&nbsp;Man Utd</Dropdown.Item>
                    <Dropdown.Divider />
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;Group G</h5>

                    <Dropdown.Divider />
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;Group H</h5>
                        
                </Dropdown.Menu>
            </Dropdown>

        </div>
        
    )
}

export default MyButton;

