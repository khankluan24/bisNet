import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
function Button({
  to ,
  href ,
  onClick,
  type,
  primary = false,
  outline = false,
  rounded = false,
  redSolid= false,
  medium = false,
  large = false,
  disabled = false,
  className,
  titleClass,
  leftIcon,
  rightIcon,
  children,
}) {
  let Comp = 'button';
  // const props

  const classes = cx('wrapper', {
    primary,
    outline,
    redSolid,
    rounded,
    medium,
    large,
    disabled,
    [className]: className
  });
  if (to) {
    Comp = Link;
  }
  else if (href) {
    Comp = 'a'
  }
  else if (to || href) {
    type = ''
  }
  return (
    <Comp className={classes} type={type} to ={to} href={href}>
      {leftIcon && <span className={cx('icon--left', 'icon')}>
        <FontAwesomeIcon icon={leftIcon}/>
      </span>}

      {<span className={cx('title',titleClass)}>{children}</span>}

      {rightIcon && <span className={cx('icon--right', 'icon')}>
        <FontAwesomeIcon icon={rightIcon}/>
      </span>}
    </Comp>
  );
}

export default Button;
