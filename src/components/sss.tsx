import { Flex, ScrollArea, Image} from "@mantine/core";
import { useEffect, useRef, useState } from 'react';
import css from "./ScrollAreaExamples.module.css";

const ScrollAreaExamples = () => {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState([
    "https://place-hold.it/300x500/666/fff/000",
    "https://place-hold.it/300x500/666/fff/000",
    "https://place-hold.it/300x500/666/fff/000",
    "https://place-hold.it/300x500/666/fff/000",
    "https://place-hold.it/300x500/666/fff/000",
  ]);
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollAreaRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollAreaRef.current;

        if (scrollLeft + clientWidth >= scrollWidth - 1) {
          // Move the first element to the end of the array
          setImages((prevImages) => {
            const newImages = [...prevImages];
            newImages.push(newImages.shift()!);
            return newImages;
          });

          // Adjust scroll position to maintain the smooth scroll
          scrollAreaRef.current.scrollBy({ left: 1, behavior: 'smooth' });
        } else {
          scrollAreaRef.current.scrollBy({ left: 1, behavior: 'smooth' });
        }
      }
    }, 10);
    
    return () => clearInterval(scrollInterval);
  }, []);

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
            <Image key={index} src={src} style={{ marginLeft: 20, marginRight: 20 }}w="100%" />
        ))}
      </Flex>
    </ScrollArea>
  );
};

export default ScrollAreaExamples;
