import { useEffect, useState } from "react";

export default function AnimeImages({ id }) {
  const [animeImages, setAnimeImages] = useState([]);

  useEffect(() => {
    getAnimeImages(id);
  }, [id]);

  //   console.log(animeImages);

  const getAnimeImages = (id) => {
    fetch(`https://api.jikan.moe/v4/anime/${id}/pictures `)
      .then((response) => response.json())
      .then((results) => {
        setAnimeImages(results.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="anime-images pb-2 flex gap-4 flex-row overflow-x-scroll">
      {animeImages &&
        animeImages.map((image, i) => {
          return (
            <img
              className="w-[200px] h-auto rounded-lg"
              key={i}
              src={image.jpg.large_image_url}
              alt=""
            />
          );
        })}
    </div>
  );
}
