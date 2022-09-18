import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './Subscribe.module.scss';

const cx = classNames.bind(styles);
function Subscribe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => alert(`${data.email} đã được gởi thành công`);

  return (
    <section className={cx('wrapper')}>
      <div className={cx('container-fluid')}>
        <div className={cx('row flex-column align-items-center px-4 px-md-0')}>
          <h3 className={cx('title','text-center fw-bold')}>Đừng bỏ lỡ nhiều thông tin mới nhất từ BIS.NET Đăng ký ngay</h3>
          <form className={cx('form', 'input-group ms-3 ms-md-0 mb-5')} onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register('email', {
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Email không hợp lệ',
                },
              })}
              placeholder="Nhập email của bạn"
            />

            <Button type="submit" outline large className={cx('submit')}>
              Submit
            </Button>
          </form>
          {errors.email && (
            <p className={cx('message--error', 'mb-0')}>
              <FontAwesomeIcon icon={faCircleExclamation} className={cx('message--error__icon', 'fw-700 fs-2')} />
              Email không hợp lệ
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
