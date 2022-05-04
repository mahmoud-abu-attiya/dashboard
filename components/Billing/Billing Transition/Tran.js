import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded';
import YTR from './YTR';

const Tran = () => {
  return (
    <div className='tran'>
      <div className="head">
        <h3>Your Transaction&apos;s</h3>
        <div className="date">
          <DateRangeRoundedIcon />
          <div className="gray">23 - 30 March 2020</div>
        </div>
      </div>
      <div className="gray">NEWEST</div>
      <YTR 
        name='Netflix'
        money="- $ 2,500"
        date="27 March 2020, at 12:30 PM"
        state="down"
      />
      <YTR 
        name='Apple'
        money="+ $ 2,000"
        date="27 March 2020, at 04:30 AM"
        state="up"
      />
      <YTR 
        name='Stripe'
        money="+ $ 750"
        date="26 March 2020, at 13:45 PM"
        state="up"
      />
      <YTR 
        name='HubSpot'
        money="Pending"
        date="26 March 2020, at 12:30 PM"
        state="pending"
      />
      <YTR 
        name='HubSpot'
        money="+ $ 2,500"
        date="26 March 2020, at 08:30 AM"
        state="down"
      />
      <YTR 
        name='Webflow'
        money="+ $ 2,500"
        date="26 March 2020, at 05:00 AM"
        state="up"
      />
      <YTR 
        name='Fedex'
        money="Pending"
        date="26 March 2021, at 03:30 PM"
        state="pending"
      />
    </div>
  )
}

export default Tran