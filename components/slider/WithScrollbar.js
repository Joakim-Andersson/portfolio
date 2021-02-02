import React from "react";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
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
          <div class="image-container-text">
            <h1>Portfolio</h1>
            <p>Portfolio created using NEXT and React framework.</p>
          </div>
          <img
            draggable={false}
            style={{ width: "100%", cursor: "pointer" }}
            src="/portfolio.jpg"
          />
        </div>

        <div class="image-container increase-size">
          <div class="image-container-text">
            <p>3</p>
          </div>
          <img
            draggable={false}
            style={{ width: "100%", cursor: "pointer" }}
            src="seasonalprod.jpg"
          />
        </div>

        <div class="image-container increase-size">
          <div class="image-container-text">
            <p>4</p>
          </div>
          <img
            draggable={false}
            style={{ width: "100%", cursor: "pointer" }}
            src="Mainteny.jpg"
          />
        </div>

        <div class="image-container increase-size">
          <div class="image-container-text">
            <p>4</p>
          </div>
          <img
            draggable={false}
            style={{ width: "100%", cursor: "pointer" }}
            src="Mainteny.jpg"
          />
        </div>

        <div class="image-container increase-size">
          <div class="image-container-text">
            <p>4</p>
          </div>
          <img
            draggable={false}
            style={{ width: "100%", cursor: "pointer" }}
            src="Mainteny.jpg"
          />
        </div>


      </Carousel>
    );
  }
}

export default WithScrollbar;
