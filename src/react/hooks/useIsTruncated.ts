import { useEffect, useState } from 'react';

const useIsTruncated = (element: HTMLElement | null): boolean => {
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    if (!element) return;

    const observer = new ResizeObserver(() => {
      setIsTruncated(
        [element, ...element.querySelectorAll('*')].some(
          (node) =>
            node.scrollWidth > node.clientWidth ||
            node.scrollHeight > node.clientHeight
        )
      );
    });
    observer.observe(element);

    return () => observer.disconnect();
  }, [element]);

  return isTruncated;
};

export default useIsTruncated;
