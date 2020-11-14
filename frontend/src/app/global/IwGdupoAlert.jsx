import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

const IwGdupoAlert = (alertInfo = { isOpen: false, alertTitle: "", alertText: "", onClose: () => { } }) => {
    return (
        <Modal isOpen={alertInfo.isOpen}>
            <ModalHeader>
                <h3>{alertInfo.alertTitle}</h3>
            </ModalHeader>
            <ModalBody>
                <p>{alertInfo.alertText}</p>
            </ModalBody>
            <ModalFooter>
                <Button style={{width: '150px'}} className="m-auto" color="success" size="md" onClick={alertInfo.onClose}>Ok</Button>
            </ModalFooter>
        </Modal>
    )
};

export default IwGdupoAlert;