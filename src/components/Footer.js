import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  background: #f8fafc;
  padding: 2rem 1rem 1.2rem 1rem;
  text-align: center;
  color: #64748b;
  font-size: 1rem;
`;

const SocialLinks = styled.div`
  margin-bottom: 0.7rem;
  a {
    color: #6366f1;
    margin: 0 0.7rem;
    font-size: 1.3rem;
    text-decoration: none;
    transition: color 0.18s;
    &:hover {
      color: #3730a3;
    }
  }
`;

export default function Footer() {
  return (
    <FooterSection>
      <SocialLinks>
        <a href="https://www.tiktok.com/@pollit.app" target="_blank" rel="noopener noreferrer">TikTok</a>
        <a href="https://instagram.com/pollit.app" target="_blank" rel="noopener noreferrer">Instagram</a>
      </SocialLinks>
      © {new Date().getFullYear()} Pollit. All rights reserved.
    </FooterSection>
  );
} 