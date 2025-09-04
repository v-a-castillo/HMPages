import React, { useState } from 'react';
import styles from './AppImpactRecordCreateMPage.module.css'; // if using CSS modules

export const AppImpactRecordCreateMPage = () => {
  const [formData, setFormData] = useState({
    appImpactNumber: '',
    appImpactName: '',
    humanaAppId: '',
    itApplicationOwner: '',
    liaison: '',
    delegate: '',
    l3: '',
    l2: '',
    tlmRep: '',
    targetedCommitmentDate: '',
    timesTcdUpdated: 0,
    percentComplete: 0,
    riskAcceptanceReason: '',
    numberOfRiskAcceptances: 0,
    tlmStage: '',
    status: '',
    technologyInitiative: '',
    humanaEol: '',
    technologyKickoff: '',
    requestHelp: '',
    descriptionOfImpact: '',
    impactType: '',
    requestor: '',
    requestorDepartment: '',
    requestorPhoneNumber: '',
    project: '',
    program: '',
    siteLocation: '',
    statusDate: '',
    riskAssessmentRequired: false,
    riskAssessmentCompleted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox'
        ? (e.target instanceof HTMLInputElement ? e.target.checked : false)
        : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form>
      <h1>Impact Record Create</h1>

      <nav>
        <button type="button">Initiating</button>
        <button type="button">Planning</button>
        <button type="button">Executing</button>
        <button type="button">Monitoring</button>
        <button type="button">Closing</button>
      </nav>

      <div className="form-columns">
        <div className="left-column">
          <label htmlFor="appImpactNumber">App Impact Number</label>
          <input id="appImpactNumber" name="appImpactNumber" />

          <label htmlFor="status">Status</label>
          <select id="status" name="status">
            <option value="">Select</option>
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
          </select>

          <label htmlFor="requestor">Requestor</label>
          <input id="requestor" name="requestor" />

          <label htmlFor="requestorDepartment">Requestor Department</label>
          <input id="requestorDepartment" name="requestorDepartment" />

          <label htmlFor="requestorPhoneNumber">Requestor Phone Number</label>
          <input id="requestorPhoneNumber" name="requestorPhoneNumber" />

          <label htmlFor="impactType">Impact Type</label>
          <select id="impactType" name="impactType">
            <option value="">Select</option>
            <option value="Technical">Technical</option>
            <option value="Business">Business</option>
          </select>
        </div>

        <div className="right-column">
          <label htmlFor="project">Project</label>
          <input id="project" name="project" />

          <label htmlFor="program">Program</label>
          <input id="program" name="program" />

          <label htmlFor="siteLocation">Site/Location</label>
          <input id="siteLocation" name="siteLocation" />

          <label htmlFor="statusDate">Status Date</label>
          <input type="date" id="statusDate" name="statusDate" />

          <label htmlFor="riskAssessmentRequired">Risk Assessment Required?</label>
          <select id="riskAssessmentRequired" name="riskAssessmentRequired">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <label htmlFor="riskAssessmentCompleted">Risk Assessment Completed?</label>
          <select id="riskAssessmentCompleted" name="riskAssessmentCompleted">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>

      <label htmlFor="descriptionOfImpact">Description of Impact</label>
      <textarea id="descriptionOfImpact" name="descriptionOfImpact"></textarea>

      <div className="form-footer">
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </div>
    </form>

  );
};
