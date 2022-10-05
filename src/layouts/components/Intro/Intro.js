import classNames from 'classnames/bind';

import { default as img } from '~/assets/images';
import styles from './Intro.module.scss';
const cx = classNames.bind(styles);

function Intro() {
  return (
    <div className={cx('wrapper','container')}>
     <div className={cx("row align-items-center d-flex flex-column flex-lg-row")}>
          <div className={cx("col")}>
            <p className={cx('heading','fw-bold text-center text-lg-start')}>Phù hợp cho các bạn trẻ muốn tìm hiểu về phân tích dữ liệu</p>
            <p className={cx("sub-heading")}>
              Các khóa học này là dành cho bạn. Hỗ trợ nâng cao kỹ năng Học triển khai các dự án và quản trị và phân
              tích dữ liệu. Chúng tôi cùng bạn chuẩn bị cho sự nghiệp đáng mơ ước.
              <br />
              Chúng ta tin vào chúa, mọi thứ còn lại phải dựa vào dữ liệu. (William Edwards Deming.)
            </p>
          </div>
          <div className={cx("col")}>
            <img src={img.banner} alt="students" className={cx("img-fluid float-end")} />
          </div>
        </div>
    </div>
  );
}

export default Intro;
