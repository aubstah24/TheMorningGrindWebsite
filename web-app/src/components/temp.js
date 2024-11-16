import { useContext } from "react"
import { Link } from "react-router-dom"
import { Button, Image } from "semantic-ui-react"
import { CartContext } from "../cart/cart-context"


export const TopMenu1 = () => {
    return (
        <div class="navcontainer">
            <div class="nav-header">
                <h1><Link to="/" className="site-title">The Morning Grind</Link></h1>
            </div>

            <div class="nav">
                <a href="/">HOME</a>
                <a href="/menu">MENU</a>
                <a href="/order">ONLINE ORDER</a>
                <a href="/about">ABOUT US</a>
                <a href="/location">LOCATION</a>
                <Button circular>
                    <Link to="/cart"><Image style={{width:"2.5rem", height:"auto"}} src={bobaicon}/>
                    <span class="mdl-badge" data-badge={GetCartTotal}>
                    </span>
                    </Link>
                </Button>
            </div>

        </div>
    )
}

+++++++++++++++++++++++++++++++++++

<div class="ui compact menu">
          <div class="ui simple dropdown item">
            MENU
            <i class="dropdown icon"></i>
            <div class="menu">
              <div
                class="item"
                name="home"
                active={activeItem === "home"}
                onClick={() => handleItemClick("home")}
              >
                <Link to="/">HOME</Link>
              </div>
              <div
                class="item"
                name="menu"
                active={activeItem === "menu"}
                onClick={() => handleItemClick("menu")}
              >
                <Link to="/menu">MENU</Link>
              </div>
              <div
                class="item"
                name="order"
                active={activeItem === "order"}
                onClick={() => handleItemClick("order")}
              >
                <Link to="/order">ORDER ONLINE</Link>
              </div>
              <div
                class="item"
                name="about"
                active={activeItem === "about"}
                onClick={() => handleItemClick("about")}
              >
                <Link to="/about">ABOUT US</Link>
              </div>
              <div
                class="item"
                name="location"
                active={activeItem === "location"}
                onClick={() => handleItemClick("location")}
              >
                <Link to="/location">LOCATION</Link>
              </div>
            </div>
          </div>
        </div>

++++++++++++++++++++++++++++++++++++

<div className="navcontainer">
            <div className="nav-header">
                <h1><Link to="/" className="site-title">The Morning Grind</Link></h1>
            </div>

            <div className="nav">
                <a 
                    href="/" 
                    className={`link ${activeItem === 'home' ? 'active' : ''}`}
                    onClick={() => handleItemClick('home')}
                >HOME</a>
                <a 
                    href="/menu"
                    className={`link ${activeItem === 'menu' ? 'active' : ''}`}
                    onClick={() => handleItemClick('menu')}
                >MENU</a>
                <a 
                    href="/order"
                    className={`link ${activeItem === 'order' ? 'active' : ''}`}
                    onClick={() => handleItemClick('order')}
                >ONLINE ORDER</a>
                <a 
                    href="/about" 
                    className={`link ${activeItem === 'about' ? 'active' : ''}`}
                    onClick={() => handleItemClick('about')}
                >ABOUT US</a>
                <a 
                href="/location"
                className={`link ${activeItem === 'location' ? 'active' : ''}`}
                    onClick={() => handleItemClick('location')}
                >LOCATION</a>
                <Button circular className='cart-btn'>
                    <Link to="/cart">
                        <img style={{width:"2.5rem", height:"auto"}} src={bobaicon} alt='Boba Cart Icon'/>
                        <span className='badge'>{cartItems.length}</span>
                    </Link>
                </Button>
            </div>

        </div>




++++++++++++++++++++++++++++++++++
export default class TopMenu2 extends React.Component {

    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name});


  render() {

    const { activeItem } = this.state;

      return (
    <div class="navcontainer">
        <div className='nav-header'>
            <h1><Link to="/" className="site-title">The Morning Grind</Link></h1>
        </div>

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