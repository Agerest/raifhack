import { Container, Row, Col, Card, Button, CardHeader, CardTitle } from "reactstrap";
import PaymentPageSdk from '@raiffeisen-ecom/payment-sdk';
const Order = () => {
    const paymentPage = new PaymentPageSdk('000001680200002-80200002', {
        url: 'https://test.ecom.raiffeisen.ru/pay'
    }); 
    const pay = () => {
        paymentPage.openWindow({amount: 10.10});
    }

    return (
        <Container className="mt-3">
            <Row>
                {/* Список заказов */}
                <Col lg='8' className="align-self-start">
                    <Card body>

                    </Card>
                </Col>
                {/* Оплатить */}
                <Col lg='4' className="align-self-start">
                    <Card body>
                        <CardTitle><h5>Сумма заказа: 5000 р</h5></CardTitle>
                        <Button color="warning" onClick={pay}>Оплатить</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Order;