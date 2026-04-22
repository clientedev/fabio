export interface BenefitDetail {
  icon: string;
  title: string;
  desc: string;
}

export interface BenefitData {
  slug: string;
  imageUrl: string;
  category: string;
  title: string;
  tagline: string;
  intro: string;
  legalRef?: string;
  details: BenefitDetail[];
  highlight: string;
  ctaText: string;
}

export const benefitsData: Record<string, BenefitData> = {
  "fora-do-inventario": {
    slug: "fora-do-inventario",
    imageUrl: "/benefit-inventario.png",
    category: "Planejamento Patrimonial",
    title: "Fora do Inventário",
    tagline: "O capital chega direto aos beneficiários, sem espera e sem burocracia",
    intro: "Uma das vantagens mais poderosas do seguro de vida é que o capital segurado não integra o espólio do falecido. Isso significa que os beneficiários recebem os recursos de forma direta e ágil — sem precisar esperar o longo e custoso processo de inventário, que pode durar anos.",
    legalRef: "Código Civil Brasileiro, Art. 794",
    details: [
      {
        icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
        title: "Liquidez Imediata",
        desc: "Enquanto o inventário pode levar de 1 a 5 anos para ser concluído, o seguro de vida é liquidado em poucas semanas após a apresentação da documentação. Sua família não fica sem recursos.",
      },
      {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        title: "Proteção do Patrimônio",
        desc: "Bens em inventário ficam bloqueados até partilha. O capital do seguro é independente — sua família pode usá-lo imediatamente para pagar despesas, dívidas ou manter o padrão de vida.",
      },
      {
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1",
        title: "Sem Custos de Inventário",
        desc: "O processo de inventário gera custos com advogados, ITCMD, taxas judiciais e cartorárias. O seguro de vida chega livre dessas despesas, preservando 100% do valor para os beneficiários.",
      },
      {
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
        title: "Proteção da Família",
        desc: "Conflitos familiares durante o inventário podem comprometer o bem-estar de todos. O seguro de vida garante que pelo menos o capital chegue rápido, sem disputas nem bloqueios judiciais.",
      },
      {
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
        title: "Sem Partilha Obrigatória",
        desc: "O capital do seguro vai exatamente para quem você indicou como beneficiário — não é dividido pela regra de herança. Você tem controle total sobre quem recebe quanto.",
      },
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "Planejamento Estratégico",
        desc: "Usado como ferramenta de planejamento patrimonial, o seguro de vida fora do inventário permite organizar a transferência de riqueza entre gerações de forma eficiente e controlada.",
      },
    ],
    highlight: "O seguro de vida não compõe o espólio e não se enquadra como herança, conforme o Art. 794 do Código Civil Brasileiro. O capital chega direto ao beneficiário — sem inventário, sem ITCMD sobre o seguro e sem disputas.",
    ctaText: "Quero Proteger Meu Patrimônio",
  },

  "isencao-fiscal": {
    slug: "isencao-fiscal",
    imageUrl: "/benefit-fiscal.png",
    category: "Vantagem Tributária",
    title: "Isenção Fiscal",
    tagline: "O valor total chega ao beneficiário — o IR não leva nada",
    intro: "O capital segurado pago por falecimento é totalmente isento de Imposto de Renda para o beneficiário. Esta é uma das maiores vantagens tributárias disponíveis no mercado — e está prevista em lei desde 1988. Enquanto outras formas de poupança e investimento sofrem tributação, o seguro de vida garante que 100% do valor chegue a quem você ama.",
    legalRef: "Art. 6º, XIII da Lei 7.713/1988",
    details: [
      {
        icon: "M9 12l2 2 4-4m5.618-4.016",
        title: "100% Isento de IR",
        desc: "O valor recebido pelos beneficiários não sofre qualquer tributação de Imposto de Renda — independentemente do valor segurado. A lei é clara e não há exceções.",
      },
      {
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2",
        title: "Vantagem Sobre Investimentos",
        desc: "CDB, fundos, ações e até a poupança sofrem tributação em caso de herança. O seguro de vida chega livre de IR, sendo uma das formas mais eficientes de transferir capital entre gerações.",
      },
      {
        icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1",
        title: "Proteção contra ITCMD",
        desc: "Além do IR, o capital do seguro também não é base de cálculo para o ITCMD (Imposto sobre Transmissão Causa Mortis e Doação), que pode chegar a 8% em alguns estados.",
      },
      {
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2",
        title: "Previsão Legal Sólida",
        desc: "A isenção está prevista no Art. 6º, XIII da Lei 7.713/88 — uma legislação vigente há mais de 35 anos, sem perspectiva de mudança. É uma segurança jurídica que poucos instrumentos financeiros oferecem.",
      },
      {
        icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
        title: "Multiplicador de Capital",
        desc: "Enquanto um investimento de R$ 1 milhão pode sofrer até 27,5% de IR na herança, o seguro de vida chega inteiro ao beneficiário. Para grandes capitais, a diferença é de centenas de milhares de reais.",
      },
      {
        icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
        title: "Planejamento Tributário Legal",
        desc: "Estruturar parte do patrimônio via seguro de vida é uma das formas mais legítimas e eficientes de planejamento tributário — utilizada por advogados, contadores e planejadores financeiros.",
      },
    ],
    highlight: "Enquanto um investimento de R$ 500.000 pode ter até R$ 80.000 tributados na herança (entre IR e ITCMD), o mesmo valor segurado chega integralmente ao beneficiário. A isenção está garantida pelo Art. 6º, XIII da Lei 7.713/1988.",
    ctaText: "Otimizar Meu Planejamento Tributário",
  },

  "beneficiarios": {
    slug: "beneficiarios",
    imageUrl: "/benefit-beneficiarios.png",
    category: "Liberdade de Escolha",
    title: "Beneficiários Livres",
    tagline: "Você decide quem recebe, quanto recebe e como recebe",
    intro: "Uma das maiores liberdades do seguro de vida é a total autonomia na indicação dos beneficiários. Ao contrário da herança — que segue regras rígidas do Código Civil —, o capital do seguro pode ser destinado a qualquer pessoa, na proporção que você escolher, sem restrições legais obrigatórias.",
    details: [
      {
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
        title: "Qualquer Pessoa",
        desc: "O beneficiário pode ser qualquer pessoa — familiar ou não. Cônjuge, filhos, pais, irmãos, amigos, sócios ou qualquer outro. Não há obrigatoriedade de parentesco.",
      },
      {
        icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M12 7h.01M15 7h.01",
        title: "Percentual Personalizado",
        desc: "Você define exatamente qual percentual cada beneficiário recebe. Pode ser 50% para o cônjuge, 25% para cada filho — ou qualquer combinação que faça sentido para você.",
      },
      {
        icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
        title: "Alteração a Qualquer Momento",
        desc: "A indicação de beneficiários pode ser alterada a qualquer momento durante a vigência da apólice. Mudanças de vida — casamento, divórcio, nascimento de filhos — podem ser refletidas imediatamente.",
      },
      {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944",
        title: "Sem Conflito com Herança",
        desc: "O capital do seguro não compõe o espólio — portanto, não interfere com a divisão de herança entre os herdeiros legais. São patrimônios separados, com regras separadas.",
      },
      {
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
        title: "Proteção de Beneficiários Menores",
        desc: "Para beneficiários menores de idade, é possível designar um responsável pelo capital até a maioridade, garantindo que os recursos sejam bem administrados durante a infância.",
      },
      {
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5",
        title: "Beneficiário Irrevogável",
        desc: "Em situações específicas — como garantia em operações de crédito ou proteção de dependentes — é possível designar um beneficiário irrevogável, que não pode ser substituído sem sua anuência.",
      },
    ],
    highlight: "Ao contrário da herança — que segue a ordem de vocação hereditária do Código Civil —, o seguro de vida permite que você destine o capital exatamente para quem escolher, na proporção que desejar, sem interferência judicial ou familiar.",
    ctaText: "Estruturar Meus Beneficiários",
  },

  "impenhorabilidade": {
    slug: "impenhorabilidade",
    imageUrl: "/benefit-impenhorabilidade.png",
    category: "Proteção Jurídica",
    title: "Impenhorabilidade",
    tagline: "Credores não podem alcançar o capital destinado aos seus beneficiários",
    intro: "De acordo com o Artigo 833, inciso VI, do Código de Processo Civil (CPC), o seguro de vida é considerado um bem absolutamente impenhorável. Isso significa que, independentemente de dívidas, processos ou execuções contra o segurado ou seus herdeiros, o valor do seguro chega integralmente aos beneficiários.",
    legalRef: "Código de Processo Civil, Art. 833, VI",
    details: [
      {
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
        title: "Proteção Legal Sólida",
        desc: "A impenhorabilidade do seguro de vida está prevista no Art. 649, VII do Código Civil e no Art. 833, VII do CPC — legislação consolidada e amplamente reconhecida pelos tribunais brasileiros.",
      },
      {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944",
        title: "Proteção Contra Credores",
        desc: "Mesmo que o segurado ou seus herdeiros tenham dívidas — com bancos, fisco ou terceiros —, o capital do seguro de vida não pode ser bloqueado, penhorado ou utilizado para quitação dessas dívidas.",
      },
      {
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16",
        title: "Garantia na Falência Empresarial",
        desc: "No caso de falência de empresa, o capital do seguro de vida do empresário não integra a massa falida. Os beneficiários recebem o valor normalmente, mesmo durante processo falimentar.",
      },
      {
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2",
        title: "Blindagem Patrimonial",
        desc: "Para empresários e profissionais expostos a riscos jurídicos, o seguro de vida funciona como uma camada de blindagem patrimonial — mantendo capital seguro fora do alcance de ações judiciais.",
      },
      {
        icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1",
        title: "Proteção do Beneficiário",
        desc: "Não apenas o segurado é protegido — o capital que chega ao beneficiário também não pode ser penhorado por dívidas do próprio segurado falecido, garantindo que a proteção seja completa.",
      },
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "Ferramenta de Planejamento",
        desc: "Advogados e planejadores financeiros frequentemente recomendam o seguro de vida como instrumento de proteção patrimonial justamente por conta da impenhorabilidade — uma proteção legal que poucos outros ativos oferecem.",
      },
    ],
    highlight: "Diferente de imóveis, investimentos e saldos bancários — que podem ser bloqueados judicialmente —, o capital do seguro de vida é legalmente impenhorável. O Art. 649, VII do Código Civil e o Art. 833, VII do CPC garantem que os beneficiários recebam o valor integralmente.",
    ctaText: "Blindar Meu Patrimônio",
  },
};
