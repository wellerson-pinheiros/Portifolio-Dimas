import { useEffect, useId, useState } from 'react'
import logoDimas from '../../assets/figma/logo-dimas.png'

const navLinks = ['Home', 'Produtos', 'Serviços', 'Contato']

function Header() {
  const [open, setOpen] = useState(false)
  const menuId = useId()

  // Fecha o menu com a tecla Esc.
  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className="absolute left-1/2 top-0 z-30 h-[clamp(72px,7.3vw,100px)] w-[calc(100%-24px)] -translate-x-1/2 rounded-b-[clamp(24px,3.1vw,60px)] bg-[#000138] laptop:w-[78%]">
      <nav aria-label="Principal" className="flex h-full items-center justify-between px-[clamp(16px,9.3%,180px)]">
        <a href="#" aria-label="DiMas, página inicial" className="shrink-0" onClick={closeMenu}>
          <img src={logoDimas} alt="DiMas" className="h-[clamp(36px,3.4vw,65px)] w-auto object-contain" />
        </a>

        {/* Links e botão: somente desktop/laptop */}
        <ul className="font-display hidden items-center gap-[10px] text-white laptop:flex laptop:text-[18px] desktop:text-[24px]">
          {navLinks.map((link) => (
            <li key={link}>
              <a href="#" className="whitespace-nowrap hover:underline">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="font-display hidden h-[clamp(34px,2.9vw,60px)] shrink-0 items-center justify-center rounded-full bg-[#3484f7] px-[clamp(16px,1.4vw,28px)] text-[18px] font-medium whitespace-nowrap text-white shadow-[3px_3px_5px_rgba(0,0,0,0.25)] hover:bg-[#2a6fd6] laptop:inline-flex laptop:text-[18px] desktop:text-[24px]"
        >
          Agende uma visita
        </a>

        {/* Hambúrguer: mobile e tablet */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((current) => !current)}
          className="grid h-11 w-11 place-items-center rounded-full text-white laptop:hidden"
        >
          <span aria-hidden="true" className="flex flex-col gap-[6px]">
            <span
              className={`block h-[2px] w-6 bg-white transition-transform duration-300 motion-reduce:transition-none ${
                open ? 'translate-y-[8px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-white transition-opacity duration-300 motion-reduce:transition-none ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-white transition-transform duration-300 motion-reduce:transition-none ${
                open ? '-translate-y-[8px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Menu mobile/tablet */}
      <div
        id={menuId}
        className={`${
          open ? 'flex' : 'hidden'
        } absolute inset-x-0 top-full z-40 mt-2 flex-col items-center gap-6 rounded-3xl bg-[#000138] p-6 text-center laptop:hidden`}
      >
        <ul className="font-display flex flex-col items-center gap-4 text-[16px] text-white tablet:text-[18px]">
          {navLinks.map((link) => (
            <li key={link}>
              <a href="#" onClick={closeMenu} className="whitespace-nowrap hover:underline">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#"
          onClick={closeMenu}
          className="font-display inline-flex h-12 w-full max-w-[280px] items-center justify-center rounded-full bg-[#3484f7] text-[16px] font-medium whitespace-nowrap text-white hover:bg-[#2a6fd6]"
        >
          Agende uma visita
        </a>
      </div>
    </header>
  )
}

export default Header
