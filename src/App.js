import { Login } from '@mui/icons-material';
import './App.css';
import LoginView from './Views/LoginView/LoginView';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginView></LoginView>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
