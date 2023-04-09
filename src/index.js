import React from 'react';
import ReactDOM from 'react-dom';
import StudentMain from './StudentMain'
import StudentTable from './StudentTable'


ReactDOM.render(
   <React.StrictMode>
      <StudentMain />
      <StudentTable/>
   </React.StrictMode>,
   document.getElementById('root')
);