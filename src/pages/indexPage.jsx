import { lazy } from 'react';
import './index.css';

import HeaderNavComponent from '../components/header/headerNavComponent';

// const header = lazy(() => import('../components/header/headerNavComponent'));
const IndexPage = () => {
  return (

    <div className='container'>
      <HeaderNavComponent />
      <main className='main'>
        <section className='section__main'>
          <div className='section__main__text'>
            <span className='section__text__span'>So, you want to travel to</span>
            <h1 className='section__text__title'>Space</h1>
            <p className='section__text__paragraph'>Let's face it; if you want to go to space, you might as well genuinely go to
              outer space and not hover kind of on the edge of it. Well sit back, and relax
              because we’ll give you a truly out of this world experience!</p>
          </div>
          <div className='explore'>
            <div className='circle'>
              Explore
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default IndexPage;