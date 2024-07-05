import React, {useState} from 'react';
import {Modal, Form, NavDropdown, Row, Col, Alert} from 'react-bootstrap';
import {AiOutlineBulb} from "react-icons/ai";
import {fetchUtilities, saveNewUtility} from "../services/UtilityService";
import {useDispatch} from "react-redux";
import {updateUtilityList} from "../store/actions/utility";

export const UtilidadesDialog = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [emgergency, setEmergency] = useState('');
    const [ahorro, setAhorro] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleClose = () => {
        clearForm();
        setShow(false);
    }
    const handleShow = () => setShow(true);
    const clearForm = () => {
        setAhorro('');
        setEmergency('');
    }

    const newUtility = (e) => {
        e.preventDefault();
        setLoading(true);

        saveNewUtility(emgergency, ahorro)
            .then((res) => {
                setLoading(false);
                if (res.success) {
                    fetchUtilities().then(resUtil => {
                        if (resUtil.success) {
                            dispatch(updateUtilityList(resUtil.data));
                            handleClose();
                        } else {
                            setError(resUtil.data);
                        }
                    })
                    handleClose();
                } else {
                    setError(res.data);
                }
            })
            .catch((e) => {
                setLoading(false);
                setError(e.data);
            })
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
                <AiOutlineBulb /> Utilidade
            </NavDropdown.Item>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Body className="p-4">
                    <h2 className="text-white mb-2 link-underline-success">Utilidade</h2>
                    <Form onSubmit={newUtility}>
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
                                <Form.Group
                                    className="mb-2"
                                >
                                    <Form.Label className="fw-bold">Fundo de emergencia</Form.Label>
                                    <Form.Control as="input"
                                                  type="number"
                                                  step="0.1"
                                                  value={emgergency}
                                                  onChange={e => setEmergency(e.target.value)}
                                                  className="bg-light-green border-green" placeholder="Fundo de emergencia"/>
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group
                                    className="mb-2"
                                >
                                    <Form.Label className="fw-bold">Ahorro</Form.Label>
                                    <Form.Control as="input"
                                                  type="number"
                                                  step="0.1"
                                                  value={ahorro}
                                                  onChange={e => setAhorro(e.target.value)}
                                                  className="bg-light-green border-green" placeholder="Ahorro"/>
                                </Form.Group>
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