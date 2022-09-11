import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';

import config from '~/config';
import styles from './Category.module.scss';
const cx = classNames.bind(styles);

function CategoryItem(props) {
  const navigate = useNavigate();
  return (
    <section
      className={cx('item', 'd-flex flex-column align-items-center col-12 col-md-6 col-xl-1 mb-5 mb-xl-0')}
      onClick={() => navigate(config.routes.courses)}
    >
      <div className={cx('circle', 'd-flex justify-content-center mb-4 p-3')}>
        <img src={props.icon} alt={props.title} className={cx('img')} />
      </div>
      <p className={cx('heading', 'text-center fw-bold mb-0')}>{props.title}</p>
      <Link className={cx('more','text-decoration-underline')} to={config.routes.courses}>
        Xem thêm
      </Link>
    </section>
  );
}

export default CategoryItem;
