import s from "./styles.module.scss";
import logo from '../../../../shared/assets/logo.png'
import Image from 'next/image'
import { SocialMedia } from "@/shared/socialMedia";
import { LanguageButton } from "@/shared/languageButton";
import { CurrencyButton } from "@/shared/currencyButton/ui";


export const Header = () => {
  return (
    <header className=" bg-white h-[125px]">
      <div className="container mx-auto p-4">
        <div className="flex justify-between">
          <div>
            <Image
              src={logo}
              width={205}
              height={45}
              alt="Logo"
            />
          </div>
          <div>
            <LanguageButton redbutton />
          </div>
        </div>
      </div>
    </header>
  );
};