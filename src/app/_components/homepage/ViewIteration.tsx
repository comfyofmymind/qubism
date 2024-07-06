import { useAtom } from "jotai";
import atoms from "../../../util/atoms";
import Image from "next/image";
import CloseBtnSVG from "../svgComps/CloseBtnSVG";
import Stories from "./Stories";

export default function ViewIteration() {
  const [openStories, setOpenStories] = useAtom(atoms.openStories);
  return (
    <>
      {openStories ? (
        <div className="fixed top-0 left-0 z-[100] h-screen w-full overflow-hidden overflow-y-scroll bg-[#1a1a1a]">
          <button
            className="absolute top-4 left-4 z-[100]"
            type="button"
            onClick={() => {
              setOpenStories(false);
              document.body.style.overflow = "initial";
            }}
          >
            <div className="h-auto w-[103px]">
              <Image
                src="/img/QUBISM.svg"
                alt="QUBISM"
                width={57}
                height={19.2}
              />
            </div>
          </button>
          <button
            className="absolute top-6 right-6 z-[100]"
            type="button"
            onClick={() => {
              setOpenStories(false);
              document.body.style.overflow = "initial";
            }}
          >
            <CloseBtnSVG
              lightColor="white"
              darkColor="white"
              heightWidth="24"
            />
          </button>
          <Stories />
        </div>
      ) : (
        ""
      )}
    </>
  );
}
