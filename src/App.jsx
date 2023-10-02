import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import HomePage from "./pages/HomePage";
import AnimePage from "./pages/AnimePage";
import MangaPage from "./pages/MangaPage";
import SearchResults from "./pages/SearchResults";
import AnimeDetailsPage from "./pages/AnimeDetailsPage";
import MangaDetailsPage from "./pages/MangaDetailsPage";
import Footer from "./components/Footer";
import WatchListPage from "./pages/WatchListPage";


function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="body-container container max-w-screen-xl mx-auto mb-8 px-4 xl:px-0">
          <Routes>
            <Route path="/" index element={<HomePage />} />
            <Route path="/anime" element={<AnimePage />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/manga" element={<MangaPage />} />
            <Route path="/anime-details/:id" element={<AnimeDetailsPage />} />
            <Route path="/manga-details/:id" element={<MangaDetailsPage />} />
            <Route path="/watch-list" element={<WatchListPage />} />
          </Routes>
        </div>
        <div className="footer mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
