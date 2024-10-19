import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EventPage from './pages/EventPage';
import EventDetailPage from './pages/EventDetailPage';
import NavBar from './components/NavBar';
import './styles/general.css';


function App(){
    return(
        <div className="app">
            <NavBar />
            <Routes>
                <Route path="/" element={<EventPage />} />
                <Route path="/event/:id" element={<EventDetailPage />} />
            </Routes>
        </div>
    );
}

export default App;