'use client'
import React, { useEffect, useRef } from "react";
import { Input, Col, Row, Form, Button } from "antd";

export default function ContactPage() {
    const mapRef = useRef(null);

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    useEffect(() => {
        const initMap = () => {
            const location = { lat: -37.8173137, lng: 144.9554312 }
            const map = new window.google.maps.Map(mapRef.current, {
                zoom: 15,
                center: location,
                disableDefaultUI: true,
                styles: [
                    {
                        featureType: "poi",
                        stylers: [{ visibility: "off" }], // ซ่อนจุดสนใจ เช่น ธุรกิจ ร้านอาหาร
                    },
                    {
                        featureType: "transit",
                        stylers: [{ visibility: "off" }], // ซ่อนเส้นทางขนส่งสาธารณะ
                    },
                ],
            });

            new window.google.maps.Marker({
                position: location,
                map: map,
            });
        };

        if (window.google) {
            initMap();
        } else {
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=KEY`;
            script.async = true;
            script.onload = initMap; https://ant.design/
            document.head.appendChild(script);
        }
    }, []);
    return (
        <div
            id="contactus"
            style={{
                backgroundColor: "#fff0f6",
                marginTop: "105px",
                marginBottom: "20px",
                padding: "0 50px"
            }}
        >
            <div
                style={{
                    height: "384px",
                    borderRadius: "20px",
                    backgroundColor: "#001529"
                }}
            >

            </div>

            <div style={{ textAlign: "center", marginTop: "20px" }}>

                <div
                    ref={mapRef}
                    style={{ width: "100%", height: "450px", borderRadius: "10px", backgroundColor: "#E0E0E0" }}
                ></div>
            </div>

            <div style={{ textAlign: "center", padding: "20px" }}>
                <h1 style={{ fontFamily: "DM Sans", fontWeight: 300 }}>Let’s Build Your Financial Future <br />Together</h1>
            </div>


            <div style={{ width: "80%", height: "400px", margin: "0 140px 80px 140px" }}>
                <Form onFinish={onFinish}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item name="firstName">
                                <Input size="large" placeholder="First Name" allowClear style={{fontFamily: "DM Sans" , border: "1px solid rgba(191, 191, 191, 1)", borderRadius: "4px",}}/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="lastName">
                                <Input size="large" placeholder="Last Name" allowClear style={{fontFamily: "DM Sans" , border: "1px solid rgba(191, 191, 191, 1)", borderRadius: "4px",}}/>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item name="email">
                                <Input size="large" placeholder="Email" allowClear style={{fontFamily: "DM Sans" , border: "1px solid rgba(191, 191, 191, 1)", borderRadius: "4px",}}/>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item name="message">
                                <Input.TextArea size="large" placeholder="Message" allowClear style={{fontFamily: "DM Sans", resize: "none" , height:"194px" , border: "1px solid rgba(191, 191, 191, 1)", borderRadius: "4px",}}/>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item label={null}>
                                <Button type="primary" htmlType="submit" style={{width:"100%" , background:"rgba(207, 152, 44, 1)" , fontFamily: "DM Sans"}} size="large">
                                    Send
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>

            </div>
        </div>
    )
}
