import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Landing = () => {
    return (
        <Carousel
        // autoPlay={true}
        // showStatus={false}
        // showIndicators={false}
        // infiniteLoop={true}
        // showThumbs={false}
        >
            <div>
                <img src="https://c4.wallpaperflare.com/wallpaper/655/730/561/gamora-rocket-raccoon-groot-drax-the-destroyer-wallpaper-preview.jpg" />
            </div>
            <div>
                <img src="https://c4.wallpaperflare.com/wallpaper/655/730/561/gamora-rocket-raccoon-groot-drax-the-destroyer-wallpaper-preview.jpg" />
            </div>
            <div>
                <img src="https://c4.wallpaperflare.com/wallpaper/407/504/837/1917-movie-movie-scenes-war-world-war-i-world-war-hd-wallpaper-preview.jpg" />
            </div>
            <div>
                <img src="https://c4.wallpaperflare.com/wallpaper/407/504/837/1917-movie-movie-scenes-war-world-war-i-world-war-hd-wallpaper-preview.jpg" />
            </div>
        </Carousel>
    );
};

export default Landing;
