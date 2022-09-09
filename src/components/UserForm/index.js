import React, { useEffect, useState } from "react";
import "./UserForm.css";
import {Form,Button, Alert} from 'react-bootstrap';
import Header from "../Common/Header";
import { useNavigate } from 'react-router-dom';

const initialFormData = Object.freeze({
    /* name: 'niten',
    age: '1',
    email: 'niene@dsds.dsd',
    phone: '12  ',
    gender: 'Male',
    address: 'adaad' */
});

function UserForm() {
    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState(initialFormData);
    const [photo, setPhoto] = React.useState([]);
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        localStorage.clear();
    });
    
    function onChangePhoto(e) {
        setPhoto([...e.target.files]);
    }

    const handleChange = (e) => {
        updateFormData({
          ...formData,
          [e.target.name]: e.target.value.trim()
        });
    };
      
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(photo);
        const form = event.currentTarget;
        if (form.checkValidity()) {
            console.log(formData);
        
            if(photo.length<1) return;
            const nurls = [];
            photo.forEach(image => nurls.push(URL.createObjectURL(image)));
            setPhoto(nurls);
            localStorage.setItem("formData", JSON.stringify(formData));
            localStorage.setItem("formPhoto", nurls);
            navigate("/show-data");
        } else {
            event.stopPropagation();
        }
        setValidated(true);
    };

    const handleFormReset = () => {
        setPhoto([]);
        updateFormData(initialFormData);
    }    

    return (<>
        <Header />
        <section>
            <div className="container">
                <div className="col-md-6 offset-3 text-center mb-4">
                    <h3 className="p-2 text-bg-info shadow p-3 mb-5 rounded">E-Commerce App User Form</h3>
                </div>
                <div className="col-md-6 offset-3">
                <Form noValidate validated={validated} onSubmit={handleSubmit} onReset={handleFormReset}>
                    <div className="row">
                        <Form.Group className="col-md-6 mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" name="name" onChange={handleChange} required/>
                            <Form.Control.Feedback type="invalid"> Please Enter Name. </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="col-md-6 mb-3" controlId="formBasicAge">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" placeholder="Enter Age" name="age" onChange={handleChange} required/>
                            <Form.Control.Feedback type="invalid"> Please Enter Age. </Form.Control.Feedback>
                        </Form.Group>
                    </div>
                    <div className="row">
                        <Form.Group className="col-md-6 mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email Address" name="email" onChange={handleChange} required/>
                            <Form.Control.Feedback type="invalid"> Please Enter email. </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="col-md-6 mb-3" controlId="formBasicPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="tel" placeholder="Enter Phone" name="phone" onChange={handleChange} required/>
                            <Form.Control.Feedback type="invalid"> Please Enter Phone. </Form.Control.Feedback>
                        </Form.Group>
                    </div>

                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>Gender</Form.Label>
                        <Form.Check
                            inline
                            label="Male"
                            value="Male"
                            checked={formData.gender==='Male'}
                            name="gender"
                            type="radio"
                            className="ms-5"
                            id={`inline-radio-1`}
                            onChange={handleChange}
                            required
                            />
                        <Form.Check
                            inline
                            label="Female"
                            value="Female"
                            checked={formData.gender==='Female'}
                            name="gender"
                            type="radio"
                            id={`inline-radio-2`}
                            onChange={handleChange}
                            required
                            />
                        <Form.Control.Feedback type="invalid"> Please Select Gender. </Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" rows={3} name="address" placeholder="Please Enter Address" onChange={handleChange} required/>
                        <Form.Control.Feedback type="invalid"> Please Enter Address. </Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicFile">
                        <Form.Label>Upload Photo</Form.Label>
                        <Form.Control type="file" name="photo" accept="image/*" onChange={onChangePhoto} required/>
                        <Form.Control.Feedback type="invalid"> Please Upload Photo. </Form.Control.Feedback>
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
export default UserForm;