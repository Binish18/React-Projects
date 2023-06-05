import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Hide from './Hide/Hide';
import Landing from './Landing/Landing';
import PatientForm from './patient-form/PatientForm'
import StopWatch from './StopWatch/StopWatch';
import Todo from './Todo/Todo';




function App() {
  return (
    <div className="App">
     <PatientForm/>
   {/* <Hide/>
   <StopWatch/> */}
    </div>
  );
}

export default App;
