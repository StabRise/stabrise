import SectionContainer from '@/components/SectionContainer'

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <SectionContainer>
      <div className="px-6 md:px-12 lg:px-18 text-justify">{children}</div>
    </SectionContainer>
  )
}