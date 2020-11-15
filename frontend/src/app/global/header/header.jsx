import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Button, Col, Container, Nav, Navbar, NavbarBrand, NavItem, NavLink, Collapse } from "reactstrap";
import IwGdupoAlert from '../IwGdupoAlert';
import pageNames from './pageNames';

const Header = (props) => {
    const history = useHistory();

    const [activeItem, setActiveItem] = useState(pageNames.menu);

    const [alertInfo, setAlertInfo] = useState({
        isOpen: false,
        title: "",
        text: ""
    });

    const headerColor = props.styles.headColour ? props.styles.headColour : "light";
    const isDark = headerColor == "dark";

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
            <Container className="p-0 m-0 headerColour" fluid>
                <Navbar dark={isDark} color={headerColor} light expand="md">
                    {props.styles.imageUrl ?
                        <img className="mr-3" width="50" height="50" src={props.styles.imageUrl} />
                        : ""}
                    <NavbarBrand href="/">{props.styles.restaurantName}</NavbarBrand>
                    <Collapse navbar>
                        <Nav className="mr-auto" navbar>
                            {/* <NavItem color="primary">
                                <NavLink href="#" active={activeItem == pageNames.table} onClick={toTable}>Стол</NavLink>
                            </NavItem> */}
                            <NavItem style={{ backgroundColor: props.styles.headButtonsColour }}>
                                <NavLink href="#" active={activeItem == pageNames.menu} onClick={toMenu}>Меню</NavLink>
                            </NavItem>
                            <NavItem style={{ backgroundColor: props.styles.headButtonsColour }}>
                                <NavLink href="#" onClick={callWaiter}>Позвать официанта</NavLink>
                            </NavItem>
                            <NavItem style={{ backgroundColor: props.styles.headButtonsColour }}>
                                <NavLink href="#" active={activeItem == pageNames.settings} onClick={toSettings}>Настройки</NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                    <Nav navbar>
                        <NavItem className="headerButtonColor">
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