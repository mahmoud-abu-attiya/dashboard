import Grid from "@material-ui/core/Grid";
import Invoices from "../Invoices/Invoices";
import VBP from "./VBP";


const VBPI = () => {
  return (
    <Grid container spacing={3} className="vbpi">
      <Grid item xs={12} sm={8}>
        <VBP />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Invoices/>
      </Grid>
    </Grid>
  )
}

export default VBPI