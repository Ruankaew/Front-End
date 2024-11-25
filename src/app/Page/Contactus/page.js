'use client'
import React, { useEffect, useRef } from "react";

export default function ContactPage() {
    const mapRef = useRef(null);

    useEffect(() => {
        const initMap = () => {
            const location = { lat: -37.8173137, lng: 144.9554312 }
            const map = new window.google.maps.Map(mapRef.current, {
                zoom: 15,
                center: location,
                disableDefaultUI: true,
                styles: [
                    {
                        featureType: "poi",
                        stylers: [{ visibility: "off" }], // ซ่อนจุดสนใจ เช่น ธุรกิจ ร้านอาหาร
                    },
                    {
                        featureType: "transit",
                        stylers: [{ visibility: "off" }], // ซ่อนเส้นทางขนส่งสาธารณะ
                    },
                ],
            });

            new window.google.maps.Marker({
                position: location,
                map: map,
            });
        };

        if (window.google) {
            initMap();
        } else {
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=KEY`;
            script.async = true;
            script.onload = initMap;
            document.head.appendChild(script);
        }
    }, []);


    return (
        <div
            id="contactus"
            style={{
                backgroundColor: "#fff0f6",
                marginTop: "105px",
                padding: "0 50px"
            }}
        >
            <div
                style={{
                    height: "384px",
                    borderRadius: "20px",
                    backgroundColor: "red"
                }}
            >

            </div>

            <div style={{ textAlign: "center",marginTop: "20px"}}>

                <div
                    ref={mapRef}
                    style={{ width: "100%", height: "450px", borderRadius: "10px", backgroundColor: "#E0E0E0" }}
                ></div>
            </div>

            <div style={{ textAlign: "center", padding: "20px" }}>
                <h1 style={{ fontFamily: "DM Sans", fontWeight: 300 }}>Let’s Build Your Financial Future <br />Together</h1>
            </div>
        </div>
    )
}
