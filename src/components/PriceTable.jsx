import React from "react";

const PriceTable = ({ packageType, price, discount }) => {
  return (
    <table className="text-sm w-full max-w-80">
      <tbody>
        <tr className="justify-between">
          <th className="text-start w-[33%]">Service</th>
          <th className="text-center w-[33%]">Non-Member</th>
          <th className="text-center w-[33%]">Member</th>
        </tr>
        <tr className="text-xs">
          <td className="">{packageType[0]}</td>
          <td className="text-center">{price[0]}</td>
          <td className="text-center">{discount[0]}</td>
        </tr>
        <tr className="text-xs">
          <td className="">{packageType[1]}</td>
          <td className="text-center">{price[1]}</td>
          <td className="text-center">{discount[1]}</td>
        </tr>
        <tr className="text-xs">
          <td className="">{packageType[2]}</td>
          <td className="text-center">{price[2]}</td>
          <td className="text-center">{discount[2]}</td>
        </tr>
        <tr className="text-xs">
          <td className="">{packageType[3]}</td>
          <td className="text-center">{price[3]}</td>
          <td className="text-center">{discount[3]}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PriceTable;
