import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const gradientAnim = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Section = styled.section`
  background: linear-gradient(120deg, #6366f1 0%, #e0e7ff 100%);
  background-size: 200% 200%;
  animation: ${gradientAnim} 10s ease-in-out infinite;
  padding: 4.5rem 1rem 3.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(motion.h2)`
  font-size: 2.3rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 2.2rem;
  letter-spacing: -1px;
  text-shadow: 0 4px 32px rgba(99,102,241,0.18);
`;

const CommunityGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
  margin-bottom: 2.5rem;
`;

const CommunityCard = styled(motion.a)`
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(30,41,59,0.08);
  padding: 1.5rem 2.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #3730a3;
  font-weight: 700;
  font-size: 1.1rem;
  transition: transform 0.18s;
  &:hover {
    transform: translateY(-6px) scale(1.04);
    box-shadow: 0 6px 32px rgba(99,102,241,0.13);
  }
`;

const CTA = styled(motion.a)`
  background: #fff;
  color: #6366f1;
  font-weight: 800;
  padding: 1.1rem 2.7rem;
  border-radius: 2.5rem;
  font-size: 1.25rem;
  text-decoration: none;
  box-shadow: 0 4px 24px rgba(99,102,241,0.18);
  transition: background 0.2s, color 0.2s;
  border: 2px solid #6366f1;
  &:hover {
    background: #6366f1;
    color: #fff;
  }
`;

const communities = [
  {
    label: 'TikTok @pollit.app',
    link: 'https://www.tiktok.com/@pollit.app'
  },
  {
    label: 'Instagram @pollit.app',
    link: 'https://instagram.com/pollit.app'
  }
];

export default function Community() {
  return (
    <Section>
      <Title
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Follow Pollit & Join the Movement
      </Title>
      <CommunityGrid>
        {communities.map((c, i) => (
          <CommunityCard
            key={c.label}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.13, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {c.label}
          </CommunityCard>
        ))}
      </CommunityGrid>
      <CTA
        href="https://poll-it.app"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.97 }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Try Pollit Now
      </CTA>
    </Section>
  );
} 