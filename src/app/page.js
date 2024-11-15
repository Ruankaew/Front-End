"use client";
import React, { useEffect } from 'react';
import myImage from './assest/image/download.jpg';
import './assest/styles/Home.modul.css';
import { ArrowRightOutlined } from '@ant-design/icons';
import AboutPage from './Page/About/page';
import ContactPage from './Page/Contact/page';
import { useRouter } from 'next/router';
import styled from 'styled-components';

export default function Home() {
    return (
        <>
            <div
                id="home"
                style={{
                    minHeight: '100vh',
                    background: `url(https://www.jaycapital.co.th/wp-content/uploads/2024/04/07.png?id=29618) !important`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    position: 'relative',
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
                        zIndex: 2,
                        position: "absolute",
                        right: "250px",
                        top: "480px",
                        width: "356px",
                    }}
                >
                    <h1>Welcome to Our Website!</h1>
                    <p>Discover innovative products and solutions.</p>
                </div>

                <div className="fixed-element" style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
                    <div
                        style={{
                            width: '60px',
                            height: '60px',
                            position: 'relative',
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
                            {'JETSDADADWDWA'.split('').map((char, index) => (
                                <span
                                    key={index}
                                    style={{
                                        position: 'absolute',
                                        transform: `rotate(${(index * 360) / 'JETSDADADWDWA'.length}deg) translateY(-30px)`,
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
                        <ArrowRightOutlined style={{ fontSize: '17px', fontWeight: "bolder", transform: 'scaleX(1.5)' , cursor: "pointer"}} />
                    </span>
                </div>

                <footer
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        color: 'white',
                        padding: '20px',
                        textAlign: 'center',
                        marginTop: 'auto',
                        zIndex: 2,
                        // width: '97.9%',
                    }}
                >
                    <p>&copy; 2023 Your Company Name</p>
                </footer>
            </div>
            <LineStyle />

            <AboutPage />
            <ContactPage />
        </>
    );
}

const LineStyle = styled("div")`
    height: 20px;
    background: #e4b16e;
`;
