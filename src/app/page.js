/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [cont, setCont] = useState("");

  const btn = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 1);

    const toggleFullScreen = () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    };

    const btnRef = btn.current;

    btnRef.addEventListener("click", toggleFullScreen);

    return () => {
      btnRef.removeEventListener("click", toggleFullScreen);
    };
  }, []);

  return (
    <main className="pt-24 px-5 min-h-screen">
      <h1>V.5</h1>
      <input
        //id="cameraFileInput"
        type="file"
        accept="image/*"
        onChange={(e) => {
          const src = URL.createObjectURL(e.target.files[0]);
          setCont(src);
        }}
      />
      <div>Otro</div>
      <input
        //id="cameraFileInput"
        type="file"
        accept="image/*"
        capture="environment"
        onChange={(e) => {
          const src = URL.createObjectURL(e.target.files[0]);
          setCont(src);
        }}
      />
      <div className="pt-5 mb-5">
        <img src={cont} alt="" />
      </div>
      <button className="p-3 bg-emerald-600" ref={btn}>
        FULSCREEN
      </button>
    </main>
  );
}
