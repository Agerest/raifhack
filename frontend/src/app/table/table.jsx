import React, { useEffect, useState } from 'react';
import { Container, Row } from "reactstrap";
import { WebApiUrl } from '../../config';
import TableItem from './tableItem';

const Table = () => {
    const url = WebApiUrl;
    const [tableItems, setTableItems] = useState([]);

    useEffect(() => {
        const load = async () => {
            let getUsersResponse = await fetch(url + "/api/user/get");

            if (getUsersResponse.ok) {
                let usersReponse = await getUsersResponse.json();
                setTableItems(usersReponse);
            }
        };
        load();
    }, []);

    return (
        <Container className="mt-3">
            <Row>
                {tableItems.map((item, index) =>
                    <TableItem
                        key={index}
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