import { useLocation, useNavigate } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export function Header() {
  const [searchText, setSearchText] = useState("");
  const [showMobileNav, setShowMobileNav] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate(`/search`, { state: { query: searchText } });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // navigate(`/search?${searchText}`);
    navigate(`/search`, { state: { query: searchText } });
  }

  return (
    <header className="bg-neutral-800/50 backdrop-blur-lg sticky top-0 z-50 shadow-sm px-4 xl:px-0 py-4">
      <nav className="container max-w-screen-xl flex items-center mx-auto ">
        <div className="logo">
          <h4 className="text-[#FF4500] text-xl font-bold">
            <a href="/">AnimeHub</a>
          </h4>
        </div>
        <div className="icons-container ms-auto min-[680px]:hidden">
          {showMobileNav ? (
            <FaTimes
              onClick={() => setShowMobileNav((prev) => !prev)}
              className="text-white text-xl cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={() => setShowMobileNav((prev) => !prev)}
              className="text-white text-xl cursor-pointer"
            />
          )}
        </div>

        <div
          className={`${
            showMobileNav
              ? "flex flex-col items-end absolute top-[60px] right-0 left-0 bg-neutral-900 p-4 pt-0 z-50"
              : "responsive-nav flex ms-auto flex-row items-center w-full max-[680px]:hidden"
          }`}
        >
          <div className="nav-links flex flex-col items-end text-sm text-neutral-400 min-[680px]:flex-row min-[680px]:items-center min-[680px]:ms-auto min-[680px]:me-auto">
            <li className="list-none px-2 py-4 min-[680px]:p-0">
              <a
                className={`${
                  location.pathname === "/"
                    ? "text-skyBlue border-b border-skyBlue"
                    : ""
                } py-2`}
                href="/"
              >
                Home
              </a>
            </li>
            <li className="list-none px-2 py-4 min-[680px]:p-0 min-[680px]:ms-8">
              <a
                className={`${
                  location.pathname === "/anime"
                    ? "text-skyBlue border-b border-skyBlue"
                    : ""
                } py-2`}
                href="/anime"
              >
                Anime
              </a>
            </li>
            <li className="list-none px-2 py-4 min-[680px]:p-0 cursor-pointer min-[680px]:ms-8">
              <a
                className={`${
                  location.pathname === "/manga"
                    ? "text-skyBlue border-b border-skyBlue"
                    : ""
                } py-2`}
                href="/manga"
              >
                Manga
              </a>
            </li>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="search-bar h-10 relative flex">
              <input
                className="rounded-lg ps-3 pe-2 py-1 rounded-tr-none rounded-br-none bg-neutral-200 text-textBlack focus:outline shadow-lg"
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="eg. One piece"
                name="searchAnimeByName"
                id="searchAnimeByName"
              />
              <button
                onClick={handleClick}
                className="search-icon bg-primaryColor border border-primaryColor flex items-center rounded-tr-lg rounded-br-lg h-full px-2 cursor-pointer"
              >
                <FaSearch className="text-white" />
              </button>
            </div>
          </form>
        </div>
      </nav>
    </header>
  );
}
