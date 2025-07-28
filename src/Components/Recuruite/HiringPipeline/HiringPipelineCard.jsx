import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../../../assets/assets";
import "./HiringPipelineCard.css";

const HiringPipelineCard = ({ candidate }) => {
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleCardClick = () => {
    navigate(`/candidate/${candidate.id}`);
  };

  return (
    <div className="hiring-pipeline-card" onClick={handleCardClick}>
      <div className="card-content">
        <div className="candidate-header">
          <div className="profile-photo">
            <img
              src={candidate.profilePhoto || assets.profile}
              alt={candidate.name}
            />
          </div>
          <div className="candidate-info">
            <h4 className="candidate-name">{candidate.name}</h4>
            <p className="candidate-email">{candidate.email}</p>
          </div>
        </div>
        <div className="role-info">
          <p className="applied-role">{candidate.role}</p>
        </div>
        <div className="date-info">
          <p className="applied-date">
            Applied: {formatDate(candidate.appliedDate)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HiringPipelineCard;
