import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import BusinessIcon from '@material-ui/icons/Business';

const Balance = () => {
  return (
    <div className='balance'>
      <div className="header">
        <div className="head">
          <h5>Credit Balance</h5>
          <MoreHorizIcon />
        </div>
          <h2>$25,215</h2>
      </div>
      <div className="newest">
        <h6 className="gray">NEWEST</h6>
        <div className="newest-info">
          <div className="icon">
            <BusinessIcon />
          </div>
          <div className="info">
            <h5>Bill & Taxes</h5>
            <span className="gray">Today, 16:36</span>
          </div>
          <div className="price">
            -$154.50
          </div>
        </div>
      </div>
    </div>
  )
}

export default Balance