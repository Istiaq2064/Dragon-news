
import { useContext } from 'react';
import UserIcon from '../assets/user.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const NavBar = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='flex justify-between items-center'>
           <div>
                {user && user.name}
           </div>
           <div className="nav space-x-4">
            <Link>Home</Link>
            <Link>Career</Link>
            <Link>About</Link>
           </div>
           <div className="login flex items-center space-x-2">
            <div>
                <img src={UserIcon} alt="" />
            </div>
            <div>
                <Link to="/auth/login" className='btn btn-neutral rounded-none'>Log In</Link>
            </div>
           </div>
        </div>
    );
};

export default NavBar;