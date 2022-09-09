import React, { useState, useEffect } from "react";
import Header from "../Common/Header";
import Table from 'react-bootstrap/Table';
import { useNavigate, Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';

function ShowData() {

    const [formData, setFormData] = React.useState();
    const [photo, setPhoto] = React.useState([]);
      
    useEffect(() => {
        setFormData(JSON.parse(localStorage.getItem("formData")));
        setPhoto(localStorage.getItem("formPhoto"));

       // if(formData || )
    }, []);


    return (
        <>
        <Header />
        <section>
            <div className="container">
                <div className="col-md-6 offset-3">
                    <Link to={'/user-form'} className="justify-content-center"><FaArrowCircleLeft className="mb-3"/></Link>
                    <Table striped hover bordered>
                        <thead>
                            <tr className="text-center">
                            <th colSpan={2}>User Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Name</td>
                            <td>{formData?.name}</td>
                            </tr>
                            <tr>
                            <td>Photo</td>
                            <td><img width={100} src={photo} /></td>
                            </tr>
                            <tr>
                            <td>Age</td>
                            <td>{formData?.age}</td>
                            </tr>
                            <tr>
                            <td>Email</td>
                            <td>{formData?.email}</td>
                            </tr>
                            <tr>
                            <td>Phone</td>
                            <td>{formData?.phone}</td>
                            </tr>
                            <tr>
                            <td>Gender</td>
                            <td>{formData?.gender}</td>
                            </tr>
                            <tr>
                            <td>Address</td>
                            <td>{formData?.address}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </section>
        </>
    );
}
export default ShowData;