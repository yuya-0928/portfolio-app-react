import "./App.css";

import yuni_profile_image from "./image/yuni_profile.jpg";

function App() {
  return (
    <div className="App">
      <img src={yuni_profile_image} alt="This is profile img"></img>
      <p>ここはゆにがReactで遊ぶ場所だよ！</p>
      <p>気が向いたら更新していくよ</p>
    </div>
  );
}

export default App;
