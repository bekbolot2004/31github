import s from "./styles.module.scss";
import logo from '../../../../shared/assets/logo.png'
import Image from 'next/image'

export const Footer = () => {

  return (
    <footer className=" bg-[#FBFAFA]">
      <div className="container mx-auto p-4">
        <div>
          <Image
            src={logo}
            width={245}
            height={65}
            alt="Logo"
          />
        </div>
      </div>
    </footer>
  );
};