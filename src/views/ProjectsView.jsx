import React, {useCallback, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from "../layout/Layout";
import {FaPlusSquare, FaShareAlt} from "react-icons/fa";
import {ProjectTable} from "../components/ProjectTable";
import {Col, Form, Modal, Row} from 'react-bootstrap';
import {createProject, fetchProjects, updateProjectTaskStatus} from "../services/ProjectService";
import {NumberFormater} from "../utils";
import {updateProjectList} from "../store/actions/projects";

export const ProjectsView = () => {
    const dispatch = useDispatch();
    const { list } = useSelector((state) => state.project);
    const [show, setShow] = useState(false);
    const [newProjectName, setNewProjectName] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const newProject = (e) => {
        e.preventDefault();
        createProject(newProjectName).then(res => {
            if (res.success) {
                getProjectList();
                handleClose();
            }
        });
    }

    const getProjectList = useCallback(() => {
        fetchProjects().then(res =>{
            if (res.success) {
                dispatch(updateProjectList(res.data));
            }
        });
    }, [dispatch]);

    const getTotalAmount = (tasks) => {
        let sum = 0;
        tasks.forEach(item => {
            sum += item.amount;
        });
        return sum;
    }

    return (
        <Layout>
            <h2 className="text-uppercase d-flex align-items-center">
                <FaShareAlt className="me-1 text-success" />
                Proyectos
            </h2>

            {
                list.map((project, index) => (
                    <div className="w-100 position-relative" key={index}>
                        <h5 className="text-uppercase text-end">{project.name}</h5>
                        <div className="bg-light-green p-3 rounded-4 shadow-lg border-dashed">
                            <ProjectTable
                                onUpdateStatus={updateProjectTaskStatus}
                                data={project.tasks}
                                id={project.id}
                                onUpdate={getProjectList}/>
                        </div>
                        <div className="h5 text-uppercase m-auto w-fit p-1 summary border-dashed rounded-4">
                            Total del proyeto: {NumberFormater.format(getTotalAmount(project.tasks))}
                        </div>
                    </div>
                ))
            }

            <div className="w-100 position-relative mt-3">
                 <div>
                     <button className="bg-transparent border-0" onClick={handleShow}>
                         <FaPlusSquare className="text-white fs-3" />
                     </button>

                     <Modal show={show} onHide={handleClose} size="lg">
                         <Modal.Body className="p-4">
                             <h3 className="text-white mb-2 link-underline-success">Nuevo Proyecto</h3>
                             <Form className="mt-3" onSubmit={newProject}>
                                 <Row>
                                     <Col md={12}>
                                         <Form.Group
                                             className="mb-2"
                                         >
                                             <Form.Label className="fw-bold">Nombre del proyecto</Form.Label>
                                             <Form.Control as="input"
                                                           required value={newProjectName}
                                                           onChange={e => setNewProjectName(e.target.value)}
                                                           className="bg-light-green border-green"
                                                           placeholder="Nombre del proyecto"/>
                                         </Form.Group>
                                     </Col>
                                     <Col md={12} className="mt-3">
                                         <button className="btn btn-success" type="submit">Submit</button>
                                         <button className="btn btn-default ms-2" type="button" onClick={handleClose}>Cancel</button>
                                     </Col>
                                 </Row>
                             </Form>
                         </Modal.Body>
                     </Modal>
                 </div>
                <div className="w-100 d-flex justify-content-between border-dashed rounded-4 p-3 bg-light-green mt-1">
                    <span>Xxxxxxxxxxxxxxxxxx</span>
                    <span>dd-mm-yy</span>
                    <span>dd-mm-yy</span>
                    <span>0,000.00</span>
                    <span>Xxxxxxxxxxxxxxxxxx</span>
                </div>
            </div>
        </Layout>
    )
}