"use client";
import './assest/styles/Home.modul.css';
import React, { useEffect, useState } from 'react';
import myImage from './assest/image/ImageLandingpage.png';
import myImage2 from './assest/image/Property.png';
import styled from 'styled-components';
import { Button, Flex, Layout } from 'antd';
import AboutPage from './contents/About';
import FooterPage from './contents/FooterPage';
import ImageGroup from './assest/image/Group482133.png'
import ImageCoin from './assest/image/coin-wooden-table.png'

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
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Content>
                <div
                    id="home"
                    style={{
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        position: 'relative',
                        minHeight: '100vh'
                    }}
                >
                    {/* vido Background */}
                    <video
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            zIndex: 1,
                            background: "white",
                            opacity: 1,
                            // pointerEvents: "none",
                        }}
                        autoPlay
                        muted
                        loop
                        preload="auto"
                    >
                        <source
                            src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1303741208789463499/53dc876861d197a874a1b9b41335f0655a383695?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GDyfXPcldacEduTetnSq5PMgtxG3oVVK-rDUAEeegVND5fIp9NISbNbw~nfyMmKVjolVuFnmY1ZymG1CjiSHD0Q34EDCmIFFN1nP61Dw7i5QaWLRYw1WtmswiZiTVObGE8aR14wNQUhuJUvJFuqWm~PpltICzbZ559DL4QmH9MIWKBqlw0YI0mGcCocJQxJMztQ4-0VmJ-0cpxBs8uZ3wG7pvFVUIGchplFh8Zv8LYqeVo3glIMf9-5seab2eMwz2PX982vz3IG38LzdQ4oLHE4zoV4UJfET7UypF2TyASyOt-WtgPnLUoh0MvWghHeoTtNDiLnUMJVMtOhLYqDEGQ__"
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
                            opacity: 0.9,
                            zIndex: 1,
                        }}
                    />


                    <div
                        style={{
                            zIndex: 2,
                            position: 'absolute',
                            top: 'calc(15% - 20px)',
                            width: '81%',
                            overflow: 'hidden',
                            borderRadius: '5%',
                            fontFamily: "fangsong",
                            color: 'white',
                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                            fontWeight: 'bold',

                        }}
                    >
                        <div className="text-container">
                            <h1 className="text_titel" style={{ fontSize: "48px" }}>
                                YOUR TRUSTED PARTNER IN
                                <br />
                                <div className="rotating-container">
                                    <span className="rotating-word" key={currentWord}>
                                        {words[currentWord]}
                                    </span>
                                </div>
                            </h1>
                        </div>
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
                </div>
                <FooterPage scrollPosition={scrollPosition} />

                <LineStyle />

                <AboutPage />

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div className="divider">
                        <div className="divider-line"></div>
                        <div className="divider-icon">
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.9417 18.1573C22.6077 24.6609 28.3456 30.3268 34.9122 34.9117C30.3273 28.3451 24.6705 22.5982 18.1579 17.9412C24.6615 13.2752 30.3273 7.53723 34.9123 0.9706C28.3456 5.55553 22.5987 11.2124 17.9417 17.725C13.2757 11.2214 7.53776 5.55553 0.971124 0.970601C5.55606 7.53723 11.2129 13.2842 17.7255 17.9412C11.2219 22.6072 5.55606 28.3451 0.971125 34.9117C7.53776 30.3268 13.2847 24.6699 17.9417 18.1573Z" fill="#CF982C" />
                            </svg>

                        </div>
                        <div className="divider-line"></div>
                    </div>
                </div>

                <div
                    style={{
                        background: "none",
                        marginBottom: "20px",
                        padding: "0 50px"
                    }}
                >
                    <div
                        style={{
                            height: "440px",
                            borderRadius: "20px",
                            background: "linear-gradient(28deg, rgba(174,189,166,1) 0%, rgba(80,112,83,1) 37%, rgba(43,77,48,1) 63%, rgba(31,61,36,1) 84%)",

                        }}
                    >
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div className="content_left">
                                <h2 style={{ color: "rgba(248, 246, 241, 1)", fontFamily: "DM Sans" }}>Execution excellence with utmost integrity to drive business and society sustainably</h2>
                                <p style={{ maxWidth: "450px" }}>
                                    <span style={{ color: "rgba(248, 246, 241, 1)", fontFamily: "DM Sans" }}>Strategic and financial consulting group</span><br />
                                    <span style={{ color: "rgba(181, 190, 184, 1)", fontFamily: "DM Sans" }}>Jay Capital Advisory Limited is an SEC-approved financial advisory firm
                                        based in Bangkok, Thailand. We have been providing financial consulting
                                        services to our clients for more than 20 years.</span>
                                </p>
                            </div>


                            <div className="content_right">
                                <img style={{ width: "561px", height: "200px", margin: "30px" }} src={ImageGroup.src} />
                            </div>
                        </div>

                        <div className="services">
                            <div className="service">Financial Advisory (FA)</div>
                            <div className="service">Strategic Solutions</div>
                            <div className="service">Business Reorientation</div>
                            <div className="service">Knowledge Sharing</div>
                        </div>

                    </div>
                </div>

                <br />
                <br />

                <div
                    style={{
                        background: "none",
                        marginBottom: "20px",
                        padding: "0 50px"
                    }}
                >
                    <div
                        style={{
                            height: "707px",
                            borderRadius: "20px",
                            background: "linear-gradient(28deg, rgba(174,189,166,1) 0%, rgba(80,112,83,1) 37%, rgba(43,77,48,1) 63%, rgba(31,61,36,1) 84%)",
                            position: "relative",
                            zIndex: 1,
                            overflow: "hidden"
                        }}
                    >
                        <div className="content_financial">
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div className="title">
                                    <p>Financial<br />Advisory</p>
                                </div>
                                <div className="description">
                                    <p>
                                        Our Financial Solutions cover essential services, including Mergers &amp; Acquisitions (M&amp;A), Share Valuation &amp; Feasibility Studies, and Independent Financial Advisory (IFA). We guide clients through Initial Public Offerings (IPOs) and Private Placements (PP), and provide Financial Restructuring strategies.
                                    </p>
                                </div>
                            </div>
                            <div className="services_financial">
                                <div className='services_financial_up'>
                                    <div className="service-item">
                                        <span>Initial Public Offerings (IPOs)</span>
                                    </div>
                                    <div className="service-item">
                                        <span>Initial Public Offerings & Private Placements</span>
                                    </div>
                                </div>
                                <div className='services_financial_down'>
                                    <div className="service-item">
                                        <span>Mergers & Acquisitions</span>
                                    </div>
                                    <div className="service-item_1">
                                        <span>Independent Financial Advisory</span>
                                    </div>
                                    <div className="service-item">
                                        <span>Financial Restructuring</span>
                                    </div>
                                </div>

                            </div>
                                <div
                                    style={{
                                        border: "none",
                                        background: "none",
                                        overflow: "hidden",
                                        display: "flex",
                                        justifyContent: "end",
                                        marginRight: "5px"
                                    }}
                                >
                                    <svg width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="41.4892" cy="41.4902" r="41.1886" stroke="white" stroke-width="0.601293" />
                                        <path d="M29.2656 46.6272L28.3996 47.1272L29.3996 48.8593L30.2656 48.3593L29.2656 46.6272ZM52.7823 35.3593C53.2606 35.0831 53.4245 34.4716 53.1483 33.9933C52.8722 33.515 52.2606 33.3511 51.7823 33.6272L52.7823 35.3593ZM39.4881 30.333L38.9881 29.467L37.256 30.467L37.756 31.333L39.4881 30.333ZM52.1693 35.4562C52.7214 35.4428 53.1581 34.9843 53.1447 34.4322C53.1313 33.8801 52.6728 33.4434 52.1207 33.4568L52.1693 35.4562ZM47.7057 48.5665L48.2057 49.4325L49.9377 48.4325L49.4377 47.5665L47.7057 48.5665ZM30.2656 48.3593L52.6952 35.4096L51.6952 33.6775L29.2656 46.6272L30.2656 48.3593ZM52.6952 35.4096L52.7823 35.3593L51.7823 33.6272L51.6952 33.6775L52.6952 35.4096ZM37.756 31.333C38.4922 32.6082 39.8841 33.4284 41.3287 33.9779C42.8028 34.5387 44.507 34.8828 46.0934 35.0972C47.6871 35.3125 49.2024 35.4019 50.3162 35.4378C50.8742 35.4558 51.334 35.4605 51.6558 35.4606C51.8167 35.4607 51.9433 35.4596 52.0305 35.4585C52.0741 35.458 52.1079 35.4574 52.1312 35.457C52.1429 35.4568 52.1519 35.4566 52.1583 35.4564C52.1615 35.4564 52.164 35.4563 52.1658 35.4563C52.1667 35.4562 52.1675 35.4562 52.1681 35.4562C52.1683 35.4562 52.1686 35.4562 52.1688 35.4562C52.169 35.4562 52.1693 35.4562 52.145 34.4565C52.1207 33.4568 52.1209 33.4568 52.1209 33.4568C52.1209 33.4568 52.121 33.4568 52.1209 33.4568C52.1208 33.4568 52.1205 33.4568 52.12 33.4568C52.1191 33.4568 52.1176 33.4568 52.1153 33.4569C52.1108 33.457 52.1037 33.4571 52.0939 33.4573C52.0745 33.4577 52.0447 33.4582 52.0052 33.4587C51.9261 33.4597 51.8083 33.4607 51.6566 33.4606C51.3531 33.4605 50.9147 33.4561 50.3807 33.4389C49.3105 33.4043 47.8669 33.3186 46.3611 33.1152C44.848 32.9107 43.3122 32.5926 42.0398 32.1086C40.7378 31.6134 39.8768 31.0064 39.4881 30.333L37.756 31.333ZM52.1952 34.5436C51.4071 33.9279 51.407 33.9281 51.4068 33.9284C51.4067 33.9285 51.4064 33.9288 51.4062 33.9291C51.4058 33.9296 51.4053 33.9303 51.4047 33.931C51.4035 33.9326 51.4019 33.9347 51.3999 33.9372C51.3959 33.9424 51.3904 33.9496 51.3833 33.9587C51.3693 33.977 51.3492 34.0033 51.3237 34.0371C51.2727 34.1047 51.1997 34.2027 51.1088 34.3282C50.927 34.5791 50.6728 34.9405 50.3782 35.3893C49.7905 36.2847 49.0342 37.5396 48.3705 38.9676C47.7094 40.3899 47.1219 42.0222 46.9023 43.6657C46.6824 45.311 46.823 47.0377 47.7057 48.5665L49.4377 47.5665C48.8455 46.5408 48.7017 45.2998 48.8846 43.9306C49.0679 42.5596 49.5706 41.1305 50.1841 39.8106C50.7949 38.4965 51.4976 37.3287 52.0502 36.4868C52.3257 36.067 52.562 35.7312 52.7282 35.5019C52.8112 35.3873 52.8766 35.2996 52.9204 35.2415C52.9423 35.2124 52.9589 35.1908 52.9695 35.177C52.9748 35.1701 52.9786 35.1651 52.9809 35.1621C52.9821 35.1606 52.9829 35.1596 52.9832 35.1591C52.9834 35.1589 52.9835 35.1588 52.9835 35.1588C52.9835 35.1588 52.9834 35.1589 52.9834 35.1589C52.9833 35.159 52.9832 35.1592 52.1952 34.5436Z" fill="white" />
                                    </svg>


                                </div>
                        </div>
                        <div class="background">
                            <img src={ImageCoin.src} alt="Coins" />
                            <div class="gradient-overlay"></div>
                        </div>

                    </div>
                </div>




                <LineStyle />

            </Content>
        </>
    );
}
