import Link from 'umi/link';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React, { PureComponent } from "react";
// import SiderMenu from '../components/SiderMenu';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class HeaderShow extends PureComponent {
  render(){
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
        </Header>
        <Layout>
        {/* <SiderMenu
          // 不带Authorized参数的情况下如果没有权限,会强制跳到403界面
          // If you do not have the Authorized parameter
          // you will be forced to jump to the 403 interface without permission
          Authorized={Authorized}
          menuData={getMenuData()}
          collapsed={collapsed}
          location={location}
          isMobile={this.state.isMobile}
          onCollapse={this.handleMenuCollapse}
        /> */}
          <Sider
            collapsible
          >
            <Menu
              selectedKeys={[this.props.location.pathname]}
              mode="inline"
              theme="dark"
            >
              <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                <Menu.Item key="/">
                  <Link to="/"><Icon type="home" />Home</Link>
                </Menu.Item>
                <Menu.Item key="/users/list">
                  <Link to="/users/list"><Icon type="bars" />list</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="user" />subnav 1</span>}>
                <Menu.Item key="/umi">
                  <a href="https://github.com/umijs/umi" target="_blank">umi</a>
                </Menu.Item>
                <Menu.Item key="/dva">
                  <a href="https://github.com/dvajs/dva" target="_blank">dva</a>
                </Menu.Item>
                <Menu.Item key="/404">
                  <Link to="/page-you-dont-know"><Icon type="frown-circle" />404</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default HeaderShow;