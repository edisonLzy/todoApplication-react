import { PropsWithChildren, useContext, useMemo } from 'react';
// import { SwitchTransition, CSSTransition } from 'react-transition-group';
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
      {/* <SwitchTransition>
        <CSSTransition
          addEndListener={(node, done) =>
            node.addEventListener('transitionend', done, false)
          }
          timeout={1000}
          classNames="fade"
          key={colors.join(',')}
        > */}
      <div
        className={styles['gradientInner']}
        style={{
          background: gradientColor,
        }}
      >
        {children}
      </div>
      {/* </CSSTransition>
      </SwitchTransition> */}
    </div>
  );
}
