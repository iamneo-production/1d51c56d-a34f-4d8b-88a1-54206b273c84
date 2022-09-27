import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import doctors from "../doctors";
import Doctor from  '../components/Doctor';

const HomeScreen = () =>{
    return(
        <>
        <h1>Available Doctors!!!</h1>
        <Container fluid>  
            <Row className="justify-content-md-center">
                {doctors.map(doctor=>(
                    <Col key = {doctor.id}>
                        <Doctor doctor={doctor}/>
                    </Col>
                ))}
            </Row>
        </Container>
        </>
    )
}
export default HomeScreen;