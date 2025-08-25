import React from "react";
import "../style/Certificate.css";
import samrawit from "../assets/samrawit.jpg"
import samuel from "../assets/samuel.jpg"
const Certificate = ({ score, total }) => {
  return (
    <div className="certificate-container">
      <h1 className="certificate-title">💖 Certificate of Love 💖</h1>
      <p className="certificate-text">
        This certifies that <span style={{ fontWeight: "bold", color: "#a78bfa" }}>Samuel Eshetu</span> 
        has successfully completed the Love Quiz with a score of:
      </p>
      <h2 className="certificate-score">{score}/{total}</h2>
      <p className="certificate-italic">"You are officially the Love of My Life 💜"</p>

      {/* Photos of you and him */}
      <div className="certificate-photos">
        <div className="photo-frame">
          <img src={samrawit} alt="Samrawit" className="photo" />
          <p className="photo-caption">Samrawit 💜</p>
        </div>
        <div className="photo-frame">
          <img src={samuel} alt="Samuel" className="photo" />
          <p className="photo-caption">Samuel 💙</p>
        </div>
      </div>

      <div className="certificate-icons">
        <span className="icon-rotate">🌹</span>
        <span className="icon-rotate-reverse">💍</span>
      </div>

      <p className="certificate-footer">Signed with 💜 by Samrawit</p>
    </div>
  );
};

export default Certificate;
