import { Route, Routes } from 'react-router-dom';
// import Footer from './components/Footer';
import TestComponent from './pages/Test/index';
import TestComponent2 from './pages/Test/index2';
import CommentComponent from './pages/Comment';

function App() {
  return (
    <>
      <Routes>
        <Route path="/test" element={<TestComponent />} />
        <Route path="/test2" element={<TestComponent2 />} />
        <Route path="/comment" element={<CommentComponent />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
