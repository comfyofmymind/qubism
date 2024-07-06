import {Dispatch,SetStateAction} from 'react';

interface Props {
  touchStart: any;
  touchEnd: any;
  positionIndex: number;
  storiesArray: string[];
  setTouchStart: Dispatch<SetStateAction<null>>;
  setTouchEnd: Dispatch<SetStateAction<null>>;
  setPositionIndex: Dispatch<SetStateAction<number>>;
  setStoryUsername: Dispatch<SetStateAction<string>>;
}

export default function handleSwipeEvents({
  touchStart,
  touchEnd,
  positionIndex,
  storiesArray,
  setTouchStart,
  setTouchEnd,
  setPositionIndex,
  setStoryUsername,
}: Props) {
  const minSwipeDistance = 5;

  const onTouchStart = (e: any) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setPositionIndex(positionIndex + 1);
      setStoryUsername(storiesArray[positionIndex + 1]);
    }

    if (isRightSwipe) {
      setPositionIndex(positionIndex - 1);
      setStoryUsername(storiesArray[positionIndex - 1]);
    }
  };

  return { onTouchStart, onTouchMove, onTouchEnd };
}
