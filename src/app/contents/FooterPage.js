"use client";
import { Layout } from 'antd';
import React, { useState, useEffect } from 'react'
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
                        {/* <img src={Vector.src} alt="Vector" style={{ width: "121px" }} /> */}
                        <svg width="128" height="40" viewBox="0 0 128 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M67.547 10.05C67.547 11.4915 66.3858 12.6527 64.9444 12.6527C63.5029 12.6527 62.3418 11.4915 62.3418 10.05C62.3418 8.60861 63.4629 7.44745 64.9444 7.44745C66.4258 7.48749 67.547 8.64865 67.547 10.05ZM56.8162 15.2953C56.8162 15.5355 56.8162 15.9359 56.8162 15.9359C56.8162 15.9359 55.575 14.3343 52.9324 14.3343C48.568 14.3343 45.1646 17.6577 45.1646 22.2623C45.1646 26.8268 48.5279 30.1902 52.9324 30.1902C55.615 30.1902 56.8162 28.5485 56.8162 28.5485V29.2292C56.8162 29.5495 57.0565 29.7898 57.3768 29.7898H60.62V14.7347C60.62 14.7347 57.6571 14.7347 57.3768 14.7347C57.0565 14.7347 56.8162 15.015 56.8162 15.2953ZM56.8162 24.9449C56.2156 25.8258 55.0144 26.5866 53.573 26.5866C51.0104 26.5866 49.0485 24.985 49.0485 22.2623C49.0485 19.5395 51.0104 17.9379 53.573 17.9379C54.9744 17.9379 56.2557 18.7387 56.8162 19.5796V24.9449ZM63.0224 14.7347H66.8663V29.7898H63.0224V14.7347ZM120.44 14.3343C117.797 14.3343 116.556 15.9359 116.556 15.9359V7.48749H112.712V29.7898C112.712 29.7898 115.675 29.7898 115.955 29.7898C116.276 29.7898 116.516 29.5095 116.516 29.2292V28.5485C116.516 28.5485 117.757 30.1902 120.4 30.1902C124.764 30.1902 128.168 26.8268 128.168 22.2623C128.168 17.6977 124.764 14.3343 120.44 14.3343ZM119.799 26.5465C118.318 26.5465 117.157 25.7858 116.556 24.9049V19.5395C117.157 18.7387 118.438 17.8979 119.799 17.8979C122.362 17.8979 124.324 19.4995 124.324 22.2222C124.324 24.9449 122.362 26.5465 119.799 26.5465ZM110.71 20.8609V29.8298H106.866V21.3013C106.866 18.8188 106.065 17.8178 103.903 17.8178C102.742 17.8178 101.541 18.4184 100.78 19.2993V29.7898H96.9363V14.7347H99.9794C100.3 14.7347 100.54 15.015 100.54 15.2953V15.9359C101.661 14.7748 103.143 14.3343 104.624 14.3343C106.306 14.3343 107.707 14.8148 108.828 15.7758C110.19 16.8969 110.71 18.3383 110.71 20.8609ZM87.607 14.3343C84.9644 14.3343 83.7231 15.9359 83.7231 15.9359V7.48749H79.8793V29.7898C79.8793 29.7898 82.8423 29.7898 83.1225 29.7898C83.4429 29.7898 83.6831 29.5095 83.6831 29.2292V28.5485C83.6831 28.5485 84.9243 30.1902 87.567 30.1902C91.9313 30.1902 95.3347 26.8268 95.3347 22.2623C95.3748 17.6977 91.9714 14.3343 87.607 14.3343ZM86.9664 26.5465C85.4849 26.5465 84.3237 25.7858 83.7231 24.9049V19.5395C84.3237 18.7387 85.605 17.8979 86.9664 17.8979C89.5289 17.8979 91.4909 19.4995 91.4909 22.2222C91.4909 24.9449 89.5289 26.5465 86.9664 26.5465ZM76.556 14.3343C77.7171 14.3343 78.3177 14.5345 78.3177 14.5345V18.0981C78.3177 18.0981 75.1145 17.017 73.1125 19.2993V29.8298H69.2687V14.7347C69.2687 14.7347 72.2317 14.7347 72.5119 14.7347C72.8322 14.7347 73.0725 15.015 73.0725 15.2953V15.9359C73.7932 15.0951 75.3548 14.3343 76.556 14.3343ZM36.6361 28.4284C36.4359 27.9479 36.2357 27.4274 36.0355 26.987C35.7151 26.2663 35.3948 25.5856 35.1145 24.9449L35.0745 24.9049C32.3117 18.8989 29.3488 12.8128 26.2257 6.80681L26.1055 6.56657C25.7852 5.96597 25.4649 5.32533 25.1446 4.68468C24.7442 3.96396 24.3438 3.2032 23.7031 2.48248C22.4218 0.880881 20.58 0 18.618 0C16.616 0 14.8142 0.880881 13.4929 2.4024C12.8923 3.12312 12.4519 3.88388 12.0515 4.6046C11.7312 5.24525 11.4108 5.88589 11.0905 6.48649L10.9704 6.72673C7.88732 12.7327 4.88431 18.8188 2.12155 24.8248L2.08151 24.9049C1.80123 25.5455 1.48091 26.2262 1.16059 26.9469C0.960391 27.3874 0.760191 27.8679 0.559991 28.3884C0.0394705 29.8699 -0.12069 31.2713 0.0795105 32.7127C0.519951 35.7157 2.52195 38.2382 5.28471 39.3594C6.32576 39.7998 7.40684 40 8.52796 40C8.84828 40 9.24868 39.96 9.569 39.9199C10.8903 39.7598 12.2517 39.3193 13.573 38.5586C15.2146 37.6376 16.7762 36.3163 18.538 34.3944C20.2997 36.3163 21.9013 37.6376 23.5029 38.5586C24.8243 39.3193 26.1856 39.7598 27.5069 39.9199C27.8272 39.96 28.2277 40 28.548 40C29.6691 40 30.7902 39.7998 31.7912 39.3594C34.594 38.2382 36.556 35.6757 36.9964 32.7127C37.3167 31.3113 37.1566 29.9099 36.6361 28.4284ZM18.578 30.5105C16.4158 27.7878 15.0144 25.2252 14.534 23.0631C14.3338 22.1421 14.2937 21.3413 14.4138 20.6206C14.4939 19.98 14.7342 19.4194 15.0545 18.9389C15.8152 17.8579 17.0965 17.1772 18.578 17.1772C20.0595 17.1772 21.3808 17.8178 22.1015 18.9389C22.4218 19.4194 22.6621 19.98 22.7422 20.6206C22.8623 21.3413 22.8222 22.1822 22.622 23.0631C22.1416 25.1852 20.7402 27.7477 18.578 30.5105ZM34.554 32.3924C34.2737 34.4745 32.8723 36.2763 30.9103 37.0771C29.9494 37.4775 28.9083 37.5976 27.8673 37.4775C26.8663 37.3574 25.8653 37.037 24.8243 36.4364C23.3828 35.6356 21.9414 34.3944 20.2597 32.5526C22.9023 29.3093 24.5039 26.3463 25.1045 23.7037C25.3848 22.4625 25.4249 21.3413 25.3047 20.3003C25.1446 19.2993 24.7842 18.3784 24.2236 17.5776C22.9824 15.7758 20.9003 14.7347 18.578 14.7347C16.2557 14.7347 14.1736 15.8158 12.9324 17.5776C12.3718 18.3784 12.0114 19.2993 11.8513 20.3003C11.6911 21.3413 11.7312 22.5025 12.0515 23.7037C12.6521 26.3463 14.2937 29.3493 16.8963 32.5926C15.2547 34.4344 13.7732 35.6757 12.3318 36.4765C11.2907 37.0771 10.2897 37.3974 9.28872 37.5175C8.20764 37.6376 7.1666 37.4775 6.24568 37.1171C4.28371 36.3163 2.88231 34.5145 2.60203 32.4324C2.48191 31.4314 2.56199 30.4304 2.96239 29.3093C3.08251 28.9089 3.28271 28.5085 3.48291 28.028C3.76319 27.3874 4.08351 26.7067 4.40383 26.026L4.44387 25.9459C7.20664 19.98 10.1696 13.8939 13.2527 7.96797L13.3728 7.72773C13.6931 7.12713 14.0134 6.48649 14.3338 5.88589C14.6541 5.24524 15.0144 4.64464 15.4549 4.12412C16.2957 3.16316 17.4168 2.64264 18.6581 2.64264C19.8993 2.64264 21.0204 3.16316 21.8613 4.12412C22.3017 4.64464 22.6621 5.24524 22.9824 5.88589C23.3027 6.48649 23.623 7.12713 23.9434 7.72773L24.0635 7.96797C27.1065 13.9339 30.0695 20.02 32.8323 25.986V26.026C33.1526 26.6667 33.4329 27.3874 33.7532 28.028C33.9534 28.5085 34.1536 28.9089 34.2737 29.3093C34.594 30.3503 34.7141 31.3514 34.554 32.3924Z" fill="#F8F6F1" />
                        </svg>

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
                        {/* <img src={Vector1.src} alt="Vector" style={{ width: "121px" }} /> */}
                        <svg width="110" height="20" viewBox="0 0 110 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M63.2973 3.60364V1.11541C63.2973 0.738842 63.5833 0.486206 63.9265 0.486206H75.0663C75.4238 0.486206 75.7098 0.743609 75.7098 1.11541V3.24613C75.7051 3.60364 75.4048 4.07078 74.8709 4.80962L69.0984 13.0513C71.2434 12.9988 73.5076 13.3182 75.4524 14.4145C75.891 14.6624 76.0101 15.0247 76.0435 15.3822V18.0373C76.0435 18.3995 75.6431 18.8238 75.2236 18.6045C71.7964 16.8074 67.2441 16.612 63.4546 18.6236C63.0685 18.8333 62.6633 18.4138 62.6633 18.0516V15.53C62.6633 15.1248 62.6681 14.4336 63.0733 13.8187L69.761 4.22808H63.9408C63.5833 4.22808 63.2973 3.97544 63.2973 3.60364Z" fill="#F8F6F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.661 19.1289H19.2719C18.9477 19.105 18.6903 18.8619 18.6665 18.5521V1.15835C18.6665 0.81038 18.9573 0.533908 19.3195 0.533908H22.4799C22.8088 0.548199 23.0709 0.800843 23.0948 1.11545V3.38917H23.1568C23.9814 1.19171 25.5306 0.16687 27.6184 0.16687C29.7396 0.16687 31.0647 1.19171 32.0181 3.38917C32.8379 1.19171 34.7017 0.16687 36.699 0.16687C38.1195 0.16687 39.6734 0.753176 40.622 2.06879C41.6945 3.53217 41.4752 5.65812 41.4752 7.52191L41.4705 18.4997C41.4705 18.8476 41.1797 19.1289 40.8174 19.1289H37.4331C37.0946 19.105 36.8229 18.8333 36.8229 18.4997V9.28083C36.8229 8.54675 36.8897 6.71634 36.7276 6.02039C36.475 4.85255 35.7171 4.52365 34.7351 4.52365C33.9152 4.52365 33.0572 5.07182 32.7093 5.9489C32.3613 6.82597 32.3946 8.29412 32.3946 9.28083V18.4997C32.3946 18.8476 32.1039 19.1289 31.7416 19.1289H28.3572C28.014 19.105 27.7471 18.8333 27.7471 18.4997L27.7423 9.28083C27.7423 7.34078 28.0617 4.48551 25.6545 4.48551C23.2187 4.48551 23.3141 7.26927 23.3141 9.28083V18.4997C23.3141 18.8476 23.0233 19.1289 22.661 19.1289Z" fill="#F8F6F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M85.3003 0.16687C90.3292 0.16687 93.051 4.48551 93.051 9.97677C93.051 15.2821 90.0432 19.4911 85.3003 19.4911C80.362 19.4911 77.6736 15.1725 77.6736 9.79087C77.6736 4.37588 80.3954 0.16687 85.3003 0.16687ZM85.3289 3.71807C82.8312 3.71807 82.6739 7.1215 82.6739 9.24269C82.6739 11.3686 82.6405 15.9066 85.3003 15.9066C87.9268 15.9066 88.0507 12.2457 88.0507 10.0149C88.0507 8.54675 87.9888 6.7926 87.5454 5.40072C87.1641 4.18998 86.4062 3.71807 85.3289 3.71807Z" fill="#F8F6F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M99.572 19.1289H96.1972C95.8587 19.105 95.587 18.8333 95.587 18.4997L95.5823 1.10115C95.6109 0.781776 95.8921 0.533908 96.2353 0.533908H99.3766C99.6721 0.548199 99.9152 0.748411 99.9819 1.02011V3.67994H100.044C100.992 1.30135 102.322 0.16687 104.663 0.16687C106.183 0.16687 107.666 0.715043 108.619 2.21656C109.506 3.60844 109.506 5.9489 109.506 7.63154V18.5807C109.468 18.8858 109.186 19.1289 108.853 19.1289H105.454C105.144 19.105 104.887 18.8762 104.854 18.5807V9.13306C104.854 7.23114 105.073 4.44738 102.732 4.44738C101.908 4.44738 101.15 5.00032 100.773 5.83926C100.297 6.90224 100.235 7.96045 100.235 9.13306V18.4997C100.23 18.8476 99.9343 19.1289 99.572 19.1289Z" fill="#F8F6F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M54.4169 10.8204C54.4169 12.1408 54.4503 13.2419 53.783 14.4146C53.2443 15.3679 52.3863 15.9542 51.4377 15.9542C50.1364 15.9542 49.3737 14.9627 49.3737 13.4993C49.3737 10.6107 51.9621 10.0864 54.4169 10.0864V10.8204ZM57.8347 19.0812C57.6106 19.2814 57.2865 19.2957 57.0339 19.1622C55.9089 18.2279 55.7039 17.7942 55.089 16.9028C53.23 18.7999 51.9096 19.3672 49.5024 19.3672C46.6472 19.3672 44.4307 17.6083 44.4307 14.0857C44.4307 11.3353 45.9179 9.46193 48.0438 8.54673C49.8838 7.73638 52.453 7.59338 54.4169 7.36935V6.93081C54.4169 6.12523 54.4789 5.17189 54.0022 4.47595C53.5923 3.85151 52.801 3.5941 52.1003 3.5941C50.8085 3.5941 49.6598 4.25668 49.3785 5.62949C49.3213 5.93456 49.0973 6.23487 48.7874 6.24917L45.5032 5.89643C45.2267 5.83446 44.9169 5.61042 44.9979 5.18619C45.751 1.20122 49.3547 0 52.577 0C54.2263 0 56.3808 0.438539 57.6821 1.68742C59.3314 3.22707 59.1741 5.28152 59.1741 7.51711V12.7986C59.1741 14.386 59.8319 15.0819 60.4516 15.9399C60.6661 16.245 60.7138 16.612 60.4373 16.8408C59.7461 17.4176 58.5163 18.4901 57.8394 19.0907L57.8347 19.0812Z" fill="#F8F6F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.98627 10.8204C9.98627 12.1408 10.0196 13.2419 9.35229 14.4145C8.81365 15.3679 7.96041 15.9542 7.00707 15.9542C5.70575 15.9542 4.94785 14.9627 4.94785 13.4993C4.94785 10.6107 7.53617 10.0864 9.98627 10.0864V10.8204ZM13.404 19.0812C13.18 19.2814 12.8558 19.2957 12.6032 19.1622C11.4782 18.2279 11.278 17.7941 10.6584 16.9028C8.79935 18.7999 7.48374 19.3672 5.07178 19.3672C2.22129 19.3672 0 17.6082 0 14.0856C0 11.3352 1.49198 9.46193 3.61317 8.54672C5.45312 7.73638 8.02238 7.59338 9.98627 7.36934V6.9308C9.98627 6.12523 10.0482 5.17188 9.57633 4.47595C9.16162 3.8515 8.37035 3.5941 7.67441 3.5941C6.38263 3.5941 5.22908 4.25668 4.94785 5.62949C4.89065 5.93456 4.66661 6.23486 4.36154 6.24916L1.07251 5.89642C0.796041 5.83446 0.490971 5.61042 0.567238 5.18619C1.32515 1.20122 4.92401 0 8.14631 0C9.79559 0 11.9501 0.438539 13.2515 1.68742C14.9007 3.22707 14.7434 5.28152 14.7434 7.51711V12.7986C14.7434 14.3859 15.4013 15.0819 16.0209 15.9399C16.2402 16.245 16.2879 16.612 16.0114 16.8408C15.3202 17.4176 14.0904 18.4901 13.4135 19.0907L13.404 19.0812Z" fill="#F8F6F1" />
                        </svg>

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
                        {/* <img src={Vector2.src} alt="Vector" style={{ width: "121px" }} /> */}
                        <svg width="183" height="20" viewBox="0 0 183 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M156.724 7.93633V19.9883H161.331V11.9537H178.182V19.9883H182.789V7.93633H156.724ZM160.805 4.02906H178.577C181.078 3.64383 182.855 1.77274 183.382 0.0117188H156C156.526 1.77274 158.369 3.5888 160.805 4.02906ZM142.703 19.9883C145.007 19.1629 146.258 17.732 146.784 16.0811H126.05V0.0667508H121.377V19.9883H142.703ZM86.82 3.97403H103.276C105.777 3.36867 107.817 1.77274 108.344 0.0667508H82.2782V11.8436H103.605V15.971H86.8858C84.2529 16.5764 82.015 18.0622 80.896 19.9883H108.212V7.93633H86.8858L86.82 3.97403ZM46.2733 4.02906H64.0454C66.5467 3.64383 68.3897 1.77274 68.8504 0.0117188H41.4024C41.929 1.77274 43.772 3.5888 46.2733 4.02906ZM46.2733 11.8986H64.0454C66.5467 11.5134 68.3897 9.64233 68.8504 7.8813H41.4024C41.929 9.64233 43.772 11.4584 46.2733 11.8986ZM46.2733 19.9883H64.0454C66.5467 19.6031 68.3897 17.732 68.8504 15.971H41.4024C41.929 17.732 43.772 19.6031 46.2733 19.9883Z" fill="#F8F6F1" />
                            <path d="M0 0.0667508C0.526581 1.82778 2.36961 3.5888 4.80505 4.02906H12.3088L12.7038 4.13912V19.9333H17.3772V4.13912L17.7721 4.02906H25.2759C27.7771 3.47874 29.5543 1.82778 30.0809 0.0667508V0.0117188L0 0.0667508Z" fill="#F8F6F1" />
                        </svg>

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
                        {/* <img src={Vector3.src} alt="Vector" style={{ width: "121px" }} /> */}
                        <svg width="121" height="48" viewBox="0 0 121 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.9224 32.4265L39.3905 28.995C40.998 30.1854 43.0946 30.8155 45.1918 30.8155C46.7296 30.8155 47.708 30.2205 47.708 29.3103C47.6729 26.7891 38.4467 28.7499 38.3765 22.4113C38.3414 19.1898 41.2075 16.7037 45.262 16.7037C47.6729 16.7037 50.0848 17.2992 51.7971 18.665L50.4252 22.1697C48.8498 21.1567 46.904 20.4504 45.0519 20.4504C43.7938 20.4504 42.9548 21.0454 42.9548 21.8163C42.9899 24.3024 52.2868 22.9366 52.3915 28.995C52.3915 32.2866 49.5951 34.5978 45.6108 34.5978C42.6756 34.5978 39.9845 33.8976 37.9219 32.4265H37.9224ZM96.3804 27.7524C96.0098 28.4109 95.4708 28.9589 94.8185 29.3403C94.1663 29.7217 93.4243 29.9227 92.6688 29.9228C90.314 29.9228 88.4053 28.0101 88.4053 25.6508C88.4053 23.2914 90.314 21.3787 92.6688 21.3787C93.4243 21.3788 94.1663 21.5798 94.8185 21.9612C95.4708 22.3426 96.0098 22.8906 96.3804 23.5491L100.462 21.2835C98.9332 18.5513 96.017 16.7037 92.6688 16.7037C87.7371 16.7037 83.7393 20.7091 83.7393 25.6508C83.7393 30.5919 87.7371 34.5978 92.6688 34.5978C96.017 34.5978 98.9332 32.7502 100.462 30.018L96.3804 27.7524ZM55.0401 34.2474H60.1426V9.25586H55.0406L55.0401 34.2474ZM103.039 9.25586V34.2474H108.141V26.76L114.188 34.2474H120.71L113.021 25.3525L120.15 17.0526H113.908L108.141 23.9531V9.25586H103.039ZM75.8629 17.0536V19.0851C75.0243 17.6841 72.9622 16.7037 70.7954 16.7037C66.3218 16.7037 62.7922 20.661 62.7922 25.6332C62.7922 30.6055 66.3218 34.5978 70.7954 34.5978C72.9622 34.5978 75.0243 33.6174 75.8629 32.2164V34.2474H80.9654V17.0536H75.8629ZM75.8629 27.787C75.129 29.0125 73.5913 29.9223 71.879 29.9223C69.5237 29.9223 67.615 28.0101 67.615 25.6508C67.615 23.2914 69.5237 21.3787 71.879 21.3787C73.5913 21.3787 75.129 22.3241 75.8629 23.5842V27.787Z" fill="#F8F6F1" />
                            <path d="M10.978 8.70361C9.32448 8.70361 7.98417 10.0469 7.98417 11.7035C7.98378 12.0971 8.0609 12.4868 8.21115 12.8506C8.36139 13.2143 8.58181 13.5449 8.85981 13.8235C9.13782 14.1021 9.46797 14.3231 9.83142 14.4741C10.1949 14.6251 10.5845 14.703 10.978 14.7034H13.9724V11.7035C13.9731 10.9086 13.658 10.1461 13.0965 9.58348C12.5349 9.0209 11.7729 8.70441 10.978 8.70361ZM10.978 16.7033H2.99388C1.3403 16.7033 0 18.0466 0 19.7037C0 21.3603 1.3403 22.7036 2.99388 22.7036H10.9785C12.6316 22.7036 13.9724 21.3603 13.9724 19.7037C13.9724 18.0466 12.6316 16.7033 10.978 16.7033Z" fill="#F8F6F1" />
                            <path d="M29.9412 19.7037C29.9412 18.0466 28.6004 16.7033 26.9468 16.7033C25.2932 16.7033 23.9529 18.0466 23.9529 19.7037V22.7036H26.9468C27.7417 22.7028 28.5037 22.3863 29.0652 21.8237C29.6268 21.2612 29.9418 20.4986 29.9412 19.7037ZM21.957 19.7037V11.7035C21.9577 10.9086 21.6426 10.1461 21.081 9.58348C20.5195 9.0209 19.7575 8.70441 18.9626 8.70361C17.3091 8.70361 15.9688 10.0469 15.9688 11.7035V19.7032C15.9688 21.3608 17.3091 22.7041 18.9626 22.7041C19.7575 22.7033 20.5195 22.3868 21.081 21.8242C21.6426 21.2617 21.9577 20.4991 21.957 19.7042" fill="#F8F6F1" />
                            <path d="M18.9626 38.7036C19.7575 38.7028 20.5195 38.3863 21.081 37.8237C21.6426 37.2612 21.9577 36.4986 21.957 35.7037C21.9577 34.9088 21.6426 34.1463 21.081 33.5837C20.5195 33.0211 19.7575 32.7046 18.9626 32.7038H15.9688V35.7037C15.9688 37.3603 17.3091 38.7036 18.9626 38.7036ZM18.9626 30.7039H26.9473C28.6004 30.7039 29.9412 29.3606 29.9412 27.7035C29.9418 26.9086 29.6268 26.1461 29.0652 25.5835C28.5037 25.0209 27.7417 24.7044 26.9468 24.7036H18.9626C17.3091 24.7036 15.9688 26.0469 15.9688 27.7035C15.9684 28.0971 16.0455 28.4868 16.1957 28.8506C16.346 29.2143 16.5664 29.5449 16.8444 29.8235C17.1224 30.1021 17.4526 30.3231 17.816 30.4741C18.1794 30.6251 18.5691 30.703 18.9626 30.7034" fill="#F8F6F1" />
                            <path d="M1.51064e-06 27.7035C-0.000393626 28.0971 0.0767319 28.4868 0.226974 28.8506C0.377217 29.2143 0.597634 29.5449 0.875642 29.8235C1.15365 30.1021 1.4838 30.3231 1.84725 30.4741C2.2107 30.6251 2.60032 30.703 2.99388 30.7034C3.78875 30.7026 4.55075 30.3861 5.11229 29.8235C5.67383 29.261 5.98892 28.4984 5.98826 27.7035V24.7036H2.99388C1.3403 24.7036 1.51064e-06 26.0469 1.51064e-06 27.7035ZM7.98417 27.7035V35.7032C7.98417 37.3603 9.32448 38.7036 10.9781 38.7036C11.7729 38.7028 12.5349 38.3863 13.0965 37.8237C13.658 37.2612 13.9731 36.4986 13.9724 35.7037V27.7035C13.9728 27.3099 13.8957 26.9201 13.7454 26.5563C13.5951 26.1925 13.3747 25.8619 13.0966 25.5833C12.8186 25.3048 12.4883 25.0837 12.1248 24.9327C11.7613 24.7818 11.3716 24.7039 10.9781 24.7036C9.32448 24.7036 7.98417 26.0469 7.98417 27.7035Z" fill="#F8F6F1" />
                        </svg>

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
                        {/* <img src={Vector4.src} alt="Vector" style={{ width: "86px", objectFit: "none" }} /> */}
                        <svg width="80" height="48" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M79.3058 25.8169C79.3058 20.1774 76.5741 15.7274 71.3532 15.7274C66.1102 15.7274 62.938 20.1774 62.938 25.7728C62.938 32.4037 66.6829 35.7521 72.0581 35.7521C74.6796 35.7521 76.6622 35.1573 78.1602 34.3202V29.9143C76.6622 30.6633 74.9439 31.126 72.763 31.126C70.6262 31.126 68.7317 30.377 68.4893 27.7775H79.2617C79.2617 27.4911 79.3058 26.3456 79.3058 25.8169ZM68.4233 23.7241C68.4233 21.2348 69.9433 20.1994 71.3311 20.1994C72.6749 20.1994 74.1068 21.2348 74.1068 23.7241H68.4233Z" fill="#F8F6F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M54.4345 15.7274C52.2756 15.7274 50.8877 16.7408 50.1167 17.4457L49.8303 16.0799H44.9839V41.7661L50.4912 40.5986L50.5132 34.3643C51.3063 34.937 52.4739 35.7521 54.4124 35.7521C58.3557 35.7521 61.9465 32.5799 61.9465 25.5966C61.9244 19.2081 58.2896 15.7274 54.4345 15.7274ZM53.1127 30.9056C51.813 30.9056 51.0419 30.443 50.5132 29.8703L50.4912 21.6974C51.064 21.0585 51.857 20.6179 53.1127 20.6179C55.1174 20.6179 56.5052 22.8649 56.5052 25.7508C56.5052 28.7027 55.1394 30.9056 53.1127 30.9056Z" fill="#F8F6F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M37.4057 14.4277L42.935 13.2381V8.76611L37.4057 9.93367V14.4277Z" fill="#F8F6F1" />
                            <path d="M42.935 16.1019H37.4057V35.3776H42.935V16.1019Z" fill="#F8F6F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M31.4795 17.7321L31.1271 16.1019H26.3687V35.3776H31.8761V22.3142C33.1758 20.6179 35.3787 20.9263 36.0616 21.1686V16.1019C35.3567 15.8375 32.7793 15.3529 31.4795 17.7321Z" fill="#F8F6F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.465 11.3215L15.0899 12.467L15.0679 30.1125C15.0679 33.3729 17.5131 35.7741 20.7735 35.7741C22.5799 35.7741 23.9016 35.4436 24.6286 35.0471V30.5751C23.9237 30.8615 20.443 31.8749 20.443 28.6145V20.7941H24.6286V16.1019H20.443L20.465 11.3215Z" fill="#F8F6F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.57342 21.6974C5.57342 20.8383 6.27836 20.5078 7.44592 20.5078C9.12015 20.5078 11.235 21.0145 12.9092 21.9177V16.7408C11.0808 16.0138 9.27435 15.7274 7.44592 15.7274C2.97396 15.7274 0 18.0626 0 21.9618C0 28.0418 8.37115 27.0726 8.37115 29.694C8.37115 30.7074 7.48998 31.0378 6.25633 31.0378C4.4279 31.0378 2.09279 30.2888 0.242322 29.2755V34.5185C2.29105 35.3996 4.36181 35.7742 6.25633 35.7742C10.8384 35.7742 13.9886 33.5051 13.9886 29.5619C13.9666 22.9971 5.57342 24.1647 5.57342 21.6974Z" fill="#F8F6F1" />
                        </svg>

                    </div>
                </div>
            </div>
        </Footer >
    )
}
