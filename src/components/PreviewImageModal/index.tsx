import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const PreviewImageModal: React.FC<{
  imgURL: string;
  isOpen: boolean;
  closeModal: () => void;
}> = ({ imgURL, isOpen, closeModal }) => {

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-[1500]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          <motion.div
            className="relative flex justify-center items-center w-full h-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={imgURL}
              alt="Preview"
              className="max-w-[90%] max-h-[90%] object-contain rounded-xl w-[80dvw]"
            />
            <button
              onClick={closeModal}
              className="absolute top-10 right-10 z-50 text-yellow-400"
            >
              <IoIosCloseCircleOutline size={56} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreviewImageModal;
