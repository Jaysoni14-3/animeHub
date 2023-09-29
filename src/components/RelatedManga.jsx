import { useEffect, useState } from "react";
import VerticalMangaCard from "./VerticalMangaCard";

export default function RelatedManga({ id }) {
  const [relatedManga, setRelatedManga] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getRelatedAnimes(id);
    }, 1000);
  }, [id]);

  // console.log(relatedManga);

  const getRelatedAnimes = (id) => {
    fetch(`https://api.jikan.moe/v4/manga/${id}/recommendations`)
      .then((response) => response.json())
      .then((results) => {
        setRelatedManga(results.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return relatedManga.length !== 0 ? (
    <>
      <h2 className="section-header text-secondaryColor font-bold text-xl uppercase">
        Related Manga
      </h2>
      <div className="anime-container grid gap-4 md:gap-6 justify-between  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
        {relatedManga.slice(0, 4).map((manga) => {
          return (
            <VerticalMangaCard
              key={manga.entry.mal_id}
              id={manga.entry.mal_id}
              imageSrc={manga.entry.images.jpg.large_image_url}
              title={manga.entry.title}
            />
          );
        })}
      </div>
    </>
  ) : (
    ""
  );
}
