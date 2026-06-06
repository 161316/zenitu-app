export interface Lesson {
  id: string;
  title: string;
  content: string[];
  xpReward: number;
}

export interface Module {
  id: string;
  journeyId: string;
  title: string;
  subtitle: string;
  emoji: string;
  color: string;
  bgGradient: string;
  lessons: Lesson[];
  order: number;
  tier: number;
  tierLabel: string;
  tierEmoji: string;
  tierColor: string;
  reviewConcepts: string[];
  bossQuote: string;
  nextModuleTeaser: string;
}

export const MODULES: Module[] = [
  {
    id: "negocio",
    journeyId: "fundamentos",
    title: "O que é um Negócio?",
    subtitle: "Entenda como as empresas nascem e funcionam",
    emoji: "🏪",
    color: "#6C3CE1",
    bgGradient: "from-violet-500 to-purple-700",
    order: 1,
    tier: 1,
    tierLabel: "Iniciante",
    tierEmoji: "🌱",
    tierColor: "#16a34a",
    reviewConcepts: [],
    bossQuote: "Se você pode sonhar, você pode realizar. — Walt Disney",
    nextModuleTeaser: "Próximo: descubra como o dinheiro realmente funciona nos negócios e aprenda a calcular se sua empresa está ganhando ou perdendo!",
    lessons: [
      {
        id: "o-que-e-empresa",
        title: "O que é uma empresa?",
        xpReward: 50,
        content: [
          "Imagine que você gosta muito de fazer brigadeiros. Você faz, vende para os amigos e ganha dinheiro com isso. Parabéns — você acabou de criar um negócio! Uma empresa é uma organização criada para oferecer algo de valor para as pessoas.",
          "Toda empresa tem uma missão simples: resolver um problema ou satisfazer uma necessidade. A padaria da esquina resolve o problema de quem está com fome de manhã. A Netflix resolve o problema de quem quer se entreter em casa. O mercadinho resolve o problema de quem precisa de ingredientes para o almoço.",
          "Em troca de resolver esse problema, a empresa recebe dinheiro — esse é o negócio. As pessoas pagam porque o que a empresa oferece tem valor para elas. Sem esse valor, ninguém pagaria e a empresa não existiria.",
          "No Brasil, existem mais de 20 milhões de empresas! Elas variam do carrinho de pipoca na esquina até gigantes como a Petrobras e o Itaú. Mas todas seguem a mesma lógica: criar valor para alguém e receber algo em troca."
        ]
      },
      {
        id: "produtos-vs-servicos",
        title: "Produtos vs. Serviços",
        xpReward: 50,
        content: [
          "As empresas podem vender duas coisas diferentes: produtos ou serviços. Entender essa diferença é fundamental para qualquer pessoa que queira empreender.",
          "Um produto é algo físico — você pode tocar, pegar, guardar. Uma camiseta, um celular, um pote de sorvete, uma bola de futebol. Quando você compra um produto, ele fica com você. A empresa fabrica o produto antes, estoca e vende para quem quiser.",
          "Um serviço é algo que alguém faz por você. O médico que te examina, o barbeiro que corta seu cabelo, o professor que te ensina, o encanador que conserta o cano. Você não leva nada físico, mas recebe algo valioso: uma habilidade aplicada ao seu problema.",
          "Muitas empresas hoje oferecem os dois! O McDonald's vende um produto (o hambúrguer) junto com um serviço (te atender, fazer o lanche na hora). A Apple vende o iPhone (produto) e o iCloud (serviço). Identificar o que sua empresa vai oferecer é o primeiro passo para um bom planejamento."
        ]
      },
      {
        id: "quem-sao-clientes",
        title: "Quem são os clientes?",
        xpReward: 50,
        content: [
          "Cliente é qualquer pessoa que compra o que sua empresa vende. Parece simples, mas entender profundamente quem é o seu cliente é um dos maiores segredos de sucesso nos negócios.",
          "Nem todo mundo é seu cliente. Se você vende fraldas, seus clientes são pais de bebês. Se você vende games, seus clientes são jogadores. Quanto mais você conhece seu cliente — o que ele gosta, o que ele precisa, quanto ele ganha, onde vive — melhor você consegue atendê-lo.",
          "Empresas de sucesso criam algo chamado persona do cliente: um perfil detalhado do cliente ideal. Por exemplo: Maria, 32 anos, mãe de dois filhos, mora em São Paulo, trabalha como professora, gosta de receitas saudáveis e tem pouco tempo para cozinhar. Com esse perfil, fica muito mais fácil criar produtos e serviços que ela vai adorar.",
          "Lembre-se: um cliente satisfeito volta a comprar e ainda indica para os amigos. Um cliente insatisfeito vai embora e fala mal da sua empresa. Por isso, entender e cuidar bem dos seus clientes é sempre a prioridade número um."
        ]
      },
      {
        id: "como-nasce-negocio",
        title: "Como nasce um negócio?",
        xpReward: 50,
        content: [
          "Todo grande negócio começa com uma ideia simples. A Amazon começou como uma livraria online no quarto de Jeff Bezos. O Instagram começou como um aplicativo para compartilhar fotos com filtros. O Nubank começou porque seu fundador ficou irritado com as tarifas abusivas dos bancos tradicionais.",
          "Um negócio nasce quando alguém percebe um problema que outras pessoas têm e pensa: eu consigo resolver isso! Essa percepção transforma uma simples observação em uma oportunidade de mercado. Problemas são, na verdade, oportunidades disfarçadas.",
          "Depois da ideia, vem o planejamento. O empreendedor precisa pensar: quem vai comprar? Quanto vai custar para fazer? Quanto vou cobrar? Como vou divulgar? Tudo isso forma o Plano de Negócios — o mapa que guia a empresa no começo.",
          "Por último, é hora de agir! Muitas pessoas ficam só na fase de planejar e nunca começam. Os empreendedores de sucesso começam pequeno, aprendem com os erros, melhoram o produto e vão crescendo aos poucos. Como dizia o fundador do LinkedIn: se você não está com vergonha da versão inicial do seu produto, você esperou tempo demais para lançar."
        ]
      },
      {
        id: "tipos-empresa",
        title: "Tipos de empresa: do MEI à multinacional",
        xpReward: 75,
        content: [
          "Quando você vê uma padaria de bairro e o Magazine Luiza com 1.400 lojas, ambas são empresas — mas com estruturas completamente diferentes. No Brasil, as empresas são classificadas por porte e formato jurídico. O MEI (Microempreendedor Individual) é o menor formato: uma pessoa que trabalha sozinha e pode faturar até R$81 mil por ano. É perfeito para o vendedor de salgados, o cabeleireiro autônomo, o técnico de informática independente.",
          "A ME (Microempresa) e a EPP (Empresa de Pequeno Porte) têm limites de faturamento maiores e geralmente já têm funcionários. A LTDA (Sociedade Limitada) é o formato mais comum para empresas médias — a maioria das farmácias, restaurantes e lojas do bairro são LTDAs. Já as S.A. (Sociedades Anônimas) são empresas maiores cujas ações podem ser negociadas na Bolsa de Valores: Petrobras, Vale e Itaú são S.A.s. E as multinacionais operam em vários países — a Ambev fabrica cerveja em mais de 50 países, e a Apple vende em 175.",
          "Por que isso importa? Porque a solução para um problema empresarial numa MEI é completamente diferente da solução para uma multinacional. Uma MEI com dificuldade de caixa precisa de um controle básico de gastos e talvez um empréstimo pequeno. Uma multinacional com o mesmo problema pode envolver reestruturação de dívida de bilhões, mudança de CEO ou venda de divisões inteiras. Sempre que você for analisar um negócio, a primeira pergunta é: com que tipo e porte de empresa estou lidando?",
          "Outro conceito essencial é o modelo de negócio: como a empresa ganha dinheiro. Uma padaria ganha vendendo pão. O Netflix ganha com assinaturas mensais. O Google ganha com anúncios publicitários (o produto, para o usuário, é gratuito — mas o anunciante paga). O iFood ganha uma comissão de cada pedido entre restaurante e cliente. Identificar o modelo de negócio de qualquer empresa te diz imediatamente onde está o dinheiro — e onde estão os riscos."
        ]
      },
      {
        id: "cadeia-de-valor",
        title: "A cadeia de valor: de onde vêm os produtos?",
        xpReward: 75,
        content: [
          "Quando você compra um pacote de café, não está comprando apenas grãos torrados. Está comprando o trabalho do agricultor que plantou no interior de Minas Gerais, do caminhoneiro que transportou os grãos, da torrefadora que processou e embalou, do distribuidor que levou à loja e do caixa que te atendeu. Toda essa cadeia — da matéria-prima ao consumidor final — é chamada de cadeia de valor. Entendê-la é essencial para identificar onde uma empresa cria valor e onde ele se perde.",
          "Michael Porter, professor de Harvard e o estrategista mais influente do mundo, criou o conceito de Cadeia de Valor. Atividades primárias: produção, marketing, vendas e pós-venda. Atividades de suporte: infraestrutura, RH, tecnologia e compras. Cada atividade agrega (ou não) valor ao produto final. Empresas eficientes identificam onde criam mais valor e fortalecem essas áreas — e terceirizam ou eliminam o que não agrega.",
          "A Apple é o exemplo perfeito. Ela projeta os chips (M-series), o sistema operacional (iOS) e o design internamente — onde está seu maior valor único. A fabricação ela terceiriza para a Foxconn, na China. Por isso um iPhone que custa US$200 para fabricar é vendido por US$1.200. O valor não está na fábrica — está no design, na marca e no ecossistema integrado. Essa análise de cadeia de valor é o que separa empresas mediocres de líderes absolutos de mercado.",
          "Para pequenas empresas brasileiras, a cadeia de valor também é crucial. Uma padaria que compra pão pronto tem margem menor do que a que assa o próprio. Uma marca de moda que produz localmente controla mais da cadeia do que a que importa tudo da China. O Habib's, rede brasileira de fast-food, controla desde a produção dos salgados até a entrega — o que permite preços baixos com lucratividade consistente. Quanto mais da cadeia você controla ou otimiza, maior tende a ser sua margem. Mas controlar mais também exige mais capital e gestão."
        ]
      },
      {
        id: "missao-negocio",
        title: "Missão Prática: analisando empresas reais",
        xpReward: 100,
        content: [
          "Chegou a hora de colocar tudo em prática! Vamos analisar duas empresas reais usando os conceitos deste módulo: a Dona Fátima, MEI que faz doces artesanais no bairro, e o McDonald's Brasil, com mais de 1.100 restaurantes e 50 mil funcionários. Ambas resolvem um problema parecido — alimentação — mas de formas radicalmente diferentes. Consultores de gestão fazem exatamente esse tipo de análise cobrando de R$5.000 a R$50.000 por dia.",
          "Dona Fátima: ela é produtora, vendedora e entregadora. Seus clientes são vizinhos e conhecidos. Seu produto é personalizado e artesanal. Seu modelo de negócio: compra ingredientes, faz doces, vende por encomenda e indicação. Fatura até R$6.000/mês. Sua cadeia de valor é curtíssima — ela controla quase tudo. Sua vantagem competitiva é a confiança da comunidade e a personalização. Seu maior risco é a dependência total da sua capacidade física de produção.",
          "McDonald's Brasil: opera como franquia (a corporação americana controla a marca e os processos; os franqueados no Brasil operam os restaurantes). Seus clientes são milhões de pessoas que buscam rapidez, padronização e conveniência. O produto é idêntico em qualquer restaurante — um Big Mac em Manaus é igual ao de São Paulo. Isso exige uma cadeia de valor gigantesca: fazendas fornecedoras de carne, frigoríficos, processadoras de batata, distribuidoras de embalagens, logística refrigerada, treinamento padronizado em escala. O McDonald's usa tecnologia (totens de autoatendimento, app com pedido antecipado) para escalar sem perder qualidade.",
          "O que aprendemos comparando as duas? Não existe empresa melhor ou pior — existe a empresa certa para cada propósito e contexto. A Dona Fátima não precisa do sistema de gestão do McDonald's. E o McDonald's não consegue a personalização da Dona Fátima. Como futuro gestor ou empreendedor, sua habilidade mais valiosa será identificar o contexto correto e aplicar as ferramentas certas. Cada vez que você analisar uma empresa assim — modelo de negócio, clientes, cadeia de valor, vantagem competitiva — você está pensando como um consultor de estratégia de alto nível."
        ]
      }
    ]
  },
  {
    id: "financas",
    journeyId: "fundamentos",
    title: "Dinheiro e Finanças",
    subtitle: "Aprenda a cuidar do dinheiro da sua empresa",
    emoji: "💰",
    color: "#D97706",
    bgGradient: "from-amber-400 to-orange-500",
    order: 2,
    tier: 2,
    tierLabel: "Aprendiz",
    tierEmoji: "📚",
    tierColor: "#2563eb",
    reviewConcepts: ["Produto", "Serviço", "Cliente"],
    bossQuote: "Receita é vaidade, lucro é sanidade, caixa é realidade. — Ditado Financeiro",
    nextModuleTeaser: "Próximo: aprenda a fazer o mundo conhecer e amar o que você vende — sem gastar uma fortuna!",
    lessons: [
      {
        id: "o-que-e-lucro",
        title: "O que é lucro?",
        xpReward: 50,
        content: [
          "Lucro é o que sobra depois que você paga todas as suas despesas. É a recompensa financeira pelo seu trabalho como empreendedor. Sem lucro, uma empresa não consegue sobreviver por muito tempo.",
          "Vamos imaginar: você vende limonadas a R$5 cada. Para fazer cada limonada, você gasta R$2 em limões, açúcar e gelo. Você vende 10 limonadas e recebe R$50. Mas gastou R$20 para fazê-las. Sobram R$30 — esse é o seu lucro!",
          "Existe uma diferença importante entre faturamento e lucro. Faturamento (ou receita) é tudo que entra — os R$50 da limonada. Lucro é o que sobra depois de pagar os custos — os R$30. Muitas pessoas confundem esses dois conceitos e acham que estão ganhando mais do que realmente estão.",
          "Um negócio lucrativo é aquele onde o preço de venda é maior do que o custo de produção. Por isso, controlar muito bem os gastos é tão importante quanto vender bastante. Às vezes, uma empresa vende muito mas gasta tanto que no final não sobra nada — isso é um problema sério!"
        ]
      },
      {
        id: "receitas-despesas",
        title: "Receitas e despesas",
        xpReward: 50,
        content: [
          "Receita é todo o dinheiro que entra na sua empresa. Cada vez que você vende algo, isso é uma receita. Despesa é todo o dinheiro que sai — os pagamentos que você precisa fazer para manter a empresa funcionando.",
          "As despesas se dividem em dois tipos. As despesas fixas são aquelas que você paga todo mês, independente de quanto vendeu: aluguel, internet, salário dos funcionários. Já as despesas variáveis mudam conforme sua produção: matéria-prima, embalagens, comissões de vendas.",
          "Para uma empresa ser saudável, as receitas precisam ser maiores do que as despesas. Quando isso acontece, a empresa tem lucro. Quando as despesas são maiores que as receitas, a empresa tem prejuízo — e isso não pode durar muito tempo.",
          "Por isso, todo empreendedor precisa anotar tudo: cada real que entra e cada real que sai. Isso se chama controle financeiro, e é como fazer um raio-x da saúde da sua empresa. Com esse controle, você sabe exatamente como está o negócio e pode tomar decisões melhores."
        ]
      },
      {
        id: "orcamento",
        title: "O que é orçamento?",
        xpReward: 50,
        content: [
          "Orçamento é um plano de quanto você pretende ganhar e gastar em um determinado período. É como prever o futuro do dinheiro! Toda empresa séria tem um orçamento mensal, trimestral e anual.",
          "Imagine que você vai organizar uma festa junina na escola para arrecadar dinheiro para uma viagem. Antes de começar, você senta e planeja: quanto vou gastar com decoração? Com os alimentos? Com as fantasias? Depois você estima: quantas pessoas devem comprar? Quanto vai render? Isso é um orçamento!",
          "Com o orçamento, você evita surpresas ruins. Se você planejou gastar R$500 e já gastou R$480, sabe que precisa segurar o restante. Se as vendas estão abaixo do esperado, você pode agir rapidamente para melhorar.",
          "Uma das técnicas mais usadas é o orçamento base zero: você começa do zero e justifica cada gasto. Isso evita que despesas desnecessárias se acumulem com o tempo. Grandes empresas como a 3G Capital ficaram famosas por usar essa técnica e se tornaram muito eficientes."
        ]
      },
      {
        id: "preco-custo",
        title: "Preço e custo",
        xpReward: 50,
        content: [
          "Custo é quanto você gasta para produzir ou comprar o que vai vender. Preço é quanto você cobra do cliente. A diferença entre eles é a sua margem de lucro. Saber definir o preço certo é uma das habilidades mais importantes de um empreendedor.",
          "Se você cobra muito barato, não sobra dinheiro para pagar as despesas. Se você cobra muito caro, os clientes vão para a concorrência. O segredo é encontrar o preço que seja justo para o cliente e lucrativo para você.",
          "Para calcular o preço mínimo, você precisa somar todos os custos: o custo do produto, a parte do aluguel, a embalagem, o frete, os impostos. Depois você adiciona a margem de lucro que quer ter. Esse é o preço mínimo para não ter prejuízo.",
          "Mas o preço não é só sobre custo — é também sobre valor percebido. Um café numa padaria simples custa R$3. O mesmo café num café chique pode custar R$18. O custo do café é quase o mesmo, mas o cliente paga mais pela experiência, pelo ambiente, pela marca. Isso se chama valor percebido, e é por isso que empresas como a Apple conseguem cobrar mais caro que a concorrência."
        ]
      },
      {
        id: "break-even",
        title: "Break-even: quando você começa a ganhar de verdade",
        xpReward: 75,
        content: [
          "Imagine que você abre uma lanchonete. Você paga R$3.000 de aluguel todo mês, independente de vender ou não. Você tem também os custos de cada lanche: pão, carne, condimentos — R$8 por unidade. Se você vende cada lanche por R$20, cada venda gera R$12 de margem de contribuição. Pergunta: quantos lanches você precisa vender por mês apenas para pagar o aluguel? Esse ponto exato — onde a empresa para de ter prejuízo — chama-se ponto de equilíbrio, ou break-even.",
          "O cálculo é direto: custos fixos ÷ margem de contribuição por unidade = break-even. No exemplo: R$3.000 ÷ R$12 = 250 lanches. Vender menos que 250 significa prejuízo. Vender exatamente 250 significa empate. Cada lanche acima de 250 é lucro puro — sem mais custos fixos a cobrir. Saber seu break-even é fundamental para qualquer negócio: do carrinho de suco ao shopping center. Sem ele, você trabalha sem saber se está ganhando ou perdendo.",
          "A Tesla levou mais de uma década para atingir o break-even. Durante anos, gastava mais do que ganhava — e isso era estratégia consciente: ela construía fábricas gigantescas (Gigafactories) e investia pesado em tecnologia. Os investidores acreditavam na visão de longo prazo. Em 2020, a Tesla teve finalmente seu primeiro ano inteiramente rentável, e hoje é a montadora mais valiosa do mundo. Esse exemplo mostra que o break-even não é só uma equação — é uma decisão estratégica.",
          "Antes de abrir qualquer negócio, calcule seu break-even. Quantos clientes, produtos ou serviços você precisa vender todo mês só para cobrir os custos fixos? Se esse número parecer impossível de atingir com os recursos disponíveis, é um sinal de alerta sério — repense o modelo. Se parece razoável, você tem uma base sólida para crescer. Empresas que ignoram o break-even frequentemente ficam meses no vermelho sem entender por quê — até que o caixa acaba definitivamente."
        ]
      },
      {
        id: "fluxo-de-caixa",
        title: "Fluxo de caixa: o pulso do negócio",
        xpReward: 75,
        content: [
          "Uma empresa pode ser lucrativa no papel e falir na prática. Como? Por falta de dinheiro em caixa. O fluxo de caixa é o movimento real de dinheiro que entra e sai da empresa a cada dia. Lucro é o que aparece nos relatórios contábeis. Caixa é o que você tem na conta bancária para pagar as contas hoje. São coisas radicalmente diferentes — e confundi-las é um erro fatal que destrói empresas que deveriam estar prosperando.",
          "Imagine que você vende móveis sob encomenda. Um cliente compra R$10.000 em mobília para pagar em 6 parcelas mensais. No papel, você fez uma venda de R$10.000. Mas nos primeiros meses, você recebe apenas R$1.666/mês. Se seus fornecedores exigem pagamento à vista pela madeira e materiais, você pode ficar sem dinheiro para comprar material — mesmo tendo uma venda confirmada. Isso é uma crise de fluxo de caixa: lucrativo no papel, quebrado na prática.",
          "A OGX, empresa de petróleo de Eike Batista, é um dos maiores exemplos brasileiros de colapso por fluxo de caixa. Em 2012, a empresa valia mais de R$70 bilhões em bolsa. Um ano depois, pediu recuperação judicial com dívidas de R$11 bilhões. O problema? Ela prometeu produção de petróleo que não se materializou, mas seus compromissos financeiros com bancos e fornecedores eram reais e imediatos. O caixa secou enquanto os ativos no papel ainda pareciam enormes.",
          "Para gerenciar o fluxo de caixa, toda empresa — do MEI ao conglomerado — precisa de uma ferramenta simples: a planilha de fluxo de caixa. Você registra dia a dia o que entrou e o que saiu. Com isso, você antecipa quando vai ter 'buracos' no caixa e pode agir antes: negociar prazo com fornecedores, antecipar cobranças de clientes, ou buscar capital de giro. Empresas saudáveis mantêm reserva de caixa equivalente a 2-3 meses de custos fixos. Gerenciar caixa é a habilidade financeira mais prática e urgente de qualquer negócio."
        ]
      },
      {
        id: "missao-financas",
        title: "Missão Prática: salve uma empresa em dificuldade financeira",
        xpReward: 100,
        content: [
          "Você acabou de ser contratado como consultor financeiro da Pizzaria da Vila. O proprietário está desesperado: fatura R$40.000 por mês mas sempre fica sem dinheiro antes do final do mês. Sua tarefa: descobrir o que está errado e propor soluções usando tudo que aprendeu nos Módulos 1 e 2. Consultores financeiros resolvem exatamente esse tipo de problema — e cobram a partir de R$10.000 por projeto.",
          "Diagnóstico estrutural (Módulo 1): a Pizzaria da Vila é uma LTDA com 4 funcionários. Seus clientes são famílias do bairro (B2C) e empresas que encomendam para eventos (B2B). Produto: pizzas artesanais. Serviço: entrega. Cadeia de valor: fornecedores de insumos → produção interna → motoboys. Modelo de negócio: venda direta por pedido. Até aqui, tudo faz sentido. O problema não está no modelo.",
          "Diagnóstico financeiro (Módulo 2): com R$40.000 de faturamento, as despesas fixas são aluguel R$5.000 + salários R$8.000 + sistema de delivery R$500 = R$13.500. Cada pizza custa R$12 para fazer e é vendida por R$45 — margem de R$33. Break-even: R$13.500 ÷ R$33 = 409 pizzas/mês. Se a pizzaria vende 889 pizzas/mês (R$40.000 ÷ R$45), deveria sobrar R$15.837 de lucro. Mas o caixa está zerado. Por quê?",
          "A descoberta: analisando o fluxo de caixa, você identifica o problema. Os clientes corporativos (25% da receita) têm prazo de pagamento de 30 dias, mas os fornecedores de insumos exigem pagamento em 15 dias. Isso cria um 'buraco' mensal de R$10.000 que o proprietário cobre com o caixa do movimento diário — e está acumulando dívida sem perceber. A solução: renegociar fornecedores para 30 dias, exigir 50% de entrada nas encomendas corporativas, e construir reserva de R$27.000 (2 meses de custo fixo). Aplicar essas três medidas transforma uma crise em saúde financeira."
        ]
      }
    ]
  },
  {
    id: "marketing",
    journeyId: "fundamentos",
    title: "Marketing e Vendas",
    subtitle: "Aprenda a divulgar e vender seu produto",
    emoji: "📣",
    color: "#DB2777",
    bgGradient: "from-pink-500 to-rose-600",
    order: 3,
    tier: 3,
    tierLabel: "Explorador",
    tierEmoji: "🔭",
    tierColor: "#9333ea",
    reviewConcepts: ["Receita", "Lucro", "Cliente Ideal"],
    bossQuote: "Marketing é contar histórias verdadeiras que ressoam com o seu público. — Seth Godin",
    nextModuleTeaser: "Próximo: descubra o segredo dos maiores líderes do mundo e como motivar pessoas a darem o seu melhor!",
    lessons: [
      {
        id: "o-que-e-marketing",
        title: "O que é marketing?",
        xpReward: 50,
        content: [
          "Marketing é o conjunto de estratégias que uma empresa usa para criar, comunicar e entregar valor aos clientes. Em palavras simples: é a arte de fazer as pessoas quererem o que você vende — e ainda se sentirem felizes pela compra!",
          "Marketing não é só propaganda. Envolve entender o cliente, criar o produto certo, definir o preço ideal, escolher onde vender e como comunicar. Por isso, os especialistas falam nos 4 Ps do marketing: Produto, Preço, Praça (onde vender) e Promoção (como comunicar).",
          "Um exemplo incrível de marketing é a Coca-Cola. O refrigerante em si é água, açúcar e gás — mas a Coca-Cola associou sua marca à alegria, à família, às festas. Eles vendem felicidade, não bebida. Isso é marketing de altíssimo nível.",
          "Hoje em dia, o marketing digital transformou tudo. Com as redes sociais, até um negócio pequeno pode alcançar milhares de pessoas sem gastar muito dinheiro. Um post bem feito no Instagram pode valer mais que um anúncio caro na TV. O segredo é conhecer seu público e falar a língua dele."
        ]
      },
      {
        id: "cliente-ideal",
        title: "Seu cliente ideal",
        xpReward: 50,
        content: [
          "Antes de divulgar seu produto, você precisa saber exatamente para quem está falando. Esse é o cliente ideal — aquele que mais precisa do que você oferece, que pode pagar pelo seu preço e que vai ficar tão satisfeito que vai recomendar para outras pessoas.",
          "Para descobrir seu cliente ideal, pense em perguntas como: qual é a idade dele? Onde mora? O que faz nas horas livres? Qual é o seu maior problema? O que ele lê, assiste, quais redes sociais usa? Quanto está disposto a gastar?",
          "Com essas respostas, você cria a persona — um personagem fictício que representa seu cliente ideal. Por exemplo: Lucas, 14 anos, gosta de games e tecnologia, passa horas no YouTube assistindo reviews de gadgets, sonha em ter o último celular e sempre pede dicas para os amigos. Se você vende acessórios para games, o Lucas é o seu cliente ideal!",
          "Com a persona definida, tudo fica mais fácil. Você sabe em qual rede social anunciar, que linguagem usar, que tipo de foto postar, qual influencer parceiro faz sentido. Sem persona, você fala com todo mundo e não convence ninguém."
        ]
      },
      {
        id: "comunicar-valor",
        title: "Como comunicar valor",
        xpReward: 50,
        content: [
          "Comunicar valor é a arte de fazer o cliente entender por que seu produto ou serviço vai melhorar a vida dele. Não é sobre listar características técnicas — é sobre mostrar os benefícios e a transformação que ele vai ter.",
          "Existe uma fórmula simples: eu ajudo [quem] a [fazer o quê] para [resultado final]. Por exemplo: eu ajudo mães de bebês a ter mais tempo livre com refeições saudáveis prontas em minutos. Isso é muito mais convincente do que dizer eu vendo marmitas congeladas.",
          "O storytelling — contar histórias — é uma das ferramentas mais poderosas do marketing. Histórias emocionam, conectam e ficam na memória. A Nike não faz comerciais mostrando as características técnicas do tênis. Ela conta histórias de pessoas superando limites. E você se emociona — e quer o tênis.",
          "Prova social também é fundamental: depoimentos de clientes satisfeitos, fotos de resultados, avaliações positivas. Quando vemos que outras pessoas já compraram e aprovaram, nos sentimos mais seguros para comprar também. Por isso, peça sempre para seus clientes deixarem uma avaliação!"
        ]
      },
      {
        id: "redes-sociais-negocios",
        title: "Redes sociais para negócios",
        xpReward: 50,
        content: [
          "As redes sociais transformaram completamente a forma como empresas se comunicam com os clientes. Hoje, qualquer pessoa com um celular pode criar um negócio e alcançar milhões de pessoas sem gastar quase nada.",
          "Cada rede social tem um perfil de usuário diferente. O Instagram é visual — ótimo para moda, gastronomia, beleza e lifestyle. O YouTube é para conteúdo mais longo e educativo. O TikTok alcança principalmente jovens com vídeos curtos e dinâmicos. O LinkedIn é para negócios B2B e networking profissional.",
          "Para ter sucesso nas redes sociais com seu negócio, você precisa de consistência: postar regularmente, responder comentários, criar conteúdo útil para seu público. O algoritmo favorece quem é constante. Uma empresa que some por semanas perde espaço rapidamente.",
          "O conteúdo que mais funciona não é propaganda direta — é conteúdo que educa, entretém ou inspira. Se você vende produtos de cabelo, poste dicas de como cuidar dos cabelos. Se vende comida saudável, poste receitas. Quando você ajuda as pessoas gratuitamente, elas confiam em você e ficam mais propensas a comprar."
        ]
      },
      {
        id: "funil-de-vendas",
        title: "Funil de vendas: da descoberta à compra",
        xpReward: 75,
        content: [
          "O funil de vendas mostra como um desconhecido se torna cliente. Começa largo no topo — muitas pessoas descobrem sua marca — e vai afunilando até poucos chegarem à compra. As etapas clássicas são: Consciência (a pessoa descobre que você existe), Interesse (quer saber mais), Consideração (compara com concorrentes), Decisão (escolhe comprar) e Fidelização (volta e indica). Entender em qual etapa cada cliente está é essencial para aplicar a estratégia certa na hora certa.",
          "Na prática real: o Magazine Luiza tem 40 milhões de usuários no app (topo do funil). Desses, talvez 2 milhões procuram um produto específico por dia (Interesse). Desses, 500 mil colocam no carrinho (Consideração). Desses, 300 mil finalizam a compra (Decisão — taxa de conversão de 0,75%). E a Magalu tem programas de pontos e notificações para trazer esses 300 mil compradores de volta (Fidelização). A arte do marketing está em ampliar o topo e melhorar a conversão em cada etapa.",
          "Para negócios digitais, cada etapa tem táticas específicas: no topo, você usa redes sociais, SEO e anúncios para ser descoberto. No meio, usa email marketing, webinars e conteúdo educativo. Na base, usa provas sociais (avaliações reais, cases de clientes), garantias sólidas e formas de pagamento facilitadas. Em negócios físicos, o processo é análogo: a vitrine chama atenção (topo), o vendedor engaja (meio), a oferta e o parcelamento fecham a venda (base).",
          "Um dos maiores erros dos empreendedores iniciantes é investir tudo no topo do funil (trazer visitantes) sem cuidar da conversão. De nada adianta 100.000 seguidores no Instagram se menos de 0,1% compra. Otimizar o funil — entender onde as pessoas desistem e por quê — frequentemente gera mais resultados do que simplesmente trazer mais gente. Esse trabalho se chama CRO (Conversion Rate Optimization) e é uma das habilidades mais valorizadas e bem pagas do marketing digital hoje."
        ]
      },
      {
        id: "precificacao-avancada",
        title: "Precificação avançada: o poder psicológico do preço",
        xpReward: 75,
        content: [
          "Você já reparou que a maioria dos preços termina em R$9,99 em vez de R$10,00? Não é acidente — é psicologia do preço em ação. O cérebro humano processa R$9,99 como 'algo próximo de R$9' em vez de 'quase R$10'. Esse fenômeno se chama precificação ímpar, e é usado por varejistas do mundo inteiro — do mercadinho local ao Amazon. O preço não é só matemática: é uma poderosa ferramenta de percepção e posicionamento de marca.",
          "Existem estratégias de precificação para diferentes objetivos. Preço de penetração: você entra no mercado barato para ganhar clientes rápido — foi o que o Uber fez com corridas subsidiadas para criar o hábito. Preço premium: você cobra mais que todos para sinalizar qualidade exclusiva — Apple e Nespresso usam isso. Preço freemium: você oferece algo de graça e cobra por recursos avançados — Spotify, Canva e Dropbox funcionam assim. Cada estratégia serve um propósito diferente de negócio.",
          "A precificação dinâmica é fascinante: o preço muda em tempo real conforme a demanda. Quando você abre o Uber numa sexta-feira à noite depois de um show, o preço pode estar 2x ou 3x maior — é o Surge Pricing. As passagens aéreas sobem com a proximidade da data e caem quando o voo está vazio. A Amazon muda preços de produtos até 2,5 milhões de vezes por dia! Com inteligência artificial, a precificação dinâmica está se tornando acessível até para pequenos negócios online.",
          "Como usar esses conceitos na prática? Primeiro: nunca precifique apenas com base no custo. Entenda o que o cliente valoriza e está disposto a pagar — o valor percebido. Segundo: pesquise a concorrência — seu preço envia um sinal de posicionamento. Terceiro: teste. Pequenas mudanças de preço (subir R$2 num produto) muitas vezes não afetam as vendas mas aumentam a margem significativamente. Quarto: lembre que preço é a alavanca mais poderosa para a lucratividade — estudos mostram que 1% de aumento no preço médio gera 10-15% a mais de lucro operacional."
        ]
      },
      {
        id: "missao-marketing",
        title: "Missão Prática: estratégia completa de marketing",
        xpReward: 100,
        content: [
          "Você foi contratado para criar a estratégia de marketing do VerdeFácil, um novo delivery de comida vegana em São Paulo. O fundador tem R$5.000 para o primeiro mês e precisa de 200 pedidos para ser viável. Use tudo que aprendeu nos Módulos 1, 2 e 3. Essa é exatamente a tarefa de um gerente de marketing ou growth hacker em uma startup real.",
          "Passo 1 — Persona e posicionamento (Módulo 3, Aula 2): o cliente ideal é a Clara, 28 anos, designer freelancer em Pinheiros, preocupada com saúde e sustentabilidade, usa Instagram e TikTok, gasta R$800/mês em alimentação. Ela quer praticidade sem abrir mão dos valores. Com essa persona definida, você sabe onde anunciar (Instagram/TikTok), que linguagem usar (jovem, visual, consciente) e o que destacar (ingredientes orgânicos, embalagem sustentável, carbono neutro).",
          "Passo 2 — Funil e orçamento (Módulo 3, Aula 5 + Módulo 2): com R$5.000, distribua: R$2.000 em anúncios no Instagram para awareness (topo do funil); R$1.000 para parcerias com micro-influencers veganos locais (meio do funil); R$1.000 para 100 kits de degustação gratuitos (base do funil — converter interesse em compra); R$500 para sistema de cashback no app (fidelização); R$500 de reserva. Break-even financeiro (Módulo 2): com margem de R$25/pedido e custos fixos de R$8.000/mês, são necessários 320 pedidos para empatar. 200 no mês 1 ainda é prejuízo — mas é a validação do modelo.",
          "Passo 3 — Preço e validação (Módulo 3, Aula 6): o VerdeFácil cobra R$35 pelo combo (concorrentes: R$28-R$42). Posição: preço médio-alto justificado por qualidade premium e embalagem sustentável — precificação por valor percebido. Para validar com custo mínimo, os 100 kits de degustação gratuitos têm um critério: quem avalia 5 estrelas recebe cupom de 20% na primeira compra real. Isso cria o primeiro funil com feedback genuíno. Resultado esperado no mês 1: 60% dos degustadores compram (60 pedidos via cupom) + 140 pedidos orgânicos dos anúncios = 200 pedidos. Esse é o DNA do marketing baseado em dados."
        ]
      }
    ]
  },
  {
    id: "lideranca",
    journeyId: "fundamentos",
    title: "Liderança e Equipe",
    subtitle: "Saiba como liderar pessoas e trabalhar em equipe",
    emoji: "👥",
    color: "#059669",
    bgGradient: "from-emerald-500 to-teal-600",
    order: 4,
    tier: 4,
    tierLabel: "Construtor",
    tierEmoji: "🏗️",
    tierColor: "#0f766e",
    reviewConcepts: ["Negócio", "Equipe", "Comunicação"],
    bossQuote: "A função de um líder é produzir mais líderes, não mais seguidores. — Ralph Nader",
    nextModuleTeaser: "Próximo: aprenda a criar estratégias que funcionam de verdade e definir metas que você realmente vai alcançar!",
    lessons: [
      {
        id: "o-que-e-lider",
        title: "O que é um líder?",
        xpReward: 50,
        content: [
          "Um líder é aquela pessoa que inspira outras a darem o seu melhor em direção a um objetivo comum. Não é quem manda — é quem orienta, motiva e serve ao grupo. A diferença entre um chefe e um líder é simples: o chefe diz vá, o líder diz vamos.",
          "Grandes líderes aparecem em toda a história. Mandela lutou pela liberdade de um povo inteiro. Steve Jobs revolucionou a tecnologia ao inspirar uma equipe a pensar diferente. Malala Yousafzai lidera o movimento pela educação das meninas no mundo todo. Todos eles tinham uma visão clara e sabiam como motivar as pessoas ao redor.",
          "Liderança não é um dom com que se nasce — é uma habilidade que se desenvolve. Você aprende a liderar praticando, errando, observando outros líderes, lendo sobre gestão, pedindo feedback. Todo grande líder foi um dia aprendiz.",
          "O líder de hoje precisa saber ouvir tanto quanto falar. Precisa ser empático — entender o ponto de vista dos outros. Precisa ser honesto, mesmo quando a verdade é difícil. E precisa colocar o bem do grupo acima do próprio ego. Liderança é servir, não ser servido."
        ]
      },
      {
        id: "tipos-lideranca",
        title: "Tipos de liderança",
        xpReward: 50,
        content: [
          "Existem vários estilos de liderança, e os melhores líderes sabem usar o estilo certo para cada situação. Vamos conhecer os principais.",
          "O líder autocrático toma todas as decisões sozinho e exige que a equipe siga suas ordens sem questionar. Funciona em situações de emergência, quando decisões rápidas são necessárias. Mas no dia a dia, esse estilo sufoca a criatividade da equipe.",
          "O líder democrático envolve a equipe nas decisões. Ouve opiniões, discute alternativas e decide em conjunto. Isso aumenta o engajamento e a satisfação do time, mas pode ser mais lento. Funciona muito bem quando a equipe é competente e o tempo não é crítico.",
          "O líder coach foca no desenvolvimento de cada pessoa da equipe. Em vez de dar respostas, faz perguntas que ajudam o funcionário a encontrar sua própria solução. É o estilo preferido das empresas modernas como Google e Netflix, pois cria times cada vez mais autônomos e inovadores."
        ]
      },
      {
        id: "comunicacao-eficaz",
        title: "Comunicação eficaz",
        xpReward: 50,
        content: [
          "Comunicação é a habilidade mais importante de um líder. Não adianta ter ótimas ideias se você não consegue transmiti-las claramente. Um líder que não se comunica bem perde oportunidades, gera confusão e desmotiva a equipe.",
          "Comunicar bem não é só falar muito — é ser claro, objetivo e saber ouvir. Estudos mostram que passamos 55% da comunicação em linguagem corporal (expressão facial, gestos), 38% no tom de voz e apenas 7% nas palavras. Ou seja, como você diz é mais importante do que o que você diz!",
          "Feedback é uma das formas mais importantes de comunicação dentro de uma empresa. Feedback é dar um retorno sobre o desempenho de alguém — pode ser positivo (quando alguém fez algo bem) ou construtivo (quando algo precisa melhorar). Um feedback bem dado ajuda a pessoa a crescer. Um mal dado a desmotiva.",
          "A escuta ativa — prestar atenção genuína ao que o outro está dizendo, sem pensar na resposta enquanto ele fala — é uma das habilidades mais raras e valiosas. Quando você realmente ouve alguém, essa pessoa se sente valorizada e confiante. E equipes onde as pessoas se sentem ouvidas são mais criativas e produtivas."
        ]
      },
      {
        id: "trabalho-equipe",
        title: "Trabalho em equipe",
        xpReward: 50,
        content: [
          "Trabalho em equipe é a capacidade de colaborar com outras pessoas em direção a um objetivo comum, aproveitando os talentos de cada um. Nenhuma grande empresa foi construída por uma única pessoa — sempre há uma equipe por trás.",
          "Uma equipe poderosa tem diversidade de habilidades. Precisa de pessoas criativas para inovar, pessoas analíticas para analisar dados, pessoas comunicativas para vender e negociar, pessoas organizadas para executar os planos. Quando cada um usa seu ponto forte, o resultado é muito melhor.",
          "Conflitos dentro da equipe são inevitáveis — e não são necessariamente ruins. Quando gerenciados de forma saudável, os conflitos geram novas ideias e soluções criativas. O problema é quando os conflitos viram disputas pessoais. Um bom líder sabe transformar desentendimentos em conversas produtivas.",
          "As empresas mais inovadoras do mundo, como o Spotify e a Pixar, investem muito em cultura de equipe. Eles criam ambientes onde as pessoas se sentem seguras para arriscar, errar e aprender. Quando a equipe confia uns nos outros, eles se arriscam mais — e é daí que vêm as grandes inovações."
        ]
      },
      {
        id: "gestao-conflitos",
        title: "Gestão de conflitos e decisão sob pressão",
        xpReward: 75,
        content: [
          "Conflitos dentro de equipes são inevitáveis — e não são necessariamente ruins. Quando duas pessoas com visões diferentes discordam, estão gerando o combustível para ideias melhores. O problema não é o conflito em si, mas como ele é gerenciado. Líderes que evitam conflitos criam culturas de silêncio onde os problemas crescem escondidos. Líderes que sabem navegar conflitos criam equipes mais inovadoras, resilientes e criativas.",
          "Uma das ferramentas mais poderosas para resolução de conflitos é a Análise de Causa Raiz — os '5 Porquês'. Quando algo dá errado, em vez de culpar alguém, o líder pergunta: 'Por que isso aconteceu?' E repete a pergunta 5 vezes até chegar à causa real. Exemplo: cliente reclamou do produto. Por quê? O controle de qualidade falhou. Por quê? Funcionário não seguiu o processo. Por quê? Não recebeu treinamento. Por quê? Não havia orçamento. Por quê? A empresa não priorizava qualidade. A causa real não era o funcionário — era uma decisão estratégica equivocada.",
          "Tomada de decisão sob pressão é outra habilidade crítica. Em 1982, frascos de Tylenol nos EUA foram adulterados com veneno, matando 7 pessoas. O CEO da Johnson & Johnson, James Burke, retirou 31 milhões de frascos das prateleiras — antes mesmo de saber a extensão do problema e sem nenhuma obrigação legal de fazê-lo. Custou US$100 milhões. Mas salvou a marca: a J&J recuperou 100% do market share em 1 ano porque as pessoas viram uma empresa que priorizou a segurança das pessoas acima do lucro imediato.",
          "Para você, como futuro líder: em momentos de crise, as pessoas olham para o líder. Sua calma, clareza e ética sob pressão definem se a equipe vai entrar em pânico ou encontrar soluções. Ferramentas úteis para decidir bem: a Matriz de Decisão (avalia cada opção por critérios ponderados), o Pré-mortem (imagine o fracasso antes de decidir e identifique riscos antecipadamente) e a Regra dos 10/10/10 (como me sentirei sobre esta decisão em 10 minutos? 10 meses? 10 anos?). Grandes líderes decidem com dados e agem com coragem."
        ]
      },
      {
        id: "cultura-organizacional",
        title: "Cultura organizacional: a alma invisível da empresa",
        xpReward: 75,
        content: [
          "Cultura organizacional é o conjunto de valores, comportamentos e práticas que definem como uma empresa realmente funciona — não o que está escrito nas paredes, mas o que acontece na prática. É a resposta à pergunta: 'Como as coisas funcionam aqui?' Uma cultura poderosa pode ser a maior vantagem competitiva de um negócio. Uma cultura tóxica pode destruir até a empresa mais promissora do mundo.",
          "A Netflix criou um documento chamado 'Culture Deck' que revolucionou o pensamento sobre gestão. Ele diz, entre outras coisas: 'Contratamos apenas adultos. Damos a eles liberdade — e cobramos responsabilidade.' A Netflix não tem limite de dias de férias. Não exige aprovação para pequenas despesas. Confia que os funcionários farão o que é certo. Em troca, exige performance excepcional e desliga rapidamente quem não está no nível. Resultado: uma das empresas mais inovadoras do mundo, criadora de séries que ninguém imaginava ser possível de uma empresa de tecnologia.",
          "O WeWork é o exemplo oposto. Seu fundador, Adam Neumann, criou uma cultura de crescimento a qualquer custo onde regras éticas eram vistas como obstáculos. A empresa valia US$47 bilhões em 2019. Um ano depois, quase faliu. O que aconteceu? A cultura que glorificava 'mover rápido e quebrar tudo' sem ética levou a decisões que destruíram a confiança de investidores, funcionários e clientes. Neumann foi afastado. A empresa perdeu 90% do valor em meses. A cultura não era um detalhe — era o núcleo do problema.",
          "Como construir cultura sólida mesmo sendo pequeno? Primeiro: defina 3-5 valores reais com comportamentos concretos — não slogans, mas o que você tolera e o que não tolera. Segundo: lidere pelo exemplo. Cultura não é o que você diz, é o que você faz. Se você fala 'inovação' mas pune quem erra, a mensagem real é 'não arrisque'. Terceiro: contrate para a cultura. Habilidades técnicas ensinam-se em semanas; valores são muito mais difíceis de mudar. As melhores empresas do Brasil e do mundo dizem unanimemente que contratar a pessoa errada para a cultura é o erro mais caro que cometem."
        ]
      },
      {
        id: "missao-lideranca",
        title: "Missão Prática: você é o novo líder de uma empresa em crise",
        xpReward: 100,
        content: [
          "Cenário: você foi nomeado CEO da TechBrasil, uma startup de software educacional com 80 funcionários que valia R$20 milhões há 1 ano. Hoje: perdeu 3 clientes grandes (R$500.000/mês de receita), 15 funcionários-chave pediram demissão alegando 'falta de direção', e o moral está no chão. Os investidores deram 6 meses para estabilizar o negócio. Aplique todos os conceitos dos módulos de Negócios, Finanças, Marketing e Liderança.",
          "Diagnóstico de cultura (Módulo 4, Aulas 3 e 6): as demissões voluntárias revelam crise de cultura. Primeiro passo: reuniões individuais (1:1) com todos os líderes de equipe e 10 funcionários aleatórios. Escuta ativa sem defesas — só ouça. O que emerge: o CEO anterior tomava todas as decisões sozinho (liderança autocrática), ignorava feedback e havia punido quem discordava publicamente. Resultado clássico: silos de informação, falta de engajamento, fuga dos melhores talentos. Diagnóstico: crise de liderança e cultura, não de produto.",
          "Plano financeiro de sobrevivência (integrando Módulos 1 e 2): com R$500.000/mês a menos, o fluxo de caixa aguenta 4 meses. Você precisa de receita nova OU corte de custos — com inteligência. Não demita por impulso: identifique primeiro os 20% de funcionários que geram 80% dos resultados (Princípio de Pareto) e proteja-os. Negocie com fornecedores para ganhar tempo. Apresente aos investidores um plano com metas SMART (que você aprenderá no Módulo 5): em 90 dias, assinar 2 novos contratos de R$100K/mês; em 6 meses, atingir break-even.",
          "Reconstruindo a liderança: estabeleça transparência radical — compartilhe os números reais com toda a equipe, não só com executivos. Mude o estilo para democrático/coach: peça ideias para resolver os problemas e implemente as melhores independente de quem as sugeriu. Celebre pequenas vitórias publicamente. Em 90 dias, se a equipe sentir que é ouvida e respeitada, a energia da empresa muda completamente. Estudos da Harvard Business Review mostram que líderes que atravessam crises com honestidade e cuidado retêm 3x mais talentos e recuperam o desempenho 2x mais rápido do que líderes que priorizam controle e punição."
        ]
      }
    ]
  },
  {
    id: "planejamento",
    journeyId: "fundamentos",
    title: "Planejamento Estratégico",
    subtitle: "Defina metas e trace o caminho para o sucesso",
    emoji: "🎯",
    color: "#2563EB",
    bgGradient: "from-blue-500 to-indigo-600",
    order: 5,
    tier: 5,
    tierLabel: "Estrategista",
    tierEmoji: "♟️",
    tierColor: "#1d4ed8",
    reviewConcepts: ["SWOT", "Metas", "Liderança"],
    bossQuote: "Uma meta sem plano é apenas um desejo. — Antoine de Saint-Exupéry",
    nextModuleTeaser: "Próximo: pense como os maiores inovadores do mundo e aprenda a criar soluções que ninguém pensou antes!",
    lessons: [
      {
        id: "o-que-e-estrategia",
        title: "O que é estratégia?",
        xpReward: 50,
        content: [
          "Estratégia é o plano geral de como uma empresa vai alcançar seus objetivos de longo prazo. É como um mapa do tesouro — você sabe onde quer chegar (o tesouro) e precisa planejar o melhor caminho para chegar lá.",
          "Sem estratégia, uma empresa age de forma reativa — vai apagando incêndios conforme eles aparecem, sem direção clara. Com estratégia, a empresa age de forma proativa — sabe para onde está indo e toma decisões que a aproximam do objetivo.",
          "A Apple é um exemplo clássico de empresa estratégica. Quando Steve Jobs voltou à Apple em 1997, a empresa estava quase falindo. Ele criou uma estratégia clara: focar em poucos produtos incríveis, com design excepcional, para um público específico. Essa estratégia transformou a Apple na empresa mais valiosa do mundo.",
          "Uma boa estratégia responde três perguntas: onde estamos agora? Onde queremos chegar? Como vamos chegar lá? As respostas formam a base de todo planejamento estratégico. Qualquer empresa, do carrinho de cachorro-quente ao McDonald's, precisa saber responder essas três perguntas."
        ]
      },
      {
        id: "metas-smart",
        title: "Metas SMART",
        xpReward: 50,
        content: [
          "Metas SMART são objetivos definidos de forma clara e eficiente. SMART é uma sigla em inglês: Specific (Específico), Measurable (Mensurável), Achievable (Atingível), Relevant (Relevante) e Time-bound (com prazo definido).",
          "Uma meta vaga como quero vender mais não é SMART. Não diz quanto mais, em quanto tempo, nem como saber se foi atingida. Uma meta SMART seria: quero aumentar minhas vendas em 30% até o dia 31 de dezembro, através de campanhas nas redes sociais e de um programa de fidelidade para clientes.",
          "O M de mensurável é crucial: se você não consegue medir, não consegue gerenciar. Um número concreto — 30 clientes novos, R$5.000 de faturamento, 1.000 seguidores — te permite acompanhar o progresso e saber quando chegou lá.",
          "O A de atingível é igualmente importante. Metas impossíveis desmotivam. Se você nunca vendeu mais que R$1.000 por mês, colocar como meta R$100.000 no próximo mês não vai funcionar. A meta precisa ser desafiadora o suficiente para motivar, mas realista o suficiente para ser possível."
        ]
      },
      {
        id: "swot",
        title: "Análise SWOT simplificada",
        xpReward: 50,
        content: [
          "A análise SWOT é uma ferramenta poderosa para entender a situação de qualquer negócio. SWOT é uma sigla inglesa: Strengths (Forças), Weaknesses (Fraquezas), Opportunities (Oportunidades) e Threats (Ameaças).",
          "Forças e fraquezas são internas — dizem respeito à própria empresa. Forças são o que você faz bem: atendimento excepcional, produto exclusivo, localização ótima. Fraquezas são pontos a melhorar: equipe pequena, falta de capital, produto pouco divulgado.",
          "Oportunidades e ameaças são externas — vêm do mercado e do ambiente. Oportunidades são tendências ou mudanças que favorecem seu negócio: uma nova lei que beneficia seu setor, um concorrente que fechou, uma nova tecnologia que reduz seus custos. Ameaças são o oposto: novos concorrentes, crise econômica, mudanças no comportamento do consumidor.",
          "A estratégia perfeita usa suas forças para aproveitar as oportunidades e reduzir as ameaças, enquanto trabalha para transformar suas fraquezas em pontos fortes. Uma startup de tecnologia pode usar sua agilidade (força) para ser a primeira a lançar um produto inovador (oportunidade) antes que uma grande empresa copie a ideia (ameaça)."
        ]
      },
      {
        id: "plano-acao",
        title: "Plano de ação",
        xpReward: 50,
        content: [
          "Um plano de ação transforma uma estratégia em passos concretos do dia a dia. Sem um plano de ação, a estratégia fica só no papel. O plano de ação responde: o quê, quem, quando e como.",
          "Para cada objetivo estratégico, você lista as ações necessárias, define quem é o responsável por cada ação, estipula um prazo e determina os recursos necessários. Isso cria clareza e responsabilidade — todo mundo sabe o que precisa fazer e quando.",
          "Uma ferramenta muito usada é o 5W2H: What (o quê?), Why (por quê?), Who (quem?), When (quando?), Where (onde?), How (como?) e How much (quanto custa?). Responder essas sete perguntas para cada ação garante que nada seja esquecido.",
          "O mais importante em um plano de ação é acompanhar o progresso regularmente. Uma reunião semanal rápida para verificar o que foi feito, o que está em andamento e o que está travado faz toda a diferença. Planos que não são acompanhados morrem na gaveta — e as metas ficam para o próximo ano."
        ]
      },
      {
        id: "vantagem-competitiva",
        title: "Vantagem competitiva: por que te escolheriam?",
        xpReward: 75,
        content: [
          "Por que você compraria um iPhone por R$8.000 se um celular chinês faz basicamente as mesmas ligações por R$700? Por que escolheria a Starbucks a R$25 o café quando a padaria ao lado cobra R$4? A resposta está na vantagem competitiva — o conjunto de razões pelas quais um cliente te escolhe no lugar do concorrente. Michael Porter, o estrategista mais influente do mundo, identificou três estratégias genéricas: liderança em custo, diferenciação e foco.",
          "Liderança em custo: você compete sendo o mais barato sem perder qualidade aceitável. A Casas Bahia dominou o varejo brasileiro por décadas sendo a opção mais acessível para a classe trabalhadora com prazo de pagamento inigualável. O Walmart domina os EUA da mesma forma. Para ser o mais barato de forma sustentável, você precisa de escala gigantesca, processos supereficientes e controle rígido de custos. Estratégia perigosa para pequenas empresas — é quase impossível vencer gigantes em custo.",
          "Diferenciação: você compete sendo único de uma forma que os clientes valorizam o suficiente para pagar mais. A Apple diferencia por design integrado e ecossistema fechado. A Cacau Show diferencia por experiência de loja premium e variedade de chocolates artesanais. Uma clínica pode se diferenciar por atendimento humanizado, sem fila, com especialistas reconhecidos. O segredo: a diferenciação precisa ser real (não só promessa) e percebida pelo cliente (ele reconhece e valoriza a diferença). Foco: em vez de atender todo mundo, você serve um segmento específico extremamente bem. A Ortobom foca em colchões terapêuticos. As Havaianas focaram em sandálias — mas globalizaram o produto e hoje vendem em 80 países.",
          "Para identificar sua vantagem competitiva, responda honestamente: no que somos genuinamente melhores do que todos os concorrentes? O que os clientes dizem sobre nós que não dizem dos outros? Onde nossa margem é consistentemente maior? Em que situações os clientes nos escolhem mesmo sendo mais caros? Essas respostas revelam onde mora sua vantagem real. Empresas que não conseguem responder a essas perguntas estão competindo sem estratégia — o que as torna vulneráveis a qualquer concorrente que chegue com um diferencial claro."
        ]
      },
      {
        id: "crescimento-escala",
        title: "Crescimento, escala e expansão: quando e como crescer",
        xpReward: 75,
        content: [
          "Crescer é o sonho de todo empreendedor. Mas crescer rápido sem estar preparado é uma das principais causas de falência. A história dos negócios está cheia de empresas que cresceram rápido demais e implodiram: a OGX prometeu crescimento bilionário e quebrou. O WeWork dobrava de tamanho a cada ano e quase faliu em 2019. O crescimento sustentável é aquele onde a empresa tem infraestrutura, capital humano e processos sólidos para suportar a nova escala — antes de crescer, não depois.",
          "Existem duas formas principais de crescer. Crescimento orgânico: a empresa cresce pelas próprias forças — mais clientes, novos produtos, novos mercados geográficos. É mais seguro mas mais lento. Crescimento inorgânico: você adquire ou se funde com outra empresa para crescer mais rápido — pode ser explosivo mas carrega riscos enormes de integração cultural e operacional. A 3G Capital (dos brasileiros Jorge Paulo Lemann, Marcel Telles e Beto Sicupira) é mestre nisso: compraram Brahma, fundiram com Antárctica criando a Ambev, depois compraram a Interbrew criando a InBev, depois a Anheuser-Busch — hoje a maior cervejaria do mundo.",
          "O franchising é um modelo híbrido brilhante: a empresa expande usando capital de terceiros (os franqueados), mantendo controle total da marca e dos processos. O Boticário tem mais de 4.000 lojas no Brasil — a maioria são franquias. O McDonald's tem 1.100 restaurantes no Brasil operados quase todos por franqueados. O franqueador cede parte do controle e da margem em troca de escala sem risco de capital próprio. Para o franqueado, é um modelo de negócio com sistema comprovado — mas com menos liberdade criativa.",
          "Como saber quando é hora de escalar? Quando há demanda maior do que você consegue atender (fila de espera é um sinal positivo), quando seus processos estão documentados e replicáveis por outras pessoas, quando você tem capital para financiar o crescimento sem asfixiar o caixa, e quando você tem líderes capazes de gerir mais sem precisar de você em cada decisão. Crescer antes dessas condições é como colocar um motor de Fórmula 1 num carro sem freios — você vai mais rápido, mas direto para o acidente."
        ]
      },
      {
        id: "missao-planejamento",
        title: "Missão Prática: plano estratégico de 3 anos",
        xpReward: 100,
        content: [
          "Você é o consultor de estratégia da FitNow, rede de academias com 5 unidades em Belo Horizonte faturando R$1,5M/mês. O dono quer crescer para 20 unidades em 3 anos. Sua missão: criar um plano estratégico completo integrando todos os módulos anteriores. Esse é o trabalho de uma consultoria de estratégia como McKinsey, BCG ou Bain — que cobram entre R$500.000 e R$5.000.000 por projeto dessa magnitude.",
          "Análise SWOT (Módulo 5, Aula 3): Forças — localização privilegiada, marca reconhecida, instrutores qualificados, NPS de 72. Fraquezas — sem app, processos manuais, dependência do proprietário, dívida de R$800K. Oportunidades — boom do wellness pós-pandemia, bairros sem academia de qualidade, demanda por serviços digitais. Ameaças — Smart Fit crescendo agressivamente com preço baixo, aumento de aluguel, apps de treino em casa. Conclusão: forças locais sólidas, mas vulnerável à digitalização e à concorrência de escala.",
          "Vantagem competitiva e estratégia (Módulo 5, Aula 5): a FitNow não pode competir com Smart Fit em custo — tem menos escala. Deve diferenciar: academia premium de bairro com instrutores personalizados e comunidade local forte. Financeiramente (Módulo 2): com R$1,5M de faturamento e custo fixo de R$1,1M, a margem atual é R$400K/mês. Para expandir, precisará de R$300K de investimento em tecnologia e marketing (Módulo 3), financiados por capital dos próprios franqueados — reduzindo risco de caixa.",
          "Metas SMART para 3 anos: Ano 1 — lançar app de treinos (transformação digital — Módulo 6), quitar R$400K de dívida, assinar 2 franqueados; Ano 2 — 12 unidades, NPS acima de 80, primeiro lucro consolidado do grupo; Ano 3 — 20 unidades, faturamento de R$4M/mês, avaliar venda para fundo de private equity. Plano de ação: responsáveis definidos, prazos semanais, reunião mensal de acompanhamento com investidores. Esse plano integrado — SWOT + vantagem competitiva + finanças + metas + ação — é o que transforma sonhos de crescimento em realidade executável."
        ]
      }
    ]
  },
  {
    id: "inovacao",
    journeyId: "fundamentos",
    title: "Inovação e Criatividade",
    subtitle: "Pense diferente e crie soluções novas",
    emoji: "💡",
    color: "#D97706",
    bgGradient: "from-yellow-400 to-amber-500",
    order: 6,
    tier: 6,
    tierLabel: "Inovador",
    tierEmoji: "💡",
    tierColor: "#d97706",
    reviewConcepts: ["Produto", "Startup", "MVP"],
    bossQuote: "Inovação é o que distingue um líder de um seguidor. — Steve Jobs",
    nextModuleTeaser: "Próximo: descubra como conquistar, fidelizar e encantar clientes — transformando compradores em verdadeiros fãs!",
    lessons: [
      {
        id: "o-que-e-inovacao",
        title: "O que é inovação?",
        xpReward: 50,
        content: [
          "Inovação é criar algo novo — ou melhorar algo existente — de uma forma que gere valor para as pessoas. Não precisa ser uma invenção revolucionária: às vezes, uma pequena melhoria em um processo já é uma grande inovação.",
          "Existem três tipos de inovação. A inovação incremental melhora o que já existe: o iPhone 15 é melhor que o iPhone 14. A inovação radical cria algo completamente novo: quando o primeiro iPhone saiu, não existia nada igual. A inovação disruptiva muda completamente um setor: o Airbnb disruptou a hotelaria, o Uber disruptou os táxis.",
          "Inovar é uma necessidade, não um luxo. Empresas que param de inovar ficam para trás. A Kodak inventou a câmera digital mas não quis apostar nela com medo de prejudicar seu negócio de filmes fotográficos — e foi à falência quando as câmeras digitais dominaram o mercado.",
          "A boa notícia é que inovar não requer genialidade. Requer observação atenta dos problemas ao redor, curiosidade para fazer perguntas, coragem para testar ideias novas e resiliência para aprender com os erros. Qualquer pessoa pode inovar — inclusive você!"
        ]
      },
      {
        id: "pensamento-criativo",
        title: "Pensamento criativo",
        xpReward: 50,
        content: [
          "Criatividade não é um talento que algumas pessoas têm e outras não. É uma habilidade que pode ser desenvolvida com prática. Existem técnicas comprovadas que ajudam qualquer pessoa a pensar de forma mais criativa.",
          "O brainstorming é a técnica mais conhecida: em grupo, cada um lança ideias livremente sem julgamento. Nenhuma ideia é estúpida nessa fase. Quanto mais ideias, melhor! Depois, o grupo avalia e seleciona as melhores. Grandes empresas como o Google usam brainstorming regularmente.",
          "O mapa mental organiza ideias de forma visual, conectando conceitos relacionados. Você começa com uma ideia central no meio e vai adicionando ramificações. Nosso cérebro pensa de forma associativa — não linear — e o mapa mental respeita isso.",
          "O método SCAMPER é outra ferramenta poderosa: Substituir, Combinar, Adaptar, Modificar, Propor outros usos, Eliminar, Reverter. Pegar um produto existente e aplicar essas sete perguntas frequentemente gera ideias surpreendentes. O Post-it foi criado quando um químico da 3M tentou adaptar uma cola forte que havia falhado em ser forte o suficiente."
        ]
      },
      {
        id: "prototipagem",
        title: "Prototipagem",
        xpReward: 50,
        content: [
          "Um protótipo é uma versão inicial e simplificada do seu produto ou serviço, criada para testar a ideia antes de investir muito tempo e dinheiro. É como fazer um rascunho antes de escrever o texto final.",
          "O conceito de MVP (Mínimo Produto Viável) é central no mundo das startups. Em vez de passar anos desenvolvendo o produto perfeito, você lança rapidamente uma versão básica com as funcionalidades essenciais e coleta feedback real dos usuários. Com esse feedback, você melhora o produto.",
          "O Dropbox foi lançado como um simples vídeo demonstrando como o produto funcionaria — nem o produto existia ainda! As 70 mil pessoas que se inscreveram para testar o produto provaram que havia demanda. Só então eles construíram o produto de verdade.",
          "A filosofia por trás da prototipagem é: falhar rápido e barato para aprender rápido. Cada protótipo te ensina algo. Cada teste revela o que os clientes realmente querem. É muito melhor descobrir que uma ideia não funciona após 2 semanas de trabalho do que após 2 anos de desenvolvimento."
        ]
      },
      {
        id: "startups-famosas",
        title: "Startups famosas",
        xpReward: 50,
        content: [
          "Uma startup é uma empresa jovem que busca um modelo de negócio escalável e inovador — ou seja, que pode crescer muito rapidamente sem aumentar os custos proporcionalmente. Muitas das maiores empresas do mundo começaram como startups.",
          "O Google foi criado em 1998 por dois estudantes de PhD em Stanford, Larry Page e Sergey Brin. Eles desenvolveram um algoritmo para organizar os resultados de busca por relevância — algo revolucionário na época. Começaram em uma garagem e hoje valem mais de US$1 trilhão.",
          "O Nubank, a fintech brasileira mais valiosa do mundo, nasceu em 2013 quando o colombiano David Vélez ficou frustrado ao abrir uma conta bancária no Brasil — o processo demorou meses e exigiu documentos absurdos. Ele resolveu criar um banco melhor. Hoje o Nubank tem mais de 85 milhões de clientes.",
          "A história do WhatsApp é incrível: Jan Koum cresceu na Ucrânia em extrema pobreza, imigrou para os EUA e estudou comendo com vales-alimentação. Trabalhou na Yahoo e quando foi demitido, criou o WhatsApp com um amigo. Em 2014, o Facebook comprou o WhatsApp por US$19 bilhões — a maior aquisição da história da tecnologia na época."
        ]
      },
      {
        id: "design-thinking",
        title: "Design Thinking: inovar com empatia",
        xpReward: 75,
        content: [
          "Design Thinking não é sobre design gráfico — é sobre uma forma de resolver problemas que começa pelo ser humano. O método foi popularizado pela IDEO, empresa americana, e tem 5 etapas: Empatia (entender profundamente o usuário), Definição (identificar o problema real), Ideação (gerar muitas soluções criativas), Prototipagem (criar versões rápidas das melhores ideias) e Teste (validar com usuários reais). É um processo circular — você volta às etapas anteriores sempre que aprende algo novo.",
          "Um exemplo clássico: em 2008, o Airbnb estava quase falindo. Ninguém queria hospedar desconhecidos em casa. Os fundadores foram pessoalmente a Nova York (Empatia) conversar com anfitriões. Descobriram (Definição): as fotos dos apartamentos eram horríveis — tiradas com celulares ruins. Solução (Ideação): e se eles mesmos fotografassem profissionalmente os apartamentos? (Prototipagem) Testaram em Nova York primeiro. Resultado: a receita nessa cidade dobrou em uma semana. Eles expandiram para todas as cidades. Hoje, o Airbnb vale US$60 bilhões — nasceu de uma observação simples.",
          "A Fundação Lemann, organização filantrópica brasileira de Jorge Paulo Lemann, usa Design Thinking para melhorar a educação pública. Em vez de criar soluções no escritório e 'jogar' nas escolas, eles passam semanas dentro de escolas entendendo a realidade de professores e alunos. Esse processo de empatia profunda gerou programas que realmente funcionam porque foram co-criados com quem vai usá-los — não impostos de cima para baixo. É inovação centrada no humano aplicada a um problema social urgente.",
          "Para usar Design Thinking em qualquer negócio: comece saindo da sua mesa. Vá falar com clientes, observe como usam seu produto, ouça reclamações sem se defender. Defina o problema real (não o que você acha que é — o que os dados e as pessoas mostram). Gere dezenas de ideias sem julgamento inicial. Prototipe a melhor em horas ou dias, não meses. Teste com clientes reais e aprenda antes de investir. Repetir esse ciclo — empatia, definição, ideação, prototipagem, teste — é o que transforma empresas estagnadas em máquinas de inovação contínua."
        ]
      },
      {
        id: "transformacao-digital",
        title: "Transformação digital: adapte ou deixe o mercado te superar",
        xpReward: 75,
        content: [
          "Transformação digital não é comprar computadores novos ou ter Instagram. É reprogramar completamente como uma empresa pensa, opera e entrega valor usando tecnologia. As empresas que entenderam isso cedo dominam seus setores. As que resistiram estão fechadas ou em declínio acelerado. A Kodak tinha a câmera digital em seu laboratório desde 1975. A Blockbuster tinha a oportunidade de comprar a Netflix por US$50 milhões em 2000. Ambas escolheram proteger o modelo atual em vez de se reinventar. Ambas estão extintas.",
          "O Magazine Luiza é o maior caso brasileiro de transformação digital bem-sucedida. Em 2011, a varejista lutava para sobreviver enquanto o e-commerce crescia. Frederico Trajano assumiu a área digital e criou a visão de uma 'startup de tecnologia que vende produtos físicos.' Investiram em app, marketplace para vendedores externos, logística digital e parcerias com influenciadores. Resultado: as ações da Magalu multiplicaram 200x entre 2012 e 2021, tornando-se a maior varejista digital do Brasil. A transformação digital não foi opcional — foi sobrevivência.",
          "A Inteligência Artificial está acelerando essa transformação de forma sem precedentes. Hoje, um chatbot de IA resolve 70% das dúvidas de atendimento ao cliente sem intervenção humana. Algoritmos de IA precificam passagens aéreas em milissegundos. Sistemas de IA detectam fraudes bancárias antes que um humano perceba. O ChatGPT foi lançado em novembro de 2022 e atingiu 100 milhões de usuários em 2 meses — mais rápido do que qualquer produto na história. Para empreendedores, a IA não é ficção científica — é uma ferramenta disponível agora, frequentemente gratuita ou de custo baixo.",
          "Como iniciar a transformação digital de qualquer negócio, do MEI à manufaturadora: Passo 1 — digitalizar dados (sair do papel/caderno para sistemas). Passo 2 — automatizar tarefas repetitivas (cobranças automáticas, confirmações por WhatsApp, controle de estoque digital). Passo 3 — usar dados para decidir (quais produtos vendem mais? em que horário? para qual cliente?). Passo 4 — criar presença digital consistente (site, redes, e-commerce). Passo 5 — inovar o modelo de negócio (assinaturas, marketplace, plataforma). Cada passo gera mais eficiência, dados e oportunidades de crescimento."
        ]
      },
      {
        id: "missao-inovacao",
        title: "Missão Prática: inove um negócio tradicional",
        xpReward: 100,
        content: [
          "A Papelaria São Jorge existe há 40 anos no centro de São Paulo. Vende cadernos, canetas, fotocópias e material escolar. Nos últimos 3 anos, o faturamento caiu 35%: os jovens compram online, usam tablets e precisam de menos papel. O proprietário, seu Antônio, 60 anos, quer salvar o negócio. Você é seu consultor de inovação. Use Design Thinking + transformação digital + todos os módulos anteriores.",
          "Etapa Empatia (Módulo 6, Aula 5): você passa uma semana na loja observando clientes sem intervir. Descoberta: 70% dos clientes são estudantes de cursos técnicos e universitários. Eles reclamam que imprimir trabalhos a R$0,50/página é caro e demorado — ficam 30 minutos esperando. Professores compram material de escritório mas reclamam que 'não tem nada diferente.' Mapeando a jornada (que você aprenderá no Módulo 7): cliente entra → faz fila longa → paga → sai sem experiência especial. Problema definido: a loja é um commodity sem diferencial — vende o que todos vendem, do mesmo jeito.",
          "Ideação e prototipagem (Módulo 6, Aulas 2 e 3): Ideia 1 — hub de trabalho para estudantes: transformar um canto da loja em coworking com impressoras self-service, WiFi rápido e café. Plano de negócio (Módulo 2): assinatura mensal de R$89 para impressões ilimitadas. Ideia 2 — marketplace de material de segunda mão: app onde estudantes da região vendem livros e cadernos usados, com a papelaria cobrando 15% de comissão. Ideia 3 — personalização: impressão de cadernos customizados, adesivos, canecas — o que os jovens adoram compartilhar nas redes (Módulo 3). Prototipe o coworking primeiro: libere 6 mesas, Wi-Fi e impressora por 30 dias sem cobrar, coletando feedback.",
          "Resultado do protótipo e aprendizados: 80 estudantes usaram o espaço no primeiro mês. 45 disseram que pagariam uma assinatura (R$89 × 45 = R$4.005/mês de nova receita). Feedback: amaram o espaço mas queriam mais tomadas e menos barulho da fotocopiadora. Iteração: instalar divisórias e mais réguas de tomadas. Isso é inovação iterativa — você não precisa da solução perfeita no início, precisa aprender rápido e melhorar. A Papelaria São Jorge pode não virar uma startup bilionária, mas pode sobreviver e prosperar sendo criativa dentro do seu contexto. Esse processo — observar, definir, idear, prototipar, testar — é o que separa negócios que evoluem dos que ficam para trás."
        ]
      }
    ]
  },
  {
    id: "clientes",
    journeyId: "fundamentos",
    title: "Clientes e Atendimento",
    subtitle: "Aprenda a conquistar e manter clientes",
    emoji: "🤝",
    color: "#7C3AED",
    bgGradient: "from-violet-500 to-purple-600",
    order: 7,
    tier: 7,
    tierLabel: "Especialista",
    tierEmoji: "🎯",
    tierColor: "#7c3aed",
    reviewConcepts: ["Marketing", "LTV", "CAC"],
    bossQuote: "Um cliente satisfeito é a melhor estratégia de negócios de todas. — Michael LeBoeuf",
    nextModuleTeaser: "Próximo: o grande final! Aprenda o que separa os empreendedores comuns dos extraordinários!",
    lessons: [
      {
        id: "quem-e-cliente",
        title: "Quem é o cliente?",
        xpReward: 50,
        content: [
          "O cliente é a razão de existir de qualquer empresa. Sem clientes, não há vendas. Sem vendas, não há receita. Sem receita, não há empresa. Por isso, entender profundamente quem é o cliente é a base de tudo.",
          "Existem dois tipos principais de clientes. O cliente B2C (Business to Consumer) é a pessoa física — um indivíduo comprando para uso próprio. Você é cliente B2C quando compra roupa, comida, ou um jogo. O cliente B2B (Business to Business) é uma empresa comprando de outra empresa — como um restaurante comprando ingredientes de um fornecedor.",
          "A jornada do cliente descreve todas as etapas que ele passa, desde que descobre sua empresa até depois da compra. Ela começa com a consciência (ele descobre que tem um problema), passa pela consideração (ele pesquisa soluções), chega à decisão (ele escolhe você), à compra e finalmente ao pós-compra.",
          "O lifetime value (LTV) é o valor total que um cliente gera para a empresa ao longo de toda a relação. Um cliente que compra R$100 por mês durante 3 anos vale R$3.600 para a empresa. Por isso, é muito mais lucrativo manter um cliente existente do que conquistar um novo — e manter um cliente custa até 7 vezes menos!"
        ]
      },
      {
        id: "necessidades-desejos",
        title: "Necessidades e desejos",
        xpReward: 50,
        content: [
          "Para criar produtos que as pessoas realmente compram, você precisa entender a diferença entre necessidade e desejo. Necessidade é algo essencial: comida, moradia, saúde. Desejo é algo que queremos mas não precisamos para sobreviver: um celular top de linha, uma viagem internacional, um tênis de marca.",
          "A maioria dos produtos de sucesso não atende a necessidades básicas — atende a desejos. Você não precisa de um iPhone para se comunicar — um celular simples funciona. Mas você deseja o iPhone pela experiência, pelo status, pelo design. As empresas mais lucrativas do mundo vendem desejos.",
          "Abraham Maslow criou uma teoria famosa chamada Pirâmide de Maslow, que organiza as necessidades humanas em ordem de prioridade. Na base estão as necessidades fisiológicas (comida, água, sono). Em seguida, segurança, relacionamentos sociais, autoestima e, no topo, a autorrealização. Produtos e serviços podem atender a qualquer nível dessa pirâmide.",
          "O segredo do marketing moderno é transformar desejos em necessidades percebidas. A Apple faz você sentir que precisa do novo iPhone. A Nike faz você sentir que precisa daquele tênis para correr melhor. Eles criam urgência e desejo onde antes havia indiferença — e é exatamente isso que você aprenderá a fazer."
        ]
      },
      {
        id: "satisfacao-cliente",
        title: "Satisfação do cliente",
        xpReward: 50,
        content: [
          "Satisfação do cliente é o grau em que sua empresa atendeu às expectativas dele. Clientes satisfeitos voltam a comprar, gastam mais e indicam para outras pessoas. Clientes insatisfeitos vão embora — e ainda contam para os outros.",
          "Estudos mostram que um cliente insatisfeito conta sua experiência ruim para 9 a 15 pessoas em média. Mas com as redes sociais, esse número pode chegar a milhões! Um único post viral de reclamação pode destruir a reputação de anos de uma empresa.",
          "O NPS (Net Promoter Score) é uma métrica simples e poderosa para medir a satisfação. Você pergunta ao cliente: em uma escala de 0 a 10, qual a probabilidade de você nos recomendar a um amigo? Quem responde 9-10 são Promotores (seus fãs). Quem responde 7-8 são Neutros. Quem responde 0-6 são Detratores.",
          "Para aumentar a satisfação, algumas estratégias são comprovadamente eficazes: superar as expectativas (entregar mais do que prometeu), resolver problemas rapidamente, personalizar o atendimento (chamar pelo nome, lembrar preferências), e criar experiências memoráveis. A Zappos, empresa americana de calçados, se tornou famosa por um atendimento ao cliente tão incrível que os clientes compravam apenas para ter a experiência de serem atendidos."
        ]
      },
      {
        id: "feedback",
        title: "O poder do feedback",
        xpReward: 50,
        content: [
          "Feedback é a informação que o cliente te dá sobre a experiência dele com seu produto ou serviço. É um presente precioso — ele te diz exatamente o que está funcionando e o que precisa melhorar, sem você ter que adivinhar.",
          "Existem várias formas de coletar feedback: pesquisas de satisfação, avaliações no Google/aplicativo, caixa de sugestões, conversas diretas com clientes, análise das reclamações no SAC. Cada forma tem suas vantagens. O importante é ter um sistema para coletar, analisar e agir com base no feedback recebido.",
          "O feedback negativo é o mais valioso — mesmo sendo difícil de ouvir. Um cliente que reclama está te dando uma chance de melhorar. Um cliente que simplesmente vai embora sem dizer nada não te dá essa chance. Por isso, agradeça sempre por críticas e trate cada reclamação como uma oportunidade de aprendizado.",
          "As empresas mais inovadoras do mundo, como Amazon e Apple, coletam feedback constantemente e usam essas informações para melhorar seus produtos. O Jeff Bezos sempre deixou uma cadeira vazia nas reuniões de diretoria como símbolo do cliente — para lembrar que todas as decisões devem ser pensadas da perspectiva de quem compra."
        ]
      },
      {
        id: "experiencia-cliente",
        title: "Experiência do cliente (CX): além do atendimento",
        xpReward: 75,
        content: [
          "Atendimento ao cliente é o que acontece quando um cliente tem um problema e você ajuda. Experiência do cliente (CX) é tudo — desde o momento em que ele descobre sua empresa até muito depois da compra. Cada ponto de contato entre o cliente e sua marca forma uma impressão: a velocidade do site, a facilidade de estacionar, o cheiro do ambiente, a simplicidade do checkout, a embalagem que chegou em casa, o email de pós-venda. Empresas que gerenciam cada um desses pontos criam experiências memoráveis que geram lealdade e boca a boca espontâneo.",
          "O psicólogo Daniel Kahneman descobriu a Regra do Pico-Final: as pessoas julgam uma experiência principalmente por dois momentos — o pico emocional (o momento mais intenso, positivo ou negativo) e o final (como terminou). A Disney entende isso profundamente: cada parque tem momentos de pico planejados (o show de fogos de artifício, o encontro surpresa com personagens, a montanha-russa mais emocionante), e a saída é projetada para ser alegre — com lojas de souvenir, fotos impressas na hora e uma última interação especial com os funcionários.",
          "A Zappos, empresa americana de calçados comprada pela Amazon por US$1,2 bilhão, construiu seu negócio sobre CX excepcional. Um representante conversou com uma cliente por 10 horas ao telefone — e isso foi celebrado internamente, não punido. A Zappos devolve dinheiro sem perguntas por até um ano, entrega de graça mesmo sem mínimo de compra e ainda surpreende clientes fiéis com upgrades de frete. Resultado: 75% das vendas vêm de clientes que retornam. Eles provaram matematicamente que investir em CX é o melhor marketing possível.",
          "Para qualquer empresa, o caminho começa pelo mapeamento da jornada do cliente: liste todos os pontos de contato, avalie a emoção do cliente em cada etapa e identifique os que causam frustração. Depois, priorize as melhorias pelos pontos de maior impacto. Uma farmácia que reduz o tempo de fila de 15 para 3 minutos transforma completamente a experiência. Um e-commerce que confirma o pedido em 30 segundos por WhatsApp cria confiança imediata. Uma clínica que manda lembrete personalizado dois dias antes da consulta demonstra cuidado. Pequenas melhorias sistêmicas somadas criam uma CX que os clientes descrevem como 'mágica.'"
        ]
      },
      {
        id: "fidelizacao",
        title: "Fidelização: transformando clientes em fãs",
        xpReward: 75,
        content: [
          "Conquistar um novo cliente custa, em média, 5 a 7 vezes mais do que manter um cliente existente. Clientes fiéis compram mais, com mais frequência, indicam outros sem você precisar pedir, e dão feedback honesto quando algo não está certo. Por isso, as empresas mais lucrativas do mundo investem pesado em fidelização — não como custo, mas como o investimento com maior retorno que podem fazer. O conceito que mensura isso é o LTV (Lifetime Value): quanto um cliente gasta ao longo de todo o relacionamento com a empresa.",
          "O Starbucks Rewards é um dos programas de fidelidade mais bem-sucedidos do mundo: 26 milhões de membros ativos nos EUA que gastam em média 3x mais do que clientes não-membros. O segredo não é só o desconto — é a gamificação (pontos, estrelas, níveis, desafios sazonais), a personalização (o app sabe o que você bebe e sugere variações) e o senso de pertencimento a um clube especial. O app do Starbucks processa 25% de todos os pedidos nos EUA — uma fonte inesgotável de dados que alimenta personalização cada vez mais precisa.",
          "A Harley-Davidson criou um dos casos mais radicais de comunidade de marca: o HOG (Harley Owners Group), com mais de 1 milhão de membros que se reúnem, fazem viagens juntas e defendem a marca como uma religião — muitos têm tatuagens da Harley. Eles não compram uma moto — compram uma identidade, um estilo de vida, uma família. Esse nível de fidelidade é impossível de comprar com publicidade. Nasce de anos de construção de comunidade genuína. Resultado: clientes da Harley pagam 30-50% mais do que pagariam por uma moto concorrente equivalente.",
          "Para construir fidelização desde pequeno: primeiro, identifique seus 20% de clientes que geram 80% da receita (Princípio de Pareto) e trate-os especialmente com atenção personalizada. Segundo, crie rituais de reconhecimento — lembrar aniversários, nome de clientes frequentes, preferências específicas. Terceiro, construa comunidade em torno do produto (grupo no WhatsApp, evento anual, clube de assinantes exclusivos). Quarto, peça feedback regularmente e aja sobre ele — clientes que veem suas sugestões implementadas são os mais fiéis de todos. Fidelizar não é um programa — é uma cultura de valorização genuína do cliente."
        ]
      },
      {
        id: "missao-clientes",
        title: "Missão Prática: redesenhe a jornada completa do cliente",
        xpReward: 100,
        content: [
          "A Clínica BemEstar é uma rede de fisioterapia com 3 unidades em Curitiba e NPS de 42 — abaixo da média do setor (65+). A reclamação mais frequente: 'O atendimento é bom mas tudo ao redor é difícil.' O proprietário quer NPS acima de 70 em 6 meses. Sua missão: mapear e redesenhar a jornada completa do cliente aplicando CX + fidelização + conceitos de todos os módulos anteriores.",
          "Mapeamento da jornada atual: Descoberta — paciente pesquisa no Google. Problema: site desatualizado sem fotos dos fisioterapeutas, sem depoimentos, sem informações de preço. Agendamento — liga para marcar. Problema: telefone ocupa por 20 min, sem opção online. Chegada — espera 15 minutos. Problema: cadeiras desconfortáveis, TV com noticiário negativo. Atendimento — excelente (o pico positivo que salva o NPS). Saída — paga e vai embora. Problema: nenhum follow-up, nenhuma tentativa de retorno planejado. Resultado: 30% dos pacientes não voltam mesmo tendo tido boa sessão, por falta de contato.",
          "Redesenho aplicando Design Thinking (Módulo 6) e Marketing (Módulo 3): Descoberta — novo site com fotos e vídeos dos fisioterapeutas, depoimentos reais em vídeo, artigos sobre saúde que aparecem no Google. Agendamento — WhatsApp Business para agendar em qualquer horário, confirmação automática 24h antes. Chegada — música relaxante, chá disponível, tablet com exercícios para fazer em casa enquanto espera. Saída — mensagem de WhatsApp em 48h perguntando como o paciente está + sugestão de próxima sessão com desconto de retorno.",
          "Fidelização (Módulo 7, Aula 6): criar 'Clube BemEstar' — 10 sessões pagas ganham 1 grátis. Grupo no WhatsApp com dicas diárias de exercícios e postura. Workshop mensal gratuito aberto a pacientes e indicados: 'Como manter coluna saudável em home office.' Financeiramente (Módulo 2): o programa de fidelidade tem custo de R$3.000/mês mas o LTV dos membros é 4x maior — ROI altamente positivo. Em 3 meses, NPS subiu para 67. Em 6 meses, 75 — acima da meta. Indicações espontâneas cresceram 40% — o melhor marketing, e praticamente de graça. Esse é o poder de redesenhar a jornada com empatia, dados e cuidado genuíno."
        ]
      }
    ]
  },
  {
    id: "empreendedorismo",
    journeyId: "fundamentos",
    title: "Empreendedorismo",
    subtitle: "Transforme suas ideias em negócios reais",
    emoji: "🚀",
    color: "#DC2626",
    bgGradient: "from-red-500 to-rose-600",
    order: 8,
    tier: 8,
    tierLabel: "Master",
    tierEmoji: "🚀",
    tierColor: "#dc2626",
    reviewConcepts: ["Todos os módulos anteriores"],
    bossQuote: "O único lugar onde o sucesso vem antes do trabalho é no dicionário. — Vidal Sassoon",
    nextModuleTeaser: "Você concluiu todos os módulos! Você é um verdadeiro Gestão Master! 🏆",
    lessons: [
      {
        id: "o-que-e-empreender",
        title: "O que é empreender?",
        xpReward: 50,
        content: [
          "Empreender é identificar uma oportunidade e criar algo novo para aproveitá-la, assumindo riscos em troca de recompensas. É a coragem de transformar uma ideia em realidade, mesmo sem ter certeza do resultado.",
          "Empreender não se limita a abrir empresas. Você pode empreender dentro de uma grande empresa (isso se chama intraempreendedorismo), numa organização social, num projeto escolar, até na sua própria vida. O espírito empreendedor é uma forma de pensar — curiosa, criativa, resiliente, orientada à ação.",
          "O empreendedor tem um perfil específico: aceita riscos calculados, é persistente diante das dificuldades, é criativo na resolução de problemas, tem visão de longo prazo e sabe se adaptar às mudanças. Mas nenhuma dessas características é inata — todas podem ser desenvolvidas.",
          "O Brasil tem uma das maiores taxas de empreendedorismo do mundo. Somos o país do jeitinho — criamos soluções improvisadas, adaptamos produtos ao mercado local, reinventamos negócios em tempos de crise. Essa criatividade empreendedora é um dos maiores ativos do nosso país."
        ]
      },
      {
        id: "sua-ideia-negocio",
        title: "Sua ideia de negócio",
        xpReward: 50,
        content: [
          "Toda grande empresa começa com uma ideia. E toda grande ideia começa com uma observação: um problema que precisa de solução. Para encontrar sua ideia de negócio, observe o mundo ao seu redor e pergunte: o que eu poderia melhorar? O que me irrita e que eu poderia resolver? Que necessidade não está sendo atendida?",
          "Existem três fontes principais de ideias de negócio. A primeira são seus próprios problemas — as melhores ideias frequentemente surgem quando o empreendedor resolve um problema que ele mesmo tinha. A segunda é observar outros mercados — adaptar um modelo de negócio bem-sucedido no exterior para o Brasil. A terceira é identificar tendências — setores que estão crescendo e onde há espaço para novos entrantes.",
          "Antes de investir tempo e dinheiro, valide sua ideia. Validar quer dizer: teste se as pessoas realmente pagariam pelo que você quer oferecer. Faça uma pesquisa simples com potenciais clientes. Ofereça uma versão simplificada e veja se as pessoas compram. Esse processo salva empreendedores de construir produtos que ninguém quer.",
          "Lembre-se: a ideia perfeita não existe. O que existe é a execução perfeita de uma ideia boa o suficiente. Muitos empreendedores ficam esperando a ideia genial e nunca começam. Comece com o que você tem, aprenda e melhore ao longo do caminho. Feito é melhor que perfeito!"
        ]
      },
      {
        id: "erros-aprendizados",
        title: "Erros e aprendizados",
        xpReward: 50,
        content: [
          "Errar faz parte da jornada empreendedora. Não existe empreendedor de sucesso que não tenha cometido erros — e muitos. A diferença entre os que triunfam e os que desistem não é o número de erros, mas a capacidade de aprender com eles e seguir em frente.",
          "Henry Ford faliu duas empresas antes de fundar a Ford Motor Company. Walt Disney foi demitido de um jornal porque faltava criatividade e faliu com seu primeiro estúdio de animação. Steve Jobs foi demitido da própria Apple. Milton Hershey faliu três vezes antes de criar a marca de chocolate mais famosa do mundo.",
          "O conceito de pivotamento veio do mundo das startups: quando uma ideia não está funcionando, você não desiste — você muda a direção mantendo o que aprendeu. O Instagram começou como um aplicativo de check-in chamado Burbn. O Twitter surgiu de uma empresa de podcasts que estava falhando. O YouTube nasceu como um site de namoro por vídeo.",
          "A mentalidade de crescimento (growth mindset) é a crença de que habilidades podem ser desenvolvidas através do esforço e da aprendizagem. Em vez de eu não consigo, pense eu ainda não consigo. Em vez de eu falhei, pense eu aprendi o que não funciona. Com essa mentalidade, cada erro se torna um degrau rumo ao sucesso."
        ]
      },
      {
        id: "historias-inspiradoras",
        title: "Histórias que inspiram",
        xpReward: 50,
        content: [
          "Luiza Trajano começou a trabalhar aos 12 anos no Magazine Luiza, empresa fundada por sua tia em Franca, SP. Com dedicação e visão estratégica, ela assumiu o grupo e transformou o Magazine Luiza numa das maiores varejistas do Brasil, com mais de 1.400 lojas e liderança no e-commerce nacional.",
          "Flávio Augusto da Silva, o criador do Wise Up, cresceu numa família humilde em São Paulo e foi trabalhar muito cedo. Com 22 anos, abriu sua primeira escola de inglês com capital mínimo. Vendeu o Wise Up por R$700 milhões em 2013 — um exemplo incrível de como uma ideia simples pode se tornar um grande negócio.",
          "Bernardinho, o técnico de vôlei mais vitorioso do Brasil, é um exemplo de liderança empreendedora. Ele transformou uma equipe mediana numa potência mundial através de disciplina, cultura de excelência e um sistema de treinamento inovador. Seus princípios de gestão de equipe são estudados por líderes empresariais no mundo inteiro.",
          "A mensagem de todas essas histórias é a mesma: o sucesso não chega por acaso. É o resultado de trabalho duro, aprendizado constante, resiliência diante das dificuldades e, principalmente, coragem para começar. Você também tem essa capacidade. Que história você vai escrever?"
        ]
      },
      {
        id: "fusoes-aquisicoes",
        title: "Fusões, aquisições e o mundo corporativo",
        xpReward: 75,
        content: [
          "M&A significa Mergers and Acquisitions — Fusões e Aquisições. É quando duas empresas se unem (fusão) ou uma compra a outra (aquisição). É um dos movimentos mais poderosos e arriscados do mundo dos negócios. Em 2023, mais de US$3 trilhões em operações de M&A aconteceram globalmente. Para quem quer trabalhar em grandes empresas, investir em negócios ou ter uma empresa que possa ser adquirida, entender M&A é conhecimento de elite — mas acessível a quem começa a aprender cedo.",
          "Por que empresas fazem M&A? Diversas razões estratégicas: eliminar um concorrente perigoso (o Facebook comprou o Instagram por US$1 bilhão em 2012 para não ter um rival de fotos crescendo rapidamente); acessar tecnologia ou talento (a Microsoft comprou o LinkedIn por US$26 bilhões para entrar no mercado de RH profissional e dados de carreira); ganhar escala geográfica rapidamente (o Mercado Livre comprou startups de logística em vários países para acelerar suas entregas). Crescer por M&A pode ser 10x mais rápido do que crescimento orgânico.",
          "O Brasil tem histórias icônicas de M&A. A mais transformadora: em 1999, a Brahma (de Jorge Paulo Lemann e sócios) adquiriu sua rival histórica Antárctica após décadas de guerra de mercado, formando a Ambev. Em 2004, a Ambev se fundiu com a belga Interbrew. Em 2008, a InBev adquiriu a americana Anheuser-Busch (dona do Budweiser) por US$52 bilhões. O que começou como uma cervejaria paulista se tornou a AB InBev, a maior empresa de bebidas do mundo, presente em 50+ países. Uma visão brasileira que dominou o mundo.",
          "Atenção: cerca de 70% das fusões não geram o valor prometido, segundo estudos de Harvard. O principal motivo não é financeiro — é cultural. Quando duas empresas com formas de trabalhar muito diferentes se unem, as pessoas resistem à mudança. Sistemas entram em conflito. Culturas colidem. O sucesso de uma M&A não está no contrato assinado — está na integração cultural e operacional nos meses e anos seguintes. Empresas como a 3G Capital que gerenciam isso de forma sistemática e rigorosa constroem impérios. As que ignoram a integração desperdiçam bilhões e destroem valor."
        ]
      },
      {
        id: "competindo-globalmente",
        title: "Competindo globalmente: de São Paulo ao mundo",
        xpReward: 75,
        content: [
          "O Brasil é a 10ª maior economia do mundo, com mais de 210 milhões de pessoas e um PIB de aproximadamente R$10 trilhões. Mas o mercado global tem 8 bilhões de consumidores. Empresas brasileiras que aprenderam a competir globalmente provaram que o Brasil produz empreendedores e executivos de classe mundial. Entender como negócios brasileiros foram do local ao global é uma das lições mais poderosas para qualquer pessoa que quer fazer história nos negócios.",
          "A Natura começou como pequena empresa de cosméticos em 1969, vendendo porta a porta em São Paulo com um conceito de beleza natural e relações humanas. Hoje é uma das maiores empresas de beleza do mundo, com a Aesop (australiana) e a The Body Shop (britânica) em seu portfólio — uma multinacional brasileira com presença em 73 países. As Havaianas eram sandálias de borracha para trabalhadores nos anos 60. Hoje são vendidas em 80 países como ícone global de lifestyle brasileiro — a R$300 no exterior. O WEG começou fabricando motores elétricos em Jaraguá do Sul-SC e hoje é referência mundial em equipamentos industriais e energia.",
          "Competir globalmente exige entender diferenças culturais profundas. A Chevrolet lançou o carro 'Nova' no México sem perceber que em espanhol 'no va' significa 'não anda.' A Pepsi usou um slogan nos anos 60 que em mandarim soava como 'Pepsi ressuscita seus ancestrais mortos.' Essas falhas custaram milhões. Adaptar produtos e comunicações para culturas locais (localização) versus manter identidade global padronizada (globalização) é um dos maiores desafios estratégicos de qualquer empresa internacional. A solução híbrida — 'glocal' — mantém a essência da marca mas adapta a execução para cada mercado.",
          "Para você, futuro empreendedor ou executivo global: as habilidades essenciais são fluência em inglês (língua dos negócios globais), compreensão de diferentes culturas e formas de negociar, capacidade de trabalhar em times remotos e multiculturais, e visão sistêmica de como o mundo está conectado. O Brasil tem talento, criatividade, biodiversidade, mercado consumidor enorme e empreendedores brilhantes. O que a história prova é que brasileiros com visão global, educação sólida e coragem de sair da zona de conforto podem construir impérios. Você tem todas essas condições — a pergunta é o que fará com elas."
        ]
      },
      {
        id: "missao-final",
        title: "Missão Final: você como empreendedor do futuro",
        xpReward: 100,
        content: [
          "Chegamos ao final da sua jornada no Empreza. Você passou por 8 módulos, 56 aulas e aprendeu o que executivos de grandes empresas levam anos para dominar: modelos de negócio, finanças, marketing, liderança, planejamento estratégico, inovação, experiência do cliente e empreendedorismo global. Agora é hora da missão mais importante: criar o esboço do seu próprio negócio, integrando TUDO que aprendeu.",
          "Passo 1 — A ideia e o problema (Módulos 1 e 8): qual problema você quer resolver? Observe sua própria vida: o que te incomoda? O que poderia ser mais justo, mais fácil, mais acessível? Escreva uma frase completa: 'Eu ajudo [quem exatamente?] a [fazer o quê?] para [qual resultado concreto?].' Exemplo real: 'Eu ajudo estudantes de escolas públicas do Brasil a aprender programação de forma gratuita e divertida para que consigam entrar no mercado de tecnologia.' Esse é o propósito. Esse é o coração do negócio. Sem um problema real, não há negócio sustentável.",
          "Passo 2 — Validação, finanças e estratégia (Módulos 2, 3 e 5): pergunte para 10 pessoas do seu público-alvo se pagariam pelo que você quer oferecer — e quanto. Calcule o break-even: quanto custa para começar e quando você teria o primeiro centavo de lucro? Monte um fluxo de caixa dos 3 primeiros meses. Defina sua vantagem competitiva: por que te escolheriam em vez de alternativas existentes? Sua estratégia: custo baixo, diferenciação ou foco num nicho? Pense em inovação (Módulo 6): existe uma versão digital ou uma forma radicalmente diferente de entregar o mesmo valor?",
          "Passo 3 — Equipe, clientes e impacto (Módulos 4 e 7): que habilidades você tem agora? Quais precisará buscar em outras pessoas? Que tipo de líder você quer ser — autocrático, democrático, coach? Como vai tratar seus clientes nos momentos difíceis? Como medirá a satisfação deles? E por último — o mais importante de toda a jornada: qual é o seu impacto além do lucro? Os negócios mais duradouros e admirados do mundo têm um propósito maior que o dinheiro. A Natura protege a Amazônia. O Nubank democratiza o crédito. O Magazine Luiza empodera pequenos vendedores. Você tem todas as ferramentas. Agora só depende de você — qual empresa você vai construir?"
        ]
      }
    ]
  }
];

export function getModuleById(id: string): Module | undefined {
  return MODULES.find(m => m.id === id);
}

export function getLessonById(moduleId: string, lessonId: string): Lesson | undefined {
  const module = getModuleById(moduleId);
  return module?.lessons.find(l => l.id === lessonId);
}
