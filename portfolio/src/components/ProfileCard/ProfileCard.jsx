import './ProfileCard.css';
import profileImage from '../../assets/douglas.jpg';

export default function ProfileCard() {
  return (
    <div className="profile-card">
      <img src={profileImage} alt="Célia Alves" className="profile-image" />
      <h2>Célia Alves</h2>
      <p>Corretora de Imóveis</p>
    </div>
  );
}
