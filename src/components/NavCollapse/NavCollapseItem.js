import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Popper from '~/components/Popper';
import config from '~/config';
import Search from '~/layouts/components/Search';
import Menu from '~/components/Popper/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
