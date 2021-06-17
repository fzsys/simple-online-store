import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/star.png';

const DeviceItem = ({device}) => {
    return (
        <Col md={3}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} src={device.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between">
                    <div>brand name</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image style={{width: 15, height: 15}} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;