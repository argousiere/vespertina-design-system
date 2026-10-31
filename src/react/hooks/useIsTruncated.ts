import { useEffect, useState } from 'react';

const useIsTruncated = (element: HTMLElement | null): boolean => {
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    if (!element) {
      return;
    }

    const observer = new ResizeObserver(() => {
      setIsTruncated(
        [element, ...element.querySelectorAll('*')].some((node) => {
          return (
            node.scrollWidth - node.clientWidth > 1 ||
            node.scrollHeight - node.clientHeight > 1
          );
        })
      );
    });
    observer.observe(element);

    return () => {
      return observer.disconnect();
    };
  }, [element]);

  return isTruncated;
};

export default useIsTruncated;
