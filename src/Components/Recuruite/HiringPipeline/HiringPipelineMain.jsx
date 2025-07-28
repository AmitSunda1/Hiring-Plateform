import React, { useState, useMemo } from "react";
import { useGetAllCandidatesQuery } from "../../../store/api/candidatesApi";
import HiringPipelineCard from "./HiringPipelineCard";
import "./HiringPipelineMain.css";

const HiringPipelineMain = () => {
  const [selectedFilter, setSelectedFilter] = useState("All Positions");

  // Fetch candidates data from API
  const {
    data: candidatesResponse,
    error,
    isLoading,
    refetch,
  } = useGetAllCandidatesQuery();

  // Process candidates data and organize by status
  const processedCandidates = useMemo(() => {
    if (!candidatesResponse?.data)
      return { applied: [], inReview: [], interview: [] };

    const candidates = candidatesResponse.data;

    // Map backend status to frontend pipeline stages
    const statusMapping = {
      "New Applied": "applied",
      Screening: "inReview",
      Assignment: "inReview",
      Interview: "interview",
      Hired: "interview", // Could create a separate 'hired' column if needed
    };

    const grouped = {
      applied: [],
      inReview: [],
      interview: [],
    };

    candidates.forEach((candidate) => {
      // Transform candidate data to match frontend structure
      const transformedCandidate = {
        id: candidate._id,
        name:
          candidate.userId?.firstName && candidate.userId?.lastName
            ? `${candidate.userId.firstName} ${candidate.userId.lastName}`
            : "Unknown Name",
        email: candidate.userId?.email || "No email",
        role: candidate.appliedJobs?.[0]?.title || "Not specified", // You might need to populate job info
        appliedDate: candidate.createdAt,
        status: candidate.status,
        skills: candidate.skills || [],
        experience: candidate.experience || 0,
        location: candidate.location || "Not specified",
        profilePhoto: candidate.userId?.profilePhoto || null, // If you have profile photos
      };

      const pipelineStage = statusMapping[candidate.status] || "applied";
      grouped[pipelineStage].push(transformedCandidate);
    });

    return grouped;
  }, [candidatesResponse]);

  // Filter candidates based on selected filter
  const filteredCandidates = useMemo(() => {
    if (selectedFilter === "All Positions") return processedCandidates;

    const filtered = {
      applied: [],
      inReview: [],
      interview: [],
    };

    Object.keys(processedCandidates).forEach((stage) => {
      filtered[stage] = processedCandidates[stage].filter(
        (candidate) =>
          candidate.role.toLowerCase().includes(selectedFilter.toLowerCase()) ||
          candidate.skills.some((skill) =>
            skill.toLowerCase().includes(selectedFilter.toLowerCase())
          )
      );
    });

    return filtered;
  }, [processedCandidates, selectedFilter]);

  const filterOptions = [
    "All Positions",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Product Manager",
    "Data Scientist",
    "Software Engineer",
    "React",
    "Node.js",
    "Python",
    "JavaScript",
  ];

  if (isLoading) {
    return (
      <div className="hiring-pipeline-main">
        <div className="loading-state">
          <h2>Loading candidates...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="hiring-pipeline-main">
        <div className="error-state">
          <h2>Error loading candidates</h2>
          <p>{error.message || "Failed to fetch candidates data"}</p>
          <button onClick={refetch} className="retry-button">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="hiring-pipeline-main">
      {/* Header Section */}
      <div className="pipeline-header">
        <h1 className="pipeline-title">Hiring Pipeline</h1>
        <div className="filter-dropdown">
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="dropdown-select"
          >
            {filterOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Pipeline Columns */}
      <div className="pipeline-columns">
        {/* Applied Column */}
        <div className="pipeline-column">
          <div className="column-header">
            <h3 className="column-title">Applied</h3>
            <span className="candidate-count">
              {filteredCandidates.applied.length}
            </span>
          </div>
          <div className="candidates-list">
            {filteredCandidates.applied.length > 0 ? (
              filteredCandidates.applied.map((candidate) => (
                <HiringPipelineCard key={candidate.id} candidate={candidate} />
              ))
            ) : (
              <div className="empty-state">
                <p>No candidates in this stage</p>
              </div>
            )}
          </div>
        </div>

        {/* In Review Column */}
        <div className="pipeline-column">
          <div className="column-header">
            <h3 className="column-title">In Review</h3>
            <span className="candidate-count">
              {filteredCandidates.inReview.length}
            </span>
          </div>
          <div className="candidates-list">
            {filteredCandidates.inReview.length > 0 ? (
              filteredCandidates.inReview.map((candidate) => (
                <HiringPipelineCard key={candidate.id} candidate={candidate} />
              ))
            ) : (
              <div className="empty-state">
                <p>No candidates in this stage</p>
              </div>
            )}
          </div>
        </div>

        {/* Interview Column */}
        <div className="pipeline-column">
          <div className="column-header">
            <h3 className="column-title">Interview</h3>
            <span className="candidate-count">
              {filteredCandidates.interview.length}
            </span>
          </div>
          <div className="candidates-list">
            {filteredCandidates.interview.length > 0 ? (
              filteredCandidates.interview.map((candidate) => (
                <HiringPipelineCard key={candidate.id} candidate={candidate} />
              ))
            ) : (
              <div className="empty-state">
                <p>No candidates in this stage</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringPipelineMain;
