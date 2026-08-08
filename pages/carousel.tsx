'use client';

import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Carousel from '../components/Carousel';

interface FeatureCard {
  title: string;
  subtitle: string;
  description: string;
  color: string;
}

const features: FeatureCard[] = [
  {
    title: 'EDGE Projects',
    subtitle: 'Applied Machine Learning',
    description: 'Multi-quarter, team-led projects exploring real-world ML applications. From autonomous data labeling to campus dashboards, build practical systems and ship real impact.',
    color: 'from-blue-500/20',
  },
  {
    title: 'Pyoneer Workshops',
    subtitle: 'Hands-on ML Curriculum',
    description: 'Beginner to advanced Python and ML workshops. Weekly hands-on sessions with exercises, notebooks, and recorded sessions. Learn by building.',
    color: 'from-green-500/20',
  },
  {
    title: 'Bitcamp Hackathon',
    subtitle: 'Weekend Innovation Sprint',
    description: 'Intensive 24-48 hour hackathons to prototype AI projects, collaborate across teams, and compete for mentorship prizes and recognition.',
    color: 'from-yellow-500/20',
  },
  {
    title: 'Research Spotlight',
    subtitle: 'Student-Led Exploration',
    description: 'Peer-reviewed research groups diving deep into cutting-edge ML topics. Present your findings, publish papers, and contribute to the field.',
    color: 'from-purple-500/20',
  },
];

export default function CarouselDemo() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground film-grain">
      <Navigation />

      <main className="max-w-6xl mx-auto p-8 pt-24">
        {/* Header */}
        <section className="mb-12">
          <h1 className="text-5xl font-serif font-bold leading-tight mb-4">Featured Initiatives</h1>
          <p className="lead">
            Explore the core programs that make BigThinkAI a hub for applied machine learning. Slide through to discover what excites you.
          </p>
        </section>

        {/* Carousel */}
        <Carousel
          autoPlay={true}
          autoPlayInterval={6000}
          showIndicators={true}
          showControls={true}
          onSlideChange={(index) => setCurrentSlide(index)}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`w-full h-full flex flex-col items-center justify-center px-8 py-16 text-center bg-gradient-to-br ${feature.color} to-transparent rounded-2xl`}
            >
              <h2 className="text-4xl font-serif font-bold mb-2">{feature.title}</h2>
              <p className="text-lg font-medium text-primary mb-4">{feature.subtitle}</p>
              <p className="text-base text-muted max-w-md leading-relaxed">{feature.description}</p>
              <button className="btn-primary mt-6">Learn More</button>
            </div>
          ))}
        </Carousel>

        {/* Info Section */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="h2-serif mb-4">Carousel Features</h3>
            <ul className="space-y-2 text-sm">
              <li>Auto-play with pause-on-hover</li>
              <li>Keyboard navigation (← →)</li>
              <li>Touch/swipe support for mobile</li>
              <li>Indicator dots for quick nav</li>
              <li>Full ARIA accessibility labels</li>
              <li>Reduced motion support</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="h2-serif mb-4">Current Slide</h3>
            <p className="mb-4">
              You're viewing slide <strong>{currentSlide + 1}</strong> of <strong>{features.length}</strong>
            </p>
            <div className="space-y-2">
              <div className="font-semibold">{features[currentSlide]?.title}</div>
              <p className="text-sm text-muted">{features[currentSlide]?.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Instructions */}
        <section className="mt-12 card bg-muted/40">
          <h3 className="h2-serif mb-4">How to Interact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <strong className="block mb-2">Mouse</strong>
              <p className="text-muted">Use the left/right arrow buttons or click the dots below to navigate. Hover to pause auto-play.</p>
            </div>
            <div>
              <strong className="block mb-2">Keyboard</strong>
              <p className="text-muted">Press Arrow Left/Right keys to navigate when the carousel has focus.</p>
            </div>
            <div>
              <strong className="block mb-2">Touch</strong>
              <p className="text-muted">Swipe left or right on your mobile device to slide between initiatives.</p>
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className="mt-12">
          <h3 className="h2-serif mb-4">Usage Example</h3>
          <div className="card bg-muted/40 font-mono text-sm overflow-x-auto">
            <pre className="p-4">{`import Carousel from '@/components/Carousel';

export default function Page() {
  return (
    <Carousel 
      autoPlay={true}
      autoPlayInterval={5000}
      showIndicators={true}
      showControls={true}
      onSlideChange={(index) => console.log(index)}
    >
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
    </Carousel>
  );
}`}</pre>
          </div>
        </section>
      </main>
    </div>
  );
}
