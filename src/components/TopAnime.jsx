import AnimeCard from "./AnimeCard";

export default function TopAnime({ data }) {
  data = data?.slice(0, 6);
  return (
    <>
      <section className="mt-10 mb-10">
        <div className="section-header flex items-center justify-between">
          <h2 className="text-textWhite uppercase text-xl">Top Anime</h2>
          <a
            href="/anime"
            className="text-textWhite opacity-50 hover:opacity-100 hover:underline hover:text-skyBlue transition-all"
          >
            view all
          </a>
        </div>
        <div
          className="top-anime-container
                    grid gap-4 md:gap-6 justify-between 
                    grid-cols-2
                    sm:grid-cols-3
                    md:grid-cols-4
                    lg:grid-cols-6
                    mt-4"
        >
          {data?.map((anime) => {
            return (
              <AnimeCard
                key={anime.mal_id}
                id={anime.mal_id}
                imageSrc={anime.images.jpg.large_image_url}
                title={anime.title_english}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

// grid-cols-[repeat(auto-fill,100%)]
// min-[430px]:grid-cols-6
// min-[430px]:grid-cols-[repeat(auto-fit,185px)]
