import React, { Fragment } from "react";

const ShowWaiterName = ({ userName }) => {
  return (
    <Fragment>
      <p>Cliente: {userName}</p>
    </Fragment>
  );
};

export default ShowWaiterName;
