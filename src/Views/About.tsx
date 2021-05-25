import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AboutView: React.FC = () => {

    const [className, setClassName] = useState('about');

    useEffect(() => {
        setTimeout(() => {
            setClassName('about section-show');
        }, 50);        
    }, []);

    return (
        <section id="about" className={className}>

            <div className="about-me container">

                <div className="section-title">
                    <h2>About</h2>
                    <p>This website is a playground for React.</p>
                </div>

                <div className="row d-none">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src="assets/img/me.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>UI/UX &amp; Graphic Designer</h3>
                        <p className="font-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="icofont-rounded-right"></i> <strong>Birthday:</strong> 1 May 1995</li>
                                    <li><i className="icofont-rounded-right"></i> <strong>Website:</strong> www.example.com</li>
                                    <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> +123 456 7890</li>
                                    <li><i className="icofont-rounded-right"></i> <strong>City:</strong> City : New York, USA</li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="icofont-rounded-right"></i> <strong>Age:</strong> 30</li>
                                    <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> Master</li>
                                    <li><i className="icofont-rounded-right"></i> <strong>PhEmailone:</strong> email@example.com</li>
                                    <li><i className="icofont-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                            Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                        </p>
                    </div>
                </div>

            </div>

            <div className="counts container d-none">

                <div className="row">

                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="icofont-simple-smile"></i>
                            <span data-toggle="counter-up">232</span>
                            <p>Happy Clients</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                        <div className="count-box">
                            <i className="icofont-document-folder"></i>
                            <span data-toggle="counter-up">521</span>
                            <p>Projects</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <i className="icofont-live-support"></i>
                            <span data-toggle="counter-up">1,463</span>
                            <p>Hours Of Support</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <i className="icofont-users-alt-5"></i>
                            <span data-toggle="counter-up">15</span>
                            <p>Hard Workers</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="skills container d-none">

                <div className="section-title">
                    <h2>Skills</h2>
                </div>

                <div className="row skills-content">

                    <div className="col-lg-6">

                        <div className="progress">
                            <span className="skill">HTML <i className="val">100%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">CSS <i className="val">90%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">JavaScript <i className="val">75%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-6">

                        <div className="progress">
                            <span className="skill">PHP <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">WordPress/CMS <i className="val">90%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">Photoshop <i className="val">55%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className="interests container">

                <div className="section-title">
                    <h2>Projects</h2>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-4">
                        <div className="icon-box">
                            <i className="ri-store-line" style={{ color: "#ffbb2c" }}></i>
                            <h3>
                                <Link to="/barcode-scanner">Barcode Scanner</Link>
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 mt-md-0 d-none">
                        <div className="icon-box">
                            <i className="ri-bar-chart-box-line" style={{ color: "#5578ff" }}></i>
                            <h3>Dolor Sitema</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 mt-md-0 d-none">
                        <div className="icon-box">
                            <i className="ri-calendar-todo-line" style={{ color: "#e80368" }}></i>
                            <h3>Sed perspiciatis</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 mt-lg-0 d-none">
                        <div className="icon-box">
                            <i className="ri-paint-brush-line" style={{ color: "#e361ff" }}></i>
                            <h3>Magni Dolores</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 d-none">
                        <div className="icon-box">
                            <i className="ri-database-2-line" style={{ color: "#47aeff" }}></i>
                            <h3>Nemo Enim</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 d-none">
                        <div className="icon-box">
                            <i className="ri-gradienter-line" style={{ color: "#ffa76e" }}></i>
                            <h3>Eiusmod Tempor</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 d-none">
                        <div className="icon-box">
                            <i className="ri-file-list-3-line" style={{ color: "#11dbcf" }}></i>
                            <h3>Midela Teren</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 d-none">
                        <div className="icon-box">
                            <i className="ri-price-tag-2-line" style={{ color: "#4233ff" }}></i>
                            <h3>Pira Neve</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 d-none">
                        <div className="icon-box">
                            <i className="ri-anchor-line" style={{ color: "#b2904f" }}></i>
                            <h3>Dirada Pack</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 d-none">
                        <div className="icon-box">
                            <i className="ri-disc-line" style={{ color: "#b20969" }}></i>
                            <h3>Moton Ideal</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 d-none">
                        <div className="icon-box">
                            <i className="ri-base-station-line" style={{ color: "#ff5828" }}></i>
                            <h3>Verdo Park</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 d-none">
                        <div className="icon-box">
                            <i className="ri-fingerprint-line" style={{ color: "#29cc61" }}></i>
                            <h3>Flavor Nivelanda</h3>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default AboutView;