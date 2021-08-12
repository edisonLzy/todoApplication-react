import { useRef, useEffect } from 'react';
export type Direction = 'left' | 'right';

export type OnTouchMove = (direction: Direction) => void;

export function useTouch({ onTouchMove }: { onTouchMove: OnTouchMove }) {
  const locatorRef = useRef<HTMLDivElement>(null);
  const touchStateRef = useRef({
    startX: 0,
    endX: 0,
  });
  useEffect(() => {
    const { current: touchState } = touchStateRef;
    const handleTouchMove = (evt: TouchEvent) => {
      touchState.endX = evt.touches[0].clientX;
    };
    const handleTouchEnd = (evt: TouchEvent) => {
      if (
        !touchState.endX ||
        Math.abs(touchState.endX - touchState.startX) < 10
      ) {
        return;
      }
      if (touchState.endX < touchState.startX) {
        onTouchMove('left');
      } else {
        onTouchMove('right');
      }
    };
    const handleTouchStart = (evt: TouchEvent) => {
      touchState.startX = evt.touches[0].clientX;
      touchState.endX = 0;
    };
    locatorRef.current?.addEventListener('touchstart', handleTouchStart);

    locatorRef.current?.addEventListener('touchmove', handleTouchMove);

    locatorRef.current?.addEventListener('touchend', handleTouchEnd);
    return () => {
      locatorRef.current?.removeEventListener('touchstart', handleTouchStart);
      locatorRef.current?.removeEventListener('touchmove', handleTouchMove);
      locatorRef.current?.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onTouchMove]);

  return {
    locatorRef,
  };
}
