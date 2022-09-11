import { useState, useRef, useEffect } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark, faRotate } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

import SearchItem from '~/components/SearchItem';
import * as searchService from '~/Services/searchService';
import { useDebounce } from '~/hooks';
import config from '~/config';
import styles from './Search.module.scss';
import Popper from '~/components/Popper';
const cx = classNames.bind(styles);
function Search({ children,classes }) {
  const [searchValue, setSearchValue] = useState('');
  const [visible, setVisible] = useState(true);
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchDebounce = useDebounce(searchValue, 800);

  const inputRef = useRef('');
  const searchRef = useRef('');
  // Khai báo getApi khóa học và post
  const courses = searchResult.courses;
  const posts = searchResult.posts;

  const location = useLocation()

  useEffect(() => {
    setSearchValue('')
    setVisible(false)
  },[location.pathname])

  useEffect(() => {
    if (!searchDebounce.trim()) {
      setSearchResult([]);
      return;
    }
    // Get API từ F8
    const fetchApi = async () => {
      setLoading(true);
      const result = await searchService.get(searchDebounce);
      setSearchResult(result || []);
      setLoading(false);
    };
    fetchApi();
  }, [searchDebounce]);

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
      onClickOutside={() => setVisible(false)}
      visible={searchValue && visible}
      render={(attrs) => (
        <Popper tabIndex="-1" {...attrs}>
          <div className={cx('search-result')}>
            <div className={cx('search-header')}>
              {!!searchValue && !loading && (
                <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-header__icon', 'search-btn')} />
              )}
              {loading && <FontAwesomeIcon icon={faRotate} className={cx('search-header__icon', 'loading-btn')} />}
              <span>Kết quả cho '{searchValue}'</span>
            </div>
            <div className={cx('search-heading')}>
              <h5>Khóa học</h5>
              <Link to={config.routes.search}>Xem thêm</Link>
            </div>
            {/* Chỗ này bỏ search item cho khóa học */}
            {courses?.map((course) => (
              <SearchItem key={course.id} course={course} />
            ))}

            <div className={cx('search-heading')}>
              <h5>Bài viết</h5>
              <Link to={config.routes.search}>Xem thêm</Link>
            </div>
            {/* Chỗ này bỏ search item cho bài viết */}
            {posts?.map((post) => (
              <SearchItem key={post.id} post={post} />
            ))}
          </div>
        </Popper>
      )}
    >
      <div className={cx('search',classes)} ref={searchRef}>
        <input
          value={searchValue}
          ref={inputRef}
          onFocus={() => setVisible(true)}
          onChange={(e) => setSearchValue(e.target.value)}
        />
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
