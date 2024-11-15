
import React, { useState, useEffect } from 'react';
import "../assest/styles/Header.modul.css";
import { Button, ConfigProvider, Layout, Menu, Drawer } from 'antd';
import { DownOutlined, MenuOutlined, RightOutlined } from '@ant-design/icons';



export default function Header() {
  const { Header } = Layout;
  const [current, setCurrent] = useState('home');
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [modeMobile, setModeMobile] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const items = [
    {
      label: (
        <>
          Home
        </>
      ),
      key: 'home'
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
          About
        </>
      ),
      key: 'about'
    },
    {
      label: (
        <>
          Contact
        </>
      ),
      key: 'contact'
    },
  ];

  const onClick = (e) => {
    setCurrent(e.key);
    const element = document.getElementById(e.key);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
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
              justifyContent: 'space-between',
              backgroundColor: 'white',
              position: 'sticky',
              top: 0,
              zIndex: 1000,
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
              padding: !modeMobile ? '0 120px' : '0 20px',
            }}
          >
            <div className="demo-logo" />

            <Menu
              theme='light'
              mode="horizontal"
              onClick={onClick}
              onOpenChange={onOpenChange} 
              selectedKeys={[current]}
              items={items}
              style={{
                flex: 1,
                minWidth: 0,
                backgroundColor: 'transparent',
                border: 'none',
                display: modeMobile ? 'none' : '',
              }}
            />

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
                  <Menu
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
