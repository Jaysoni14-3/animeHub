import { Link } from "react-router-dom";

export default function MangaCard({
  id,
  imageSrc,
  title,
  rank,
  authors,
  publishing,
  genres,
}) {
  return (
    <>
      <Link
        to={`/manga-details/${id}`}
        className="group/manga-card flex cursor-pointer rounded-lg overflow-hidden border border-solid border-transparent hover:border-secondaryColor"
        id={id}
      >
        <figure className="manga-img-container w-6/12 overflow-hidden">
          <img
            src={imageSrc}
            className="h-[265px] group-hover/manga-card:scale-105 group-hover/manga-card:brightness-105 w-full object-cover transition-all ease-in"
            alt=""
          />
        </figure>
        <div className="manga-description flex flex-col justify-start p-4 w-full text-textWhite">
          <p className="manga-name text-lg group-hover/manga-card:text-secondaryColor transition-all mb-2">
            {title}
          </p>
          {rank && (
            <div className="rank flex items-center mb-1">
              <label className="font-thin text-neutral-400 opacity-80 me-2">
                Rank :{" "}
              </label>
              <p>{rank}</p>
            </div>
          )}
          {authors && (
            <div className="authors flex items-start mb-1">
              <label className="font-thin text-neutral-400 opacity-80 me-2">
                Author :{" "}
              </label>
              <div className="author-name">
                {authors.map((author) => (
                  <p id={author.mal_id} key={author.mal_id}>
                    {author.name}
                  </p>
                ))}
              </div>
            </div>
          )}
          {publishing && (
            <div className="publishing flex items-center mb-1">
              <label className="font-thin text-neutral-400 opacity-80 me-2">
                Publishing :{" "}
              </label>
              <p>{publishing ? "Airing" : "Finished airing"}</p>
            </div>
          )}
          {genres && (
            <div className="genres flex items-center flex-wrap mb-1">
              <label className="font-thin text-neutral-400 opacity-80 me-2">
                genres :{" "}
              </label>
              {genres.slice(0, 3).map((genre) => (
                <span
                  key={genre.mal_id}
                  className="text-sm text-neutral-100 rounded-full me-1 mt-1 px-1 bg-neutral-700"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </>
  );
}
