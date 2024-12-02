"use client";
import './assest/styles/Home.modul.css';
import React, { useEffect, useState } from 'react';
import myImage from './assest/image/ImageLandingpage.png';
import myImage2 from './assest/image/Property.png';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Button, Flex, Layout } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import AboutPage from './contents/About';
import FooterPage from './contents/FooterPage';
import Line from './components/Line';


const LineStyle = styled("div")`
    height: 13px;
    background-color: rgba(207, 152, 44, 1);
`;

export default function Home() {
    const { Content, Footer } = Layout;
    const [scrollPosition, setScrollPosition] = useState(0);
    const TextValuesLoop = 'JJ JIRA S LIBRARY';
    const words = ['FINANCIAL IPO', 'M&A', 'FINANCIAL RESTRUCTURING', 'FINANCIAL CONSULTING'];
    const [currentWord, setCurrentWord] = useState(0);



    //----------------------------------Text-------------------------------------
    let [rightValue, setRightValue] = useState('calc(5% + 6%)');
    let [topValue, setTopValue] = useState('calc(75px + 50%)');


    //----------------------------------Spinner-----------------------------------
    let [topValueSpiner, setTopValueSpiner] = useState('calc(75px + 71%)');
    let [rightValueSpiner, setRightValueSpiner] = useState('calc(254px + 6%)');

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth <= 380) {
                // iPhone
                setRightValue('calc(-6% + 30px)');
                setTopValue('calc(75px + 50%)')

            } else if (screenWidth <= 768) {
                // Tablet
                setRightValue('calc(0% + 30px)');
                setTopValue('calc(75px + 50%)')

            } else {
                // Desktop
                // setRightValue('calc(5% + 6%)');
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
            {/* <Content> */}
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
                        background: "white",
                        opacity: 0.7,
                        pointerEvents: "none",
                        filter: 'brightness(200%) grayscale(100%)',
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
                        background: 'linear-gradient(143deg, #c67d1d -2%, rgb(7 52 7) 23%, rgb(7 52 7) 86%, rgb(7 52 7) 80%, #c67d1d 112%)',
                        // background: 'linear-gradient(145deg, rgba(255, 205, 0, 0.9192051820728291) 0%, rgba(153, 151, 5, 1) 4%, rgba(81, 114, 8, 1) 17%, rgba(44, 95, 10, 1) 22%, rgba(11, 78, 11, 1) 36%, rgba(0, 65, 0, 1) 47%, rgba(2, 70, 2, 1) 52%, rgba(6, 73, 6, 1) 56%, rgba(11, 78, 11, 1) 62%, rgba(11, 78, 11, 1) 75%, rgba(42, 94, 10, 1) 82%, rgba(48, 97, 10, 1) 83%, rgba(79, 113, 8, 1) 88%, rgba(106, 127, 7, 1) 90%, rgba(146, 148, 5, 1) 94%, rgba(162, 156, 4, 1) 95%, rgba(225, 189, 1, 1) 99%, rgba(255, 205, 0, 1) 100%)',
                        opacity: 0.9,
                        zIndex: 1,
                    }}
                />



                <div
                    className="text"
                    style={{
                        zIndex: 2,
                        position: 'absolute',
                        // right: 'calc(52% + 30px)',
                        top: 'calc(15% - 20px)',
                        // width: '37%',
                        width: '81%',
                        overflow: 'hidden',
                        borderRadius: '5%',
                        fontFamily: "fangsong",
                        // fontSize: "20px",
                        color: 'white',
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                        fontWeight: 'bold',
                    }}
                >
                    <h1 className="text_titel" style={{ fontSize: "48px" }}>YOUR TRUSTED PARTNER IN <br /> <span className="text_slid" style={{ fontSize: "69.47px" }}> {words[currentWord]}</span></h1>

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
                        top: 'calc(46% - 20px)',
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
                        top: topValue,
                        width: "277px",
                        fontWeight: 400,
                        transform: 'translateY(-50%)',
                    }}
                >
                    <p style={{ fontSize: "18px", color: "#B9B8B0" }}>Jay Capital Advisory is dedicated to <span style={{ fontWeight: "bolder", color: "white" }}> delivering expert guidance </span> and customized solutions. With unwavering integrity, we help clients navigate complex financial landscapes and achieve sustainable growth.</p>
                </div>

                <div
                    style={{
                        zIndex: 2,
                        position: "absolute",
                        right: rightValueSpiner,
                        top: topValueSpiner,
                        fontWeight: 400,
                        transform: 'translateY(-50%)',
                    }}
                >
                    <img src={myImage2.src} alt='photo' style={{ width: "96.57px", height: "96.81px" }} />
                </div>

                {/* <div
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
                                    // animation: 'spinText 10s linear infinite',
                                    // transformOrigin: 'center center',
                                }}
                            > */}
                {/* {TextValuesLoop.split('').map((char, index) => (
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
                                ))} */}

                {/* <img src={myImage2.src} alt='photo' style={{ width: "160%" }} /> */}

                {/* </div>
                        </div> */}

                {/* <span
                            style={{
                                position: 'absolute',
                                fontSize: '12px',
                                fontWeight: 'bold',
                                color: 'yellow',
                                zIndex: 3,
                            }}
                        >
                            <ArrowRightOutlined style={{ fontSize: '17px', fontWeight: "bolder", transform: 'scaleX(1.5)', cursor: "pointer" }} />
                        </span> */}
                {/* </div> */}

            </div>
            <FooterPage scrollPosition={scrollPosition} />

            <LineStyle />

            <AboutPage />

            <div class="divider">
                <div class="divider-line"></div>
                <div class="divider-icon">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.9417 18.1573C22.6077 24.6609 28.3456 30.3268 34.9122 34.9117C30.3273 28.3451 24.6705 22.5982 18.1579 17.9412C24.6615 13.2752 30.3273 7.53723 34.9123 0.9706C28.3456 5.55553 22.5987 11.2124 17.9417 17.725C13.2757 11.2214 7.53776 5.55553 0.971124 0.970601C5.55606 7.53723 11.2129 13.2842 17.7255 17.9412C11.2219 22.6072 5.55606 28.3451 0.971125 34.9117C7.53776 30.3268 13.2847 24.6699 17.9417 18.1573Z" fill="#CF982C" />
                    </svg>

                </div>
                <div class="divider-line"></div>
            </div>

        </>
    );
}
