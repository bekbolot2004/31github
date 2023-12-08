import s from "./styles.module.scss";
import logo from '../../../../shared/assets/logo.png'
import Image from 'next/image'
import { SocialMedia } from "@/shared/socialMedia";
import { LanguageButton } from "@/shared/languageButton";
import { CurrencyButton } from "@/shared/currencyButton/ui";
import { Header } from "../Header";
import { Footer } from "../Footer";

interface Props {
  children: JSX.Element
}

export const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <div className=" h-[70vh]">
        {children}
      </div>
      <Footer />
    </div>
  );
};