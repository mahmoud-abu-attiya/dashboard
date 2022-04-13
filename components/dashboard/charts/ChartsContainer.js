import Splinechart from "./SplineChart";
import BarsChart from "./barsChart";
import AUprogres from "./AUprogres";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CardMembershipIcon from "@material-ui/icons/CardMembership";

const ChartsContainer = () => {
  return (
    <div className="charts">
      <div className="spline-chart" data-aos="fade-right">
        <h2>Sales Overview</h2>
        <span className="green">+5% </span>
        <span className="gray">more in 2022</span>
        <Splinechart />
      </div>
      <div className="bars-chart">
        <BarsChart />
        <h2>Active Users</h2>
        <span className="green">(+23) </span>
        <span className="gray">than last week</span>
        <div className="progress">
          <div>
            <AUprogres
              icon={<AccountBalanceWalletIcon style={{ fontSize: 15 }} />}
              address="users"
              num="32,987"
            />
          </div>
          <div>
            <AUprogres
              icon={<TouchAppIcon style={{ fontSize: 15 }}/>}
              address="Clicks"
              num="2,42M"
            />
          </div>
          <div>
            <AUprogres
              icon={<ShoppingCartIcon style={{ fontSize: 15 }}/>}
              address="Sales"
              num="2,400$"
            />
          </div>
          <div>
            <AUprogres
              icon={<CardMembershipIcon style={{ fontSize: 15 }}/>}
              address="Items"
              num="430"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsContainer;
