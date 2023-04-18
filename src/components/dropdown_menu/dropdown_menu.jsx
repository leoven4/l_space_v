import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './dropdown_menu.scss';
import { Link } from "react-router-dom"; // must be nested in a BrowserRouter component

function DropdownMenu() {
    return (

        <div className='dropdown'>
            <DropdownButton renderMenuOnMount={Boolean(true)} align="end" title="⎵" id="dropdown-menu-align-end">
                <div className='dropdown_items'>
                    <Dropdown.Item><Link to="">Info</Link></Dropdown.Item>
                    <Dropdown.Item><Link to="">Blog</Link></Dropdown.Item>
                    <Dropdown.Item><Link to="/gallery">Photo</Link></Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">3D objects</Dropdown.Item>
                </div>
            </DropdownButton>
        </div>

    );
}

export default DropdownMenu;