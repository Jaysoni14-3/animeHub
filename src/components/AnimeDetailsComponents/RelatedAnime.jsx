import { useEffect, useState } from "react";
import AnimeCard from "../AnimeCard";

export default function RelatedAnime({ id }) {
  const [relatedAnime, setRelatedAnime] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getRelatedAnimes(id);
    }, 1000);
  }, [id]);

  const getRelatedAnimes = (id) => {
    fetch(`https://api.jikan.moe/v4/anime/${id}/recommendations`)
      .then((response) => response.json())
      .then((results) => {
        setRelatedAnime(results.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return relatedAnime.length !== 0 ? (
    <>
      <h2 className="section-header text-secondaryColor font-bold text-xl uppercase">
        Related Anime
      </h2>
      <div className="anime-container grid gap-4 md:gap-6 justify-between  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-4">
        {relatedAnime?.slice(0, 6).map((anime) => {
          return (
            <AnimeCard
              key={anime.entry.mal_id}
              id={anime.entry.mal_id}
              imageSrc={anime.entry.images.jpg.large_image_url}
              title={anime.entry.title}
            />
          );
        })}
      </div>
    </>
  ) : (
    ""
  );
}
