"use client";
import { Layout } from 'antd';
import React, {useState, useEffect} from 'react'
import Vector from '../assest/image/Vector.png'
import Vector1 from '../assest/image/Vector (1).png'
import Vector2 from '../assest/image/Vector (2).png'
import Vector3 from '../assest/image/Vector (5).png'
import Vector4 from '../assest/image/Vector (4).png'

export default function FooterPage({ scrollPosition }) {
    const { Footer } = Layout;
    return (
        <Footer
            style={{
                backgroundColor: '#0E341E',
                color: 'white',
                padding: '20px',
                textAlign: 'center',
                marginTop: 'auto',
                zIndex: 2,
                width: '100%',
                boxSizing: 'border-box',
                height: "148px",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    fontFamily: "DM Sans",
                    fontSize: "18px",
                    marginRight: "10px",
                    width: "20%",
                    flexShrink: 0,
                }}
            >
                <p>Trusted by <br /> hundreds of <br /> companies</p>
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
                        // transform: `translateX(-${scrollPosition * 1}px)`,
                        transform: `translateX(-${scrollPosition}px)`,
                        transition: "transform 0.1s linear",
                    }}
                >
                    <div
                        style={{
                            marginRight: "10px",
                            width: "100%",
                            height: "70px",
                            whiteSpace: "nowrap",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <img src={Vector.src} alt="Vector" style={{ width: "121px" }} />
                    </div>
                    <div
                        style={{
                            marginRight: "10px",
                            width: "100%",
                            height: "70px",
                            color: "black",
                            whiteSpace: "nowrap",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <img src={Vector1.src} alt="Vector" style={{ width: "121px" }} />
                    </div>
                    <div
                        style={{
                            marginRight: "10px",
                            width: "100%",
                            height: "70px",
                            color: "black",
                            whiteSpace: "nowrap",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <img src={Vector2.src} alt="Vector" style={{ width: "121px" }} />
                    </div>
                    <div
                        style={{
                            marginRight: "10px",
                            width: "100%",
                            height: "70px",
                            color: "black",
                            whiteSpace: "nowrap",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <img src={Vector3.src} alt="Vector" style={{ width: "121px" }} />
                    </div>
                    <div
                        style={{
                            marginRight: "10px",
                            width: "100%",
                            height: "70px",
                            color: "black",
                            whiteSpace: "nowrap",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <img src={Vector4.src} alt="Vector" style={{ width: "86px" , objectFit: "none" }} />
                    </div>
                </div>
            </div>
        </Footer >
    )
}
