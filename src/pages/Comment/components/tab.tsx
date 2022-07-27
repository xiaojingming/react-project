/* eslint-disable no-unused-vars */
interface TabProps {
  showLatest: boolean;
  handleChangeHead: (flag: boolean) => void
}

function Tab(props: TabProps) {
  const { showLatest, handleChangeHead } = props;
  return (
    <div className="header">
      <span
        className={showLatest ? 'disActive' : 'active'}
        onClick={() => handleChangeHead(false)}
      >
        最热
      </span>
      <span>|</span>
      <span
        className={showLatest ? 'active' : 'disActive'}
        onClick={() => handleChangeHead(true)}
      >
        最新
      </span>
    </div>
  );
}

export default Tab;
