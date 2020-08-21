import React, { Fragment } from "react";

const ShowClientName = ({ waiterName }) => {
  return (
    <Fragment>
      <p>Meser@: {waiterName}</p>
    </Fragment>
  );
};

export default ShowClientName;
