// Libraries
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons';

// Path
import config from '~/config';
import Popper from '~/components/Popper';
import NavCollapse from '~/components/NavCollapse';
import Search from '~/layouts/components/Search';
import { useViewPort } from '~/hooks';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import Menu from '~/components/Popper/Menu';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function Header() {
  const collapseRef = useRef('');
  let viewPort = useViewPort();
  let isMobile = viewPort >= 576;
  let isTablet = viewPort >= 768;
  let isLapTop = viewPort >= 992;
  let isDeskTop = viewPort >= 1200;

  const showNavCollapse = () => {
    collapseRef.current.classList.toggle(cx('show'));
  };
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
  const navItems = [
    {
      name: 'Trang chủ',
      path: config.routes.home,
    },
    {
      name: 'Diễn đàn',
      path: config.routes.forum,
    },
    {
      name: 'Cộng tác',
      path: config.routes.teacherForm,
    },
  ];
  const collapseMenu = [
    {
      name: 'Trang chủ',
      path: config.routes.home,
    },
    {
      name: 'Diễn đàn',
      path: config.routes.forum,
    },
    {
      name: 'Đăng nhập',
      path: config.routes.login,
    },
    {
      name: 'Đăng ký',
      path: config.routes.register,
    },
    {
      name: 'Cộng tác',
      path: config.routes.teacherForm,
    },
  ];
  const renderNavItems = () => {
    const navItem = navItems.map((navItem, index) => (
      <Link key={index} className={cx('nav__item')} to={navItem.path}>
        {navItem.name}
      </Link>
    ));
    return navItem;
  };
  return (
    <header className={cx('header')}>
      <nav className={cx('navbar', 'navbar navbar-light')}>
        {/* Logo + menu item */}
        <div className={cx('brand')}>
          {/* Logo */}
          <Link to={config.routes.home} className={cx('logo')}>
            <img alt="logo" src={images.logo} />
          </Link>

          {isLapTop ? (
            <Menu offset={[100, 10]} items={menuDropdown} icon={faChevronRight}>
              <div className={cx('nav-item')}>
                <Link to={config.routes.home} className={cx('nav-link')}>
                  <span className={cx('title')}>Khóa học</span>
                  <FontAwesomeIcon className={cx('down-icon')} icon={faChevronDown} />
                </Link>
              </div>
            </Menu>
          ) : (
            false
          )}
        </div>

        {/* Menu Icon */}

        {viewPort < 1200 ? (
          <button className={cx('navbar-toggler', 'navbar-toggler')} onClick={showNavCollapse}>
            <span className="navbar-toggler-icon"></span>
          </button>
        ) : (
          ''
        )}

        {viewPort < 1200 ? (
          <div className={cx('navbar-collapse', 'collapse navbar-collapse')} ref={collapseRef}>
            <NavCollapse 
            // hideNavItem ={isLapTop ? true : false}
            items={collapseMenu} dropDownItems={menuDropdown} />
          </div>
        ) : (
          ''
        )}

        {/* Actions */}
        {isDeskTop ? (
          <div className={cx('actions')}>
            <div className={cx('nav-wrapper')}>{renderNavItems()}</div>
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
        ) : (
          ''
        )}
      </nav>
    </header>
  );
}

export default Header;
