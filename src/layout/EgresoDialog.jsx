import React, {useState} from 'react';
import {Modal, Form, NavDropdown, Row, Col, InputGroup} from 'react-bootstrap';
import {BiMoney} from "react-icons/bi";

export const EgresoDialog = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-2">
                                    <Form.Label className="fw-bold">Tipo*</Form.Label>
                                    <Form.Select required className="bg-light-green border-green">
                                        <option value="1">Fijo</option>
                                        <option value="2">Dinamico</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-2">
                                    <Form.Label className="fw-bold">Categoria*</Form.Label>
                                    <Form.Select required className="bg-light-green border-green">
                                        <option value="1">Prestamos</option>
                                        <option value="2">Servicios</option>
                                        <option value="3">Otros</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-2">
                                    <Form.Label className="fw-bold">Nombre Del Gasto*</Form.Label>
                                    <Form.Control as="input" required  className="bg-light-green border-green" placeholder="Nombre Del Gasto"/>                                    
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-2">
                                    <Form.Label className="fw-bold">Medio De Pago*</Form.Label>
                                    <Form.Select className="bg-light-green border-green">
                                        <option value="1">Scotibank</option>
                                        <option value="2">Banreservas</option>
                                        <option value="3">Popular</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-2">
                                    <Form.Label className="fw-bold">Frecuencia</Form.Label>
                                    <Form.Select className="bg-light-green border-green">
                                        <option value="1">Semanal</option>
                                        <option value="2">Quincenal</option>
                                        <option value="3">Mensual</option>
                                        <option value="4">Anual</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Label className="fw-bold">Cutoas Totales</Form.Label>
                                <InputGroup className="mb-2">
                                    <Form.Control as="input" className="bg-light-green border-green" placeholder="Cutoas"/>
                                </InputGroup>
                            </Col>
                            <Col md={6}>
                                <Form.Label className="fw-bold">Monto*</Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text className="bg-light-green border-green">RD$</InputGroup.Text>
                                    <Form.Control as="input" type="number" step={0.01} required  className="bg-light-green border-green"/>
                                </InputGroup>
                            </Col>
                            <Col md={6}>
                                <Form.Group
                                    className="mb-2"
                                >
                                    <Form.Label className="fw-bold">Fecha De Inicio*</Form.Label>
                                    <Form.Control as="input" type="date" required  className="bg-light-green border-green"/>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-2 fw-bold">
                                    <Form.Label>Estado*</Form.Label>
                                    <Form.Select className="bg-light-green border-green">
                                        <option value="1">Pendiente</option>
                                        <option value="2">Pagado</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-2 fw-bold">
                                    <Form.Label>Factura</Form.Label>
                                    <Form.Control type="file"  className="bg-light-green border-green"/>
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group
                                    className="mb-3"
                                >
                                    <Form.Label className="fw-bold">Nota</Form.Label>
                                    <Form.Control as="textarea" rows={3}  className="bg-light-green border-green"/>
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <button className="btn btn-success" type="submit">Submit</button>
                                <button className="btn btn-default ms-2" type="button" onClick={handleClose}>Cancel</button>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}