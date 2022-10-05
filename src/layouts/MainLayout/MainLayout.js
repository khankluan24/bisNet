import Header from '~/layouts/components/Header';
import Intro from '~/layouts/components/Intro'
import About from '~/layouts/components/About';
import Category from '~/layouts/components/Category/Category';
import Subscribe from '~/layouts/components/Subscribe';
import FavoriteCourse from '~/layouts/components/FavoriteCourse';
import Footer from '~/layouts/components/Footer'


function MainLayout() {
  return (
    <div className='d-flex flex-column align-items-center'>
      <Header />
      <main className='d-flex flex-column w-100 mt-5'>
        <Intro/>
        <About/>
        <Category/>
        <FavoriteCourse/>
        <Subscribe/>
      </main>
      <Footer/>
    </div>
  );
}

export default MainLayout;
