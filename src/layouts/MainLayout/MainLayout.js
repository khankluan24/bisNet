import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss';

import Header from '~/layouts/components/Header';
import Subscribe from '~/layouts/components/Subscribe';
import Footer from '~/layouts/components/Footer'
const cx = classNames.bind(styles);


function MainLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <main className={cx('container')}>
        <div className={cx('content')}>{children}</div>
        <Subscribe/>
      </main>
      <Footer/>
    </div>
  );
}

export default MainLayout;
