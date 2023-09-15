import AnimeCard from "./AnimeCard";

export function RecommendedAnimes({ data }) {
  // Creating a new array
  let recommendedAnimes = [];

  getRecommendedFromData(data, 5);
  // console.log(recommendedAnimes);

  // Function that gets 5 random animes out of 25 from results of the api
  // and then returns the recommended animes into recommendedAnimes[]
  function getRecommendedFromData(array, count) {
    if (!Array.isArray(array) || array.count === 0 || count <= 0) {
      return [];
    }

    recommendedAnimes = array.sort(() => Math.random() - 0.5).slice(0, count);
    return recommendedAnimes;
  }

  return (
    <section className="container max-w-screen-xl mx-auto mt-10 mb-10">
      <div className="section-header flex items-center justify-between">
        <h2 className="text-textWhite text-xl">Recommended Animes</h2>
        <a
          href="#"
          className="text-textWhite opacity-50 hover:opacity-100 hover:underline hover:text-skyBlue transition-all"
        >
          view all
        </a>
      </div>
      <div
        className="top-anime-container
                    grid gap-6 justify-between 
                    grid-cols-[repeat(auto-fill,100%)] 
                    min-[430px]:grid-cols-[repeat(auto-fit,185px)]
                    mt-4"
      >
        {recommendedAnimes?.map((anime) => {
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
  );
}
