import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import AnnouncementBar from './components/AnnouncementBar';
import Home from './pages/Home';
import Checkout from './pages/Checkout';

function App() {
    return (
        <BrowserRouter>

            <AnnouncementBar />
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;