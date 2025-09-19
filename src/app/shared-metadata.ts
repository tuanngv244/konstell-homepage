import { Metadata } from 'next';

export const sharedMetadata: Metadata = {
  title: 'Konstell Inc.',
  description: 'Great idea & Creative Technology',
  openGraph: {
    title: 'Konstell Inc.',
    description: 'Great idea & Creative Technology',
  },
};

export const generateMetadata = (metadata?: Metadata): Metadata => ({
  ...sharedMetadata,
  ...metadata,
});
