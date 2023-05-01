import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FaBookmark, FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
// import Rating from 'react-rating';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news;
    const { img, published_date, name } = author;

    return (
        <div>
            <Card className="mb-4">
                <Card.Header className='d-flex align-items-center'>
                    <Image width={"40px"} src={img && img} roundedCircle />
                    <div className='ps-2 flex-grow-1'>
                        <p style={{ margin: "0px" }}>{name && name}</p>
                        <p><small>{moment().format("YYYY-MM-DD")}</small></p>
                    </div>
                    <div>
                        <FaRegBookmark />
                        <FaShareAlt />
                    </div>
                </Card.Header>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <Card.Img variant="top" src={image_url} />
                        {
                            details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}...
                                <Link to={`/news/${_id}`}>Read More</Link>
                            </>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex align-items-center">
                    <div className='flex-grow-1 d-flex gap-2'>

                        {/* <Rating style={{ maxWidth: 100 }} value={Math.round(rating?.number)} readOnly /> */}
                        <Rating style={{ maxWidth: 100 }} value={rating?.number} readOnly />

                        <span>{rating?.number}</span>

                    </div>

                    <div>
                        <FaEye /> {total_view}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;