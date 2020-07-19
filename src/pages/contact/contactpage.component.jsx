import React from "react";
import { useDispatch, useSelector } from "react-redux";

import testingReducer from "../../store/testing/testing.reducer";
import { testingDynamicRedux } from "../../store/testing/testing.actions";

import withReducer from "../../store/withReducer";

const ContactUS = () => {
  const dispatch = useDispatch();

  const testingData = useSelector(({ test }) => test.testing);

  return (
    <div
      onClick={() => dispatch(testingDynamicRedux())}
      style={{
        cursor: "pointer",
        textAlign: "center",
        fontWeight: "bold",
        color: `${testingData ? `green` : `red`}`,
      }}
    >
      {testingData
        ? `${testingData}`
        : `Click here to inject dynamic state into redux ......`}
    </div>
  );
};

export default withReducer("test", testingReducer)(ContactUS);
