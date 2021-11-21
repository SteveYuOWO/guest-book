import React from "react";
import PropTypes from "prop-types";
import Big from "big.js";

export default function Form({ onSubmit, currentUser }) {
  return (
    <form onSubmit={onSubmit}>
      <fieldset id="fieldset">
        <p>
          Sign the guest book, {currentUser.accountId}! <br />
          <br />
          Bonus task: <br />
          <br />
          ✅ Restrict a user to only sign the guest book once - done <br />
          <br />
          ✅ Add the ability to store and return more than 10 signatures - done
          (increased to 100) <br />
          <br />✅ Display “premium” messages in a unique way(a unique star) -
          done
          <br />
        </p>
        <p className="highlight">
          <label htmlFor="message">Message:</label>
          <input
            autoComplete="off"
            autoFocus
            id="message"
            required
            style={{ color: "gray" }}
          />
        </p>
        <p>
          <label htmlFor="donation">Donation (optional):</label>
          <input
            style={{ color: "gray" }}
            autoComplete="off"
            defaultValue={"0"}
            id="donation"
            max={Big(currentUser.balance).div(10 ** 24)}
            min="0"
            step="0.01"
            type="number"
          />
          <span title="NEAR Tokens">Ⓝ</span>
        </p>
        <button type="submit">Sign</button>
      </fieldset>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    accountId: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired,
  }),
};
