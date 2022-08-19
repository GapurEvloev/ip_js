import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import {useDispatch, useSelector} from "react-redux";
import {heroCreated} from "../../actions";
import {useHttp} from "../../hooks/http.hook";

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {
  const {filters, filtersLoadingStatus} = useSelector(state => state);
  const dispatch = useDispatch();
  const {request} = useHttp();

  const handlerAddHero = (values) => {
    const newHero = {
      id: uuidv4(),
      ...values
    };

    request("http://localhost:3001/heroes", "POST", JSON.stringify(newHero))
      .then(res => console.log(res, 'Отправка успешна'))
      .then(dispatch(heroCreated(newHero)))
      .catch(err => console.log(err));
  }

  const renderFilters = (filters, status) => {
    if (status === "loading") {
      return <option>Загрузка элементов</option>
    } else if (status === "error") {
      return <option>Ошибка загрузки</option>
    }

    // Если фильтры есть, то рендерим их
    if (filters && filters.length > 0 ) {
      return filters.map(({name, label}) => {
        // Один из фильтров нам тут не нужен
        // eslint-disable-next-line
        if (name === 'all')  return;

        return <option key={name} value={name}>{label}</option>
      })
    }
  }

  return (
    <Formik
      initialValues={{ name: '', description: '', element: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        description: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        element: Yup.string()
          .oneOf(
            ['fire', 'water', 'wind', 'earth'],
            'Invalid Job Type'
          )
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handlerAddHero(values);
        resetForm();
      }}
    >
      <Form className="border p-4 shadow-lg rounded">
        <div className="mb-3">
          <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
          <Field
            name="name"
            type="text"
            required
            className="form-control"
            id="name"
            placeholder="Как меня зовут?"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="text" className="form-label fs-4">Описание</label>
          <Field
            required
            name="description"
            as="textarea"
            className="form-control"
            id="text"
            placeholder="Что я умею?"
            style={{"height": '130px'}}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
          <Field
            required
            as="select"
            id="element"
            className="form-select"
            name="element"
          >
            <option >Я владею элементом...</option>
            {renderFilters(filters, filtersLoadingStatus)}
          </Field>
        </div>

        <button type="submit" className="btn btn-primary">Создать</button>
      </Form>
    </Formik>
  )
}

export default HeroesAddForm;