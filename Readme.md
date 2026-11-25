# Portal Profissional — Suporte Técnico Especializado Onity

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)
![Lenis](https://img.shields.io/badge/Lenis_Smooth_Scroll-000000?style=for-the-badge&logo=scrollreveal&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![SEO](https://img.shields.io/badge/SEO_Optimized-4285F4?style=for-the-badge&logo=google&logoColor=white)
![License](https://img.shields.io/badge/Licença-Todos_os_Direitos_Reservados-red?style=for-the-badge)

## 📋 Visão Geral do Projeto

Este repositório contém o código-fonte de uma aplicação web moderna, de alta performance e visualmente sofisticada, desenvolvida sob medida para um **Técnico de Suporte Especializado da Onity** (líder global em sistemas eletrônicos de controle de acesso, fechaduras eletrônicas, cofres e gestão de energia para a indústria hoteleira e comercial).

O objetivo principal da plataforma é consolidar a presença digital do profissional, apresentar seu portfólio de serviços técnicos especializados, facilitar o agendamento de atendimentos, manutenções preventivas/corretivas e fornecer um canal direto e ágil de contato para clientes e parceiros comerciais.

## 🎨 Design e Prototipação (UI/UX)

Todo o fluxo de navegação, arquitetura da informação, identidade visual e sistema de design (*Design System*) foram meticulosamente concebidos e prototipados no **Figma** antes da fase de desenvolvimento.

* **Fidelidade Visual:** Implementação *pixel-perfect* fiel aos protótipos aprovados pelo cliente.
* **Responsividade Total (*Mobile-First*):** Adaptação fluida para dispositivos móveis, tablets e monitores *ultrawide*, garantindo que gestores de hotéis e clientes corporativos possam solicitar suporte técnico de qualquer dispositivo.
* **Acessibilidade e Usabilidade:** Hierarquia tipográfica clara, contraste adequado e navegação intuitiva focada em conversão e credibilidade técnica.

## 🚀 Stack Tecnológica e Arquitetura

O projeto foi construído sobre uma arquitetura moderna, escalável e otimizada para máxima velocidade de carregamento (*Core Web Vitals*) e experiência do usuário (*UX*):

| Tecnologia | Finalidade no Projeto |
| :--- | :--- |
| **React** | Biblioteca principal para construção da interface baseada em componentes reutilizáveis, modulares e de fácil manutenção. |
| **TypeScript** | Superset JavaScript que adiciona tipagem estática rigorosa, prevenindo erros em tempo de desenvolvimento e garantindo previsibilidade e segurança ao código. |
| **Vite** | *Build tool* e servidor de desenvolvimento de última geração, proporcionando compilação instantânea e geração de *bundles* altamente otimizados para produção. |
| **GSAP (GreenSock)** | Motor de animação profissional utilizado para coreografar transições complexas, animações baseadas em rolagem (*ScrollTrigger*) e microinterações fluidas sem comprometer a taxa de quadros (60 FPS). |
| **Lenis** | Biblioteca de *Smooth Scroll* de alta precisão que substitui a rolagem nativa do navegador por uma inércia suave e natural, integrando-se perfeitamente aos gatilhos de animação do GSAP. |

## 🔍 SEO (Search Engine Optimization) e Performance Web

O projeto foi estruturado seguindo rigorosamente as diretrizes modernas de **SEO Técnico e On-Page**, garantindo que a página alcance excelente ranqueamento orgânico em motores de busca (como Google e Bing) para palavras-chave estratégicas relacionadas a suporte técnico e manutenção de equipamentos **Onity**:

* **HTML5 Semântico:** Utilização criteriosa de tags estruturais (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`) e hierarquia lógica de cabeçalhos (`<h1>` a `<h3>`), facilitando a leitura e indexação pelos robôs de busca (*crawlers*).
* **Meta Tags Estratégicas e Open Graph:** Configuração completa de títulos dinâmicos, *meta descriptions* persuasivas, palavras-chave relevantes, tags canônicas (`canonical`) e protocolos **Open Graph / Twitter Cards** para compartilhamento otimizado em redes sociais e aplicativos de mensagens (como WhatsApp e LinkedIn).
* **Dados Estruturados (Schema.org / JSON-LD):** Implementação de marcação semântica para negócios locais e prestação de serviços técnicos (`LocalBusiness` / `ProfessionalService`), aumentando a elegibilidade para *Rich Snippets* nos resultados de pesquisa.
* **Otimização de Core Web Vitals:**
  * **LCP (*Largest Contentful Paint*):** Carregamento prioritário de ativos críticos e imagens em formatos modernos de alta compressão (`WebP` / `AVIF`).
  * **CLS (*Cumulative Layout Shift*):** Reserva explícita de dimensões para imagens, fontes e elementos animados via GSAP, evitando saltos visuais inesperados durante a renderização.
  * **INP (*Interaction to Next Paint*):** Execução otimizada de scripts e animações aceleradas por GPU para resposta imediata às interações do usuário.
* **Indexação e Rastreabilidade:** Estrutura preparada com suporte a `sitemap.xml`, `robots.txt` e atributos `alt` descritivos em todas as imagens e ícones vetoriais.

## ✨ Funcionalidades Principais

* **Apresentação Institucional e Técnica:** Destaque para certificações, experiência prática com hardware/software Onity (fechaduras RFID, sistemas de gestão, codificadores, etc.) e diferenciais competitivos.
* **Catálogo de Serviços Especializados:** Detalhamento claro de serviços como instalação, manutenção preventiva, diagnóstico de falhas, atualização de firmware e consultoria técnica.
* **Experiência Imersiva de Navegação:** Rolagem suave controlada pelo **Lenis** combinada com animações de entrada, *parallax* e revelação de conteúdo orquestradas pelo **GSAP**.
* **Canais de Atendimento Direto:** Integração estratégica de botões de ação rápida (WhatsApp Business, e-mail corporativo e formulários de solicitação de orçamento/suporte).

## 📁 Estrutura de Diretórios

A organização do código segue uma arquitetura limpa, objetiva e escalável, facilitando a manutenção e a evolução do projeto:

```text
├── public/                 # Arquivos estáticos públicos (favicons, robots.txt, sitemap.xml, etc.)
├── src/
│   ├── assets/             # Imagens otimizadas, ícones vetoriais (SVGs) e fontes
│   ├── components/         # Componentes de UI reutilizáveis (Botões, Cards, Navbar, Footer)
│   ├── pages/              # Seções e páginas principais da aplicação
│   ├── styles/             # Configurações globais de estilo, variáveis CSS e temas
│   ├── App.tsx             # Componente raiz e configuração do provedor de Smooth Scroll (Lenis)
│   └── main.tsx            # Ponto de entrada da aplicação React
├── .gitignore              # Arquivos e diretórios ignorados pelo controle de versão (Git)
├── index.html              # Template HTML principal com meta tags de SEO configuradas
├── package.json            # Dependências e scripts de automação
├── tsconfig.json           # Configurações do compilador TypeScript
└── vite.config.ts          # Configurações de build e plugins do Vite
```

## 🛠️ Pré-requisitos e Instalação Local

Para executar este projeto em ambiente de desenvolvimento local, certifique-se de ter instalado em sua máquina:

* **Node.js** (versão `18.0.0` ou superior recomendada)
* **npm** (`9.x+`), **yarn** ou **pnpm**

### Passo a Passo

1. **Clone o repositório** (acesso restrito a colaboradores autorizados):
   ```bash
   git clone <URL_DO_REPOSITORIO_PRIVADO>
   cd <NOME_DA_PASTA_DO_PROJETO>
   ```

2. **Instale as dependências do projeto:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   A aplicação estará disponível localmente em `http://localhost:5173`.

## 📜 Scripts Disponíveis

No arquivo `package.json`, estão configurados os seguintes comandos:

* `npm run dev` — Inicia o servidor local com *Hot Module Replacement* (HMR).
* `npm run build` — Executa a verificação de tipos do TypeScript e compila a aplicação otimizada para produção na pasta `dist/`.
* `npm run preview` — Inicia um servidor local para pré-visualizar a versão final gerada pelo comando de *build*.

## ⚖️ Propriedade Intelectual, Confidencialidade e Direitos Autorais

**AVISO LEGAL ESTRITO — TODOS OS DIREITOS RESERVADOS.**

1. **Titularidade e Exclusividade Comercial:** Este software, incluindo seu código-fonte, arquitetura, protótipos de design (Figma), animações customizadas, textos e identidade visual, foi desenvolvido sob encomenda e regime de **exclusividade comercial** para o cliente contratante (**Técnico de Suporte Especializado Onity**).
2. **Proibição de Uso Não Autorizado:** É estritamente proibida a cópia, reprodução total ou parcial, modificação, engenharia reversa, distribuição, sublicenciamento ou comercialização deste código-fonte ou de seus ativos visuais por terceiros sem a autorização prévia, expressa e por escrito do titular dos direitos.
3. **Marcas Registradas:** O nome **Onity** e eventuais logotipos ou referências a seus produtos pertencem exclusivamente aos seus respectivos proprietários legais, sendo mencionados neste projeto estritamente para fins descritivos e informativos referentes à qualificação técnica e área de atuação profissional do cliente.
4. **Sigilo:** Este repositório possui caráter privado e confidencial. O acesso não autorizado ou vazamento de informações aqui contidas está sujeito às sanções previstas na Lei de Direitos Autorais (Lei nº 9.610/98) e na Lei de Software (Lei nº 9.609/98).

## 👨‍💻 Desenvolvimento e Suporte Técnico do Software

Projeto arquitetado, projetado e desenvolvido com excelência técnica.

* **Engenharia de Software & UI/UX Design:** *[Wellerson Pinheiro / WellVisionTech]*
* **Contato do Desenvolvedor:** *[wellerson.pinheiros@outlook.com / https://www.linkedin.com/in/wellerson-pinheiros/]*
* **Cliente Final:** *[Dimas Jose — Técnico de Suporte Onity]*