import React, { useEffect, useState } from 'react';
import { Container, Row } from 'reactstrap';
import config, { WebApiUrl } from '../../config';
import MenuItem from './menuItem';

const Menu = () => {
    const [items, setItems] = useState([]);

    useEffect(async () => {
        const load = async () => {
            let url = WebApiUrl;

            let menuItems = await fetch(url + "/api/menu/list");

            if (menuItems.ok){
                let json = await menuItems.json();
                setItems(json);
            }
            
        };
        await load();
    }, []);

    return (
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
                    />
                )}
            </Row>
        </Container>
    )
};

export default Menu;