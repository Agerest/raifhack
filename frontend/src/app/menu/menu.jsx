import React, { useEffect, useState } from 'react';
import { Container, Row } from 'reactstrap';
import MenuItem from './menuItem';

const Menu = () => {
    const [items, setItems] = useState([]);

    const load = () => {
    };

    useEffect(() => {
        load();
    }, []);

    return (
        <Container className="mt-3">
            <Row className="justify-content-around">
                {items.map(item =>
                    <MenuItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        shortImg={item.shortImg}
                        description={item.description}
                        weight={item.weight}
                        price={item.price}
                    />
                )}
            </Row>
        </Container>
    )
};

export default Menu;