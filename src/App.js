
import './App.css';
import Contact from './component/contact';
import About from './component/about';
import CopyRight from './component/copyRight';
import Footer from './component/footer';
import GallerySection from './component/gallerySection';
import Header from './component/header';
import Hero from './component/hero'
import Interview from './component/interview';


import Skills from './component/skills';


import Testimonial from './component/testimonial';






function App() {
  
  return (
    <div className=" max-w-[1920px] mx-auto overflow-hidden bg-white">
  
  
  <Header/>
  <Hero/>
  <About/>
  <GallerySection/>
  <Skills/>
  <Testimonial/>
  <Interview/>
  <Contact/>
  
 
  <Footer/>
  <CopyRight/>
  
  <div className='h-[4000px]'></div>
  
  
    </div>
  );
}

export default App;
