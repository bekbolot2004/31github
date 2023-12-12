import Image from 'next/image'

interface Props {
  children: JSX.Element
}

export const Banner = ({ children }: Props) => {
  return (
    <div>
      <div>
        {children}
      </div>
    </div>
  );
};