import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
function Button({
  to = false,
  href =false,
  onClick,
  primary = false,
  outline = false,
  rounded = false,
  redSolid= false,
  medium = false,
  large = false,
  disabled = false,
  className,
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
  return (
    <Comp className={classes} to ={to} href={href}>
      {leftIcon && <span className={cx('icon--left', 'icon')}>
        <FontAwesomeIcon icon={leftIcon}/>
      </span>}
      {<span className={cx('title')}>{children}</span>}

      {rightIcon && <span className={cx('icon--right', 'icon')}>
        <FontAwesomeIcon icon={rightIcon}/>
      </span>}
    </Comp>
  );
}

export default Button;
