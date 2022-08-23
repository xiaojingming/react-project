import { useSearchParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

function TestComponent10() {
  const [params] = useSearchParams();
  const id = params.get('id');
  // const params = useParams<{ id: string }>();
  // console.log(params.id);
  return (
    <div>
      test-component-
      {id}
    </div>
  );
}

export default TestComponent10;
