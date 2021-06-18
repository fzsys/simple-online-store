import React from 'react';
import {Container, Col, Image, Row, Button, Card} from "react-bootstrap";
import star from '../assets/star.png';

const Device = () => {
    const device = {id: 1, name: 'device 1', price: 2500, rating: 5, img: `https://cdn.comfy.ua/media/catalog/product/cache/5/image/1440x1080/62defc7f46f3fbfc8afcd112227d1181/w/w/wwru_iphone12_q321_purple_pdp-image-1b_2.jpg`}
    const descriptions = [
        {id: 1, title: 'title 1', description: 'description 1'},
        {id: 2, title: 'title 2', description: 'description 2'},
        {id: 3, title: 'title 3', description: 'description 3'},
        {id: 4, title: 'title 4', description: 'description 4'},
        {id: 5, title: 'title 5', description: 'description 5'}
    ]
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className={"d-flex align-items-center justify-content-center"}
                            style={{background: `url(${star}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>{device.price} UAH</h3>
                        <Button variant={"outline-dark"}>Add to basket</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Description:</h1>
                {descriptions.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default Device;