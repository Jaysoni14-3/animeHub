import Slider from "react-slick";

export default function HomePageSkeleton() {
  // SLIDER SETTINGS
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
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
  return (
    <>
      {/* Upcomming section */}
      <section className="mt-6">
        <div className="section-header min-h-[28px] w-80 bg-neutral-400 flex items-justify-between rounded-lg"></div>
        <div className="mt-4">
          <Slider {...settings}>
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <div
                  className="relative shadow-lg rounded-lg bg-neutral-500"
                  key={index}
                >
                  <div className="rounded-lg w-full min-h-[300px]"></div>
                  <div className="h-[56px] absolute rounded-t-none rounded-lg bottom-0 w-full backdrop-blur-lg backdrop-brightness-50 px-2">
                    <p className="w-full py-1"></p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
      {/* Top anime */}
      <section className="mt-10 mb-10">
        <div className="section-header flex items-center justify-between">
          <div className="bg-neutral-400 rounded-lg w-32 h-6"></div>
          <div className="bg-neutral-400 rounded-lg w-24 h-6"></div>
        </div>
        <div
          className="grid gap-4 md:gap-6 justify-between 
                    grid-cols-2
                    sm:grid-cols-3
                    md:grid-cols-4
                    lg:grid-cols-6
                    mt-4"
        >
          {Array.from({ length: 6 }).map((_, index) => {
            return (
              <div
                id={index}
                key={index}
                className="relative shadow-lg bg-neutral-700 rounded-lg overflow-hidden"
              >
                <div className="h-[265px] w-full"></div>
                <div className="mb-auto h-16 w-full rounded-sm bg-neutral-500"></div>
              </div>
            );
          })}
        </div>
      </section>
      {/* Popular anime */}
      <section className="mt-10 mb-10">
        <div className="section-header flex items-center justify-between">
          <div className="bg-neutral-400 rounded-lg w-32 h-6"></div>
          <div className="bg-neutral-400 rounded-lg w-24 h-6"></div>
        </div>
        <div
          className="grid gap-4 md:gap-6 justify-between 
                    grid-cols-2
                    sm:grid-cols-3
                    md:grid-cols-4
                    lg:grid-cols-6
                    mt-4"
        >
          {Array.from({ length: 6 })?.map((_, index) => {
            return (
              <div
                key={index}
                className="relative shadow-lg bg-neutral-700 rounded-lg overflow-hidden"
              >
                <div className="h-[265px] w-full"></div>
                <div className="mb-auto h-16 w-full rounded-sm bg-neutral-500"></div>
              </div>
            );
          })}
        </div>
      </section>
      {/* Manga section */}
      <section className="mt-10 mb-10">
        <div className="section-header flex items-center justify-between">
          <div className="bg-neutral-400 rounded-lg w-32 h-6"></div>
          <div className="bg-neutral-400 rounded-lg w-24 h-6"></div>
        </div>
        <div
          className="grid gap-6 justify-between 
                    grid-cols-[repeat(auto-fill,100%)] 
                    min-[530px]:grid-cols-[1fr,1fr]
                    mt-4"
        >
          {Array.from({ length: 2 }).map((_, index) => {
            return (
              <div key={index}>
                <div className="flex rounded-lg overflow-hidden">
                  <div className="w-6/12 overflow-hidden">
                    <div className="h-[265px] bg-neutral-400 w-full"></div>
                  </div>
                  <div className="flex flex-col justify-start p-4 w-full">
                    <div className="bg-neutral-300 w-6/12 rounded-md h-7 mb-2"></div>
                    <div className="flex gap-4">
                      <div className="bg-neutral-400 w-3/12 rounded-md h-6 mb-2"></div>
                      <div className="bg-neutral-400 w-4/12 rounded-md h-6 mb-2"></div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-neutral-400 w-3/12 rounded-md h-6 mb-2"></div>
                      <div className="bg-neutral-400 w-4/12 rounded-md h-6 mb-2"></div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-neutral-400 w-3/12 rounded-md h-6 mb-2"></div>
                      <div className="bg-neutral-400 w-4/12 rounded-md h-6 mb-2"></div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-neutral-400 w-3/12 rounded-md h-6 mb-2"></div>
                      <div className="bg-neutral-400 w-4/12 rounded-md h-6 mb-2"></div>
                    </div>
                    {/* {rank && (
                      <div className="rank flex items-center mb-1">
                        <label className="font-thin text-neutral-400 opacity-80 me-2">
                          Rank :{" "}
                        </label>
                        <p>{rank}</p>
                      </div>
                    )}
                    {authors && (
                      <div className="authors flex items-start mb-1">
                        <label className="font-thin text-neutral-400 opacity-80 me-2">
                          Author :{" "}
                        </label>
                        <div className="author-name">
                          {authors.map((author) => (
                            <p id={author.mal_id} key={author.mal_id}>
                              {author.name}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                    {publishing && (
                      <div className="publishing flex items-center mb-1">
                        <label className="font-thin text-neutral-400 opacity-80 me-2">
                          Publishing :{" "}
                        </label>
                        <p>{publishing ? "Airing" : "Finished airing"}</p>
                      </div>
                    )}
                    {genres && (
                      <div className="genres flex items-center flex-wrap mb-1">
                        <label className="font-thin text-neutral-400 opacity-80 me-2">
                          genres :{" "}
                        </label>
                        {genres.slice(0, 3).map((genre) => (
                          <span
                            key={genre.mal_id}
                            className="text-sm text-neutral-100 rounded-full me-1 mt-1 px-1 bg-neutral-700"
                          >
                            {genre.name}
                          </span>
                        ))}
                      </div>
                    )} */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
