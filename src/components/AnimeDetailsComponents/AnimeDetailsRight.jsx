export default function AnimeDetailsRight({ animeData }) {
  const animeProducers = animeData?.producers
    ?.map((producer) => producer.name)
    .join(", ");
  return (
    <div className="anime-detail-right-wrapper">
      {/* Right side */}
      <div className=" anime-detail-information flex flex-col gap-2 relative bg-[rgba(0,0,0,0.1)] mt-4 min-[570px]:mt-0 px-3 py-2 rounded-sm sm:min-w-[350px] lg:w-[350px] text-textWhite">
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
              <div className="genre-container flex flex-wrap">
                {animeData.genres.map((genre) => (
                  <p
                    key={genre.mal_id}
                    className="me-1 px-2 py-1 text-sm font-[100] bg-neutral-600 rounded-full hover:text-secondaryColor cursor-default"
                  >
                    {genre.name}
                  </p>
                ))}
              </div>
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
  );
}
