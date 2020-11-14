import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Col, Collapse, Card, CardBody, ListGroup, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledButtonDropdown } from "reactstrap";
import TableItem from './tableItem';

const Table = () => {
    const [tableItems, setTableItems] = useState([]);

    useEffect(() => {
        const load = () => {

        };
        load();
    }, []);

    return (
        <Container className="mt-3">
            <Row>
                {tableItems.map((item, index) =>
                    <TableItem 
                        name={item.name}
                        orders={item.orders}
                        totalPrice={item.totalPrice}
                    />
                )}
            </Row>
        </Container>
    )
}

export default Table;