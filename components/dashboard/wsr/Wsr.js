import React from 'react'
import Grid from "@material-ui/core/Grid";
import WelcomeCard from './WelcomeCard';
import SatisfactionRateCard from './SatisfactionRateCard';
import ReferralTrackingCard from './ReferralTrackingCard';

const Wsr = () => {
  return (
    <Grid container spacing={3} className='wsr'>
      <Grid item xs={12} sm={5}>
        <WelcomeCard />
      </Grid>
      <Grid item xs={6} sm={3}>
        <SatisfactionRateCard />
      </Grid>
      <Grid item xs={6} sm={4}>
        <ReferralTrackingCard />
      </Grid>
    </Grid>
  )
}

export default Wsr