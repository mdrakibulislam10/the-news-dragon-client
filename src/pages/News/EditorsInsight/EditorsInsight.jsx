import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from "../../../assets/1.png";
import second from "../../../assets/2.png";
import third from "../../../assets/3.png";

const EditorsInsight = ({ news }) => {
    const { title, details } = news;

    return (
        <div>
            <h2 className='mb-3'>Editors Insight</h2>

            <Row xs={1} lg={3} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={first} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {details.slice(0, 250)}...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Img variant="top" src={second} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {details.slice(0, 250)}...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Img variant="top" src={third} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {details.slice(0, 240)}...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>
    );
};

export default EditorsInsight;