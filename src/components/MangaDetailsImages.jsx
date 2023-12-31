import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Zoom } from "swiper/modules";

export default function MangaDetailsImages({ id }) {
  const [mangaImages, setMangaImages] = useState([]);

  useEffect(() => {
    getMangaImages(id);
  }, [id]);

  //   console.log(animeImages);
  const getMangaImages = (id) => {
    fetch(`https://api.jikan.moe/v4/manga/${id}/pictures`)
      .then((response) => response.json())
      .then((results) => {
        setMangaImages(results.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className=" pb-2 ">
      <Swiper
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
        modules={[Zoom, Autoplay]}
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
        {mangaImages.map((image, i) => {
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
