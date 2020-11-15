import React, {useState} from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, CardImg, CardText, CardTitle, Col} from 'reactstrap';
import {WebApiUrl} from '../../config';
import Auth from '../global/auth/auth';

const MenuItem = (itemInfo = {id: 0, name: "", shortImg: "", description: "", weight: 0, price: 0, styles: {}}) => {
    const url = WebApiUrl;

    const orderButtonColour = itemInfo.styles.orderButtonColour ? itemInfo.styles.orderButtonColour : "primary";
    const detailButtonColour = itemInfo.styles.detailButtonColour ? itemInfo.styles.detailButtonColour : "primary";

    const [authIsOpen, setAuthIsOpen] = useState(false);
    // const [detailsIsOpen, setDetailsIsOpen] = useState(false);
    // const [details, setDetails] = useState({
    //     description: "",
    //     photo: "",

    // });

    const order = async () => {
        let isAuthResponse = await fetch(url + "/api/user/is-authenticated");
        let isAuthJson = await isAuthResponse.json();

        if (isAuthJson) {
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
        else {
            setAuthIsOpen(true);
        }
    };

    const showDetails = () => {
        // setDetailsIsOpen(true);


    };

    // const closeDetails = () => {
    //     // setDetailsIsOpen(false);
    // }

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
                        <Button color={orderButtonColour} style={{ width: '125px' }}
                            color="primary"
                            onClick={order}>Заказать</Button>
                        <Button color={detailButtonColour} style={{ width: '125px' }}
                            onClick={showDetails}>Подробнее</Button>
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