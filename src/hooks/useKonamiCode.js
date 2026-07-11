import { useEffect, useRef } from "react";

/**
 * useKonamiCode
 * Fires `onUnlock` when the classic Konami sequence is entered:
 * ↑ ↑ ↓ ↓ ← → ← → B A
 * Works with a keyboard; ignores typing inside inputs/textareas.
 */
const SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

const useKonamiCode = (onUnlock) => {
  const progress = useRef(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const target = e.target;
      const tag = target?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea" || target?.isContentEditable) {
        return;
      }

      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const expected = SEQUENCE[progress.current];

      if (key === expected) {
        progress.current += 1;
        if (progress.current === SEQUENCE.length) {
          progress.current = 0;
          onUnlock();
        }
      } else {
        // Allow a fresh start if the wrong key happens to be the first key.
        progress.current = key === SEQUENCE[0] ? 1 : 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onUnlock]);
};

export default useKonamiCode;
