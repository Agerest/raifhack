import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Button, Col, Container, Nav, Navbar, NavbarBrand, NavItem, Row, NavLink } from "reactstrap";
import IwGdupoAlert from '../IwGdupoAlert';
import pageNames from './pageNames';

const Header = () => {
    const [pageName, setPageName] = useState("");
    const history = useHistory();

    const [tableIsActive, setTableIsActive] = useState(false);
    const [menuIsActive, setMenuIsActive] = useState(false);
    const [orderIsActive, setOrderIsActive] = useState(false);

    const [alertInfo, setAlertInfo] = useState({
        isOpen: false,
        title: "",
        text: ""
    });

    useEffect(() => {
        const init = () => {
            clearActive();

            console.log("location", );

            switch (history.location) {
                case "/app/" + pageNames.table: setTableIsActive(true);
                    break;
                case "/app/" + pageNames.menu: setMenuIsActive(true);
                    break;
                case "/app/" + pageNames.order: setOrderIsActive(true);
                    break;
            }
        }
        init();
    }, []);

    const clearActive = () => {
        if (tableIsActive) setTableIsActive(false);
        if (menuIsActive) setMenuIsActive(false);
        if (orderIsActive) setOrderIsActive(false);
    }

    const toTable = () => {
        clearActive();

        setPageName(pageNames.table);
        setTableIsActive(true);
        history.push("/app/table");
    }

    const toMenu = () => {
        clearActive();

        setPageName(pageNames.menu);
        setMenuIsActive(true);
        history.push("/app/menu");
    }

    const toOrder = () => {
        clearActive();

        setPageName(pageNames.order);
        setOrderIsActive(true);
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
            <Container fluid>
                <Nav className="row text-center" tabs>
                    <NavItem className="col-3">
                        <NavLink href="#" active={tableIsActive} onClick={toTable}>Стол</NavLink>
                    </NavItem>
                    <NavItem className="col-3">
                        <NavLink href="#" active={menuIsActive} onClick={toMenu}>Меню</NavLink>
                    </NavItem>
                    <NavItem className="col-3">
                        <NavLink href="#" active={orderIsActive} onClick={toOrder}>Заказ</NavLink>
                    </NavItem>
                    <NavItem className="col-3">
                        <NavLink href="#" onClick={callWaiter}>Позвать официанта</NavLink>
                    </NavItem>
                </Nav>
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