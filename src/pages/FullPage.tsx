import {useState} from 'react'
import { Navbar } from '../components/Navbar';
import Header from './Header';
import Main from './Main';

export const FullPage = () => {
      const [openBar, setOpenBar] = useState(false);
    
      const hundleNavbar = () => setOpenBar(!openBar);


  return (
    <div>
      <Navbar hundleNavbar={hundleNavbar} openBar={openBar}/>
      {
        !openBar && <>
            <Header/>
            <Main/>
        </>
      }
    </div>
  )
}
