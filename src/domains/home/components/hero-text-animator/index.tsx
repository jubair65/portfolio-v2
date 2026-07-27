'use client';

import { useGSAP } from '@gsap/react';
import dynamic from 'next/dynamic';
import { useRef } from 'react';
import gsap from 'gsap';

import { PERSONAL_DATA } from '@/data';

const DecryptedText = dynamic(
  () =>
    import('@/shared/components/decrypted-text').then((module) => ({
      default: module.DecryptedText
    })),
  { ssr: false }
);

const WORDS = ["Jubair", "Bin", "Hasan"];

export function HeroTextAnimator() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (containerRef.current) {
        const words = containerRef.current.querySelectorAll('.word-container');
        const timeline = gsap.timeline({ repeat: -1 });

        gsap.set(containerRef.current, { autoAlpha: 1 });
        gsap.set(words, { display: 'none' });

        words.forEach((word) => {
          const chars = word.querySelectorAll('span');
          
          timeline.set(word, { display: 'flex' });
          timeline.fromTo(
            chars,
            { yPercent: -110 },
            {
              duration: 1,
              yPercent: 0,
              stagger: 0.1,
              ease: 'expo.inOut'
            }
          );
          timeline.to({}, { duration: 3 });
          timeline.to(chars, {
            duration: 1,
            yPercent: 110,
            stagger: 0.1,
            ease: 'expo.inOut'
          });
          timeline.set(word, { display: 'none' });
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="invisible flex w-full flex-col items-center justify-center">
      <h1 className="mt-10 flex w-11/12 select-none items-center justify-center overflow-hidden text-8xl font-extrabold font-title leading-tight h-[120px]">
        {WORDS.map((word, wordIndex) => (
          <div key={wordIndex} className="word-container flex">
            {word.split('').map((char, charIndex) => (
              <span key={charIndex} className="relative inline-block">
                {char}
              </span>
            ))}
          </div>
        ))}
      </h1>
      <DecryptedText
        sequential
        speed={80}
        parentClassName="text-3xl"
        text={PERSONAL_DATA.title}
      />
    </div>
  );
}
