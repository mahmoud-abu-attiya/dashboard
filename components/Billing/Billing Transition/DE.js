import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';

const DE = (props) => {
  return (
    <div className='de'>
      <div className="head">
        <h4>{props.dename}</h4>
        <button>
          <DeleteRoundedIcon />
          DELETE
        </button>
        <button>
          <EditRoundedIcon />
          EDIT
        </button>
      </div>
      <div className="info">
        <span className="gray">
        Company Name:
        {props.cname}
        </span>
        <span className="gray">
        Email Address:
        {props.email}
        </span>
        <span className="gray">
        VAT Number:
        {props.vat}
        </span>
      </div>
    </div>
  )
}

export default DE