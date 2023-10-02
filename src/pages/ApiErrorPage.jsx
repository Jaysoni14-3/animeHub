export default function ApiErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[32rem]">
      <h1 className="text-3xl text-textWhite">
        An error occured while loading the page
      </h1>
      <span className="text-neutral-400 mt-4 mb-2">
        Please reload the page or press the button below
      </span>
      <button
        onClick={() => window.location.reload()}
        className="px-4 py-2 rounded text-lg text-textBlack bg-secondaryColor hover:bg-[rgb(255,233,108)] ease-in-out"
      >
        Reload
      </button>
    </div>
  );
}
