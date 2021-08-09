import AppBar from '@/components/AppBar';

function handleClick() {
  console.log('xx');
}
export default function Home() {
  return (
    <div className="home">
      <AppBar
        onRightClick={handleClick}
        onLeftClick={handleClick}
        leftIcon="bars"
        rightIcon="search"
      >
        TODO
      </AppBar>
    </div>
  );
}
