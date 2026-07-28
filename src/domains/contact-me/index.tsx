'use client';

import Link from 'next/link';
import { clsx } from 'clsx';

import { sendGTMEvent } from '@next/third-parties/google';
import { ContentContainer } from '@/layout/components';
import { PageHeader } from '@/shared/components';
import { GTM_EVENTS } from '@/shared/constants';
import { animator } from '@/shared/helpers';
import { CONTACT_ME_DATA } from '@/data';

import { ContactForm } from './components';

export function ContactMePage() {
  return (
    <ContentContainer className="z-40">
      <PageHeader title="Contact Me" className="mb-5" />
      <div className="flex gap-5 max-lg:flex-wrap">
        <div className="w-full text-xl leading-7">
          {CONTACT_ME_DATA.texts.map((text: string, index: number) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        <div
          className={clsx(
            'text-md flex select-none flex-col gap-3 bg-transparent',
            animator({ name: 'fadeIn' })
          )}
        >
          {CONTACT_ME_DATA.links.map(({ title, actionLabel, url }, index: number) => (
            <div
              key={title}
              className={clsx('flex items-center gap-2', animator({ name: 'fadeIn' }))}
              style={{ animationDelay: `${(index + 1) * 0.3}s` }}
            >
              <span>{title}:</span>
              <Link
                href={url}
                target="_blank"
                prefetch={false}
                onClick={() => sendGTMEvent(GTM_EVENTS.CONTACT_LINK(actionLabel))}
                className={clsx('text-md whitespace-nowrap text-amber-500', {
                  'pointer-events-none': !url
                })}
              >
                {actionLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <ContactForm />
    </ContentContainer>
  );
}
