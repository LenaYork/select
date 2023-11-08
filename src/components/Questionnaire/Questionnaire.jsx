import './Questionnaire.scss';
import { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { stylesConfig } from './stylesConfig';

export const Questionnaire = () => {
  // const ALLERGENS = ['Свинина', 'Рис', 'Оливковое масло', 'Тыква', 'Авокадо', 'Клубника', 'Мед', 'Орехи', 'Молоко', 'Апельсины'];
  const PREFERENCIES = ['Свинина', 'Рис', 'Оливковое масло', 'Тыква', 'Авокадо', 'Клубника', 'Мед', 'Орехи', 'Молоко', 'Апельсины'];
  const initialUserData = {
    userHeight: '',
    userWeight: '',
    userAge: '',
    userBust: '',
    userWaist: '',
    userHip: '',
    userWrist: ''
  };

  const [ isFemale, setIsFemale ] = useState(false);

  const [ userAnswers, setUserAnswers ] = useState(initialUserData);

  const allergensOptions = [
    { value: 'pork', label: 'Свинина' },
    { value: 'rice', label: 'Рис' },
    { value: 'olive oil', label: 'Оливковое масло' },
    { value: 'pumpkin', label: 'Тыква' },
    { value: 'avocado', label: 'авокадо' },
    { value: 'strawberry', label: 'клубника' },
    { value: 'honey', label: 'мед' },
    { value: 'nuts', label: 'орехи' },
    { value: 'milk', label: 'молоко' },
    { value: 'orange', label: 'апельсин' },
    { value: 'cheese', label: 'сыр' },
    { value: 'apple', label: 'яблоко' },
    { value: 'pasta', label: 'макароны' },
    { value: 'lemon', label: 'лимон' },
  ];

  const [ userAllergens, setUserAllergens ] = useState({});
  const animatedComponents = makeAnimated();
  
  const updateAllergens = (event) => {
    console.log(event.target);
    console.log(userAllergens);
    setUserAllergens({});
  };

  const getAllergensValue = () => {

  };

  const parameterHandler = (e) => {
    const currentParameter = e.target.id;
    const newValue = e.target.value.replace(/\D/g, '');
    setUserAnswers(prevState => ({
      ...prevState,
      [currentParameter]: newValue
    }));
  };

  const handleGenderOption = (event) => {
    const { value } = event.target;
    // console.log(value);

    if (value === 'female') {
      setIsFemale(true);
    } else if (value === 'male') {
      setIsFemale(false);
    }

    console.log('isFemale', isFemale);
  };

  // console.log('!!!!!', userAnswers);

  return(
    <section className="questionnaire">
      <div className="questionnaire-titles">
        <h1 className="questionnaire-title">Добро пожаловать!</h1>
        <p className="questionnaire-subtitle">
          Для завершения регистрации заполните анкету:
        </p>
      </div>
      <div className="questions">

        <section className="personal">
          <h2 className="personal-title">Данные:</h2>
          <div className="genders">
            <h3 className="genders-title">Пол</h3>
            <div className="genders-inputs">
              <div className="genders-input">
                <label htmlFor="male">
                  Мужской
                </label>
                <input
                  className="radio-button"
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  onChange={handleGenderOption}
                />
                <span className="label-span"></span>
              </div>
              <div className="genders-input">
                <label htmlFor="female">
                  Женский
                </label>
                <input
                  className="radio-button"
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  onChange={handleGenderOption}
                />
                <span className="label-span"></span>
              </div>
            </div>
          </div>
          {isFemale && <div className="female-wrapper">
            <div className="female-options">

              <div className="female-container">
                <p className="female-text">Беременность</p>
                <label className="switch">
                  <input 
                    type="checkbox"
                    // checked={isRememberMe}
                    // onChange={rememberMeHandler} 
                  />
                  <span className="slider round" />
                </label>
              </div>

              <div className="female-container">
                <p className="female-text">Лактация</p>
                <label className="switch">
                  <input 
                    type="checkbox"
                    // checked={isRememberMe}
                    // onChange={rememberMeHandler} 
                  />
                  <span className="slider round" />
                </label>
              </div>

            </div>
          </div>}
          <div className="personal-questions">
            <div className="question">
              <div className="question-text">
                <label className="question-title">Рост</label>
                <p className="question-description">Укажите рост в см</p>
              </div>
              <input
                type="text"
                className="question-input"
                placeholder="см"
                maxLength="3"
                id="userHeight"
                onChange={parameterHandler}
                value={userAnswers?.userHeight || ''}
              />
            </div>
            <div className="question">
              <div className="question-text">
                <label className="question-title">Вес</label>
                <p className="question-description">Укажите вес в кг</p>
              </div>
              <input 
                type="text"
                className="question-input"
                placeholder="кг"
                maxLength="3"
                id="userWeight"
                onChange={parameterHandler}
                value={userAnswers?.userWeight || ''}
              />
            </div>
            <div className="question">
              <div className="question-text">
                <label className="question-title">Возраст</label>
                <p className="question-description">Укажите ваш возраст</p>
              </div>
              <input 
                type="text"
                className="question-input"
                placeholder="лет"
                maxLength="3"
                id="userAge"
                onChange={parameterHandler}
                value={userAnswers?.userAge || ''}
              />
            </div>
          </div>
        </section>

        <section className="measurements">
          <h2 className="measurements-title">Замеры:</h2>
          <div className="measurements-questions">
            <div className="question">
              <div className="question-text">
                <label className="question-title">Грудь</label>
                <p className="question-description">Обхват груди в см</p>
              </div>
              <input 
                type="text"
                className="question-input"
                placeholder="см"
                maxLength="3"
                id="userBust"
                onChange={parameterHandler}
                value={userAnswers?.userBust || ''}
              />
            </div>
            <div className="question">
              <div className="question-text">
                <label className="question-title">Талия</label>
                <p className="question-description">Обхват талии в см</p>
              </div>
              <input 
                type="text"
                className="question-input"
                placeholder="см"
                maxLength="3"
                id="userWaist"
                onChange={parameterHandler}
                value={userAnswers?.userWaist || ''}
              />
            </div>
            <div className="question">
              <div className="question-text">
                <label className="question-title">Бедра</label>
                <p className="question-description">Обхват бедер в см</p>
              </div>
              <input 
                type="text"
                className="question-input"
                placeholder="см"
                maxLength="3"
                id="userHip"
                onChange={parameterHandler}
                value={userAnswers?.userHip || ''}
              />
            </div>
            <div className="question">
              <div className="question-text">
                <label className="question-title">Кисть</label>
                <p className="question-description">Обхват кисти руки в см</p>
              </div>
              <input 
                type="text"
                className="question-input"
                placeholder="см"
                maxLength="2"
                id="userWrist"
                onChange={parameterHandler}
                value={userAnswers?.userWrist || ''}
              />
            </div>
          </div>
           
        </section>

        <section className="preferencies">
          <h3 className="preferencies-title">
            Предпочтения по продуктам:
          </h3>
          <datalist id="preferencies-datalist">
            {PREFERENCIES.map((elem, index) => <option value={elem} key={`${index} ${elem}`}></option>)}
          </datalist>
          <div className="preferencies-items">
            {PREFERENCIES.map(elem => (
              <p 
                id={elem}
                className="preferencies-item"
                key={elem}
              >
                {elem}
              </p>
            ))}
            {/* <p className="preferencies-item">Свинина</p>
            <p className="preferencies-item">Рис</p>
            <p className="preferencies-item">Оливковое масло</p>
            <p className="preferencies-item">Тыква</p>
            <p className="preferencies-item">Авокадо</p>
            <p className="preferencies-item">Свинина</p>
            <p className="preferencies-item">Рис</p>
            <p className="preferencies-item">Оливковое масло</p>
            <p className="preferencies-item">Тыква</p>
            <p className="preferencies-item">Авокадо</p> */}
          </div>
          <div className="preferencies-inputs">
            <label 
              htmlFor="preferencies-input"
              className="preferencies-inputs-text"
            >
              Начните писать
            </label>
            <input
              type="text"
              className="preferencies-input"
              id="preferencies-input"
              list="preferencies-datalist"
            />
          </div>
        </section>

        <section className="allergens">
          <h3 className="allergens-title">Аллергены:</h3>
          <div className="allergens-container">
            <label 
              htmlFor="allergens-input"
              className="allergens-inputs-text"
            >
              Начните писать
            </label>
            <Select 
              styles={stylesConfig}
              classNamePrefix="allergens-select"
              onChange={updateAllergens} 
              value={getAllergensValue()} 
              options={allergensOptions}
              components={animatedComponents}
              isMulti
              id="allergens-input"
              placeholder="Аллергены" />
          </div>
          
          {/* <div className="allergens-inputs">
            <label 
              htmlFor="allergens-input"
              className="allergens-inputs-text"
            >
              Начните писать
            </label>
            <input
              type="text"
              className="allergens-input"
              id="allergens-input"
              list="allergens-datalist"
            />
          </div> */}
        </section>

        <section className="activities">
          <h3 className="activities-title">Физическая активность:</h3>
          <p className="activities-description">Отметьте уровень физической активности</p>
          <div className="activities-wrapper">
            <div className="activities-question">
              <input 
                type="radio"
                id="mental"
                value="mental"
                name="activity"
              />
              <span className="activity-span"></span>
              <div className="activities-question-container">
                <label 
                  htmlFor="mental"
                  className="activities-label"
                >
                  Умственный труд
                </label>
              </div>
            </div>

            <div className="activities-question">
              <input 
                type="radio"
                id="light-physial"
                value="light-physical"
                name="activity"
              />
              <span className="activity-span"></span>
              <div className="activities-question-container">
                <label 
                  htmlFor="light-physical"
                  className="activities-label"
                >
                  Легкий физический труд
                </label>
                <p className="activities-description">
                  Активная работа "на ногах"
                </p>
              </div>
            </div>

            <div className="activities-question">
              <input 
                type="radio"
                id="medium-physical"
                value="medium-physical"
                name="activity"
              />
              <span className="activity-span"></span>
              <div className="activities-question-container">
                <label 
                  htmlFor="medium-physical"
                  className="activities-label"
                >
                  Физический труд средней тяжести
                </label>
                <p className="activities-description">
                  ежедневные тренировки
                </p>
              </div>
            </div>

            <div className="activities-question">
              <input 
                type="radio"
                id="hard-physical"
                value="hard-physical"
                name="activity"
              />
              <span className="activity-span"></span>
              <div className="activities-question-container">
                <label 
                  htmlFor="hard-physical"
                  className="activities-label"
                >
                  Тяжелый физический труд
                </label>
                <p className="activities-description">
                  Профессиональные спортсмены
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="questionnaire-buttons">
        <button
          className="decline-button"
          type="button"
        >
          Отмена
        </button>
        <button
          className="confirm-button"
          type="submit"
        >
          Сохранить
        </button>
      </div>
    </section>
  );
};