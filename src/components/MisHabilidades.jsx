import React from "react";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const MisHabilidades = () => {
  const softskills = ["Iniciativa", "Resolucion de problemas y orientacion a resultados", "Perseverancia y determinacion", "Adaptabilidad", "Trabajo en equipo", "Empatia e Inteligencia emocional","Responsavilidad"];
  const hardskills = ["HTML", "CSS", "JavaScript", "Bootstrap","Material UI", "Figma", "Visual Studio Code", "Node.js", "React", "MySQL", "C#", "Git / Github", "Angular", "Ionic", "Typescript"];

  return (
    <div>
      <section className="backgroundDark misHabilidades " id="misHabilidades">
        <h2 className="text-center  text-white  titleHabilidades" >Habilidades</h2>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 containerHabilidades">
              <h2 className=" text-center  text-white">Soft Skills</h2>
              <ul className="group-skills">
                {softskills.map((softskill, index) => (
                
              <Stack key={index} direction="row" style={{marginBottom: "10px"}} spacing={1}>
                <Chip label={softskill} className="chips-soft" />
              </Stack>
                
                ))}
              </ul>
            </div>
            <div className="col-sm-6 containerHabilidades">
              <h2 className="  text-center text-white">Hard Skills</h2>
              <ul className="group-skills">
                {hardskills.map((hardskill, index) => (
                    <Stack key={index} direction="row" style={{marginBottom: "10px"}} spacing={1}>
                    <Chip className="chips-hard" label={hardskill} />
                  </Stack>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MisHabilidades;