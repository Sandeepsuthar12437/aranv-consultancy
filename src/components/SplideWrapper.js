"use client";
import { useRef } from "react";
import { Splide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function SplideWrapper({ children, options, ref }) {
  return (
    <Splide ref={ref} options={options} hasTrack={false}>
      <SplideTrack>{children}</SplideTrack>
    </Splide>
  );
}
