import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './Subscribe.module.scss';

const cx = classNames.bind(styles);
function Subscribe() {
  return (
    <section className={cx('wrapper')}>
      <div className={cx('container-fluid')}>
        <div className={cx('row flex-column align-items-center')}>
          <h3 className={cx('title')}>Đừng bỏ lỡ nhiều thông tin mới nhất từ BIS.NET Đăng ký ngay</h3>
          <form className={cx('search-box', 'input-group mb-4')}>
            <input type="text" placeholder="Nhập email của bạn" />
            <Button outline large className={cx('search')}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
