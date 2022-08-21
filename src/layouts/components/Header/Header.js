// Libraries
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons';

// Path
import config from '~/config';
import Search from '~/layouts/components/Search';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import Menu from '~/components/Popper/Menu';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function Header() {
  const menuDropdown = [
    {
      name: 'BA',
      path: '/',
    },
    {
      name: 'Marketing',
      path: '/',
    },
    {
      name: 'Development',
      path: '/',
    },
  ];

  

  return (
    <header className={cx('header')}>
      <nav className={cx('navbar')}>
        {/* Logo + menu item */}
        <div className={cx('brand')}>
          {/* Logo */}
          <Link to={config.routes.home} className={cx('logo')}>
            <img alt="logo" src={images.logo} />
          </Link>

          <Menu items={menuDropdown} icon={faChevronRight}>
            <div className={cx('nav-item')}>
              <Link to={config.routes.home} className={cx('nav-link')}>
                <span className={cx('title')}>Khóa học</span>
                <FontAwesomeIcon className={cx('down-icon')} icon={faChevronDown} />
              </Link>
            </div>
          </Menu>
        </div>
        {/* Actions */}
        <div className={cx('actions')}>
          <div className={cx('nav-wrapper')}>
            <Link to={config.routes.home}>Trang chủ</Link>
            <Link to={config.routes.forum}>Diễn đàn</Link>
            <Link to={config.routes.teacherForm}>Cộng tác</Link>
          </div>

          <Search>
            <button className={cx('search')}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </Search>
          <div className={cx('controller')}>
            <Button className={cx('controller__button')} to={config.routes.login} outline>
              Đăng nhập
            </Button>
            <Button className={cx('controller__button')} to={config.routes.register} primary>
              Đăng ký
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
