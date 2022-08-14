import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as yup from "yup";

const MyTextField = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input {...props} {...field} />
      {
        meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null
      }
    </>
  )
}

const MyCheckboxField = ({children, ...props}) => {
  const [field, meta] = useField({...props, type: "checkbox"});
  return (
    <>
      <label className="checkbox">
        <input type="checkbox" {...props} {...field} />
        {children}
      </label>
      {
        meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null
      }
    </>
  )
}

const CustomForm = () => {
  return (
    <Formik
      initialValues ={{
        name: "",
        email: "",
        amount: 0,
        currency: "",
        text: "",
        terms: false,
      }}
      validationSchema ={yup.object({
        name: yup.string()
          .min(2, "Minimum of 2 characters!")
          .required("Required field!"),
        email: yup.string()
          .email("Incorrect email!")
          .required("Required field!"),
        amount: yup.number()
          .min(5, "At least 5")
          .required("Required field!"),
        currency: yup.string()
          .required("Choose a currency!"),
        text: yup.string()
          .min(10, "At least 10 characters"),
        terms: yup.boolean()
          .required("Your consent is required")
          .oneOf([true], "Your consent is required"),
      })}
      onSubmit = {(values) => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className="form">
        <h2>Отправить пожертвование</h2>

        <MyTextField
          label="Ваше имя"
          id="name"
          name="name"
          type="text"
        />

        <MyTextField
          label="Ваша почта"
          id="email"
          name="email"
          type="email"
        />

        <MyTextField
          label="Количество"
          id="amount"
          name="amount"
          type="number"
        />

        <label htmlFor="currency">Валюта</label>
        <Field
          id="currency"
          name="currency"
          as="select"
        >
          <option value="">Выберите валюту</option>
          <option value="USD">USD</option>
          <option value="UAH">UAH</option>
          <option value="RUB">RUB</option>
        </Field>
        <ErrorMessage className="error" name="currency" component="div"/>
        <label htmlFor="text">Ваше сообщение</label>
        <Field
          id="text"
          name="text"
          as="textarea"
        />
        <ErrorMessage className="error" name="text" component="div"/>

        <MyCheckboxField
          name="terms"
        >
          Соглашаетесь с политикой конфиденциальности?
        </MyCheckboxField>
        <button type="submit">Отправить</button>
      </Form>
    </Formik>
  );
};

export default CustomForm;
