import {Dispatch,SetStateAction,useState,useEffect} from 'react';
import { useAtom } from 'jotai';
import atoms from '../util/atoms';
// import handleWatchedStory from '../util/handleWatchedStory';

interface Props {
  userName: string;
  playStatus: boolean;
  storiesArray: string[];
  positionIndex: number;
  setProgress: Dispatch<SetStateAction<number>>;
  setPositionIndex: Dispatch<SetStateAction<number>>;
  setStoryUsername: Dispatch<SetStateAction<string>>;
}

function useProgressBar({
  userName,
  playStatus,
  storiesArray,
  positionIndex,
  setProgress,
  setPositionIndex,
  setStoryUsername,
}: Props) {
  const [userDetails] = useAtom(atoms.userDetails);

  const [timer, setTimer] = useState(10);

  useEffect(() => {
    function handleTimer() {
      setTimer(timer - 0.1);
    }

    if (playStatus && timer >= 0) {
      setProgress(100);
      setTimeout(handleTimer, 100);
    }

    if (timer <= 0) {
      // // submits to the DB that the user has watched the story
      // handleWatchedStory({
      //   storyUsername: userName,
      //   watcherUsername: userDetails.displayName!,
      // });
      // This if statement wont allow the transformation/animation for the last story
      if (positionIndex < storiesArray.length - 1) {
        setPositionIndex(positionIndex + 1);
        setStoryUsername(storiesArray[positionIndex + 1]);
      }
    }
  }, [
    timer,
    playStatus,
    positionIndex,
    setPositionIndex,
    setStoryUsername,
    storiesArray,
    userDetails.displayName,
    userName,
    setProgress,
  ]);

  return { timer };
}

export default useProgressBar;
