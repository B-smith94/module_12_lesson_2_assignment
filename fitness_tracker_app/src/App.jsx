// Task 1
import { Provider } from 'react-redux';
import { store } from './store';
import { Route, Routes } from 'react-router-dom';
import Exercises from './components/Exercises';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <div className='app-container'>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exercises' element={<Exercises />} />
        </Routes>
      </div>
    </Provider>
  )
}

export default App;