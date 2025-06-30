import Link from 'next/link';

import {
  Sidebar as SidebarContainer,
  SidebarLink,
  SidebarSection,
} from './ui/sidebar';

export default function Sidebar() {
  return (
    <SidebarContainer>
      <>
        <article className="flex flex-col w-full h-auto">
          <Link
            href="/"
            draggable={false}
            className="flex w-full h-auto justify-center items-center"
          >
            <div className="h-[40px] rounded-xl bg-white/15 flex flex-shrink-0 aspect-square items-center justify-center fill-white">
              <svg width={22} height={22} viewBox="0 0 512 512">
                <path d="M0 416c0 53 43 96 96 96l360 0c30.9 0 56-25.1 56-56l0-80c0-30.9-25.1-56-56-56l-124.3 0L419 232.7c21.9-21.9 21.9-57.3 0-79.2L362.4 97c-21.9-21.9-57.3-21.9-79.2 0L192 188.2 192 56c0-30.9-25.1-56-56-56L56 0C25.1 0 0 25.1 0 56L0 416zm456 64l-284.3 0 128-128L456 352c13.3 0 24 10.7 24 24l0 80c0 13.3-10.7 24-24 24zM396.4 210.1L192 414.5l0-181L305.9 119.6c9.4-9.4 24.6-9.4 33.9 0l56.6 56.6c9.4 9.4 9.4 24.6 0 33.9zM96 480c-35.3 0-64-28.7-64-64l0-128 128 0 0 128c0 35.3-28.7 64-64 64zM32 256l0-96 128 0 0 96L32 256zm0-128l0-72c0-13.3 10.7-24 24-24l80 0c13.3 0 24 10.7 24 24l0 72L32 128zM96 440a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
              </svg>
            </div>
          </Link>
        </article>
      </>
      <>
        <SidebarSection>
          <>
            <SidebarLink
              href="/search"
              label="Søk"
              icon={
                <svg viewBox="0 0 512 512" className="h-[18px]">
                  <path d="M368 208A160 160 0 1 0 48 208a160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L337.1 371.1z" />
                </svg>
              }
            />
          </>
        </SidebarSection>
      </>
      <>
        <SidebarSection>
          <>
            <SidebarLink
              href="/deklarasjoner"
              label="Deklarasjoner"
              icon={
                <svg viewBox="0 0 512 512" className="h-[18px]">
                  <path d="M48 336l81.2 0 20.9 41.9c6.8 13.6 20.6 22.1 35.8 22.1l140.2 0c15.1 0 29-8.6 35.8-22.1L382.8 336l81.2 0 0 80c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-80zm406.5-48l-76.6 0c-15.1 0-29 8.6-35.8 22.1L321.2 352l-130.3 0-20.9-41.9c-6.8-13.6-20.6-22.1-35.8-22.1l-76.6 0 49-195.9C108.2 85 114.6 80 122 80L390 80c7.3 0 13.7 5 15.5 12.1l49 195.9zM0 327.9L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-88.1c0-5.2-.6-10.4-1.9-15.5l-58-231.9C445 52 419.4 32 390 32L122 32C92.6 32 67 52 59.9 80.5L1.9 312.4C.6 317.4 0 322.6 0 327.9z" />
                </svg>
              }
            />
            <SidebarLink
              href="/maler"
              label="Maler"
              icon={
                <svg viewBox="0 0 448 512" className="h-[18px]">
                  <path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z" />
                </svg>
              }
            />
          </>
        </SidebarSection>
      </>
    </SidebarContainer>
  );
}
