import React from "react";
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';



const Doctor = ({ doctor }) => {
    return(
        <Card className="my-3 p-3 rounded">
            <a href={`/doctor/${doctor._id}`}>
                <Card.Img src={doctor.img} variant ='top' />
            </a>
            <Card.Body>
                <Link to={`/doctor/${doctor._id}`}>
                   <Card.Title as='div'>
                       <strong>
                            {doctor.name}
                        </strong>
                   </Card.Title>
                </Link>
                <Card.Text>
                    <div className='my-3'>
                        {doctor.rating} from {doctor.numReviews} reviews.
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>

    )
}
export default Doctor