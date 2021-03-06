import React from 'react';
import style from './Search.module.css';
import { Field, Formik } from 'formik';
import Input from '../../common/Forms/Input/Input';

const Search = (props) => {  

  const submitForm = (values, { setSubmitting }) => {    
    props.onFormSubmit(values);
    setSubmitting(false);
  }

  return (
    <div className={style.wrap}>
      <Formik
        initialValues={{ s: ''}}     
        onSubmit={submitForm}
      > 
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (      
        <form action="/search" className={style.search_form} onSubmit={handleSubmit}>
          <button>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.7985 17.8093L14.3908 13.4014H14.3433C15.7019 11.7994 16.3885 9.73415 16.2594 7.63761C16.1303 5.54106 15.1955 3.57564 13.6507 2.15248C12.1058 0.729312 10.0705 -0.041345 7.97057 0.00171172C5.87059 0.0447685 3.8686 0.898204 2.38338 2.38349C0.898162 3.86878 0.0447664 5.87087 0.00171164 7.97094C-0.0413431 10.071 0.729278 12.1064 2.15237 13.6513C3.57547 15.1962 5.5408 16.131 7.63725 16.2601C9.7337 16.3892 11.7989 15.7026 13.4007 14.344C13.4007 14.344 13.4007 14.3779 13.4007 14.3915L17.8085 18.7994C17.8715 18.863 17.9465 18.9134 18.0292 18.9478C18.1118 18.9823 18.2004 19 18.2899 19C18.3795 19 18.4681 18.9823 18.5507 18.9478C18.6334 18.9134 18.7084 18.863 18.7714 18.7994C18.8409 18.7378 18.8971 18.6627 18.9363 18.5785C18.9756 18.4944 18.9972 18.4031 18.9997 18.3102C19.0023 18.2174 18.9857 18.1251 18.9511 18.0389C18.9165 17.9527 18.8646 17.8746 18.7985 17.8093ZM8.14536 14.9001C6.80417 14.9001 5.49311 14.5023 4.37795 13.7572C3.2628 13.012 2.39364 11.9529 1.8804 10.7138C1.36715 9.47461 1.23286 8.11109 1.49451 6.79561C1.75616 5.48014 2.402 4.2718 3.35036 3.32339C4.29872 2.37499 5.50701 1.72912 6.82242 1.46745C8.13783 1.20579 9.50129 1.34009 10.7404 1.85336C11.9795 2.36663 13.0385 3.23583 13.7837 4.35103C14.5288 5.46624 14.9265 6.77736 14.9265 8.11861C14.9265 9.00916 14.7511 9.891 14.4103 10.7138C14.0695 11.5365 13.57 12.2841 12.9403 12.9138C12.3107 13.5435 11.5631 14.0431 10.7404 14.3839C9.91766 14.7247 9.03587 14.9001 8.14536 14.9001Z" fill="#7C9BA9" />
            </svg>
          </button>
          <Field
            component={Input}
            name={'s'}
            placeholder={'Поиск...'}
            type={'text'}
            onChange={handleChange}
            onBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}  
          />
        </form>
      )}
      </Formik>   
    </div>        
  );
}

export default Search; 