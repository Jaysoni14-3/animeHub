import { useState } from "react";
import { FaPlay, FaPlus } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";

export default function AnimeDetailsLeft({
  animeData,
  addToList,
  animeList,
  id,
}) {
  const [showMore, setShowMore] = useState(false);

  id = parseInt(id);

  function handleTrailerBtn() {
    window.open(
      `https://www.youtube.com/watch?v=${animeData.trailer.youtube_id}`
    );
  }

  function handleShowMore() {
    setShowMore((prev) => !prev);
  }

  // To check if this anime is already present in the users localstorage
  const isAnimeAdded = animeList.some((anime) => anime.animeId === id);

  return (
    <div className="anime-detail-left-wrapper flex flex-col items-start">
      <div className="anime-details-left-top-section flex max-[570px]:flex-col min-[570px]:gap-2 lg:gap-4 mb-4">
        <div className="anime-poster flex h-[207px] min-[570px]:flex-col min-[570px]:h-[266px] min-w-[200px]">
          <img
            className="h-full mx-auto w-max"
            src={animeData.images.jpg.large_image_url}
            alt={animeData.title}
          />
        </div>
        <div className="anime-details mt-4 flex flex-col items-center min-[570px]:mt-0 min-[570px]:items-start min-[570px]  text-textWhite">
          {/* Anime title */}
          <div className="title">
            {animeData.title ? (
              <h1 className="text-textWhite text-3xl text-start font-semibold">
                {animeData?.title}
              </h1>
            ) : (
              <h1 className="text-textWhite text-2xl text-start font-semibold">
                {animeData?.titles[0].title}
              </h1>
            )}
          </div>
          <div className="additional-info mt-2 flex items-center flex-wrap gap-2">
            {/* Ratings */}
            <div className="rating">
              {animeData.rating && (
                <span className="text-sm">{animeData.rating}</span>
              )}
            </div>
            <div className="seperator bg-neutral-500 h-1 w-1 rounded-full"></div>
            {/* Type */}
            <div className="type">
              {animeData.type && (
                <span className="text-sm">{animeData.type}</span>
              )}
            </div>
            <div className="seperator bg-neutral-500 h-1 w-1 rounded-full"></div>
            {/* Duration */}
            <div className="duration">
              {animeData.duration && (
                <span className="text-sm">{animeData.duration}</span>
              )}
            </div>
          </div>
          <div className="btn-container mt-2 flex flex-col min-[450px]:flex-row gap-2 text-textBlack">
            {/* traile Button */}
            <button
              onClick={handleTrailerBtn}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondaryColor hover:bg-[#ffe657] transition"
            >
              <FaPlay />
              Trailer
            </button>
            {/* Add button */}
            {isAnimeAdded ? (
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-green-600 hover:bg-green-600 transition">
                <BsCheck className="text-2xl" /> Added to watch list
              </button>
            ) : (
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white hover:bg-neutral-200 transition"
                onClick={() => addToList()}
              >
                <FaPlus /> Add to list
              </button>
            )}
          </div>
          {/* Anime Overview  */}
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
    </div>
  );
}
