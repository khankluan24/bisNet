import classNames from 'classnames/bind';
// import { Link } from 'react-router-dom';

import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SearchItem.module.scss';
const cx = classNames.bind(styles);

function SearchItem({ course, post }) {
  if (post) {
    return (
      <a href={`https://fullstack.edu.vn/blog/${post.slug}.html`} className={cx('search-item')}>
        <img alt={post.title} src={post['image_url'] || images.fav} />
        <span>{post.title}</span>
      </a>
    );
  } else if (course) {
    return (
      <a
        href={
          `https://fullstack.edu.vn${course['landing_page_url']}` 
        }
        className={cx('search-item')}
      >
        <img alt={course.title} src={course['image_url']} />
        <span>{course.title}</span>
      </a>
    );
  }
}

export default SearchItem;
