import PreloaderWrapper from '@/components/PreloaderWrapper'


export default function PostLayout({ children }: { children: React.ReactNode }) {
  return <PreloaderWrapper>{children}</PreloaderWrapper>
}