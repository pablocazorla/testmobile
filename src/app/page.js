/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [cont, setCont] = useState("");

  useEffect(() => {
    window.scrollTo(0, 1);
  }, []);

  return (
    <main className="pt-24 px-5 min-h-screen">
      <h1>V.4</h1>
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
      <div className="pt-5">
        <img src={cont} alt="" />
      </div>
    </main>
  );
}
