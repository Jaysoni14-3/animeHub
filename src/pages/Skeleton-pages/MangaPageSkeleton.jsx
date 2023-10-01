export default function MangaPageSkeleton() {
  return (
    <>
      <div className="flex flex-col">
        <div
          className="grid gap-6 justify-between 
                  grid-cols-[repeat(auto-fill,100%)] 
                  min-[450px]:grid-cols-[1fr,1fr]
                  min-[530px]:grid-cols-[1fr,1fr,1fr]
                  min-[760px]:grid-cols-[1fr,1fr,1fr,1fr]
                  mt-4"
        >
          {Array.from({ length: 12 })?.map((_, index) => {
            return (
              <div
                key={index}
                className="flex flex-col rounded-lg overflow-hidden bg-[#232222] "
              >
                <div className="overflow-hidden">
                  <div className="h-[365px] w-full bg-neutral-400"></div>
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

        <button className="h-40 w-24 rounded-sm py-2 px-4 mt-4 mx-auto"></button>
      </div>
    </>
  );
}
