import React, {useState} from 'react';
import {Modal, Form, NavDropdown, Row, Col, InputGroup, Alert} from 'react-bootstrap';
import {BiMoney} from "react-icons/bi";
import {
    OUTCOME_CATEGORY,
    OUTCOME_CATEGORY_ENUM,
    PAYMENT_FREQUENCY, PAYMENT_FREQUENCY_ENUM,
    PAYMENT_METHOD, PAYMENT_METHOD_ENUM,
    PAYMENT_STATUS_ENUM,
    PAYMENT_TYPE,
    PAYMENT_TYPE_ENUM
} from "../config/enums";
import {useDispatch} from "react-redux";
import {createOutcome, fetchOutcomes} from "../services/OutcomeService";
import {updateOutcomeList} from "../store/actions/outcomes";
import {getFirstErrorMessage} from "../utils";

export const EgresoDialog = () => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const [paymentType, setPaymentType] = useState(PAYMENT_TYPE_ENUM.DYNAMIC);
    const [outcomeName, setOutcomeName] = useState('');
    const [paymentMethod, setPaymentMethod] = useState(PAYMENT_METHOD_ENUM.SCOTIABANK);
    const [paymentFrequency, setPaymentFrequency] = useState(PAYMENT_FREQUENCY_ENUM.MONTHLY);
    const [startDate, setStartDate] = useState('');
    const [amount, setAmount] = useState(1.00);
    const [outcomeCategory, setOutcomeCategory] = useState(OUTCOME_CATEGORY_ENUM.LOAN);
    const [paymentStatus, setPaymentStatus] = useState(PAYMENT_STATUS_ENUM.FINISHED);
    const [attachment, setAttachment] = useState(null);
    const [note, setNote] = useState('');
    const [cuota, setCuota] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleClose = () => {
        clearForm();
        setShow(false);
    }
    const handleShow = () => setShow(true);
    const clearForm = () => {
        setOutcomeCategory(OUTCOME_CATEGORY_ENUM.LOAN);
        setPaymentFrequency(PAYMENT_FREQUENCY_ENUM.MONTHLY);
        setOutcomeName('');
        setPaymentStatus(PAYMENT_STATUS_ENUM.FINISHED);
        setAmount(1.00);
        setCuota('');
        setNote('');
        setAttachment(null);
        setStartDate('');
        setPaymentType(PAYMENT_TYPE_ENUM.DYNAMIC);
        setPaymentMethod(PAYMENT_METHOD_ENUM.SCOTIABANK);
        setError('');
    }

    const newEgreso = (e) => {
        e.preventDefault();

        const formData = new FormData();

        // file size
        if (attachment && attachment.size / 2097152 > 2) {
            setError('El tamaño del archivo debe ser inferior a 2MB.');
            handleShow();
            return;
        }

        formData.append('attachment', attachment);
        formData.append('name', outcomeName);
        formData.append('amount', amount);
        formData.append('cuotas', cuota);
        formData.append('category', outcomeCategory);
        formData.append('status', paymentStatus);
        formData.append('type', paymentType);
        formData.append('frequency', paymentFrequency);
        formData.append('payment_method', paymentMethod);
        formData.append('start_date', startDate);
        formData.append('note', note);

        setLoading(true);
        createOutcome(formData).then(res => {
            if (res.success) {
                fetchOutcomes().then(res => {
                    if (res.success) {
                        dispatch(updateOutcomeList(res.data));
                        handleClose();
                    } else {
                        setError(getFirstErrorMessage(res.data));
                    }
                    setLoading(false);
                }).catch(e => {
                    setError(getFirstErrorMessage(e.data));
                    setLoading(false);
                });
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
                <BiMoney /> Egreso
            </NavDropdown.Item>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Body className="p-4">
                    <h2 className="text-white mb-2 link-underline-success">Egreso</h2>
                    <Form onSubmit={newEgreso} encType="multipart/form-data">
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
                                    <Form.Label className="fw-bold">Categoria*</Form.Label>
                                    <Form.Select required
                                                 value={outcomeCategory}
                                                 onChange={e => setOutcomeCategory(e.target.value)}
                                                 className="bg-light-green border-green">
                                        {
                                            OUTCOME_CATEGORY.map((item, index) => (
                                                <option key={index} value={item.value}>{item.name}</option>
                                            ))
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-2">
                                    <Form.Label className="fw-bold">Nombre Del Gasto*</Form.Label>
                                    <Form.Control as="input" required
                                                  value={outcomeName}
                                                  onChange={e => setOutcomeName(e.target.value)}
                                                  className="bg-light-green border-green"
                                                  placeholder="Nombre Del Gasto"/>
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
                            <Col md={6}>
                                <Form.Group className="mb-2">
                                    <Form.Label className="fw-bold">Frecuencia*</Form.Label>
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
                            {
                                outcomeCategory === OUTCOME_CATEGORY_ENUM.LOAN && (
                                    <Col md={6}>
                                        <Form.Label className="fw-bold">Plazo</Form.Label>
                                        <InputGroup className="mb-2">
                                            <Form.Control as="input" type="number"
                                                          required={outcomeCategory === OUTCOME_CATEGORY_ENUM.LOAN}
                                                          value={cuota} onChange={e => setCuota(e.target.value)}
                                                          className="bg-light-green border-green" placeholder="Plazo"/>
                                        </InputGroup>
                                    </Col>
                                )
                            }
                            <Col md={6}>
                                <Form.Label className="fw-bold">Monto*</Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text className="bg-light-green border-green">RD$</InputGroup.Text>
                                    <Form.Control as="input" type="number"
                                                  value={amount}
                                                  onChange={e => setAmount(e.target.value)}
                                                  step={0.01} required  className="bg-light-green border-green"/>
                                </InputGroup>
                            </Col>
                            <Col md={6}>
                                <Form.Group
                                    className="mb-2"
                                >
                                    <Form.Label className="fw-bold">Fecha Inicial*</Form.Label>
                                    <Form.Control as="input" type="date" required
                                                  value={startDate}
                                                  onChange={e => setStartDate(e.target.value)}
                                                  className="bg-light-green border-green"/>
                                </Form.Group>
                            </Col>
                            <Col md={outcomeCategory === OUTCOME_CATEGORY_ENUM.LOAN ? 12 : 6}>
                                <Form.Group className="mb-2 fw-bold">
                                    <Form.Label>Factura</Form.Label>
                                    <Form.Control type="file"
                                                  onChange={e => {
                                                      setAttachment(e.target.files[0]);
                                                  }}
                                                  className="bg-light-green border-green"/>
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group
                                    className="mb-3"
                                >
                                    <Form.Label className="fw-bold">Nota</Form.Label>
                                    <Form.Control as="textarea"
                                                  value={note}
                                                  onChange={e => setNote(e.target.value)}
                                                  rows={3}  className="bg-light-green border-green"/>
                                </Form.Group>
                            </Col>
                            <Col md={12}>
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