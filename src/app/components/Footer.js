"use client";
import { Layout } from 'antd';
import React from 'react'

export default function Footer() {
    const { Content, Footer } = Layout;
    return (
        <Footer 
            style={{ 
                textAlign: "center" 
            }}
        >
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
    )
}
