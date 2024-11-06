import {Link} from 'react-router-dom'

const Navbar = () => {

    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link
                        to="/"
                    >
                        Facts
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/find"
                    >
                        Find
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/login">
                        Sign out
                    </Link>
                </li>
            </ul>
        </div>
    );
};


export default Navbar;