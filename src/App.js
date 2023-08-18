import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Myprojects from './components/project/Myprojects';
import Quiz from './components/project/quiz/Quiz-index';
import TodoList from './components/project/todolist/Todolist';
import ImageSearch from './components/project/imagesearch/ImageSearch';
import Contacts from './components/Contacts';
import ConnectBackend from './components/project/connectbackend/ConnectBackend';



function App() {
  return (
    <div className="App">
    
      <Router>
      <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/myprojects' element={<Myprojects/>}/>
          <Route path='/myprojects/quiz' element={<Quiz/>}/>
          <Route path='/myprojects/todolist' element={<TodoList/>}/>
          <Route path='/myprojects/imagesearch' element={<ImageSearch/>}/>
          <Route path='/myprojects/connectbackend' element={<ConnectBackend/>}/>
          <Route path='/contact/' element={<Contacts/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}


export default App;
