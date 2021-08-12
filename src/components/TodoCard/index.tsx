import { GradientCtx } from '@/context/gradientColor';
import styles from './index.module.less';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import ShareElement, { ShareElementType } from '@/components/ShareElement';
interface Task {
  id: number;
  title: string;
  date: Date;
  done: boolean;
  deleted: boolean;
}
interface Props {
  icon: string;
  classify: string;
  tasks: Task[];
  colors: GradientCtx['colors'];
  onClick: () => void;
}

function TodoDetail() {
  return (
    <h1
      className={styles['todoCard']}
      style={{
        margin: 0,
      }}
    >
      1
    </h1>
  );
}

export default function TodoCard({ onClick }: Props) {
  const el = createPortal(<TodoDetail />, document.body);
  return (
    <ShareElement
      shrinkEl={<div className={styles['todoCard']}>2</div>}
      expandEl={el}
    ></ShareElement>
  );
}
