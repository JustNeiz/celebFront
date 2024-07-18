import "./autoplaycarousel.css";
import {Box} from "@mantine/core";

const ScrollAreaExamples = () => {
  const cardDetails = {
    0: {
      imgUrl: "https://place-hold.it/300x500/666/fff/000",
      title: "Text 1"
    },

    1: {
      imgUrl: "https://freelance.ru/img/portfolio/pics/00/39/AB/3779453.jpg",
      title: "Text 2"
    },

    2: {
      imgUrl: "https://microwebnet.com.br/wp-content/uploads/2022/09/300x500-paramount.png",
      title: "Text 3"
    },

    3: {
      imgUrl: "https://pngimg.com/d/student_PNG70.png",
      title: "Text 4"
    },

    4: {
      imgUrl:  "https://as2.ftcdn.net/v2/jpg/03/01/18/35/500_F_301183540_2e2aKJC0cJAyle6Rsf1qHDYS1DUiJd0B.jpg",
      title: "Text 5"
    },
  }

  function CarouselItem({ imgUrl, imgTitle }) {
    return (
        <div className="carousel-card">
          <img src={imgUrl} alt={imgTitle}></img>
        </div>
    );
  }

  return (
      <Box>
        123123
      {/*  <p>Hello</p>*/}

      <div className="carousel-container">
        <div className="carousel-track">
          {Object.keys(cardDetails).map((detailKey) => {
            return (
                <CarouselItem
                    imgUrl={cardDetails[detailKey].imgUrl}
                    imgTitle={cardDetails[detailKey].title}
                ></CarouselItem>
            );
          })}
          {Object.keys(cardDetails).map((detailKey) => {
            return (
                <CarouselItem
                    imgUrl={cardDetails[detailKey].imgUrl}
                    imgTitle={cardDetails[detailKey].title}
                ></CarouselItem>
            );
          })}
        </div>
      </div>
      </Box>
  );
};

export default ScrollAreaExamples;
