import "./Experience.css";
import { useState } from "react";

export default function Experience() {
  const [selectedExperienceType, setSelectedExperienceType] =
    useState("volunteer");

  return (
    <main className="experience">
      <form className="experience-form">
        <fieldset className="experience-field">
          <label
            className={`experience-selector-label ${
              selectedExperienceType === "volunteer"
                ? "experience-selector-label_selected"
                : ""
            }`}
            htmlFor="volunteer"
          >
            <input
              className="experience-selector-input"
              type="radio"
              id="volunteer"
              value="volunteer"
              checked={selectedExperienceType === "volunteer"}
              onChange={() => setSelectedExperienceType("volunteer")}
            />
            Volunteer
          </label>
          <span className="divider" />
          <label
            className={`experience-selector-label ${
              selectedExperienceType === "professional"
                ? "experience-selector-label_selected"
                : ""
            }`}
            htmlFor="professional"
          >
            <input
              className="experience-selector-input"
              type="radio"
              id="professional"
              value="professional"
              checked={selectedExperienceType === "professional"}
              onChange={() => setSelectedExperienceType("professional")}
            />
            Professional
          </label>
        </fieldset>
      </form>
      <div className="experience-type-container">
        <div
          className={`experience-type-item ${
            selectedExperienceType === "volunteer"
              ? "volunteer_selected"
              : "volunteer"
          }`}
        >
          Lorem ipsum dolor sit amet. Qui quia aliquid ex voluptatem dolor est
          sint aliquid At sint eaque est aliquid animi sed dolor corporis a
          facere sunt. Non internos voluptas et architecto quas et dolor commodi
          sed voluptas maiores aut maxime soluta eum sint quia et sunt dolor.
        </div>
        <div
          className={`experience-type-item ${
            selectedExperienceType === "professional"
              ? "professional_selected"
              : "professional"
          }`}
        >
          Non ipsam vero ut quam autem non molestiae accusamus. In aliquam
          magnam aut cumque vero et sequi tenetur et perferendis voluptatem aut
          officia accusamus aut Quis internos est tempora tempore. Non inventore
          tempore a recusandae eligendi et consequatur nihil id repudiandae
          earum.
        </div>
      </div>
    </main>
  );
}
