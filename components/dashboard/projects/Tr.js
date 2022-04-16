import React from "react";
import Image from "next/image";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useId, useEffect } from "react";

const Tr = (props) => {
  useEffect(() => {
    console.log(props.members);
  });
  console.log(props.members);
  const id = useId();
  const idtoe = [1, 2, 3, 4, 5, 6];
  return (
    <tr>
      <td className="company">
        <Image src={props.pic} alt="props" width={30} height={30} />
        {props.name}
      </td>
      <td className="member-pic">
        {props.members.map((member) => {
          return (
            <Image
              key={id}
              src={member.img}
              alt={member.user}
              width={30}
              height={30}
              
            />
          );
        })}
      </td>
      <td>
        <strong>${props.budget}</strong>
      </td>
      <td>
        {props.complete}%
        <LinearProgress variant="determinate" value={props.complete} />
      </td>
      <div className="line"></div>
    </tr>
  );
};

export default Tr;
