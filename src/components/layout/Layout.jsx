import React , {useContext} from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import myContext from '../../context/data/myContext'
import StartLoader from '../loader/StartLoader'

function Layout({children}) {
  const context = useContext(myContext);
  const { product  } = context;


  return (
    
    <div>
      <Navbar/>
       {product.length === 0 ? (
        <StartLoader/> 
      ) : (
        <>
       
        <div className="content">
            {children}
        </div>
        <Footer/>
        </>
)}
    </div>
  )
}

export default Layout