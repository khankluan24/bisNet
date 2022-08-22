import {useState} from 'react'
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import Popper from '~/components/Popper';
import MenuItem from '~/components/Popper/Menu/MenuItem';

const cx = classNames.bind(styles);

function Menu({ items = [], icon,children }) {
  return (
    <HeadlessTippy
      offset={[50,20]}
      interactive
      render={(attrs) => (
        <Popper className={cx('menu-list')} tabIndex="-1" {...attrs}>
          {items.map((item, index) => (
            <MenuItem key={index} className={cx('menu-item')} data={item} icon={icon}></MenuItem>
          ))}
        </Popper>
      )}
    >
      {children}
    </HeadlessTippy>
  );
}

export default Menu;
