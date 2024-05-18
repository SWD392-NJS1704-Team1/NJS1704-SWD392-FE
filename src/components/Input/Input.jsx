import React, { forwardRef } from "react";

const Input = (
  {
    label,
    type = "text",
    required,
    error,
    renderInput = undefined,
    ...restProps
  },
  ref
) => {
  return (
    <div className="form-group">
      <label className="label" style={{ width: "100%" }}>
        {label} {required && <span>*</span>}
      </label>
      {renderInput?.({ ...restProps, error, ref }) || (
        <input
          type={type}
          {...restProps}
          className={`form-control ${error ? "input-error" : ""}`}
          ref={ref}
        />
      )}
      {error && <p className="form-error">{error}</p>}
    </div>
  );
};

export default forwardRef(Input);
