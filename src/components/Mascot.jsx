import mascotMain from '../assets/mascot-main.png';
import mascotHanging from '../assets/mascot-hanging.png';
import mascotThinking from '../assets/mascot-thinking.png';
import mascotConfident from '../assets/mascot-confident.png';
import mascotStretching from '../assets/mascot-stretching.png';
import mascotEnergy from '../assets/mascot-energy.png';
import mascotPosture from '../assets/mascot-posture.png';

const images = {
  main: mascotMain,
  hanging: mascotHanging,
  thinking: mascotThinking,
  confident: mascotConfident,
  stretching: mascotStretching,
  energy: mascotEnergy,
  posture: mascotPosture,
};

export default function Mascot({ pose = 'main', className = '', alt = 'SHIFT mascot' }) {
  const src = images[pose] || mascotMain;
  return <img className={`mascot ${className}`} src={src} alt={alt} />;
}
