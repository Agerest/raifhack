import React, { useEffect, useState } from 'react';
import { Container, Row } from 'reactstrap';
import { WebApiUrl } from '../../config';
import useSettings from '../settings/useSettings';
import MenuItem from './menuItem';
import Auth from '../global/auth/auth';

const Menu = (props) => {
    console.log(props)
    let url = WebApiUrl;

    const [authIsOpen, setAuthIsOpen] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const load = async () => {
            let isAuthResponse = await fetch(url + "/api/user/is-authenticated");
            let isAuthJson = await isAuthResponse.json();

            if (!isAuthJson) {
                setAuthIsOpen(true);
                return;
            }

            let menuItems = await fetch(url + "/api/menu/list");

            if (menuItems.ok) {
                let json = await menuItems.json();
                setItems(json);
            }
        };
        load();
    }, []);

    return (
        <>
            <Container className="mt-3 mb-3">
                <Row className="justify-content-around">
                    {items.map(item =>
                        <MenuItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            shortImg={item.shortImg}
                            description={item.shortDescription}
                            weight={item.weight}
                            price={item.price}
                            styles={props.styles}
                        />
                    )}
                </Row>
            </Container>
            <Auth 
                isOpen={authIsOpen}
                setIsOpen={setAuthIsOpen}
            />
        </>
    )
};

export default Menu;