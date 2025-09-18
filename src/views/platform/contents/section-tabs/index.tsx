'use client';
import { Button } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useResources } from '../useResources';
type Props = {};

const SectionTabsSection = ({}: Props) => {
  const { platforms } = useResources();
  const pathname = usePathname();
  const currentPlatform = platforms.find((platform) => platform.path === pathname);

  const _onScrollIntoSection = (id: string) => () => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      sectionElement.scrollIntoView({
        block: 'end',
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="sections-tabs overflow-x-auto py-[0.875rem] border-b border-solid border-gray-200 bg-white flex items-center justify-center gap-[0.625rem]">
      {currentPlatform?.sections?.map((section) => (
        <Button
          key={section.id}
          className="tab text-[1.125rem] leading-[1.75rem] font-normal  text-grey-800 hover:text-nd-600 hover:bg-[rgba(111,119,218,0.15)] !normal-case "
          onClick={_onScrollIntoSection(section.id)}
        >
          {section.label}
        </Button>
      ))}
    </section>
  );
};

export default SectionTabsSection;
