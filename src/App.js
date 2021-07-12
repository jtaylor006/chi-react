import React from 'react';
import logo from './img/logo.png'
import './App.css'

class App extends React.Component {
    render() {
        return (
            <div className="App" data-spy="scroll" data-target="#navbarResponsive">


                {/* <!-- Home Page Section --> */}
                <div id="home">
                    {/* Nav Bar */}
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                        <a className="navbar-brand" href="#">
                            <img src="img/logo.png"></img>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#who">Who</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#why">Why</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#product">Product</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#summaries">Summaries</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="#finances">Finances</a>
                                </li> */}
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    {/* Landing Page */}
                    <div className="landing">
                        <div className="home-wrap">
                            <div className="home-inner">
                            </div>
                        </div>
                    </div>
                    <div className="caption text-center">
                        <h1>Chi Dynamic</h1>
                        <h3>An innovative cardio machine</h3>
                        <a className="btn btn-outline-light btn-lg" href="#who">Learn More</a>
                    </div>
                </div>


                {/* Who Section */}
                <div id="who" className="offset">
                    <div className="col-12 narrow text-center">
                        <h1>Who We Are</h1>
                        <div className="heading-underline"></div>

                        <img className="avi" src="img/solo.jpg" alt=""></img>
                        <p>We are an app-integrated experience designed to allow coach-less training to advance their athletes
                            to the next performance level. Chi Dynamic solicits financial backing in order to be able to introduce
                            its new product which is described throughout this website.</p>
                    </div>
                </div>


                {/* Why Section */}
                <div id="why" className="offset">
                    <div className="jumbotron">
                        <div className="narrow text-center">
                            <div className="col-12">
                                <h3 className="heading">Why Are We Here</h3>
                                <div className="heading-underline"></div>
                            </div>
                            <div className="row text-center">
                                <div className="whyTab">
                                    <div className="problem">
                                        <img className="pic fl" src="img/coach.jpg" alt=""></img>
                                        <h3>Problem</h3>
                                        <p>Coaches are required to orchestrate cardio drills for athletes, taking away valuable time
                                            to address, develop, and coach each athlete's technique needs during cardio training
                                            sessions.</p>
                                    </div>
                                </div>
                                <div className="whyTab">
                                    <div className="solution">
                                        <img className="pic fr" src="img/agile.jpg" alt=""></img>
                                        <h3>Solution</h3>
                                        <p>Our machine allows coach-less cardio training for athletes, giving coaches a greater
                                            opportunity to coach athlete's form and technique to advance their players to the next
                                            performance level without additional time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Product Section */}
                <div id="product" className="offset">
                    <div className="row light text-center">
                        <div className="col-12">
                            <h3 className="heading">Product</h3>
                            <div className="heading-underline"></div>
                        </div>

                        <div className="col-md-4">
                            <div className="problem">
                                <i className="fas fa-check-square fa-3x"></i>
                            </div>
                            <h3 className="subtitle">Incentivize Cardio</h3>
                            <p className="lead">Two ways:
                                <br>1. Coach-less cardio training</br>
                                <br>2. Creates a gamified cardio environment</br>
                            </p>
                        </div>

                        <div className="col-md-4">
                            <div className="problem">
                                <i className="fas fa-check-square fa-3x"></i>
                            </div>
                            <h3 className="subtitle">Functionality Benefit</h3>
                            <p className="lead">Each athlete will have a personalized profile that measure/track the athletes
                                performance</p>
                        </div>

                        <div className="col-md-4">
                            <div className="problem">
                                <i className="fas fa-check-square fa-3x"></i>
                            </div>
                            <h3 className="subtitle">Emotional Benefit</h3>
                            <p className="lead">Maximize each athletes speed and agility allowing athletes to play with greater
                                confidence</p>
                        </div>
                    </div>
                </div>


                {/* Summaries */}
                <div id="summaries" className="offset">
                    <div className="fixed-background">
                        <div className="row dark text-center">
                            <div className="col-12">
                                <h3 className="heading">Summaries</h3>
                                <div className="heading-underline"></div>
                            </div>

                            <div className="col-md-4">
                                <h3 className="subtitle">Executive</h3>
                                <div className="problem">
                                    <i className="fas fa-handshake fa-3x"></i>
                                </div>
                                <p className="lead">Chi Dynamic was established with the expectation of rapid expansion in the tech
                                    industry. 2020 social media trends show that people are embracing new fitness trends along
                                    with
                                    new
                                    workouts which we plan to mesh with the tech industry. </p>
                                <a className="btn btn-outline-light btn-lg" href="./executive/executive.html">Read</a>
                            </div>

                            <div className="col-md-4">
                                <h3 className="subtitle">Business</h3>
                                <div className="problem">
                                    <i className="fas fa-balance-scale fa-3x"></i>
                                </div>
                                <p className="lead"> Sports coaches generally seek out a competitive edge. Chi Dynamic will remove
                                    coaching
                                    barriers during their athletes cardio training sessions, allowing them to address, develop and
                                    coach
                                    each athletes technical needs. Coaches will feel like heroes for getting each athlete performing
                                    at
                                    the top of their ability.</p>
                                <a className="btn btn-outline-light btn-lg" href="./business/business.html">Read</a>
                            </div>

                            <div className="col-md-4">
                                <h3 className="subtitle">Marketing</h3>
                                <div className="problem">
                                    <i className="far fa-chart-bar fa-3x"></i>
                                </div>
                                <p className="lead">The global sports equipment market size is expected to reach USD 89.22 billion by
                                    2025.
                                    Smart fitness equipment provides efficient measurements to track users performance. This has
                                    driven
                                    the popularity in both exercise and sports tech among sports coaches, athletes and health
                                    enthusiasts alike; thereby having a positive impact on market growth.</p>
                                <a className="btn btn-outline-light btn-lg" href="./marketing/marketing.html">Read</a>
                            </div>
                            <div className="fixed-wrap">
                                <div className="fixed">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Finance Section */}
                {/* <div id="finances" className="offset">
                    <div className="jumbotron">
                        <div className="col-12 narrow text-center">
                            <h3>Finances</h3>
                            <div className="heading-underline"></div>
                            <p>Chi Dynamic has developed a twenty four month profit and loss projection.</p>
                            <a className="btn btn-outline-light btn-lg" href="./financial/financial.html">View</a>
                        </div>
                    </div>
                </div> */}


                {/* Contact Section */}
                <div id="contact" class="offset">
                    <footer>
                        <div className="row justify-content-center">
                            <div className="col-md-5 text-center">
                                <img src="img/logo.png"></img>
                                <p>If you have any questions, comments, or concerns feel free to click the link below to send an
                                    email. If you would like to donate towards the Chi Dynamic vision, that opportunity will be
                                    featured in a
                                    link below as well.<br> Thank you for visiting!</br>
                                </p>
                                <strong>
                                    <p><a className="footer-link" href="mailto:chidynamiccardio@gmail.com">Email</a>
                                        {/* <br><a
                                            className="footer-link"
                                            href="https://www.gofundme.com/f/cardio-training-innovation">Donate</a></br> */}
                                    </p>
                                </strong>
                            </div>
                            <hr class="socket">
                                &copy; Chi Dynamic.
                            </hr>
                        </div>
                    </footer>
                </div>

                
            </div>
        );
    }
}

export default App;