import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Menu, Modal } from "semantic-ui-react";
import bobaicon from "../images/boba-cart.png";
import logo from "../images/logo-coffee-cup.png";
import ig from "../images/mainbar-menu_ig.svg";
import fb from "../images/mainbar-menu_fb.svg";
import { CartContext } from "../cart/cart-context";
import { useMediaQuery } from "react-responsive";

export const TopMenu = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [toggleMenu, setToggleMenu] = useState(false);
  const { cartItems } = useContext(CartContext);
  const isMobile = useMediaQuery({ maxWidth: 915 });

  const handleItemClick = (link) => {
    setActiveItem(link);
  };

  if (isMobile) {
    return (
      <div className="navcontainer-mobile">
        <div className="menu-logo">
          <Modal
            basic
            onClose={() => setToggleMenu(false)}
            onOpen={() => setToggleMenu(true)}
            open={toggleMenu}
            trigger={
              <btn>
                <img src={logo} alt="Logo Filler" />
              </btn>
            }
          >
            <div className="mobile-modal">
              <ul className="menu-list">
                <li>
                  <i
                    class="close icon"
                    onClick={() => setToggleMenu(false)}
                  ></i>
                </li>
                <li>
                  <a href="/">HOME</a>
                </li>
                <li>
                  <a href="/menu">MENU</a>
                </li>
                <li>
                  <a href="/order">ONLINE ORDER</a>
                </li>
                <li>
                  <a href="/about">ABOUT US</a>
                </li>
                <li>
                  <a href="/location">LOCATION</a>
                </li>
              </ul>
            </div>
          </Modal>
        </div>

        <ul className="menu-social">
          <li className="box-b">
            <ul className="snbox-mobile">
              <li>
                <a href="https://www.facebook.com/designsballc">
                  <img src={fb} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/aubrie.nalani.usa/">
                  <img src={ig} alt="instagram" />
                </a>
              </li>
            </ul>
          </li>

          {/* <li>
            <div>
              <Link to="/cart">
                <img
                  style={{ width: "2.5rem", height: "auto" }}
                  src={bobaicon}
                  alt="Boba Cart Icon"
                />
                <span className="badge">{cartItems.length}</span>
              </Link>
            </div>
          </li> */}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="navcontainer">
        <div className="nav-header">
          <h1>
            <Link to="/" className="site-title">
              Da Morning Grind
            </Link>
          </h1>
        </div>

        <Menu
          borderless
          pointing={!isMobile}
          secondary={!isMobile}
          className="nav"
          vertical={isMobile}
        >
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={() => handleItemClick("home")}
          >
            <Link to="/">HOME</Link>
          </Menu.Item>
          <Menu.Item
            name="menu"
            active={activeItem === "menu"}
            onClick={() => handleItemClick("menu")}
          >
            <Link to="/menu">MENU</Link>
          </Menu.Item>
          <Menu.Item
            name="order"
            active={activeItem === "order"}
            onClick={() => handleItemClick("order")}
          >
            <Link to="/order">ORDER ONLINE</Link>
          </Menu.Item>
          <Menu.Item
            name="about"
            active={activeItem === "about"}
            onClick={() => handleItemClick("about")}
          >
            <Link to="/about">ABOUT US</Link>
          </Menu.Item>
          <Menu.Item
            name="location"
            active={activeItem === "location"}
            onClick={() => handleItemClick("location")}
          >
            <Link to="/location">LOCATION</Link>
          </Menu.Item>

          {/* <Button circular className="cart-btn">
            <Link to="/cart">
              <img
                style={{ width: "2.5rem", height: "auto" }}
                src={bobaicon}
                alt="Boba Cart Icon"
              />
              <span className="badge">{cartItems.length}</span>
            </Link>
          </Button> */}
        </Menu>
      </div>
    );
  }
};
