import { useEffect, useState } from "react";
import { Card, CardTitle, Container, CardHeader, CardBody, InputGroup, CardFooter, Button, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { WebApiUrl } from "../../config";
import useSettings from "./useSettings";

const Settings = () => {
    const url = WebApiUrl;
    const settings = useSettings();

    const [name, setName] = useState("");
    const [headerColor, setHeaderColor] = useState("");
    const [headButtonsColour, setHeadButtonsColour] = useState("");
    const [detailButtonColour, setDetailButtonColour] = useState("");
    const [orderButtonColour, setOrderButtonColour] = useState("");
    const [payButtonColour, setPayButtonColour] = useState("");

    useEffect(async () => {
        let load = async () => {
            let st = await settings.get();

            if (st) {
                setName(st.restaurantName);
                setHeaderColor(st.headColour);
                setHeadButtonsColour(st.headButtonsColour);
                setDetailButtonColour(st.detailButtonColour);
                setOrderButtonColour(st.orderButtonColour);
                setPayButtonColour(st.payButtonColour);
            }
        }
        await load();
    }, [])

    const save = () => {
        settings.set({
            restaurantName: name,
            headColour: headerColor,
            headButtonsColour: headButtonsColour,
            orderButtonColour: orderButtonColour,
            detailButtonColour: detailButtonColour,
            payButtonColour: payButtonColour
        })
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
                            <InputGroupText>Название ресторана</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Введите название цвета или его HEX код" value={name} onInput={e => setName(e.target.value)} />
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Цвет шапки</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Введите название цвета или его HEX код" value={headerColor} onInput={e => setHeaderColor(e.target.value)} />
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Цвет кнопок в шапке</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Введите название цвета или его HEX код" value={headButtonsColour} onInput={e => setHeadButtonsColour(e.target.value)} />
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Цвет кнопки "Заказать" в меню</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Введите название цвета или его HEX код" value={orderButtonColour} onInput={e => setOrderButtonColour(e.target.value)} />
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Цвет кнопки "Подробнее" в меню</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Введите название цвета или его HEX код" value={detailButtonColour} onInput={e => setDetailButtonColour(e.target.value)} />
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Цвет кнопки "Оплатить" в заказе</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Введите название цвета или его HEX код" value={payButtonColour} onInput={e => setPayButtonColour(e.target.value)} />
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