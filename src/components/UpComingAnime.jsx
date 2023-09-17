import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function UpComingAnime({ data }) {
  // SLIDER SETTINGS
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // console.log(data);

  return (
    <>
      <section className="mt-6 mb-4">
        <div className="section-header flex items-justify-between">
          <h2 className="text-textWhite uppercase text-xl">
            Upcomming this season
          </h2>
        </div>
      </section>
      <div>
        <Slider {...settings}>
          {data?.map((anime) => {
            return (
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
            );
          })}
        </Slider>
      </div>
    </>
  );
}
