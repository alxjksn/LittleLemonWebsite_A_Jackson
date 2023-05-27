import customer1Image from '.Volumes/LaCie/LittleLemonWebsite_A_Jackson/brian-lundquist-1SdlPpld9DO-unsplash.jpg';
import customer2Image from './Volumes/LaCie/LittleLemonWebsite_A_Jackson/andrea-rico-yHhtT7-A1Xg-unsplash.jpg';
import customer3Image from './Volumes/LaCie/LittleLemonWebsite_A_Jackson/jake-nackos-IF9TK5Uy-KI-unsplash.jpg';
import customer4Image from './Volumes/LaCie/LittleLemonWebsite_A_Jackson/joeyy-lee-7D8MgOrLGtU-unsplash.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Brianna Wilson',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Austin Myers',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Jane McKinley',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Joyce and Katie Johnson',
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) =>
          <TestimonialCard key={index} customer={customer} />
        )}
     </div>
    </section>
  );
};

export default Testimonials;