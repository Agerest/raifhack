import { useState } from "react";
import { Card, CardTitle, Container, CardHeader, CardBody, InputGroup, CardFooter, Button, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { WebApiUrl } from "../../config";
import useSettings from "./useSettings";

const Settings = (props) => {
    const url = WebApiUrl;
    const settings = useSettings();

    const [urlLogo, setUrlLogo] = useState(props.styles.imageUrl);
    const [name, setName] = useState(props.styles.restaurantName);
    const [headerColor, setHeaderColor] = useState(props.styles.headColour);
    const [headButtonsColour, setHeadButtonsColour] = useState(props.styles.headButtonsColour);
    const [detailButtonColour, setDetailButtonColour] = useState(props.styles.detailButtonColour);
    const [orderButtonColour, setOrderButtonColour] = useState(props.styles.orderButtonColour);
    const [payButtonColour, setPayButtonColour] = useState(props.styles.payButtonColour);

    const save = () => {
        settings.set({
            restaurantName: name,
            headColour: headerColor,
            headButtonsColour: headButtonsColour,
            orderButtonColour: orderButtonColour,
            detailButtonColour: detailButtonColour,
            payButtonColour: payButtonColour,
            imageUrl: urlLogo
        }).then(() => window.location.href = "/")
    }

    return (
        <Container className="mt-3 mb-3">
            <Card>
                <CardHeader>
                    <CardTitle tag="h4">Настройки</CardTitle>
                </CardHeader>
                <CardBody>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Логотип</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Введите ссылку на логотип" value={urlLogo} onInput={e => setUrlLogo(e.target.value)} />
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Название ресторана</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Введите название цвета или его HEX код" value={name} onInput={e => setName(e.target.value)} />
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Цвет шапки</InputGroupText>
                        </InputGroupAddon>
                        <Input type="select" value={headerColor} name="headColour" onInput={e => setHeaderColor(e.target.value)}>
                            <option>dark</option>
                            <option>primary</option>
                            <option>light</option>
                        </Input>
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Цвет кнопки "Заказать" в меню</InputGroupText>
                        </InputGroupAddon>
                        <Input type="select" value={orderButtonColour} onInput={e => setOrderButtonColour(e.target.value)}>
                            <option>primary</option>
                            <option>secondary</option>
                            <option>success</option>
                            <option>info</option>
                            <option>warning</option>
                            <option>danger</option>
                        </Input>
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Цвет кнопки "Подробнее" в меню</InputGroupText>
                        </InputGroupAddon>
                        <Input type="select" value={detailButtonColour} onInput={e => setDetailButtonColour(e.target.value)}>
                            <option>primary</option>
                            <option>secondary</option>
                            <option>success</option>
                            <option>info</option>
                            <option>warning</option>
                            <option>danger</option>
                        </Input>
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Цвет кнопки "Оплатить" в заказе</InputGroupText>
                        </InputGroupAddon>
                        <Input type="select" value={payButtonColour} onInput={e => setPayButtonColour(e.target.value)} >
                            <option>secondary</option>
                            <option>success</option>
                            <option>info</option>
                            <option>warning</option>
                            <option>danger</option>
                        </Input>
                    </InputGroup>
                </CardBody>
                <CardFooter>
                    <Button color="primary" onClick={save}>Применить</Button>
                </CardFooter>
            </Card>
        </Container>
    )
};

export default Settings;