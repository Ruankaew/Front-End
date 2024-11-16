"use client";
import React, { useState, useEffect } from 'react';
import "../assest/styles/Header.modul.css";
import { Button, ConfigProvider, Layout, Menu, Drawer } from 'antd';
import { ArrowRightOutlined, DownOutlined, MenuOutlined, RightOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import Image_logo from "../assest/image/Frame_482199.png"

const StyledMenu = styled(Menu)`
  .ant-menu-item:hover::after {
    border-bottom-color: transparent !important;
  }

  .ant-menu-submenu:hover .ant-menu-title::after {
    border-bottom-color: transparent !important;
  }

  .ant-menu-item-active::after,
  .ant-menu-item-selected::after,
  .ant-menu-submenu-active .ant-menu-title::after,
  .ant-menu-submenu-selected .ant-menu-title::after {
    border-bottom-color: transparent !important;
  }

  .ant-menu-submenu .ant-menu-item:hover {
    background-color: transparent !important;
    color: inherit !important;
  }

  .ant-menu-submenu .ant-menu-item:hover::after {
    border-bottom-color: transparent !important;
  }
`;

export default function Header() {
  const router = useRouter();
  const { Header } = Layout;
  const [current, setCurrent] = useState('home');
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [modeMobile, setModeMobile] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const items = [
    {
      label: (
        <>
          Home
        </>
      ),
      key: 'home',
      path: '/'
    },
    {
      label: (
        <>
          Service {modeMobile ? '' : openSubMenu ? <DownOutlined style={{ fontSize: '10px' }} /> : <RightOutlined style={{ fontSize: '10px' }} />}
        </>
      ),
      key: 'SubMenu',
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            {
              label: 'Option 1',
              key: 'setting:1',
            },
            {
              label: 'Option 2',
              key: 'setting:2',
            },
          ],
        },
      ],
    },
    {
      label: (
        <>
          Track Records
        </>
      ),
      key: 'trackrecord',
      path: '/Page/Trackrecords'
    },
    {
      label: (
        <>
          Contact us
        </>
      ),
      key: 'contactus',
      path: '/Page/Contactus'
    },
    {
      label: (
        <>
          <Button
            style={{
              backgroundColor: "#b07a31",
              border: "none",
              outline: "none",
              color: "black",
              fontWeight: "500",
            }}
            onMouseEnter={(e) => e.target.style.color = "black"}
            onMouseLeave={(e) => e.target.style.color = "black"}
          >
            Get in touch  <ArrowRightOutlined style={{ fontSize: '14px', fontWeight: "bolder", color: "black" }} />
          </Button>
        </>
      ),
      key: 'getintouch',
      path: '/Page/Contactus'
    },
  ];

  const onClick = (e) => {
    const clickedItem = items.find(item => item.key === e.key);
    setCurrent(e.key);
    const element = document.getElementById(e.key);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth',
      });
    };

    // window.history.pushState(null, '', `${clickedItem.path}`);
  };

  const onOpenChange = (keys) => {
    setOpenSubMenu(keys.length > 0);
  };

  useEffect(() => {
    // const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    // setTheme(userPrefersDark ? 'dark' : 'light');

    if (typeof window !== 'undefined') {
      if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) {
        setModeMobile(true);
      } else {
        setModeMobile(false);
      };
    };

  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#1890ff',
            colorBgBase: 'white',
            colorText: '#000000',
            colorLink: '#1890ff',
          }
        }}
      >
        <Layout className="sticky-header">
          <Header
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              // backgroundColor: isSticky ? 'rgb(187 185 185 / 90%)' : 'transparent',
              backgroundColor: isSticky ? 'rgb(187 185 185 / 90%)' : 'white',
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1000,
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
              padding: !modeMobile ? '0 160px' : '0 20px',
              height: '90px',
              backdropFilter: isSticky ? 'blur(2px)' : 'none',
              transition: 'backdrop-filter 0.3s ease',
            }}
          >
            <div class="demo-logo">
              <img
                src={Image_logo.src}
                alt="Logo"
                style={{
                  width: "60%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "20px"
                }}
              />
            </div>


            <StyledMenu
              theme='light'
              mode="horizontal"
              onClick={(e) => {
                onClick(e);
              }}
              onOpenChange={onOpenChange}
              className="custom-menu"
              selectedKeys={[current]}
              // selectedKeys={[]}
              items={items}
              style={{
                flex: 1,
                minWidth: 0,
                maxWidth: "720px",
                backgroundColor: 'transparent',
                border: 'none',
                display: modeMobile ? 'none' : 'flex',
                fontWeight: "500",
                justifyContent: "space-around"
              }}
            />

            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>

            {modeMobile && (
              <>
                <Button
                  type="text"
                  icon={<MenuOutlined />}
                  onClick={() => setDrawerVisible(true)}
                  className="menu-toggle-btn"
                  style={{
                    display: 'flex',
                  }}
                />

                <Drawer
                  title="Menu"
                  placement="right"
                  onClose={() => setDrawerVisible(false)}
                  visible={drawerVisible}
                  bodyStyle={{ padding: 0 }}
                >
                  <StyledMenu
                    className="custom-menu"
                    theme='light'
                    mode="inline"
                    onClick={(e) => {
                      onClick(e);
                      setDrawerVisible(false);
                    }}
                    onOpenChange={onOpenChange}
                    selectedKeys={[current]}
                    items={items}
                  />
                </Drawer>
              </>
            )}
          </Header>
        </Layout>
      </ConfigProvider>
    </>
  );
}
