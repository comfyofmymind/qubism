import Image from "next/image";
import React, { useState } from "react";
import { useAtom } from "jotai";
import atoms from "../../../util/atoms";
import { userPhotoObj } from "@/lib/userPhotoObj";
export default function ImageIteration({
  username,
}: // setOpenStories,
{
  username: string;
  // setOpenStories: Dispatch<SetStateAction<boolean>>;
}) {
  const [, setOpenStories] = useAtom(atoms.openStories);
  const [, setUserName] = useAtom(atoms.userCertainName);
  const b = useAtom(atoms.userPhotos);
  const c = b[0][Number(username)];

  return (
    <button
      type="button"
      className="relative w-[120px] h-[120px] flex items-center justify-center"
      onClick={() => {
        setOpenStories(true);
        setUserName(username);
        document.body.style.overflow = "hidden";
      }}
    >
      <Image
        src={c[0].link}
        alt={`Image ${Number(username)}`}
        layout="fill"
        // width={96}
        // height={96}
        objectFit="cover"
        priority
      />
    </button>
  );
}
