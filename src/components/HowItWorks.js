import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  background: #fff;
  padding: 4rem 1rem 3rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 2.2rem;
`;

const Steps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  max-width: 900px;
  width: 100%;
`;

const StepCard = styled(motion.div)`
  background: #f1f5f9;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(30,41,59,0.06);
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StepNum = styled.div`
  background: #6366f1;
  color: #fff;
  font-weight: 700;
  border-radius: 50%;
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  margin-bottom: 0.7rem;
`;

const StepTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #334155;
  margin-bottom: 0.5rem;
`;

const StepDesc = styled.p`
  color: #64748b;
  font-size: 0.98rem;
  text-align: center;
`;

const steps = [
  {
    title: 'Get Daily Digest',
    desc: 'Receive a daily push or IG Story: 1 news story, 1 poll, 1 comment from across the aisle.'
  },
  {
    title: 'Swipe & Vote',
    desc: 'Swipe through poll cards, vote, and see live results instantly.'
  },
  {
    title: 'Compete & Connect',
    desc: 'Earn streaks, climb leaderboards, and connect with friends or the Pollit community.'
  }
];

export default function HowItWorks() {
  return (
    <Section>
      <Title>How It Works</Title>
      <Steps>
        {steps.map((s, i) => (
          <StepCard
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <StepNum>{i + 1}</StepNum>
            <StepTitle>{s.title}</StepTitle>
            <StepDesc>{s.desc}</StepDesc>
          </StepCard>
        ))}
      </Steps>
    </Section>
  );
} 