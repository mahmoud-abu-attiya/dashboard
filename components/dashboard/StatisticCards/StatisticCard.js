import React from "react";
import StCard from "./StCard";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import LanguageIcon from "@material-ui/icons/Language";
import NoteRoundedIcon from "@material-ui/icons/NoteRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import Grid from "@material-ui/core/Grid";

const StatisticCard = () => {
  return (
    <Grid container spacing={3} className="st-cards">
      <Grid item xs={6} sm={3}>
        <StCard
          title="Today's Money"
          valu="$16,000"
          percent="20"
          icon={<AccountBalanceWalletIcon />}
        />
      </Grid>
      <Grid item xs={6} sm={3}>
        <StCard
          title="Today's Users"
          valu="3,200"
          icon={<LanguageIcon />}
          percent="30"
        />
      </Grid>
      <Grid item xs={6} sm={3}>
        <StCard
          title="New Clients"
          valu="3,462"
          percent="60"
          icon={<NoteRoundedIcon />}
        />
      </Grid>
      <Grid item xs={6} sm={3}>
        <StCard
          title="Total Sales"
          valu="$16,000"
          percent="18"
          icon={<ShoppingCartRoundedIcon />}
        />
      </Grid>
    </Grid>
  );
};

export default StatisticCard;
