import AppBar from '@/components/AppBar';
import Gradient from '@/components/Gradient';
import Profile from '@/components/Profile';
import TouchScrollList from '@/components/TouchScrollList';
import TodoCard from '@/components/TodoCard';
import styles from './index.module.less';
import { GradientCtx, gradientCtx } from '@/context/gradientColor';
import { useCallback, useContext } from 'react';
function handleClick() {
  console.log('xx');
}

const todos = [
  {
    icon: 'user',
    classify: 'Personal',
    tasks: [
      {
        id: 1,
        title: 'Dating',
        date: new Date(),
        done: false,
        deleted: false,
      },
    ],
    colors: ['#ff6262', '#ffa947'] as GradientCtx['colors'],
  },
  // {
  //   icon: 'suitcase',
  //   classify: 'Work',
  //   tasks: [
  //     {
  //       id: 3,
  //       title: 'Design Sprint',
  //       date: new Date(),
  //       done: true,
  //       deleted: false,
  //     },
  //     {
  //       id: 4,
  //       title: 'Icon Set Design for Mobile App',
  //       date: new Date(),
  //       done: false,
  //       deleted: false,
  //     },
  //     {
  //       id: 5,
  //       title: 'HTML/CSS Study',
  //       date: new Date(),
  //       done: false,
  //       deleted: false,
  //     },
  //     {
  //       id: 6,
  //       title: 'Weekly Report',
  //       date: new Date(),
  //       done: false,
  //       deleted: false,
  //     },
  //     {
  //       id: 7,
  //       title: 'Design Meeting',
  //       date: new Date(),
  //       done: false,
  //       deleted: false,
  //     },
  //     {
  //       id: 9,
  //       title: 'Quick Prototyping',
  //       date: new Date('2019-09-16'),
  //       done: false,
  //       deleted: false,
  //     },
  //     {
  //       id: 8,
  //       title: 'UX Conference',
  //       date: new Date('2019-09-16'),
  //       done: false,
  //       deleted: false,
  //     },
  //   ],
  //   colors: ['#5b9df9', '#47bfff'] as GradientCtx['colors'],
  // },
  // {
  //   icon: 'home',
  //   classify: 'Home',
  //   tasks: [
  //     {
  //       id: 2,
  //       title: 'House Keeping',
  //       date: new Date(),
  //       done: true,
  //       deleted: false,
  //     },
  //   ],
  //   colors: ['#2c7d59', '#3ba776'] as GradientCtx['colors'],
  // },
];

export default function Home() {
  const { setGradientColors } = useContext(gradientCtx);
  const handleTodoCardClick = useCallback(() => {}, []);
  const handleTouchScroll = useCallback((activeIndex) => {
    const colors = todos[activeIndex];
    setGradientColors(colors.colors);
  }, []);
  return (
    <div className={styles['home']}>
      <Gradient>
        <AppBar
          onRightClick={handleClick}
          onLeftClick={handleClick}
          leftIcon="bars"
          rightIcon="search"
        >
          TODO
        </AppBar>
        <Profile></Profile>

        <TouchScrollList onScroll={handleTouchScroll} defaultIndex={0}>
          {todos.map((todo) => (
            <TodoCard key={todo.icon} {...todo} onClick={handleTodoCardClick} />
          ))}
        </TouchScrollList>
      </Gradient>
    </div>
  );
}
