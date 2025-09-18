'use client';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const KRXAndOtcGoldTradingPage = () => {
  const { t } = useTranslation('common');
  return (
    <div className="w-screen h-[700px] mt-[72px] flex items-center justify-center flex-col">
      <h5 className="mb-1 text-2xl font-medium text-white">{t('common.noContentAvailable')} </h5>
      <Link
        href="/"
        className="inline-block px-11 py-3 mt-5 bg-primary-500 text-white font-medium rounded-[30px] hover:bg-primary-600 transition-colors duration-200"
      >
        {t('messages.backToHome')}
      </Link>
    </div>
  );
};

export default KRXAndOtcGoldTradingPage;
