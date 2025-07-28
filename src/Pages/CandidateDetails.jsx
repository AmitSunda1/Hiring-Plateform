import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetAllCandidatesQuery } from "../store/api/candidatesApi";
import { assets } from "../assets/assets";
import "./CandidateDetails.css";

const CandidateDetails = () => {
  const { candidateId } = useParams();
  const navigate = useNavigate();

  const {
    data: candidatesResponse,
    error,
    isLoading,
  } = useGetAllCandidatesQuery();

  const candidate = candidatesResponse?.data?.find(
    (c) => c._id === candidateId
  );

  if (isLoading) {
    return (
      <div className="candidate-details-loading">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  if (error || !candidate) {
    return (
      <div className="candidate-details-error">
        <h2>Candidate not found</h2>
        <button onClick={() => navigate(-1)} className="back-button">
          Go Back
        </button>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const getStatusColor = (status) => {
    const statusColors = {
      "New Applied": "#3B82F6",
      Screening: "#F59E0B",
      Assignment: "#8B5CF6",
      Interview: "#EF4444",
      Hired: "#10B981",
    };
    return statusColors[status] || "#6B7280";
  };

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh" }}>
      <div className="candidate-details">
        <div className="candidate-details-header">
          <button onClick={() => navigate(-1)} className="back-button">
            ← Back to Pipeline
          </button>
          <div className="header-title">
            <h1>Candidate Profile</h1>
          </div>
        </div>

        <div className="candidate-details-content">
          {/* Left Column - Profile Card (35%) */}
          <div className="left-profile-column">
            <div className="profile-card">
              {/* Profile Photo */}
              <div className="profile-photo-section">
                <div className="profile-photo">
                  <img
                    src={candidate.profilePhoto || assets.profile}
                    alt={candidate.userId?.firstName || "Candidate"}
                  />
                </div>
              </div>

              {/* Name and Email */}
              <div className="profile-basic-info">
                <h2 className="profile-name">
                  {candidate.userId?.firstName && candidate.userId?.lastName
                    ? `${candidate.userId.firstName} ${candidate.userId.lastName}`
                    : "Unknown Name"}
                </h2>
                <p className="profile-email">
                  {candidate.userId?.email || "No email"}
                </p>
              </div>

              {/* Status */}
              <div className="profile-status">
                <span
                  className="status-badge"
                  style={{ backgroundColor: getStatusColor(candidate.status) }}
                >
                  {candidate.status}
                </span>
              </div>

              {/* Match Percentage and Experience Row */}
              <div className="match-experience-row">
                <div className="match-section">
                  <span className="match-label">Profile Match</span>
                  <span className="match-percentage">85%</span>
                </div>
                <div className="experience-section">
                  <span className="experience-label">Experience</span>
                  <span className="experience-years">
                    {candidate.experience || "2+ years"}
                  </span>
                </div>
              </div>

              {/* Application Details */}
              <div className="application-details">
                <div className="detail-row">
                  <span className="detail-label">Applied Date:</span>
                  <span className="detail-value">
                    {formatDate(candidate.createdAt)}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Applied Via:</span>
                  <span className="detail-value">Direct Application</span>
                </div>
              </div>

              {/* Schedule Interview Button */}
              <button className="schedule-interview-btn">
                Schedule Interview
              </button>

              {/* Personal Information Section */}
              <div className="personal-info-section">
                <h3>Personal Information</h3>
                <div className="personal-info-list">
                  <div className="info-row">
                    <span className="info-label">Phone:</span>
                    <span className="info-value">
                      {candidate.phone || "Not provided"}
                    </span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Location:</span>
                    <span className="info-value">
                      {candidate.location || "Not provided"}
                    </span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">DOB:</span>
                    <span className="info-value">
                      {candidate.dateOfBirth || "Not provided"}
                    </span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Gender:</span>
                    <span className="info-value">
                      {candidate.gender || "Not specified"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Details (65%) */}
          <div className="right-details-column">
            {/* Hiring Steps Progress */}
            <div className="hiring-steps-section">
              <h3>Hiring Process</h3>
              <div className="steps-container">
                <div
                  className={`step ${
                    [
                      "New Applied",
                      "Screening",
                      "Assignment",
                      "Interview",
                      "Hired",
                    ].indexOf(candidate.status) >= 0
                      ? "completed"
                      : ""
                  } ${candidate.status === "New Applied" ? "current" : ""}`}
                >
                  <div className="step-number">1</div>
                  <div className="step-info">
                    <span className="step-title">Application Received</span>
                    <span className="step-date">
                      {formatDate(candidate.createdAt)}
                    </span>
                  </div>
                </div>
                <div
                  className={`step ${
                    ["Screening", "Assignment", "Interview", "Hired"].indexOf(
                      candidate.status
                    ) >= 0
                      ? "completed"
                      : ""
                  } ${candidate.status === "Screening" ? "current" : ""}`}
                >
                  <div className="step-number">2</div>
                  <div className="step-info">
                    <span className="step-title">HR Screening</span>
                    <span className="step-date">
                      {candidate.status === "Screening"
                        ? "In Progress"
                        : "Pending"}
                    </span>
                  </div>
                </div>
                <div
                  className={`step ${
                    ["Assignment", "Interview", "Hired"].indexOf(
                      candidate.status
                    ) >= 0
                      ? "completed"
                      : ""
                  } ${candidate.status === "Assignment" ? "current" : ""}`}
                >
                  <div className="step-number">3</div>
                  <div className="step-info">
                    <span className="step-title">Technical Assignment</span>
                    <span className="step-date">
                      {candidate.status === "Assignment"
                        ? "In Progress"
                        : "Pending"}
                    </span>
                  </div>
                </div>
                <div
                  className={`step ${
                    ["Interview", "Hired"].indexOf(candidate.status) >= 0
                      ? "completed"
                      : ""
                  } ${candidate.status === "Interview" ? "current" : ""}`}
                >
                  <div className="step-number">4</div>
                  <div className="step-info">
                    <span className="step-title">Technical Interview</span>
                    <span className="step-date">
                      {candidate.status === "Interview"
                        ? "In Progress"
                        : "Pending"}
                    </span>
                  </div>
                </div>
                <div
                  className={`step ${
                    candidate.status === "Hired" ? "completed current" : ""
                  }`}
                >
                  <div className="step-number">5</div>
                  <div className="step-info">
                    <span className="step-title">Final Decision</span>
                    <span className="step-date">
                      {candidate.status === "Hired" ? "Hired" : "Pending"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Overview Section */}
            <div className="detail-section">
              <h3>Overview</h3>
              <div className="section-content">
                <p>
                  {candidate.summary ||
                    "Professional with strong background in software development and team collaboration. Experienced in modern technologies and agile methodologies."}
                </p>
              </div>
            </div>

            {/* Education Section */}
            <div className="detail-section">
              <h3>Education</h3>
              <div className="section-content">
                {candidate.education?.length > 0 ? (
                  candidate.education.map((edu, index) => (
                    <div key={index} className="education-item">
                      <h4>{edu.degree || "Bachelor's Degree"}</h4>
                      <p>{edu.institution || "University Name"}</p>
                      <span className="education-year">
                        {edu.year || "2020-2024"}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="education-item">
                    <h4>Bachelor's in Computer Science</h4>
                    <p>University of Technology</p>
                    <span className="education-year">2020-2024</span>
                  </div>
                )}
              </div>
            </div>

            {/* Experience Section */}
            <div className="detail-section">
              <h3>Work Experience</h3>
              <div className="section-content">
                {candidate.workExperience?.length > 0 ? (
                  candidate.workExperience.map((exp, index) => (
                    <div key={index} className="experience-item">
                      <h4>{exp.position || "Software Developer"}</h4>
                      <p>{exp.company || "Tech Company"}</p>
                      <span className="experience-duration">
                        {exp.duration || "2022-2024"}
                      </span>
                      <p className="experience-description">
                        {exp.description ||
                          "Developed and maintained web applications using modern technologies."}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="experience-item">
                    <h4>Software Developer</h4>
                    <p>Tech Solutions Inc.</p>
                    <span className="experience-duration">2022-2024</span>
                    <p className="experience-description">
                      Developed and maintained web applications using React,
                      Node.js, and MongoDB.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Skills Section */}
            <div className="detail-section">
              <h3>Skills</h3>
              <div className="section-content">
                <div className="skills-grid">
                  {candidate.skills?.length > 0 ? (
                    candidate.skills.map((skill, index) => (
                      <span key={index} className="skill-item">
                        {skill}
                      </span>
                    ))
                  ) : (
                    <>
                      <span className="skill-item">JavaScript</span>
                      <span className="skill-item">React</span>
                      <span className="skill-item">Node.js</span>
                      <span className="skill-item">Python</span>
                      <span className="skill-item">MongoDB</span>
                      <span className="skill-item">Git</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetails;
