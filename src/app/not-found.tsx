import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="w-screen h-[700px] mt-[72px] flex items-center justify-center flex-col">
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <h5 className="mb-1 text-2xl font-medium text-white">Page Not Found ⚠️</h5>
      <p className="text-base text-white mb-8">
        We couldn&apos;t find the page you are looking for.
      </p>
      <Link
        href="/"
        className="inline-block px-11 py-3 mt-5 bg-primary-500 text-white font-medium rounded-[30px] hover:bg-primary-600 transition-colors duration-200"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
