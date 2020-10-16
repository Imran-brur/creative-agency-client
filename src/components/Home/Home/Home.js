import React from 'react';
import Carousel from '../Carousel/Carousel';
import Feedback from '../Feedback/FeedBack';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Carousel></Carousel>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;