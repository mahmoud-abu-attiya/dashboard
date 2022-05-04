import React from 'react'
import Bill from './Bill'
import Tran from './Tran'
import Grid from "@material-ui/core/Grid";

const BillTran = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={7}>
        <Bill />
      </Grid>
      <Grid item xs={12} sm={5}>
        <Tran />
      </Grid>
    </Grid>
  )
}

export default BillTran