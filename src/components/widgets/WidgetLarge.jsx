import "./widgetLarge.css";
import avatar from "../../images/avatar.jpg";

const WidgetLarge = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLargeButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLarge">
      <h3 className="widgetLargeTitle">Latetst Transactions</h3>
      <table className="widgetLargeTable">
        <tr className="widgetLargetr">
          <th className="widgetLargeTh">Customer</th>
          <th className="widgetLargeTh">Date</th>
          <th className="widgetLargeTh">Amount</th>
          <th className="widgetLargeTh">Status</th>
        </tr>
        <tr className="widgetLargetr">
          <td className="widgetLargeUser">
            <img src={avatar} alt="" className="widgetLargeImg" />
            <span className="widgetLargeName">Susan Carol</span>
          </td>
          <td className="widgetLargeDate">2 Jun 2022</td>
          <td className="widgetLargeAmt">$122.00</td>
          <td className="widgetLargeStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLargetr">
          <td className="widgetLargeUser">
            <img src={avatar} alt="" className="widgetLargeImg" />
            <span className="widgetLargeName">Susan Carol</span>
          </td>
          <td className="widgetLargeDate">2 Jun 2022</td>
          <td className="widgetLargeAmt">$122.00</td>
          <td className="widgetLargeStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLargetr">
          <td className="widgetLargeUser">
            <img src={avatar} alt="" className="widgetLargeImg" />
            <span className="widgetLargeName">Susan Carol</span>
          </td>
          <td className="widgetLargeDate">2 Jun 2022</td>
          <td className="widgetLargeAmt">$122.00</td>
          <td className="widgetLargeStatus">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLarge;
