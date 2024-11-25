"use client";
import { Layout, Menu } from 'antd';
import React from 'react'
import styled from 'styled-components';
import { RightOutlined } from '@ant-design/icons';
import Image_logo from "../assest/image/GroupLogo.png"
import "../assest/styles/Footer.css"
import LineSeparator from '../contents/LineSeparator';


const StyledMenu = styled(Menu)`
  .ant-menu-item {
    flex: 1;
    text-align: center;
    color: "white !important";
  }

//   .ant-menu-submenu-title {
//     width: 150px;
//     text-align: center;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     color: "white !important";
//   }

  .ant-menu-title-content{
    font-family: 'DM Sans';
    color: "white !important";
  }

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

export default function Footer() {
    const { Header, Footer } = Layout;

    const items = [
        {
            label: (
                <span style={{ color: "rgba(164, 164, 164, 1)" }}>
                    Home
                </span>
            ),
            key: 'home',
            path: '/'
        },
        {
            label: (
                <span style={{ color: "rgba(164, 164, 164, 1)" }}>
                    Service <RightOutlined style={{ fontSize: '10px' }} />
                </span>
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
                <span style={{ color: "rgba(164, 164, 164, 1)" }}>
                    Track Records
                </span>
            ),
            key: 'trackrecord',
            path: '/Page/Trackrecords'
        },
        {
            label: (
                <span style={{ color: "rgba(164, 164, 164, 1)" }}>
                    Contact us
                </span>
            ),
            key: 'contactus',
            path: '/Page/Contactus'
        }
    ];

    return (
        <>
            <LineSeparator />
            <Footer
                style={{
                    textAlign: "center",
                    backgroundColor: 'rgba(14, 52, 30, 1)',
                    height: "150px"
                }}
            >
                {/* Ant Design ©{new Date().getFullYear()} Created by Ant UED */}
                <Header
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        height: "auto",
                        padding: "0 50px",
                        color: "rgba(255, 255, 255, 1)",
                        lineHeight: "64px",
                        background: "none",
                    }}
                >
                    <div class="logo_footer">
                        <svg width="214" height="37" viewBox="0 0 214 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M43.8146 25.6048C43.8128 25.6029 43.811 25.6016 43.8096 25.6002C43.8005 25.592 43.7951 25.5815 43.7859 25.5738C43.7787 25.5674 43.7691 25.5651 43.7618 25.5596C43.6775 25.4922 43.5846 25.4357 43.4825 25.3956C43.4675 25.3897 43.4515 25.3861 43.436 25.381C43.3267 25.3437 43.2114 25.3186 43.0893 25.3186C43.0888 25.3186 43.0884 25.3186 43.0879 25.3186L39.0028 25.3182H38.7335C38.7335 25.3182 38.7335 25.3186 38.733 25.3186C38.2359 25.3186 37.8159 25.6567 37.6919 26.1173C37.6892 26.1274 37.6846 26.1365 37.6824 26.146C37.6691 26.2012 37.6632 26.259 37.6591 26.3169C37.6582 26.3306 37.6541 26.3433 37.6537 26.357V26.3579C37.6537 26.3584 37.6537 26.3588 37.6537 26.3597C37.6537 26.3625 37.6532 26.3647 37.6532 26.367V29.9036V30.5807C37.501 32.8105 35.8699 34.6335 33.7293 35.0672C33.4118 35.1315 33.0837 35.1656 32.747 35.1656V33.3313V25.3186V23.518V21.9679V14.1562V3.6713V1.83694H43.1841C43.3312 1.83694 43.4761 1.80733 43.6105 1.74947C44.4648 1.38269 44.1942 0.0827827 43.2679 0.00350189L43.2592 0.00259018H32.747H25.1836H19.4627H11.8984C11.8966 0.00259018 11.8943 0.00304794 11.892 0.00304794C11.8506 0.00304794 11.81 0.00577927 11.769 0.00623703C11.6114 0.00805664 11.4542 0.0103378 11.2983 0.0185394C11.22 0.0226402 11.1425 0.0308418 11.0646 0.0363083C10.9434 0.0449638 10.8222 0.0527077 10.7024 0.0654678C10.6204 0.0741234 10.5393 0.085968 10.4577 0.0964508C10.3429 0.111031 10.2281 0.124702 10.1146 0.142471C10.034 0.155228 9.95424 0.170715 9.87405 0.185295C9.7606 0.205799 9.64714 0.225391 9.53506 0.249084C9.4576 0.265488 9.38106 0.284626 9.30451 0.302395C9.19106 0.328819 9.07761 0.35479 8.96552 0.384865C8.89171 0.404453 8.81836 0.426327 8.74546 0.447285C8.63155 0.479633 8.5181 0.512894 8.40602 0.548889C8.33676 0.571217 8.26796 0.595364 8.19916 0.618599C8.08434 0.658241 7.96998 0.698334 7.85653 0.741161C7.79274 0.765312 7.72941 0.790825 7.66562 0.816341C7.54944 0.862816 7.43416 0.910202 7.3198 0.96032C7.26102 0.98629 7.20225 1.01317 7.14393 1.04005C7.09335 1.06329 7.04187 1.08471 6.99175 1.10885C6.92522 1.14029 6.86053 1.17401 6.79492 1.20681C6.74161 1.23324 6.68875 1.26058 6.63636 1.28792C6.51744 1.34988 6.39943 1.41367 6.28325 1.47974C6.23586 1.50616 6.18893 1.5335 6.142 1.56084C6.02172 1.63146 5.90234 1.7039 5.78433 1.77908C5.75381 1.79868 5.72237 1.81736 5.69184 1.83694C5.68227 1.84333 5.6727 1.85062 5.66314 1.85654C5.54057 1.93673 5.41983 2.0192 5.30046 2.10395C5.26674 2.12809 5.23303 2.15179 5.19931 2.17593C5.07447 2.26661 4.95236 2.35955 4.83162 2.45523C4.80474 2.47619 4.77785 2.4967 4.75143 2.51765C4.62476 2.61972 4.49992 2.72497 4.37736 2.83249C4.35868 2.8489 4.33954 2.86484 4.32086 2.88124C4.19009 2.99743 4.06252 3.11635 3.93722 3.23846C3.92765 3.24757 3.91808 3.25623 3.90852 3.2658C3.77365 3.39747 3.64197 3.53279 3.51348 3.6713C3.42418 3.76835 3.33716 3.86723 3.25104 3.96701C3.22872 3.99298 3.20548 4.01895 3.18316 4.04537C3.10342 4.13923 3.02596 4.23492 2.94896 4.33151C2.92299 4.36477 2.89657 4.39803 2.8706 4.43129C2.79633 4.52743 2.72297 4.62447 2.65189 4.72289C2.62729 4.75615 2.60405 4.78987 2.57991 4.82359C2.50746 4.92564 2.43593 5.02771 2.36713 5.13205C2.35346 5.153 2.34025 5.17442 2.32658 5.19538C2.09831 5.54576 1.88872 5.90935 1.69872 6.28478C1.68232 6.31759 1.66501 6.34994 1.6486 6.3832C1.59803 6.48526 1.55064 6.58914 1.5028 6.69348C1.47957 6.74497 1.45587 6.796 1.43309 6.84794C1.38981 6.94681 1.34789 7.04705 1.30734 7.14774C1.28365 7.20561 1.26086 7.26438 1.23854 7.3227C1.20027 7.42203 1.1629 7.52135 1.12736 7.62159C1.10595 7.68265 1.0859 7.74416 1.06495 7.80567C1.03168 7.90636 0.997967 8.00706 0.966984 8.10912C0.949215 8.16653 0.934178 8.2253 0.91732 8.28316C0.850798 8.51599 0.790656 8.75201 0.738715 8.99121C0.733247 9.01764 0.725957 9.04361 0.720489 9.07003C0.69953 9.17027 0.682216 9.27142 0.663991 9.37257C0.650778 9.44501 0.636654 9.51746 0.624808 9.59036C0.609317 9.68787 0.595647 9.78674 0.582434 9.88515C0.571954 9.96306 0.561933 10.041 0.55282 10.1193C0.541885 10.2168 0.532316 10.3148 0.523659 10.4128C0.520469 10.4492 0.515456 10.4852 0.512723 10.5217C0.511811 10.5303 0.513634 10.5385 0.513178 10.5472C0.495409 10.8661 0.602481 11.1896 0.836673 11.4038C0.845786 11.412 0.851254 11.4224 0.860367 11.4302C0.867657 11.4361 0.877681 11.4384 0.884516 11.4443C0.968807 11.5113 1.06221 11.5673 1.16427 11.6074C1.17931 11.6133 1.19525 11.617 1.21029 11.622C1.32009 11.6594 1.43537 11.6844 1.55748 11.6844H5.91237H5.91328C6.04404 11.684 6.1698 11.658 6.28689 11.6133C6.30329 11.6074 6.31787 11.5997 6.33382 11.5928C6.43041 11.5505 6.51972 11.4944 6.59945 11.4265C6.62223 11.4074 6.64319 11.3883 6.6646 11.3673C6.73887 11.2935 6.80312 11.2101 6.85415 11.1176C6.86235 11.103 6.87055 11.0894 6.87784 11.0739C6.93343 10.9618 6.97079 10.8397 6.98355 10.7108C6.98537 10.6907 6.99084 10.6711 6.99175 10.6506V6.7436C6.99175 4.37024 8.67711 2.39053 10.9161 1.93582C11.2336 1.87112 11.5617 1.83694 11.8984 1.83694V11.6503V11.6844V21.9688V22.8468V35.1656H7.02911H1.38662C0.421141 35.1656 0.121796 36.4724 0.991133 36.8925C1.13739 36.9631 1.29731 37 1.45997 37C1.46043 37 1.46088 37 1.46134 37H11.8984C11.8998 37 11.9011 37 11.902 37H11.9462C13.8271 37 15.5448 36.3074 16.8634 35.1656C18.4544 33.7878 19.4623 31.7544 19.4623 29.484V29.4448C19.4623 29.4425 19.4627 29.4402 19.4627 29.438C19.4627 29.4375 19.4627 29.4366 19.4627 29.4361V19.98V3.6713V2.86986V1.83694H25.1827V17.023C25.1831 17.0226 25.1831 17.0226 25.1831 17.0226V29.437C25.1836 31.722 26.1992 33.7764 27.8034 35.1656C28.9425 36.1525 30.3791 36.8023 31.962 36.959C31.9884 36.9617 32.0157 36.9636 32.0421 36.9663C32.1269 36.9736 32.2112 36.9809 32.2964 36.9854C32.3178 36.9868 32.3383 36.9891 32.3597 36.9904C32.4426 36.9945 32.5269 36.995 32.6103 36.9968C32.6167 36.9968 32.6226 36.9973 32.629 36.9973C32.6463 36.9973 32.6627 37 32.68 37C32.6805 37 32.6809 37 32.6814 37C32.6823 37 32.6832 37 32.6841 37H32.7465C32.8386 37 32.9302 36.9964 33.0213 36.9932C33.0587 36.9918 33.0965 36.9923 33.1338 36.9904C34.7472 36.9362 36.2763 36.5503 37.6532 35.8942C38.1034 35.6796 38.5358 35.4349 38.9513 35.1656C41.8545 33.283 43.8497 30.1196 44.1331 26.4741C44.1577 26.1529 44.0525 25.8221 43.8146 25.6048Z" fill="#CF982C" />
                            <path d="M67.5942 11.5842C67.5942 12.156 67.5413 12.7206 67.4361 13.2773C67.3299 13.8346 67.1189 14.333 66.8023 14.7732C66.4856 15.2138 66.0332 15.5692 65.4445 15.8398C64.8558 16.1109 64.0795 16.2462 63.114 16.2462C62.5713 16.2462 62.0788 16.1956 61.6382 16.094C61.1962 15.9924 60.7967 15.8608 60.4381 15.699C60.0804 15.5373 59.7578 15.3527 59.4712 15.1454C59.1847 14.939 58.9172 14.7335 58.668 14.5303L59.5054 13.4131C59.6786 13.5562 59.8881 13.733 60.1328 13.9435C60.3779 14.1544 60.6463 14.3576 60.9365 14.5531C61.2268 14.749 61.5284 14.9162 61.8414 15.0552C62.154 15.1946 62.4688 15.2643 62.7864 15.2643C63.4799 15.2643 64.0138 15.0816 64.387 14.7167C64.7602 14.3522 64.947 13.861 64.947 13.2436V0.363952H67.5942V11.5842Z" fill="white" />
                            <path d="M74.5183 9.82048H80.322L77.4598 3.60116L74.5183 9.82048ZM78.4895 -0.000114441L85.9108 16.0858H83.218L80.8086 10.8365H74.0544L71.5653 16.0858H70.2422L77.8329 -0.000114441H78.4895Z" fill="white" />
                            <path d="M89.3245 0.364707L94.7888 8.33409L100.23 0.364707H101.666L95.5579 9.29318V16.0889H92.9107V9.5415L86.6094 0.364707H89.3245Z" fill="white" />
                            <path d="M116.568 8.27574C116.568 9.38246 116.734 10.3721 117.066 11.2446C117.398 12.1176 117.854 12.8571 118.435 13.4631C119.016 14.069 119.704 14.5315 120.5 14.8514C121.295 15.1717 122.157 15.3311 123.084 15.3311C123.635 15.3311 124.167 15.2236 124.68 15.0099C125.193 14.7953 125.67 14.5169 126.111 14.1743C126.552 13.8321 126.946 13.4439 127.293 13.0115C127.64 12.5787 127.927 12.1404 128.152 11.6966L129.261 12.4074C128.937 12.9345 128.554 13.4426 128.114 13.9314C127.672 14.4208 127.161 14.8514 126.58 15.2236C125.999 15.5963 125.343 15.8956 124.612 16.1216C123.88 16.3467 123.062 16.4597 122.157 16.4597C121.289 16.4597 120.471 16.3604 119.702 16.1608C118.933 15.9617 118.226 15.6833 117.581 15.3252C116.936 14.968 116.359 14.5374 115.85 14.033C115.341 13.5291 114.911 12.9737 114.56 12.3677C114.21 11.7622 113.94 11.1129 113.751 10.4204C113.563 9.72828 113.469 9.01385 113.469 8.27574C113.469 7.53853 113.564 6.82183 113.757 6.12563C113.949 5.42989 114.225 4.7747 114.583 4.16188C114.941 3.54815 115.38 2.9859 115.901 2.47378C116.421 1.96256 117.008 1.52425 117.66 1.15884C118.313 0.793879 119.027 0.509567 119.804 0.306358C120.58 0.103148 121.41 0.00154114 122.293 0.00154114C123.13 0.00154114 123.901 0.114538 124.606 0.34053C125.311 0.566521 125.956 0.865412 126.541 1.23766C127.125 1.61036 127.643 2.04139 128.096 2.53028C128.549 3.01962 128.937 3.52764 129.261 4.05435L128.119 4.82163C127.455 3.54997 126.716 2.61684 125.901 2.02225C125.087 1.42811 124.152 1.13059 123.096 1.13059C122.183 1.13059 121.331 1.29598 120.539 1.62722C119.747 1.95892 119.057 2.43277 118.469 3.04969C117.881 3.66707 117.417 4.41566 117.077 5.29548C116.738 6.17666 116.568 7.16947 116.568 8.27574Z" fill="white" />
                            <path d="M135.507 9.82048H141.311L138.448 3.60116L135.507 9.82048ZM139.478 -0.000114441L146.899 16.0858H144.207L141.797 10.8365H135.043L132.554 16.0858H131.23L138.821 -0.000114441H139.478Z" fill="white" />
                            <path d="M152.195 7.92767C152.488 8.01014 152.807 8.08942 153.15 8.16414C153.494 8.23977 153.842 8.27713 154.197 8.27713C154.77 8.27713 155.269 8.19284 155.696 8.02335C156.122 7.85386 156.476 7.62057 156.759 7.32396C157.042 7.02644 157.253 6.68016 157.393 6.28513C157.532 5.8901 157.602 5.46682 157.602 5.0153C157.602 4.48859 157.509 4.00882 157.325 3.57597C157.14 3.14312 156.889 2.77634 156.573 2.47563C156.256 2.17492 155.882 1.94118 155.453 1.77579C155.023 1.60994 154.562 1.52701 154.072 1.52701H152.195V7.92767ZM149.547 0.364707H154.536C155.358 0.364707 156.129 0.46449 156.849 0.664055C157.57 0.86362 158.196 1.15477 158.727 1.5384C159.259 1.92204 159.68 2.3927 159.989 2.94948C160.298 3.50626 160.453 4.14277 160.453 4.85719C160.453 5.57207 160.303 6.19492 160.006 6.72527C159.708 7.25562 159.316 7.69621 158.829 8.04613C158.343 8.39605 157.789 8.65576 157.166 8.8248C156.544 8.99429 155.912 9.07858 155.271 9.07858C155 9.07858 154.713 9.07129 154.412 9.05626C154.11 9.04168 153.819 9.02072 153.54 8.99429C153.261 8.96786 153.003 8.94007 152.766 8.90954C152.528 8.87947 152.337 8.84576 152.195 8.80794V16.0889H149.547V0.364707Z" fill="white" />
                            <path d="M163.379 0.3647H166.027V16.0889H163.379V0.3647Z" fill="white" />
                            <path d="M183.132 0.364707V1.38076H177.43V16.0889H174.783V1.38076H169.07V0.364707H183.132Z" fill="white" />
                            <path d="M188.526 9.82048H194.33L191.468 3.60116L188.526 9.82048ZM192.497 -0.000114441L199.919 16.0858H197.226L194.816 10.8365H188.063L185.573 16.0858H184.25L191.841 -0.000114441H192.497Z" fill="white" />
                            <path d="M202.566 0.364707H205.214V15.0728H213.144V16.0889H202.566V0.364707Z" fill="white" />
                            <path d="M61.5191 32.5791H65.3833L63.4778 28.4379L61.5191 32.5791ZM64.1631 26.0404L69.1044 36.7504H67.3119L65.7077 33.2557H61.2106L59.5526 36.7504H58.6719L63.7262 26.0404H64.1631Z" fill="white" />
                            <path d="M72.63 35.984H74.4981C75.0909 35.984 75.6481 35.8865 76.1707 35.691C76.6924 35.4956 77.1485 35.2062 77.5376 34.8226C77.9271 34.4394 78.2333 33.966 78.4566 33.4024C78.6803 32.8388 78.7924 32.1886 78.7924 31.4523C78.7924 30.8108 78.6867 30.2208 78.4757 29.6822C78.2643 29.1437 77.9695 28.6798 77.5904 28.2916C77.2109 27.9034 76.7589 27.6 76.2345 27.3822C75.7101 27.1644 75.136 27.0555 74.5131 27.0555H72.63V35.984ZM70.8672 26.2814H74.355C75.4349 26.2814 76.3625 26.3817 77.1384 26.5817C77.9139 26.7821 78.5609 27.1029 79.0785 27.544C79.6708 28.0451 80.1164 28.6224 80.4153 29.2763C80.7142 29.9301 80.8637 30.6454 80.8637 31.4218C80.8637 32.1586 80.7292 32.8497 80.4604 33.4963C80.1921 34.1428 79.8002 34.7078 79.2854 35.1912C78.771 35.6746 78.1354 36.0555 77.3795 36.3335C76.6236 36.6119 75.7588 36.7504 74.7847 36.7504H70.8672V26.2814Z" fill="white" />
                            <path d="M84.0322 26.2825L87.987 34.6095L91.6713 26.2825H92.5069L87.7387 36.9993H87.2863L82.1719 26.2825H84.0322Z" fill="white" />
                            <path d="M94.2539 26.2818H96.0167V36.7507H94.2539V26.2818Z" fill="white" />
                            <path d="M101.936 36.3309C102.197 36.3309 102.454 36.2958 102.707 36.2256C102.961 36.1559 103.187 36.0502 103.385 35.9099C103.584 35.77 103.743 35.5978 103.864 35.395C103.985 35.1922 104.044 34.9581 104.044 34.6924C104.044 34.3717 103.962 34.0874 103.796 33.8395C103.631 33.5912 103.413 33.362 103.144 33.1515C102.876 32.9414 102.568 32.7446 102.222 32.5615C101.875 32.3787 101.522 32.1947 101.163 32.0092C100.804 31.8238 100.451 31.6297 100.105 31.4269C99.7582 31.2237 99.4506 30.9982 99.1818 30.7503C98.9134 30.5025 98.6961 30.2245 98.5307 29.9161C98.3648 29.6081 98.2819 29.2536 98.2819 28.8526C98.2819 28.4522 98.3571 28.0799 98.5079 27.7364C98.6587 27.3933 98.8797 27.0967 99.1709 26.8461C99.462 26.5955 99.8197 26.3986 100.244 26.256C100.669 26.113 101.157 26.0419 101.709 26.0419C102.704 26.0419 103.488 26.2496 104.063 26.6656C104.639 27.0816 105.054 27.6831 105.31 28.4695L104.406 28.8827C104.301 28.5624 104.166 28.269 104.003 28.0034C103.84 27.7377 103.644 27.5099 103.415 27.3195C103.187 27.129 102.925 26.9823 102.629 26.8798C102.332 26.7773 101.998 26.7258 101.627 26.7258C101.295 26.7258 101.005 26.7723 100.756 26.8647C100.508 26.9572 100.302 27.078 100.139 27.2256C99.9755 27.3732 99.8525 27.5414 99.7695 27.7291C99.6866 27.9172 99.6452 28.1086 99.6452 28.3041C99.6452 28.5797 99.7308 28.8312 99.9012 29.0595C100.072 29.2873 100.295 29.5042 100.572 29.7092C100.848 29.9152 101.165 30.1115 101.521 30.2997C101.878 30.4874 102.24 30.6788 102.609 30.8743C102.979 31.0697 103.341 31.2725 103.698 31.483C104.054 31.6935 104.371 31.9245 104.647 32.1746C104.923 32.4252 105.147 32.6995 105.318 32.9975C105.489 33.2955 105.574 33.6276 105.574 33.9935C105.574 34.4095 105.495 34.799 105.337 35.1622C105.178 35.5258 104.941 35.8433 104.624 36.1167C104.308 36.3901 103.915 36.6051 103.446 36.7633C102.976 36.9209 102.43 36.9993 101.808 36.9993C101.305 36.9993 100.856 36.9446 100.459 36.8348C100.062 36.7245 99.7117 36.5641 99.4078 36.3536C99.1039 36.1431 98.8442 35.8853 98.6287 35.5791C98.4127 35.2734 98.2341 34.928 98.0938 34.5421L99.0428 34.1511C99.1531 34.4919 99.3012 34.7977 99.4871 35.0683C99.673 35.339 99.8898 35.5681 100.139 35.7563C100.387 35.9436 100.663 36.0866 100.968 36.1842C101.271 36.2821 101.594 36.3309 101.936 36.3309Z" fill="white" />
                            <path d="M113.297 36.4715C113.895 36.4715 114.424 36.3462 114.887 36.0956C115.349 35.845 115.736 35.4969 116.051 35.0509C116.364 34.6053 116.602 34.0754 116.766 33.4612C116.929 32.8479 117.011 32.1777 117.011 31.451C117.011 30.7343 116.929 30.0768 116.766 29.4781C116.602 28.8794 116.364 28.3632 116.051 27.9299C115.736 27.4961 115.349 27.1594 114.887 26.9188C114.424 26.6787 113.895 26.5584 113.297 26.5584C112.684 26.5584 112.145 26.6787 111.681 26.9188C111.217 27.1594 110.829 27.4961 110.517 27.9299C110.206 28.3632 109.971 28.8794 109.813 29.4781C109.655 30.0768 109.576 30.7343 109.576 31.451C109.576 32.1777 109.655 32.8479 109.813 33.4612C109.971 34.0754 110.206 34.6053 110.517 35.0509C110.829 35.4969 111.217 35.845 111.681 36.0956C112.145 36.3462 112.684 36.4715 113.297 36.4715ZM113.297 36.9973C112.755 36.9973 112.235 36.9312 111.738 36.7982C111.241 36.6656 110.778 36.4793 110.352 36.2382C109.925 35.9981 109.535 35.7088 109.184 35.3703C108.832 35.0322 108.534 34.6577 108.287 34.2467C108.042 33.8357 107.851 33.3951 107.715 32.924C107.579 32.4533 107.512 31.9617 107.512 31.451C107.512 30.9502 107.579 30.4691 107.715 30.008C107.851 29.5469 108.042 29.1163 108.287 28.7154C108.534 28.3144 108.832 27.9499 109.184 27.6219C109.535 27.2934 109.925 27.0113 110.352 26.7762C110.778 26.5407 111.241 26.3589 111.738 26.2313C112.235 26.1033 112.755 26.0395 113.297 26.0395C113.839 26.0395 114.359 26.1033 114.856 26.2313C115.354 26.3589 115.816 26.5407 116.242 26.7762C116.669 27.0113 117.058 27.2934 117.41 27.6219C117.761 27.9499 118.06 28.3144 118.306 28.7154C118.553 29.1163 118.744 29.5469 118.879 30.008C119.014 30.4691 119.082 30.9502 119.082 31.451C119.082 31.9572 119.014 32.4465 118.879 32.9204C118.744 33.3938 118.553 33.8357 118.306 34.2467C118.06 34.6577 117.761 35.0322 117.41 35.3703C117.058 35.7088 116.669 35.9981 116.242 36.2382C115.816 36.4793 115.354 36.6656 114.856 36.7982C114.359 36.9312 113.839 36.9973 113.297 36.9973Z" fill="white" />
                            <path d="M123.443 31.3015H124.459C124.856 31.3015 125.221 31.2491 125.556 31.1434C125.89 31.0386 126.179 30.8896 126.426 30.6964C126.672 30.5037 126.864 30.2695 127.002 29.9939C127.139 29.7182 127.209 29.4102 127.209 29.0694C127.209 28.7587 127.155 28.4716 127.043 28.2087C126.933 27.9458 126.78 27.7203 126.584 27.5321C126.388 27.3444 126.154 27.1977 125.883 27.0929C125.612 26.9876 125.316 26.9348 124.994 26.9348H123.443V31.3015ZM121.68 26.281H125.311C125.943 26.281 126.497 26.3488 126.972 26.4842C127.447 26.6195 127.843 26.8086 128.158 27.0514C128.475 27.2943 128.713 27.5822 128.874 27.9157C129.034 28.2488 129.115 28.6133 129.115 29.0093C129.115 29.335 129.054 29.6394 128.931 29.9223C128.808 30.2057 128.633 30.4609 128.407 30.6892C128.181 30.917 127.91 31.1147 127.594 31.2828C127.277 31.4505 126.928 31.5799 126.546 31.6697L130.365 36.7504H128.325L124.678 31.8278H123.443V36.7504H121.68V26.281Z" fill="white" />
                            <path d="M132.601 26.2814L136.239 31.5877L139.862 26.2814H140.819L136.752 32.226V36.7504H134.988V32.3914L130.793 26.2814H132.601Z" fill="white" />
                            <path d="M149.805 26.2814H151.568V36.0742H156.848V36.7504H149.805V26.2814Z" fill="white" />
                            <path d="M158.723 26.2818H160.485V36.7507H158.723V26.2818Z" fill="white" />
                            <path d="M163.527 26.2814H165.328L169.41 34.3159H169.493L173.501 26.2814H175.271V36.7504H173.501V28.1755H173.441L169.139 36.7504H168.778L164.424 28.2356H164.303V36.7504H163.527V26.2814Z" fill="white" />
                            <path d="M178.316 26.2818H180.08V36.7507H178.316V26.2818Z" fill="white" />
                            <path d="M191.469 26.2814V26.9576H187.672V36.7504H185.91V26.9576H182.105V26.2814H191.469Z" fill="white" />
                            <path d="M200.788 26.2814V26.9576H195.259V30.7005H198.958V31.3772H195.259V36.0742H200.788V36.7504H193.496V26.2814H200.788Z" fill="white" />
                            <path d="M204.915 35.984H206.783C207.376 35.984 207.933 35.8865 208.456 35.691C208.978 35.4956 209.434 35.2062 209.823 34.8226C210.212 34.4394 210.518 33.966 210.742 33.4024C210.965 32.8388 211.077 32.1886 211.077 31.4523C211.077 30.8108 210.971 30.2208 210.76 29.6822C210.549 29.1437 210.254 28.6798 209.875 28.2916C209.496 27.9034 209.044 27.6 208.52 27.3822C207.995 27.1644 207.421 27.0555 206.798 27.0555H204.915V35.984ZM203.152 26.2814H206.639C207.72 26.2814 208.648 26.3817 209.424 26.5817C210.199 26.7821 210.846 27.1029 211.363 27.544C211.956 28.0451 212.402 28.6224 212.7 29.2763C212.999 29.9301 213.149 30.6454 213.149 31.4218C213.149 32.1586 213.014 32.8497 212.746 33.4963C212.477 34.1428 212.085 34.7078 211.571 35.1912C211.056 35.6746 210.421 36.0555 209.664 36.3335C208.909 36.6119 208.044 36.7504 207.069 36.7504H203.152V26.2814Z" fill="white" />
                        </svg>
                    </div>

                    {/* <div></div>
                <div></div>
                <div></div>
                <div></div> 
                <div></div>*/}


                    <StyledMenu
                        theme='light'
                        mode="horizontal"
                        // onOpenChange={onOpenChange}
                        // selectedKeys={[current]}
                        // selectedKeys={[]}
                        items={items}
                        style={{
                            flex: 1,
                            fontSize: "16px",
                            minWidth: 0,
                            maxWidth: "700px",
                            backgroundColor: "transparent",
                            border: "none",
                            display: "flex",
                            fontWeight: 400,
                            justifyContent: "space-around",
                            padding: 0,
                        }}
                    />

                </Header>
            </Footer>
        </>
    )
}
