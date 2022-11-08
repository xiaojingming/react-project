/* eslint-disable no-unused-vars */
interface HeaderProps {
  activeIndex: number
  handleChangeActiveIndex(idx: number): void
}

function BasicHeader(props: HeaderProps) {
  const { activeIndex, handleChangeActiveIndex } = props;
  return (
    <div className="header">
      <span
        className={activeIndex === 0 ? 'active' : 'disActive'}
        onClick={() => handleChangeActiveIndex(0)}
      >
        最热
      </span>
      <span>|</span>
      <span
        className={activeIndex === 1 ? 'active' : 'disActive'}
        onClick={() => handleChangeActiveIndex(1)}
      >
        最新
      </span>
    </div>
  );
}

export default BasicHeader;
