"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigateToSample = () => {
    router.push("/sample");
  };

  return (
    <main>
      <div>
        <p>Route Page</p>
        <button onClick={navigateToSample}>画面遷移ボタン</button>
      </div>
    </main>
  );
}
