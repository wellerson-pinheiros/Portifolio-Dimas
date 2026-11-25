import banner1 from '../../assets/images-convertidas-webp/Banner1.webp'
import banner2 from '../../assets/images-convertidas-webp/Banner2.webp'
import banner3 from '../../assets/images-convertidas-webp/Banner3.webp'
import banner4 from '../../assets/images-convertidas-webp/Banner4.webp'
import banner5 from '../../assets/images-convertidas-webp/Banner5.webp'
import logoOnity from '../../assets/figma/logo-onity.png'
import selo20Anos from '../../assets/figma/selo-20-anos.webp'


export type HeadlineWeight = 'black' | 'bold' | 'medium' | 'regular'

export interface HeadlineLine {
  text: string
  weight: HeadlineWeight
}

export interface BannerItem {
  id: number
  image: string
  alt: string
  /** Sombra aplicada sobre a foto (ver BannerSlide). */
  overlay: 'left-shade' | 'blue-tint' | 'shade' | 'bottom-fade'
  /** Posição vertical do bloco de texto no desktop. */
  position: 'high' | 'low' | 'feature'
  /** 'hero' = título em caixa alta com sombra; 'feature' = título leve e parágrafo. */
  variant: 'hero' | 'feature'
  headline: HeadlineLine[]
  subtitle?: string
  cta: { label: string; style: 'solid' | 'outline' }
  partner?: { logo: string; label: string }
  seal?: { image: string;}
}

export const banners: BannerItem[] = [
  {
    id: 1,
    image: banner1,
    alt: 'Porta de hotel com fechadura eletrônica prateada e corredor iluminado ao fundo',
    overlay: 'left-shade',
    position: 'high',
    variant: 'hero',
    headline: [
      { text: 'TECNOLOGIA GLOBAL', weight: 'black' },
      { text: 'DE ACESSO E SEGURANÇA', weight: 'bold' },
      { text: 'PARA O SEU HOTEL', weight: 'black' },
      { text: 'E PARA O SEU NEGÓCIO', weight: 'bold' },
    ],
    subtitle: 'COM SUPORTE TÉCNICO ESPECIALIZADO.',
    cta: { label: 'Conheça nossos produtos', style: 'solid' },
    partner: { logo: logoOnity, label: 'Distribuidor Autorizado' },
  },
  {
    id: 2,
    image: banner2,
    alt: 'Quarto de hotel com cama de casal e hóspede aproximando um cartão da fechadura',
    overlay: 'blue-tint',
    position: 'high',
    variant: 'hero',
    headline: [
      { text: 'SISTEMAS QUE GARANTEM', weight: 'black' },
      { text: 'ECONOMIA REAL E SUSTENTABILIDADE', weight: 'bold' },
      { text: 'PARA O SEU EMPREENDIMENTO', weight: 'black' },
      { text: 'E PARA O SEU NEGÓCIO', weight: 'bold' },
    ],
    subtitle: 'REDUZA CUSTOS COM ECONOMIZADORES DE ENERGIA.',
    cta: { label: 'Ver soluções de energia', style: 'solid' },
  },
  {
    id: 3,
    image: banner3,
    alt: 'Técnica especializada realizando manutenção em placas de controle com maleta de ferramentas',
    overlay: 'shade',
    position: 'low',
    variant: 'hero',
    headline: [
      { text: 'MAIS DE 20 ANOS DE EXPERIÊNCIA', weight: 'black' },
      { text: 'EM MANUTENÇÃO PREVENTIVA', weight: 'bold' },
      { text: 'E CORRETIVA', weight: 'black' },
      { text: 'COM AGILIDADE', weight: 'bold' },
    ],
    subtitle: 'ASSISTÊNCIA TÉCNICA ESPECIALIZADA E PEÇAS ORIGINAIS',
    cta: { label: 'Solicitar suporte', style: 'outline' },
    seal: { image: selo20Anos},
  },
  {
    id: 4,
    image: banner4,
    alt: 'Fechadura digital preta com celular exibindo chave digital de hotel',
    overlay: 'shade',
    position: 'low',
    variant: 'hero',
    headline: [
      { text: 'MODERNIZE SEU HOTEL', weight: 'black' },
      { text: 'COM FECHADURAS BLUETOOTH', weight: 'bold' },
      { text: 'E OFEREÇA MAIS', weight: 'black' },
      { text: 'AUTONOMIA AOS SEUS HÓSPEDES', weight: 'bold' },
    ],
    subtitle: 'SUA RECEPÇÃO NA PALMA DA MÃO: MOBILE ACCESS.',
    cta: { label: 'Saiba como atualizar', style: 'outline' },
  },
  {
    id: 5,
    image: banner5,
    alt: 'Técnico instalando componentes em quadro elétrico ao lado de bancada de ferramentas',
    overlay: 'bottom-fade',
    position: 'feature',
    variant: 'feature',
    headline: [{ text: 'Segurança inteligente em cada andar e em cada porta.', weight: 'medium' }],
    subtitle:
      'Projetos e instalação de fechaduras e controle de acesso Onity para elevadores e ambientes restritos.',
    cta: { label: 'Conheça nossos produtos', style: 'solid' },
  },
]
