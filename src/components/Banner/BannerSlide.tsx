import type { BannerItem, HeadlineWeight } from './banners'
import overlayShade from '../../assets/figma/overlay-banner.svg'

interface BannerSlideProps {
  banner: BannerItem
  isActive: boolean
}

const weightClass: Record<HeadlineWeight, string> = {
  black: 'font-black',
  bold: 'font-bold',
  medium: 'font-medium',
  regular: 'font-normal',
}

const overlayClass: Record<BannerItem['overlay'], string> = {
  'left-shade':
    'bg-[linear-gradient(90deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0)_60%)]',
  'blue-tint':
    'laptop:w-[68.6%] bg-[linear-gradient(180deg,rgba(0,0,0,0.4)_0%,rgba(52,132,247,0.4)_30%,rgba(52,132,247,0.4)_54%,rgba(102,102,102,0.4)_83%)]',
  shade: '',
  'bottom-fade': 'bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.83)_100%)]',
}

// Mobile/tablet: coluna centralizada. Tablet: centro vertical da tela. Laptop+: bloco à esquerda.
const positionClass: Record<BannerItem['position'], string> = {
  high: 'inset-x-0 mx-auto bottom-[18%] tablet:bottom-auto tablet:top-1/2 tablet:-translate-y-1/2 laptop:inset-x-auto laptop:mx-0 laptop:translate-y-0 laptop:top-[28.5%] laptop:left-[2.3%]',
  low: 'inset-x-0 mx-auto bottom-[18%] tablet:bottom-auto tablet:top-1/2 tablet:-translate-y-1/2 laptop:inset-x-auto laptop:mx-0 laptop:translate-y-0 laptop:top-[32.5%] laptop:left-[2.3%]',
  feature: 'inset-x-0 mx-auto bottom-[18%] tablet:bottom-auto tablet:top-1/2 tablet:-translate-y-1/2 laptop:inset-x-auto laptop:mx-0 laptop:translate-y-0 laptop:top-[27%] laptop:left-[6.7%]',
}

function BannerSlide({ banner, isActive }: BannerSlideProps) {
  const isFeature = banner.variant === 'feature'

  // Logo do parceiro e selo aparecem dentro da coluna de texto no mobile/tablet
  // (assim nunca se sobrepõem ao título) e como elementos avulsos no laptop+.
  const renderPartner = (wrapperClass: string) =>
    banner.partner && (
      <div className={wrapperClass}>
        <p className="font-display text-[20px] font-semibold tablet:text-[24px] laptop:text-[36px] desktop:text-[min(2.6vw,50px)] desktop:whitespace-nowrap leading-tight tracking-[-0.02em] text-white">
          {banner.partner.label}
        </p>
        {/* O PNG do Figma traz um texto embutido no topo; o recorte (igual ao do Figma) mostra só a marca. */}
        <div className="relative mt-3 aspect-[577/117] w-[60%] overflow-hidden opacity-80 laptop:mt-[2%] laptop:w-[85%]">
          <img src={banner.partner.logo} alt="Onity" className="absolute left-0 top-[-41.03%] h-[141.03%] w-full max-w-none" />
        </div>
      </div>
    )

  const renderSeal = (wrapperClass: string) =>
    banner.seal && (
      <div className={wrapperClass}>
        <img src={banner.seal.image} alt="Selo de 20 anos de experiência" className="w-full" />
      </div>
    )

  return (
    <div
      aria-hidden={!isActive}
      className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${
        isActive ? 'z-10 opacity-100' : 'pointer-events-none z-0 opacity-0'
      }`}
    >
      <img
        src={banner.image}
        alt={isActive ? banner.alt : ''}
        loading={banner.id === 1 ? 'eager' : 'lazy'}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {banner.overlay === 'shade' ? (
        <img
          src={overlayShade}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
        />
      ) : (
        <div aria-hidden="true" className={`pointer-events-none absolute inset-y-0 left-0 w-full ${overlayClass[banner.overlay]}`} />
      )}

      {/* Versões para laptop+ (posicionadas à direita / à esquerda) */}
      {renderPartner(
        'absolute hidden laptop:flex laptop:left-[65%] laptop:top-[35%] laptop:w-[30%] laptop:flex-col laptop:items-start laptop:text-left',
      )}
      {renderSeal('absolute hidden laptop:block laptop:left-0 laptop:top-[15%] laptop:w-[12.8%]')}

      <div
        className={`absolute w-[92%] text-center laptop:w-auto laptop:text-left ${positionClass[banner.position]} ${
          isFeature ? 'laptop:max-w-[48.7%]' : ''
        }`}
      >
        {/* Versões para mobile/tablet (dentro da coluna) */}
        {renderPartner('mb-5 flex flex-col items-center laptop:hidden')}
        {renderSeal('mx-auto mb-5 w-[34%] tablet:w-[24%] laptop:hidden')}

        <h2
          className={`font-display text-white ${
            isFeature
              ? 'text-[30px] tablet:text-[40px] laptop:text-[48px] desktop:text-[64px] leading-[1.1] tracking-[-0.03em]'
              : 'text-[28px] tablet:text-[40px] laptop:text-[52px] desktop:text-[64px] leading-[1.08] tracking-[-0.03em] [text-shadow:0.11em_0.11em_0.056em_rgba(0,0,0,0.25)]'
          }`}
        >
          {banner.headline.map((line) => (
            <span key={line.text} className={`block ${weightClass[line.weight]}`}>
              {line.text}
            </span>
          ))}
        </h2>

        {banner.subtitle && (
          <p
            className={`font-display mt-[clamp(8px,1vw,20px)] text-white ${
              isFeature
                ? 'text-[16px] tablet:text-[20px] laptop:text-[24px] desktop:text-[31px] font-normal leading-[1.6] tracking-[-0.02em]'
                : 'text-[12px] tablet:text-[14px] laptop:text-[16px] desktop:text-[18px] font-bold leading-snug tracking-[-0.03em]'
            }`}
          >
            {banner.subtitle}
          </p>
        )}

        <button
          type="button"
          className={`font-display mt-[clamp(12px,1.6vw,30px)] inline-flex h-[clamp(44px,3.5vw,67px)] min-w-[clamp(180px,16.7vw,320px)] items-center justify-center rounded-full px-[clamp(16px,1.6vw,30px)] text-[14px] tablet:text-[16px] laptop:text-[20px] desktop:text-[25px] font-medium whitespace-nowrap text-white shadow-[3px_3px_5px_rgba(0,0,0,0.25)] transition-colors motion-reduce:transition-none ${
            banner.cta.style === 'solid'
              ? 'bg-black hover:bg-neutral-800'
              : 'border-[clamp(2px,0.26vw,5px)] border-solid border-white bg-black hover:bg-neutral-800'
          }`}
        >
          {banner.cta.label}
        </button>
      </div>
    </div>
  )
}

export default BannerSlide
