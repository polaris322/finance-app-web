import React, {useState} from 'react';
import {Modal, Form, NavDropdown, Row, Col, InputGroup} from 'react-bootstrap';
import {LiaRecycleSolid} from "react-icons/lia";

export const IgresoDialog = () => {
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
                <LiaRecycleSolid /> Ingreso
            </NavDropdown.Item>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Body className="p-4">
                    <h2 className="text-white mb-2 link-underline-success">Ingreso</h2>
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
                                    <Form.Label className="fw-bold">Nombre Del Ingreso*</Form.Label>
                                    <Form.Control as="input" required  className="bg-light-green border-green" placeholder="Nombre Del Ingreso"/>
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
                                        <option value="5">Unico</option>
                                    </Form.Select>
                                </Form.Group>
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
                                <Form.Group
                                    className="mb-2"
                                >
                                    <Form.Label className="fw-bold">Fecha De Final</Form.Label>
                                    <Form.Control as="input" type="date"  className="bg-light-green border-green"/>
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Label className="fw-bold">Monto*</Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text className="bg-light-green border-green">RD$</InputGroup.Text>
                                    <Form.Control as="input" type="number" step={0.01} required  className="bg-light-green border-green"/>
                                </InputGroup>
                            </Col>
                            <Col md={12} className="mt-2">
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