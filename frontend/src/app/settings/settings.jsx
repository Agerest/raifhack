import { useState } from "react";
import { Card, CardTitle, Container, CardHeader, CardBody, InputGroup, CardFooter, Button, InputGroupAddon, InputGroupText, Input } from "reactstrap";

const Settings = () => {
    const [nameInput, setNameInput] = useState("");
    const [bgColorInput, setBgColorInput] = useState("");
    const [headerColorInput, setHeaderColorInput] = useState("");

    const save = () => {

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
                        <Input placeholder="название" onInput={e => setNameInput(e.target.value)} />
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Цвет шапки</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="цвет шапки" onInput={e => setNameInput(e.target.value)} />
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Цвет кнопок в шапке</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="цвет кнопок в шапке" onInput={e => setNameInput(e.target.value)} />
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Цвет фона</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="цвет фона" onInput={e => setNameInput(e.target.value)} />
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Цвет кнопки "Заказать" в меню</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="цвет фона" onInput={e => setNameInput(e.target.value)} />
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Цвет кнопки "Подробнее" в меню</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="цвет фона" onInput={e => setNameInput(e.target.value)} />
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Цвет кнопки "Оплатить" в заказе</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="цвет фона" onInput={e => setNameInput(e.target.value)} />
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