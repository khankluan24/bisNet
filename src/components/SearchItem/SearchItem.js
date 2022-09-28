import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
import {decode} from 'html-entities';


import config from '~/config';
import styles from './SearchItem.module.scss';
const cx = classNames.bind(styles);

function SearchItem({ course }) {
  const courseImg = course.thumbnails.high.url
  return (
    <Link to={config.routes.course} className={cx('search-item')}>
      <img alt={course.title} src={courseImg} />
      <span>{decode(course.title)}</span>
    </Link>
  );
}

export default SearchItem;
