import {
  LaptopOutlined,
  NotificationOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import React from "react";
import "../../styles/Dashboard/Dashboard.css";
import logo from "../../../assets/telogo.png";
import { Grid } from "@mui/material";
import search from "../../../assets/search.png";
import batch from "../../../assets/batch.png";
import mentor from "../../../assets/mentor.png";
import request from "../../../assets/request.png";

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
        <Grid
          container
          columnSpacing={7}
          rowSpacing={2}
          justifyContent="space-evenly"
          display="flex"
        >
          <Grid item lg={2} md={2} xs={2}>
            <img src={logo} alt="logo" width="6px" height="60px" />
          </Grid>
          <Grid item xs={8} lg={8} md={8} display="flex">
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
          <Grid item xs={2} lg={2} md={2}>
            <ButtonComponent
              label="logout"
              size="small"
              variant="outlined"
              fullWidth
            >
              LogOut
            </ButtonComponent>
          </Grid>
        </Grid>
      </Header>
      <Layout>
        <Sider
          width={90}
          style={{
            background: colorBgContainer,
          }}
        >
          <Grid
            container
            rowSpacing={0}
            columnSpacing={0}
            justifyContent="space-evenly"
            display="grid"
          >
            <Grid
              className="slider"
              sx={{ mt: 11 }}
              alignItems="center"
              alignContent="center"
            >
              <img src={batch} style={{ filter:"drop-shadow(0 0 0 #075575)" }} />
              <h6>Batch</h6>
            </Grid>
            <Grid className="slider">
              <img src={mentor} style={{ color: "red" }} />
              <h6>Mentor</h6>
            </Grid>
            <Grid className="slider">
              <img src={request} style={{ color: "red" }} />
              <h6>Request</h6>
            </Grid>
          </Grid>

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
              minHeight: 600,
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
