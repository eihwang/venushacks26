import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import duck from "./assets/chick.png";
import { Link } from "react-router-dom";
import { useState } from 'react';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <main className="start-page">
      <section className="card">
        <div className="title-row">
          <h1>NestTogether</h1>
          <img src={duck} alt="Duck" className="duck" />
        </div>

        <p className="tagline">Stick, Learn, and Grow Together</p>

        <button
          className="button"
          onClick={() => navigate("/mother")}
        >
          Expectant Mother
        </button>

        <button
          className="button"
          onClick={() => navigate("/supporter")}
        >
          Supporter of<br />
          Expectant Mother
        </button>
      </section>
    </main>
  );
}

function MotherPage() {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checed : target.value;
    const name = target.name;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    //implement submit logic
  }

  return (
    <main className="page">
      <nav className="navbar">
        <div className="brand">
          <img src={duck} alt="Duck" />
          <h1>Expectant Mother</h1>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <a className="active">Symptoms</a>
          <Link to="/mother-resources">Resources</Link>
          <Link to="/mother-checklist">Checklist</Link>
        </div>
      </nav><section className="symptoms-section">
        <h2>Symptoms Survey</h2>
        <p>Report symptoms you have during pregnancy.</p>

        <div className="questions">
          <ul>
            <li><input type="checkbox" name="point" onChange={handleChange} /> I've experienced trouble breathing recently</li>
            <li><input type="checkbox" name="point" onChange={handleChange} /> I've experienced chest pain or discomfort</li>
            <li><input type="checkbox" name="point" onChange={handleChange} /> I've noticed a fast, racing, or irregular heartbeat</li>
            <li><input type="checkbox" name="point" onChange={handleChange} /> I've experienced extreme swelling, especially in your legs, feet, or hands</li>
            <li><input type="checkbox" name="point" onChange={handleChange} /> I've experienced unusual or sudden weight gain</li>
            <li><input type="checkbox" name="point" onChange={handleChange} /> I've experienced dizziness or fainting spells</li>
            <li><input type="checkbox" name="point" onChange={handleChange} /> I've felt overwhelming or unusual tiredness/fatigue</li>
            <li><input type="checkbox" name="point" onChange={handleChange} /> I've had a cough that does not go away</li>
            <li><input type="checkbox" name="point" onChange={handleChange} /> I've been told I have high blood pressure</li>
            <li><input type="checkbox" name="point" onChange={handleChange} /> I've been told I have high cholesterol levels</li>
            <li><input type="checkbox" name="point" onChange={handleChange} /> I've been told I have high blood sugar or diabetes</li>
            <li><input type="checkbox" name="point" onChange={handleChange} /> I have a personal or family history of heart disease or cardiovascular problems</li>
            <li><input type="checkbox" name="point" onChange={handleChange} /> I am currently taking some sort of medication</li>
            <li><input type="checkbox" name="point" onChange={handleChange} /> I currently use some sort of drugs or substances (including recreational drugs, tobacco, or vaping products)</li>
          </ul>
        </div>
        
        <button type="submit">Submit</button>
      </section>
    </main>
  );
}

function SupporterPage() {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checed : target.value;
    const name = target.name;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    //implement submit logic
  }

  return (
    <main className="page">
      <nav className="navbar">
        <div className="brand">
          <img src={duck} alt="Duck" />
          <h1>Supporter</h1>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <a className="active">Symptoms</a>
          <Link to="/supporter-resources">Resources</Link>
          <Link to="/supporter-checklist">Checklist</Link>
        </div>
      </nav>

      <section className="symptoms-section">
        <h2>Symptoms Survey</h2>
        <p>Report symptoms you have experienced during pregnancy.</p>

        <div className="questions">
          <ul>
            <li><input type="checkbox" name="point" onChange={handleChange} /> Expectant mother has experienced trouble breathing recently</li>
            <li><input type="checkbox" name="point" onChange={handleChange} /> Expectant mother has experienced chest pain or discomfort</li>
            <li><input type="checkbox" name="point" onChange={handleChange} /> Expectant mother has noticed a fast, racing, or irregular heartbeat</li>
            <li><input type="checkbox" name="point" onChange={handleChange} /> Expectant mother has experienced extreme swelling, especially in your legs, feet, or hands</li>
            <li><input type="checkbox" name="point" onChange={handleChange} /> Expectant mother has experienced unusual or sudden weight gain</li>
            <li><input type="checkbox" name="point" onChange={handleChange} /> Expectant mother has experienced dizziness or fainting spells</li>
            <li><input type="checkbox" name="point" onChange={handleChange} /> Expectant mother has felt overwhelming or unusual tiredness/fatigue</li>
            <li><input type="checkbox" name="point" onChange={handleChange} /> Expectant mother has had a cough that does not go away</li>
            <li><input type="checkbox" name="point" onChange={handleChange} /> Expectant mother has high blood pressure</li>
            <li><input type="checkbox" name="point" onChange={handleChange} /> Expectant mother has high cholesterol levels</li>
            <li><input type="checkbox" name="point" onChange={handleChange} /> Expectant mother has high blood sugar or diabetes</li>
            <li><input type="checkbox" name="point" onChange={handleChange} /> Expectant mother has a personal or family history of heart disease or cardiovascular problems</li>
            <li><input type="checkbox" name="point" onChange={handleChange} /> Expectant mother is currently taking some sort of medication</li>
            <li><input type="checkbox" name="point" onChange={handleChange} /> Expectant mother currently uses some sort of drugs or substances (including recreational drugs, tobacco, or vaping products)</li>
          </ul>
        </div>
        
        <button type="submit">Submit</button>
      </section>
    </main>
  );
}

function MotherResourcesPage() {
  return (
    <main className="page">
      <nav className="navbar">
        <div className="brand">
          <img src={duck} alt="Duck" />
          <h1>Expectant Mother</h1>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/mother">Symptoms</Link>
          <a className="active">Resources</a>
          <Link to="/mother-checklist">Checklist</Link>
        </div>
      </nav>

      <section className="symptoms-section">
        <h2>Resources</h2>
        <p>Report symptoms you have experienced during pregnancy.</p>
      </section>
    </main>
  );
}

function SupporterResourcesPage() {
  return (
    <main className="page">
      <nav className="navbar">
        <div className="brand">
          <img src={duck} alt="Duck" />
          <h1>Supporter</h1>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/supporter">Symptoms</Link>
          <a className="active">Resources</a>
          <Link to="/supporter-checklist">Checklist</Link>
        </div>
      </nav>

      <section className="symptoms-section">
        <h2>Resources</h2>
        <p>Report symptoms you have experienced during pregnancy.</p>
      </section>
    </main>
  );
}

function MotherChecklistPage() {
  return (
    <main className="page">
      <nav className="navbar">
        <div className="brand">
          <img src={duck} alt="Duck" />
          <h1>Expectant Mother</h1>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/mother">Symptoms</Link>
          <Link to="/mother-resources">Resources</Link>
          <a className="active">Checklist</a>
        </div>
      </nav>

      <section className="symptoms-section">
        <h2>Checklist</h2>
        <p>Here is a list of things for your to-go bag when the time comes!</p>

        <div className="questions">
          <ul>
            <li><input type="checkbox" name="point" /> Health plan insurance card</li>
            <li><input type="checkbox" name="point" /> Hospital admissions papers</li>
            <li><input type="checkbox" name="point" /> Pregnancy medical file, including over-the-counter and prescription medicine information</li>
            <li><input type="checkbox" name="point" /> Birth preferences</li>
            <li><input type="checkbox" name="point" /> Contact information of the health care provider who will be caring for your baby</li>
            <li><input type="checkbox" name="point" /> Toiletries (toothbrush, toothpaste, hair brush, etc.)</li>
            <li><input type="checkbox" name="point" /> Comfortable and loose fitting clothing to wear home</li>
            <li><input type="checkbox" name="point" /> Going home outfit for baby</li>
            <li><input type="checkbox" name="point" /> Baby car seat, a car seat is required by law and should be properly installed in your car before you go to the hospital</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

function SupporterChecklistPage() {
  return (
    <main className="page">
      <nav className="navbar">
        <div className="brand">
          <img src={duck} alt="Duck" />
          <h1>Supporter</h1>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/supporter">Symptoms</Link>
          <Link to="/supporter-resources">Resources</Link>
          <a className="active">Checklist</a>
        </div>
      </nav>

      <section className="symptoms-section">
        <h2>Checklist</h2>
        <p>Here is a list of things for your to-go bag when the time comes!</p>

        <div className="questions">
          <ul>
            <li><input type="checkbox" name="point" /> Health plan insurance card</li>
            <li><input type="checkbox" name="point" /> Hospital admissions papers</li>
            <li><input type="checkbox" name="point" /> Pregnancy medical file, including over-the-counter and prescription medicine information</li>
            <li><input type="checkbox" name="point" /> Birth preferences</li>
            <li><input type="checkbox" name="point" /> Contact information of the health care provider who will be caring for your baby</li>
            <li><input type="checkbox" name="point" /> Toiletries (toothbrush, toothpaste, hair brush, etc.)</li>
            <li><input type="checkbox" name="point" /> Comfortable and loose fitting clothing to wear home</li>
            <li><input type="checkbox" name="point" /> Going home outfit for baby</li>
            <li><input type="checkbox" name="point" /> Baby car seat, a car seat is required by law and should be properly installed in your car before you go to the hospital</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mother" element={<MotherPage />} />
        <Route path="/supporter" element={<SupporterPage />} />
        <Route path="/mother-resources" element={<MotherResourcesPage />} />
        <Route path="/supporter-resources" element={<SupporterResourcesPage />} />
        <Route path="/mother-checklist" element={<MotherChecklistPage />} />
        <Route path="/supporter-checklist" element={<SupporterChecklistPage />} />
      </Routes>
    </BrowserRouter>
  );
}