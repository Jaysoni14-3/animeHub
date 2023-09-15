import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function AnimeDetailsPage() {
  const { id } = useParams();
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    // Call the function that gets api data
    getAnimeDetails(id);
  }, []);

  console.log(animeData);

  function getAnimeDetails(id) {
    fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
      .then((response) => response.json())
      .then((results) => {
        setAnimeData(results.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  return (
    <>
      <h1 className="text-textWhite">Anime Details for {id}</h1>
    </>
  );
}
