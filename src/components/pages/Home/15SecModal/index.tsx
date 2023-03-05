import Image from 'next/image';
import { FC, useEffect } from 'react';
import { Heading2 } from '../../../widget/Headings';

const SecModal: FC<{ handleClose: () => void }> = ({ handleClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[9996] grid h-screen w-screen animate-opacity place-content-center bg-base-100/60 text-center backdrop-blur"
      tabIndex={0}
    >
      <div
        className="relative flex flex-col items-center justify-center gap-2 px-2 outline-none magic-spaceInUp"
        style={{ animationDuration: '300ms' }}
      >
        <div className="relative aspect-video w-52 md:w-96">
          <div className="relative h-full w-full">
            <Image
              src="/wow.gif"
              layout="fill"
              alt="wow"
              className="z-[9997]"
            />
          </div>
          <div className="absolute top-0 left-0 z-[9998] flex h-32 w-5 -translate-x-1/2 -translate-y-1/2 scale-75  justify-center outline-none md:scale-100">
            {Array.from('WOOW Impresionante WOOW').map((char: string, i) => (
              <span
                key={`${char}${i}`}
                className="absolute top-0 left-0 inline-block h-16 w-5 origin-[bottom_center]"
                style={{ rotate: `${i * 15}deg` }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
        <Heading2>WOW</Heading2>
        <p className="text-primary before:text-base-200 before:content-['<p>_'] after:text-base-200 after:content-['</p>'] md:text-lg">
          Has estado en esta página durante los últimos 15 segundos. Gracias!{' '}
        </p>
        <p className="mt-10 max-w-2xl text-sm">
          <span className="text-primary">fact: </span> Puedes captar la atención
          del usuario en 15 segundos. Si rebota antes de tiempo, entonces no
          eres de su interes. Gracias por estar aquí más de 15 segundos vamos a
          tomar un café y charlamos:
          <br />
          <br />
          <a
            href="https://www.linkedin.com/in/jorge-marcos-carrero/"
            className="text-base text-primary underline outline-none"
          >
            linkedin/jorge-marcos-carrero
          </a>
        </p>
        <button
          onClick={handleClose}
          className="fixed right-10 top-10 aspect-square w-10 transition-all duration-300 before:absolute before:top-1/2 before:left-1/2 before:h-1 before:w-full before:origin-center before:-translate-x-1/2 before:-translate-y-1/2 before:-rotate-45 before:rounded-lg before:bg-primary before:transition-all before:duration-300 after:absolute after:top-1/2 after:left-1/2 after:h-1 after:w-full after:origin-center after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:rounded-lg after:bg-primary after:transition-all after:duration-300 hover:scale-110 hover:before:rotate-45 hover:after:-rotate-45 active:scale-95 md:absolute md:right-0 md:top-0 md:-translate-y-full"
        ></button>
      </div>
    </div>
  );
};

export default SecModal;
