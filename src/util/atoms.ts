"use clients";

import { User } from "./iUser";
import { atom } from "jotai";

import { userPhotoObj } from "@/lib/userPhotoObj";

export interface userDetailTypes {
  displayName?: string;
  photoURL?: string;
}

interface storyTypes {
  [index: string]: string;
}

interface Photo {
  id: number;
  link: string;
}

interface UserPhotoObj {
  [key: number]: Photo[];
}

const darkMode = atom(false);
const userDetails = atom<userDetailTypes | User>({});
const openStories = atom(false);
const stories = atom<storyTypes>({
  "1": "/1.webp",
  "2": "/2.webp",
  "3": "/3.webp",
  "4": "/4.webp",
  "5": "/5.webp",
  "6": "/6.webp",
  "7": "/7.webp",
  "8": "/8.webp",
  "9": "/9.webp",
});
const storiesArray = atom<string[]>([
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
]);
const userCertainName = atom("");
// const storiesIndex = atom<number[]>([1,2,3,4,5,6,7,8]);
const storiesLoading = atom(true);
const userPhotos = atom<UserPhotoObj>(userPhotoObj);

const atoms = {
  darkMode,
  userDetails,
  stories,
  storiesArray,
  storiesLoading,
  openStories,
  userPhotos,
  userCertainName,
  // storiesIndex
};

export default atoms;
