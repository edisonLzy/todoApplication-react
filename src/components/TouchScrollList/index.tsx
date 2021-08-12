import { useTouch, OnTouchMove, Direction } from '@/hooks/useTouch';
import { useMemo, useState, ReactNode, Children, useCallback } from 'react';
import styles from './index.module.less';

interface Props {
  children: ReactNode[];
  defaultIndex: number;
  onScroll: (idx: number) => void;
}
export default function TouchScrollList({
  children,
  defaultIndex = 0,
  onScroll,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(defaultIndex);
  const onTouchMove: OnTouchMove = useCallback(
    (direction: Direction) => {
      if (direction === 'left') {
        if (currentIndex === children.length - 1) return;
        setCurrentIndex(currentIndex + 1);
        onScroll(currentIndex + 1);
      } else {
        if (currentIndex === 0) return;
        setCurrentIndex(currentIndex - 1);
        onScroll(currentIndex - 1);
      }
    },
    [currentIndex, children.length]
  );
  const { locatorRef } = useTouch({ onTouchMove });
  const innerStyle = useMemo(() => {
    if (children) {
      return {
        width: `${children.length * 100}%`,
      };
    }
  }, [children]);
  const el = useMemo(() => {
    return Children.map(children, (child) => {
      return (
        <li
          className={styles['todoScrollListInnerItem']}
          style={{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }}
        >
          {child}
        </li>
      );
    });
  }, [currentIndex]);

  return (
    <div className={styles['todoScrollList']} ref={locatorRef}>
      <ul className={styles['todoScrollListInner']} style={innerStyle}>
        {el}
      </ul>
    </div>
  );
}
