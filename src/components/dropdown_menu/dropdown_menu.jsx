import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './dropdown_menu.scss';
import { Link } from "react-router-dom"; // must be nested in a BrowserRouter component

function DropdownMenu() {
    return (

        <div className='dropdown'>
            <DropdownButton renderMenuOnMount={Boolean(true)} align="end" title="⎵" id="dropdown-menu-align-end">
                <div className='dropdown_items'>
                    <Dropdown.Item><Link to="">Intro</Link></Dropdown.Item>
                    <Dropdown.Item><Link to="">Words</Link></Dropdown.Item>
                    <Dropdown.Item><Link to="/gallery">Images</Link></Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item><Link to="">Music</Link></Dropdown.Item>
                </div>
            </DropdownButton>
        </div>

    );
}

export default DropdownMenu;