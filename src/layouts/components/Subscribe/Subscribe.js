import classNames from 'className/bind'
import styles from './Subscribe.module.scss'

const cx = classNames.bind(styles)
function Subscribe() {
  return (
    <section className={cx("wrapper")}>
      {/* <div className="container-fluid">
        <div className="row flex-column align-items-center">
          <h3 className="subscribe__title">Đừng bỏ lỡ nhiều thông tin mới nhất từ BIS.NET Đăng ký ngay</h3>
          <form className="input-group subscribe-form mb-3">
            <input
              type="text"
              className="form-control subscribe-form__input"
              placeholder="Nhập email của bạn"
              aria-describedby="button-addon2"
            />
            <a href="./register-main.html">
              <button className="btn subscribe-form__submit" type="button" id="button-addon2">
                Submit
              </button>
            </a>
          </form>
        </div>
      </div> */}

      
    </section>
  );
}

export default Subscribe;
