export default function SearchPageSkeleton() {
  return (
    <div className="flex flex-col">
      <div className="mt-2 h-7 bg-neutral-400 rounded-sm w-64"></div>
      <div
        className="popular-container
                    grid gap-4 md:gap-6 justify-between 
                    grid-cols-2
                    sm:grid-cols-3
                    md:grid-cols-4
                    lg:grid-cols-6
                    mt-4"
      >
        {Array.from({ length: 12 })?.map((_, index) => {
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
    </div>
  );
}
