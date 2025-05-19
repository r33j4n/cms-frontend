import { Button } from 'antd';
import './HomePageHero.css';

export default function HomePageHero() {
  return (
    <div className="hero-bg">
      <div className="hero-content">
        <div className="hero-title">
          <span>CoManS :</span><br />
          <span className="hero-highlight">Complaint Management System</span>
        </div>
        <div className="hero-tagline">
          <span>AI based Solution</span>
        </div>
        <div className="hero-desc">
          <span>Solve your apartment problems.</span>
        </div>
        <div className="hero-btns">
          <Button
            type="primary"
            size="large"
            className="hero-btn hero-btn-primary"
            onClick={() => {
              window.location.href = '/complaint';
            }}
          >
            File a Complaint
          </Button>
          <Button
            type="default"
            size="large"
            className="hero-btn hero-btn-outline"
          >
            Explore More
          </Button>
        </div>
      </div>
    </div>
  );
}