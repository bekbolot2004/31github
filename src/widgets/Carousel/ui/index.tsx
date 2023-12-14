import Image from 'next/image'

interface Props {
  children: JSX.Element
}

export const Carousel = ({ children }: Props) => {
  return (
    <div>
      <div>
        {children}
      </div>
    </div>
  );
};