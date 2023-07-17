import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import Logo from "../assets/logo.png";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["home"]}>
        <div className="logo">
          <img
            src={Logo}
            alt="Logo"
            style={{ height: "32px", marginRight: "16px" }}
          />
        </div>
        <Menu.Item key="home" >
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="faas">
          <Link to="/faas">FaaS</Link>
        </Menu.Item>
        <Menu.Item key="admin">
          <Link to="/admin">Admin</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
