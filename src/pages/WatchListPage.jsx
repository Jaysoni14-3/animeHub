import CompletedList from "../components/WatchListComponents/CompletedList";
import WatchList from "../components/WatchListComponents/WatchList";

export default function WatchListPage() {
  var animeList;

  if (localStorage.getItem("ANIME_WATCH_LIST") !== null) {
    animeList = JSON.parse(localStorage.getItem("ANIME_WATCH_LIST"));
  } else {
    console.log("ANIME_WATCH_LIST has nothing in it");
    animeList = [];
  }

  // console.log(animeList);

  const watchListArray = animeList.filter((anime) => anime.status === false);
  const completedArray = animeList.filter((anime) => anime.status === true);

  // Change the status anime if completed watching
  const changeStatus = (e) => {
    var selectedAnimeId = parseInt(e.target.id);
    var newArray = animeList.map((anime) =>
      anime.animeId === selectedAnimeId
        ? { ...anime, status: !anime.status }
        : anime
    );

    localStorage.setItem("ANIME_WATCH_LIST", JSON.stringify(newArray));
    window.location.href = "/watch-list";
  };

  // Remove an anime from the list
  const removeFromWatchList = (e) => {
    var selectedAnimeId = parseInt(e.target.id);
    const confirmMessage = window.confirm(
      "Hello!\nAre you sure you want to delete this item? This action cannot be undone."
    );

    if (confirmMessage) {
      var newArray = animeList.filter(
        (anime) => anime.animeId !== selectedAnimeId
      );
      alert("Anime removed form your watch list");
      window.location.href = "/watch-list";
    } else {
      return;
    }

    localStorage.setItem("ANIME_WATCH_LIST", JSON.stringify(newArray));
  };

  return (
    <>
      {animeList.length !== 0 ? (
        <>
          {watchListArray?.length !== 0 ? (
            <WatchList
              removeFromWatchList={removeFromWatchList}
              animeList={animeList}
              changeStatus={changeStatus}
            />
          ) : (
            ""
          )}
          {completedArray?.length !== 0 ? (
            <CompletedList
              removeFromWatchList={removeFromWatchList}
              completedArray={completedArray}
              changeStatus={changeStatus}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center mt-10">
          <p className="text-textWhite my-10">
            You have no anime added to your watch list
          </p>
          <button
            onClick={() => (window.location.href = "/anime")}
            className="px-4 py-2 rounded-lg bg-secondaryColor hover:bg-[#ffe657] transition"
          >
            Explore animes
          </button>
        </div>
      )}
    </>
  );
}
