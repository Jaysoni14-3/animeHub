import { useEffect, useState } from "react";
import PopularAnime from "../components/PopularAnime";
import TopAnime from "../components/TopAnime";
import UpComingAnime from "../components/UpComingAnime";
import Manga from "../components/Manga";

/*
Check this link for homepage design inspiration
    https://dribbble.com/shots/6823172-Anime-Streaming-Service-Design 
*/

export default function HomePage() {
  // data for TopAnime RecommendedAnimes PopularAnime
  const [animeData, setAnimeData] = useState([]);

  // data for upcoming component
  const [upComingAnime, setUpcomingAnime] = useState([]);
  const [mangaData, setMangaData] = useState([]);

  useEffect(() => {
    getAnimeData();
    getUpcomingAnimes();
    getManga();
  }, []);

  function getAnimeData() {
    fetch("https://api.jikan.moe/v4/top/anime")
      .then((response) => response.json())
      .then((result) => {
        // setTopAnime(result?.data?.slice(0, 5));
        setAnimeData(result?.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function getUpcomingAnimes() {
    fetch("https://api.jikan.moe/v4/seasons/upcoming?limit=12")
      .then((res) => res.json())
      .then((res) => {
        setUpcomingAnime(res?.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function getManga() {
    fetch("https://api.jikan.moe/v4/manga")
      .then((res) => res.json())
      .then((res) => {
        setMangaData(res?.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  return (
    <>
      <UpComingAnime data={upComingAnime} />
      <TopAnime data={animeData} />
      <PopularAnime data={animeData} />
      <Manga data={mangaData} />
    </>
  );
}
