import "./App.css";

function App() {
  let imagess =
    "https://scontent.fsin3-1.fna.fbcdn.net/v/t1.18169-9/420663_1943625406307_1444827188_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=de6eea&_nc_ohc=kk7BuurEgX8AX8PwKBc&_nc_ht=scontent.fsin3-1.fna&oh=00_AfAxmawk23sD6nlmkhL8RdCaTwlNIrtoDbqY-lnc_Fcy9w&oe=644A1792";

  const colors = [
    "#ff0000",
    "#ff7f00",
    "#ffff00",
    "#00ff00",
    "#0000ff",
    "#4b0082",
    "#8f00ff",
  ];
  let currentColorIndex = 0;

  function changeBackgroundColor() {
    const body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
  }

  setInterval(changeBackgroundColor, 3000);
  return (
    <div id="image-container">
      <h1>HAPPY BIRTHDAY CARRIE!!!</h1>
      <img src={imagess} alt="Image 1" />
    </div>
  );
}

export default App;
