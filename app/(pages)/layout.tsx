import SectionContainer from '@/components/SectionContainer'

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <SectionContainer>
      <div className="px-6 text-justify md:px-12 lg:px-18">{children}</div>
    </SectionContainer>
  )
}
