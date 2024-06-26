import React, {useState} from 'react';
import {Modal, Form, NavDropdown, Row, Col, InputGroup} from 'react-bootstrap';
import {FaPlusCircle} from "react-icons/fa";
import {FaChampagneGlasses} from "react-icons/fa6";

export const ActividadesDialog = () => {
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
                <FaChampagneGlasses /> Actividades
            </NavDropdown.Item>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Body className="p-4">
                    <h2 className="text-white mb-2 link-underline-success">Actividade</h2>
                    <Form>
                        <Row>
                            <Col md={12}>
                                <Form.Group className="mb-2">
                                    <Form.Label className="fw-bold">Numbre Del Actividade*</Form.Label>
                                    <Form.Select required className="bg-light-green border-green">
                                        <option value="1">REPARACIÓN DE COCINA</option>
                                        <option value="2">Dinamico REPARACIÓN</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <div className="border-bottom border-white my-3 d-flex align-items-center">
                                    <span className="text-uppercase fw-bold">Tareas</span> <FaPlusCircle className='ms-1 text-white' />
                                </div>
                            </Col>
                            <Col md={6}>
                                <Form.Group
                                    className="mb-2"
                                >
                                    <Form.Label className="fw-bold">Nombre De La Tarea</Form.Label>
                                    <Form.Control as="input" required  className="bg-light-green border-green" placeholder="Descripción"/>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-2 fw-bold">
                                    <Form.Label>Estado*</Form.Label>
                                    <Form.Select className="bg-light-green border-green">
                                        <option value="2">Pagado</option>
                                        <option value="1">Pendiente</option>                                        
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
                                    <Form.Label className="fw-bold">Fecha De Final*</Form.Label>
                                    <Form.Control as="input" type="date"  className="bg-light-green border-green" required/>
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
                                <Form.Label className="fw-bold">Gasto*</Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text className="bg-light-green border-green">RD$</InputGroup.Text>
                                    <Form.Control as="input" type="number" step={0.01} required  className="bg-light-green border-green"/>
                                </InputGroup>
                            </Col>
                            <Col md={12} className="mt-3">
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