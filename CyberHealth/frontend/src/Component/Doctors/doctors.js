import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import '../Home/Home.css'
import './doctors.css'
import { Card} from 'react-bootstrap'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Doctors(){
  const [doc,setDoc] = useState([])
  axios.get('https://8080-acfedadecbeafcedfbabccbfecfdbedeedebed.examlyiopb.examly.io/doctor').then(res => {
    setDoc(res.data.data);
  })
  return (
    <div className="wrapper">
        <Row>
            {doc && doc.map(el=>(
              <Col>
                 <Card className='my-3 p-3 rounded'>
                      <Card.Body>
                        <Link to={`/doctors/${doc.doc_id}`}>
                          <Card.Title as='div'>
                            <strong>{el.name}</strong>
                          </Card.Title>
                        </Link>
                        <Card.Text as='div'>
                          <Strong>Specialisation: {doc.treatment}</Strong>
                        </Card.Text>
                      </Card.Body>
                  </Card>
              </Col>
        ))}
        </Row>
    </div>
)
  
}
