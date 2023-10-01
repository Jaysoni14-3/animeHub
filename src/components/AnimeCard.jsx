import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AnimeCard({ id, imageSrc, title, rating, type }) {
  return (
    <Link
      id={id}
      to={`/anime-details/${id}`}
      className="group/anime-card relative shadow-lg bg-[#232222] cursor-pointer rounded-lg overflow-hidden"
    >
      <figure className="anime-img-container overflow-hidden">
        <img
          className="h-[265px] group-hover/anime-card:scale-105 group-hover/anime-card:brightness-105 w-full object-cover transition-all ease-in"
          src={imageSrc}
          alt=""
        />
      </figure>

      <div className="anime-description flex flex-col justify-between mt-1 p-2">
        <p className="anime-name mb-auto text-base line-clamp-2 text-neutral-100 opacity-70 group-hover/anime-card:opacity-100 transition-all">
          {title}
        </p>

        <div className="rating-duration-container mt-2 flex items-center">
          {type && <p className="text-neutral-500">{type}</p>}
          {rating && (
            <p className="flex items-center text-neutral-400 ms-2">
              <FaStar className="me-1 text-secondaryColor" /> {rating}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
