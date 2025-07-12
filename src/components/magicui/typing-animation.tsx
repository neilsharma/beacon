import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  words: string[];
  className?: string;
  duration?: number;
}

export function TypingAnimation({
  words,
  className,
  duration = 2000,
}: TypingAnimationProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Find the longest word to set fixed width
  const longestWord = words.reduce((longest, current) => 
    current.length > longest.length ? current : longest, ""
  );

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Finished typing, wait 2 extra seconds then start deleting
          setTimeout(() => setIsDeleting(true), duration + 2000);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 80 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, duration]);

  return (
    <span 
      className={cn("inline-block text-center", className)}
      style={{ 
        minWidth: `${longestWord.length * 0.6}em`,
        width: `${longestWord.length * 0.6}em`,
        textAlign: 'center'
      }}
    >
      <span className="underline decoration-2 underline-offset-4">{currentText}</span>
      <span className="animate-pulse">|</span>
    </span>
  );
}