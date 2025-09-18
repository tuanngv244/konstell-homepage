import { ReactNode } from 'react';

import dynamic from 'next/dist/shared/lib/dynamic';

const MasterLayout = dynamic(() => import('@/@core/layouts/MasterLayout'), { ssr: false });

const ClientLayout = ({ children }: { children: ReactNode }) => {
  if (typeof window === 'undefined') {
    return null;
  }

  return <MasterLayout>{children}</MasterLayout>;
};

export default ClientLayout;
