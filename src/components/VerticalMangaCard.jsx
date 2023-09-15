import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function VerticalMangaCard({
  id,
  imageSrc,
  title,
  rank,
  score,
}) {
  return (
    <>
      <Link
        to={`/manga-details/${id}`}
        className="group/manga-card flex flex-col cursor-pointer rounded-lg overflow-hidden bg-[#232222] border border-solid border-transparent hover:border-secondaryColor"
        id={id}
      >
        <figure className="manga-img-container overflow-hidden">
          <img
            src={imageSrc}
            className="h-[365px] group-hover/manga-card:scale-105 group-hover/manga-card:brightness-105 w-full object-cover transition-all ease-in"
            alt=""
          />
        </figure>
        <div className="manga-description flex flex-col justify-start p-4 w-full text-textWhite">
          <p className="manga-name text-lg group-hover/manga-card:text-secondaryColor transition-all mb-2">
            {title}
          </p>
          <div className="rank-rating-container flex items-center">
            <label className="font-thin text-neutral-400 opacity-80 me-2">
              Rank :{" "}
            </label>
            <p>{rank}</p>
            {score && (
              <p className="flex items-center text-neutral-400 ms-auto">
                <FaStar className="me-1 text-secondaryColor" /> {score}
              </p>
            )}
          </div>
        </div>
      </Link>
    </>
  );
}
