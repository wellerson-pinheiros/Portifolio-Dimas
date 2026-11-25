import { useEffect, useState } from 'react'
import Header from '../Header'
import BannerSlide from './BannerSlide'
import { banners } from './banners'

const AUTOPLAY_MS = 6000

function Banner() {
  const [active, setActive] = useState(0)
  const total = banners.length

  // Reinicia o autoplay a cada troca (manual ou automática).
  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % total)
    }, AUTOPLAY_MS)

    return () => window.clearInterval(id)
  }, [active, total])

  return (
    <section
      aria-roledescription="carrossel"
      aria-label="Destaques"
      // Mobile/tablet/laptop: altura da tela.
      // Desktop+: altura = menor valor entre a tela e a proporção da foto (1920×1006 → 52.4vw),
      // assim a imagem sempre ocupa toda a largura sem cortar as laterais.
      className="relative h-svh min-h-[560px] w-full overflow-hidden bg-[#414141] desktop:h-[min(100svh,52.4vw)] desktop:min-h-0 ultrawide:h-[min(100svh,1006px)]"
    >
      <Header />

      {banners.map((banner, index) => (
        <BannerSlide key={banner.id} banner={banner} isActive={index === active} />
      ))}

      <div
        role="group"
        aria-label="Escolher banner"
        className="absolute bottom-[5%] left-1/2 z-30 flex -translate-x-1/2 items-center gap-[clamp(6px,0.6vw,13px)] laptop:left-auto laptop:right-[5%] laptop:translate-x-0"
      >
        {banners.map((banner, index) => (
          <button
            key={banner.id}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Ir para o banner ${index + 1}`}
            aria-current={index === active ? 'true' : undefined}
            className={`h-[clamp(6px,0.8vw,15px)] w-[clamp(24px,5.2vw,100px)] rounded-full transition-colors motion-reduce:transition-none ${
              index === active ? 'bg-white' : 'bg-[rgba(217,217,217,0.5)] hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Banner
