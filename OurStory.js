import chefsMarioAndAdrianAImage from './Volumes/LaCie/LittleLemonWebsite_A_Jackson/assets/chefsMarioAndAdrianAImage.jpg';
import chefsMarioAndAdrianBImage from './Volumes/LaCie/LittleLemonWebsite_A_Jackson/assets/chefsMarioAndAdrianBImage.jpg';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>New York</h2>
        <p>
        Little Lemon started on a hot summer day in theback of an old
        food delivery truck, originally belonging to Mario, uncle Steve.
        Having been childhood best friends with now restaurant partner,
        Adrian, the two decided it only made sense to open up a restaurant together.
        Through their hustle and bustle, these two foodies have long since left their
        scrappy, crammed truck and moved into a much bigger space, serving delicious
        authentic mediterranean food all along the east coast United states.
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" />
        <img src={chefsMarioAndAdrianBImage} alt="Chefs Mario and Adrian" />
      </div>
    </section>
  );
};

export default OurStory;