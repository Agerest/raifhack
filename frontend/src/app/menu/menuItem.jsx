import React, { useState } from 'react';
import {
    Col, Card,
    CardHeader, CardBody, CardText, CardFooter,
    Button, CardImg, Modal, ModalHeader,
    ModalBody, ModalFooter, CardTitle
} from 'reactstrap';

const MenuItem = (itemInfo = { id: 0, name: "", shortImg: "", description: "", weight: 0, price: 0 }) => {

    const [detailsIsOpen, setDetailsIsOpen] = useState(false);
    const [details, setDetails] = useState({
        description: "",
        photo: "",

    });

    const order = () => {

    };

    const showDetails = () => {
        setDetailsIsOpen(true);


    };

    const closeDetails = () => {
        setDetailsIsOpen(false);
    }

    return (
        <>
            <Col lg="4">
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle tag="h3">{itemInfo.name}</CardTitle>
                    </CardHeader>
                    <CardImg src={itemInfo.shortImg}></CardImg>
                    <CardBody>
                        <CardText>{itemInfo.description}</CardText>
                        <CardText>Вес: {itemInfo.weight}</CardText>
                        <CardText>Цена: {itemInfo.price}</CardText>
                    </CardBody>
                    <CardFooter className="d-flex justify-content-around">
                        <Button color="success" onClick={order}>Заказать</Button>
                        <Button color="primary" onClick={showDetails}>Подробнее</Button>
                    </CardFooter>
                </Card>
            </Col>
            <Modal isOpen={detailsIsOpen}>
                <ModalHeader>
                    <h2>{itemInfo.name}</h2>
                </ModalHeader>
                <ModalBody>
                    <img src={details.photo}></img>
                    <p>{details.description}</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={order}>Заказать</Button>
                    <Button color="secondary" onClick={closeDetails}>Закрыть</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default MenuItem;