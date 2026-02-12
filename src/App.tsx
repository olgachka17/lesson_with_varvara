import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { DocumentCarousel } from '@/components/DocumentCarousel'
import { Navigation } from '@/components/Navigation'
import { 
  GraduationCap, 
  Globe, 
  Chats, 
  Clock, 
  Sparkle,
  Phone,
  EnvelopeSimple,
  MapPin,
  Student,
  Heart,
  Star,
  ChatCircleDots,
  CheckCircle
} from '@phosphor-icons/react'

function App() {
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const scrollToContact = () => scrollToSection('contact')

  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-20 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-tertiary/15 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10">
        <Navigation onNavigate={scrollToSection} />
        
        <div className="relative overflow-hidden pt-20" id="hero">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex flex-wrap gap-2.5 mb-5 justify-center">
              <Badge className="text-sm md:text-base px-5 py-2 bg-gradient-to-r from-primary to-[oklch(0.70_0.26_350)] text-primary-foreground hover:shadow-lg hover:scale-105 transition-all shadow-md font-semibold border-0">
                <Sparkle className="inline mr-2" weight="fill" size={18} />
                10 лет преподавания
              </Badge>
              <Badge className="text-sm md:text-base px-5 py-2 bg-gradient-to-r from-secondary to-[oklch(0.65_0.28_300)] text-secondary-foreground hover:shadow-lg hover:scale-105 transition-all shadow-md font-semibold border-0">
                <Star className="mr-2" weight="fill" size={18} />
                C1 English
              </Badge>
              <Badge className="text-sm md:text-base px-5 py-2 bg-gradient-to-r from-[oklch(0.68_0.26_190)] to-[oklch(0.65_0.30_210)] text-white hover:shadow-lg hover:scale-105 transition-all shadow-md font-semibold border-0">
                <Globe className="mr-2" weight="fill" size={18} />
                Международный опыт
              </Badge>
              <Badge className="text-sm md:text-base px-5 py-2 bg-gradient-to-r from-accent to-[oklch(0.70_0.30_70)] text-accent-foreground hover:shadow-lg hover:scale-105 transition-all shadow-md font-semibold border-0">
                <Heart className="mr-2" weight="fill" size={18} />
                Групповые и индивидуальные уроки
              </Badge>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight text-foreground">
              Английский для взрослых: заговорите уверенно через несколько месяцев регулярных занятий
            </h1>
            
            <p className="text-lg md:text-xl mb-6 leading-relaxed max-w-4xl mx-auto text-muted-foreground">
              Я <span className="font-bold text-foreground">Варвара</span>, преподаю английский уже 10 лет и помогаю взрослым начать говорить — для работы, переезда и путешествий, без зубрёжки и скучных учебников.
            </p>
            
            <div>
              <Button 
                size="lg" 
                className="text-base md:text-lg px-8 py-5 md:px-10 md:py-6 rounded-full shadow-xl hover:shadow-2xl transition-all font-semibold bg-gradient-to-r from-primary via-[oklch(0.68_0.30_350)] to-[oklch(0.70_0.28_360)] text-primary-foreground hover:scale-105 hover:brightness-110 border-0"
                onClick={scrollToContact}
              >
                <Sparkle className="mr-2.5" weight="fill" size={22} />
                Записаться на бесплатный пробный урок
              </Button>
              <p className="text-sm text-muted-foreground mt-2 font-medium">
                20 минут знакомства: определим ваш уровень, разберём цели и составим персональный план обучения.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <section id="benefits" className="mb-20 scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-5">
            <Card className="p-6 md:p-8 shadow-lg hover:shadow-xl transition-all bg-card">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-[oklch(0.70_0.30_350)] flex items-center justify-center flex-shrink-0 shadow-md">
                    <CheckCircle size={24} className="text-primary-foreground" weight="fill" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Для взрослых 18+</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Можно прийти «с нуля» или после длинного перерыва. Подстроимся под ваш уровень и спокойно разгонимся.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8 shadow-lg hover:shadow-xl transition-all bg-card">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary to-[oklch(0.65_0.28_300)] flex items-center justify-center flex-shrink-0 shadow-md">
                    <Chats size={24} className="text-secondary-foreground" weight="fill" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Уроки 1-на-1</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      С упором на разговор и реальные ситуации. Много общения и практики, которая сразу закрепляет материал.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8 shadow-lg hover:shadow-xl transition-all bg-card">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-[oklch(0.75_0.30_60)] flex items-center justify-center flex-shrink-0 shadow-md">
                    <Sparkle size={24} className="text-accent-foreground" weight="fill" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Современные материалы</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Видео и мемы вместо скучной зубрёжки. Новые слова и правила запоминаются быстрее и без ощущения скучных уроков.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8 shadow-lg hover:shadow-xl transition-all bg-card">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[oklch(0.68_0.26_190)] to-[oklch(0.65_0.30_210)] flex items-center justify-center flex-shrink-0 shadow-md">
                    <GraduationCap size={24} className="text-white" weight="fill" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Личный план обучения</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Разработаю под ваши цели: работа, переезд, учёба или путешествия. Только то, что вам действительно нужно.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="about" className="mb-20 scroll-mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-foreground">
              Немного обо мне 😊
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              Моя история и путь в преподавании
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <Card className="flex-1 p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow bg-card">
              <CardContent className="space-y-3.5 text-base leading-relaxed p-0">
                <p>
                  Уже больше 10 лет я помогаю взрослым возвращаться к английскому — с нуля, после долгого перерыва или неудачного школьного опыта. На моих уроках не будет скучных таблиц спряжений: работаем с живым языком, мемами и реальными ситуациями из жизни.
                </p>
                <p>
                  Я люблю современную культуру и то, как люди на самом деле говорят — в сериалах, на работе, в поездках. Поэтому на уроках много смеха и живого общения: так проще расслабиться и начать говорить без зажима.
                </p>
                <p>
                  У меня уровень C1, я каждый день в языке: смотрю сериалы, читаю, слушаю подкасты. И понимаю, что взрослым английский нужен не «вообще», а для конкретных задач — работа, деловые встречи, путешествия. Именно под это и выстраиваю обучение.
                </p>
              </CardContent>
            </Card>
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="relative group">
                <div className="absolute -inset-2.5 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
                
                <div className="absolute -top-6 -right-7 w-16 h-16 rounded-full bg-gradient-to-br from-accent to-[oklch(0.75_0.30_60)] shadow-lg flex items-center justify-center z-10">
                  <Sparkle size={30} weight="duotone" className="text-accent-foreground" />
                </div>
                
                <div className="absolute -bottom-5 -left-5 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-[oklch(0.70_0.30_350)] shadow-lg flex items-center justify-center z-10">
                  <Heart size={24} weight="duotone" className="text-primary-foreground" />
                </div>
                
                <div className="absolute top-6 -left-8 w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-[oklch(0.65_0.28_300)] shadow-md flex items-center justify-center z-10">
                  <Star size={20} weight="duotone" className="text-secondary-foreground" />
                </div>
                
                <div className="absolute -top-3 left-10 w-10 h-10 rounded-full bg-gradient-to-br from-[oklch(0.68_0.26_190)] to-[oklch(0.65_0.30_210)] shadow-md flex items-center justify-center z-10">
                  <GraduationCap size={18} weight="duotone" className="text-white" />
                </div>
                
                <div className="absolute bottom-10 -right-8 w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-[oklch(0.75_0.30_70)] shadow-lg flex items-center justify-center z-10">
                  <ChatCircleDots size={24} weight="duotone" className="text-accent-foreground" />
                </div>
                
                <div className="relative p-2 bg-gradient-to-br from-primary via-secondary to-accent rounded-full shadow-xl">
                  <div className="p-1.5 bg-white rounded-full">
                    <img 
                      src="/englishwithvarvara/images/varvara.jpg" 
                      alt="Варвара Ищенко" 
                      className="w-full h-full object-cover rounded-full aspect-square shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="qualifications" className="mb-20 scroll-mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-foreground">
              Квалификация и опыт 🎓
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              Профессиональное образование и международная практика
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="h-full p-5 shadow-lg hover:shadow-xl transition-all bg-card">
              <CardContent className="p-0 space-y-2.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-[oklch(0.70_0.30_350)] flex items-center justify-center mb-3 shadow-md">
                  <GraduationCap size={28} className="text-primary-foreground" weight="fill" />
                </div>
                <h3 className="text-lg font-bold">Образование</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Диплом бакалавра и магистра СПбГПУ (Факультет иностранных языков). Обучение в аспирантуре, международные экзамены и сертификаты.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full p-5 shadow-lg hover:shadow-xl transition-all bg-card">
              <CardContent className="p-0 space-y-2.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[oklch(0.68_0.26_190)] to-[oklch(0.65_0.30_210)] flex items-center justify-center mb-3 shadow-md">
                  <Globe size={28} className="text-white" weight="fill" />
                </div>
                <h3 className="text-lg font-bold">Международный опыт</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Работала в международном детском саду в Китае. Прошла стажировку в Шотландии. Сдала международный экзамен уровня C1.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full p-5 shadow-lg hover:shadow-xl transition-all bg-card">
              <CardContent className="p-0 space-y-2.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary to-[oklch(0.65_0.28_300)] flex items-center justify-center mb-3 shadow-md">
                  <Student size={28} className="text-secondary-foreground" weight="fill" />
                </div>
                <h3 className="text-lg font-bold">Преподавание</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Преподаватель в СПбГПУ с 2019 года. Работа со студентами разных специальностей, разработка курсов и персональных планов обучения.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="certificates" className="mb-20 scroll-mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-foreground">
              Дипломы и сертификаты 📜
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              Подтверждённая квалификация и достижения
            </p>
          </div>
          <DocumentCarousel />
        </section>

        <section id="methodology" className="mb-20 scroll-mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-foreground">
              Моя методика 🎯
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed font-medium">
              Рассказываю, как именно я учу — в фокусе результат и реальное общение
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            <Card className="p-6 md:p-8 shadow-lg bg-card">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-primary to-[oklch(0.70_0.30_350)] flex items-center justify-center flex-shrink-0 shadow-md">
                    <Student size={28} className="text-primary-foreground" weight="fill" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2.5">Беру любой уровень</h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      Можно прийти "с нуля", можно с базой или после долгого перерыва — подстроимся и спокойно разгонимся.
                    </p>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-secondary to-[oklch(0.65_0.28_300)] flex items-center justify-center flex-shrink-0 shadow-md">
                    <Chats size={28} className="text-secondary-foreground" weight="fill" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2.5">Реальный разговорный английский</h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      Уроки построены на реальных ситуациях: деловые встречи на Zoom, small talk во время поездок, переговоры с клиентами. Много говорите вы, не я.
                    </p>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-accent to-[oklch(0.75_0.30_60)] flex items-center justify-center flex-shrink-0 shadow-md">
                    <Sparkle size={28} className="text-accent-foreground" weight="fill" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2.5">Видео и мемы вместо зубрёжки</h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      Использую короткие видео, мемы и контент из реальной жизни — так новые слова и грамматика запоминаются в 3 раза быстрее и уроки не скучные, как в школе.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-5">
              <Card className="h-full p-5 shadow-lg hover:shadow-xl transition-all bg-card">
                <CardContent className="p-0 text-center space-y-2.5">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-[oklch(0.65_0.28_300)] flex items-center justify-center mx-auto mb-3 shadow-md">
                    <Chats size={26} className="text-secondary-foreground" weight="fill" />
                  </div>
                  <h3 className="text-base font-bold">Для работы, поездок и общения</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Созвоны с коллегами, переговоры с клиентами, small talk на конференциях и путешествиях — учим реальный язык, который нужен сейчас
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full p-5 shadow-lg hover:shadow-xl transition-all bg-card">
                <CardContent className="p-0 text-center space-y-2.5">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-[oklch(0.75_0.30_70)] flex items-center justify-center mx-auto mb-3 shadow-md">
                    <CheckCircle size={26} className="text-accent-foreground" weight="fill" />
                  </div>
                  <h3 className="text-base font-bold">Подготовка к собеседованиям</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Практикуем реальные вопросы на интервью, разбираем сложные ситуации, повышаем уверенность
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="p-6 shadow-lg bg-card">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <CheckCircle size={32} className="flex-shrink-0 mt-1 text-[oklch(0.68_0.26_190)]" weight="fill" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Индивидуальный подход</h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      На старте уточняем <span className="font-bold text-foreground">цель и комфортный темп</span>, а дальше идём по плану и регулярно отмечаем прогресс.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="testimonials" className="mb-20 scroll-mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-foreground">
              Что говорят мои ученики 💬
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              Реальные отзывы и истории успеха
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <Card className="h-full p-5 shadow-lg hover:shadow-xl transition-all bg-card">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-[oklch(0.70_0.30_350)] flex items-center justify-center text-primary-foreground font-bold text-lg shadow-md">
                    🎯
                  </div>
                  <div>
                    <h3 className="font-bold text-base">Анастасия</h3>
                    <p className="text-xs text-muted-foreground">Студентка, 19 лет</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-2.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} weight="fill" size={18} className="text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-3 text-sm">
                  Варвара - это очень хороший преподаватель английского языка! С плохой базой английского я решила сдавать ОГЭ, за тот учебный год я получила много полезных знаний и опыта, я также продолжила готовиться с данным преподавателем к ЕГЭ, всё это время занятия по английскому языку никогда не были утомительными, я всегда с интересом подходила к изучению иностранного языка, так как именно с правильным преподавателем просыпается интерес к продуктивной работе!!
                </p>
                <Badge className="text-xs bg-gradient-to-r from-accent to-[oklch(0.75_0.30_60)] text-accent-foreground font-semibold shadow-sm border-0">
                  Сдала ОГЭ и готовится к ЕГЭ</Badge>
              </CardContent>
            </Card>

            <Card className="h-full p-5 shadow-lg hover:shadow-xl transition-all bg-card">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-[oklch(0.65_0.28_300)] flex items-center justify-center text-primary-foreground font-bold text-lg shadow-md">
                    💼
                  </div>
                  <div>
                    <h3 className="font-bold text-base">Дмитрий</h3>
                    <p className="text-xs text-muted-foreground">IT-специалист, 28 лет</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-2.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} weight="fill" size={18} className="text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-3 text-sm">
                  "Преподаватель гибко подстраивает график и идёт навстречу в форс‑мажорах, все занятия проходили онлайн. Материал подаётся структурировано и понятным языком: с низкого школьного уровня мы выстроили программу под мои цели. В результате я перестал «плавать» в правилах, лучше понимаю английский на слух, говорю увереннее и иногда даже думаю на нём."
                </p>
                <Badge className="text-xs bg-gradient-to-r from-secondary to-[oklch(0.68_0.26_290)] text-secondary-foreground font-semibold shadow-sm border-0">
                  Повысил уровень до В2+
                </Badge>
              </CardContent>
            </Card>

            <Card className="h-full p-5 shadow-lg hover:shadow-xl transition-all bg-card">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[oklch(0.68_0.26_190)] to-[oklch(0.65_0.30_210)] flex items-center justify-center text-white font-bold text-lg shadow-md">
                    ✈️
                  </div>
                  <div>
                    <h3 className="font-bold text-base">Елена</h3>
                    <p className="text-xs text-muted-foreground">Менеджер проектов, 32 года</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-2.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} weight="fill" size={18} className="text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-3 text-sm">
                  "Вернулась к английскому после 8 лет. Варвара помогла восстановить уровень за пол года занятий. Теперь спокойно созваниваюсь и переписываюсь с коллегами из Европы — даже планирую переезд."
                </p>
                <Badge className="text-xs bg-gradient-to-r from-[oklch(0.68_0.26_190)] to-[oklch(0.70_0.28_200)] text-white font-semibold shadow-sm border-0">
                  Готовится к переезду
                </Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="platforms" className="mb-20 scroll-mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-foreground">
              Платформы и специализация 💻
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              Современные инструменты и проверенные подходы
            </p>
          </div>
          <div className="rounded-3xl p-1 bg-gradient-to-br from-primary via-accent to-secondary shadow-lg">
            <div className="rounded-3xl p-6 md:p-10 bg-card">

              <div className="grid md:grid-cols-2 gap-5">
                <Card className="p-5 shadow-md bg-card">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-3.5 mb-2">
                      <div className="w-11 h-11 bg-gradient-to-br from-secondary to-[oklch(0.65_0.28_300)] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                        <ChatCircleDots size={22} className="text-secondary-foreground" weight="fill" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1.5">Платформы</h3>
                        <p className="text-muted-foreground text-sm">Работаю на Zoom, Progress Me, Kami — выбираем то, что удобно!</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-5 shadow-md bg-card">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-3.5 mb-2">
                      <div className="w-11 h-11 bg-gradient-to-br from-[oklch(0.68_0.26_190)] to-[oklch(0.65_0.30_210)] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                        <CheckCircle size={22} className="text-white" weight="fill" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1.5">Специализация</h3>
                        <p className="text-muted-foreground text-sm">Разговорный английский для работы, поездок и общения. Подготовка к собеседованиям и экзаменам для взрослых.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-5 shadow-md bg-card">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-3.5 mb-2">
                      <div className="w-11 h-11 bg-gradient-to-br from-primary to-[oklch(0.70_0.30_350)] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Student size={22} className="text-primary-foreground" weight="fill" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1.5">Ученики</h3>
                        <p className="text-muted-foreground text-sm">Работаю со взрослыми 18+</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-5 shadow-md bg-card">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-3.5 mb-2">
                      <div className="w-11 h-11 bg-gradient-to-br from-accent to-[oklch(0.75_0.30_60)] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Heart size={22} className="text-accent-foreground" weight="fill" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1.5">Мой принцип</h3>
                        <p className="text-muted-foreground text-sm">Начинаем с весёлого повторения пройденного материала и им же заканчиваем! 😊</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="mb-20 scroll-mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-foreground">
              Стоимость занятий 💰
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              Прозрачные цены и бесплатный пробный урок
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="h-full p-6 shadow-lg bg-card hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <Badge className="mb-3 bg-gradient-to-r from-primary to-[oklch(0.70_0.30_350)] text-primary-foreground font-bold text-xs shadow-md border-0">
                  Популярный выбор
                </Badge>
                <h3 className="text-xl font-bold mb-4">Индивидуальные занятия</h3>
                <div className="mb-5">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-sm text-muted-foreground">1 месяц (со скидкой):</span>
                    <span className="text-3xl font-bold text-foreground">1800₽</span>
                    <span className="text-muted-foreground text-base font-semibold">/урок</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-muted-foreground">Дальше:</span>
                    <span className="text-3xl font-bold text-foreground">2400₽</span>
                    <span className="text-muted-foreground text-base font-semibold">/урок</span>
                  </div>
                </div>
                <Separator className="my-4" />
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5">
                    <Clock size={22} className="flex-shrink-0 mt-0.5 text-primary" weight="fill" />
                    <span className="text-sm font-medium">50-55 минут личного внимания</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Sparkle size={22} className="flex-shrink-0 mt-0.5 text-accent" weight="fill" />
                    <span className="font-bold text-sm text-foreground">Первое занятие 20-25 минут БЕСПЛАТНО!</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={22} className="flex-shrink-0 mt-0.5 text-secondary" weight="fill" />
                    <span className="text-sm font-medium">Программа под ваши цели</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full p-6 shadow-lg bg-card hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <Badge className="mb-3 bg-gradient-to-r from-accent to-[oklch(0.75_0.30_60)] text-accent-foreground font-bold text-xs shadow-md border-0">
                  Выгодное предложение
                </Badge>
                <h3 className="text-xl font-bold mb-4">Парные занятия</h3>
                <div className="mb-5">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-bold text-foreground">1400₽</span>
                    <span className="text-muted-foreground text-base font-semibold">/урок</span>
                  </div>
                </div>
                <Separator className="my-4" />
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5">
                    <Clock size={22} className="flex-shrink-0 mt-0.5 text-accent" weight="fill" />
                    <span className="text-sm font-medium">60-65 минут в паре с другом</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Chats size={22} className="flex-shrink-0 mt-0.5 text-secondary" weight="fill" />
                    <span className="text-sm font-medium">Больше практики общения</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={22} className="flex-shrink-0 mt-0.5 text-[oklch(0.68_0.26_190)]" weight="fill" />
                    <span className="text-sm font-medium">Экономия + весёлая атмосфера</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="mb-20 scroll-mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-foreground">
              Готовы начать? 🚀
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              Свяжитесь со мной удобным способом и запишитесь на бесплатный пробный урок!
            </p>
          </div>
          <div className="rounded-3xl shadow-xl p-1 bg-gradient-to-br from-primary via-accent to-secondary">
            <div className="bg-card rounded-3xl p-6 md:p-10">

              <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-6">
                <Card className="p-5 text-center shadow-md hover:shadow-lg transition-all bg-card">
                  <CardContent className="p-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-[oklch(0.70_0.30_350)] flex items-center justify-center mx-auto mb-3 shadow-md">
                      <Phone size={26} className="text-primary-foreground" weight="fill" />
                    </div>
                    <h3 className="font-bold mb-1.5 text-base">Телефон</h3>
                    <a href="tel:+88950227443" className="text-sm font-semibold text-primary hover:opacity-80 transition-colors">
                      +8 (950) 227-44-43
                    </a>
                  </CardContent>
                </Card>

                <Card className="p-5 text-center shadow-md hover:shadow-lg transition-all bg-card">
                  <CardContent className="p-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-[oklch(0.65_0.28_300)] flex items-center justify-center mx-auto mb-3 shadow-md">
                      <EnvelopeSimple size={26} className="text-secondary-foreground" weight="fill" />
                    </div>
                    <h3 className="font-bold mb-1.5 text-base">Email</h3>
                    <a href="mailto:varvara.ishenko@gmail.com" className="break-all text-xs font-semibold text-secondary hover:opacity-80 transition-colors">
                      varvara.ishenko@gmail.com
                    </a>
                  </CardContent>
                </Card>

                <Card className="p-5 text-center shadow-md hover:shadow-lg transition-all bg-card">
                  <CardContent className="p-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-[oklch(0.75_0.30_60)] flex items-center justify-center mx-auto mb-3 shadow-md">
                      <MapPin size={26} className="text-accent-foreground" weight="fill" />
                    </div>
                    <h3 className="font-bold mb-1.5 text-base">Локация</h3>
                    <p className="text-muted-foreground font-semibold text-sm">
                      Санкт-Петербург<br />
                      (онлайн уроки)
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center space-y-4">
                <Button 
                  size="lg" 
                  className="text-base px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all font-semibold bg-gradient-to-r from-primary via-[oklch(0.68_0.30_350)] to-[oklch(0.70_0.28_360)] text-primary-foreground hover:scale-105 hover:brightness-110 border-0"
                  asChild
                >
                  <a href="https://t.me/Varvaraishenko" target="_blank" rel="noopener noreferrer">
                    <Sparkle className="mr-2.5" weight="fill" size={22} />
                    Написать в Telegram
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground font-medium max-w-md mx-auto">
                  Напишите кодовое слово «пробный» в Telegram — вышлю 2–3 варианта времени на ближайшие дни.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="py-10 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="flex justify-center gap-6 mb-5">
              <a 
                href="tel:+88950227443"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={24} weight="fill" />
              </a>
              <a 
                href="mailto:varvara.ishenko@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <EnvelopeSimple size={24} weight="fill" />
              </a>
              <a 
                href="https://t.me/Varvaraishenko"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ChatCircleDots size={24} weight="fill" />
              </a>
            </div>
            
            <Separator className="max-w-xs mx-auto" />
            
            <div>
              <p className="text-foreground mb-1 font-semibold">
                Варвара, твой преподаватель английского языка ❤️
              </p>
              <p className="text-xs text-muted-foreground">
                © 2024 Все права защищены
              </p>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  )
}

export default App
