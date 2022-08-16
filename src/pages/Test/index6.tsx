import useWindowScroll from '../../hooks/useWindowScroll';

export default function TestComponent6() {
  const [y] = useWindowScroll();
  return (
    <div style={{ height: '2000px' }}>{y}</div>
  );
}
