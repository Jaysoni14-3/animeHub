import { FaTimes } from "react-icons/fa";
import CharacterCard from "./AnimeDetailsComponents/CharacterCard";

export default function Modal({ isOpen, closeModal, characterDetails }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal rounded-lg absolute bg-[rgba(0,0,0,0.5)] backdrop-blur-md overflow-hidden left-8 right-8 top-[80px] bottom-4 z-50">
      <div className="modal-header shadow-lg bg-[rgba(0,0,0,0.4)] border-neutral-400 border-b-2 flex items-center justify-between p-4">
        <h2 className=" text-secondaryColor font-bold text-xl uppercase">
          Characters & voice_actors
        </h2>
        <div
          onClick={closeModal}
          className="close-modal rounded-full cursor-pointer p-2 border border-white"
        >
          <FaTimes className="text-2xl text-textWhite" />
        </div>
      </div>
      <div className="modal-body h-[75vh] overflow-y-scroll px-4">
        <CharacterCard characterDetails={characterDetails} />
      </div>
    </div>
  );
}
