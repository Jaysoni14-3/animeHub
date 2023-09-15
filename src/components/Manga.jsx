import MangaCard from "./MangaCard";

export default function Manga({ data }) {
  data = data?.slice(0, 2);
  return (
    <>
      <section className="mt-10 mb-10">
        <div className="section-header flex items-center justify-between">
          <h2 className="text-textWhite uppercase text-xl">Manga</h2>
          <a
            href="/manga"
            className="text-textWhite opacity-50 hover:opacity-100 hover:underline hover:text-skyBlue transition-all"
          >
            view all
          </a>
        </div>
        <div
          className="manga-container
                    grid gap-6 justify-between 
                    grid-cols-[repeat(auto-fill,100%)] 
                    min-[530px]:grid-cols-[1fr,1fr]
                    mt-4"
        >
          {data?.map((manga) => {
            return (
              <MangaCard
                key={manga.mal_id}
                id={manga.mal_id}
                imageSrc={manga.images.jpg.large_image_url}
                title={manga.titles[0].title}
                rank={manga.rank}
                authors={manga.authors}
                publishing={manga.publishing}
                genres={manga.genres}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
