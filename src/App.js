import { useEffect, useState } from 'react';
import './App.css';
import Footer from './component/Body/Footer/Footer';
import Main from './component/Body/Main/Main';
import Header from './component/Header/Header';
import { data } from './data/data'
import PressToLoad from './component/Body/Loader/PressToLoad';
import Modal from './component/Body/Modal/Modal';
import ModalTwo from './component/Body/Modal/ModalTwo';



function App() {
  const [loading, setLoading] = useState(true);
  const [sw, setSw] = useState(true);
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 577) {
      setSw(false)
    }
  }, [sw,])

  const handleLoad = () => {
    setLoading(prev => !prev)

  }

  return (
    <>
      {
        sw ? (
          loading ? <div className='ldd'>
            <PressToLoad handleLoad={handleLoad} />
          </div> : <div className="App">
            <Header />
            <Main d={data} />
            <Footer />
          </div>
        ) : (
          <div className="App">
            <Header />
            <Main d={data} />
            <Footer />
          </div>
        )
      }
  
    </>
  );
}

export default App;
