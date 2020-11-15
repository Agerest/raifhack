import {
    Button,
    Card,
    CardBody,
    CardHeader,
    CardText,
    Col,
    Container,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row
} from "reactstrap";
import PaymentPageSdk from '@raiffeisen-ecom/payment-sdk';
import { useEffect, useState } from "react";
import { WebApiUrl } from "../../config";

const Order = (props) => {
    const url = WebApiUrl;

    const payButtonColour = props.styles.payButtonColour ? props.styles.payButtonColour : "primary";

    const [isChecked, setIsChecked] = useState([]);

    const [price, setPrice] = useState(0);
    const [totalOrder, setTotalOrder] = useState([]);
    const [unpaidOrder, setUnpaidOrder] = useState({ orders: [], totalPrice: 0 });

    useEffect(() => {
        const load = async () => {
            let totalOrderResp = await fetch(url + "/api/order/list");
            let unpaidOrderResponse = await fetch(url + "/api/order/list/unpaid?tableId=0");

            if (totalOrderResp.ok && unpaidOrderResponse.ok) {
                let totalOrderJson = await totalOrderResp.json();
                setTotalOrder(totalOrderJson);
                console.log("load => totalOrderJson", totalOrderJson);

                // let unpaidOrderJson = await unpaidOrderResponse.json();
                let unpaidOrderJson = {
                    orders: [{
                        id: 0,
                        name: 'dsadsda',
                        price: 988,
                    }],
                    totalPrice: 988
                }
                setUnpaidOrder(unpaidOrderJson);
                console.log("load => unpaidOrderJson", unpaidOrderJson);

                let checked = [];

                for (let i = 0; i < unpaidOrderJson.orders.length; i++) {
                    checked.push({ orderId: i, isCheck: false });
                }

                setIsChecked(checked);
                console.log("load => checked", checked);
            }
        }
        load();
    }, []);

    const onCheck = (orderId) => {
        isChecked.filter(x => x.orderId == orderId)[0].isCheck = !isChecked.filter(x => x.orderId == orderId)[0].isCheck;
        setIsChecked(isChecked);
    }

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

    const getPaymentInfo = async () => {
        let getPaymentInfoResp = await fetch(url + "/api/user/get/payment-info");

        if (getPaymentInfoResp.ok) {
            let getPaymentInfoJson = await getPaymentInfoResp.json();

            setPrice(getPaymentInfoJson.totalSum);
        }
    }

    const savePaymentInfo = () => {
        let ordersId = isChecked.filter(x => x.isCheck).map(x => x.orderId);

        fetch(url + "/api/payment-info/new", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ordersId: ordersId })
        });
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
                    <Card>
                        <CardBody>
                            <Button color="primary" onClick={savePaymentInfo}>Сохранить</Button>
                            <Button color="primary" onClick={getPaymentInfo}>Обновить</Button>
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
                                            <Input addon
                                                type="checkbox"
                                                checked={isChecked.filter(x => x.orderId == index).isCheck}
                                                onChange={() => onCheck(index)}
                                            />
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
                            {unpaidOrder.totalPrice ?
                                <h5>Осталось к оплате: {unpaidOrder.totalPrice}</h5>
                                : ""}
                            {price ?
                                <>
                                    <h5>Сумма к оплате: {price}</h5>
                                    <Button color={payButtonColour} onClick={pay}>Оплатить</Button>
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