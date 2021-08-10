import { useSelector, useDispatch } from 'react-redux';
import { useGithubAuth } from '@/hooks/useGithubAuth';
import styles from './index.module.less';
import { useAppDispatch, useAppSelector } from '@/store/helper';

export default function Profile() {
  const { toGithubLogin } = useGithubAuth();
  const userInfo = useAppSelector((state) => {
    return state.userInfo;
  });
  const dispatch = useAppDispatch();

  function changeName() {
    dispatch({
      type: 'userInfo/changeUserInfo',
      payload: {
        name: 'li',
      },
    });
  }
  return (
    <div className={styles['profile']}>
      <div className={styles['profileFace']} onClick={toGithubLogin}>
        <img src={userInfo.avatar} />
      </div>
      <h2 className={styles['profileName']} onClick={changeName}>
        Hello, {userInfo.name}.
      </h2>
      <p className={styles['profileTips']}>
        Looks like feed good.
        <br />
        You have 8 tasks to do today.
      </p>
      <p className={styles['profileDate']}>TODAY : TUE AUG 10, 2021 </p>
    </div>
  );
}
