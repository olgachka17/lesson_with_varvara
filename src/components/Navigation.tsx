import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { 
  GraduationCap, 
  Sparkle, 
  ChatCircleDots, 
  CurrencyDollar,
  Phone,
  User,
  Certificate,
  Target,
  Star,
  List,
  X
} from '@phosphor-icons/react'

interface NavigationProps {
  onNavigate: (sectionId: string) => void
}

export function Navigation({ onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId)
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { id: 'about', label: 'Обо мне', icon: User },
    { id: 'qualifications', label: 'Квалификация', icon: GraduationCap },
    { id: 'certificates', label: 'Дипломы', icon: Certificate },
    { id: 'methodology', label: 'Методика', icon: Target },
    { id: 'testimonials', label: 'Отзывы', icon: Star },
    { id: 'pricing', label: 'Цены', icon: CurrencyDollar },
    { id: 'contact', label: 'Контакты', icon: Phone },
  ]

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => handleNavClick('hero')}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-bright-magenta to-coral flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Sparkle size={24} className="text-white" weight="fill" />
              </div>
              <div className="hidden md:block">
                <div className="font-bold text-lg leading-tight text-foreground">Варвара</div>
                <div className="text-xs text-foreground/60 leading-tight">English Tutor</div>
              </div>
            </button>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    size="sm"
                    onClick={() => handleNavClick(item.id)}
                    className="text-sm font-semibold hover:bg-peach/60 hover:text-foreground transition-colors"
                  >
                    <Icon size={18} weight="fill" className="mr-1.5" />
                    {item.label}
                  </Button>
                )
              })}
            </div>

            <div className="hidden lg:block">
              <Button
                size="sm"
                onClick={() => handleNavClick('contact')}
                className="rounded-full bg-[#ff5555] text-white hover:text-white font-bold shadow-lg hover:shadow-2xl transition-all hover:scale-110 border-0 px-6 py-5 text-base"
              >
                <Phone size={18} weight="fill" className="mr-1.5" />
                Записаться
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden"
            >
              {isMobileMenuOpen ? (
                <X size={28} weight="bold" />
              ) : (
                <List size={28} weight="bold" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-20 left-0 right-0 bg-white shadow-2xl rounded-b-3xl overflow-hidden">
            <div className="p-6 space-y-2 max-h-[calc(100vh-6rem)] overflow-y-auto">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="w-full flex items-center gap-3 p-4 rounded-2xl hover:bg-peach/60 transition-colors text-left font-semibold"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-bright-magenta to-coral flex items-center justify-center flex-shrink-0 shadow-md">
                      <Icon size={20} className="text-white" weight="fill" />
                    </div>
                    <span className="text-base">{item.label}</span>
                  </button>
                )
              })}
              <div className="pt-4">
                <Button
                  onClick={() => handleNavClick('contact')}
                  className="w-full rounded-full bg-coral text-white hover:bg-coral/90 font-bold shadow-lg py-6 text-base border-0"
                >
                  <Phone size={20} weight="fill" className="mr-2" />
                  Записаться на урок
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
