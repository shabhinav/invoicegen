import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "./Invoice.scss";
import { withRouter } from "react-router-dom";

function Invoice(props) {
  return (
    <div className="invoice container">
      <div onClick={() => props.history.push("/basicInfo")}>
        <AddIcon className="newinvoice" />
        <span className="newinvoice_text">Create New Invoice</span>
      </div>
    </div>
  );
}

export default withRouter(Invoice);
