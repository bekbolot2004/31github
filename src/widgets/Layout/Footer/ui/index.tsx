import s from "./styles.module.scss";
import logo from '../../../../shared/assets/logo.png'
import Image from 'next/image'
import { SocialMedia } from "@/shared/socialMedia";

export const Footer = () => {

  const footerLinks = [
    {
      id: 1,
      name: "Сообщество",
      links: [
        {
          id: 1,
          name: "Реферальная программа",
          link: ""
        }
      ]
    },
    {
      id: 2,
      name: "Компания",
      links: [
        {
          id: 1,
          name: "О сервисе",
          link: ""
        }
      ]
    },
    {
      id: 3,
      name: "Помощь",
      links: [
        {
          id: 1,
          name: "Свяжитесь с нами",
          link: ""
        }
      ]
    },
    {
      id: 4,
      name: "Аренда",
    },
  ]

  return (
    <footer className=" bg-[#FBFAFA]">
      <div className="container mx-auto p-4 py-14">
        <div className="flex justify-between border-b border-[#C4C4C4] pb-14">
          <div className="flex">
            <div className="mr-24">
              <Image
                src={logo}
                width={205}
                height={45}
                alt="Logo"
              />
            </div>
            <div>
              <SocialMedia />
            </div>
          </div>
          <div className="flex gap-20">
            {footerLinks.map((item) =>
              <div>
                <h2 className=" text-xl font-semibold">{item.name}</h2>
                {item.links?.map((item) => <div>{item.name}</div>)}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="flex gap-[120px] mt-7 text-[#717171]">
            <p>© 2021 Getdesk.</p>
            <ul className="flex gap-16">
              <li>Конфиденциальность</li>
              <li>Условия использования</li>
              <li>Реквизиты компании</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};