import React, { useState } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, CardImg, CardText, CardTitle, Col, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { WebApiUrl } from '../../config';

const MenuItem = (itemInfo = { id: 0, name: "", shortImg: "", description: "", weight: 0, price: 0, styles: {} }) => {
    const url = WebApiUrl;

    const orderButtonColour = itemInfo.styles.orderButtonColour ? itemInfo.styles.orderButtonColour : "primary";
    const detailButtonColour = itemInfo.styles.detailButtonColour ? itemInfo.styles.detailButtonColour : "primary";

    const [detailsIsOpen, setDetailsIsOpen] = useState(false);
    const [details, setDetails] = useState({
        description: "",
        photo: "",

    });

    const order = async () => {
        fetch(url + "/api/order/new", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tableId: 0,
                menuId: itemInfo.id
            })
        })
    }


    const showDetails = () => {
        setDetailsIsOpen(true);
    };

    const closeDetails = () => {
        setDetailsIsOpen(false);
    }

    return (
        <>
            <Col className="mt-3" lg="4">
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle>{itemInfo.name}</CardTitle>
                    </CardHeader>
                    <CardImg className="rounded p-3" src="https://bipbap.ru/wp-content/uploads/2017/06/14813uxVsXjAPBFmIovEzZkHNnR.jpg"></CardImg>
                    <CardBody className="text-left">
                        <CardText>{itemInfo.description}</CardText>
                        <CardText>Вес: {itemInfo.weight} г.</CardText>
                        <CardText>Цена: {itemInfo.price} рублей</CardText>
                    </CardBody>
                    <CardFooter className="d-flex justify-content-around">
                        <Button color={orderButtonColour} style={{ width: '125px' }}
                            color="primary"
                            onClick={order}>Заказать</Button>
                        <Button color={detailButtonColour} style={{ width: '125px' }}
                            onClick={showDetails}>Подробнее</Button>
                    </CardFooter>
                </Card>
            </Col>
            <Modal isOpen={detailsIsOpen}>
                <ModalHeader>
                    <h4>{itemInfo.name}</h4>
                </ModalHeader>
                <ModalBody>
                </ModalBody>
                <ModalFooter>
                    <Button color={detailButtonColour} onClick={closeDetails}>Закрыть</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default MenuItem;