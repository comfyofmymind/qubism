import {useState, useEffect, RefObject} from 'react';

function useCheckNameLength({
  widthRef,
}: {
  widthRef: RefObject<HTMLDivElement>;
}) {
  const [nameWidth, setNameWidth] = useState<null | number>(null);

  useEffect(() => {
    if (widthRef.current) {
      setNameWidth(widthRef.current?.offsetWidth);
    }
  }, [widthRef]);

  return { nameWidth };
}

export default useCheckNameLength;
