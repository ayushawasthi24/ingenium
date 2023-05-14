import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { sponsors } from "../constants";

const Sponsors = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {sponsors.map((sponsor) => (
        <div className='w-28 h-28' key={sponsor.name}>
          <BallCanvas icon={sponsor.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Sponsors, "");
