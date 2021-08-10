import styles from './index.module.less';
import cls from 'classnames';
import { PropsWithChildren } from 'react';

console.log(styles);

interface Props {
  leftIcon: string;
  rightIcon: string;
  onLeftClick: () => void;
  onRightClick: () => void;
}
export default function AppBar({
  children,
  leftIcon,
  rightIcon,
  onLeftClick,
  onRightClick,
}: PropsWithChildren<Props>) {
  return (
    <header className={styles['appBar']}>
      <span onClick={onLeftClick} className={styles['icon']}>
        <i
          className={cls({
            fa: true,
            [`fa-${leftIcon}`]: true,
          })}
        ></i>
      </span>
      <h1 className={styles['title']}>{children}</h1>

      <span onClick={onRightClick} className={styles['icon']}>
        <i
          className={cls({
            fa: true,
            [`fa-${rightIcon}`]: true,
          })}
        ></i>
      </span>
    </header>
  );
}
