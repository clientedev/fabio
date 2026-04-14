export interface ServiceFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface ServiceStep {
  num: string;
  title: string;
  desc: string;
}

export interface ServiceData {
  slug: string;
  imageUrl: string;
  category: string;
  title: string;
  tagline: string;
  intro: string;
  stats: { value: string; label: string }[];
  features: ServiceFeature[];
  steps: ServiceStep[];
  who: string[];
  ctaText: string;
}

export const servicesData: Record<string, ServiceData> = {
  "seguro-de-vida": {
    slug: "seguro-de-vida",
    imageUrl: "/service-vida.png",
    category: "Proteção Pessoal",
    title: "Seguro de Vida Personalizado",
    tagline: "Proteção sob medida que garante o futuro de quem você ama",
    intro: "O seguro de vida personalizado é uma solução estruturada com base no seu perfil financeiro, objetivos de vida e necessidades específicas — muito além de um pacote padronizado. Garante segurança financeira em momentos inesperados, mantém o padrão de vida da sua família e protege o que você construiu ao longo dos anos.",
    stats: [
      { value: "15+", label: "Anos de Especialização" },
      { value: "100%", label: "Análise Personalizada" },
      { value: "0%", label: "Burocracia Desnecessária" },
    ],
    features: [
      {
        icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
        title: "Análise de Perfil Completa",
        desc: "Antes de qualquer proposta, realizamos uma análise aprofundada do seu perfil financeiro, dependentes, patrimônio e objetivos. Cada solução é desenhada especificamente para você.",
      },
      {
        icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0",
        title: "Proteção para Sua Família",
        desc: "Em caso de falecimento, invalidez ou doença grave, sua família recebe capital suficiente para manter o padrão de vida, quitar dívidas e garantir a educação dos filhos.",
      },
      {
        icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
        title: "Coberturas Modulares",
        desc: "Combine coberturas de forma estratégica: morte, invalidez, doenças graves, diárias hospitalares e mais. Você paga apenas pelo que realmente precisa.",
      },
      {
        icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
        title: "Revisão Contínua",
        desc: "Sua vida muda — seu seguro também deve mudar. Revisamos periodicamente a apólice para garantir que a cobertura continue adequada à sua realidade.",
      },
      {
        icon: "M22 12h-4l-3 9L9 3l-3 9H2",
        title: "Capital Sempre Atualizado",
        desc: "O valor segurado é corrigido anualmente pela inflação, garantindo que o poder de compra do benefício se mantenha ao longo do tempo.",
      },
      {
        icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
        title: "Agilidade no Sinistro",
        desc: "Em um momento difícil, a última coisa que sua família precisa é burocracia. Acompanhamos todo o processo de sinistro para garantir a liquidação rápida.",
      },
    ],
    steps: [
      { num: "01", title: "Diagnóstico", desc: "Análise completa do seu perfil: renda, dependentes, patrimônio, dívidas e objetivos de longo prazo." },
      { num: "02", title: "Proposta Personalizada", desc: "Estruturação de uma solução sob medida com coberturas, valores e seguradoras ideais para o seu caso." },
      { num: "03", title: "Contratação Simplificada", desc: "Processo de contratação sem burocracia desnecessária, com suporte completo em cada etapa." },
      { num: "04", title: "Acompanhamento Contínuo", desc: "Revisão periódica da apólice, suporte a sinistros e atualização conforme sua vida evolui." },
    ],
    who: ["Profissionais liberais e autônomos", "Empresários e sócios de empresas", "Pais e mães com dependentes", "Pessoas com patrimônio a preservar", "Quem possui dívidas ou financiamentos"],
    ctaText: "Quero meu Seguro Personalizado",
  },

  "protecao-laboral": {
    slug: "protecao-laboral",
    imageUrl: "/service-laboral.png",
    category: "Proteção da Renda",
    title: "Proteção Laboral",
    tagline: "Sua capacidade de trabalho protegida contra qualquer adversidade",
    intro: "A Proteção Laboral é um conjunto de coberturas que garantem continuidade financeira quando sua capacidade de gerar renda é comprometida. Doenças graves, acidentes, cirurgias ou internações — qualquer evento inesperado pode paralisar sua fonte de renda. Com a proteção certa, isso não precisa ser um desastre financeiro.",
    stats: [
      { value: "5", label: "Tipos de Cobertura" },
      { value: "24h", label: "Cobertura por Dia" },
      { value: "100%", label: "Renda Substituída" },
    ],
    features: [
      {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        title: "Diagnóstico de Doenças Graves",
        desc: "Pagamento de capital em vida ao diagnóstico de doenças como câncer, infarto, AVC, insuficiência renal e outras listadas na apólice. Permite focar no tratamento sem preocupação financeira.",
      },
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "Invalidez por Doença ou Acidente",
        desc: "Em caso de invalidez permanente total ou parcial — seja por doença ou acidente — você recebe indenização proporcional à perda da capacidade laboral.",
      },
      {
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
        title: "Diárias de Internação Hospitalar",
        desc: "Recebe um valor diário para cada dia de internação hospitalar, cobrindo despesas que o plano de saúde não cobre — hotel, alimentação, transporte da família.",
      },
      {
        icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
        title: "Afastamento Temporário (DIT)",
        desc: "A Diária por Incapacidade Temporária paga um valor diário enquanto você estiver afastado do trabalho por acidente ou doença, substituindo sua renda durante a recuperação.",
      },
      {
        icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
        title: "Risco Cirúrgico e Quebra de Ossos",
        desc: "Indenizações específicas para procedimentos cirúrgicos e fraturas, complementando o que o plano de saúde oferece e cobrindo custos indiretos da recuperação.",
      },
    ],
    steps: [
      { num: "01", title: "Levantamento de Riscos", desc: "Identificamos os principais riscos da sua atividade profissional e perfil de saúde." },
      { num: "02", title: "Seleção de Coberturas", desc: "Escolhemos as coberturas mais relevantes e dimensionamos os valores adequados à sua renda." },
      { num: "03", title: "Contratação", desc: "Processo simplificado com as melhores seguradoras do mercado." },
      { num: "04", title: "Acionamento Fácil", desc: "Em caso de sinistro, te orientamos em cada etapa para garantir o recebimento ágil." },
    ],
    who: ["Autônomos e profissionais liberais", "Médicos, advogados, engenheiros", "Empresários sem sócio-proteção", "Trabalhadores sem CLT", "Qualquer profissional que depende de sua capacidade física ou mental"],
    ctaText: "Proteger Minha Renda Agora",
  },

  "sucessao-empresarial": {
    slug: "sucessao-empresarial",
    imageUrl: "/service-empresarial.png",
    category: "Blindagem Empresarial",
    title: "Sucessão Empresarial",
    tagline: "A continuidade do seu negócio garantida, mesmo nos momentos mais críticos",
    intro: "A morte ou invalidez de um sócio pode gerar uma crise existencial na empresa: disputas familiares, dificuldade de liquidez, entrada de herdeiros sem preparo na gestão e até a falência. O Seguro de Vida estruturado para Sucessão Empresarial resolve esses problemas antes que aconteçam, garantindo a blindagem do CNPJ.",
    stats: [
      { value: "70%", label: "Das empresas fecham sem plano" },
      { value: "100%", label: "Continuidade garantida" },
      { value: "0%", label: "Conflitos societários" },
    ],
    features: [
      {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944",
        title: "Compra e Venda de Cotas",
        desc: "O capital do seguro financia a compra das cotas do sócio falecido pelos demais sócios sobreviventes, evitando a entrada de herdeiros sem preparo na gestão da empresa.",
      },
      {
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16",
        title: "Continuidade Operacional",
        desc: "A empresa mantém sua operação normalmente durante o período de transição. Capital de giro é preservado, fornecedores e clientes não são impactados.",
      },
      {
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        title: "Pagamento de Impostos e Inventário",
        desc: "O capital cobre ITCMD, honorários advocatícios e outros custos do inventário, sem necessidade de vender ativos da empresa ou descapitalizá-la.",
      },
      {
        icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
        title: "Proteção Contra Descapitalização",
        desc: "Sem o seguro, a empresa pode ser forçada a vender ativos, imóveis ou equipamentos para honrar compromissos. O capital segurado evita esse cenário.",
      },
      {
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        title: "Acordo de Sócios Alinhado",
        desc: "Estruturamos o seguro em conjunto com o Acordo de Sócios (Shareholders' Agreement), criando um mecanismo jurídico sólido e tributariamente eficiente.",
      },
    ],
    steps: [
      { num: "01", title: "Diagnóstico Societário", desc: "Análise do contrato social, valor das cotas e estrutura de sócios." },
      { num: "02", title: "Estruturação Jurídica", desc: "Definição do mecanismo de compra e venda de cotas e estrutura tributária." },
      { num: "03", title: "Dimensionamento do Capital", desc: "Cálculo preciso do capital necessário para cobrir todos os custos de sucessão." },
      { num: "04", title: "Implementação", desc: "Contratação do seguro e integração com o acordo de sócios existente ou novo." },
    ],
    who: ["Sócios de empresas de qualquer porte", "Empresas familiares", "Médicos e profissionais em sociedade", "Empresas com sócios majoritários", "Negócios com ativos relevantes a preservar"],
    ctaText: "Blindar Meu CNPJ",
  },

  "consorcios": {
    slug: "consorcios",
    imageUrl: "/service-consorcio.png",
    category: "Aquisição Planejada",
    title: "Consórcios",
    tagline: "Adquira bens e serviços de forma planejada, sem pagar juros",
    intro: "O consórcio é uma alternativa inteligente ao financiamento tradicional: você parcela a aquisição sem pagar os juros abusivos dos bancos. Com planejamento estratégico e assessoria especializada, encontramos o consórcio ideal para seu objetivo — seja um imóvel, veículo, caminhão ou serviço.",
    stats: [
      { value: "0%", label: "Juros" },
      { value: "4", label: "Categorias de Bens" },
      { value: "100%", label: "Planejado" },
    ],
    features: [
      {
        icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z",
        title: "Imóveis",
        desc: "Consórcio imobiliário para compra de casa, apartamento, terreno, imóvel comercial ou rural. Uma das formas mais inteligentes de adquirir seu imóvel sem comprometer o orçamento com juros.",
      },
      {
        icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 6h2l2 4H9l1-4z",
        title: "Veículos e Motos",
        desc: "Carros novos, seminovos, motos de passeio e utilitários. Ideal para substituir o veículo da família ou adquirir o primeiro carro sem pagar o dobro do preço em juros.",
      },
      {
        icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
        title: "Caminhões e Máquinas",
        desc: "Consórcio de pesados para empresas e transportadores: caminhões, ônibus, máquinas agrícolas e equipamentos industriais. Expanda sua frota com inteligência financeira.",
      },
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "Serviços e Consórcio Empresarial",
        desc: "Consórcio de serviços para reformas, viagens, festas e eventos. Também disponível para capital de giro e expansão empresarial — uma ferramenta poderosa para negócios.",
      },
    ],
    steps: [
      { num: "01", title: "Definição do Objetivo", desc: "Entendemos o que você quer adquirir, quando e qual valor é necessário." },
      { num: "02", title: "Seleção do Grupo", desc: "Analisamos as administradoras e grupos disponíveis para encontrar as melhores condições." },
      { num: "03", title: "Estratégia de Contemplação", desc: "Orientamos sobre lances e estratégias para antecipar a contemplação quando necessário." },
      { num: "04", title: "Contemplação e Aquisição", desc: "Acompanhamos você desde a carta de crédito até a efetivação da compra do bem." },
    ],
    who: ["Quem quer imóvel sem juros de financiamento", "Empresas que desejam renovar frota", "Transportadores e agricultores", "Quem planeja comprar em 1 a 5 anos", "Investidores que buscam boa relação custo-benefício"],
    ctaText: "Planejar Minha Aquisição",
  },

  "plano-de-saude": {
    slug: "plano-de-saude",
    imageUrl: "/service-saude.png",
    category: "Saúde e Bem-estar",
    title: "Plano de Saúde",
    tagline: "Acesso à melhor saúde com o custo mais inteligente",
    intro: "Com o aumento constante dos reajustes dos planos de saúde, muitas pessoas pagam caro por coberturas insuficientes ou ficam sem acesso à rede ideal. Nossa assessoria analisa seu plano atual, identifica desperdícios e busca a melhor solução — seja para você, sua família ou sua empresa.",
    stats: [
      { value: "30%", label: "Economia média possível" },
      { value: "100%", label: "Análise sem custo" },
      { value: "1000+", label: "Opções de planos" },
    ],
    features: [
      {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944",
        title: "Análise do Plano Atual",
        desc: "Revisamos sua apólice atual para identificar cobertura inadequada, reajustes abusivos e oportunidades de migração para um plano melhor pelo mesmo preço ou inferior.",
      },
      {
        icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
        title: "Plano Individual e Familiar",
        desc: "Encontramos o plano ideal para cada fase da vida familiar: desde jovens solteiros até famílias com idosos e necessidades especiais, com a rede médica mais conveniente.",
      },
      {
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5",
        title: "Plano Empresarial",
        desc: "Planos coletivos empresariais com melhores coberturas e preços mais competitivos do que planos individuais. Benefício valorizado pelos colaboradores e com vantagens fiscais para a empresa.",
      },
      {
        icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
        title: "Acompanhamento no Reajuste",
        desc: "Todo ano, quando chegam os reajustes, avaliamos se ainda faz sentido manter o plano atual ou migrar para uma opção mais vantajosa. Você nunca mais paga caro por descuido.",
      },
    ],
    steps: [
      { num: "01", title: "Diagnóstico de Saúde Financeira", desc: "Analisamos o plano atual, histórico de uso, perfil de saúde da família e necessidades." },
      { num: "02", title: "Mapeamento de Opções", desc: "Pesquisamos o mercado e apresentamos as melhores alternativas com comparativo de cobertura e custo." },
      { num: "03", title: "Migração Segura", desc: "Gerenciamos todo o processo de troca para garantir continuidade de cobertura sem lacunas." },
      { num: "04", title: "Gestão Contínua", desc: "Acompanhamos os reajustes anuais e acionamos a seguradora sempre que necessário." },
    ],
    who: ["Quem paga caro por plano inadequado", "Famílias com perfil de saúde específico", "Empresas que querem oferecer benefício de qualidade", "Quem está migrando de plano coletivo", "Autônomos e profissionais liberais"],
    ctaText: "Revisar Meu Plano de Saúde",
  },
};
