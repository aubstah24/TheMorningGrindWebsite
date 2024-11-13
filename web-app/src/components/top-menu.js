import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Button, Image } from "semantic-ui-react";
import bobaicon from '../images/boba-cart.png';
import { CartContext } from "../cart/cart-context";


export const TopMenu = () => {

    return (
        <div class="navcontainer">
            <div class="nav-header">
                <h1><Link to="/" className="site-title">The Morning Grind</Link></h1>
            </div>

            <div class="nav">
                <a href="/" class="link">HOME</a>
                <a href="/menu" class="link">MENU</a>
                <a href="/order" class="link">ONLINE ORDER</a>
                <a href="/about" class="link">ABOUT US</a>
                <a href="/location" class="link">LOCATION</a>
                <Button circular className='cart-btn'>
                    <Link to="/cart"><Image style={{width:"2.5rem", height:"auto"}} src={bobaicon}/>
                    <span class="mdl-badge">{GetCartTotal}
                    </span>
                    </Link>
                </Button>
            </div>

        </div>
    )
}


const GetCartTotal = () => {
    const {cartItems} = useContext(CartContext);
    return cartItems.length
}


