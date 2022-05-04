import Grid from "@material-ui/core/Grid";
import Balance from "./Balance";
import Payment from "./Payment";
import Vision from "./Vision";

const VBP = () => {
  return (
      <Grid container spacing={3} className="vbp">
        <Grid item xs={12} sm={6}>
          <Vision />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Balance />
        </Grid>
        <Grid item sm={12}>
          <Payment />
        </Grid>
      </Grid>
  );
};

export default VBP;
