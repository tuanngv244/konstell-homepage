import { Metadata } from 'next';

export const sharedMetadata: Metadata = {
  title: 'winways Inc.',
  description: 'Great idea & Creative Technology',
  openGraph: {
    title: 'winways Inc.',
    description: 'Great idea & Creative Technology',
  },
};

export const generateMetadata = (metadata?: Metadata): Metadata => ({
  ...sharedMetadata,
  ...metadata,
});
