import { FC } from 'react';
import Heading3 from '../../../../widget/Headings/Heading3';

const InfoSection: FC = () => {
  return (
    <div className=" fony-bold flex flex-1 flex-col gap-6 p-3 pb-10 pl-10 text-lg md:text-xl">
      <Heading3 extra="-left-8">
        {' '}
        Hola
        <span className="not-italic"> 👋 </span>
        Soy <span className="text-primary"> Jorge</span>,{' '}
      </Heading3>
      <p className="relative outline-transparent before:absolute before:-left-8 before:font-sans before:text-lg before:font-normal before:not-italic before:text-base-200 before:content-['<p>']" />
      <p className="indent-10">
        Empecé a desarrollar aplicaciones cuando estaba en la ESO, por lo que,
        aunque este acabando la universidad y sea una persona joven a punto de
        graduarme, he desarrollado habilidades y conocimientos para ser un
        <span className="text-primary"> desarrollador senior full stack.</span>
      </p>
      <p className="indent-10">
        He sido capaz de llevar a cabo proyectos difíciles dentro de un equipo o
        solo y es por eso por lo que creo que mi capacidad de aprender, ser
        responsable y mi proactividad para pensar mas allá, son mis habilidades
        más fuertes.
      </p>
      <p className="indent-10">
        Tengo experiencia profesional en tecnologías de alta exigencia que he
        aprendido por mi cuenta mientras era capaz de superar con éxito mi grado
        de ingeniería informática y sistemas de información en la universidad.
      </p>
      <p className="indent-10">
        Soy un perfil con una visión 360º con iniciativa para aportar ideas para
        resolver problemas de forma eficiente y conseguir los objetivos
        propuestos.
      </p>
      <p className="relative outline-transparent after:absolute after:-left-10 after:font-sans  after:text-lg after:font-normal after:not-italic after:text-base-200 after:content-['</p>']" />
    </div>
  );
};
export default InfoSection;
