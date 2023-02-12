import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CarouselElement from './element';

const DemoCarousel = (props) => {
    return (
        <Carousel showArrows={true} showThumbs={false} showStatus={true}>
            {props.data.map((item, index) => (
                <CarouselElement key={index} item={item} index={index + 1} />
            ))}
        </Carousel>
    )
}

export default DemoCarousel;