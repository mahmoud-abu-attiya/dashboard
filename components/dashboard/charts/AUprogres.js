import LinearProgress from '@material-ui/core/LinearProgress';

const AUprogres = (props) => {
  return (
    <div className='progres'>
      <div className="progres__head">
        <div className="progres__head__icon">
          {props.icon}
        </div>
        <div className="progres__head__address">
          {props.address}
        </div>
      </div>
      <h3 className="progres__num">
        {props.num}
      </h3>
      {/* <progress max="100" value="60" /> */}
      <LinearProgress variant="determinate" value={50}/>
    </div>
  )
}

export default AUprogres