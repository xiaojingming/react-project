import { Route, Routes } from 'react-router-dom';
// import Footer from './components/Footer';
import TestComponent from './pages/Test/index';
import TestComponent2 from './pages/Test/index2';
import TestComponent3 from './pages/Test/index3';
import TestComponent4 from './pages/Test/index4';
import TestComponent5 from './pages/Test/index5';
import TestComponent6 from './pages/Test/index6';
import TestComponent7 from './pages/Test/index7';
import TestComponent8 from './pages/Test/index8';
import TestComponent9 from './pages/Test/index9';
import CommentComponent from './pages/Comment';
import TodoListComponent from './pages/TodoList';
import 'antd/dist/antd.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/test" element={<TestComponent />} />
        <Route path="/test2" element={<TestComponent2 />} />
        <Route path="/test3" element={<TestComponent3 />} />
        <Route path="/test4" element={<TestComponent4 />} />
        <Route path="/test5" element={<TestComponent5 />} />
        <Route path="/test6" element={<TestComponent6 />} />
        <Route path="/test7" element={<TestComponent7 />} />
        <Route path="/test8" element={<TestComponent8 />} />
        <Route path="/test9" element={<TestComponent9 />} />
        <Route path="/comment" element={<CommentComponent />} />
        <Route path="/todolist" element={<TodoListComponent />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
