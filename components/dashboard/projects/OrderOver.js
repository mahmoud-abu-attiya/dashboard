import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import Order from "./Order";
import NotificationsIcon from '@material-ui/icons/Notifications';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import CreditCardRoundedIcon from '@material-ui/icons/CreditCardRounded';
import InboxRoundedIcon from '@material-ui/icons/InboxRounded';
import DesktopMacRoundedIcon from '@material-ui/icons/DesktopMacRounded';

const OrderOver = () => {
  return (
    <div className="order-over">
      <div className="head">
        <div>
          <h2>Order Overviwe</h2>
          <span className="done">
            <span className="green">
              <CheckCircleRoundedIcon style={{ fontSize: 15 }} />
            </span>
            <span className="gray"> +20% done this month</span>
          </span>
        </div>
      </div>
      <div className="orders">
        <Order
          icon={<NotificationsIcon />}
          details="$2400, Design changes"
          date="22 DEC 7:20 PM"
          color="#0075ff"
        />
        <Order
          icon={<CodeRoundedIcon />}
          details="New order"
          date="21 DEC 11 PM"
          color="#d9191b"
        />
        <Order
          icon={<ShoppingCartRoundedIcon />}
          details="Server payments for Aprils"
          date="21 DEC 9:34 PM"
          color="#4299e1"
        />
        <Order
          icon={<CreditCardRoundedIcon />}
          details="New card added for order"
          date="20 DEC 2:20 AM"
          color="#ffb547"
        />
        <Order
          icon={<InboxRoundedIcon />}
          details="$2400, Design changes"
          date="18 DEC 4:54 AM"
          color="#9f7aea"
        />
        <Order
          icon={<DesktopMacRoundedIcon />}
          details="New order"
          date="17 DEC 8:20 PM"
          color="#470137"
        />
      </div>
    </div>
  );
};

export default OrderOver;
