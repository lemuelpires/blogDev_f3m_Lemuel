import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { userAuthentication } from './hooks/userAuthentication';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';
import PostDetails from './pages/PostDetails/PostDetails';
import loading from './assets/Loading.gif';
import EditPost from './pages/EditPost/EditPost';

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = userAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return (
      <div className='container load'>
        <img src={loading} alt='Gif Loading User' width='120px' height='120px' />
      </div>
    );
  }

  return (
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/post/create' element={<CreatePost />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/posts/:postId' element={<PostDetails />} />
              <Route path="/edit-post/:postId" element={<EditPost />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;

