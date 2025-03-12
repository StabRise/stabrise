import SectionContainer from '@/components/SectionContainer'

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <SectionContainer>
      <div className="p-12 text-justify">{children}</div>
    </SectionContainer>
  )
}