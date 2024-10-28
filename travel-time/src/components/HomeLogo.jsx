// HomeLogo.jsx
import homeLogo from '../assets/pictures/home-logo.png';

const HomeLogo = () => {
    return (
      <div className="flex justify-center items-center my-40">
        <img src={homeLogo} alt="Home Logo" className="w-auto h-auto" />
      </div>
    );
};

export default HomeLogo;
