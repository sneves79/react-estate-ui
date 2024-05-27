import "./homePage.scss";
import SearchBar from "../../searchBar/searchBar.jsx";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream House</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque id
            voluptatem in nisi. Quidem, aspernatur? Ipsa commodi cum in. Commodi
            itaque blanditiis fugiat doloremque maiores sed voluptatem quaerat,
            eum ipsam.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>years of experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/public/bg.png" />
      </div>
    </div>
  );
}

export default HomePage;
