import './App.css';
import Spline from "@splinetool/react-spline";

const App = () => {
  return (
    <>
      <div className='title-container'>
        <div className='horizontal-scrolling-items'>
          <h1 className="horizontal-scrolling-items__item">
            KeyKeyKeyKeyKeyKey
          </h1>
        </div>
      </div >
      <div className='guide-container'>
        <div className='guide-contents'>
          <span>
            Hold 'Enter' key to interract
          </span>
        </div>
      </div>
      <div className='model-container'>
        <Spline
          scene="https://prod.spline.design/2CdZG6fGl3NYAL-f/scene.splinecode" />
      </div>
    </>
  );
};

export default App;
