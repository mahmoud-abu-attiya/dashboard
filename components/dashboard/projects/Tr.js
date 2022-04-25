import Image from "next/image";
import LinearProgress from "@material-ui/core/LinearProgress";

const Tr = (props) => {
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
              key={member.id}
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
    </tr>
  );
};

export default Tr;
