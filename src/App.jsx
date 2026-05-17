import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import duck from "./assets/chickAnimation.gif";
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
  const [surveyResult, setSurveyResult] = useState("");
  const [stage, setStage] = useState("before");

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const totalCount = Object.values(inputs).filter(val => val === true).length;
    let riskLevel = "";
    let nextSteps = "";

    if (totalCount <= 2) {
      riskLevel = "low risk"
    } else if (totalCount <= 5) {
      riskLevel = "risk"
    } else if (totalCount <= 10) {
      riskLevel = "high risk"
    } else {
      riskLevel = "very high risk"
    }

    if (stage === "before") {
      nextSteps = "\nYou are at " + riskLevel + " of heart disease. Ways to lower your risk before pregnancy:\n\nVisit a healthcare provider to review your blood pressure, cholesterol levels, blood sugar levels, medical history, and medications to ensure your health leading up to pregnancy.\n\nKeep a healthy weight, exercise, eat healthy foods, and take prenatal vitamins.\n\nDo not smoke, do drugs, or consume alcohol.\n\nPrioritize sleep, mental health, and self-care.";
    } else if (stage === "during") {
      nextSteps = "\nYou are at " + riskLevel + " of heart disease. Ways to lower your risk during pregnancy:\n\nGo to your prenatal care visits to monitor your blood pressure, symptoms, and baby's growth and heartbeat.\n\nBring a support person to healthcare appointments.\n\nKeep a healthy weight, exercise, eat healthy foods, and take prenatal vitamins.\n\nIf needed and advised, monitor your blood pressure regularly and keep record for medical appointments.\n\nCall your healthcare provider immediately if you have headaches, blurry vision, changes to your blood pressure, or overall do not feel well.\n\nConsider breastfeeding and consult with your healthcare provider.";
    } else if (stage === "after") {
      nextSteps = "\nYou are at " + riskLevel + " of heart disease. Ways to lower your risk after pregnancy:\n\nGo to your portpartum visits to continue monitoring your health.\n\nIf you had high blood pressure or heart disease during pregnancy, continue monitoring your blood pressure closely for the first 10 days after delivery.\n\nTell any healthcare provider you visit about your recent pregnancy and any issues you may have had within the last 12 months.\n\nIf you have heart disease or take heart medication, consult with your health care provider before breastfeeding your baby.\n\nEat a healthy diet and exercise regularly as advised.\n\nMonitor your heart condition and risk factors every year.";
    }

    setSurveyResult(nextSteps);
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
      </nav>
      
      <section className="symptoms-section">
        <h2>Symptoms Survey</h2>
        <p>Report symptoms you have during pregnancy.</p>

        <div className="questions">
          <ul>
            <label htmlFor="stageSelect">Pregnancy Stage: </label>
            <select id="stageSelect" value={stage} onChange={(e) => setStage(e.target.value)}>
              <option value="before">Planning to be pregnant</option>
              <option value="during">Currently pregnant</option>
              <option value="after">Postpartum period</option>
            </select>
            <p></p>
            <li><input type="checkbox" name="breathing" onChange={handleChange} /> I've experienced trouble breathing recently</li>
            <li><input type="checkbox" name="chestPain" onChange={handleChange} /> I've experienced chest pain or discomfort</li>
            <li><input type="checkbox" name="heartbeat" onChange={handleChange} /> I've noticed a fast, racing, or irregular heartbeat</li>
            <li><input type="checkbox" name="swelling" onChange={handleChange} /> I've experienced extreme swelling, especially in your legs, feet, or hands</li>
            <li><input type="checkbox" name="weightGain" onChange={handleChange} /> I've experienced unusual or sudden weight gain</li>
            <li><input type="checkbox" name="dizziness" onChange={handleChange} /> I've experienced dizziness or fainting spells</li>
            <li><input type="checkbox" name="fatigue" onChange={handleChange} /> I've felt overwhelming or unusual tiredness/fatigue</li>
            <li><input type="checkbox" name="cough" onChange={handleChange} /> I've had a cough that does not go away</li>
            <li><input type="checkbox" name="highBP" onChange={handleChange} /> I've been told I have high blood pressure</li>
            <li><input type="checkbox" name="highCholesterol" onChange={handleChange} /> I've been told I have high cholesterol levels</li>
            <li><input type="checkbox" name="highBloodSugar" onChange={handleChange} /> I've been told I have high blood sugar or diabetes</li>
            <li><input type="checkbox" name="familyHistory" onChange={handleChange} /> I have a personal or family history of heart disease or cardiovascular problems</li>
            <li><input type="checkbox" name="medication" onChange={handleChange} /> I am currently taking some sort of medication</li>
            <li><input type="checkbox" name="substanceUse" onChange={handleChange} /> I currently use some sort of drugs or substances (including recreational drugs, tobacco, or vaping products)</li>
          </ul>
        </div>
        
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </section>
      {surveyResult && (<section className="results-section" style={{ whiteSpace: 'pre-line' }}><p>{surveyResult}</p></section>)}
    </main>
  );
}

function SupporterPage() {
  const [inputs, setInputs] = useState({});
  const [surveyResult, setSurveyResult] = useState("");
  const [stage, setStage] = useState("before");

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const totalCount = Object.values(inputs).filter(val => val === true).length;
    let riskLevel = "";
    let nextSteps = "";

    if (totalCount <= 2) {
      riskLevel = "low risk"
    } else if (totalCount <= 5) {
      riskLevel = "risk"
    } else if (totalCount <= 10) {
      riskLevel = "high risk"
    } else {
      riskLevel = "very high risk"
    }

    if (stage === "before") {
      nextSteps = "\nThe expectant mother is at " + riskLevel + " of heart disease. Ways to lower the risk before pregnancy:\n\nVisit a healthcare provider to review blood pressure, cholesterol levels, blood sugar levels, medical history, and medications to ensure the expectant mother's health leading up to pregnancy.\n\nKeep a healthy weight, exercise, eat healthy foods, and take prenatal vitamins.\n\nDo not smoke, do drugs, or consume alcohol.\n\nPrioritize sleep, mental health, and self-care.";
    } else if (stage === "during") {
      nextSteps = "\nThe expectant mother is at " + riskLevel + " of heart disease. Ways to lower the risk during pregnancy:\n\nGo to prenatal care visits to monitor blood pressure, symptoms, and baby's growth and heartbeat.\n\nBring the expectant mother to healthcare appointments.\n\nKeep a healthy weight, exercise, eat healthy foods, and take prenatal vitamins.\n\nIf needed and advised, monitor blood pressure regularly and keep record for medical appointments.\n\nCall the healthcare provider immediately if the expectant mother has headaches, blurry vision, changes to blood pressure, or overall do not feel well.\n\nConsider breastfeeding and consult with healthcare provider.";
    } else if (stage === "after") {
      nextSteps = "\nThe expectant mother is at " + riskLevel + " of heart disease. Ways to lower the risk after pregnancy:\n\nGo to portpartum visits to continue monitoring health.\n\nIf the expectant mother had high blood pressure or heart disease during pregnancy, continue monitoring blood pressure closely for the first 10 days after delivery.\n\nTell any healthcare provider the expectant mother visits about the recent pregnancy and any issues may have had within the last 12 months.\n\nIf the expectant mother has heart disease or take heart medication, consult with a health care provider before breastfeeding the baby.\n\nEat a healthy diet and exercise regularly as advised.\n\nMonitor heart condition and risk factors every year.";
    }

    setSurveyResult(nextSteps);
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
            <label htmlFor="stageSelect">Pregnancy Stage: </label>
            <select id="stageSelect" value={stage} onChange={(e) => setStage(e.target.value)}>
              <option value="before">Planning to be pregnant</option>
              <option value="during">Currently pregnant</option>
              <option value="after">Postpartum period</option>
            </select>
            <p></p>
            <li><input type="checkbox" name="breathing" onChange={handleChange} /> Expectant mother has experienced trouble breathing recently</li>
            <li><input type="checkbox" name="chestPain" onChange={handleChange} /> Expectant mother has experienced chest pain or discomfort</li>
            <li><input type="checkbox" name="heartbeat" onChange={handleChange} /> Expectant mother has noticed a fast, racing, or irregular heartbeat</li>
            <li><input type="checkbox" name="swelling" onChange={handleChange} /> Expectant mother has experienced extreme swelling, especially in your legs, feet, or hands</li>
            <li><input type="checkbox" name="weightGain" onChange={handleChange} /> Expectant mother has experienced unusual or sudden weight gain</li>
            <li><input type="checkbox" name="dizziness" onChange={handleChange} /> Expectant mother has experienced dizziness or fainting spells</li>
            <li><input type="checkbox" name="fatigue" onChange={handleChange} /> Expectant mother has felt overwhelming or unusual tiredness/fatigue</li>
            <li><input type="checkbox" name="cough" onChange={handleChange} /> Expectant mother has had a cough that does not go away</li>
            <li><input type="checkbox" name="highBP" onChange={handleChange} /> Expectant mother has high blood pressure</li>
            <li><input type="checkbox" name="highCholesterol" onChange={handleChange} /> Expectant mother has high cholesterol levels</li>
            <li><input type="checkbox" name="highBloodSugar" onChange={handleChange} /> Expectant mother has high blood sugar or diabetes</li>
            <li><input type="checkbox" name="familyHistory" onChange={handleChange} /> Expectant mother has a personal or family history of heart disease or cardiovascular problems</li>
            <li><input type="checkbox" name="medication" onChange={handleChange} /> Expectant mother is currently taking some sort of medication</li>
            <li><input type="checkbox" name="substanceUse" onChange={handleChange} /> Expectant mother currently uses some sort of drugs or substances (including recreational drugs, tobacco, or vaping products)</li>
          </ul>
        </div>
        
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </section>
      {surveyResult && (<section className="results-section" style={{ whiteSpace: 'pre-line' }}><p>{surveyResult}</p></section>)}
    </main>
  );
}

function MotherResourcesPage() {
  return (
    <main className="page">
      <nav className="navbar">
        <div className="brand">
          <img src={duck} alt="Duck" className="newChick"/>
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
        <h4>You're not alone! For over two decades, the American Pregnancy Association has stood as a steady hand for millions of families.
           As a national non-profit with your well being at our core, we provide the evidence-based clarity and compassionate
            guidance you need to navigate every stage of your journey with confidence.</h4>
        <a href= "https://americanpregnancy.org/ ">insert image</a>
        <h4>Heart disease is one of the leading causes of pregnancy-related deaths for women. It is important to understand
          and raise awareness on these concerns as even medical professionals might dimish symptoms as less severe.
          Visit Professional.heart.org to check out more information on this topic. 
        </h4>
        <a href= "https://professional.heart.org/en/education/role-of-cardiovascular-health-in-maternal-health?utm_medium=paid+search&utm_source=google&utm_campaign=th_maternal&utm_content=&adgroup=&utm_term=cardiac%20disease%20during%20pregnancy&gad_source=1&gad_campaignid=22498248194&gbraid=0AAAAA-v77OU5yCyunkt4fGgKmPNufkE1h&gclid=CjwKCAjwq6DQBhBVEiwA4ZD5XB2gSs29O5Q3hqDXdB6memBVhBhuWvsaEcRz_NcZvKRStel8g-l11xoCaBgQAvD_BwE">
        Insert image</a>
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
        
        <div className="faq">
          <h2>FAQs</h2>
          <div>
            <details>
              <summary>
                How can I support my partner if she says she feels “off” or unusually tired during pregnancy or postpartum?
              </summary>
              <p>
                Extreme exhaustion, dizziness, shortness of breath, or feeling faint should not always be dismissed as “normal pregnancy symptoms.” Encourage her to rest, help reduce physical stress, and take concerns seriously. Offer to attend medical appointments and help track symptoms. Sometimes cardiovascular complications can first appear as fatigue or feeling unwell.
              </p>
            </details>

            <details>
              <summary>
                What warning signs during pregnancy or postpartum require immediate medical attention?
              </summary>
              <p>
                Seek medical care if she experiences chest pain, difficulty breathing, rapid or irregular heartbeat, swelling in the face or legs, severe headaches, fainting, or sudden weight gain. Many partners may not realize that serious heart-related conditions can develop during pregnancy and even weeks after delivery.
              </p>
            </details>

            <details>
              <summary>
                How can I help reduce stress and protect her heart health during pregnancy?
              </summary>
              <p>
                Emotional stress can affect both mental and physical health. Partners can help by sharing responsibilities, encouraging sleep, preparing healthy meals, attending appointments, and creating a calm environment. Simple acts like listening without dismissing concerns can significantly reduce emotional strain.
              </p>
            </details>

            <details>
              <summary>
                Why is postpartum recovery more serious than many people assume?
              </summary>
              <p>
                Recovery does not end after delivery. The body continues healing for weeks or months, and some dangerous conditions — including postpartum cardiovascular complications — can appear after birth. Many women feel pressure to “bounce back,” but partners should encourage rest, hydration, nutrition, and follow-up care instead of expecting a quick recovery.
              </p>
            </details>

            <details>
              <summary>
                How should I respond if my partner says she feels anxious, overwhelmed, or emotionally disconnected?
              </summary>
              <p>
                Hormonal changes, sleep deprivation, and physical recovery can strongly affect mental health. Avoid telling her she is “overreacting” or “just emotional.” Instead, validate her feelings, ask how you can help, and encourage professional support if symptoms persist. Mental health and heart health are closely connected during and after pregnancy.
              </p>
            </details>

            <details>
              <summary>
                What are supportive things I can do that many partners overlook?
              </summary>
              <p>
                Many expecting mothers carry the “mental load” of remembering appointments, planning baby needs, monitoring symptoms, and managing household tasks. Helpful support includes proactively handling chores, checking in on her physical symptoms, helping monitor medications or blood pressure if needed, and giving her uninterrupted time to rest.
              </p>
            </details>

            <details>
              <summary>
                Why is it important for partners to speak up if they notice concerning symptoms?
              </summary>
              <p>
                Sometimes mothers minimize symptoms because they are focused on the baby or assume discomfort is normal. Partners can play a critical role by noticing changes such as worsening swelling, breathing problems, confusion, persistent coughing, or severe fatigue. Trusting instincts and encouraging medical evaluation early can make a major difference in detecting serious complications.
              </p>
            </details>
          </div>
          <a href="https://www.acog.org/womens-health/faqs/a-partners-guide-to-pregnancy"> More faqs, replace with image</a>
          <h2>How to support an expecting mother through pregnancy and postpartum</h2>
          <h4>Pregnancy is difficult for the mother to deal with, as partners/supporters it is important to ensure that 
            the mother doesn't feel alone on this journey. There are countless ways to support them and it might feel overwhelming.
            here are some resources you can start with to support them. Help combat the symptoms and support women's health!
          </h4>
          <a href= "https://miraclecord.com/news/how-to-support-pregnant-wife/ ">link replace with thumbnail</a>
        </div>
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