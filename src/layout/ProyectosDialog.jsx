import React, {useState} from 'react';
import {Modal, Form, NavDropdown, Row, Col, InputGroup, Alert} from 'react-bootstrap';
import {FaPlusCircle, FaShareAlt} from "react-icons/fa";
import {useDispatch, useSelector} from 'react-redux';
import {PAYMENT_METHOD, PAYMENT_METHOD_ENUM, PAYMENT_STATUS, PAYMENT_STATUS_ENUM} from "../config/enums";
import {createProjectTask, fetchProjects} from "../services/ProjectService";
import {updateProjectList} from "../store/actions/projects";
import {format} from "date-fns";
import {getFirstErrorMessage} from "../utils";

export const ProyectosDialog = () => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const { list } = useSelector((state) => state.project);

    const [projectId, setProjectId] = useState(0);
    const [taskName, setTaskName] = useState('');
    const [paymentStatus, setPaymentStatus] = useState(PAYMENT_STATUS_ENUM.FINISHED);
    const [paymentMethod, setPaymentMethod] = useState(PAYMENT_METHOD_ENUM.SCOTIABANK);
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
        setProjectId(0);
        setPaymentStatus(PAYMENT_STATUS_ENUM.FINISHED);
        setAmount(1.00);
        setStartDate('');
        setEndDate('');
        setTaskName('');
        setPaymentMethod(PAYMENT_METHOD_ENUM.SCOTIABANK);
    }

    const newTask = (e) => {
        e.preventDefault();
        setLoading(true);
        let end = format(new Date(), 'Y-MM-dd') ;
        if (endDate) {
            end = endDate
        }
        createProjectTask(projectId, taskName, amount, paymentMethod, paymentStatus, startDate, end).then(res => {
            if (res.success) {
                fetchProjects().then(res => {
                    setLoading(false);
                    if (res.success) {
                        dispatch(updateProjectList(res.data));
                        handleClose();
                    } else {
                        setError(getFirstErrorMessage(res.data));
                    }
                }).catch(e => {
                    setError(getFirstErrorMessage(e.data));
                    setLoading(false);
                });
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
                <FaShareAlt /> Proyecto
            </NavDropdown.Item>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Body className="p-4">
                    <h2 className="text-white mb-2 link-underline-success">Proyecto</h2>
                    <Form onSubmit={newTask}>
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
                            <Col md={12}>
                                <Form.Group className="mb-2">
                                    <Form.Label className="fw-bold">Numbre Del Proyecto*</Form.Label>
                                    <Form.Select required
                                                 onChange={e => setProjectId(e.target.value)}
                                                 className="bg-light-green border-green" value={projectId}>
                                        <option value=''>Numbre Del Proyecto</option>
                                        {
                                            list.map((item, index) => (
                                                <option key={index} value={item.id}>{item.name}</option>
                                            ))
                                        }
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
                                    <Form.Control as="input" required
                                                  value={taskName}
                                                  onChange={e => setTaskName(e.target.value)}
                                                  className="bg-light-green border-green" placeholder="Nombre De La Tarea"/>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-2 fw-bold">
                                    <Form.Label>Estado*</Form.Label>
                                    <Form.Select
                                        value={paymentStatus}
                                        onChange={e => setPaymentStatus(e.target.value)}
                                        className="bg-light-green border-green">
                                        {
                                            PAYMENT_STATUS.map((item, index) => (
                                                <option key={index} value={item.value}>{item.name}</option>
                                            ))
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group
                                    className="mb-2"
                                >
                                    <Form.Label className="fw-bold">Fecha De Inicio*</Form.Label>
                                    <Form.Control as="input" type="date"
                                                  value={startDate}
                                                  onChange={e => setStartDate(e.target.value)}
                                                  required  className="bg-light-green border-green"/>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group
                                    className="mb-2"
                                >
                                    <Form.Label className="fw-bold">Fecha De Final*</Form.Label>
                                    <Form.Control as="input" type="date"
                                                  value={endDate}
                                                  onChange={e => setEndDate(e.target.value)}
                                                  className="bg-light-green border-green" required/>
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
                                <Form.Label className="fw-bold">Gasto*</Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text className="bg-light-green border-green">RD$</InputGroup.Text>
                                    <Form.Control as="input" type="number"
                                                  value={amount}
                                                  onChange={e => setAmount(e.target.value)}
                                                  step={0.01} required  className="bg-light-green border-green"/>
                                </InputGroup>
                            </Col>
                            <Col md={12} className="mt-3">
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