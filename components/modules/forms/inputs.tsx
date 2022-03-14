import { useField, FieldHookConfig } from "formik";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props as FieldHookConfig<string>);
  return (
    <div className="form-group">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className={`form-control ${
          meta.touched && meta.error ? "is-invalid" : ""
        }`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-danger">{meta.error}</div>
      ) : null}
    </div>
  );
};

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props as FieldHookConfig<string>);
  return (
    <div className="form-group">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        className={`w-100 form-control ${
          meta.touched && meta.error ? "is-invalid" : ""
        }`}
        {...field}
        {...props}
        rows={8}
      />
      {meta.touched && meta.error ? (
        <div className="text-danger">{meta.error}</div>
      ) : null}
    </div>
  );
};

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({
    ...props,
    type: "checkbox",
  } as FieldHookConfig<any>);
  return (
    <div className="form-check">
      <input
        {...field}
        {...props}
        type="checkbox"
        className="form-check-input"
      />
      {children}
      <label className="form-check-label" />
      {meta.touched && meta.error ? (
        <div className="text-danger">{meta.error}</div>
      ) : null}
    </div>
  );
};

const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props as FieldHookConfig<string | number>);
  return (
    <div className="form-group">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select className="form-control" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="text-danger">{meta.error}</div>
      ) : null}
    </div>
  );
};

export { TextInput, TextArea, Checkbox, Select };
