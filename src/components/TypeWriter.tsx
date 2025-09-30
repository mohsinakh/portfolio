import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  words: string[];
  delay?: number;
  deleteDelay?: number;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ 
  words, 
  delay = 100, 
  deleteDelay = 50 
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentIndex % words.length];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < word.length) {
          setCurrentText(word.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => prev + 1);
        } else {
          setCurrentText(word.slice(0, currentText.length - 1));
        }
      }
    }, isDeleting ? deleteDelay : delay);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, words, delay, deleteDelay]);

  return (
    <span className="inline-block min-w-[20ch]">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypeWriter;