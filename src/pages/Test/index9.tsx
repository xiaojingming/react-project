/* eslint-disable react/jsx-no-constructed-context-values */
import { useNavigate } from 'react-router-dom';
import Context from '../../hooks/useContext';
import SubComponent3 from './components/subComponent3';

function TestComponent9() {
  const navigate = useNavigate();
  const val = {
    name: 'xiao',
    age: 24,
  };
  const handleNavigateTo = () => {
    navigate('/test10?id=1');
    // navigate('/test10/100');
  };
  return (
    <Context.Provider value={val}>
      <div>
        test-component-9
        <SubComponent3 />
        <div
          style={{ cursor: 'pointer', border: '1px solid #ccc', display: 'inline-block' }}
          onClick={handleNavigateTo}
        >
          to test 10
        </div>
      </div>
    </Context.Provider>
  );
}

export default TestComponent9;
