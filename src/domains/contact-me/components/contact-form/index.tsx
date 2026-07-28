'use client';

import { useForm, Controller } from 'react-hook-form';
import { clsx } from 'clsx';

import { sendGTMEvent } from '@next/third-parties/google';

import { EMAIL_VALIDATION_REGEX, GTM_EVENTS } from '@/shared/constants';
import { CONTACT_ME_DATA, GENERAL_SITE_DATA } from '@/data';
import { TextInput, Button } from '@/shared/components';

interface ContactMeForm {
  email: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const { contactForm } = GENERAL_SITE_DATA;
  const { subject, email, message } = contactForm.fields;

  const {
    formState: { errors },
    control,
    register,
    handleSubmit
  } = useForm<ContactMeForm>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    values: {
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = (data: ContactMeForm) => {
    sendGTMEvent(GTM_EVENTS.SEND_MESSAGE('success'));

    const mailtoUrl = `mailto:23201065@uap-bd.edu?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`From: ${data.email}\n\n${data.message}`)}`;

    // Open in default email client
    window.location.href = mailtoUrl;
  };

  return (
    <form
      className="mt-5 flex flex-col gap-4"
      onSubmit={(event) => {
        void handleSubmit(onSubmit)(event);
      }}
    >
      <TextInput
        required
        type="text"
        id="subject"
        label={subject.label}
        testId="subject-input"
        placeholder={subject.placeholder}
        error={errors.subject?.message}
        {...register('subject', {
          required: {
            value: true,
            message: subject.validation.required
          },
          minLength: {
            value: 10,
            message: subject.validation.minLength
          }
        })}
      />
      <TextInput
        required
        id="email"
        type="email"
        label={email.label}
        testId="email-input"
        error={errors.email?.message}
        placeholder={email.placeholder}
        {...register('email', {
          pattern: {
            value: EMAIL_VALIDATION_REGEX,
            message: email.validation.pattern
          },
          required: {
            value: true,
            message: email.validation.required
          }
        })}
      />

      <Controller
        name="message"
        control={control}
        rules={{
          minLength: {
            value: 30,
            message: message.validation.minLength
          },
          required: {
            value: true,
            message: message.validation.required
          }
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            required
            id="message"
            value={value}
            type="textarea"
            onChange={onChange}
            label={message.label}
            testId="message-input"
            placeholder={message.placeholder}
            error={errors.message?.message}
          />
        )}
      />
      <div className="mt-2 flex w-full justify-end">
        <Button type="submit" testId="submit-button" label={contactForm.submitButton} />
      </div>
    </form>
  );
}
