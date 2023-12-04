import Image from 'next/image'
import facebook from '../../assets/icons/facebook.svg'
import telegram from '../../assets/icons/telegram.svg'
import instagram from '../../assets/icons/instagram.svg'
import vk from '../../assets/icons/vk.svg'
import Link from 'next/link'

export const SocialMedia = () => {

  const socMediaList = [
    {
      id: 1,
      name: "Facebook",
      link: "",
      icon: facebook
    },
    {
      id: 2,
      name: "Telegram",
      link: "",
      icon: telegram
    },
    {
      id: 3,
      name: "Instagram",
      link: "",
      icon: instagram
    },
    {
      id: 4,
      name: "Vk",
      link: "",
      icon: vk
    }
  ]

  return (
    <div className='flex gap-1.5'>
      {socMediaList.map((item) =>
        <Link href={item.link} className='h-[50px] w-[50px] bg-white flex justify-center items-center rounded-full'>
          <Image
            src={item.icon}
            width={30}
            height={30}
            alt="Icon"
          />
        </Link>)}
    </div>
  );
};