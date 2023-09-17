import { useEffect, useState } from "react";
import AnimeCard from "../components/AnimeCard";

export default function AnimePage() {
  const [animeData, setAnimeData] = useState([]);
  const [hasNextPage, setNextPage] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getAllAnime(currentPage);
  }, [currentPage]);

  // console.log(hasNextPage);

  // On load more click change the currentPage and send new api request to load more anime on the page
  function handleClick() {
    setCurrentPage((prevCount) => prevCount + 1);
  }

  function getAllAnime(currentPage) {
    fetch(`https://api.jikan.moe/v4/anime?page=${currentPage}`)
      .then((response) => response.json())
      .then((results) => {
        setAnimeData((prevData) => [...prevData, ...results.data]);
        setNextPage(results.pagination.has_next_page);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  return (
    <div className="flex flex-col">
      <div
        className="anime-container
                    grid gap-4 md:gap-6 justify-between 
                    grid-cols-2
                    sm:grid-cols-3
                    md:grid-cols-4
                    lg:grid-cols-6
                    mt-4"
      >
        {animeData?.map((anime) => {
          return (
            <AnimeCard
              key={anime.mal_id}
              id={anime.mal_id}
              imageSrc={anime.images.jpg.large_image_url}
              title={anime.titles[0].title}
              rating={anime.score}
              type={anime.type}
            />
          );
        })}
      </div>

      <button
        onClick={handleClick}
        className={`${
          hasNextPage ? "block" : "hidden"
        } w-max text-neutral-900 uppercase font-bold bg-secondaryColor tracking-wide hover:bg-yellow-600 rounded-sm py-2 px-4 mt-4 mx-auto`}
      >
        show More
      </button>
    </div>
  );
}

// grid-cols-[repeat(auto-fill,100%)]
// min-[430px]:grid-cols-[repeat(auto-fit,185px)]
