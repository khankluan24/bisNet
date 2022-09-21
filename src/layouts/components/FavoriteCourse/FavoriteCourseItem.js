import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faHeart } from '@fortawesome/free-solid-svg-icons';

import config from '~/config';
import Button from '~/components/Button';
import images from '~/assets/images';
import Popper from '~/components/Popper';
import { default as icon } from '~/assets/Icons';
import styles from './FavoriteCourse.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function FavoriteCourseItem(props) {
  let navigate = useNavigate();
  const starNumRef = useRef('');

  const renderStar = () => {
    const num = parseInt(starNumRef.current.innerHTML);
    if (num) {
      return new Array(num)
        .fill()
        .map((item, index) => <img key={index} src={icon.star} className={cx('star')} alt="Golden star" />);
    }
  };

  const [star, setStar] = useState(null);
  useEffect(() => {
    setStar(renderStar);
  }, []);

  return (
    <HeadlessTippy
      offset={[200, -200]}
      interactive
      visible={false}
      placement="right-start"
      zIndex={2}
      delay={[300, 100]}
      render={(attrs) => (
        <Popper className={cx('detail-wrapper')} tabIndex="-1" {...attrs}>
          <div className={cx('header')}>
            <h3 className={cx('mb-8')}>{props.title}</h3>
            <div className={cx('info')}>
              <img className={cx('mr-8')} alt="teacher-avatar" src={images.fav} />
              <span className={cx('name')}>Gv. Nguyễn Văn Chức</span>
            </div>
          </div>
          <ul className={cx('desc', 'mt-16 list-unstyled')}>
            <li className={cx('item', 'mb-8')}>
              <FontAwesomeIcon icon={faCheck} className={cx('check-icon', 'mr-10')} />
              <span>Trở thành một chuyên gia thực sự trên máy chủ SQL (và điều đó rất được săn đón).</span>
            </li>
            <li className={cx('item', 'mb-8')}>
              <FontAwesomeIcon icon={faCheck} className={cx('check-icon', 'mr-10')} />
              <span>Trở thành một chuyên gia thực sự trên máy chủ SQL (và điều đó rất được săn đón).</span>
            </li>
            <li className={cx('item', 'mb-8')}>
              <FontAwesomeIcon icon={faCheck} className={cx('check-icon', 'mr-10')} />
              <span>Trở thành một chuyên gia thực sự trên máy chủ SQL (và điều đó rất được săn đón).</span>
            </li>
            <li className={cx('item', 'mb-8')}>
              <FontAwesomeIcon icon={faCheck} className={cx('check-icon', 'mr-10')} />
              <span>Trở thành một chuyên gia thực sự trên máy chủ SQL (và điều đó rất được săn đón).</span>
            </li>
          </ul>
          <div className={cx('actions', 'mt-8 d-flex justify-content-between align-items-center')}>
            <Button redSolid type="submit" className={cx('add-to-cart')}>
              Thêm vào giỏ hàng
            </Button>
            <button className={cx('like')}>
              <FontAwesomeIcon icon={faHeart} className={cx('heart-icon')} />
            </button>
          </div>
        </Popper>
      )}
    >
      <div className={cx('item-container', 'row card')} onClick={() => navigate(config.routes.course)}>
        <div className={cx('header', 'd-flex flex-column align-items-start px-0')}>
          <img className={cx('img-fluid')} src={props.img} alt="course" />

          <Link
            className={props.tag.includes('Front-end') ? cx('tag red mt-4') : cx('tag blue', 'mt-4')}
            to={config.routes.courses}
          >
            {props.tag.includes('Front-end') ? 'Front-end' : 'Back-end'}
          </Link>
        </div>  
        <div className={cx('body', 'card-body px-0 py-0 mt-4')}>
          <h3 className={cx('heading', 'fw-bold')}>{props.title}</h3>
          <p className={cx('desc', 'text-black mb-4')}>{props.desc}</p>
          <hr className={cx('divider', 'w-75 mb-3')} />
          <div
            className={cx(
              'info',
              'd-flex align-items-center align-items-sm-start align-items-md-center justify-content-between flex-sm-column flex-md-row flex-wrap mb-4',
            )}
          >
            <div className={cx('shopping', 'd-flex ms-1 align-items-center')}>
              <img className={cx('symbol', 'd-flex mr-8')} src={icon.shoppingCart} alt="shoppingCart" />
              <p className={cx('count', 'mb-0')}>{Math.floor((Math.random() + 1) * 100)}</p>
            </div>
            <div
              className={cx(
                'rating',
                'd-flex align-items-center justify-content-center justify-content-sm-start justify-content-md-center ms-1 my-3',
              )}
            >
              <span className={cx('number', 'mb-0 d-flex justify-content-center align-items-center')} ref={starNumRef}>
                {Math.floor((Math.random() + 0) * 6)}
              </span>
              <div className={cx('star-wrapper', 'mr-8 d-flex')}>{star}</div>
              <span className={cx('count', 'mb-0')}>(100)</span>
            </div>
            <img src={images.fav} alt="Teacher avatar" className={cx('teacher-avatar', '')} />
          </div>
          <h2 className={cx('price')}>{props.price}đ</h2>
        </div>
      </div>
    </HeadlessTippy>
  );
}

export default FavoriteCourseItem;
