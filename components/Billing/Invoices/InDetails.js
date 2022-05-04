import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';

const InDetails = (props) => {
  return (
    <div className='detail'>
      <div className="data">
        <h4>{props.date}</h4>
        <span className="gray">{props.span}</span>
      </div>
      <strong className="price">${props.price}</strong>
      <div className="pdf">
        <DescriptionRoundedIcon />
        PDF
      </div>
    </div>
  )
}

export default InDetails