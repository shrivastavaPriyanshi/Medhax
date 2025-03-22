import React, { useState } from "react";
import "./Recommendation.css";

const Recommendation = () => {
  const [formData, setFormData] = useState({
    skills: "",
    interest: [],
    domain: [],
  });

  const [isInterestOpen, setIsInterestOpen] = useState(false);
  const [isDomainOpen, setIsDomainOpen] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState([]);
  const [showRecommendation, setShowRecommendation] = useState(false);

  const maxSelection = 3;

  const toggleDropdown = (dropdown) => {
    if (dropdown === "interest") {
      setIsInterestOpen(!isInterestOpen);
    } else {
      setIsDomainOpen(!isDomainOpen);
    }
  };

  const handleCheckboxChange = (type, option) => {
    const selected = [...formData[type]];

    if (selected.includes(option)) {
      const updated = selected.filter((item) => item !== option);
      setFormData({ ...formData, [type]: updated });
    } else if (selected.length < maxSelection) {
      setFormData({ ...formData, [type]: [...selected, option] });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if (
      !formData.skills ||
      formData.interest.length === 0 ||
      formData.domain.length === 0
    ) {
      alert("Please answer all questions before saving.");
      return;
    }

    const clubs = [
      "AI & ML Enthusiasts",
      "Web Development Wizards",
      "Cloud Innovators",
      "Competitive Coders",
      "Cybersecurity Titans",
      "Blockchain Pioneers",
      "Data Science Geeks",
      "Robotics Masters",
    ];

    const randomSuggestions = Array(3)
      .fill()
      .map(() => clubs[Math.floor(Math.random() * clubs.length)]);

    setAiSuggestion(randomSuggestions);
    setShowRecommendation(true);
  };

  const interests = [
    "Big Data Analytics",
    "Google Technologies",
    "Embedded Programming",
    "Robotics",
    "IT Infrastructure",
    "Graph Theory",
    "Competitive Coding",
    "Android/iOS Development",
    "AWS Services",
    "Network Security",
    "Frontend & Backend",
    "Cryptography",
    "AI & ML Applications",
    "Data Structures",
    "React & Node.js",
  ];

  const domains = [
    "Web Dev",
    "Data Science",
    "Cloud",
    "Programming",
    "Blockchain",
    "Security",
    "Algorithms",
    "Software",
    "Embedded",
    "AI/ML",
    "Networking",
    "Mobile Dev",
    "Coding",
  ];

  return (
    <div className="recommendation-container">
      <nav className="navbar">
        <h1>EVENTO</h1>
      </nav>

      <div className="content-wrapper">
        {/* Left Section (Questions) */}
        <div className="left-section">
          <h2>Confused, What to do next? 🤔</h2>
          <p>Try our AI-based Recommendation system...!!!</p>

          <label>Your Skills?</label>
          <input
            type="text"
            name="skills"
            placeholder="Enter your skills"
            value={formData.skills}
            onChange={handleInputChange}
          />

          <label>Your Interest?</label>
          <div className="dropdown" onClick={() => toggleDropdown("interest")}>
            <div className="dropdown-header">
              {formData.interest.length > 0
                ? formData.interest.join(", ")
                : "Select up to 3 interests"}
            </div>
            {isInterestOpen && (
              <div className="dropdown-list">
                {interests.map((item) => (
                  <label key={item} className="dropdown-item">
                    <input
                      type="checkbox"
                      checked={formData.interest.includes(item)}
                      onChange={() => handleCheckboxChange("interest", item)}
                    />
                    {item}
                  </label>
                ))}
              </div>
            )}
          </div>

          <label>Your Domain?</label>
          <div className="dropdown" onClick={() => toggleDropdown("domain")}>
            <div className="dropdown-header">
              {formData.domain.length > 0
                ? formData.domain.join(", ")
                : "Select up to 3 domains"}
            </div>
            {isDomainOpen && (
              <div className="dropdown-list">
                {domains.map((item) => (
                  <label key={item} className="dropdown-item">
                    <input
                      type="checkbox"
                      checked={formData.domain.includes(item)}
                      onChange={() => handleCheckboxChange("domain", item)}
                    />
                    {item}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="button-container">
            <button className="skip-btn">Skip</button>
            <button onClick={handleSave} className="get-recommendation-btn">
              Get Recommendation
            </button>
          </div>
        </div>

        {/* Right Section (Suggestions) */}
        <div className="right-section">
          <h3>🔥 Recommended Clubs</h3>
          {showRecommendation ? (
            <ul>
              {aiSuggestion.map((club, index) => (
                <li key={index}>{club}</li>
              ))}
            </ul>
          ) : (
            <p className="no-recommendation">
              Fill the form and click "Get Recommendation" to see suggestions.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
