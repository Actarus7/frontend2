import React from 'react';
import './styles/styles.css';

export function Footer() {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-4">
        <section className="mb-4">
          <a className="btn-icone btn-floating m-1" style={{ backgroundColor: '#000000' }} href="#!" role="button">
            <img className="footer-icon" src="/footer-images/Facebook.png" alt="Facebook" />
          </a>
          <a className="btn-icone btn-floating m-1" style={{ backgroundColor: '#000000' }} href="#!" role="button">
            <img className="footer-icon" src="/footer-images/Twitter.png" alt="Twitter" />
          </a>
          <a className="btn-icone btn-floating m-1" style={{ backgroundColor: '#000000' }} href="#!" role="button">
            <img className="footer-icon" src="/footer-images/Telegram.png" alt="Telegram" />
          </a>
          <a className="btn-icone btn-floating m-1" style={{ backgroundColor: '#000000' }} href="#!" role="button">
            <img className="footer-icon" src="/footer-images/Instagram.png" alt="Instagram" />
          </a>
          <a className="btn-icone btn-floating m-1" style={{ backgroundColor: '#000000' }} href="#!" role="button">
            <img className="footer-icon" src="/footer-images/Linkedin.png" alt="LinkedIn" />
          </a>
          <a className="btn-icone btn-floating m-1" style={{ backgroundColor: '#000000' }} href="#!" role="button">
            <img className="footer-icon" src="/footer-images/Whatsapp.png" alt="Whatsapp" />
          </a>
        </section>

        <section className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam,
            commodi optio pariatur est quia magnam eum harum corrupti dicta,
            aliquam sequi voluptate quas.
          </p>
        </section>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className="text-white" href="https://happytraining.com/">Happytraining.com</a>
      </div>
    </footer>
  );
}
