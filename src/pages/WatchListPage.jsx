export default function WatchListPage() {
  var animeList;

  if (localStorage.getItem("ANIME_WATCH_LIST") !== null) {
    animeList = JSON.parse(localStorage.getItem("ANIME_WATCH_LIST"));
  } else {
    console.log("ANIME_WATCH_LIST has nothing in it");
    animeList = [];
  }

  return (
    <>
      {animeList.length !== 0 ? (
        <section className="watch-list mt-4">
          <div className="section-header mt-2 mb-2">
            <h1 className="text-xl text-textWhite uppercase">
              Your watch List
            </h1>
          </div>
          <div className="section-body-test grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {animeList?.map((anime) => (
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
                    <button className="flex text-center gap-2 px-4 py-2 rounded-lg text-textWhite font-thin text-sm border border-green-600 hover:bg-neutral-700 transition">
                      Completed
                    </button>
                    <button className="flex text-center gap-2 px-4 py-2 rounded-lg text-textWhite font-thin text-sm border border-red-600 hover:bg-neutral-700 transition">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <p>You have no anime added to your watch list</p>
      )}
    </>
  );
}

{
}
