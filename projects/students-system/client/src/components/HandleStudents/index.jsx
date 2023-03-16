import { Container } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { BsSearch } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import Modal from 'react-bootstrap/Modal';
import { FormUpdate } from "../FormUpdate";

export function HandleStudents() {
    const [listStudents, setlistStudents] = useState([]);
    const [showModal, setshowModal] = useState(false);
    const [studentData, setstudentData] = useState({});

    const modalOpen = (studentID) => {
        setshowModal(true)
        const student = listStudents.findIndex(student => student.id == studentID);
        setstudentData(listStudents[student]);
    };

    const modalClose = () => setshowModal(false);

    const API = "http://localhost:3000/students";

    function fetchStudents() {
        axios.get(API)
        .then((res) => setlistStudents(res.data))
        .catch((error) => alert(error));
    }

    useEffect(() => {
        fetchStudents();
    }, [])

    console.log(listStudents);

    return (
        <Container>
            <article>
                <section className="titleSearch">
                    <h1>Alunos</h1>
                    <div className="inputSection">
                        <input id="inputSearchStudent" type="text" placeholder=" "/>
                        <label htmlFor="inputSearchStudent" className="labelInputSearch"> 
                            Buscar alunos
                        </label>
                        <BsSearch className="searchIcon"/>
                    </div>
                </section> 

                <section className="tableStudents">
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Cidade</th>
                        <th>Detalhes</th>
                        </tr>
                    </thead>
                    <tbody>
                        { listStudents && listStudents.map((students) => {
                            return(
                            <tr key={students.id}>
                                <td>{students.id}</td>
                                <td>{students.name}</td>
                                <td>{students.phone}</td>
                                <td>{students.city}</td>
                                <td>
                                    <BiEdit className="editIcon" onClick={() => modalOpen(students.id)}/>
                                </td>
                            </tr>
                            )
                        })}  
                    </tbody>
            </Table>
                </section>

                <section>
                <Modal show={showModal} onHide={modalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Aluno</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormUpdate modalClose={modalClose} studentData= {studentData}/>
                    </Modal.Body>
                </Modal>
                </section>
            </article>
        </Container>
    )
};