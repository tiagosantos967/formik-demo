import React from 'react';
import { Field } from 'formik';

import { 
  Form,
  CustomInputComponent,
  CustomSubmitComponent 
} from './components';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Form
          onSubmit={(values) => {
            console.log('form submit!', values)
          }}
          initialValues={{
            email: '',
            firstName: 'Tiago',
            lastName: 'Santos'
          }}
        >
          <Field name="firstName" component={CustomInputComponent} />
          <Field type="email" name="email" placeholder="Email" />
          <div>
            <div>
              <Field name="lastName" component={CustomInputComponent} />
            </div>
            <Field component="select" name="color">
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </Field> 
          </div>
          <button type="submit">Submit</button>
          <CustomSubmitComponent />
        </Form>
      </header>
    </div>
  );
}

export default App;
