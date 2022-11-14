
import { useRef } from "react";
import Slider from "react-slick";
import cat1 from "./image/cat1.jpg";
import cat2 from "./image/cat2.jpg";
import cat3 from "./image/cat3.jpg";
import cat4 from "./image/cat4.jpg";
import "./Carousel.css";

const CarouselBasic = () => {
    return (
        <div>
            <div>
                <p>
                    아래 두 줄을 html에 추가해야 됨
                    <br />
                    {`<link
                rel="stylesheet"
                type="text/css"
                charset="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
              />`}
                    <br />
                    {`
              <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
              />`}
                </p>
            </div>
            <div style={{ display: "flex" }}>
                <SimpleSlider />
                <MultiSlider />
            </div>
            <div style={{ display: "flex", marginTop: 10 }}>
                <AutoSlider />
                <ButtonSlider />
            </div>
        </div>
    );
}

export default CarouselBasic;

const SimpleSlider = () => {
    const simpleSettings = {
        dots: true,
        speed: 500,
    };
    return (
        <div className="box">
            <h2>Carousel - Basic</h2>
            <div className="wrapper">
                <Slider {...simpleSettings}>
                    <div>
                        <img alt="" src={cat1} />
                        <p className="legend" align="center">
                            cat 1
                        </p>
                    </div>
                    <div>
                        <img alt="" src={cat2} />
                        <p className="legend" align="center">
                            cat 2
                        </p>
                    </div>
                    <div>
                        <img alt="" src={cat3} />
                        <p className="legend" align="center">
                            cat 3
                        </p>
                    </div>
                    <div>
                        <img alt="" src={cat4} />
                        <p className="legend" align="center">
                            cat 4
                        </p>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

const MultiSlider = () => {
    const multiSettings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <div className="box">
            <h2>Carousel - MultiSlider</h2>
            <div className="wrapper2">
                <Slider {...multiSettings}>
                    <div>
                        <img alt="" src={cat1} />
                        <p className="legend" align="center">
                            cat 1
                        </p>
                    </div>
                    <div>
                        <img alt="" src={cat2} />
                        <p className="legend" align="center">
                            cat 2
                        </p>
                    </div>
                    <div>
                        <img alt="" src={cat3} />
                        <p className="legend" align="center">
                            cat 3
                        </p>
                    </div>
                    <div>
                        <img alt="" src={cat4} />
                        <p className="legend" align="center">
                            cat 4
                        </p>
                    </div>
                </Slider>
            </div>
        </div>
    );
};


const AutoSlider = () => {
    const autoSettings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
    };
    return (
        <div className="box">
            <h2>Carousel - AutoSlider</h2>
            <div className="wrapper">
                <Slider {...autoSettings}>
                    <div>
                        <img alt="" src={cat1} />
                        <p className="legend" align="center">
                            cat 1
                        </p>
                    </div>
                    <div>
                        <img alt="" src={cat2} />
                        <p className="legend" align="center">
                            cat 2
                        </p>
                    </div>
                    <div>
                        <img alt="" src={cat3} />
                        <p className="legend" align="center">
                            cat 3
                        </p>
                    </div>
                    <div>
                        <img alt="" src={cat4} />
                        <p className="legend" align="center">
                            cat 4
                        </p>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

const ButtonSlider = () => {
    const slider = useRef();
    const next = () => {
        slider.current.slickNext();
    };
    const previous = () => {
        slider.current.slickPrev();
    };
    const buttonSettings = {
        dots: true,
        speed: 500,
    };
    return (
        <div className="box">
            <h2>Carousel - Use OutSide button</h2>
            <div
                style={{ display: "flex", flexDirection: "column", margin: "0 auto" }}
            >
                <div className="wrapper">
                    <Slider ref={slider} {...buttonSettings}>
                        <div>
                            <img alt="" src={cat1} />
                            <p className="legend" align="center">
                                cat 1
                            </p>
                        </div>
                        <div>
                            <img alt="" src={cat2} />
                            <p className="legend" align="center">
                                cat 2
                            </p>
                        </div>
                        <div>
                            <img alt="" src={cat3} />
                            <p className="legend" align="center">
                                cat 3
                            </p>
                        </div>
                        <div>
                            <img alt="" src={cat4} />
                            <p className="legend" align="center">
                                cat 4
                            </p>
                        </div>
                    </Slider>
                </div>
                <div style={{ textAlign: "center" }}>
                    <button className="button" onClick={previous}>
                        {"<<Previous"}
                    </button>
                    <button className="button" onClick={next}>
                        {"Next>>"}
                    </button>
                </div>
            </div>
        </div>
    );
};
