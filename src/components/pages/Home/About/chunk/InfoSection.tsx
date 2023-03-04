import { FC } from 'react';
import Heading3 from '../../../../widget/Headings/Heading3';

const InfoSection: FC = () => {
  return (
    <div className=" fony-bold flex flex-1 flex-col gap-6 p-3 pb-10 pl-10 text-lg md:text-xl">
      <Heading3 extra="-left-8">
        {' '}
        Hola
        <span className="not-italic"> 👋 </span>
        Yo soy <span className="text-primary"> Jorge</span>,{' '}
      </Heading3>
      <p className="relative before:absolute before:-left-8 before:font-sans before:text-lg before:font-normal before:not-italic before:text-base-200 before:content-['<p>']">
        <br /> Empecé a desarrollar aplicaciones cuando estaba en la ESO, por lo
        que, aunque este acabando la universidad y sea una persona joven a punto
        de graduarme, he desarrollado habilidades y conocimientos para estar
        sirviendo como un
        <span className="text-primary"> desarrollador senior full stack.</span>
      </p>
      <p>
        He sido capaz de llevar a cabo proyectos difíciles dentro de un equipo o
        solo y es por eso por lo que creo que mi capacidad de aprender, ser
        responsable y mi proactividad para pensar mas allá, son mis habilidades
        más fuertes.
      </p>
      <p>
        Tengo experiencia profesional en tecnologías de alta exigencia que he
        aprendido por mi cuenta mientras era capaz de superar con éxito mi grado
        de ingeniería informática y sistemas de información en la universidad.
      </p>
      <p className="relative after:absolute after:-left-10 after:font-sans  after:text-lg after:font-normal after:not-italic after:text-base-200 after:content-['</p>']">
        Soy un perfil con una visión 360º con iniciativa para aportar ideas para
        resolver problemas de forma eficiente y conseguir los objetivos
        propuestos.
        <br />
      </p>
    </div>
  );
};
export default InfoSection;
