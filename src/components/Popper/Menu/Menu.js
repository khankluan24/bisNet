import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import Popper from '~/components/Popper';
import MenuItem from '~/components/Popper/Menu/MenuItem';

const cx = classNames.bind(styles);

function Menu({ items = [], icon, children, classes, offset,childrenClass }) {
  return (
    <HeadlessTippy
      offset={offset}
      interactive
      // visible
      placement="bottom-end"
      delay={[100, 500]}
      render={(attrs) => (
        <Popper className={cx('menu-list', classes)} tabIndex="-1" {...attrs}>
          {items.map((item, index) => (
            <MenuItem key={index} className={cx('menu-item',childrenClass)} data={item} icon={icon}></MenuItem>
          ))}
        </Popper>
      )}
    >
      {children}
    </HeadlessTippy>
  );
}

export default Menu;
