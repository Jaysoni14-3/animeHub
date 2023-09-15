import { useEffect, useState } from "react";
import VerticalMangaCard from "../components/VerticalMangaCard";

export default function MangaPage() {
  const [mangaData, setMangaData] = useState([]);
  const [hasNextPage, setNextPage] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getAllManga(currentPage);
  }, [currentPage]);

  // On load more click change the currentPage and send new api request to load more anime on the page
  function handleClick() {
    setCurrentPage((prevCount) => prevCount + 1);
  }

  const getAllManga = (currentPage) => {
    fetch(`https://api.jikan.moe/v4/manga?page=${currentPage}`)
      .then((res) => res.json())
      .then((res) => {
        setMangaData((prevData) => [...prevData, ...res.data]);
        setNextPage(res?.pagination.has_next_page);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // console.log(mangaData);

  return (
    <div className="flex flex-col">
      <div
        className="manga-container
                  grid gap-6 justify-between 
                  grid-cols-[repeat(auto-fill,100%)] 
                  min-[530px]:grid-cols-[1fr,1fr,1fr,1fr]
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
  );
}
