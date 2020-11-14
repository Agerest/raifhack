import { Col, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const TableItem = (personInfo = { name: "", orders: [{ orderName: "", orderPrice: 0 }], totalPrice: 0 }) => {
    return (
        <Col lg="4">
            <UncontrolledButtonDropdown className="w-100">
                <DropdownToggle caret>
                    {personInfo.name}
                </DropdownToggle>
                <DropdownMenu className="w-100">
                    {personInfo.orders.map((item, index) =>
                        <DropdownItem className="d-flex justify-content-between" key={index}>
                            <p>{item.orderName}</p>
                            <p>{item.orderPrice}</p>
                        </DropdownItem>
                    )}
                    <DropdownItem>
                        Итого: {personInfo.totalPrice} р
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
        </Col>
    )
}

export default TableItem;