
import Image from 'next/image'

import bg from './assets/main-section.png'
import guarenteeIcon from './assets/guarantee.svg'
import lock from './assets/lock.svg'
import consultIcon from './assets/consultant.svg'

interface GuarentItemProps {
  id: number,
  title: string,
  description: string,
  icon?: any
}

const guarantees = [
  {
    id: 1,
    title: "Проверенные офисы",
    description: "На Getdesk вы найдете только проверенные офисы и коворкинги.",
    icon: guarenteeIcon
  },
  {
    id: 2,
    title: "Безопасные сделки",
    description: "Все сделки проводятся в безопасном режиме. Вы надежно защищены от мошенничества!",
    icon: lock
  },
  {
    id: 3,
    title: "Помощь и консультация",
    description: "Наша команда поддержки с радостью ответит на все вопросы по работе с сервисом. ",
    icon: consultIcon
  },
]

const GuaranteItem = ({ title, description, icon, id }: GuarentItemProps) => {
  return (
    <div className='relative'>
      <div>
        <Image
          src={icon}
          width={90}
          height={90}
          alt="Icon"
        />
      </div>
      <div className='ml-[10px] mt-5'>
        <h2 className='text-3xl font-medium text-[#ED4040]'>{title}</h2>
        <p className='mt-4 text-lg'>{description}</p>
      </div>
      <div className={`absolute top-0 left-[calc(100%+75px)] h-full w-[1px] bg-[#C4C4C4]`} />
    </div>
  )
}

const MainPage = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bg.src})` }}
        className='w-[100wh] h-[100vh] bg-center bg-no-repeat bg-cover '>
        f
      </div>

      <div className='max-w-[1700px] mx-auto px-4 my-[70px] grid grid-cols-3 gap-[170px]'>
        {guarantees.map((item, index) =>
          <GuaranteItem title={item.title} description={item.description} icon={item.icon} id={item.id} />
        )}
      </div>
    </div>
  );
};

export default MainPage