import { Container, Row, Col, Card, Button, CardHeader, CardTitle, InputGroup, InputGroupAddon, InputGroupText, Input, CardText, CardBody } from "reactstrap";
import PaymentPageSdk from '@raiffeisen-ecom/payment-sdk';
import { useEffect, useState } from "react";
import { WebApiUrl } from "../../config";

const Order = (props) => {
    const url = WebApiUrl;

    const [price, setPrice] = useState(0);
    const [totalOrder, setTotalOrder] = useState([]);
    const [unpaidOrder, setUnpaidOrder] = useState({ orders: [], totalPrice: 0 });

    useEffect(() => {
        const load = async () => {
            let totalOrderResp = await fetch(url + "/api/order/list");
            let unpaidOrderResponse = await fetch(url + "/api/order/list/unpaid?tableId=0");

            if (totalOrderResp.ok && unpaidOrderResponse.ok) {
                let totalOrderJson = await totalOrderResp.json();
                if (totalOrderJson.length) setTotalOrder(totalOrderJson);

                let unpaidOrderJson = await unpaidOrderResponse.json();
                if (unpaidOrderJson.length) setUnpaidOrder(unpaidOrderJson);
            }
        }
        load();
    }, []);


    const pay = async () => {
        let unpaidResponse = await fetch(url + "/api/order/list/unpaid");
        let unpaid = await unpaidResponse.json();

        if (!unpaid.length) {
            const paymentPage = new PaymentPageSdk('000001680200002-80200002', {
                url: 'https://test.ecom.raiffeisen.ru/pay'
            });

            paymentPage.openWindow({ amount: 10.10 });
        }
    }

    return (
        <Container className="mt-3">
            <Row>
                {/* Список заказов */}
                <Col lg='8' className="align-self-start">
                    <Card>
                        <CardHeader>
                            <h3>Ваш заказ</h3>
                        </CardHeader>
                        <CardBody>
                            <CardText>Выберите те позиции, которые вы хотите оплатить</CardText>
                            <CardText>Если одну позицию выберет несколько человек,
                            то цена за эту позицию будет разделена между этими людьми</CardText>
                        </CardBody>
                    </Card>
                    <br />
                    {unpaidOrder.orders.length ? <Card>
                        <CardHeader>
                            <h3>Неоплаченные позиции</h3>
                        </CardHeader>
                        <CardBody>
                            {unpaidOrder.orders.map((item, index) =>
                                <InputGroup key={index}>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <Input checked disabled addon type="checkbox" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input disabled placeholder={item.name} />
                                </InputGroup>
                            )}
                        </CardBody>
                    </Card> : ""}

                </Col>
                {/* Оплатить */}
                <Col lg='4' className="align-self-start">
                    {totalOrder.length || unpaidOrder.totalPrice || price ?
                        <Card body>
                            {totalOrder.length ?
                                <h5>Сумма заказа: {totalOrder.reduce((prev, next) => prev.price + next.price)}</h5>
                                : ""}
                            {unpaidOrder.totalPrice ?
                                <h5>Осталось к оплате: {unpaidOrder.totalPrice}</h5>
                                : ""}
                            {price ?
                                <>
                                    <h5>Сумма к оплате: {price}</h5>
                                    <Button className="payButtonColour" color="warning" onClick={pay}>Оплатить</Button>
                                </>
                                : ""}
                        </Card>
                        : ""}
                </Col>
            </Row>
        </Container >
    )
}

export default Order;