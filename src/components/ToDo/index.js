import React, { useEffect, useState } from "react";
import {Form,Button, Alert} from 'react-bootstrap';
import Header from "../Common/Header";
import { useNavigate } from 'react-router-dom';

const initialtoDoData = Object.freeze({
    status: 'Active'
});

function ToDo() {
    const navigate = useNavigate();
    const [toDoData, updateToDoData] = React.useState(initialtoDoData);
    const [validated, setValidated] = useState(false);

    const handleChange = (e) => {
        updateToDoData({
          ...toDoData,
          [e.target.name]: e.target.value.trim()
        });
    };
      
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity()) {
            let toDoDataList = JSON.parse(localStorage.getItem("toDoData"));
            if(toDoDataList) {
                let id = 1;
                toDoDataList.map((toDoDataArr) => {
                    if(toDoDataArr.id >= id) {
                        id =  toDoDataArr.id + 1;
                    }
                });
                let addedId = {...toDoData, 'id': id}
                toDoDataList.push(addedId);
            } else {
                let addedId = {...toDoData, 'id': 1}
                toDoDataList = [addedId];
            }
            localStorage.setItem("toDoData", JSON.stringify(toDoDataList));
            navigate("/todo/list");
        } else {
            event.stopPropagation();
        }
        setValidated(true);
    };

    const handleFormReset = () => {
        updateToDoData(initialtoDoData);
    }    

    return (<>
        <Header />
        <section>
            <div className="container">
                <div className="col-md-6 offset-3 text-center mb-4">
                    <h3 className="p-2 text-bg-info shadow p-3 mb-5 rounded">Todo Application</h3>
                </div>
                <div className="col-md-6 offset-3">
                <Form noValidate validated={validated} onSubmit={handleSubmit} onReset={handleFormReset}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Title" name="name" onChange={handleChange} required/>
                        <Form.Control.Feedback type="invalid"> Please Enter Title. </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} name="description" placeholder="Enter Description" onChange={handleChange} required/>
                        <Form.Control.Feedback type="invalid"> Please Enter Description. </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit" name="submit">
                        Submit
                    </Button>

                    <Button variant="secondary" type="reset" className="ms-3">
                        Cancel
                    </Button>
                </Form>
                </div>
            </div>
        </section>
        </>
    );
}
export default ToDo;