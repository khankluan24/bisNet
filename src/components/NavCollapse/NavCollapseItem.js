import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import config from '~/config';
import styles from './NavCollapse.module.scss';
const cx = classNames.bind(styles);

function NavCollapse({ data }) {
  let data2 = data;
  if (data2.for) {
    if (data2.name.toLowerCase() === 'đăng nhập') {
      data2['path'] = config.routes.profile
      data2['name'] = 'Chỉnh sửa'
    }
    else {
      data2['path'] = config.routes.home
      data2['name'] = 'Đăng xuất'
    }
  }
  return (
    <Link className={cx('nav__item', 'px-4 mb-3')} to={data2.path}>
      {data2.name}
    </Link>
  );
}

export default NavCollapse;
