import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Button, Icon, Image, Menu } from "semantic-ui-react";
import bobaicon from '../images/boba-cart.png';
import { CartContext } from "../cart/cart-context";


export default class TopMenu extends React.Component {

    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name});


  render() {

    const { activeItem } = this.state;

      return (
    <div class="navcontainer">
        <h1><Link to="/" className="site-title">Da Morning Grind</Link></h1>
        <Menu borderless pointing secondary stackable className="nav">
            <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}>
                <Link to="/">HOME</Link>
                </Menu.Item>
            <Menu.Item
                name='menu'
                active={activeItem === 'menu'}
                onClick={this.handleItemClick}>
                <Link to="/menu">MENU</Link>
                </Menu.Item>
            <Menu.Item
                name='order'
                active={activeItem === 'order'}
                onClick={this.handleItemClick}>
                <Link to="/order">ORDER ONLINE</Link>
                </Menu.Item>
            <Menu.Item
                name='about'
                active={activeItem === 'about'}
                onClick={this.handleItemClick}>
                <Link to="/about">ABOUT US</Link>
                </Menu.Item>
            <Menu.Item
                name='location'
                active={activeItem === 'location'}
                onClick={this.handleItemClick}>
                <Link to="/location">LOCATION</Link>
                </Menu.Item>
            <Menu.Item fitted position="right">
                <Link to="/account">
                    <Icon name="user circle" size="big"/>
                </Link>
            </Menu.Item>
            <Menu.Item fitted>
                <Button circular>
                    <Link to="/cart"><Image style={{width:"2.5rem", height:"auto"}} src={bobaicon}/>
                    <span class="mdl-badge" data-badge={GetCartTotal}>
                    </span>
                    </Link>
                </Button>
            </Menu.Item>

        </Menu>
        </div>
    );
  }
}

const GetCartTotal = () => {
    const {cartItems} = useContext(CartContext);
    return cartItems.length
}