import "./App.css";
import duck from "./assets/chick.png";

export default function App() {
  return (
    <main className="page">
      <section className="card">
        <div className="title-row">
          <h1>NestTogether</h1>
          <img src={duck} alt="Duck" className="duck" />
        </div>

        <p className="tagline">Stick, Learn, and Grow Together</p>

        <button className="role-button selected">
          Expectant Mother
        </button>

        <button className="role-button">
          Supporter of<br />
          Expectant Mother
        </button>
      </section>
    </main>
  );
}