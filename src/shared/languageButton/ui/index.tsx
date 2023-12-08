import Image from 'next/image'
import language from '../../assets/icons/language.svg'


interface Props {
  redbutton?: true | undefined
}

export const LanguageButton = ({ redbutton }: Props) => {

  return (
    <div className={`${redbutton ? "bg-[#717171]" : "bg-red"} w-11 h-11 flex justify-center items-center rounded-full `} >
      <Image
        src={language}
        width={20}
        height={20}
        alt="Icon"
      />
    </div>
  );
};