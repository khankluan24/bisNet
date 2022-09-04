// Libraries
import classNames from 'classnames/bind';

// Path
import config from '~/config';
import FooterMenu from './FooterMenu'
import styles from './Footer.module.scss';
import {default as logo} from '~/assets/Icons/socialIcons'
import { Link } from 'react-router-dom';
import images from '~/assets/images';
const cx = classNames.bind(styles);

function Footer() {
  const infoItems = [
    {
      content: 'K92/159 Đinh Tiên Hoàng',
      path: 'https://goo.gl/maps/Fu7NTLQY7C39gwNM6',
    },
    {
      content: 'K92/159 Đinh Tiên Hoàng',
      path: 'https://goo.gl/maps/Fu7NTLQY7C39gwNM6',
    },
    {
      content: 'SĐT: (+84)775429443',
      path: 'tel:(+84)775429443',
    },
  ];
  const colItems = [
    [
      {
        content: 'Tìm hiểu về chúng tôi',
        children :[
          {
            name: 'About us',
            to: config.routes.home,
          },
          {
            name: 'Contact us',
            to: config.routes.home,
          },
          {
            name: 'Diễn đàn',
            to: config.routes.forum,
          },
          {
            name: 'FAQ',
            to: config.routes.faq,
          },
          {
            name: 'Support Team',
            href: 'https://www.facebook.com/maris.accesory',
          },
        ],
      }
    ],
    [
      {
        content: 'Nội dung khóa học',
        children: [
          {
            name: 'Business Analytic',
            to: config.routes.courses,
          },
          {
            name: 'Marketing',
            to: config.routes.courses,
          },
          {
            name: 'Development',
            to: config.routes.courses,
          },
        
        ],
      }
      
    ],
    [
      {
        content: 'Kết nối với chúng tôi',
        className: 'social-list',
        children:  [
          {
            icon: 'Facebook',
            img: logo.fb,
            href: 'https://www.facebook.com/chucnv'
          },
          {
            icon: 'Instagram',
            img: logo.insta,
            href:"https://www.youtube.com/channel/UCMUbHNZctxb65xlTZbu1laQ"
          },
          {
            icon: 'Linkedin',
            img: logo.linkedin,
            href:"https://www.youtube.com/channel/UCMUbHNZctxb65xlTZbu1laQ"
  
          },
          {
            icon: 'Tiktok',
            img: logo.tiktok,
            href:"https://www.youtube.com/channel/UCMUbHNZctxb65xlTZbu1laQ"
  
          },
        ],
      },
     
    ],
  ];

  const renderInfoItems = () => {
    const infoItem = infoItems.map((item, index) => (
      <a className={cx('item', 'mb-2')} key={index} href={item.path}>
        {item.content}
      </a>
    ));
    return infoItem
  };
  const renderOtherItems = () => {
    const colItem =colItems.map((colItem, index) => (
      <FooterMenu key={index} test={colItem} />
    ))
    return colItem
  }
  return (
    <footer className={cx('wrapper', 'row container-fluid')}>
      <div className={cx('contact', 'col-xl-3 col-lg-3 col-md-5 col-sm-5 mt-3 mt-sm-4 me-lg-2 me-xl-0')}>
        <Link className={cx('footer-logo')} to={config.routes.home}>
          <img className={cx('logo')} srcSet={images.logo} alt="Logo" />
          Bis.net.vn
        </Link>
        <div className={cx('list','d-flex flex-column mt-1 mt-sm-4 ms-sm-2')}>{renderInfoItems()}</div>
      </div>
      {renderOtherItems()}
    </footer>
  );
}

export default Footer;
