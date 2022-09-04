import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';
const cx = classNames.bind(styles);

function FooterItems(props) {
  let Comp = Link;
  if (props.href) {
    Comp = 'a';
  }
  return (
    <Comp className={cx('footer-item', 'mb-1 text-white')} to={props.to} href={props.href}>
      {props.children}
      {props.img && <img src={props.logo} alt={props.icon}/>}
    </Comp>
  );
}

export default FooterItems;
