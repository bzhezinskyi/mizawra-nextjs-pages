"use client";

import { useState } from "react";
import NarrativeCardList from "./NarrativeCardList";
import Categories from "./Categories";

export default function NarrativeCardContainer() {
  return (
    <>
      <Categories />
      <NarrativeCardList />
    </>
  );
}
