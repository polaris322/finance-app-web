import React, {useState} from 'react';
import {Modal, Form, NavDropdown, Row, Col, InputGroup, Alert} from 'react-bootstrap';
import {LiaRecycleSolid} from "react-icons/lia";
import {useDispatch} from "react-redux";
import {
    PAYMENT_FREQUENCY,
    PAYMENT_FREQUENCY_ENUM,
    PAYMENT_METHOD,
    PAYMENT_METHOD_ENUM,
    PAYMENT_TYPE,
    PAYMENT_TYPE_ENUM
} from "../config/enums";
import {createIncome} from "../services/IncomeService";
import {updateIncomeList} from "../store/actions/incomes";
import {getFirstErrorMessage} from "../utils";
import {format} from "date-fns";

export const IgresoDialog = () => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    const [paymentType, setPaymentType] = useState(PAYMENT_TYPE_ENUM.DYNAMIC);
    const [incomeName, setIncomeName] = useState('');
    const [paymentMethod, setPaymentMethod] = useState(PAYMENT_METHOD_ENUM.SCOTIABANK);
    const [paymentFrequency, setPaymentFrequency] = useState(PAYMENT_FREQUENCY_ENUM.MONTHLY);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [amount, setAmount] = useState(1.00);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleClose = () => {
        clearForm();
        setShow(false);
    }
    const handleShow = () => setShow(true);
    const clearForm = () => {
        setPaymentFrequency(PAYMENT_FREQUENCY_ENUM.MONTHLY);
        setPaymentType(PAYMENT_TYPE_ENUM.DYNAMIC);
        setAmount(1.00);
        setStartDate('');
        setEndDate('');
        setIncomeName('');
        setPaymentMethod(PAYMENT_METHOD_ENUM.SCOTIABANK);
    }

    /**
     * Create new income
     * @param e
     */
    const newIncome = (e) => {
        e.preventDefault();
        setLoading(true);
        let end = format(new Date(), 'Y-MM-dd') ;
        if (endDate) {
            end = endDate
        }
        createIncome(incomeName, amount, paymentType, paymentFrequency, paymentMethod, startDate, end)
            .then(res => {
                setLoading(false);
                if (res.success) {
                    dispatch(updateIncomeList(res.data));
                    handleClose();
                } else {
                    setError(getFirstErrorMessage(res.data));
                }
            }).catch(e => {
            setError(getFirstErrorMessage(e.data));
            setLoading(false);
        });
    }

    return (
        <>
            <NavDropdown.Item
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    handleShow();
                }}
            >
                <LiaRecycleSolid /> Ingreso
            </NavDropdown.Item>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Body className="p-4">
                    <h2 className="text-white mb-2 link-underline-success">Ingreso</h2>
                    <Form onSubmit={newIncome}>
                        {error ? (
                            <Alert
                                className="mb-2"
                                variant="danger"
                                onClose={() => setError('')}
                                dismissible
                            >
                                {error}
                            </Alert>
                        ) : (
                            <div />
                        )}
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-2">
                                    <Form.Label className="fw-bold">Tipo*</Form.Label>
                                    <Form.Select required
                                                 value={paymentType}
                                                 onChange={e => setPaymentType(e.target.value)}
                                                 className="bg-light-green border-green">
                                        {
                                            PAYMENT_TYPE.map((item, index) => (
                                                <option key={index} value={item.value}>{item.name}</option>
                                            ))
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-2">
                                    <Form.Label className="fw-bold">Nombre Del Ingreso*</Form.Label>
                                    <Form.Control as="input"
                                                  value={incomeName}
                                                  onChange={e => setIncomeName(e.target.value)}
                                                  required
                                                  className="bg-light-green border-green" placeholder="Nombre Del Ingreso"/>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-2">
                                    <Form.Label className="fw-bold">Medio De Pago*</Form.Label>
                                    <Form.Select
                                        value={paymentMethod}
                                        onChange={e => setPaymentMethod(e.target.value)}
                                        className="bg-light-green border-green">
                                        {
                                            PAYMENT_METHOD.map((item, index) => (
                                                <option value={item.value} key={index}>{item.name}</option>
                                            ))
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            {
                                /* Dynamic payment only */
                                paymentType === PAYMENT_TYPE_ENUM.DYNAMIC && (
                                    <Col md={6}>
                                        <Form.Group className="mb-2">
                                            <Form.Label className="fw-bold">Frecuencia</Form.Label>
                                            <Form.Select
                                                value={paymentFrequency}
                                                onChange={e => setPaymentFrequency(e.target.value)}
                                                className="bg-light-green border-green">
                                                {
                                                    PAYMENT_FREQUENCY.map((item, index) => (
                                                        <option value={item.value} key={index}>{item.name}</option>
                                                    ))
                                                }
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                )
                            }
                            <Col md={6}>
                                <Form.Group
                                    className="mb-2"
                                >
                                    <Form.Label className="fw-bold">Fecha De Inicio*</Form.Label>
                                    <Form.Control as="input"
                                                  value={startDate}
                                                  onChange={e => setStartDate(e.target.value)}
                                                  type="date"
                                                  required  className="bg-light-green border-green"/>
                                </Form.Group>
                            </Col>
                            {
                                /* Dynamic payment only */
                                paymentType === '1' && (
                                    <Col md={6}>
                                        <Form.Group
                                            className="mb-2"
                                        >
                                            <Form.Label className="fw-bold">Fecha De Final</Form.Label>
                                            <Form.Control as="input"
                                                          value={endDate}
                                                          onChange={e => setEndDate(e.target.value)}
                                                          type="date"
                                                          className="bg-light-green border-green"/>
                                        </Form.Group>
                                    </Col>
                                )
                            }
                            <Col md={12}>
                                <Form.Label className="fw-bold">Monto*</Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text className="bg-light-green border-green">RD$</InputGroup.Text>
                                    <Form.Control as="input"
                                                  type="number"
                                                  value={amount}
                                                  onChange={e => setAmount(e.target.value)}
                                                  step={0.01} required
                                                  className="bg-light-green border-green"/>
                                </InputGroup>
                            </Col>
                            <Col md={12} className="mt-2">
                                <button className="btn btn-success" type="submit" disabled={loading}>
                                    {loading? 'Submitting ...' : 'Submit'}
                                </button>
                                <button className="btn btn-default ms-2" type="button" onClick={handleClose}>Cancel</button>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}