import React, { useEffect, useState } from 'react';
import { Container, Row } from "reactstrap";
import { WebApiUrl } from '../../config';
import useSettings from '../settings/useSettings';
import TableItem from './tableItem';

const Table = (props) => {
    const url = WebApiUrl;

    const settings = useSettings();

    useEffect(() => {
        const load = async () => {
            await settings.get();
        }
        load();
    })

    const [tableItems, setTableItems] = useState([]);

    useEffect(() => {
        const load = async () => {
            let getUsersResponse = await fetch(url + "/api/user/get");

            if (getUsersResponse.ok) {
                let usersReponse = await getUsersResponse.json();
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