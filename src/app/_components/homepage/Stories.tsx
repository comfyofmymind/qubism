"use client";

import { useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import atoms from "../../../util/atoms";

import useWindowSize from "../../../hooks/useWindowSize";
import Image from "next/image";
import Link from "next/link";

import ProfilePicSVG from "../svgComps/ProfilePicSVG";
import ArrowSVG from "../svgComps/ArrowSVG";
import ProgressBar from "./ProgressBar";
import { userPhotoObj } from "@/lib/userPhotoObj";

import handleSwipeEvents from "../../../util/handleSwipeEvents";

export default function Stories() {
  const [stories] = useAtom(atoms.stories);
  const [userDetails] = useAtom(atoms.userDetails);
  const [storiesArray] = useAtom(atoms.storiesArray);

  const userCertainName = useAtomValue(atoms.userCertainName);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const username = userCertainName;

  const [storyUsername, setStoryUsername] = useState(username);
  const [positionIndex, setPositionIndex] = useState(
    storiesArray.indexOf(username)
  );

  const width = useWindowSize();

  const swipeProps = {
    touchStart,
    touchEnd,
    positionIndex,
    storiesArray,
    setTouchStart,
    setTouchEnd,
    setPositionIndex,
    setStoryUsername,
  };

  return (
    <>
      <div
        className="flex h-full w-max cursor-default  items-center gap-[3vw] pl-[20vw] transition-all duration-500 lg:pl-[36vw]"
        style={{
          transform: `translate(calc(${positionIndex} * ${width}vw))`,
        }}
        onTouchStart={(e: any) => handleSwipeEvents(swipeProps).onTouchStart(e)}
        onTouchMove={(e: any) => handleSwipeEvents(swipeProps).onTouchMove(e)}
        onTouchEnd={() => handleSwipeEvents(swipeProps).onTouchEnd()}
      >
        {storiesArray.map((userName, index) => (
          <div key={userName}>
            <div className="group relative flex">
              {storyUsername === userName ? (
                <button
                  className={
                    positionIndex !== 0
                      ? "absolute top-[50%] left-[-3vw] z-10"
                      : "hidden"
                  }
                  type="button"
                  onClick={() => {
                    setPositionIndex(positionIndex - 1);
                    setStoryUsername(storiesArray[positionIndex - 1]);
                  }}
                >
                  <div className="flex h-6 w-6 rotate-180 items-center justify-center rounded-full bg-[#ebebebc2] hover:bg-[#ebebebc2] group-hover:bg-[#ebebebc2] lg:bg-[#8080805d]">
                    <ArrowSVG white={false} />
                  </div>
                </button>
              ) : (
                ""
              )}
              <div className="relative overflow-hidden rounded-lg">
                {storyUsername === userName ? (
                  <div>
                    <ProgressBar
                      setStoryUsername={setStoryUsername}
                      setPositionIndex={setPositionIndex}
                      userName={userName}
                      storiesArray={storiesArray}
                      positionIndex={positionIndex}
                    />
                  </div>
                ) : (
                  <div className="group absolute top-0 flex h-full w-full flex-col items-center justify-center gap-3 bg-[#00000094]">
                    <button
                      type="button"
                      className="relative h-[16vw] w-[16vw] sm:h-[4vw] sm:w-[4vw]"
                      onClick={() => {
                        setPositionIndex(index);
                        setStoryUsername(storiesArray[index]);
                      }}
                    >
                      {stories[`${userName}`].length === 0 ? (
                        <div className="absolute top-1/2 left-1/2 z-[1000] h-[16vw] w-[16vw] -translate-x-1/2 -translate-y-1/2  transform select-none rounded-full bg-[#3f3f3f] sm:h-[4vw] sm:w-[4vw] ">
                          <ProfilePicSVG strokeWidth="1" />
                        </div>
                      ) : (
                        <Image
                          className="absolute top-1/2 left-1/2 z-[1000] h-[16vw] w-[16vw] -translate-x-1/2 -translate-y-1/2 transform select-none rounded-full  bg-[#3f3f3f]  object-cover sm:h-[4vw] sm:w-[4vw] "
                          src={stories[`${userName}`]}
                          alt="avatar"
                          height="0"
                          width="0"
                          sizes="(max-width: 640px) 16vw, 4vw"
                        />
                      )}

                      {/* <div
                        className={`${
                          stories[`${userName}Views`].includes(
                            userDetails.displayName!
                          )
                            ? "bg-[#999999]"
                            : "bg-gradient-to-tr from-[#ffee00] to-[#d300c8]"
                        } absolute top-1/2 left-1/2 z-[999] h-[17vw] w-[17vw] -translate-x-1/2 -translate-y-1/2 transform rounded-full sm:h-[4.3vw] sm:w-[4.3vw]`}
                      /> */}
                    </button>
                    <p className="mb-5 hidden text-center text-sm font-semibold text-white group-hover:animate-bounce sm:block">
                      {userName}
                    </p>
                  </div>
                )}
                <Image
                  className={`${
                    storyUsername === userName
                      ? "h-[80vh] w-[60vw] lg:h-[95vh] lg:w-[27vw]"
                      : "h-[40vh] w-[20vw] bg-[#202020] lg:w-[10vw]"
                  } select-none bg-[#3f3f3f] object-cover transition-all duration-500`}
                  src={stories[userName]}
                  alt="story"
                  height="0"
                  width="0"
                  sizes="60vw"
                  priority
                />
                {storyUsername === userName ? (
                  <div className="absolute top-0 left-0 h-full w-full">
                    <div className="absolute h-[15%] w-full bg-gradient-to-b from-[#000000af]  to-[#00000000]" />
                  </div>
                ) : (
                  ""
                )}
              </div>
              {storyUsername === userName ? (
                <button
                  className={
                    positionIndex < storiesArray.length - 1
                      ? "absolute top-[50%] right-[-3vw] z-10"
                      : "hidden"
                  }
                  type="button"
                  onClick={() => {
                    setPositionIndex(positionIndex + 1);
                    setStoryUsername(storiesArray[positionIndex + 1]);
                  }}
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ebebebc2] hover:bg-[#ebebebc2] group-hover:bg-[#ebebebc2] lg:bg-[#8080805d]">
                    <ArrowSVG white={false} />
                  </div>
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
