import React from "react";
import 'antd/dist/antd.css';
import './Dashboard.css'
import { Row, Col, Container, Navbar, Nav, NavDropdown,  } from "react-bootstrap"

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, SettingOutlined, NotificationOutlined, SwapOutlined, PaperClipOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class Dashboard extends React.Component {

    render() {
    return (
        <Container fluid>
            <Row className = "side-nav">
                <Col>
                    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                        <Navbar.Brand> PrestApp </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className = "ml-auto" >
                                <Nav.Link eventKey = {1}> Notificaciones </Nav.Link>
                                <Nav.Link eventKey = {2}> Usuario </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
            <Row>
                <Col sm = {2}>
                    <Sider className="site-layout-background" width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                        >
                            <SubMenu key="sub1" icon={<PaperClipOutlined />} title="Administración">
                                <Menu.Item key="1">Deudas</Menu.Item>
                                <Menu.Item key="2">Pagos</Menu.Item>
                                <Menu.Item key="3">Clientes</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<SwapOutlined />} title="Finanzas">
                                <Menu.Item key="4">Proyecciones</Menu.Item>
                                <Menu.Item key="5">Estadisticas</Menu.Item>
                                <Menu.Item key="6">Acreedores</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" icon={<SettingOutlined />} title="Opciones">
                                <Menu.Item key="7">Ayuda</Menu.Item>
                                <Menu.Item key="8">Reportar Error</Menu.Item>
                                <Menu.Item key="9">Configuración</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                </Col>
                <Col sm = {10}>
                    <Layout>
                        <Content style={{ padding: '0 50px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                                    <Row>
                                        <Col sm = {12} className = {"center fieldArnd"}>
                                            <h2>
                                                Bienvenido a PrestApp, Usuario!
                                            </h2>
                                        </Col>
                                        <Col sm = {12} className = "center fieldArnd">
                                            <h3>
                                                Historial de transacciones!
                                            </h3>
                                        </Col>
                                        <Col sm = {12} className = "fieldArnd" style = {{padding: '20px'}}>
                                            <p>Hoy, 10 de Junio de 2020!</p>
                                            <hr/>
                                            <ul>
                                                <li>Occaecat proident velit proident exercitation cillum in esse esse incididunt cillum irure sint .</li>
                                                <li>Occaecat proident velit proident exercitation cillum in esse esse incididunt cillum irure sint .</li>
                                                <li>Occaecat proident velit proident exercitation cillum in esse esse incididunt cillum irure sint .</li>
                                                <li>Occaecat proident velit proident exercitation cillum in esse esse incididunt cillum irure sint .</li>
                                            </ul>
                                            <p>Hace una semana, 3 de Junio de 2020!</p>
                                            <hr/>
                                            <ul>
                                                <li>Occaecat proident velit proident exercitation cillum in esse esse incididunt cillum irure sint .</li>
                                                <li>Occaecat proident velit proident exercitation cillum in esse esse incididunt cillum irure sint .</li>
                                                <li>Occaecat proident velit proident exercitation cillum in esse esse incididunt cillum irure sint .</li>
                                                <li>Occaecat proident velit proident exercitation cillum in esse esse incididunt cillum irure sint .</li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Content>
                            </Layout>
                        </Content>
                    </Layout>
                </Col>
                <Col>
                    <Footer className = "center">PrestApp ©2020 Derechos reservados</Footer>
                </Col>
            </Row>
            </Container>
        )
    }
}

export default Dashboard;