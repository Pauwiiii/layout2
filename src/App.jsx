import "./App.css";

function BoxSideTop() {
  return <div className="box-side-top"></div>;
}

function BoxCenterTop() {
  return <div className="box-center-top">
    <BoxCenterTopContent name="Pauline"/>
    <BoxCenterTopContent name="Ochoa"/>
  </div>;
}

function BoxCenterTopContent(props) {
  return <div className="box-center-top-content">{props.name}</div>;
}

function SectionTop() {
  return <div className="section-top">
    <BoxSideTop />
    <BoxCenterTop />
    <BoxSideTop />
  </div>;
}

function SectionBottom() {
  return <div className="section-bottom">
    <BoxSideBottom />
    <BoxCenterBottom text="C-PCIT9"/>
    <BoxCenterBottom text="IT3A"/>
    <BoxSideBottom />
  </div>;
}

function BoxSideBottom() {
  return <div className="box-side-bottom"></div>;
}

function BoxCenterBottom(props) {
  return <div className="box-center-bottom">{props.text}</div>;
}

function App() {
  return (
    <div className="layout-container">
      <SectionTop />
      <div className="section-middle">
        <div className="middle-left-box"></div>
        <div className="middle-right-box">
          <div className="right-box-upper"></div>
          <div className="right-box-lower"></div>
        </div>
      </div>
      <SectionBottom />
    </div>
  );
}

export default App;
