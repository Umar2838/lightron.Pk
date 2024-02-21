import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import { Link } from 'react-router-dom'
import HangingLamps from "../../components/HangingLamps/Hanginglamps"
import WallLights from '../../components/WallLights/WallLights'
import FilamentBulbs from '../../components/FilamentBulbs/FilamentBulbs'


function Home() {
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <HangingLamps category="Hanging lamps" />
      <WallLights category="Wall lamps" />
      <FilamentBulbs category="Filament Bulbs"  />
      <ProductCard />
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={'/allproducts'}>
          <button className=' bg-gray-300 px-5 py-2 rounded-xl'>See more</button>
        </Link>
      </div>
    </Layout>
  )
}

export default Home