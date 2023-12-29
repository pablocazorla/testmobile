/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

export default function Home() {
  const [cont, setCont] = useState("");

  return (
    <main className="pt-24 px-5">
      <h1>V.3</h1>
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
