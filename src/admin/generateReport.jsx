import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import connection from "../api/APIlink.js";
import "./Report.css"; // You can style using an external CSS file

const Report = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    // Fetch candidates with highest votes
    const fetchCandidates = async () => {
      try {
        const response = await axios.get(`${connection}/highest-votes`);
        setCandidates(response.data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    fetchCandidates();
  }, []);

  // Function to generate PDF
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Candidates with Highest Votes", 20, 20);
    doc.setFontSize(12);

    // Adding candidate data to PDF
    let yPos = 40;
    doc.text("Post, Candidate, Votes", 20, yPos); // Table header
    yPos += 10;
    candidates.forEach((candidate, index) => {
      doc.text(
        `${index + 1}. ${candidate._id}, ${candidate.candidate.name}, ${candidate.highestVotes}`,
        20,
        yPos
      );
      yPos += 10;
    });

    doc.save("highest_votes_report.pdf");
  };

  return (
    <div className="App">
      <h1>Candidates with Highest Votes</h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Post</th>
            <th>Candidate Name</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate, index) => (
            <tr key={index}>
              <td>{candidate._id}</td>
              <td>{candidate.candidate.name}</td>
              <td>{candidate.highestVotes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={generatePDF}>Generate PDF Report</button>
    </div>
  );
};

export default Report;
