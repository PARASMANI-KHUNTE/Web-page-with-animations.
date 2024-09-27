import React from "react";

interface CardProps {
  url : string;
  thumnailUrl : string;
  children?: React.ReactNode;  // This allows you to pass in custom content
}

const ProjectCard: React.FC<CardProps> = ({ url, thumnailUrl, children }) => {
  return (
    <div className=" shadow-lg rounded-lg  max-w-sm ">
      <a href={url}><img src={thumnailUrl} alt="" /></a>
      <div>{children}</div> {/* Custom content passed as children */}
    </div>
  );
};

export default ProjectCard;
