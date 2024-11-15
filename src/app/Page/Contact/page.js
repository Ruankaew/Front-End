import React from 'react'

export default function ContactPage() {
    return (
        <div
            id="contact"
            style={{
                height: '500px',
                backgroundColor: '#fff0f6',
                marginTop: '20px',
            }}
        >
            <h2>Contact Section</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" rows="4" required></textarea>
                <button type="submit" style={{ padding: '0.5rem', backgroundColor: '#007bff', color: 'white', border: 'none' }}>
                    Send
                </button>
            </form>
        </div>
    )
}
