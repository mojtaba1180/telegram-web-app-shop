import { TypeCartItems } from "@framework/types";
import { atom } from "jotai";

export const userCartItems = atom<TypeCartItems[]>([]);
