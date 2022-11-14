import React from "react";
import { Icon } from "@iconify/react";
const Title = ({ Component, id, title }) => {
  return (
    <Component id={id}>
      <a href={`#${id}`}>
        <Icon icon="akar-icons:link-chain" />
      </a>
      {title ? title : id}
    </Component>
  );
};

export default Title;
