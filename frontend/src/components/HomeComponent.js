import React,{useState} from 'react';
import {Row, Col, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';
import {PRODUCTS} from '../shared/newProducts'; 

const items = [
    {
      src: PRODUCTS[0].image,
      altText: PRODUCTS[0].category,
      caption: PRODUCTS[0].name
    },
    {
      src: PRODUCTS[1].image,
      altText: PRODUCTS[1].category,
      caption: PRODUCTS[1].name
    },
    {
      src: PRODUCTS[2].image,
      altText: PRODUCTS[2].category,
      caption: PRODUCTS[2].name
    }
];

function Home(){
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src} >
        <img className="App-slide-image" src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
      </CarouselItem>
    );
  });

  return (
      <div className="App-home">
          <div className="container">
              <Row>
                  <Col className="mx-auto App-slide" md={8}>
                    <h1 class="text-center label">New</h1>
                    <Carousel activeIndex={activeIndex} next={next} previous={previous} >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                  </Col>
              </Row>
          </div>
      </div>
  );
}

export default Home;
