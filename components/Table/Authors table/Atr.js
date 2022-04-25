import Image from "next/image";
// import LinearProgress from "@material-ui/core/LinearProgress";

const Atr = (props) => {
  const statusStyle = {
    backgroundColor: props.status == "online" ? "green" : "transparent",
    border: props.status == "online" ? "none" : "2px solid #fff"
  }
  return (
    <tr>
      <td className="auther">
        <Image src={props.autherImg} width={30} height={30} alt={props.autherName} />
        <div>
        {props.autherName}
        <span className="gray">{props.autherEmail}</span>
        </div>
      </td>
      <td className="function">
        <span>{props.Fone}</span>
        <span className="gray">{props.Ftwo}</span>
      </td>
      <td className="status">
        <div style={statusStyle} >
          {props.status}
        </div>
      </td>
      <td>
        {props.date}
      </td>
    </tr>
  )
}

export default Atr