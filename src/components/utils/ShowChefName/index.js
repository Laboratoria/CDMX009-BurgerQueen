import React, { Fragment } from "react";

const ShowChefName = ({ chefName }) => {
  return (
    <Fragment>
      <p>Cociner@: {chefName}</p>
    </Fragment>
  );
};

export default ShowChefName;
