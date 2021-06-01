import { React } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "bootstrap/dist/css/bootstrap.min.css";


function Button(props) {

    return(
        <div>
            <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle variant="success">Squads</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item as="button" value="france" onClick={props.click}>France</Dropdown.Item>
                    <Dropdown.Item as="button" value="germany" onClick={props.click}>Germany</Dropdown.Item>
                    <Dropdown.Divider />
                    
                </Dropdown.Menu>
            </Dropdown>

        </div>
        
    )
}

export default Button;
