import { useState, useRef, useEffect } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark, faRotate } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';


import {default as img} from '~/assets/images'
import styles from './About.module.scss';
const cx = classNames.bind(styles);

function About() {
  return (
    <div className={cx('container px-3 px-sm-0 px-lg-4 py-3 py-sm-0 my-5','wrapper')}>
      <div className={cx("row justify-content-center")}>
          <h2 className={cx('heading', 'text-center mb-2 mb-4 mb-lg-5')}>Hơn 100+ giảng viên từ các trường Đại học hàng đầu Việt Nam</h2>
          <div className={cx('img-wrapper','d-flex flex-column flex-sm-row justify-content-between flex-wrap align-items-lg-center')}>
            <div className={cx('img-wrapper__section','mb-4 mb-lg-0 d-md-flex')} >
              <img
                src={img.due}
                alt="Đại học kinh tế Đà Nẵng"
                className={cx('img-fluid')}
              />
            </div>
            <div className={cx('img-wrapper__section','mb-4 mb-lg-0 d-md-flex justify-content-md-end')} >
              <img
                src={img.dut}
                alt="Đại học bách khoa Đà Nẵng"
                className={cx('img-fluid')}
              />
            </div>
            <div className={cx('img-wrapper__section','mb-4 mb-lg-0 ')} >
              <img
                src={img.dtu}
                alt="Đại học duy tân"
                className={cx('img-fluid')}
              />
            </div>
            <div className={cx('img-wrapper__section','text-md-end')} >
              <img
                src={img.hou}
                alt="Đại học mở Hà Nội"
                className={cx('img-fluid')}
              />
            </div>
          </div>
          {/*.about__img-container*/}
        </div>
    </div>
  );
}

export default About;
