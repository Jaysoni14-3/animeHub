export default function CharacterCard({ characterDetails }) {
  return (
    <div className="characters-details mt-4 pb-4 w-full grid gap-2 grid-template-columns grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {characterDetails?.map((item) => {
        return (
          item?.voice_actors[0] && (
            <div
              key={item.character.mal_id}
              id={item.character.mal_id}
              className="group/character-card flex items-center justify-between bg-neutral-800 px-2 py-4 rounded-md hover:shadow-xl "
            >
              {/* animeCharacter details */}
              {item.character.mal_id && (
                <div
                  id={item.character.mal_id}
                  className="character flex flex-col items-start justify-center text-start md:flex-row md:text-start md:items-start"
                >
                  <img
                    className="h-12 w-12 rounded-full object-center object-cover"
                    src={item.character.images.jpg.image_url}
                    alt=""
                  />
                  <div className="name-and-role md:max-w-[409] ms-2">
                    <h3 className="text-textWhite group-hover/character-card:text-secondaryColor transition-all">
                      {item.character.name}
                    </h3>
                    <p className="text-neutral-500 text-sm">{item.role}</p>
                  </div>
                </div>
              )}
              {/* Voice actor details */}
              {item?.voice_actors[0] && (
                <div
                  id={item.voice_actors[0]?.mal_id}
                  className="voice-artist flex flex-col items-end justify-center text-end md:flex-row-reverse md:text-end md:items-start"
                >
                  <img
                    className="h-12 w-12 rounded-full object-center object-cover grayscale group-hover/character-card:grayscale-0 transition-all"
                    src={item.voice_actors[0].person.images.jpg.image_url}
                    alt=""
                  />
                  <div className="name-and-language md:max-w-[90%] me-2">
                    <h3 className="text-textWhite">
                      {item.voice_actors[0].person.name}
                    </h3>
                    <p className="text-neutral-500 text-sm">
                      {item.voice_actors[0].language}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )
        );
      })}
    </div>
  );
}
