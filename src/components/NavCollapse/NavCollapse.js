import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSortDown } from '@fortawesome/free-solid-svg-icons';

import config from '~/config';
import Popper from '~/components/Popper';
import Search from '~/layouts/components/Search';
import Menu from '~/components/Popper/Menu';
import NavCollapseItem from './NavCollapseItem';
import styles from './NavCollapse.module.scss';
const cx = classNames.bind(styles);

function NavCollapse(props) {
  return (
      <Popper className={cx('navbar-list')}>
        <div className={cx('navbar-nav', 'navbar-nav me-auto mb-2 mb-lg-0')}>
          {props.items.map((item, index) => (
            <NavCollapseItem data={item} key={index} />
          ))}
          <Search classes={cx('px-4 mb-3')}>
            <button className={cx('search')}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </Search>

          {/* Menu dropdown */}
          <Menu offset={[0, 10]} items={props.dropDownItems} childrenClass={cx('dropdown-item')} classes={cx('dropdown-menu')}>
            <Link className={cx('nav__item', 'px-4 mb-3')} to={config.routes.home}>
              Chuyên đề
              <FontAwesomeIcon icon={faSortDown} className={cx('sort-icon')} />
            </Link>
          </Menu>
        </div>
      </Popper>
  );
}

export default NavCollapse;
