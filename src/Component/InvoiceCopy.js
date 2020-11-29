import React from "react";
import { selectInvoice } from "../features/invoiceSlice";
import { useSelector } from "react-redux";
import "./InvoiceCopy.scss";
import Pdf from "react-to-pdf";

const ref = React.createRef();

function InvoiceCopy() {
  const invoice = useSelector(selectInvoice);
  return (
    <div className="invoiceCopy">
      <Pdf targetRef={ref} filename="invoice.pdf">
        {({ toPdf }) => (
          <button className="btn btn-primary download" onClick={toPdf}>
            Download
          </button>
        )}
      </Pdf>
      <div ref={ref} className="invoiceCopy_container shadow-lg ">
        <div className="invoiceCopy_header container  ">
          <div style={{ textAlign: "left" }} className="pt-3">
            <p>
              <strong>{invoice[0].senderName}</strong>
            </p>
            <p>{invoice[0].senderEmail}</p>
            <p>
              <strong>Address: </strong>
              {invoice[0].senderAddress}
            </p>
            <p>
              <strong>Phone no.: </strong>
              {invoice[0].senderPhone}
            </p>
          </div>
          <div style={{ textAlign: "right" }} className="pt-3">
            <p>
              <strong>{invoice[0].recName}</strong>
            </p>
            <p>{invoice[0].recEmail}</p>
            <p>
              {invoice[0].recAddress}
              <strong> :Address</strong>
            </p>
            <p>
              {invoice[0].recPhone}
              <strong> :Phone no.</strong>
            </p>
            <p>
              {invoice[0].date}
              <strong> :Date</strong>
            </p>
            <p>
              {invoice[0].dueDate}
              <strong> :DueDate</strong>
            </p>
          </div>
        </div>
        <div>
          <table className="table container mt-5">
            <thead>
              <th>S.no</th>
              <th>Items</th>
              <th>Quantity</th>
              <th>UnitPrice</th>
              <th>Discount</th>
              <th>Tax</th>
              <th>Amount</th>
            </thead>
            <tbody>
              {invoice.map((data, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <p>{data.itemName}</p>
                    <p>{data.itemDesc}</p>
                  </td>
                  <td>{data.quantity}</td>
                  <td>{data.unitPrice}</td>
                  <td>{data.discount}</td>
                  <td>{data.tax}</td>
                  <td>{data.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="row">
          <div
            style={{ textALign: "right" }}
            className="col-md-6 offset-md-6 mt-5 invoice_total"
          >
            <p>
              <strong>Sub Total: </strong>
              {Math.round(invoice[0].subTotal)}
            </p>
            <p>
              <strong>Amount Paid</strong> {invoice[0].amountPaid}
            </p>
            <p>
              <strong>Balance Due</strong> {invoice[0].balanceDue}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceCopy;
