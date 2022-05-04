import Image from 'next/image'
import mastercard from "../../../public/images/mastercard.png"
import visacard from "../../../public/images/visa.png"
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import Grid from '@material-ui/core/Grid'

const Payment = () => {
  return (
    <div className='payment'>
      <div className="head">
        <h3>Payment Method</h3>
        <button>ADD NEW CARD</button>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div className="paycard">
            <Image src={mastercard} width={30} height={30} alt="mastercard" />
            <div className="code">7812 2139 0823 XXXX</div>
            <div className="icon">
              <EditRoundedIcon />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="paycard">
            <Image src={visacard} width={30} height={15} alt="visacard" />
            <div className="code">7812 2139 0823 XXXX</div>
            <div className="icon">
              <EditRoundedIcon />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Payment