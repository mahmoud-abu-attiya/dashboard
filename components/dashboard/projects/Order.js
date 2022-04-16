const Order = (props) => {
  return (
    <div className="order">
      <div className="order-icon" style={{ color:props.color }}>{props.icon}</div>
      <div className="details">
        <div className="info">{props.details}</div>
        <span className="gray">{props.date}</span>
      </div>
    </div>
  );
};

export default Order;
