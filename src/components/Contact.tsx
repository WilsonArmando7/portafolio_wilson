"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const ContactInfo = () => {
    return (
        <div className="container my-5">
            <h1 className="text-center text-primary mb-4 p-4 transform transition duration-300 hover:scale-105 hover:-translate-y-1">
                Contáctame
            </h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg">
                        <div className="card-body text-center">
                            <h2 className="card-title p-4 transform transition duration-300 hover:scale-105 hover:-translate-y-1">
                                WilsonArmando
                            </h2>
                            <p className="card-text">
                                <i className="bi bi-phone-fill text-success"></i> +502 36143299
                            </p>
                            <p className="card-text p-4 transform transition duration-300 hover:scale-105 hover:-translate-y-1">
                                <i className="bi bi-envelope-fill text-danger"></i> wilsonarmando725@gmail.com
                            </p>
                            <div className="d-flex justify-content-center mt-4">
                                <a
                                    href="https://www.facebook.com/tuperfil"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary me-3 transition-transform duration-300 hover:scale-110"
                                >
                                    <i className="bi bi-facebook "></i> Facebook
                                </a>
                                <a
                                    href="https://wa.me/123456789"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-success me-3 transition-transform duration-300 hover:scale-105"
                                >
                                    <i className="bi bi-whatsapp"></i> WhatsApp
                                </a>
                                <a
                                    href="https://github.com/tuperfil"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-dark transition-transform duration-300 hover:scale-110"
                                >
                                    <i className="bi bi-github"></i> GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
