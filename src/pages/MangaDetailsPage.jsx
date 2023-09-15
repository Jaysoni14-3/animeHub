import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MangaDetailsPage() {
  const { id } = useParams();
  const [mangaData, setMangaData] = useState([]);

  useEffect(() => {
    // Call the function that gets api data
    getMangaDetails(id);
  }, []);

  console.log(mangaData);

  function getMangaDetails(id) {
    fetch(`https://api.jikan.moe/v4/manga/${id}/full`)
      .then((response) => response.json())
      .then((results) => {
        setMangaData(results.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  return (
    <>
      <h1 className="text-textWhite">
        Manga Details for{" "}
        <strong className="text-secondaryColor">{mangaData.title}</strong>
      </h1>
    </>
  );
}
