import { useState } from 'react';
import { Modal, ModalBody, Input, ModalFooter, Button } from 'reactstrap';
import { WebApiUrl } from '../../../config';

const Auth = (info = { isOpen: false, setIsOpen: () => { } }) => {
    const url = WebApiUrl;

    const [authName, setAuthName] = useState("");

    const auth = async () => {
        await fetch(url + "/api/user/new?name=" + authName, {
            method: "POST"
        });
        info.setIsOpen(false);
    }

    return (
        <Modal isOpen={info.isOpen}>
            <ModalBody>
                <h3>Представтесь, пожалуйста :) Как вас зовут?</h3>
                <Input onInput={e => setAuthName(e.target.value)} />
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={auth}>Отправить</Button>
                <Button color="danger" onClick={() => info.setIsOpen(false)}>Закрыть</Button>
            </ModalFooter>
        </Modal>
    )
}

export default Auth;