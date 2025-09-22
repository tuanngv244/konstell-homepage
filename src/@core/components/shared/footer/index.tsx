"use client";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import MainWrapper from '../sections/main-wrapper';
import ButtonLink from '../../button-link';
import { HeroIcons } from '../../icons/heroIcons';

type ContactFormData = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  hearAbout: string;
  message: string;
  privacyPolicy: boolean;
};

type FooterProps = {
  footerContent?: any;
};

const Footer = (props: FooterProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    console.log('Form submitted:', data);
    setIsSubmitting(true);
    try {
      // Handle form submission here
      console.log('Form submitted:', data);
      // You can add your API call here
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="footer-section bg-black bg-footer-primary  text-white xs:pt-[2rem] xs:pb-[4rem] sm:py-[3rem] lg:!py-[4rem] rounded-t-3xl">
      <MainWrapper>
        <div className="flex xs:flex-col sm:!flex-row gap-8 lg:!gap-16">
          {/* Block 1: Left Side - Testimonial & Robot */}
          <div className="left-block flex-1 flex flex-col justify-center xs:text-center lg:!text-left">
            {/* Quote */}
            <div className="mb-8">
              <p className="text-[1rem] leading-[1.25rem]text-white/90 mb-8 max-w-md">
                <HeroIcons.QuotationMarks size={20} pathProps={{ className: 'fill-white' }} /> <span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span> With over 20 years of experience, we specialize in creating
                tailored IT solutions for medium-sized businesses and corporations.
                Our priority is aligning with your business goals, and we take pride
                in the work we do and the clients we serve.
              </p>

              {/* Author Info */}
              <div className="xs:mb-2 md:!mb-8">
                <h4 className="text-xl font-semibold text-white mb-1">David Nguyen</h4>
                <p className="text-sm text-white/70 uppercase tracking-wider">CEO & FOUNDER</p>
              </div>
            </div>

            {/* Robot Image */}
            <div className="flex xs:justify-center lg:!justify-start">
              <div className="xs:w-full sm:w-72 xl:!w-[300px] xs:h-[200px] sm:h-72 xl:!h-[400px] relative">
                <img
                  src="/images/footer/robot.png"
                  alt="AI Robot"
                  className="w-full aspect-[3/4] h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Block 2: Right Side - Contact Form */}
          <div className="right-block flex-1">
            <div className="mb-8">
              <h2 className="xs:text-[2.5rem] xs:text-center md:!text-left md:!text-4xl lg:!text-5xl font-bold mb-4">
                <span className="text-gradient">Start growing</span> your<br />
                business with us
              </h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* First Row - Full Name & Email */}
              <div className="grid xs:grid-cols-1 lg:!grid-cols-2 gap-4">
                <div>
                  <input
                    {...register('fullName', {
                      required: 'Full name is required',
                      minLength: { value: 2, message: 'Name must be at least 2 characters' }
                    })}
                    type="text"
                    placeholder="Full name *"
                    className="w-full px-4 py-3 outline-none bg-gray-800 border border-gray-800 rounded-lg text-white placeholder-gray-400 border-b-1 border-b-gray-400 focus:outline-none transition-all duration-300"
                  />
                  {errors.fullName && (
                    <p className="text-red-400 text-sm mt-1">{errors.fullName.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    placeholder="Email *"
                    className="w-full px-4 py-3 outline-none bg-gray-800 border border-gray-800 rounded-lg text-white placeholder-gray-400 border-b-1 border-b-gray-400 focus:outline-none transition-all duration-300"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Second Row - Phone & Company */}
              <div className="grid xs:grid-cols-1 md:!grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center">
                  </div>
                  <input
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[\+]?[1-9][\d]{0,15}$/,
                        message: 'Invalid phone number'
                      }
                    })}
                    type="tel"
                    placeholder="Phone *"
                    className="w-full px-4 py-3 outline-none bg-gray-800 border border-gray-800 rounded-lg text-white placeholder-gray-400 border-b-1 border-b-gray-400 focus:outline-none transition-all duration-300"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register('company')}
                    type="text"
                    placeholder="Company"
                    className="w-full px-4 py-3 outline-none bg-gray-800 border border-gray-800 rounded-lg text-white placeholder-gray-400 border-b-1 border-b-gray-400 focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              {/* Third Row - How did you hear */}
              <div>
                <select
                  {...register('hearAbout', { required: 'Please select how you heard about us' })}
                  className="w-full px-4 py-3 outline-none bg-gray-800 border border-gray-800 rounded-lg text-white placeholder-gray-400 border-b-1 border-b-gray-400 focus:outline-none transition-all duration-300"
                >
                  <option value="">How did you hear about us?</option>
                  <option value="search-engine">Search Engine</option>
                  <option value="social-media">Social Media</option>
                  <option value="referral">Referral</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="other">Other</option>
                </select>
                {errors.hearAbout && (
                  <p className="text-red-400 text-sm mt-1">{errors.hearAbout.message}</p>
                )}
              </div>

              {/* Fourth Row - Message */}
              <div>
                <textarea
                  {...register('message', {
                    required: 'Message is required',
                    minLength: { value: 10, message: 'Message must be at least 10 characters' }
                  })}
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 outline-none bg-gray-800 border border-gray-800 rounded-lg text-white placeholder-gray-400 border-b-1 border-b-gray-400 focus:outline-none transition-all duration-300"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  {...register('privacyPolicy', { required: 'You must accept the privacy policy' })}
                  type="checkbox"
                  id="privacy"
                  className="mt-1 w-4 h-4 text-blue-600 bg-transparent border border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label htmlFor="privacy" className="text-sm text-white/80 leading-relaxed">
                  We will add your info to our CRM for contacting you regarding your request.
                  For more info please consult our <a href="/privacy-policy" className="text-blue-400 hover:underline">privacy policy</a>
                </label>
              </div>
              {errors.privacyPolicy && (
                <p className="text-red-400 text-sm">{errors.privacyPolicy.message}</p>
              )}

              <ButtonLink
                cls="inline-flex items-center gap-2  xs:px-4 md:!px-6 xs:py-2 md:!py-3 bg-gradient-primary text-white text-sm font-medium tracking-wider rounded-full transition-all duration-300"
                name={isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                color="#ffffff"
                size={20}
                type='submit'
              />
            </form>
          </div>
        </div>
      </MainWrapper>
    </footer>
  );
};

export default Footer;
