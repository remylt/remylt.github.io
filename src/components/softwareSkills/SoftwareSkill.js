import React from "react";
import "./SoftwareSkill.css";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills,i) => {
            return (
              <li key={i} className="software-skill-inline" name={skills.skillName}>
                {skills.img && 
                
                  <img id='apiplat' style={{height: '48px'}} crossOrigin={'anonymous'} src={skills.img} />
                || skills.fontAwesomeClassname &&
                  <i className={skills.fontAwesomeClassname}></i>
                }
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
