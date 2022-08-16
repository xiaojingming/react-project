import { useState } from 'react';

// 获取距离顶部滚动距离
function useWindowScroll() {
  const [y, setY] = useState(0);
  window.addEventListener('scroll', () => {
    setY(document.documentElement.scrollTop);
  });
  return [y];
}

export default useWindowScroll;
