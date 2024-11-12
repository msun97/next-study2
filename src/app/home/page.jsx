import React from 'react'
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MiniStateGrid from './components/MiniStateGrid';

const HomePage = () => {
  return (
    <div id='wrap' className='bg-gray-100'>
      <Header></Header>
      {/* ministate */}
      <main className='inner'>
        <MiniStateGrid></MiniStateGrid>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default HomePage