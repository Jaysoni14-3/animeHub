import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterCard from "../components/AnimeDetailsComponents/CharacterCard";
import AnimeDetailsRight from "../components/AnimeDetailsComponents/AnimeDetailsRight";
import AnimeDetailsLeft from "../components/AnimeDetailsComponents/AnimeDetailsLeft";
import RelatedAnime from "../components/AnimeDetailsComponents/RelatedAnime";
import AnimeImages from "../components/AnimeDetailsComponents/AnimeImages";
import Modal from "../components/Modal";

export default function AnimeDetailsPage() {
  const { id } = useParams();
  const [animeData, setAnimeData] = useState([]);
  // console.log(animeData);
  const [characterDetails, setCharactersDetails] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  var animeList;
  // JSON.parse(localStorage.getItem("ANIME_WATCH_LIST")) || [];

  if (localStorage.getItem("ANIME_WATCH_LIST") !== null) {
    animeList = JSON.parse(localStorage.getItem("ANIME_WATCH_LIST"));
  } else {
    console.log("ANIME_WATCH_LIST has nothing in it");
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
    fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
      .then((response) => response.json())
      .then((results) => {
        setAnimeData(results.data);
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

  // Add an anime to the list and push it to the local storage
  function addToList() {
    const animeToAdd = {
      animeId: animeData.mal_id,
      animeImage: animeData.images.jpg.large_image_url,
      animeName: animeData.title ? animeData.title : animeData.titles[0].title,
      status: false,
    };

    // Check if it already exists in our local storage
    const isDuplicate = animeList.some(
      (anime) => anime.animeId === animeToAdd.animeId
    );

    // if its not found in our local storage then add it to local storage
    if (!isDuplicate) {
      animeList.push(animeToAdd);
      localStorage.setItem("ANIME_WATCH_LIST", JSON.stringify(animeList));
      window.location.href = `/anime-details/${id}`;
    }
    // else change the button text to "already in list"
    else {
      alert("anime already in your watch list");
    }
  }

  return (
    <>
      {animeData?.mal_id ? (
        <>
          <section className="anime-details-page">
            <div className="anime-details-wrapper relative flex flex-col justify-between mt-4 py-8 lg:flex-row lg:gap-4">
              {/* Overlay and bg image with blur */}
              <div className="overlay absolute inset-0 bg-neutral-800 opacity-80 blur-xl -z-30"></div>
              <div
                className="absolute inset-0 blur-md bg-red-300 -z-50"
                style={{
                  backgroundImage: `url(${animeData.images.jpg.large_image_url})`,
                  width: `100%`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              {/* Left side */}
              <AnimeDetailsLeft
                animeData={animeData}
                addToList={addToList}
                animeList={animeList}
                id={id}
              />
              {/* Right side */}
              <AnimeDetailsRight animeData={animeData} />
            </div>
          </section>
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
          <section className="anime-photos mt-4">
            <h2 className="section-header mb-2 text-secondaryColor font-bold text-xl uppercase">
              Images
            </h2>
            <AnimeImages id={id} />
          </section>
          <section className="related-anime mt-4">
            {/* <h2 className="section-header text-secondaryColor font-bold text-xl uppercase">
              Related Anime
            </h2> */}
            <RelatedAnime id={id} />
          </section>

          <Modal
            isOpen={isModalOpen}
            closeModal={closeModal}
            characterDetails={characterDetails}
          />
        </>
      ) : (
        <h1>Loading ...</h1>
      )}
    </>
  );
}
