import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import img1 from '../../images/serving 1.jpg'
import img2 from '../../images/serving 2.jpg'
import img3 from '../../images/serving-people.jpg'

const Home = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    }
    
    return (
       <Container>
           <div className="body">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>আলোর পথে </h3>
                        <p>এগিয়ে আছি আপনাদের সেবায় </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>আলোর পথে</h3>
                        <p>এগিয়ে আছি আপনাদের সেবায়</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>আলোর পথে</h3>
                        <p>এগিয়ে আছি আপনাদের সেবায়</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
           </div>
       </Container>
    );
};

export default Home;