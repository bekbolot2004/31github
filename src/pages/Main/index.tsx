
import Image from 'next/image'

import bg from './assets/main-section.png'

export const MainPage = () => {

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bg.src})` }}
        className='w-[100wh] h-[100vh] bg-center bg-no-repeat bg-cover '>

      </div>
    </div>
  );
};

export default MainPage