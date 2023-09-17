import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaPlay, FaPlus } from "react-icons/fa";
import CharacterCard from "../components/CharacterCard";

export default function AnimeDetailsPage() {
  const { id } = useParams();
  const [animeData, setAnimeData] = useState([]);
  const [characterDetails, setCharactersDetails] = useState([]);

  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    // Call the function that gets api data
    getAnimeDetails(id);
    getAnimeCharacters(id);
  }, [id]);

  // console.log(characterDetails);

  // Fetch Characters
  // https://api.jikan.moe/v4/anime/${id}/characters

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

  function handleShowMore() {
    setShowMore((prev) => !prev);
  }

  const animeProducers = animeData?.producers
    ?.map((producer) => producer.name)
    .join(", ");

  function handleTrailerBtn() {
    window.open(
      `https://www.youtube.com/watch?v=${animeData.trailer.youtube_id}`
    );
  }

  /* 
    // images.jpg.large_image_url
    // title
    // rating
    // type
    // duration
    // trailer
    // synopsis
    // title_japanese
    // title_synonyms
    // aired.string
    // genres
    // producers.name
    // year
    // episodes
    // rank
    // score / scored_by
    // streaming
  */

  /*
      character.mal_id
      character.images.jpg.image_url
      character.name
      character.role
      voice_actors.person.mal_id
      voice_actors.person.images.jpg.image_url
      voice_actors.person.name
      voice_actors.person.language
    */

  return (
    <>
      {animeData.mal_id && (
        <>
          <section className="anime-details-page">
            <div className="anime-details-wrapper relative flex flex-col py-8 lg:flex-row lg:gap-4">
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
              <div className="anime-detail-content flex flex-col min-[570px]:flex-row min-[570px]:gap-4">
                <div className="anime-poster flex h-[207px] min-[570px]:h-[266px] min-w-[200px]">
                  <img
                    className="h-full mx-auto lg:w-full"
                    src={animeData.images.jpg.large_image_url}
                    alt={animeData.title}
                  />
                </div>
                <div className="anime-details mt-4 flex flex-col items-center min-[570px]:mt-0 min-[570px]:items-start min-[570px]  text-textWhite">
                  <div className="title">
                    {animeData.title ? (
                      <h1 className="text-textWhite text-3xl font-semibold">
                        {animeData?.title}
                      </h1>
                    ) : (
                      <h1 className="text-textWhite text-2xl font-semibold">
                        {animeData?.titles[0].title}
                      </h1>
                    )}
                  </div>
                  <div className="additional-info mt-2 flex items-center gap-2">
                    <div className="rating">
                      {animeData.rating && (
                        <span className="text-sm">{animeData.rating}</span>
                      )}
                    </div>
                    <div className="seperator bg-neutral-500 h-1 w-1 rounded-full"></div>
                    <div className="type">
                      {animeData.type && (
                        <span className="text-sm">{animeData.type}</span>
                      )}
                    </div>
                    <div className="seperator bg-neutral-500 h-1 w-1 rounded-full"></div>
                    <div className="duration">
                      {animeData.duration && (
                        <span className="text-sm">{animeData.duration}</span>
                      )}
                    </div>
                  </div>
                  <div className="btn-container mt-2 flex gap-2 text-textBlack">
                    <button
                      onClick={handleTrailerBtn}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondaryColor"
                    >
                      <FaPlay />
                      Trailer
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white ">
                      <FaPlus />
                      Add to list
                    </button>
                  </div>
                  <div className="overview mt-4 lg:pe-10">
                    {animeData.synopsis && (
                      <>
                        <label className="text-neutral-300">Overview:</label>
                        <p className="mt-1 font-normal text-textWhite">
                          {showMore
                            ? `${animeData.synopsis.substring(
                                0,
                                animeData.synopsis.length
                              )}`
                            : `${animeData.synopsis.substring(0, 250)}`}
                          {/* Add show more button if description text is more than 250 characters */}
                          {animeData.synopsis.length > 250 ? (
                            <button
                              onClick={handleShowMore}
                              className="ms-2 px-1 rounded-full bg-yellow-200 text-sm text-black"
                            >
                              {showMore ? "- Show less" : "- Show more"}
                            </button>
                          ) : (
                            ""
                          )}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
              {/* Right side */}
              <div className="anime-detail-information flex flex-col gap-2 relative bg-[rgba(0,0,0,0.1)] mt-4 min-[570px]:mt-0 px-3 py-2 rounded-sm  min-w-[270px] text-textWhite">
                <div className="japanese-name">
                  {animeData.title_japanese && (
                    <div className="flex items-start gap-2">
                      <label className="text-gray-100/50">Japanese:</label>
                      <p>{animeData.title_japanese}</p>
                    </div>
                  )}
                </div>
                <div className="synonyms">
                  {animeData.title_synonyms && (
                    <div className="flex items-start gap-2">
                      <label className="text-neutral-400">Synonyms:</label>
                      <p>{animeData.title_synonyms}</p>
                    </div>
                  )}
                </div>
                <div className="aired">
                  {animeData.aired.string && (
                    <div className="flex items-start gap-2">
                      <label className="text-neutral-400">Aired:</label>
                      <p>{animeData.aired.string}</p>
                    </div>
                  )}
                </div>
                <div className="premiered">
                  {animeData.season && (
                    <div className="flex items-start gap-2">
                      <label className="text-neutral-400">Premiered:</label>
                      <p>
                        {animeData.season} {animeData.year}
                      </p>
                    </div>
                  )}
                </div>
                <div className="duration">
                  {animeData.duration && (
                    <div className="flex items-start gap-2">
                      <label className="text-neutral-400">Duration:</label>
                      <p>{animeData.duration}</p>
                    </div>
                  )}
                </div>
                <div className="episodes">
                  {animeData.episodes && (
                    <div className="flex items-start gap-2">
                      <label className="text-neutral-400">Episodes:</label>
                      <p>{animeData.episodes}</p>
                    </div>
                  )}
                </div>
                <div className="status">
                  {animeData.status && (
                    <div className="flex items-start gap-2">
                      <label className="text-neutral-400">Status:</label>
                      <p>{animeData.status}</p>
                    </div>
                  )}
                </div>

                <div className="score">
                  {animeData.score && (
                    <div className="flex items-start gap-2">
                      <label className="text-neutral-400">Score:</label>
                      <p>
                        {animeData.score} / {animeData.scored_by}
                      </p>
                    </div>
                  )}
                </div>
                <div className="horizontal-seperator bg-gray-600 my-1 h-[1px]"></div>
                <div className="genre">
                  {animeData.genres && (
                    <div className="flex items-start flex-wrap gap-2">
                      <label className="text-neutral-400">Genres:</label>
                      {animeData.genres.map((genre) => (
                        <p
                          key={genre.mal_id}
                          className="me-1 px-1 py-1 text-sm bg-neutral-600 rounded-full hover:text-secondaryColor cursor-default"
                        >
                          {genre.name}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
                <div className="horizontal-seperator bg-gray-600 my-1 h-[1px]"></div>
                <div className="studios">
                  {animeData.studios && (
                    <div className="flex items-start flex-wrap gap-2">
                      <label className="text-neutral-400">Studios:</label>
                      {animeData.studios.map((studio) => (
                        <p key={studio.mal_id}>{studio.name}</p>
                      ))}
                    </div>
                  )}
                </div>
                <div className="producers">
                  {animeData.producers && (
                    <div className="flex items-start flex-wrap gap-2">
                      <label className="text-neutral-400">Producers:</label>
                      {animeProducers}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
          <CharacterCard characterDetails={characterDetails} />
        </>
      )}
    </>
  );
}
