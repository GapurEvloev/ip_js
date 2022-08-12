import {useFormik} from "formik";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      amount: 0,
      currency: "",
      text: "",
      terms: false,
    },
    onSubmit: values => console.log(JSON.stringify(values, null, 2))
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <h2>Отправить пожертвование</h2>
      <label htmlFor="name">Ваше имя</label>
      <input id="name" name="name" type="text" value={formik.values.name} onChange={formik.handleChange}/>
      <label htmlFor="email">Ваша почта</label>
      <input id="email" name="email" type="email"/>
      <label htmlFor="amount">Количество</label>
      <input id="amount" name="amount" type="number"/>
      <label htmlFor="currency">Валюта</label>
      <select id="currency" name="currency">
        <option value="">Выберите валюту</option>
        <option value="USD">USD</option>
        <option value="UAH">UAH</option>
        <option value="RUB">RUB</option>
      </select>
      <label htmlFor="text">Ваше сообщение</label>
      <textarea id="text" name="text"/>
      <label className="checkbox">
        <input name="terms" type="checkbox"/>
        Соглашаетесь с политикой конфиденциальности?
      </label>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default Form;
