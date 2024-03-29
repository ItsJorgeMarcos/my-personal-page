import Image from 'next/image';
import { FC, useState } from 'react';
import {
  AltIcon,
  GithubIcon,
  GlobeIcon,
  LeftArrowIcon,
} from '../../../../Icons';
import useElementOnSecreen from '../../../../lib/hooks/useElementOnSecreen';
import AnimatedText from '../../../widget/AnimatedText';
import Heading2 from '../../../widget/Headings/Heading2';
import styles from './Project.module.css';
const projectList = ['filpire'];

const Projects: FC = () => {
  const [isVisible, containerRef] = useElementOnSecreen();
  const [currentproject, setCurrentproject] = useState(1);
  return (
    <section
      id="myproject"
      ref={containerRef}
      className={`container relative mx-auto mt-10 transition-transform duration-500 ease-linear lg:mt-52 ${
        isVisible ? 'translate-y-0' : 'translate-y-36 opacity-0'
      }`}
    >
      <div className="flex items-center justify-center">
        <Heading2>
          {isVisible ? <AnimatedText text="Mis Proyectos." /> : ''}
        </Heading2>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:py-16">
        <div className="w-full">
          <figure
            className={`${styles.projectImg} group relative mx-auto aspect-square h-[20rem] rounded-full lg:h-[30rem]`}
          >
            <Image
              src="/assets/images/portfolio.png"
              alt="HeroImg"
              className="rounded-full object-cover object-left-top"
              layout="fill"
            />
            <figure className="absolute left-1/2 bottom-16 -translate-x-1/2 rounded-2xl bg-base-100 px-2 py-1 transition-all duration-300 ">
              <div className="relative h-20 w-56">
                <Image
                  src={'/assets/images/portfolio-logo.png'}
                  layout="fill"
                  alt="project logo"
                  style={{
                    filter: 'hue-rotate(129deg) brightness(10)',
                  }}
                />
              </div>
            </figure>
            <div className="absolute top-1/2 left-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4" />
            <div
              className={`${styles.projectImgRing} absolute top-1/2 left-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4`}
            />
            <div
              className={`${styles.projectImgRing} ${styles.projectImgRing_1} absolute top-1/2 left-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4`}
            />
            <div
              className={`${styles.projectImgRing} ${styles.projectImgRing_2} absolute top-1/2 left-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4`}
            />
            <div
              className={`${styles.projectImgRing} ${styles.projectImgRing_3} absolute top-1/2 left-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4`}
            />
          </figure>
        </div>
        <div className="relative block w-full py-7 pr-3 pl-10 before:absolute before:left-0 before:-translate-y-full before:text-base before:font-normal before:not-italic before:text-base-200 before:content-['<h3>'] after:absolute after:bottom-0 after:left-0 after:text-base after:font-normal after:not-italic after:text-base-200 after:content-['</h3>'] md:text-4xl md:before:text-lg md:after:text-lg lg:pr-0">
          <span className="block text-center font-RobotoCondensed text-5xl font-bold tracking-wider text-primary lg:text-left lg:text-7xl">
            JMC Portfolio.
          </span>
          <p className="mt-5 text-xl leading-relaxed lg:text-2xl">
            Es un proyecto personal que me permite mostrar algunas de mis
            habilidades y conocimientos en el desarrollo web. Hacia tiempo que
            esta idea de proyecto rondaba por mi cabeza, y estoy muy contento
            del resultado final. 🥳
          </p>
          <span className="mt-5 mb-10 flex flex-wrap gap-4 text-sm text-primary lg:text-xl">
            {['react', 'nextJS', 'typescript', 'Tailwind'].map((tool) => (
              <span
                key={tool}
                className="rounded-lg border border-primary p-2 px-3 font-bold capitalize hover:bg-primary hover:text-base-100"
              >
                {tool}
              </span>
            ))}
          </span>
          <div className="flex flex-wrap gap-4 gap-x-2 text-sm lg:gap-0 lg:text-xl">
            <a
              href="https://jorgemarcoscarrero.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-max rounded-xl border border-primary py-3 px-5 capitalize hover:bg-primary lg:rounded-none lg:rounded-l-xl"
            >
              <span className="flex items-center justify-center gap-3 text-primary group-hover:text-base-100">
                Ver
                <span className="w-5 lg:w-6">
                  <GlobeIcon />
                </span>
              </span>
            </a>
            <a
              href="https://github.com/ItsJorgeMarcos/my-personal-page"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-max rounded-xl border border-primary py-3 px-5 capitalize hover:bg-primary lg:rounded-none"
            >
              <span className="flex items-center justify-center gap-3 text-primary group-hover:text-base-100">
                Codigo del proyecto
                <span className="w-6">
                  <GithubIcon />
                </span>
              </span>
            </a>
            <button
              // href=""
              className="group w-max rounded-xl border border-primary py-3 px-5 capitalize hover:bg-primary disabled:cursor-not-allowed  disabled:hover:border-primary disabled:hover:bg-transparent disabled:hover:opacity-50 lg:rounded-none lg:rounded-r-xl"
              disabled
            >
              <span className="flex items-center justify-center gap-3 text-primary group-hover:text-base-100 group-disabled:group-hover:text-primary">
                Leer Mas
                <span className="w-6">
                  <AltIcon />
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-5 lg:m-20 lg:px-16 xl:px-32">
        <button
          disabled
          onClick={() =>
            setCurrentproject((p) => {
              if (p === 0) {
                return projectList.length - 1;
              } else {
                return p - 1;
              }
            })
          }
          className="hidden w-max rounded-full border-2 border-base-content p-5 transition-all duration-300 hover:scale-125 active:scale-110 disabled:opacity-50 disabled:hover:scale-100 md:p-10 lg:block"
        >
          <span className="text-primary">
            <span className="inline-block w-12">
              <LeftArrowIcon />
              <span className="sr-only">Proyecto Anterior</span>
            </span>
          </span>
        </button>

        <div className="relative mx-auto h-2 w-[35vw] overflow-hidden rounded-3xl bg-primary/20">
          <div
            className="absolute top-0 left-0 h-full bg-primary transition-all duration-300"
            style={{
              width: `${((currentproject + 1) / projectList.length) * 100}%`,
            }}
          />
        </div>

        <button
          disabled
          className="hidden w-max rounded-full border-2 border-base-content p-5 transition-all duration-300 hover:scale-125 active:scale-110 disabled:opacity-50 disabled:hover:scale-100 md:p-10 lg:block"
          onClick={() => setCurrentproject((p) => (p + 1) % projectList.length)}
        >
          <span className="text-primary">
            <span className="inline-block h-full w-12 rotate-180">
              <span className="sr-only">Siguiente Proyecto</span>
              <LeftArrowIcon />
            </span>
          </span>
        </button>
      </div>
      <div className="absolute left-[48%] -bottom-[20rem] -z-10 hidden outline-none lg:block">
        <ProjectCurve />
      </div>
    </section>
  );
};

export default Projects;

const ProjectCurve: FC = () => {
  const [isVisible, containerRef] = useElementOnSecreen(0.3);
  return (
    <svg
      ref={containerRef}
      xmlns="http://www.w3.org/2000/svg"
      width="667.615"
      height="616"
      viewBox="0 0 667.615 616"
      className={`${styles.projectCurve} outline-none ${
        isVisible ? styles.animate : ''
      }`}
    >
      <g id="ProjectCurve" transform="translate(-387 -45)">
        <path
          className="stroke-primary outline-none"
          d="M5659.318,68.408s2.4,98,117.736,96.807,522.587-2.609,522.587-2.609-.062,37.947-1.331,125.1-88.96,138.779-165.337,140.9-107.565-2.39-315.406,0c-100.709-1.2-157.156,44.808-158.482,114.679-.512,92.854,0,94.693,0,94.693"
          transform="translate(-5247.554 -0.356)"
        />
        <g id="ProjectCurve-Cirlce--1" transform="translate(225 -28)">
          <circle
            cx="23.5"
            cy="23.5"
            r="23.5"
            transform="translate(162 73)"
            className="fill-primary/50"
          />
          <circle
            cx="11"
            cy="11"
            r="11"
            transform="translate(175 85)"
            fill="#fff"
          />
        </g>
        <g id={styles.ProjectCurveCirlce_2} transform="translate(226 541)">
          <circle
            cx="23.5"
            cy="23.5"
            r="23.5"
            transform="translate(162 73)"
            className="fill-primary/50"
          />
          <circle
            cx="11"
            cy="11"
            r="11"
            transform="translate(175 85)"
            fill="#fff"
          />
        </g>
        <text
          id="_"
          transform="translate(690 450)"
          fill="#fff"
          fontSize="69"
          fontFamily="SegoeUI-Semibold, Segoe UI"
          fontWeight="600"
        >
          <tspan x="0" y="0">
            &lt;/&gt;
          </tspan>
        </text>
      </g>
    </svg>
  );
};
