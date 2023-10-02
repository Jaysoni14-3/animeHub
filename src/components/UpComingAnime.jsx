// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import Slider from "react-slick";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Zoom } from "swiper/modules";

export default function UpComingAnime({ data }) {
  // console.log(data);

  return (
    <>
      <section className="mt-6 mb-4">
        <div className="section-header flex items-justify-between">
          <h2 className="text-neutral-300 font-bold select-none tracking-wide uppercase text-xl">
            Upcomming this season
          </h2>
        </div>
      </section>
      <div>
        <Swiper
          slidesPerView={2}
          centeredSlides={false}
          spaceBetween={24}
          grabCursor={true}
          freeMode={false}
          loop={true}
          zoom={true}
          pagination={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
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
          }}
        >
          {data?.map((anime) => {
            return (
              <SwiperSlide className="select-none" key={anime.mal_id}>
                <Link
                  to={`/anime-details/${anime.mal_id}`}
                  className="relative shadow-lg cursor-pointer"
                  key={anime.mal_id}
                >
                  <img
                    className="rounded-lg w-full h-[300px] object-cover "
                    src={anime.images.jpg.large_image_url}
                    alt=""
                  />
                  <div className="h-[56px] absolute rounded-t-none rounded-lg bottom-0 items-center w-full backdrop-blur-lg backdrop-brightness-50 px-2">
                    <p className="w-full py-1 line-clamp-2 text-textWhite">
                      {anime.titles[0].title}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
