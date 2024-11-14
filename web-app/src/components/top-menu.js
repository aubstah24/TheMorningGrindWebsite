import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Menu,
} from "semantic-ui-react";
import bobaicon from "../images/boba-cart.png";
import { CartContext } from "../cart/cart-context";
import { useMediaQuery } from "react-responsive";

export const TopMenu = () => {
  const [activeItem, setActiveItem] = useState("home");
  const { cartItems } = useContext(CartContext);
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  const handleItemClick = (link) => {
    setActiveItem(link);
  };

  if (isMobile) {
    return (
      <div className="navcontainer mobile">
        <Menu
          borderless
          pointing={!isMobile}
          secondary={!isMobile}
          className="nav-mobile"
          vertical={isMobile}
          color="black"
        >
          <Dropdown item text="MENU">
            <DropdownMenu>
              <DropdownItem
                name="home"
                active={activeItem === "home"}
                onClick={() => handleItemClick("home")}
              >
                <Link to="/">HOME</Link>
              </DropdownItem>
              <DropdownItem
                name="menu"
                active={activeItem === "menu"}
                onClick={() => handleItemClick("menu")}
              >
                <Link to="/menu">MENU</Link>
              </DropdownItem>
              <DropdownItem
                name="order"
                active={activeItem === "order"}
                onClick={() => handleItemClick("order")}
              >
                <Link to="/order">ORDER ONLINE</Link>
              </DropdownItem>
              <DropdownItem
                name="about"
                active={activeItem === "about"}
                onClick={() => handleItemClick("about")}
              >
                <Link to="/about">ABOUT US</Link>
              </DropdownItem>
              <DropdownItem
                name="location"
                active={activeItem === "location"}
                onClick={() => handleItemClick("location")}
              >
                <Link to="/location">LOCATION</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Menu>

        <div className="nav-header">
          <h1>
            <Link to="/" className="site-title">
              The Morning Grind
            </Link>
          </h1>
        </div>

        <div className="align-button">
          <Button circular className="cart-btn">
            <Link to="/cart">
              <img
                style={{ width: "2.5rem", height: "auto" }}
                src={bobaicon}
                alt="Boba Cart Icon"
              />
              <span className="badge">{cartItems.length}</span>
            </Link>
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navcontainer">
        <div className="nav-header">
          <h1>
            <Link to="/" className="site-title">
              The Morning Grind
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

          <Button circular className="cart-btn">
            <Link to="/cart">
              <img
                style={{ width: "2.5rem", height: "auto" }}
                src={bobaicon}
                alt="Boba Cart Icon"
              />
              <span className="badge">{cartItems.length}</span>
            </Link>
          </Button>
        </Menu>
      </div>
    );
  }
};
