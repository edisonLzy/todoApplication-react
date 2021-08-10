import AppBar from '@/components/AppBar';
import Gradient from '@/components/Gradient';
import Profile from '@/components/Profile';
import styles from './index.module.less';
function handleClick() {
  console.log('xx');
}
export default function Home() {
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
      </Gradient>
    </div>
  );
}
