"use client"
import React, { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const PreviewImageModal: React.FC<{
  imgURL: string[]; 
  isOpen: boolean;
  closeModal: () => void;
  initialIndex: number;
}> = ({ imgURL, isOpen, closeModal, initialIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgURL.length);
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imgURL.length) % imgURL.length);
  };

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
              src={imgURL[currentIndex]}
              alt="Preview"
              className="max-w-[90%] max-h-[90%] object-contain rounded-sm md:rounded-xl w-[80dvw]"
            />
            <button
              onClick={closeModal}
              className="absolute top-10 right-10 z-50 text-yellow-400"
            >
              <IoIosCloseCircleOutline size={56} />
            </button>
            <button
              onClick={handlePrevImage}
              className="absolute left-[-5px] md:left-10 z-50 text-white"
            >
              <FiChevronLeft size={36} />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-[-5px] md:right-10 z-50 text-white"
            >
              <FiChevronRight size={36} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreviewImageModal;
