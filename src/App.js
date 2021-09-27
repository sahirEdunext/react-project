import './App.css';
import HeaderNav from './components/homePage/headerNav/HeaderNav';
import TopBar from './components/homePage/topBar/TopBar';
import SliderTop from './components/homePage/sliderTop/SliderTop';
import FeaturedSection from './components/homePage/featuredSection/FeaturedSection';


function App() {
  return (
    <div className="App">
        <TopBar />
        <HeaderNav />
        <SliderTop />
        <FeaturedSection />
    </div>
  );
}

export default App;
