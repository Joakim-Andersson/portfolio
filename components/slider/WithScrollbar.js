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
    return (
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >

        <div class="image-container increase-size">
          <div className="imgforbutton">
            <img
              draggable={false}
              style={{ width: "100%" }}
              src="Mainteny.jpg"
              className="project-image"
            />
            <p className="tool-stack"> Toolstack: React - Hubspot </p>
            <a href="http://hubspot-developers-18a16xw-9171713.hs-sites.com/mainteny">
              <button> Visit site </button>
            </a>
          </div>
          <div class="image-container-text">
            <h3 className="project-header">Mainteny x HubSpot</h3>
            <p className="project-text"> Rebrand of design and website for client, and implemented a HubSpot-compatibility. <br /> </p>
          </div>
        </div>

        <div class="image-container increase-size">
          <div className="imgforbutton">
            <img
              draggable={false}
              style={{ width: "100%" }}
              src="socialmedia-app.jpg"
            />
            <p className="tool-stack"> Toolstack: React, Socket.IO, Express, NodeJS, MongoDB, Mongoose </p>
            <a href="https://github.com/hagenek/polka">
              <button> Source code </button>
            </a>
          </div>
          <div class="image-container-text">
            <h3 className="project-header"> Niche Social Media</h3>
            <p className="project-text"> Vetted Social Media Application made for people with disabilities. Stack: Using React as the library and Socket.io to make the chat update real-time. <br /> </p>
          </div>
        </div>

        <div class="image-container increase-size">
          <div className="imgforbutton">
            <img
              draggable={false}
              style={{ width: "100%" }}
              src="/portfolio.jpg"
            />
            <p className="tool-stack"> Toolstack: NextJS - React </p>
            <a href="https://github.com/Joakim-Andersson/portfolio">
              <button> Source code </button>
            </a>
          </div>
          <div class="image-container-text">
            <h3 className="project-header">Portfolio</h3>
            <p className="project-text">Portfolio created using NEXT.js framework and React library. <br /> </p>
          </div>
        </div>

        <div class="image-container increase-size">
          <div className="imgforbutton">
            <img
              draggable={false}
              style={{ width: "100%" }}
              src="vegan-flashcard.jpg"
            />
            <p className="tool-stack"> Toolstack: Vue </p>
            <a href="https://vue-flashcard.vercel.app/">
              <button> Visit site </button>
            </a>
          </div>
          <div class="image-container-text">
            <h3 className="project-header"> Simple FlashCard App</h3>
            <p className="project-text"> Flashcard app made with Vue. A fun, playful and interacive app with a focus on Vegan and environmental facts. <br/> New features in progress! </p>
          </div>
        </div>

        <div class="image-container increase-size">
          <div className="imgforbutton">
            <img
              draggable={false}
              style={{ width: "100%" }}
              src="seasonal-produce.jpg"
            />
            <p className="tool-stack"> Toolstack: React - Express  </p>
            <a href="https://github.com/Joakim-Andersson/Seasonal-produce">
              <button> Source code </button>
            </a>
          </div>
          <div class="image-container-text">
            <h3 className="project-header">Seasonal Produce</h3>
            <p className="project-text"> App that gives recipes based on seasonal produce, to help make more environmentally conscious decisions in the kitchen. <br /></p>
          </div>
        </div>
{/* 
        <div class="image-container increase-size">
          <div className="imgforbutton">
            <img
              draggable={false}
              style={{ width: "100%" }}
              src="github-work.png"
            />
            <p className="tool-stack"> Toolstack: React - Express  </p>
            <a href="https://github.com/Joakim-Andersson/">
              <button> See Github </button>
            </a>
          </div>
          <div class="image-container-text">
            <h3 className="project-header">Check out more! </h3>
            <p className="project-text"> See more of what I've done on my Github-profile! <br /></p>
          </div>
        </div> */}

      </Carousel>
    );
  }
}

export default WithScrollbar;
