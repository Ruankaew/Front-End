import React from 'react'

export default function ContactPage() {
    return (
        <div>
            <h1>Contact Us</h1>
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
