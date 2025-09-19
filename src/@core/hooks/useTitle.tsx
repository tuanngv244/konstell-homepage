'use client';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useResources } from './useResources';
import { usePathname } from 'next/navigation';
import { findNavByPath } from '../utils/general';

export const useTitle = () => {
  const { t, i18n } = useTranslation('common');
  const { navLinks } = useResources();
  const pathname = usePathname();

  useEffect(() => {
    document.title = findNavByPath(navLinks, pathname)?.title || 'Konstell Inc.';
  }, [i18n.language, t]);
  return {};
};
