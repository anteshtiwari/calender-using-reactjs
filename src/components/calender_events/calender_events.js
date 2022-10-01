import React from 'react';
import './App.css'
import { Formik } from 'formik';

class CalenderEvent extends React.Component {
   constructor(props) {
      super(props);

      this.initialValues = { name: '' }
   }
  
   handleSubmit = (values, setSubmitting) => {
      setTimeout(() => {
         alert(JSON.stringify(values, null, 1));
         setSubmitting(false);
      }, 400);
   }
   render() {
      return (
         <div id="expenseForm">
            <Formik
               initialValues={this.initialValues}
               
               onSubmit={(values, { setSubmitting }) => this.handleSubmit(values, setSubmitting)} > 
               {
                  ({
                     values,
                     errors,
                     touched,
                     handleChange,
                     handleBlur,
                     handleSubmit,
                     isSubmitting,
                     /* and other goodies */
                  }) => 
                  (
                     <form onSubmit={handleSubmit}>
                        <label for="name"><span>{errors.name && touched.name && errors.name}</span></label>
                        <input type="text" id="name" name="name" 
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.name} />

                       
                        <input type="submit" value="Submit" disabled={isSubmitting} />
                     </form>
                  )
               }
            </Formik>
         </div>
      )
   }
}
export default Calenderevent;