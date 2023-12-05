import Image from 'next/image'
import language from '../../assets/icons/language.svg'

export const LanguageButton = () => {

  return (
    <div className='w-11 h-11 flex justify-center items-center rounded-full bg-[#717171]'>
      <Image
        src={language}
        width={20}
        height={20}
        alt="Icon"
      />
    </div>
  );
};