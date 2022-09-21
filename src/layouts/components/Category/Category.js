import classNames from 'classnames/bind';

import CategoryItem from './CategoryItem';
import { default as icon } from '~/assets/Icons';
import styles from './Category.module.scss';
const cx = classNames.bind(styles);

function Category() {
 
  const categories = [
    {
      name: 'Development',
      icon: icon.devIcon,
    },
    {
      name: 'Kinh doanh',
      icon: icon.businessIcon,
    },
    {
      name: 'Phân tích dữ liệu',
      icon: icon.chartIcon,
    },
    {
      name: 'SQL Server',
      icon: icon.databaseIcon,
    },
  ];

  const renderCategories = () =>
    categories.map((item, index) => <CategoryItem key={index} title={item.name} icon={item.icon} />);
  return (
    <div className={cx('wrapper', 'mb-3 my-md-5 container')}>
      <div className={cx('row')}>
        <h2 className={cx('title', 'fw-bold text-center')}>
          Hơn 2.000 khóa học ở nhiều lĩnh vực đang chờ bạn khám phá
        </h2>
        <div className={cx('body', 'overflow-hidden py-lg-3 d-flex flex-wrap justify-content-evenly justify-content-xl-around justify-content-xxl-between')}>
          {renderCategories()}
        </div>
      </div>
    </div>
  );
}

export default Category;
