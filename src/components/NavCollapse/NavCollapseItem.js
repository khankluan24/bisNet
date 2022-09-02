import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Popper from '~/components/Popper';
import Search from '~/layouts/components/Search';
import Menu from '~/components/Popper/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './NavCollapse.module.scss';
const cx = classNames.bind(styles);

function NavCollapse({ data }) {
  return (
    <Link className={cx('nav__item', 'px-4 mb-3')} to={data.path}>
      {data.name}
    </Link>
  );
}

export default NavCollapse;
