"use client";
import './assest/styles/Home.modul.css';
import React, { useEffect, useState } from 'react';
import myImage from './assest/image/download.jpg';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Button, Flex, Layout } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import AboutPage from './Page/Trackrecords/page';
import ContactPage from './Page/Contactus/page';



const LineStyle = styled("div")`
    height: 20px;
    background: #855515;
`;

export default function Home() {
    const { Content, Footer } = Layout;
    const [scrollPosition, setScrollPosition] = useState(0);
    const TextValuesLoop = 'JJ JIRA S LIBRARY';
    //----------------------------------Text-------------------------------------
    let [rightValue, setRightValue] = useState('calc(1% + 30px)');
    let [leftValue, setLeftValue] = useState('calc(6% + 28.9%)');
    let [bottomValue, setBottomValue] = useState('');
    let [topValue, setTopValue] = useState('');


    //----------------------------------Spinner-----------------------------------
    let [leftValueSpiner, setLeftValueSpiner] = useState('calc(6% + 28.9%)');
    let [rightValueSpiner, setRightValueSpiner] = useState('');
    let [bottomValueSpiner, setBottomValueSpiner] = useState('');
    let [topValueSpiner, setTopValueSpiner] = useState('calc(110px + 50vh)');

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth <= 380) {
                // iPhone
                setRightValue('calc(-6% + 30px)');
                setLeftValueSpiner('calc(6% + 16.9%)');
                setTopValueSpiner('calc(70px + 50vh)');
            } else if (screenWidth <= 768) {
                // Tablet
                setRightValue('calc(0% + 30px)');
                setLeftValueSpiner('calc(6% + 13.9%)');
                setTopValueSpiner('calc(70px + 50vh)');
            } else {
                // Desktop
                setRightValue('calc(1% + 30px)');
            }
        };

        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener('resize', handleResize);
        handleResize(); // เรียกใช้ handleResize ทันทีเมื่อ component โหลด

        return () => {
            window.removeEventListener("scroll", handleScroll); // ลบ scroll listener
            window.removeEventListener('resize', handleResize); // ลบ resize listener
        };
    }, []);

    return (
        <>
            <Content>
                <div
                    id="home"
                    style={{
                        background: `url(https://www.jaycapital.co.th/wp-content/uploads/2024/04/07.png?id=29618) !important`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        position: 'relative',
                        minHeight: '100vh'
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(145deg, yellow 0%, green 50%, yellow 130%)',
                            opacity: 0.6,
                            zIndex: 1,
                        }}
                    />

                    <div
                        className="container"
                        style={{
                            fontSize: "clamp(8px, 2vw, 16px)",
                            zIndex: 2,
                            position: 'absolute',
                            right: rightValue,
                            top: 'calc(50vh - 20px)',
                            width: "auto",
                            transform: 'translateY(-50%)',
                        }}
                    >
                        <h1>Welcome to Our Website!</h1>
                        <p>Discover innovative products and solutions.</p>
                    </div>

                    <div
                        className="fixed-element"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative",
                            left: leftValueSpiner,
                            top: topValueSpiner
                        }}
                    >
                        <div
                            style={{
                                width: '60px',
                                height: '60px',
                                position: "absolute",
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                zIndex: 2,
                                transformOrigin: 'center center',
                            }}
                        >
                            <div
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    animation: 'spinText 10s linear infinite',
                                    transformOrigin: 'center center',
                                }}
                            >
                                {TextValuesLoop.split('').map((char, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            position: 'absolute',
                                            transform: `rotate(${(index * 360) / TextValuesLoop.length}deg) translateY(-30px)`,
                                            transformOrigin: 'center center',
                                            fontSize: '8px',
                                            fontWeight: 'bold',
                                            color: 'yellow',
                                        }}
                                    >
                                        {char}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <span
                            style={{
                                position: 'absolute',
                                fontSize: '12px',
                                fontWeight: 'bold',
                                color: 'yellow',
                                zIndex: 3,
                            }}
                        >
                            <ArrowRightOutlined style={{ fontSize: '17px', fontWeight: "bolder", transform: 'scaleX(1.5)', cursor: "pointer" }} />
                        </span>
                    </div>

                    <Footer
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            color: 'white',
                            padding: '20px',
                            textAlign: 'center',
                            marginTop: 'auto',
                            zIndex: 2,
                            width: '100%',
                            boxSizing: 'border-box',
                            height: "100px",
                            display: "flex",
                            alignItems: "center",
                            overflow: "hidden",
                        }}
                    >
                        {/* ส่วนที่ไม่เลื่อน */}
                        <div
                            style={{
                                marginRight: "10px",
                                width: "20%",
                                height: "70px",
                                backgroundColor: "red",
                                flexShrink: 0,
                            }}
                        >
                            อันนี้ไม่เลื่อน
                        </div>

                        <div
                            style={{
                                overflow: "hidden",
                                width: "100%",
                                alignItems: "center",
                                whiteSpace: "nowrap",
                                justifyContent: "flex-start",
                                flexGrow: 1,
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    transform: `translateX(-${scrollPosition * 1}px)`,
                                }}
                            >
                                <div
                                    style={{
                                        marginRight: "10px",
                                        width: "100%",
                                        height: "70px",
                                        backgroundColor: "rgba(255, 255, 255)",
                                        color: "black",
                                        whiteSpace: "nowrap"
                                    }}
                                >
                                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                                </div>
                                <div
                                    style={{
                                        marginRight: "10px",
                                        width: "100%",
                                        height: "70px",
                                        backgroundColor: "rgba(255, 255, 255)",
                                        color: "black",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    dadadadawdad
                                </div>
                                <div
                                    style={{
                                        marginRight: "10px",
                                        width: "100%",
                                        height: "70px",
                                        backgroundColor: "rgba(255, 255, 255)",
                                        color: "black",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    dadadadawdad
                                </div>
                                <div
                                    style={{
                                        marginRight: "10px",
                                        width: "100%",
                                        height: "70px",
                                        backgroundColor: "rgba(255, 255, 255)",
                                        color: "black",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                                </div>
                            </div>
                        </div>
                    </Footer>
                </div>
                
                <LineStyle />

                <AboutPage />
                <ContactPage />
            </Content>
        </>
    );
}
