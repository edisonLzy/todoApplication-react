import { PropsWithChildren, useContext, useMemo } from 'react';
import { gradientCtx } from '@/context/gradientColor';
import styles from './index.module.less';

interface Props {}
export default function Gradient({ children }: PropsWithChildren<Props>) {
  const { colors } = useContext(gradientCtx);
  const gradientColor = useMemo(() => {
    const [topColor, bottomColor] = colors;
    return `linear-gradient(to bottom, ${topColor} 30%, ${bottomColor})`;
  }, [colors]);
  return (
    <div className={styles['gradient']}>
      <div
        className={styles['gradientInner']}
        style={{
          backgroundImage: gradientColor,
        }}
      >
        {children}
      </div>
    </div>
  );
}
