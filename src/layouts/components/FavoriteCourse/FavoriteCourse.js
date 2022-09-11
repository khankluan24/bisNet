// Libraries
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Swiper Styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Keyboard } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

// Path
import config from '~/config';
import * as courseService from '~/Services/courseService';
import { default as Item } from './FavoriteCourseItem';
import './slide.scss';
import styles from './FavoriteCourse.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function FavoriteCourse() {
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await courseService.get();
      setCourseList(result || []);
    };
    fetchApi();
  }, []);

  const renderCourses = () =>
    courseList?.map(category => {
      const course = category.courses.map((item) => {
        return (
          <SwiperSlide>
            <Item
              key={item.id}
              tag={category.title}
              title={item.title}
              desc={item.description}
              price={item.price}
              bought={item['students_count']}
              img={item['image_url']}
            />
          </SwiperSlide>
        );
      });
      return course;
    });

  return (
    <div className={cx('wrapper', 'container mt-5')}>
      <div className={cx('header', 'mb-4 d-md-flex justify-content-md-between align-items-md-center')}>
        <h2 className={cx('heading', 'fw-bold mb-3 mb-md-2')}>Khóa học được yêu thích nhất</h2>
        <Link className={cx('more', 'mb-3 mb-md-0')} to={config.routes.courses}>
          <span className={cx('title', 'mr-8')}>Xem thêm</span>
          <FontAwesomeIcon icon={faChevronRight} className={cx('right-icon')} />
        </Link>
      </div>
      <div className={cx('list')}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Keyboard]}
          navigation
          className="favorite-course__list"
          keyboard
          breakpoints={{
            375: {
              centeredSlides: true,
              centeredSlidesBounds: true,
              slidesPerView: 1,
            },
            576: {
              centeredSlides: false,
              centeredSlidesBounds: false,
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              centeredSlides: false,

              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
          pagination
          scrollbar={{ draggable: true }}
        >
          {renderCourses()}
        </Swiper>
      </div>
    </div>
  );
}

export default FavoriteCourse;
