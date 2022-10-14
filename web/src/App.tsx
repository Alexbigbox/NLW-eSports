import { MagnifyingGlassPlus } from 'phosphor-react'
import { GamerBanner } from './components/GamerBanner';

import './styles/main.css';

import logoImg from './assets/logo-eSports.svg'

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center m-20'>
      <img src={logoImg} alt='' />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo </span> esta aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <GamerBanner bannerUrl='/image-1.png' title='Jogo Counter Strike' adsCount={3} />
        <GamerBanner bannerUrl='/image-2.png' title='Jogo Valorant' adsCount={5} />


      </div>

      <div className='pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players</span>
          </div>
          <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>

    </div>
  )
}

export default App
