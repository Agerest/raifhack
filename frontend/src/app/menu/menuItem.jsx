import React, { useState } from 'react';
import {
    Col, Card,
    CardHeader, CardBody, CardText, CardFooter,
    Button, CardImg, Modal, ModalHeader,
    ModalBody, ModalFooter, CardTitle, Input
} from 'reactstrap';
import { WebApiUrl } from '../../config';
import Auth from '../global/auth/auth';

const MenuItem = (itemInfo = { id: 0, name: "", shortImg: "", description: "", weight: 0, price: 0 }) => {
    const url = WebApiUrl;

    const [authIsOpen, setAuthIsOpen] = useState(false);
    const [detailsIsOpen, setDetailsIsOpen] = useState(false);
    const [details, setDetails] = useState({
        description: "",
        photo: "",

    });

    const order = async () => 
    {
        console.log("order");
        let isAuthResponse = await fetch(url + "/api/user/is-authenticated");
        let isAuthJson = await isAuthResponse.json();

        if (isAuthJson) {

        }
        else {
            setAuthIsOpen(true);
        }
    };

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
            <Auth
                isOpen={authIsOpen}
                setIsOpen={setAuthIsOpen}
            />

        </>
    );
}

export default MenuItem;