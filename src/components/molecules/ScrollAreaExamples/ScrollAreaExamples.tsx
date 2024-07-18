import { Flex, ScrollArea, Image } from "@mantine/core";
import { useEffect, useRef, useState } from 'react';
import css from "./ScrollAreaExamples.module.css";

const ScrollAreaExamples = () => {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState([
    "https://place-hold.it/300x500/666/fff/000",
    "https://freelance.ru/img/portfolio/pics/00/39/AB/3779453.jpg",
    "https://microwebnet.com.br/wp-content/uploads/2022/09/300x500-paramount.png",
    "https://pngimg.com/d/student_PNG70.png",
    "https://as2.ftcdn.net/v2/jpg/03/01/18/35/500_F_301183540_2e2aKJC0cJAyle6Rsf1qHDYS1DUiJd0B.jpg"
  ]);
  const swapFirstElement = (array : string[]) => {
    array.push(array.shift()!)
  }




  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollAreaRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollAreaRef.current;

        if (scrollLeft + clientWidth >= scrollWidth - 1) {
          // scrollAreaRef.current.scrollBy({ left: -scrollWidth, behavior: 'smooth' });
          // setImages((prev)=>{
          //   const newImages = [...prev];
          //   newImages.push(newImages.shift()!);

          //       return  newImages;
          // })
        } else {
          scrollAreaRef.current.scrollBy({ left: 1, behavior: 'smooth' });
        }
      }
    }, 10);

    return () => clearInterval(scrollInterval);
  }, [images]);

  return (
    <ScrollArea 
      mt={40}
      classNames={css}
      w="80vw"
      bg="green"
      viewportRef={scrollAreaRef}
    >
      <Flex>
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            style={{ marginLeft: 20, marginRight: 20 }}
            w="100%"
            data-index={index}
          />
        ))}
      </Flex>
    </ScrollArea>
  );
};

export default ScrollAreaExamples;
