import React, { useState } from 'react';
import './StudentModal.css';

export const StudentModal = () => {
  const [selectedCollege, setSelectedCollege] = useState([]);
  const [selectedSession, setSelectedSession] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true); // Track modal open state

  const closeModal = () => {
    setIsModalOpen(); // Close the modal
  };

  

  const handleFilterSelect = (filterType, filterValue) => {
    switch (filterType) {
      case 'college':
        setSelectedCollege((prev) =>
          prev.includes(filterValue) ? prev.filter(item => item !== filterValue) : [...prev, filterValue]
        );
        break;
      case 'session':
        setSelectedSession((prev) =>
          prev.includes(filterValue) ? prev.filter(item => item !== filterValue) : [...prev, filterValue]
        );
        break;
      case 'department':
        setSelectedDepartment((prev) =>
          prev.includes(filterValue) ? prev.filter(item => item !== filterValue) : [...prev, filterValue]
        );
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    alert("Filters Applied!");
    closeModal();  // Close the modal after submitting
  };

  const handleRemoveFilter = (filterType, filterValue) => {
    switch (filterType) {
      case 'college':
        setSelectedCollege(prev => prev.filter(item => item !== filterValue));
        break;
      case 'session':
        setSelectedSession(prev => prev.filter(item => item !== filterValue));
        break;
      case 'department':
        setSelectedDepartment(prev => prev.filter(item => item !== filterValue));
        break;
      default:
        break;
    }
  };

  if (!isModalOpen) return null; // Do not render the modal if closed

  return (
    <>
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }} aria-labelledby="studentModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="studentModalLabel">Filter Students</h5>
              <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* Selected Filters */}
              <div className="selected-filters">
                {selectedCollege.length > 0 && (
                  <div className="filter-category">
                    <h6>College</h6>
                    {selectedCollege.map((college, index) => (
                      <span key={index} className="badge bg-primary me-2">
                        {college}
                        <button
                          type="button"
                          className="btn-close btn-close-white ms-2"
                          aria-label="Remove"
                          onClick={() => handleRemoveFilter('college', college)}
                        />
                      </span>
                    ))}
                  </div>
                )}

                {selectedSession.length > 0 && (
                  <div className="filter-category">
                    <h6>Session</h6>
                    {selectedSession.map((session, index) => (
                      <span key={index} className="badge bg-primary me-2">
                        {session}
                        <button
                          type="button"
                          className="btn-close btn-close-white ms-2"
                          aria-label="Remove"
                          onClick={() => handleRemoveFilter('session', session)}
                        />
                      </span>
                    ))}
                  </div>
                )}

                {selectedDepartment.length > 0 && (
                  <div className="filter-category">
                    <h6>Department</h6>
                    {selectedDepartment.map((department, index) => (
                      <span key={index} className="badge bg-primary me-2">
                        {department}
                        <button
                          type="button"
                          className="btn-close btn-close-white ms-2"
                          aria-label="Remove"
                          onClick={() => handleRemoveFilter('department', department)}
                        />
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* College Filter Section */}
              <div className="filter-section">
                <h6>College</h6>
                <div className="filter-buttons">
                  {['College A', 'College B', 'College C', 'College D'].map(college => (
                    <button
                      key={college}
                      type="button"
                      className={`btn btn-outline-dark btn-filter ${selectedCollege.includes(college) ? 'active' : ''}`}
                      onClick={() => handleFilterSelect('college', college)}
                    >
                      {college}
                    </button>
                  ))}
                </div>
              </div>

              {/* Session Filter Section */}
              <div className="filter-section">
                <h6>Session</h6>
                <div className="filter-buttons">
                  {['2020-2021', '2021-2022', '2022-2023'].map(session => (
                    <button
                      key={session}
                      type="button"
                      className={`btn btn-outline-dark btn-filter ${selectedSession.includes(session) ? 'active' : ''}`}
                      onClick={() => handleFilterSelect('session', session)}
                    >
                      {session}
                    </button>
                  ))}
                </div>
              </div>

              {/* Department Filter Section */}
              <div className="filter-section">
                <h6>Department</h6>
                <div className="filter-buttons">
                  {['Computer Science', 'Mechanical Engineering', 'Civil Engineering'].map(department => (
                    <button
                      key={department}
                      type="button"
                      className={`btn btn-outline-dark btn-filter ${selectedDepartment.includes(department) ? 'active' : ''}`}
                      onClick={() => handleFilterSelect('department', department)}
                    >
                      {department}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>Apply Filters</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
    