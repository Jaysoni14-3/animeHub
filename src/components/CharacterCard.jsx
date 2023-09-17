export default function CharacterCard({ characterDetails }) {
  //   console.log(characterDetails);

  characterDetails = characterDetails.slice(0, 6);

  characterDetails?.filter((character) => {
    return (character.role = "Main");
  });

  return (
    <div className="characters-details mt-4 grid gap-2 grid-template-columns grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {characterDetails.map((item) => {
        console.log(item);
        return (
          <div
            key={item.character.mal_id}
            id={item.character.mal_id}
            className="group/character-card flex items-center justify-between bg-neutral-800 px-2 py-4 rounded-md hover:shadow-xl "
          >
            <div
              id={"Test"}
              className="character flex flex-col items-center justify-center text-center md:flex-row md:text-start md:items-start"
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
                <p className="text-neutral-600">{item.role}</p>
              </div>
            </div>
            <div
              id={item.voice_actors[0].mal_id}
              className="voice-artist flex flex-col items-center justify-center text-center md:flex-row-reverse md:text-end md:items-start"
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
                <p className="text-neutral-600">
                  {item.voice_actors[0].language}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// key={character?.mal_id}
// characterId={character?.mal_id}
// characterImg={character?.images?.jpg.image_url}
// characterName={character?.name}
// characterRole={character?.role}
// voiceArtistId={character?.mal_id}
// voiceArtistImg={character?.images?.jpg.image_url}
// voiceArtistName={character?.name}
// voiceArtistLanguage={character?.language}
