import React from "react";
import 'antd/dist/antd.css';
import '../Styles/Dashboard.css'
import { Link } from 'react-router-dom';
import { Layout, Menu, Row, Col, Button, Dropdown } from 'antd';
import { PlusOutlined , NotificationOutlined, UserOutlined } from '@ant-design/icons';

const { Header } = Layout;

const add = (
    <Menu>
        <Menu.Item key="1">
            Agregar Cliente
        </Menu.Item>
        <Menu.Item key="2">
            Agregar Deuda
        </Menu.Item>
        <Menu.Item key="3">
            Agregar Pago
        </Menu.Item>
    </Menu>
);

const profile = (
    <Menu>
        <Menu.Item key="1">
            Perfil
        </Menu.Item>
        <Menu.Item key="2">
            Configuración
        </Menu.Item>
        <Menu.Item key="3">
            Feedback
        </Menu.Item>
    </Menu>
);

const notificaciones = (
    <Menu>
        <Menu.Item key="1">
            notificación #1
        </Menu.Item>
        <Menu.Item key="2">
            notificación #2
        </Menu.Item>
        <Menu.Item key="3">
            notificación #3
        </Menu.Item>
    </Menu>
);

class HeaderNav extends React.Component{

    render(){
        return(
            <Row>
                <Col sm = {24}>
                    <Header className="header">
                    {/* <div className = "paLogo" /> */}
                    <Link to = '/DashbMain' className = "white-text">PrestApp</Link>
                        <Menu theme="dark" mode="horizontal" style = {{position: "absolute", top: 0, right: 0}} defaultSelectedKeys={['2']}>
                            <Menu.Item >
                                <div>
                                    <Dropdown theme = "dark" overlay={add}>
                                        <Button className = "white-text d-Button">
                                            <PlusOutlined/>Agregar Transacción
                                        </Button>
                                    </Dropdown>
                                </div> 
                            </Menu.Item>
                            <Menu.Item >
                                <div>
                                    <Dropdown theme = "dark" overlay={notificaciones}>
                                        <Button className = "white-text d-Button">
                                            <NotificationOutlined/>Notificaciones
                                        </Button>
                                    </Dropdown>
                                </div>
                            </Menu.Item>
                            <Menu.Item >
                                <div>
                                    <Dropdown theme = "dark" overlay={profile}>
                                        <Button className = "white-text d-Button">
                                            <UserOutlined/>Usuario
                                        </Button>
                                    </Dropdown>
                                </div>
                            </Menu.Item>
                        </Menu>
                    </Header>
                </Col>
            </Row>
        )
    }
}

export default HeaderNav