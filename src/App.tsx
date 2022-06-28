import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import TestComponent from './pages/Test/index';
import CommentComponent from './pages/Comment';

function App() {
  return (
    <>
      <Routes>
        <Route path="/test" element={<TestComponent />} />
        <Route path="/comment" element={<CommentComponent />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
