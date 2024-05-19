/* eslint-disable react/no-unescaped-entities */

import Testimonial from "./Testimonial";

export default function Testimonials() {
  return (
    <div className="row w-200">
      <Testimonial
        title="Weight Loss"
        review={
          "Looking back on my weight loss journey with BeActive, it's amazing to see how far I've come. I'll keep pushing forward, knowing that every step I take brings me closer to my goals"
        }
        image="https://avatar.iran.liara.run/public/67"
        img="/images/loss.jpg"
      />
      <Testimonial
        title="Weight Gain"
        review={
          "I'm amazed at my journey with BeActive, embracing my body's rhythm and achieving significant weight gain milestones. My dedication and courage remind me of my strength"
        }
        image="https://avatar.iran.liara.run/public/48"
        img="/images/gain.jpg"
      />
      <Testimonial
        title="Weight Balance"
        review={
          "Astounded by my BeActive journey, managing weight, achieving milestones; commitment and resilience affirm my inner strength, fostering a journey of self-discovery."
        }
        image="https://avatar.iran.liara.run/public/36"
        img="/images/balance.jpg"
      />
    </div>
  );
}
