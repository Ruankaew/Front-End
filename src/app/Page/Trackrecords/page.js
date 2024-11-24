import React from 'react'
import '../../assest/styles/About.css';
import ImageArrow from "../../assest/image/Component 18.png"

export default function AboutPage() {
    return (
        <div class="container">
            <div
                style={{
                    padding: "80px 123px"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        height: "auto",
                        background: "white",
                    }}
                >
                    <div
                        className='group_left'
                        style={{
                            width:"50%",
                        }}
                    >
                        <button
                            style={{
                                width: "124px",
                                height: "44px",
                                border: "1px dotted rgba(207, 152, 44, 1)",
                                borderRadius: "42px",
                                fontFamily: "DM Sans",
                                backgroundColor: "white",
                                fontWeight: 400,
                                fontSize: "18px"
                            }}
                        >
                            About Us
                        </button>

                        <p>WE ARE TRUSTED ADVISORS <br />COMMITTED TO EXCELLENCE</p>
                    </div>

                    <div
                        class="group_right"
                        style={{
                            width: "60%",
                        }}
                    >
                        <div class="text">
                            <p>Jay Capital Advisory Limited <br/> is a <spzn style={{fontFamily: "DM Sans",fontWeight: 600 , color: "rgba(181, 190, 184, 1)"}}>SEC-approved </spzn> boutique <br/> financial advisory firm based <br />in Bangkok, Thailand. </p>
                            <div
                                style={{
                                    border: "none",
                                    background: "none",
                                    overflow: "hidden",
                                    display: "flex",
                                    justifyContent: "end",
                                }}
                            >
                                <img src={ImageArrow.src}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
