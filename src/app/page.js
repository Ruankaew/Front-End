"use client";
import './assest/styles/Home.modul.css';
import React, { useEffect, useState } from 'react';
import myImage from './assest/image/ImageLandingpage.png';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Button, Flex, Layout } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import AboutPage from './contents/About';
import FooterPage from './contents/FooterPage';
import Line from './components/Line';
import LineSeparator from './contents/LineSeparator';


export default function Home() {
    const { Content, Footer } = Layout;
    const [scrollPosition, setScrollPosition] = useState(0);
    const TextValuesLoop = 'JJ JIRA S LIBRARY';
    const words = ['FINANCIAL IPO', 'M&A', 'FINANCIAL RESTRUCTURING', 'FINANCIAL CONSULTING'];
    const [currentWord, setCurrentWord] = useState(0);



    //----------------------------------Text-------------------------------------
    let [rightValue, setRightValue] = useState('calc(1% + 30px)');
    let [leftValue, setLeftValue] = useState('calc(6% + 28.9%)');
    let [bottomValue, setBottomValue] = useState('');
    let [topValue, setTopValue] = useState('');


    //----------------------------------Spinner-----------------------------------
    let [leftValueSpiner, setLeftValueSpiner] = useState('calc(2% + 28.9%)');
    let [rightValueSpiner, setRightValueSpiner] = useState('');
    let [bottomValueSpiner, setBottomValueSpiner] = useState('');
    let [topValueSpiner, setTopValueSpiner] = useState('calc(-150px + 50vh)');

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth <= 380) {
                // iPhone
                setRightValue('calc(-6% + 30px)');
                setLeftValueSpiner('calc(6% + 16.9%)');
                setTopValueSpiner('calc(-360px + 50vh)');
            } else if (screenWidth <= 768) {
                // Tablet
                setRightValue('calc(0% + 30px)');
                setLeftValueSpiner('calc(6% + 13.9%)');
                setTopValueSpiner('calc(-360px + 50vh)');
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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Content>
                <div
                    id="home"
                    style={{
                        // background: `url(https://www.jaycapital.co.th/wp-content/uploads/2024/04/07.png?id=29618) !important`,
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        position: 'relative',
                        minHeight: '100vh'
                    }}
                >
                    <video
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            zIndex: -1,
                        }}
                        autoPlay
                        muted
                        loop
                        preload="auto"
                    >
                        <source
                            src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1303741208789463499/53dc876861d197a874a1b9b41335f0655a383695?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oCafdwOITxXjEUL57ft1JHNC1xQasAaOw0k3jh2dCjELRrqkve8EqYyGy9UPJtsnUiY3Z0LL40egCvNwV00RhQ~O5p7dPzMNIEhwgoq6AnM62yIEXjFW4LOv-CBrRj2mNuPd46XF9lurYlFEUW8Q4P7L4tPToN1njQ5tXeV8iVM7r8~6KOJ9UZ5RhRj-k8waRaKR2cyAZ2GGWug9bZdo~OBeNdFDCVRGx~YYfD9DIOtrROCgiSwWvgATNStHhhADXePhPyirSCUE5ORaC0GeXHoel333196kJ4UQJx1rTSzXTl3SNgogRFIvCn9D7KS~Eca9laoGDJPoHhacxkG1Kw__"
                            type="video/mp4"
                        />
                    </video>

                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(145deg, #CF982D -2%, rgb(0, 77, 0) 30%, rgb(11, 78, 11) 60%, rgb(0, 102, 0) 80%, #CF982C 100%)',
                            opacity: 0.6,
                            zIndex: 1,
                        }}
                    />



                    <div
                        className="text"
                        style={{
                            zIndex: 2,
                            position: 'absolute',
                            right: 'calc(52% + 30px)',
                            top: 'calc(20% - 20px)',
                            width: '37%',
                            overflow: 'hidden',
                            borderRadius: '5%',
                            fontFamily: "fangsong",
                            fontSize: "20px",
                            color: 'white',
                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                            fontWeight: 'bold',
                        }}
                    >
                        <h1 className="text_titel">YOUR TRUSTED PARTNER IN <br /> <span className="text_slid"> {words[currentWord]}</span></h1>

                        {/*<div className="rotating-container">
                             <div
                                 className="rotating-word"
                                 // key={currentWord}
                             >
                                 {words[currentWord]}
                             </div>
                        </div> */}
                    </div>

                    <div
                        style={{
                            zIndex: 2,
                            position: 'absolute',
                            right: 'calc(34% + 30px)',
                            top: 'calc(45% - 20px)',
                            width: "55%",
                            height: "50.6%",
                            overflow: "hidden",
                            borderRadius: "14.16px",
                        }}
                    >
                        {/* Background color */}
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: "linear-gradient(to right, rgba(2, 43, 13, 1) 50%, rgb(34 113 56 / 47%) 50%)",
                                borderRadius: "14.16px",
                                zIndex: 3,
                                opacity: 0.5
                            }}
                        ></div>

                        <img
                            src={myImage.src}
                            alt="Logo"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                zIndex: 2,
                            }}
                        />
                    </div>


                    <div
                        style={{
                            fontFamily: "DM Sans",
                            fontSize: "clamp(8px, 2vw, 16px)",
                            zIndex: 2,
                            position: 'absolute',
                            right: rightValue,
                            top: 'calc(75px + 50%)',
                            width: "277px",
                            fontWeight: 400,
                            transform: 'translateY(-50%)',
                        }}
                    >
                        <p style={{ color: "#B9B8B0" }}>Jay Capital Advisory is dedicated to <span style={{ fontWeight: "bolder", color: "white" }}> delivering expert guidance </span> and customized solutions. With unwavering integrity, we help clients navigate complex financial landscapes and achieve sustainable growth.</p>
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

                </div>
                <FooterPage scrollPosition={scrollPosition} />

                <LineSeparator />

                <AboutPage />

                <Line />

            
           
            </Content>
        </>
    );
}
