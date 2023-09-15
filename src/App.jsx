import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import HomePage from "./pages/HomePage";
import AnimePage from "./pages/AnimePage";
import MangaPage from "./pages/MangaPage";
import SearchResults from "./pages/SearchResults";
import AnimeDetailsPage from "./pages/AnimeDetailsPage";
import MangaDetailsPage from "./pages/MangaDetailsPage";

function App() {
  return (
    <>
      <div>
        <Header />
        <div className="body-container container max-w-screen-xl mx-auto mb-8 px-4 xl:px-0">
          <Routes>
            <Route path="/" index element={<HomePage />} />
            <Route path="/anime" element={<AnimePage />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/manga" element={<MangaPage />} />
            <Route path="/anime-details/:id" element={<AnimeDetailsPage />} />
            <Route path="/manga-details/:id" element={<MangaDetailsPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
