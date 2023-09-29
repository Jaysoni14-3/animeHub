import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MangaDetailsImages from "../components/MangaDetailsImages";
import RelatedManga from "../components/RelatedManga";

export default function MangaDetailsPage() {
  const { id } = useParams();
  const [mangaData, setMangaData] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    // Call the function that gets api data
    getMangaDetails(id);
  }, [id]);
  // console.log(mangaData);

  function handleShowMore() {
    setShowMore((prev) => !prev);
  }

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

  return mangaData.mal_id ? (
    <>
      <section className="manga-details-page">
        <div className="manga-details-wrapper relative flex flex-col justify-between mt-4 py-8 lg:flex-row lg:gap-4">
          {/* Overlay and bg image with blur */}
          <div className="overlay absolute inset-0 bg-neutral-800 opacity-80 blur-xl -z-30"></div>
          <div
            className="absolute inset-0 blur-md bg-red-300 -z-50"
            style={{
              backgroundImage: `url(${mangaData?.images.jpg.large_image_url})`,
              width: `100%`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          {/* LEFT  */}
          <div className="manga-detail-left-wrapper flex flex-col items-start">
            <div className="manga-details-left-top-section flex max-[570px]:flex-col min-[570px]:gap-2 lg:gap-4 mb-4">
              <div className="manga-poster flex h-[207px] min-[570px]:flex-col min-[570px]:h-[266px] min-w-[200px]">
                <img
                  className="h-full mx-auto w-max"
                  src={mangaData.images.jpg.large_image_url}
                  alt={mangaData.title}
                />
              </div>
              <div className="manga-details mt-4 flex flex-col items-center min-[570px]:mt-0 min-[570px]:items-start min-[570px]  text-textWhite">
                {/* Manga title */}
                <div className="title">
                  {mangaData.title ? (
                    <h1 className="text-textWhite text-3xl text-center font-semibold">
                      {mangaData?.title}
                    </h1>
                  ) : (
                    <h1 className="text-textWhite text-2xl text-center font-semibold">
                      {mangaData?.titles[0].title}
                    </h1>
                  )}
                </div>
                <div className="additional-info mt-2 flex flex-wrap items-center gap-2">
                  {/* Type */}
                  <div className="type">
                    {mangaData.type && (
                      <span className="text-sm">{mangaData.type}</span>
                    )}
                  </div>
                </div>

                {/* Manga Overview  */}
                <div className="overview mt-4 lg:pe-10">
                  {mangaData.synopsis && (
                    <>
                      <label className="text-neutral-300">Overview:</label>
                      <p className="mt-1 font-normal text-textWhite">
                        {showMore
                          ? `${mangaData.synopsis.substring(
                              0,
                              mangaData.synopsis.length
                            )}`
                          : `${mangaData.synopsis.substring(0, 250)}`}
                        {/* Add show more button if description text is more than 250 characters */}
                        {mangaData.synopsis.length > 250 ? (
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
          {/* Right */}
          <div className=" manga-detail-information flex flex-col gap-2 relative bg-[rgba(0,0,0,0.1)] mt-4 min-[570px]:mt-0 px-3 py-2 rounded-sm sm:min-w-[350px] lg:w-[350px] text-textWhite">
            <div className="japanese-name">
              {mangaData.title_japanese && (
                <div className="flex items-start gap-2">
                  <label className="text-gray-100/50">Japanese:</label>
                  <p>{mangaData.title_japanese}</p>
                </div>
              )}
            </div>
            <div className="synonyms">
              {mangaData?.title_synonyms && (
                <div className="flex items-start gap-2">
                  <label className="text-neutral-400">Synonyms:</label>
                  <p>{mangaData?.title_synonyms}</p>
                </div>
              )}
            </div>
            {/* Chapters */}
            <div className="chapters">
              {mangaData.chapters && (
                <div className="flex items-start gap-2">
                  <label className="text-neutral-400">Chapters:</label>
                  <p>{mangaData.chapters}</p>
                </div>
              )}
            </div>
            {/* Volume */}
            <div className="volumes">
              {mangaData.volumes && (
                <div className="flex items-start gap-2">
                  <label className="text-neutral-400">Volumes:</label>
                  <p>{mangaData.volumes}</p>
                </div>
              )}
            </div>
            <div className="horizontal-seperator bg-gray-600 my-1 h-[1px]"></div>
            {mangaData?.authers?.length !== 0 ? (
              <div className="authers">
                <div className="flex items-start flex-wrap gap-2">
                  <label className="text-neutral-400">Authers:</label>
                  <div className="genre-container flex flex-wrap">
                    {mangaData.authors.map((auther) => (
                      <p key={auther.mal_id}>{auther.name}</p>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="aired">
              {mangaData.published.string && (
                <div className="flex items-start gap-2">
                  <label className="text-neutral-400">Published:</label>
                  <p>{mangaData.published.string}</p>
                </div>
              )}
            </div>
            <div className="status">
              {mangaData.status && (
                <div className="flex items-start gap-2">
                  <label className="text-neutral-400">Status:</label>
                  <p>{mangaData.status}</p>
                </div>
              )}
            </div>
            <div className="score">
              {mangaData.score && (
                <div className="flex items-start gap-2">
                  <label className="text-neutral-400">Score:</label>
                  <p>
                    {mangaData.score} / {mangaData.scored_by}
                  </p>
                </div>
              )}
            </div>
            <div className="rank">
              {mangaData.rank && (
                <div className="flex items-start gap-2">
                  <label className="text-neutral-400">Rank:</label>
                  <p>{mangaData.rank}</p>
                </div>
              )}
            </div>
            <div className="horizontal-seperator bg-gray-600 my-1 h-[1px]"></div>
            <div className="genre">
              {mangaData.genres && (
                <div className="flex items-start flex-wrap gap-2">
                  <label className="text-neutral-400">Genres:</label>
                  <div className="genre-container flex flex-wrap gap-1">
                    {mangaData.genres.map((genre) => (
                      <p
                        key={genre.mal_id}
                        className="px-2 py-1 text-sm font-[100] bg-neutral-600 rounded-full hover:text-secondaryColor cursor-default"
                      >
                        {genre.name}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="horizontal-seperator bg-gray-600 my-1 h-[1px]"></div>
            {/* links */}
            <div className="links">
              {mangaData.external && (
                <div className="flex items-start flex-wrap gap-2">
                  <label className="text-neutral-400">Links:</label>
                  <div className="external-container flex flex-wrap">
                    {mangaData.external.map((item, i) => (
                      <a
                        key={i}
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="me-2 text-sm font-[100] hover:text-skyBlue cursor-pointer hover:underline"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="anime-photos mt-4">
        <h2 className="section-header mb-2 text-secondaryColor font-bold text-xl uppercase">
          Images
        </h2>
        <MangaDetailsImages id={id} />
      </section>
      <section className="related-anime mt-4">
        <RelatedManga id={id} />
      </section>
    </>
  ) : (
    "Loading ..."
  );
}
