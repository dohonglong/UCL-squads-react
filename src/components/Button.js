import { React } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "bootstrap/dist/css/bootstrap.min.css";


function MyButton(props) {
    return(
        <div>
            <Dropdown as={ButtonGroup} alignRight>
                <Dropdown.Toggle variant="success" size="lg" style={{ fontSize:'23px' , fontWeight: "bold" }}>Squads&nbsp;</Dropdown.Toggle>
                <Dropdown.Menu style={{ backgroundColor: '#E0E0E0' }}> 
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;Group A</h5>
                        <Dropdown.Item as="button" value="turkey"><img className="flag" src="https://icons.iconarchive.com/icons/gosquared/flag/32/Turkey-flat-icon.png" alt="TUR" />&nbsp;&nbsp;Turkey</Dropdown.Item>
                        <Dropdown.Item as="button" value="italy"><img className="flag" src="https://icons.iconarchive.com/icons/gosquared/flag/32/Italy-flat-icon.png" alt="ITA" />&nbsp;&nbsp;Italy</Dropdown.Item>
                        <Dropdown.Item as="button" value="wales"><img className="flag"  src="https://icons.iconarchive.com/icons/gosquared/flag/32/Wales-flat-icon.png" alt="WAL" />&nbsp;&nbsp;Wales</Dropdown.Item>
                        <Dropdown.Item as="button" value="switzerland"><img className="flag" src="https://icons.iconarchive.com/icons/gosquared/flag/32/Switzerland-flat-icon.png" alt="SUI" />&nbsp;&nbsp;Switzerland</Dropdown.Item>
                    <Dropdown.Divider />
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;Group B</h5>
                        <Dropdown.Item as="button" value="denmark"><img className="flag" src="https://icons.iconarchive.com/icons/gosquared/flag/32/Denmark-flat-icon.png" alt="DEN" />&nbsp;&nbsp;Denmark</Dropdown.Item>
                        <Dropdown.Item as="button" value="finland"><img className="flag" src="https://icons.iconarchive.com/icons/gosquared/flag/32/Finland-flat-icon.png" alt="FIN" />&nbsp;&nbsp;Finland</Dropdown.Item>
                        <Dropdown.Item as="button" value="belgium"><img className="flag" src="https://icons.iconarchive.com/icons/gosquared/flag/32/Belgium-flat-icon.png" alt="BEL" />&nbsp;&nbsp;Belgium</Dropdown.Item>
                        <Dropdown.Item as="button" value="russia"><img className="flag" src="https://icons.iconarchive.com/icons/gosquared/flag/32/Russia-flat-icon.png" alt="RUS" />&nbsp;&nbsp;Russia</Dropdown.Item>
                    <Dropdown.Divider />
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;Group C</h5>
                        <Dropdown.Item as="button" value="netherlands"><img className="flag" src="https://icons.iconarchive.com/icons/gosquared/flag/32/Netherlands-flat-icon.png" alt="NED" />&nbsp;&nbsp;Netherlands</Dropdown.Item>
                        <Dropdown.Item as="button" value="ukraine"><img className="flag" src="https://icons.iconarchive.com/icons/gosquared/flag/32/Ukraine-flat-icon.png" alt="UKR" />&nbsp;&nbsp;Ukraine</Dropdown.Item>
                        <Dropdown.Item as="button" value="austria"><img className="flag" src="https://icons.iconarchive.com/icons/gosquared/flag/32/Austria-flat-icon.png" alt="AUT" />&nbsp;&nbsp;Austria</Dropdown.Item>
                        <Dropdown.Item as="button" value="north macedonia">                             <img className="flag" src="https://icons.iconarchive.com/icons/gosquared/flag/32/Macedonia-flat-icon.png" alt="MKD" />&nbsp;&nbsp;North Macedonia </Dropdown.Item>
                    <Dropdown.Divider />
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;Group D</h5>
                        <Dropdown.Item as="button" value="england">                                     <img className="flag" src="https://icons.iconarchive.com/icons/gosquared/flag/32/England-flat-icon.png" alt="ENG" />&nbsp;&nbsp;England     </Dropdown.Item>
                        <Dropdown.Item as="button" value="croatia">                                     <img className="flag" src="https://icons.iconarchive.com/icons/gosquared/flag/32/Croatia-flat-icon.png" alt="CRO" />&nbsp;&nbsp;Croatia         </Dropdown.Item>
                        <Dropdown.Item as="button" value="scotland">                                    <img className="flag" src="https://icons.iconarchive.com/icons/gosquared/flag/32/Scotland-flat-icon.png" alt="SCO" />&nbsp;&nbsp;Scotland    </Dropdown.Item>
                        <Dropdown.Item as="button" value="czech republic">                              <img className="flag" src="https://icons.iconarchive.com/icons/gosquared/flag/32/Czech-Republic-flat-icon.png" alt="CZE" />&nbsp;&nbsp;Czech Republic  </Dropdown.Item>
                    <Dropdown.Divider />
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;Group E</h5>
                        <Dropdown.Item as="button" value="spain"><img className="flag" src="https://icons.iconarchive.com/icons/gosquared/flag/32/Spain-flat-icon.png" alt="ESP" />&nbsp;&nbsp;Spain</Dropdown.Item>
                        <Dropdown.Item as="button" value="sweden">                                      <img className="flag" src="https://icons.iconarchive.com/icons/gosquared/flag/32/Sweden-flat-icon.png" alt="SWE" />&nbsp;&nbsp;Sweden</Dropdown.Item>
                        <Dropdown.Item as="button" value="poland">                                      <img className="flag" src="https://icons.iconarchive.com/icons/gosquared/flag/32/Poland-flat-icon.png" alt="POL" />&nbsp;&nbsp;Poland</Dropdown.Item>
                        <Dropdown.Item as="button" value="slovakia">                                    <img className="flag" src="https://icons.iconarchive.com/icons/gosquared/flag/32/Slovakia-flat-icon.png" alt="SVK" />&nbsp;&nbsp;Slovakia</Dropdown.Item>
                    <Dropdown.Divider />
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;Group F</h5>
                        <Dropdown.Item as="button" value="hungary">                                     <img className="flag" src="https://icons.iconarchive.com/icons/gosquared/flag/32/Hungary-flat-icon.png" alt="HUN" />&nbsp;&nbsp;Hungary</Dropdown.Item>
                        <Dropdown.Item as="button" value="portugal">                                    <img className="flag" src="https://icons.iconarchive.com/icons/gosquared/flag/32/Portugal-flat-icon.png" alt="POR" />&nbsp;&nbsp;Portugal</Dropdown.Item>
                        <Dropdown.Item as="button" value="france"           onClick={props.click}>      <img className="flag" src="https://icons.iconarchive.com/icons/gosquared/flag/32/France-flat-icon.png" alt="FRA" />&nbsp;&nbsp;France</Dropdown.Item>
                        <Dropdown.Item as="button" value="germany"          onClick={props.click}>      <img className="flag" src="https://icons.iconarchive.com/icons/gosquared/flag/32/Germany-flat-icon.png" alt="GER" />&nbsp;&nbsp;Germany</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </div>
        
    )
}

export default MyButton;

