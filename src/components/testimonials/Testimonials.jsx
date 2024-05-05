/* eslint-disable react/no-unescaped-entities */

import Testimonial from "./Testimonial";

export default function Testimonials() {
  return (
    <div className="row w-100 px-5">
      <Testimonial
        title="Anna"
        review={"Thank you, you changed my life!!!!"}
        image="https://avatar.iran.liara.run/public/20"
      />
      <Testimonial
        title="Nour"
        review={"Thank you, you changed my life!!!!"}
        image="https://avatar.iran.liara.run/public/21"
      />
      <Testimonial
        title="Hichem"
        review={"Thank you, you changed my life!!!!"}
        image="https://avatar.iran.liara.run/public/22"
      />
    </div>
  );
}
