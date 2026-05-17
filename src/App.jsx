import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import duck from "./assets/chick.png";
import{useState} from 'react';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <main className="page">
      <section className="card">
        <div className="title-row">
          <h1>NestTogether</h1>
          <img src={duck} alt="Duck" className="duck" />
        </div>

        <p className="tagline">Stick, Learn, and Grow Together</p>

        <button
          className="role-button selected"
          onClick={() => navigate("/mother")}
        >
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

function MotherPage() {
  const [inputs,setInputs] = useState({});
  
  const handleChange = (e)=>{
    const target = e.target;
    const value = target.type === 'checkbox'?target.checed :target.value;
    const name = target.name;
    setInputs(values => ({...values, [name]:value}))
  }

  const handleSubmit = (event)=>{
    //implement submit logic
  }

  return (
    <main className="mother-page">
      <nav className="navbar">
        <div className="brand">
          <img src={duck} alt="Duck" />
          <h1>Expectant Mother</h1>
        </div>

        <div className="nav-links">
          <a>Home</a>
          <a className="active">Symptoms</a>
          <a>Resources</a>
        </div>
      </nav>

      <section className="symptoms-section">
        <h2>Symptoms Survey</h2>
        <p>Report symptoms you have experienced during pregnancy.</p>

        <div className="questions">
          <span>Question:</span>
          <span><input type = "checkbox" checked></input></span>
          <span>No</span>
          <div className = "q1"> 
          <form onSubmit = {handleSubmit}>
            <label>1. Are you ?
              <input type = "checkbox" name = "q1" value = {inputs.q1} onChange ={handleChange}/>
            </label>
          </form>
          </div>

          <div className="q2">
            <form onSubmit={handleSubmit}>
              <label>2. Have you experienced trouble breathing recently?
                <input type="checkbox" name="q1" value={inputs.q1} onChange={handleChange} />
              </label>
            </form>
          </div>

          <div className="q3">
            <form onSubmit={handleSubmit}>
              <label>3. Have you experienced chest pain or discomfort?
                <input type="checkbox" name="q1" value={inputs.q1} onChange={handleChange} />
              </label>
            </form>
          </div>

          <div className="q4">
            <form onSubmit={handleSubmit}>
              <label>4. Have you noticed a fast, racing, or irregular heartbeat?
                <input type="checkbox" name="q1" value={inputs.q1} onChange={handleChange} />
              </label>
            </form>
          </div>

          <div className="q5">
            <form onSubmit={handleSubmit}>
              <label>5. Have you experienced extreme swelling, especially in your legs, feet, or hands?
                <input type="checkbox" name="q1" value={inputs.q1} onChange={handleChange} />
              </label>
            </form>
          </div>

          <div className="q6">
            <form onSubmit={handleSubmit}>
              <label>6. Have you experienced unusual or sudden weight gain?
                <input type="checkbox" name="q1" value={inputs.q1} onChange={handleChange} />
              </label>
            </form>
          </div>

          <div className="q7">
            <form onSubmit={handleSubmit}>
              <label>7. Have you experienced unusual or sudden weight gain?
                <input type="checkbox" name="q1" value={inputs.q1} onChange={handleChange} />
              </label>
            </form>
          </div>
        </div>


        <button type = "submit">Submit</button>
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
      </Routes>
    </BrowserRouter>
  );
}