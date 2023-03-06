import {
  LaptopOutlined,
  NotificationOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import React from "react";
import "../../styles/Dashboard/Dashboard.css";
import { Input } from "antd";
import logo from "../../../assets/telogo.png";
import { Grid } from "@mui/material";
import search from "../../../assets/search.png";
import ButtonComponent from "../../atoms/ButtonComponent";

const onSearch = (value) => console.log(value);

const { Header, Content, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);
const Dashboard = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header className="header">
        <Grid className="logo">
            <img src={logo} alt="logo" />
        
          {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
        </Grid>
        <Grid item xs={6} className="search">
          <img
              className="searchbaricon"
              height="10px"
              src={search}
              alt="icon"
            />
            <input
              className=" searchbar"
              type="text"
              placeholder="Search Mentor / Employee"
            />
        </Grid>
        <Grid className="button-logout">
            <ButtonComponent
                label = "logout"
                size = "small"
                variant = "outlined"
                fullWidth
                sx={{width:"20%",p:0.7, pl:4, pr:4}}
            >LogOut
            </ButtonComponent>
        </Grid>
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          {/* <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items2}
          /> */}
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
              
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight:600,
              background: colorBgContainer,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
