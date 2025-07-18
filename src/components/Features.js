import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const gradientAnim = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const FeaturesSection = styled.section`
  background: linear-gradient(120deg, #a5b4fc 0%, #f1f5f9 100%);
  background-size: 200% 200%;
  animation: ${gradientAnim} 10s ease-in-out infinite;
  padding: 5rem 1rem 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Title = styled(motion.h2)`
  font-size: 2.7rem;
  font-weight: 900;
  color: #3730a3;
  margin-bottom: 2.7rem;
  letter-spacing: -1px;
  text-shadow: 0 4px 32px rgba(99,102,241,0.10);
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2.2rem;
  width: 100%;
  max-width: 1100px;
`;

const FeatureCard = styled(motion.div)`
  background: #fff;
  border-radius: 1.3rem;
  box-shadow: 0 6px 32px rgba(99,102,241,0.10);
  padding: 2.2rem 1.3rem 1.7rem 1.3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 800;
  color: #6366f1;
  margin-bottom: 0.8rem;
`;

const FeatureDesc = styled.p`
  color: #475569;
  font-size: 1.05rem;
`;

const features = [
  {
    title: '🗳️ Poll-First UX',
    desc: 'Swipe left/right on poll cards, see live results instantly, and compare your vote with thousands of others.'
  },
  {
    title: '🧠 Daily Trivia',
    desc: 'Short, TikTok-style quizzes based on the latest news. Earn points for accuracy and keep your streak alive!'
  },
  {
    title: '🎯 Streaks + Leaderboards',
    desc: 'Earn badges for daily logins, voting, and quizzes. Climb local leaderboards and get shoutouts from the Pollit team.'
  }
];

export default function Features() {
  return (
    <FeaturesSection id="features">
      <Title
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Why You’ll Love Pollit
      </Title>
      <FeaturesGrid>
        {features.map((f, i) => (
          <FeatureCard
            key={f.title}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.13, duration: 0.6, type: 'spring', stiffness: 120 }}
            viewport={{ once: true }}
          >
            <FeatureTitle>{f.title}</FeatureTitle>
            <FeatureDesc>{f.desc}</FeatureDesc>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesSection>
  );
} 