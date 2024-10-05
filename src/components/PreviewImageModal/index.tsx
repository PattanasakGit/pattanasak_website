import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
const PreviewImageModal: React.FC<{
  imgURL: string;
  isOpen: boolean;
  closeModal: () => void;
}> = ({ imgURL, isOpen, closeModal }) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-[1500]">
      <div className="relative flex justify-center items-center w-full h-full">
        <img
          src={imgURL}
          alt="Preview"
          className="max-w-[90%] max-h-[90%] object-contain rounded-xl w-[80dvw]"
        />
        <button
          onClick={closeModal}
          className="absolute top-10 right-10 z-50 text-yellow-400"
        >
          <IoIosCloseCircleOutline size={56}/>
        </button>
      </div>
    </div>
  );
};

export default PreviewImageModal;
