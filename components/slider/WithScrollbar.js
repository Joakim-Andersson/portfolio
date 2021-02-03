import React from "react";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

class WithScrollbar extends React.Component {
  state = { additionalTransfrom: 0 };
  render() {
    const CustomSlider = ({ carouselState }) => {
      let value = 0;
      let carouselItemWidth = 0;
      if (this.Carousel) {
        carouselItemWidth = this.Carousel.state.itemWidth;
        const maxTranslateX = Math.round(
          // so that we don't over-slide
          carouselItemWidth *
          (this.Carousel.state.totalItems -
            this.Carousel.state.slidesToShow) +
          150
        );
        value = maxTranslateX / 100; // calculate the unit of transform for the slider
      }
      const { transform } = carouselState;
      return (
        <div className="custom-slider">
          <input
            type="range"
            value={Math.round(Math.abs(transform) / value)}
            defaultValue={0}
            max={
              (carouselItemWidth *
                (carouselState.totalItems - carouselState.slidesToShow) +
                (this.state.additionalTransfrom === 150 ? 0 : 150)) /
              value
            }
            onChange={e => {
              if (this.Carousel.isAnimationAllowed) {
                this.Carousel.isAnimationAllowed = false;
              }
              const nextTransform = e.target.value * value;
              const nextSlide = Math.round(nextTransform / carouselItemWidth);
              if (
                e.target.value == 0 &&
                this.state.additionalTransfrom === 150
              ) {
                this.Carousel.isAnimationAllowed = true;
                this.setState({ additionalTransfrom: 0 });
              }
              this.Carousel.setState({
                transform: -nextTransform, // padding 20px and 5 items.
                currentSlide: nextSlide
              });
            }}
            className="custom-slider__input"
          />
        </div>
      );
    };
    return (
      <Carousel
        ssr={false}
        ref={el => (this.Carousel = el)}
        partialVisbile={false}
        customButtonGroup={<CustomSlider />}
        itemClass="slider-image-item"
        responsive={responsive}
        containerClass="carousel-container-with-scrollbar"
        additionalTransfrom={-this.state.additionalTransfrom}
        beforeChange={nextSlide => {
          if (nextSlide !== 0 && this.state.additionalTransfrom !== 150) {
            this.setState({ additionalTransfrom: 150 });
          }
          if (nextSlide === 0 && this.state.additionalTransfrom === 150) {
            this.setState({ additionalTransfrom: 0 });
          }
        }}
      >
        
        <div class="image-container increase-size">
          <img
            draggable={false}
            style={{ width: "100%", cursor: "pointer" }}
            src="Mainteny.jpg"
            className="project-image"
          />
          <div class="image-container-text">
            <h3 className="project-header">Mainteny x HubSpot</h3>
            <p className="project-text"> Rebrand of design and website for the client, and implemented a HubSpot-compatibility. <br /> </p>
            <a href="http://hubspot-developers-18a16xw-9171713.hs-sites.com/mainteny"> See the site here.</a> 
          </div>
        </div>

        <div class="image-container increase-size">
          <img
            draggable={false}
            style={{ width: "100%", cursor: "pointer" }}
            src="socialmedia-app.jpg"
          />
          <div class="image-container-text">
            <h3 className="project-header"> Niched Social Media Network</h3>
            <p className="project-text"> Vetted Social Media Application made for people with disabilities. Stack: Using React as the library and Socket.io to make the chat-function real-time. <br /> </p>
            <a href="https://github.com/hagenek/polka">Find on Github here. </a> 
          </div>
        </div>

        <div class="image-container increase-size">
          <img
            draggable={false}
            style={{ width: "100%", cursor: "pointer" }}
            src="/portfolio.jpg"
          />
          <div class="image-container-text">
            <h3 className="project-header">Portfolio</h3>
            <p className="project-text">Portfolio created using NEXT.js framework and React library. <br /> </p>
            <a href="https://github.com/Joakim-Andersson/portfolio">Find on Github here. </a> 
          </div>
        </div>

        <div class="image-container increase-size">
          <img
            draggable={false}
            style={{ width: "100%", cursor: "pointer" }}
            src="seasonal-produce.jpg"
          />
          <div class="image-container-text">
            <h3 className="project-header">Seasonal Produce</h3>
            <p className="project-text"> App that gives recipes based on seasonal produce, to help make more environmentally friendy choices in the kitchen. <br /></p>
            <a href="https://github.com/Joakim-Andersson/Seasonal-produce">Find on Github here.</a> 
          </div>
        </div>

      </Carousel>
    );
  }
}

export default WithScrollbar;
