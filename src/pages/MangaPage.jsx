import { useEffect, useState } from "react";
import VerticalMangaCard from "../components/VerticalMangaCard";
import MangaPageSkeleton from "./Skeleton-pages/MangaPageSkeleton";
import ApiErrorPage from "./ApiErrorPage";

export default function MangaPage() {
  const [mangaData, setMangaData] = useState([]);
  const [hasNextPage, setNextPage] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [mangaLoading, setMangaLoading] = useState(false);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    getAllManga(currentPage);
  }, [currentPage]);

  // On load more click change the currentPage and send new api request to load more anime on the page
  function handleClick() {
    setCurrentPage((prevCount) => prevCount + 1);
  }

  const getAllManga = (currentPage) => {
    setMangaLoading(true);
    fetch(`https://api.jikan.moe/v4/manga?page=${currentPage}`)
      .then((response) => {
        if (response.status === 429) {
          console.log("api error ");
          setApiError(true);
        } else if (response.ok) {
          setApiError(false);
          return response.json();
        }
      })
      .then((res) => {
        setMangaData((prevData) => [...prevData, ...res.data]);
        setNextPage(res?.pagination.has_next_page);
        setMangaLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // console.log(mangaData);

  return (
    <>
      {apiError ? (
        <ApiErrorPage />
      ) : mangaLoading ? (
        <MangaPageSkeleton />
      ) : (
        <div className="flex flex-col">
          <div
            className="manga-container
                  grid gap-6 justify-between 
                  grid-cols-[repeat(auto-fill,100%)] 
                  min-[450px]:grid-cols-[1fr,1fr]
                  min-[530px]:grid-cols-[1fr,1fr,1fr]
                  min-[760px]:grid-cols-[1fr,1fr,1fr,1fr]
                  mt-4"
          >
            {mangaData?.map((manga) => {
              return (
                <VerticalMangaCard
                  key={manga.mal_id}
                  id={manga.mal_id}
                  imageSrc={manga.images.jpg.large_image_url}
                  title={manga.titles[0].title}
                  rank={manga.rank}
                  score={manga.score}
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
      )}
    </>
  );
}
