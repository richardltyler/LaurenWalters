import "./Publications.css";

// TODO: check for spacing around cite tags

export default function Publications() {
  return (
    <div className="publications">
      <div>
        <h2>Publications</h2>
        <ul className="publications-list">
          <li>
            Walters, Lauren BA; Baral, Nikita BS; Trowbridge, Ryan MD.{" "}
            <cite>“Trigeminal Trophic Syndrome”.</cite> NORD (National
            Organization for Rare Disorders). 18 Jan. 2024.
            https://rarediseases.org/rare-diseases/trigeminal-trophic-syndrome/.
          </li>
          <li>
            Walters, Lauren BA; Sidhu, Suhail BS; Checketts, T. Rees DO;
            Qasswal, Mohammed MD; Mullick, Sahil MD; Mukherjee, Sandeep MD.
            S2999.{" "}
            <cite>
              “Renal Cell Carcinoma of the Stomach Disguised as Hematemesis”.
            </cite>{" "}
            The American Journal of Gastroenterology 118(10S):p S2021-S2022,
            October 2023. | DOI: 10.14309/01.ajg.0000961636.59796.d5.
          </li>
          <li>
            Walters, Lauren BA. <cite>“USMLE Practice Questions.”</cite>{" "}
             Internal Medicine Interest Group Newsletter, vol. 3, no. 2, 5 Oct.
            2023, p. 14–15.
          </li>
          <li>
            Walters, Lauren BA. <cite>“USMLE Step Style Questions”.</cite> The
            Pulse, Creighton University School of Medicine Cardiology Interest
            Group Newsletter. 14 Jan. 2023, p. 19-21.
          </li>
          <li>
            Walters, Lauren BA. <cite>“USMLE Style Board Questions 6-10.”</cite>{" "}
            Internal Medicine Interest Group Newsletter, vol. 2, no. 1, 8 Feb.
            2022, p. 20.
          </li>
        </ul>
      </div>
      <div>
        <h2>Poster Presentations</h2>
        <ul className="publications-list">
          <li>
            <p>
              Walters, L., Gray, Caron, MD, (2024, March).{" "}
              <cite>Intrahepatic cholestasis of pregnancy.</cite> Online poster
              and presentation for the 2024 American Liver Foundation Liver
              Health Poster Competition.
            </p>
            <ul>
              <li>Rare Diseases category winner</li>
            </ul>
          </li>
          <li>
            Walters, L., Taylor, A., Dutta, S. MBBS, Huerter, C. MD, (2024,
            May).{" "}
            <cite>
              Propylthiouracil induced vasculitis presented like purpura
              fulminans.
            </cite>{" "}
            Presented at the 2024 American College of Physicians Annual Meeting,
            Boston, MA.
          </li>
          <li>
            Walters, L., Sidhu, S., Checketts, T.R. DO, Qasswal, M. MD, Mullick,
            S. MD, Mukherjee, S. MD, (2023, October).{" "}
            <cite>
              Renal cell carcinoma of the stomach disguised as hematemesis.
            </cite>{" "}
            Poster presented at the 2023 American College of Gastroenterology
            Annual Meeting, Vancouver, BC.
          </li>
          <li>
            Walters, L., Haitam, B., (2023, March).{" "}
            <cite>Lysosomal acid lipase deficiency.</cite> Online poster and
            presentation for the 2023 American Liver Foundation Liver Health
            Poster Competition.
          </li>
          <li>
            Walters, L., Cox, C. MD, (2023, May). <cite>Big red herring.</cite>{" "}
            Poster presented at the 2023 Nebraska Radiologic Society Spring
            Meeting - Call for Interesting Cases, Omaha, NE.
          </li>
        </ul>
      </div>
      <div>
        <h2>Oral Presentations</h2>
        <ul className="publications-list">
          <li>
            <p>
              Walters, L., Taylor, A., Dutta, S. MBBS, Huerter, C. MD, (2023,
              October).{" "}
              <cite>
                Propylthiouracil induced vasculitis presented like purpura
                fulminans.
              </cite>{" "}
              Abstract presented at the 2023 Nebraska Chapter American College
              of Physicians Abstract Competition, Omaha, NE.
            </p>
            <ul>
              <li>Nebraska ACP Chapter winner</li>
            </ul>
          </li>

          <li>
            Walters, L., Srikanth, K., Sood, A. MBBS, (2022, September).{" "}
            <cite>A rare case of immune thrombocytopenic purpura. </cite>{" "}
            Abstract presented at the 2022 Nebraska Chapter American College of
            Physicians Abstract Competition, Omaha, NE.
          </li>
        </ul>
      </div>
    </div>
  );
}
