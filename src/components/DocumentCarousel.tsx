import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CaretLeft, CaretRight, FilePdf, Download, Eye, GraduationCap, Certificate, Seal } from '@phosphor-icons/react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

interface Document {
  id: string
  title: string
  description: string
  gradient: string
  icon: 'graduation' | 'certificate' | 'seal'
  pdfUrl: string
}

const documents: Document[] = [
  {
    id: '1',
    title: 'Диплом Бакалавра',
    gradient: 'from-primary via-[oklch(0.68_0.30_350)] to-[oklch(0.70_0.28_360)]',
    icon: 'graduation',
    pdfUrl: '/public/certificates/diploma-bachelor.pdf',
  },
  {
    id: '2',
    title: 'Диплом Магистра',
    description: 'Магистратура',
    gradient: 'from-secondary via-[oklch(0.65_0.28_300)] to-[oklch(0.68_0.26_290)]',
    icon: 'seal',
    pdfUrl: '/public/certificates/diploma-magistr.pdf',
  },
  {
    id: '3',
    title: 'TEFL/TESOL Сертификат',
    description: 'International TEFL and TESOL Training',
    gradient: 'from-accent via-[oklch(0.70_0.30_70)] to-[oklch(0.75_0.30_60)]',
    icon: 'certificate',
    pdfUrl: '/public/certificates/International TEFL and TESOL Training.pdf',
  },
]

export function DocumentCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % documents.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + documents.length) % documents.length)
  }

  const getVisibleDocs = (): Document[] => {
    const visible: Document[] = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % documents.length
      visible.push(documents[index])
    }
    return visible
  }

  const getIcon = (iconType: 'graduation' | 'certificate' | 'seal') => {
    switch (iconType) {
      case 'graduation':
        return <GraduationCap size={80} weight="fill" className="text-white/90" />
      case 'certificate':
        return <Certificate size={80} weight="fill" className="text-white/90" />
      case 'seal':
        return <Seal size={80} weight="fill" className="text-white/90" />
    }
  }

  return (
    <>
      <div className="relative max-w-5xl mx-auto">
        <div className="overflow-hidden">
          <div className="flex gap-6 justify-center items-center px-4">
            {getVisibleDocs().map((doc, idx) => (
              <div
                key={`${doc.id}-${currentIndex}`}
                className={`flex-shrink-0 transition-all ${idx === 1 ? 'z-10 opacity-100' : 'z-0 opacity-60'}`}
                style={{ width: idx === 1 ? '340px' : '300px', transform: idx === 1 ? 'scale(1)' : 'scale(0.88)' }}
              >
                <Card
                  className={`overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer border-0 ${idx === 1 ? 'ring-4 ring-primary/30' : ''
                    }`}
                  onClick={() => idx === 1 && setSelectedDoc(doc)}
                >
                  <CardContent className="p-0">
                    <div className={`relative aspect-[3/4] bg-gradient-to-br ${doc.gradient} flex flex-col items-center justify-center p-8`}>
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl" />
                        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
                      </div>

                      <div className="relative z-10 flex flex-col items-center text-center">
                        {getIcon(doc.icon)}
                        <div className="mt-6">
                          <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 shadow-lg font-semibold px-4 py-1.5">
                            <FilePdf className="mr-1.5" weight="fill" size={16} />
                            PDF документ
                          </Badge>
                        </div>
                      </div>

                      {idx === 1 && (
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <Button
                            size="lg"
                            className="bg-white text-foreground hover:bg-white/90 font-semibold shadow-xl border-0"
                          >
                            <Eye className="mr-2" weight="fill" size={20} />
                            Открыть документ
                          </Button>
                        </div>
                      )}
                    </div>
                    <div className="p-5 bg-card">
                      <h4 className="font-bold text-xl mb-2">{doc.title}</h4>
                      <p className="text-sm text-muted-foreground">{doc.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-2">
          <Button
            onClick={prevSlide}
            size="icon"
            className="pointer-events-auto rounded-full bg-coral text-white shadow-xl hover:scale-110 transition-transform border-0 hover:bg-coral/90"
          >
            <CaretLeft weight="bold" size={24} />
          </Button>
          <Button
            onClick={nextSlide}
            size="icon"
            className="pointer-events-auto rounded-full bg-coral text-white shadow-xl hover:scale-110 transition-transform border-0 hover:bg-coral/90"
          >
            <CaretRight weight="bold" size={24} />
          </Button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {documents.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all ${idx === currentIndex
                  ? 'bg-coral w-10'
                  : 'bg-foreground/20 w-2.5'
                }`}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!selectedDoc} onOpenChange={() => setSelectedDoc(null)}>
        <DialogContent className="max-w-6xl max-h-[95vh] border-0 shadow-2xl p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-4 border-b">
            <DialogTitle className="text-2xl font-bold">{selectedDoc?.title}</DialogTitle>
            <p className="text-muted-foreground text-sm mt-1">{selectedDoc?.description}</p>
          </DialogHeader>
          <div className="overflow-y-auto" style={{ height: 'calc(95vh - 140px)' }}>
            {selectedDoc?.pdfUrl && (
              <iframe
                src={selectedDoc.pdfUrl}
                className="w-full h-full min-h-[700px]"
                title={selectedDoc.title}
              />
            )}
          </div>
          <div className="flex gap-3 justify-end p-4 border-t bg-muted/30">
            <Button
              variant="outline"
              className="border-2 font-semibold"
              onClick={() => setSelectedDoc(null)}
            >
              Закрыть
            </Button>
            <Button
              className="bg-gradient-to-r from-primary to-[oklch(0.70_0.28_360)] text-primary-foreground font-semibold border-0"
              onClick={() => window.open(selectedDoc?.pdfUrl, '_blank')}
            >
              <Download className="mr-2" weight="bold" />
              Скачать PDF
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
