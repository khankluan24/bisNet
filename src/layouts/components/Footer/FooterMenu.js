import React from 'react';
import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import FooterItems from './FooterItems';
const cx = classNames.bind(styles);

function FooterMenu({ test }) {
  const renderItems = () =>
    test[0].children.map((item, index) => (
      <FooterItems
        key={index}
        to={item.to}
        href={item.href}
        img={item.img}
        icon={item.icon}
        logo={item.img}
      >{item.name}</FooterItems>
    ));
  return (
    <div className={cx('footer-container', 'col-xl-3 col-lg-3 col-md-5 col-sm-5 mx-1 mx-xl-0 ms-sm-4 ms-lg-1 me-lg-2 me-xl-0 mt-3')}>
      <h3 className={cx('my-2 fs-1 fw-bold')}>{test[0].content}</h3>
      <div className={cx('list', 'd-flex flex-column',test[0].className)}>{renderItems()}</div>
    </div>
  );
}

export default FooterMenu;
