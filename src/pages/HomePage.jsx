import { useEffect, useState } from "react";
import PopularAnime from "../components/PopularAnime";
import TopAnime from "../components/TopAnime";
import UpComingAnime from "../components/UpComingAnime";
import Manga from "../components/Manga";
import HomePageSkeleton from "./Skeleton-pages/HomePageSkeleton";
import ApiErrorPage from "./ApiErrorPage";

export default function HomePage() {
  // data for TopAnime RecommendedAnimes PopularAnime is filtered from animeData
  const [animeData, setAnimeData] = useState([]);

  // data for upcoming component
  const [upComingAnime, setUpcomingAnime] = useState([]);

  // data for manga component
  const [mangaData, setMangaData] = useState([]);

  const [animeLoading, setAnimeLoading] = useState(false);
  const [upcommingloading, setUpcommingLoading] = useState(false);
  const [mangaLoading, setMangaLoading] = useState(false);

  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    getAnimeData();
    getUpcomingAnimes();
    getManga();
  }, []);

  function getAnimeData() {
    setAnimeLoading(true);
    fetch("https://api.jikan.moe/v4/top/anime")
      .then((response) => {
        if (response.status === 429) {
          console.log("429 occurred");
          setApiError(true);
        } else if (response.ok) {
          setAnimeLoading(false);
          setApiError(false);
          return response.json();
        }
      })
      .then((result) => {
        setAnimeData(result?.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function getUpcomingAnimes() {
    setUpcommingLoading(true);
    fetch("https://api.jikan.moe/v4/seasons/upcoming?limit=12")
      .then((response) => {
        if (response.status === 429) {
          console.log("429 occurred");
          setApiError(true);
        } else if (response.ok) {
          setUpcommingLoading(false);
          setApiError(false);
          return response.json();
        }
      })
      .then((result) => {
        setUpcomingAnime(result?.data);
        setUpcommingLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function getManga() {
    setMangaLoading(true);
    fetch("https://api.jikan.moe/v4/manga")
      .then((response) => {
        if (response.status === 429) {
          console.log("429 occurred");
          setApiError(true);
        } else if (response.ok) {
          setMangaLoading(false);
          setApiError(false);
          return response.json();
        }
      })
      .then((result) => {
        setMangaData(result?.data);
        setMangaLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  return (
    /*If 
      the api sends an error of exiding limit render an button that reloads the page
    else
      render the skeleton page while the page is being loaded when the page has finished loading render the components
    */
    <>
      {apiError ? (
        <ApiErrorPage />
      ) : animeLoading || upcommingloading || mangaLoading ? (
        <HomePageSkeleton />
      ) : (
        <>
          <UpComingAnime data={upComingAnime} />
          <TopAnime data={animeData} />
          <PopularAnime data={animeData} />
          <Manga data={mangaData} />
        </>
      )}
    </>
  );
}
