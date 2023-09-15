import AnimeCard from "./AnimeCard";

export default function PopularAnime({ data }) {
  // console.log(data);

  // Function that filters the results of the api and gets only those animes that has popularity more than 200
  function getPopularAnime(array) {
    return array?.filter((obj) => obj.popularity > 200);
  }

  let popularAnime = getPopularAnime(data);
  popularAnime = popularAnime?.slice(0, 5);
  // console.log(popularAnime);

  return (
    <>
      <section className="mt-10 mb-10">
        <div className="section-header flex items-center justify-between ">
          <h2 className="text-textWhite uppercase text-xl">popular</h2>
          <a
            href="/anime"
            className="text-textWhite opacity-50 hover:opacity-100 hover:underline hover:text-skyBlue transition-all"
          >
            view all
          </a>
        </div>
        <div
          className="popular-container
                    grid gap-6 justify-between 
                    grid-cols-[repeat(auto-fill,100%)] 
                    min-[430px]:grid-cols-[repeat(auto-fit,185px)]
                    mt-4"
        >
          {popularAnime?.map((anime) => {
            return (
              <AnimeCard
                key={anime.mal_id}
                id={anime.mal_id}
                imageSrc={anime.images.jpg.large_image_url}
                title={anime.titles[0].title}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
