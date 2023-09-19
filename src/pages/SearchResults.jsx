import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AnimeCard from "../components/AnimeCard";

export default function SearchResults() {
  const location = useLocation();
  const query = location.state.query;
  const navigate = useNavigate();

  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    getSearchedAnime(query);
  }, [query]);

  function handleGoBack() {
    navigate(-1);
  }

  function getSearchedAnime(query) {
    fetch(`https://api.jikan.moe/v4/anime?q=${query}`)
      .then((response) => response.json())
      .then((results) => {
        setSearchData(results.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="section-header">
          {searchData.length > 0 ? (
            <p className="mt-2 text-xl text-neutral-400">
              Showing results for{" "}
              <strong className="text-neutral-300">{query}</strong>
            </p>
          ) : (
            <div className="h-[80vh] w-full flex flex-col justify-center items-center">
              <p className="mt-2 text-xl text-neutral-400">
                No results found for{" "}
                <strong className="text-neutral-300">{query}</strong>
              </p>
              <button
                onClick={handleGoBack}
                className="text-neutral-300 px-4 py-2 mt-4 rounded-full bg-primaryColor hover:bg-red-600 transition-all"
              >
                Go back
              </button>
            </div>
          )}
        </div>
        <div
          className="popular-container
                    grid gap-4 md:gap-6 justify-between 
                    grid-cols-2
                    sm:grid-cols-3
                    md:grid-cols-4
                    lg:grid-cols-6
                    mt-4"
        >
          {searchData?.map((anime) => {
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
      </div>
    </>
  );
}
