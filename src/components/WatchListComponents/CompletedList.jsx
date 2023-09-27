export default function CompletedList({ completedArray, removeFromWatchList }) {
  return (
    <>
      <section className="completed-list mt-4">
        <div className="section-header mt-2 mb-2">
          <h1 className="text-xl text-textWhite uppercase">
            Completed Watching
          </h1>
        </div>
        <div className="section-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {completedArray?.map((anime) => (
            <div
              className="group/anime-card hover:bg-neutral-800 ease-in-out flex border border-neutral-500 hover:boreder-neutral-100 hover:shadow-lg rounded-lg overflow-hidden"
              key={anime.animeId}
            >
              <img
                src={anime.animeImage}
                className="w-24 object-cover group-hover/anime-card:scale-105 transition-all ease-in-out"
                alt={anime.animeName}
              />
              <div className="card-body p-2 flex flex-col">
                <a
                  href={`/anime-details/${anime.animeId}`}
                  className="anime-name text-textWhite"
                >
                  {anime.animeName}
                </a>
                <div className="button-container hidden group-hover/anime-card:flex flex-col sm:flex-row gap-2 mt-auto ease-in-out">
                  <button
                    id={anime.animeId}
                    onClick={removeFromWatchList}
                    className="flex text-center gap-2 px-4 py-2 rounded-lg text-textWhite font-thin text-sm border border-red-600 hover:bg-neutral-700 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
