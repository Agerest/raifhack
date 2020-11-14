import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Button, Col, Container, Nav, Navbar, NavbarBrand, NavItem, NavLink, Collapse } from "reactstrap";
import IwGdupoAlert from '../IwGdupoAlert';
import pageNames from './pageNames';

const Header = () => {
    const history = useHistory();

    const [activeItem, setActiveItem] = useState(pageNames.menu);

    const [alertInfo, setAlertInfo] = useState({
        isOpen: false,
        title: "",
        text: ""
    });

    useEffect(() => {
        const init = () => {
            switch (history.location) {
                case "/app/" + pageNames.table: setActiveItem(pageNames.table);
                    break;
                case "/app/" + pageNames.menu: setActiveItem(pageNames.menu);
                    break;
                case "/app/" + pageNames.order: setActiveItem(pageNames.order);
                    break;
                case "/app/" + pageNames.settings: setActiveItem(pageNames.settings);
                    break;
            }
        }
        init();
    }, []);

    const toTable = () => {
        setActiveItem(pageNames.table);
        history.push("/app/table");
    }

    const toMenu = () => {
        setActiveItem(pageNames.menu);
        history.push("/app/menu");
    }

    const toSettings = () => {
        setActiveItem(pageNames.settings);
        history.push("/app/settings");
    }

    const toOrder = () => {
        setActiveItem(pageNames.order);
        history.push("/app/order");
    }

    const callWaiter = () => {
        setAlertInfo({
            isOpen: true,
            title: "Вызов официанта",
            text: "Официант скоро должен подойти :)",
        })
    }

    return (
        <>
            <Container className="p-0 m-0" fluid>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">iwGdupo</NavbarBrand>
                    <Collapse navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="#" active={activeItem == pageNames.table} onClick={toTable}>Стол</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" active={activeItem == pageNames.menu} onClick={toMenu}>Меню</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" onClick={callWaiter}>Позвать официанта</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" active={activeItem == pageNames.settings} onClick={toSettings}>Настройки</NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="#" active={activeItem == pageNames.order} onClick={toOrder}>Заказ</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </Container>
            <IwGdupoAlert
                isOpen={alertInfo.isOpen}
                alertTitle={alertInfo.title}
                alertText={alertInfo.text}
                onClose={() => setAlertInfo({ isOpen: false })}
            />
        </>
    );
}

export default Header;