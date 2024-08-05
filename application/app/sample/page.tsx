"use client";

export default function Sample() {
  const niceButton = () => {
    console.log("Nice");
  };

  return (
    <div>
      <p>aaaaa</p>
      <p>bbbbb</p>
      <p>ccccc</p>
      <p>ddddd</p>
      <p>eeeee</p>
      <div>
        <h2>こんにちは。</h2>
        <button onClick={niceButton}>ナイスなボタン</button>
      </div>
    </div>
  );
}
