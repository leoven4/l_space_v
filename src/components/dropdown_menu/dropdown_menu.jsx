import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './dropdown_menu.scss';

function DropdownMenu() {
    return (

        <div className='dropdown'>
            <DropdownButton align="end" title="㊂" id="dropdown-menu-align-end">
                <div className='dropdown_items'>
                    <Dropdown.Item eventKey="1">Info</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Blog</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Photo</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">3D objects</Dropdown.Item>
                </div>
            </DropdownButton>
        </div>

    );
}

export default DropdownMenu;