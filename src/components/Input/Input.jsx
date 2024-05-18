import React, { forwardRef } from "react";

const Input = (
  {
    label,
    type = "text",
    cssClass,
    cssLabel,
    error,
    renderInput = undefined,
    icon,
    ...restProps
  },
  ref
) => {
  return (
    <div className="form-group relative my-4">
      {renderInput?.({ ...restProps, ref }) || (
        <input
          type={type}
          {...restProps}
          className={`form-control ${cssClass}`}
          ref={ref}
        />
      )}
      <label className={`label ${cssLabel}`} htmlFor="">
        {label}
      </label>
      {icon ? icon : ""}
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default forwardRef(Input);
