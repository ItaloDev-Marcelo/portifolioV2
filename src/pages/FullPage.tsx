import {useState} from 'react'
import { Navbar } from '../components/Navbar';

export const FullPage = () => {
      const [openBar, setOpenBar] = useState(false);
    
      const hundleNavbar = () => setOpenBar(!openBar);


  return (
    <div>
      <Navbar hundleNavbar={hundleNavbar} openBar={openBar}/>
      <div>

      </div>
    </div>
  )
}
