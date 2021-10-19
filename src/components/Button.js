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
                        <Dropdown.Item as="button" value="Manchester City"      onClick={props.click}><span className="flag-icon flag-icon-gb-eng"> </span>&nbsp;&nbsp;Mancheter City   </Dropdown.Item>
                        <Dropdown.Item as="button" value="Paris Saint-Germain"  onClick={props.click}><span className="flag-icon flag-icon-fr">     </span>&nbsp;&nbsp;Paris SG         </Dropdown.Item>
                        <Dropdown.Item as="button" value="RB Leipzig"           onClick={props.click}><span className="flag-icon flag-icon-de">     </span>&nbsp;&nbsp;RB Leipzig       </Dropdown.Item>
                        <Dropdown.Item as="button" value="Club Brugge"          onClick={props.click}><span className="flag-icon flag-icon-be">     </span>&nbsp;&nbsp;Club Brugge      </Dropdown.Item>
                    <Dropdown.Divider />
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;Group B</h5>
                        <Dropdown.Item as="button" value="Atlético Madrid"      onClick={props.click}><span className="flag-icon flag-icon-es">     </span>&nbsp;&nbsp;Atlético Madrid  </Dropdown.Item>
                        <Dropdown.Item as="button" value="Liverpool"            onClick={props.click}><span className="flag-icon flag-icon-gb-eng"> </span>&nbsp;&nbsp;Liverpool        </Dropdown.Item>
                        <Dropdown.Item as="button" value="Porto"                onClick={props.click}><span className="flag-icon flag-icon-pt">     </span>&nbsp;&nbsp;Porto            </Dropdown.Item>
                        <Dropdown.Item as="button" value="AC Milan"             onClick={props.click}><span className="flag-icon flag-icon-it">     </span>&nbsp;&nbsp;AC Milan         </Dropdown.Item>
                    <Dropdown.Divider />
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;Group C</h5>
                        <Dropdown.Item as="button" value="Sporting CP"          onClick={props.click}><span className="flag-icon flag-icon-pt">     </span>&nbsp;&nbsp;Sporting CP      </Dropdown.Item>
                        <Dropdown.Item as="button" value="Borussia Dortmund"    onClick={props.click}><span className="flag-icon flag-icon-de">     </span>&nbsp;&nbsp;Dortmund         </Dropdown.Item>
                        <Dropdown.Item as="button" value="AFC Ajax"             onClick={props.click}><span className="flag-icon flag-icon-nl">     </span>&nbsp;&nbsp;Ajax             </Dropdown.Item>
                        <Dropdown.Item as="button" value="Beşiktaş JK"          onClick={props.click}><span className="flag-icon flag-icon-tr">     </span>&nbsp;&nbsp;Beşiktaş         </Dropdown.Item>
                    <Dropdown.Divider />
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;Group D</h5>
                        <Dropdown.Item as="button" value="Inter Milan"          onClick={props.click}><span className="flag-icon flag-icon-it">     </span>&nbsp;&nbsp;Inter Milan      </Dropdown.Item>
                        <Dropdown.Item as="button" value="Real Madrid"          onClick={props.click}><span className="flag-icon flag-icon-es">     </span>&nbsp;&nbsp;Real Madrid      </Dropdown.Item>
                        <Dropdown.Item as="button" value="Shakhtar Donetsk"     onClick={props.click}><span className="flag-icon flag-icon-ua">     </span>&nbsp;&nbsp;Shakhtar         </Dropdown.Item>
                        <Dropdown.Item as="button" value="Sheriff Tiraspol"     onClick={props.click}><span className="flag-icon flag-icon-md">     </span>&nbsp;&nbsp;Sheriff Tiraspol </Dropdown.Item>
                    <Dropdown.Divider />
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;Group E</h5>
                        <Dropdown.Item as="button" value="Bayern Munich"        onClick={props.click}><span className="flag-icon flag-icon-de">     </span>&nbsp;&nbsp;Bayern Munich    </Dropdown.Item>
                        <Dropdown.Item as="button" value="Barcelona"            onClick={props.click}><span className="flag-icon flag-icon-es">     </span>&nbsp;&nbsp;Barcelona        </Dropdown.Item>
                        <Dropdown.Item as="button" value="SL Benfica"           onClick={props.click}><span className="flag-icon flag-icon-pt">     </span>&nbsp;&nbsp;Benfica          </Dropdown.Item>
                        <Dropdown.Item as="button" value="Dynamo Kyiv"          onClick={props.click}><span className="flag-icon flag-icon-ua">     </span>&nbsp;&nbsp;Dynamo Kyiv      </Dropdown.Item>
                    <Dropdown.Divider />
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;Group F</h5>
                        <Dropdown.Item as="button" value="Villarreal"           onClick={props.click}><span className="flag-icon flag-icon-es">     </span>&nbsp;&nbsp;Villarreal       </Dropdown.Item>
                        <Dropdown.Item as="button" value="Manchester United"    onClick={props.click}><span className="flag-icon flag-icon-gb-eng"> </span>&nbsp;&nbsp;Manchester Utd   </Dropdown.Item>
                        <Dropdown.Item as="button" value="Atalanta"             onClick={props.click}><span className="flag-icon flag-icon-it">     </span>&nbsp;&nbsp;Atalanta         </Dropdown.Item>
                        <Dropdown.Item as="button" value="Young Boys"           onClick={props.click}><span className="flag-icon flag-icon-ch">     </span>&nbsp;&nbsp;Young Boys       </Dropdown.Item>
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

