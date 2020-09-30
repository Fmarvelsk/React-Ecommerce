import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HelpIcon from '@material-ui/icons/Help';
import {Link} from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
import logo from '../image/ecommerce-logo.jpg';

function Navbar (){
    // eslint-disable-next-line
    const [{ carts, user }, dispatch] = useStateValue();
    const handleAuth = () => {
        if(user)
        auth.signOut()
    }
    return (
    <div className='navbar'>
        <Link to='/'><img className="navbar_logo" alt="logo" src={logo}/></Link>
        <div className="search_form">
            <input type="text" className="search-input" placeholder = "Search" />
            <SearchIcon className="search_color"/>
        </div>
        {console.log(logo)}
        <div className="nav_option">
        <Link to={!user && "/login"}>
    <div className="option" onClick={handleAuth}>
    <span className="option_1">{user ? `${user?.email}` : `Hello Guest`}</span>
    <span className="option_2">{user ? 'Logout' : 'SignIn'}</span>
        </div></Link>
<Link to="/orders">
    <div className="option" >
        <span className="option_1">Returns</span>
        <span className="option_2">& Orders</span>
    </div></Link>
    <div className="option_carts">
        <span className='option_help'>Help</span>
        <span><HelpIcon/></span>
        </div>
        <Link to="/checkout">
        <div className='option_carts'>
        <ShoppingCartIcon/>
    <span className="option_2 carts">{carts?.length}</span>
    </div>
        </Link>

        </div>
    </div> )

}
export default Navbar;