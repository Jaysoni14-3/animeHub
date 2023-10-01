import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterCard from "../components/AnimeDetailsComponents/CharacterCard";
import AnimeDetailsRight from "../components/AnimeDetailsComponents/AnimeDetailsRight";
import AnimeDetailsLeft from "../components/AnimeDetailsComponents/AnimeDetailsLeft";
import RelatedAnime from "../components/AnimeDetailsComponents/RelatedAnime";
import AnimeImages from "../components/AnimeDetailsComponents/AnimeImages";
import Modal from "../components/Modal";
import AnimeDetailsSkeleton from "./Skeleton-pages/AnimeDetailsSkeleton";

export default function AnimeDetailsPage() {
  const { id } = useParams();
  const [animeData, setAnimeData] = useState([]);
  // console.log(animeData);
  const [characterDetails, setCharactersDetails] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [animeDetailsLoading, setAnimeDetailsLoading] = useState(false);

  var animeList;
  // JSON.parse(localStorage.getItem("ANIME_WATCH_LIST")) || [];

  if (localStorage.getItem("ANIME_WATCH_LIST") !== null) {
    animeList = JSON.parse(localStorage.getItem("ANIME_WATCH_LIST"));
  } else {
    // console.log("ANIME_WATCH_LIST has nothing in it");
    animeList = [];
  }

  // console.log(animeList);

  useEffect(() => {
    getAnimeDetails(id);
    getAnimeCharacters(id);
  }, [id]);

  // only send 6 character details
  var sixCharacterCards = characterDetails?.slice(0, 6);

  const openModal = () => {
    setIsModalOpen((prev) => !prev);
    document.body.classList.add("overflow-hidden");
    document.body.classList.add("backdrop-blur-md");
    window.scrollTo(0, 0);
  };

  const closeModal = () => {
    setIsModalOpen((prev) => !prev);
    document.body.classList.remove("overflow-hidden");
  };

  function getAnimeDetails(id) {
    setAnimeDetailsLoading(true);
    fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
      .then((response) => response.json())
      .then((results) => {
        setAnimeData(results.data);
        setAnimeDetailsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function getAnimeCharacters(id) {
    fetch(`https://api.jikan.moe/v4/anime/${id}/characters`)
      .then((response) => response.json())
      .then((results) => {
        setCharactersDetails(results.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  return (
    <>
      {animeDetailsLoading ? (
        <AnimeDetailsSkeleton />
      ) : (
        <>
          {animeData?.mal_id ? (
            <div>
              <section className="anime-details-page">
                <div className="anime-details-wrapper relative flex flex-col justify-between mt-4 py-8 lg:flex-row lg:gap-4">
                  {/* Overlay and bg image with blur */}
                  <div className="overlay absolute inset-0 bg-neutral-800 opacity-80 blur-xl -z-30"></div>
                  <div
                    className="absolute inset-0 blur-md bg-red-300 -z-50"
                    style={{
                      backgroundImage: `url(${animeData?.images?.jpg?.large_image_url})`,
                      width: `100%`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  {/* Left side */}
                  <AnimeDetailsLeft
                    animeData={animeData}
                    animeList={animeList}
                    id={id}
                  />
                  {/* Right side */}
                  <AnimeDetailsRight animeData={animeData} />
                </div>
              </section>
              {sixCharacterCards && (
                <section className="character-details mt-6">
                  <div className="flex justify-between">
                    <h2 className="section-header text-secondaryColor font-bold text-xl uppercase">
                      Characters & Voice Actors
                    </h2>
                    {characterDetails?.length > 6 ? (
                      <button
                        onClick={openModal}
                        className="text-textWhite opacity-50 hover:opacity-100 hover:underline hover:text-skyBlue transition-all"
                      >
                        Show all
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                  <CharacterCard characterDetails={sixCharacterCards} />
                </section>
              )}
              <section className="anime-photos mt-4">
                <h2 className="section-header mb-2 text-secondaryColor font-bold text-xl uppercase">
                  Images
                </h2>
                <AnimeImages id={id} />
              </section>
              <section className="related-anime mt-4">
                <RelatedAnime id={id} />
              </section>
            </div>
          ) : (
            ""
          )}
        </>
      )}

      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        characterDetails={characterDetails}
      />
    </>
  );
}
