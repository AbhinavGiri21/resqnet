import React, { useState } from "react";
import "./Home.css";
import { Link } from 'react-router-dom';

const Home = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is this platform about?",
            answer: "This platform helps individuals and communities during disasters by providing real-time assistance, relief center locations, and emergency communication features."
        },
        {
            question: "Who can use this platform?",
            answer: "Anyone affected by a disaster, volunteers, rescue teams, and authorities can use this platform to seek or provide assistance."
        },
        {
            question: "How can I find nearby relief centers?",
            answer: "Go to the Find Help page, enter your location, or allow geolocation access to see nearby relief centers on a map."
        },
        {
            question: "What types of assistance can I find?",
            answer: "You can find relief centers providing food, water, shelter, medical aid, and rescue support. Use the filter options to select specific services."
        },
        {
            question: "How accurate is the information about relief centers?",
            answer: "We regularly update our data using official sources, volunteers, and user reports. However, we recommend verifying information before visiting a center."
        },
        {
            question: "Do I need to create an account to use the platform?",
            answer: "No, you can access most features without an account. However, registered users may receive additional support like priority assistance and real-time updates."
        },
        {
            question: "Is my personal information safe?",
            answer: "Yes, we follow strict privacy policies. Your data is encrypted and only shared with verified responders in case of emergencies."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="home-container">
            <section className="hero">
                <h1>Disaster Assistance Platform</h1>
                <p>Find help, request aid, and stay safe during emergencies.</p>
                <Link to="/find-help" className="cta-button">Get Help Now</Link>
            </section>

            <section className="how-it-works">
                <h2>How It Works</h2>
                <div className="steps">
                    <div className="step">
                        <h3>📍 Search for Help</h3>
                        <p>Use our real-time search with geolocation to find nearby relief centers.</p>
                    </div>
                    <div className="step">
                        <h3>🗺️ View on Map</h3>
                        <p>Locate medical, shelter, and food centers with detailed resources.</p>
                    </div>
                    <div className="step">
                        <h3>🚑 Request Emergency Assistance</h3>
                        <p>Need urgent help? Use our Live Chat to connect instantly with an emergency responder.</p>
                    </div>
                    <div className="step">
                        <h3>💬 Real-Time Communication</h3>
                        <p>Live chat with responders and volunteers via WebSockets.</p>
                    </div>
                    <div className="step">
                        <h3>📞 Contact & Support</h3>
                        <p>Access emergency contacts, FAQs, and submit feedback.</p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? "open" : ""}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                <span>{faq.question}</span>
                                <span className="faq-toggle">{openIndex === index ? "−" : "+"}</span>
                            </div>
                            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
