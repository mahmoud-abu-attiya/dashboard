import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import PriorityHighRoundedIcon from '@material-ui/icons/PriorityHighRounded';

const YTR = (props) => {
  const handelColors = {
    color : props.state == "up" ? 'green' : props.state == "down" ? 'red' : 'gray'
  }
  return (
    <div className='ytr'>
      <div className="icon" style={handelColors}>
        {props.state == "up" ? <ArrowUpwardRoundedIcon /> : props.state == "down" ? <ArrowDownwardRoundedIcon /> : <PriorityHighRoundedIcon />}
      </div>
      <div className="info">
        <h4>{props.name}</h4>
        <span className="gray">{props.date}</span>
      </div>
      <div className="money" style={handelColors}>
        {props.money}
      </div>
    </div>
  )
}

export default YTR