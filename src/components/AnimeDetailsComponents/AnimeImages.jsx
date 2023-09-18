import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Zoom } from "swiper/modules";

export default function AnimeImages({ id }) {
  const [animeImages, setAnimeImages] = useState([]);

  useEffect(() => {
    getAnimeImages(id);
  }, [id]);

  //   console.log(animeImages);

  const getAnimeImages = (id) => {
    fetch(`https://api.jikan.moe/v4/anime/${id}/pictures `)
      .then((response) => response.json())
      .then((results) => {
        setAnimeImages(results.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className=" pb-2 ">
      <Swiper
        slidesPerView={2}
        centeredSlides={false}
        spaceBetween={10}
        grabCursor={true}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        zoom={true}
        pagination={false}
        modules={[Zoom]}
        breakpoints={{
          600: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1220: {
            slidesPerView: 6,
          },
        }}
      >
        {animeImages.map((image, i) => {
          return (
            <SwiperSlide className="select-none" key={i}>
              <img
                // className="w-[200px] h-auto rounded-lg"
                className="w-[200px] object-cover rounded-lg"
                src={image.jpg.large_image_url}
                alt=""
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
