import React, { useState, useEffect } from "react";
import Header from "../Common/Header";
import Table from 'react-bootstrap/Table';
import { useNavigate, Link } from 'react-router-dom';
import { FaCheckCircle, FaEye, FaPlusCircle, FaTrash} from 'react-icons/fa';
import {Button, FormSelect} from 'react-bootstrap';
import MyModal from './MyModal';

function List() {

    const [toDoData, setToDoData] = useState([]);
    const [selected, setSelected] = useState('All');

    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState({});
    const handleClose = () => setShow(false);
    
    const handleShow = (id) => {

        setModalData(toDoData.filter((element) => {
            if(element.id===id) {
                return element
            }
        }))

        setShow(true);
    }

    useEffect(() => {
        setToDoData(JSON.parse(localStorage.getItem("toDoData")));
    }, []);

    const toChangeStatus = (id) => {
        let arr = JSON.parse(localStorage.getItem("toDoData"));
        arr = arr.filter((element) => {
            if(element.id===id) {
                element.status = 'Completed'; 
            }

            return element;
        })

        setToDoData(arr)
        localStorage.setItem("toDoData", JSON.stringify(arr));
    }

    const handleDelete = (id) => {
        let arr = JSON.parse(localStorage.getItem("toDoData"));
        arr = arr.filter((element) => {
            if(element.id!=id) {
                return element
            }
        })
        setToDoData(arr)
        localStorage.setItem("toDoData", JSON.stringify(arr));
    }

    const toFilterData = (e) => {
        setSelected(e.target.value)
        let arr = JSON.parse(localStorage.getItem("toDoData"));
        setToDoData(arr.filter((element) => {
            if(element.status===e.target.value || e.target.value==='All') {
                return element
            }
        }))
    }

    return (
        <>
        <Header />
        <section>
            <div className="container">
                <div className="col-md-6 offset-3">
                    <div className="my-2 row">
                        <div className="col-md-6" style={{alignSelf: 'self-end'}}> 
                            <Link to={'/todo/add'} className="text-decoration-none text-dark"><FaPlusCircle className="h4"/> Add New ToDo </Link>
                        </div>
                        <div className="offset-2 col-md-4"> 
                            <FormSelect onChange={toFilterData} value={selected}>
                                <option value={'All'}>All</option>
                                <option value={'Active'}>Active</option>
                                <option value={'Completed'}>Completed</option>
                            </FormSelect>
                        </div> 
                    </div>
                    <Table striped hover bordered>
                        <thead>
                            <tr className="text-center">
                            <th colSpan={5}>To-Do Data</th>
                            </tr>
                            <tr className="text-center">
                            <th>Id</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                        {(toDoData && toDoData.length != 0) ? (
                            toDoData.filter((element) => element.status===selected || selected==='All').map((toDoDataArr,key) => {
                                return <tr key={key} className="text-center">
                                    <td>{toDoDataArr.id}</td>
                                    <td>{toDoDataArr.name}</td>
                                    <td>{toDoDataArr.description}</td>
                                    <td>
                                        <div class="btn-group">
                                            {toDoDataArr.status=='Active' && <Button type="button" className="btn btn-block" onClick={() => toChangeStatus(toDoDataArr.id)}>Active</Button>}
                                            {toDoDataArr.status=='Completed' && <Button type="button" className="btn btn-block btn-success">Completed <FaCheckCircle /></Button>}
                                        </div>
                                    </td>
                                    <td>
                                        <Button variant="secondary" onClick={() => handleShow(toDoDataArr.id)}>
                                            <FaEye />
                                        </Button>
                                        <Button variant="danger" className="mx-2" onClick={() => handleDelete(toDoDataArr.id)}>
                                            <FaTrash />
                                        </Button>
                                    </td>
                                </tr>
                            })
                        ):
                        <tr><td colSpan={5} className="text-center"> No todos found </td></tr>
                        }
                        </tbody>
                    </Table>
                </div>
            </div>
        </section>

        <MyModal show={show} handleClose={handleClose} modalData={modalData}/>
        </>
    );
}
export default List;