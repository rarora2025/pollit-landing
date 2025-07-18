import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(120deg, #6366f1 0%, #a5b4fc 50%, #f8fafc 100%);
  background-size: 200% 200%;
  text-align: center;
  padding: 3rem 1rem 2rem 1rem;
  position: relative;
  overflow: hidden;
`;

const Headline = styled(motion.h1)`
  font-size: 3.2rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-shadow: 0 4px 32px rgba(99,102,241,0.18);
`;

const Subheadline = styled(motion.p)`
  font-size: 1.35rem;
  color: #3730a3;
  margin-bottom: 2.5rem;
  max-width: 650px;
  font-weight: 600;
  background: rgba(255,255,255,0.85);
  border-radius: 1.2rem;
  box-shadow: 0 4px 24px rgba(99,102,241,0.10);
  padding: 1.2rem 2rem;
  display: inline-block;
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  background: #fff;
  color: #6366f1;
  font-weight: 800;
  padding: 1.1rem 2.7rem;
  border-radius: 2.5rem;
  font-size: 1.25rem;
  text-decoration: none;
  box-shadow: 0 4px 24px rgba(99,102,241,0.18);
  transition: background 0.2s, color 0.2s;
  margin-bottom: 2.5rem;
  border: 2px solid #6366f1;
  &:hover {
    background: #6366f1;
    color: #fff;
  }
`;

const AppStoreButton = styled(motion.a)`
  display: inline-block;
  margin-top: 0.5rem;
  img {
    height: 56px;
    width: auto;
    vertical-align: middle;
  }
`;

const AppFrameWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 3.5rem 0 0 0;
  padding: 0 2vw;
  box-sizing: border-box;
`;

const AppFrame = styled(motion.iframe)`
  width: 100%;
  max-width: 900px;
  min-width: 320px;
  aspect-ratio: 16/11;
  min-height: 600px;
  border: 0;
  border-radius: 1.5rem;
  box-shadow: 0 8px 40px rgba(30,41,59,0.18);
  background: #fff;
`;

export default function Hero() {
  return (
    <HeroSection>
      <Headline
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Pollit: News, Polls & Political Quizzes
      </Headline>
      <Subheadline
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        Stay politically informed in under 3 minutes a day. Swipe through trending polls, take news quizzes, and join 55K+ Gen Z users making politics fun, fast, and social. Try the web app below or download the app!
      </Subheadline>
      <CTAButton
        href="#"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.97 }}
      >
        Download on the App Store
      </CTAButton>
      <AppStoreButton href="#">
        <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" />
      </AppStoreButton>
      <AppFrameWrapper>
        <AppFrame
          src="https://poll-it.app"
          title="Pollit Web App"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          allow="clipboard-write; clipboard-read"
        />
      </AppFrameWrapper>
    </HeroSection>
  );
} 