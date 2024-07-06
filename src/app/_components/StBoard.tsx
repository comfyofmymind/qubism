"use client";

import atoms from "@/util/atoms";
import { useAtom } from "jotai";
import ViewIteration from "@/app/_components/homepage/ViewIteration";
import ImageIteration from "@/app/_components/homepage/ImageIteration";

export default function StBoard() {
  const [storiesArray] = useAtom(atoms.storiesArray);
  return (
    <div className="flex items-center justify-center">
      <ViewIteration />

      <div className="grid grid-cols-3 gap-2">
        {storiesArray.map((username: string, index: number) => (
          <ImageIteration username={username} key={index} />
        ))}
      </div>
    </div>
  );
}
