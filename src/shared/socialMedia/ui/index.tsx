import Image from 'next/image'
import facebook from '../../assets/icons/facebook.svg'
import telegram from '../../assets/icons/telegram.svg'
import instagram from '../../assets/icons/instagram.svg'
import vk from '../../assets/icons/vk.svg'

export const SocialMedia = () => {

  return (
    <div>
      <Image
        src={logo}
        width={245}
        height={65}
        alt="Logo"
      />
    </div>
  );
};