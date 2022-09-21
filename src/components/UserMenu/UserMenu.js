import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

// Path
import { useViewPort } from '~/hooks';
import styles from './UserMenu.module.scss';
import Menu from '~/components/Popper/Menu';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function UserMenu(props) {
  let viewPort = useViewPort();

  let isDeskTop = viewPort >= 1200;
  return (
    <div className={cx('user', 'ms-3')} onClick={props.onClick} >
      <img className={cx('avatar', 'mr-10')} alt="avatar" src={images.fav} />
      <span className={cx('name', 'me-2')}>Long</span>
      {isDeskTop? (
        <Menu
        items={props.items}
        menuClass={cx('menu-user')}
        menuItemClass={cx('user-item')}
        titleClass={cx('title')}
      >
        <button className={cx('sort-down__icon')}>
          <FontAwesomeIcon icon={faSortDown} />
        </button>
      </Menu>
      ):(
        <button className={cx('sort-down__icon')}>
          <FontAwesomeIcon icon={faSortDown} />
        </button>
      )}
      
    </div>
  );
}

export default UserMenu;
