import { DropdownItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavbarDropdown() {
    return (
        <Dropdown as={ButtonGroup}>
            <Button variant="success">
                <Nav.Link as={Link} to="/genediseaseassociations">Gene-Disease Associations</Nav.Link>
            </Button>

            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

            <Dropdown.Menu>
                <DropdownItem as={Link} to="/DISGENET">DISGENET GDA Data Analyses</DropdownItem>
                <DropdownItem as={Link} to="/CTD">CTD GDA Data Analyses</DropdownItem>
                <DropdownItem as={Link} to="/comparison">Comparing DISGENET and CTD Data Analyses</DropdownItem>
            </Dropdown.Menu>

        </Dropdown>
    );
}

export default NavbarDropdown;