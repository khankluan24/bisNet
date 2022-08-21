import { useState, useRef, useEffect } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import SearchItem from '~/components/SearchItem';
import config from '~/config';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import Popper from '~/components/Popper';
const cx = classNames.bind(styles);
function Search({ children }) {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const inputRef = useRef('');
  const searchRef = useRef('');
  const courses = searchResult.courses;
  const posts = searchResult.posts;
  // console.log(searchResult)
  useEffect(() => {
    const test = async () => {
      
      try {
        let response = await fetch(`https://api-gateway.fullstack.edu.vn/api/search?q=css}`);
        let data = await response.json();

        console.log(data);
        setSearchResult(data.data);
        return data.data;
      } catch (error) {
        throw new Error('Lỗi rồi');
      }
    };
    test();
  }, [searchValue]);

  const showSearchBar = () => {
    searchRef.current.classList.toggle(cx('transform'));
  };
  const handleClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  return (
    <HeadlessTippy
      interactive
      placement="bottom-end"
      appendTo={() => document.body}
      offset={[-5, 10]}
      visible
      render={(attrs) => (
        <Popper tabIndex="-1" {...attrs}>
          <div className={cx('search-result')}>
            <div className={cx('search-header')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <span>Kết quả cho 'css'</span>
            </div>
            <div className={cx('search-heading')}>
              <h5>Khóa học</h5>
              <Link to={config.routes.course}>Xem thêm</Link>
            </div>
            {/* Chỗ này bỏ search item cho khóa học */}
            {courses?.map((course) => (
              <SearchItem key={course.id} course={course} />
            ))}

            <div className={cx('search-heading')}>
              <h5>Bài viết</h5>
              <Link to={config.routes.articles}>Xem thêm</Link>
            </div>
            {/* Chỗ này bỏ search item cho bài viết */}
            {posts?.map((post) => (
              <SearchItem key={post.id} post={post} />
            ))}
            {/* <SearchItem />
            <SearchItem /> */}
          </div>
        </Popper>
      )}
    >
      <div className={cx('search')} ref={searchRef}>
        <input value={searchValue} ref={inputRef} onChange={(e) => setSearchValue(e.target.value)} />
        {/* Clear */}
        {searchValue && (
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon className={cx('clear__icon')} icon={faXmark} />
          </button>
        )}
        {/* Search */}
        <button className={cx('search__btn')} onClick={showSearchBar}>
          <FontAwesomeIcon className={cx('search__icon')} icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
