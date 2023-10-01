export default function AnimeDetailsSkeleton() {
  return (
    <>
      <section className="anime-details-page">
        <div className=" relative flex flex-col justify-between mt-4 py-8 lg:flex-row lg:gap-4">
          {/* Left side */}
          <div className="flex w-full flex-col items-start">
            <div className=" w-full flex max-[570px]:flex-col max-[570px]:mx-auto min-[570px]:gap-2 lg:gap-4 mb-4">
              <div className="flex min-[570px]:flex-col min-[570px]:h-[266px] min-w-[200px]">
                <div className="h-64 mx-auto w-44 bg-neutral-400 rounded-sm"></div>
              </div>
              <div className="mt-4 w-full flex flex-col items-center min-[570px]:mt-0 min-[570px]:items-start min-[570px]">
                <div className="title h-9 w-36 bg-neutral-700 rounded-sm"></div>
                <div className="additional-info mt-2 flex items-center flex-wrap gap-2">
                  <div className="rating h-6 w-16 bg-neutral-600 rounded-sm"></div>
                  <div className="seperator bg-neutral-500 h-1 w-1 rounded-full"></div>
                  <div className="rating h-6 w-16 bg-neutral-600 rounded-sm"></div>
                  <div className="seperator bg-neutral-500 h-1 w-1 rounded-full"></div>
                  <div className="rating h-6 w-16 bg-neutral-600 rounded-sm"></div>
                </div>
                <div className="mt-2 flex flex-col min-[450px]:flex-row gap-2">
                  <div className="flex items-center gap-2 rounded-lg h-10 w-24 bg-neutral-600"></div>
                  <div className="flex items-center gap-2 rounded-lg h-10 w-24 bg-neutral-600"></div>
                </div>
                {/* Anime Overview  */}
                <div className="overview mt-4 w-full lg:pe-10">
                  <label className="bg-neutral-500 w-20 h-6"></label>
                  <p className="mt-1 h-24 w-full rounded-sm bg-neutral-600"></p>
                </div>
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="anime-detail-right-wrapper">
            <div className="flex flex-col gap-2 relative bg-neutral-800 mt-4 min-[570px]:mt-0 px-3 py-2 rounded-sm sm:min-w-[350px] lg:w-[350px]">
              <div>
                <div className=" flex items-start gap-2">
                  <div className="w-20 h-6 bg-neutral-600 rounded-sm"></div>
                  <div className="w-20 h-6 bg-neutral-500 rounded-sm"></div>
                </div>
              </div>
              <div>
                <div className=" flex items-start gap-2">
                  <label className="w-20 h-6 bg-neutral-600 rounded-sm"></label>
                  <div className="w-24 h-6 bg-neutral-500 rounded-sm"></div>
                </div>
              </div>
              <div>
                <div className=" flex items-start gap-2">
                  <label className="w-20 h-6 bg-neutral-600 rounded-sm"></label>
                  <div className="w-44 h-6 bg-neutral-500 rounded-sm"></div>
                </div>
              </div>
              <div>
                <div className=" flex items-start gap-2">
                  <label className="w-20 h-6 bg-neutral-600 rounded-sm"></label>
                  <div className="w-32 h-6 bg-neutral-500 rounded-sm"></div>
                </div>
              </div>
              <div>
                <div className=" flex items-start gap-2">
                  <label className="w-20 h-6 bg-neutral-600 rounded-sm"></label>
                  <div className="w-36 h-6 bg-neutral-500 rounded-sm"></div>
                </div>
              </div>
              <div>
                <div className=" flex items-start gap-2">
                  <label className="w-20 h-6 bg-neutral-600 rounded-sm"></label>
                  <div className="w-20 h-6 bg-neutral-500 rounded-sm"></div>
                </div>
              </div>
              <div>
                <div className=" flex items-start gap-2">
                  <label className="w-20 h-6 bg-neutral-600 rounded-sm"></label>
                  <div className="w-32 h-6 bg-neutral-500 rounded-sm"></div>
                </div>
              </div>

              <div className="horizontal-seperator bg-gray-600 my-1 h-[1px]"></div>

              <div className="genre">
                <div className="flex items-start flex-wrap gap-2">
                  <label className="w-20 h-6 bg-neutral-600 rounded-sm"></label>
                  <div className="genre-container flex flex-wrap gap-2">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <div
                        key={index}
                        className="h-6 w-16 bg-neutral-600 rounded-full cursor-default"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="horizontal-seperator bg-gray-600 my-1 h-[1px]"></div>

              <div className="studios">
                <div className="flex items-start flex-wrap gap-2">
                  <label className="w-20 h-6 bg-neutral-600 rounded-sm"></label>
                  <div className="w-32 h-6 bg-neutral-500 rounded-sm"></div>
                </div>
              </div>
              <div className="producers">
                <div className="flex items-start flex-wrap gap-2">
                  <label className="w-20 h-6 bg-neutral-600 rounded-sm"></label>
                  <div className="w-48 h-6 bg-neutral-500 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Characters section */}
      <section className="mt-6">
        <div className="flex justify-between">
          <div className="section-header h-7 w-72 rounded-sm bg-neutral-600"></div>
          <button className="w-16 h-7 rounded-sm bg-neutral-600"></button>
        </div>
        <div className="characters-details mt-4 pb-4 w-full grid gap-2 grid-template-columns grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between bg-neutral-800 px-2 py-4 rounded-md"
              >
                <div className="flex flex-col items-start justify-center md:flex-row md:text-start md:items-start">
                  <div className="h-12 w-12 rounded-full bg-neutral-400"></div>
                  <div className="md:max-w-[400] md:ms-2">
                    <div className="h-6 w-14 bg-neutral-600 rounded-sm"></div>
                    <div className="h-6 w-7 mt-1 bg-neutral-500 rounded-sm"></div>
                  </div>
                </div>
                {/* Voice actor details */}
                <div className="voice-artist flex flex-col gap-2 items-end justify-center md:flex-row-reverse md:text-end md:items-start">
                  <div className="h-12 w-12 rounded-full bg-neutral-400"></div>
                  <div className="flex flex-col items-end md:max-w-[400] md:ms-2">
                    <div className="h-6 w-14 bg-neutral-600 rounded-sm"></div>
                    <div className="h-6 w-7 mt-1 bg-neutral-500 rounded-sm"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Anime Photos */}
      <section className="mt-4">
        <div className="mb-2 h-7 bg-neutral-600 rounded-sm w-20"></div>
        <div className="grid gap-4 grid-cols-2 min-[600px]:grid-cols-3 min-[768px]:grid-cols-4 min-[1024px]:grid-cols-5 min-[1220px]:grid-cols-6">
          <div className="max-w-[200px] h-[300px] bg-neutral-400 rounded-lg"></div>
          <div className="max-w-[200px] h-[300px] bg-neutral-400 rounded-lg"></div>
          <div className="max-w-[200px] h-[300px] bg-neutral-400 rounded-lg"></div>
          <div className="max-w-[200px] h-[300px] bg-neutral-400 rounded-lg"></div>
          <div className="max-w-[200px] h-[300px] bg-neutral-400 rounded-lg"></div>
          <div className="max-w-[200px] h-[300px] bg-neutral-400 rounded-lg"></div>
        </div>
      </section>

      {/* Related animes */}
      <section className="related-anime mt-6">
        <div className=" h-7 w-32 bg-neutral-600 rounded-sm"></div>
        <div className="grid gap-4 md:gap-6 justify-between grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-4">
          {Array.from({ length: 6 }).map((_, index) => {
            return (
              <div
                key={index}
                className="relative shadow-lg bg-[#232222] rounded-lg overflow-hidden"
              >
                <div className="overflow-hidden">
                  <div className="h-[265px] bg-neutral-500 w-full"></div>
                </div>

                <div className="flex flex-col justify-between mt-1 p-2">
                  <div className="mb-auto h-6 w-full rounded-sm bg-neutral-600"></div>
                  <div className="flex items-center mt-2">
                    <div className="bg-neutral-600 rounded-sm h-6 w-14"></div>
                    <div className="bg-neutral-600 rounded-sm h-6 w-12 ms-2"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
