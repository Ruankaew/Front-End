"use client";
import { Layout } from 'antd';
import React from 'react'

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
                    marginRight: "10px",
                    width: "20%",
                    // height: "70px",
                    flexShrink: 0,
                }}
            >
                <p>Trusted by</p>
                <p>hundreds of</p>
                <p>companies</p>
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
                        Ant Design ©{new Date().getFullYear()} Created by Ant UED
                    </div>
                </div>
            </div>
        </Footer>
    )
}
