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
          "Todo grande negócio começa com uma ideia simples. A Amazon começou como uma livraria online na garagem de Jeff Bezos. O Instagram começou como um aplicativo para compartilhar fotos com filtros. O Nubank começou porque seu fundador ficou irritado com as tarifas abusivas dos bancos tradicionais.",
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
          "O Nubank, a fintech brasileira mais valiosa do mundo, nasceu em 2013 quando o colombiano David Vélez ficou frustrado ao abrir uma conta bancária no Brasil — o processo demorou meses e exigiu documentos absurdos. Ele resolveu criar um banco melhor. Hoje o Nubank tem mais de 100 milhões de clientes.",
          "A história do WhatsApp é incrível: Jan Koum cresceu na Ucrânia em extrema pobreza, imigrou para os EUA e estudou comendo com vales-alimentação. Trabalhou na Yahoo por quase dez anos e, ao sair da empresa, criou o WhatsApp com Brian Acton. Em 2014, o Facebook comprou o WhatsApp por US$19 bilhões — a maior aquisição da história da tecnologia na época."
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
          "A Natura começou como pequena empresa de cosméticos em 1969, vendendo porta a porta em São Paulo com um conceito de beleza natural e relações humanas. Em sua expansão global, chegou a ter a Aesop (australiana) e a The Body Shop (britânica) em seu portfólio — ambas vendidas em 2023. Ainda assim, é uma multinacional brasileira com forte presença internacional. As Havaianas eram sandálias de borracha para trabalhadores nos anos 60. Hoje são vendidas em 80 países como ícone global de lifestyle brasileiro — a R$300 no exterior. O WEG começou fabricando motores elétricos em Jaraguá do Sul-SC e hoje é referência mundial em equipamentos industriais e energia.",
          "Competir globalmente exige entender diferenças culturais profundas. A Chevrolet lançou o carro 'Nova' no México sem perceber que em espanhol 'no va' significa 'não anda.' A Pepsi usou um slogan nos anos 60 que em mandarim soava como 'Pepsi ressuscita seus ancestrais mortos.' Essas falhas custaram milhões. Adaptar produtos e comunicações para culturas locais (localização) versus manter identidade global padronizada (globalização) é um dos maiores desafios estratégicos de qualquer empresa internacional. A solução híbrida — 'glocal' — mantém a essência da marca mas adapta a execução para cada mercado.",
          "Para você, futuro empreendedor ou executivo global: as habilidades essenciais são fluência em inglês (língua dos negócios globais), compreensão de diferentes culturas e formas de negociar, capacidade de trabalhar em times remotos e multiculturais, e visão sistêmica de como o mundo está conectado. O Brasil tem talento, criatividade, biodiversidade, mercado consumidor enorme e empreendedores brilhantes. O que a história prova é que brasileiros com visão global, educação sólida e coragem de sair da zona de conforto podem construir impérios. Você tem todas essas condições — a pergunta é o que fará com elas."
        ]
      },
      {
        id: "missao-final",
        title: "Missão Final: você como empreendedor do futuro",
        xpReward: 100,
        content: [
          "Chegamos ao final da sua jornada no Zenitu. Você passou por 8 módulos, 56 aulas e aprendeu o que executivos de grandes empresas levam anos para dominar: modelos de negócio, finanças, marketing, liderança, planejamento estratégico, inovação, experiência do cliente e empreendedorismo global. Agora é hora da missão mais importante: criar o esboço do seu próprio negócio, integrando TUDO que aprendeu.",
          "Passo 1 — A ideia e o problema (Módulos 1 e 8): qual problema você quer resolver? Observe sua própria vida: o que te incomoda? O que poderia ser mais justo, mais fácil, mais acessível? Escreva uma frase completa: 'Eu ajudo [quem exatamente?] a [fazer o quê?] para [qual resultado concreto?].' Exemplo real: 'Eu ajudo estudantes de escolas públicas do Brasil a aprender programação de forma gratuita e divertida para que consigam entrar no mercado de tecnologia.' Esse é o propósito. Esse é o coração do negócio. Sem um problema real, não há negócio sustentável.",
          "Passo 2 — Validação, finanças e estratégia (Módulos 2, 3 e 5): pergunte para 10 pessoas do seu público-alvo se pagariam pelo que você quer oferecer — e quanto. Calcule o break-even: quanto custa para começar e quando você teria o primeiro centavo de lucro? Monte um fluxo de caixa dos 3 primeiros meses. Defina sua vantagem competitiva: por que te escolheriam em vez de alternativas existentes? Sua estratégia: custo baixo, diferenciação ou foco num nicho? Pense em inovação (Módulo 6): existe uma versão digital ou uma forma radicalmente diferente de entregar o mesmo valor?",
          "Passo 3 — Equipe, clientes e impacto (Módulos 4 e 7): que habilidades você tem agora? Quais precisará buscar em outras pessoas? Que tipo de líder você quer ser — autocrático, democrático, coach? Como vai tratar seus clientes nos momentos difíceis? Como medirá a satisfação deles? E por último — o mais importante de toda a jornada: qual é o seu impacto além do lucro? Os negócios mais duradouros e admirados do mundo têm um propósito maior que o dinheiro. A Natura protege a Amazônia. O Nubank democratiza o crédito. O Magazine Luiza empodera pequenos vendedores. Você tem todas as ferramentas. Agora só depende de você — qual empresa você vai construir?"
        ]
      }
    ]
  },

  // ─── JORNADA 2: GESTÃO ESTRATÉGICA ───────────────────────────────────────

  {
    id: "analise-estrategica",
    journeyId: "gestao-estrategica",
    title: "Ferramentas de Análise Estratégica",
    subtitle: "As armas secretas dos consultores de elite",
    emoji: "🎯",
    color: "#2563eb",
    bgGradient: "from-blue-600 to-indigo-700",
    order: 9,
    tier: 1,
    tierLabel: "Aprendiz",
    tierEmoji: "📚",
    tierColor: "#2563eb",
    reviewConcepts: ["Cadeia de Valor", "Concorrência", "Estratégia"],
    bossQuote: "A essência da estratégia é escolher o que não fazer. — Michael Porter",
    nextModuleTeaser: "Próximo: mergulhe em finanças corporativas avançadas — como CEOs leem balanços e avaliam empresas.",
    lessons: [
      {
        id: "swot-pratica",
        title: "Análise SWOT na Prática",
        xpReward: 75,
        content: [
          "A Análise SWOT é a ferramenta de estratégia mais utilizada no mundo corporativo. SWOT é a sigla em inglês para Strengths (Forças), Weaknesses (Fraquezas), Opportunities (Oportunidades) e Threats (Ameaças). As duas primeiras são internas — o que a própria empresa controla. As duas últimas são externas — o que o ambiente de mercado apresenta. Entender essa distinção é o ponto de partida para qualquer análise estratégica séria.",
          "Vamos aplicar ao Nubank. Forças: marca forte, experiência digital superior, custo operacional 5x menor que bancos tradicionais, base de dados de 90 milhões de clientes. Fraquezas: ainda dependente de crédito (alta exposição a inadimplência), sem agências físicas (limita certos públicos), lucratividade recente e ainda instável em alguns mercados. Oportunidades: 50 milhões de brasileiros sem conta bancária, expansão para México e Colômbia, crescimento de pagamentos digitais pós-pandemia. Ameaças: Pix eliminando receita de tarifas, grandes bancos digitalizando rapidamente, regulação crescente do Banco Central.",
          "Uma SWOT bem feita não é uma lista de palavras — é um instrumento de decisão. A pergunta estratégica é: como uso minhas Forças para capturar Oportunidades? Como corrijo Fraquezas antes que Ameaças as explorem? Consultores da McKinsey e BCG usam SWOT como ponto de partida, mas vão além: cruzam os quadrantes em uma matriz de estratégias (SO, ST, WO, WT) que gera iniciativas concretas de ação.",
          "Armadilhas comuns que destroem a utilidade da SWOT: listar obviedades genéricas ('nosso produto é bom' não é uma força estratégica — 'margem bruta 40% acima da média do setor' é); confundir interno com externo; e fazer a análise uma vez e nunca revisar. Uma SWOT tem validade de seis meses em mercados dinâmicos. As empresas que a atualizam trimestralmente — como a Amazon, que tem ciclos de revisão estratégica constantes — conseguem reagir antes dos concorrentes."
        ]
      },
      {
        id: "5-forcas-porter",
        title: "As 5 Forças de Porter",
        xpReward: 75,
        content: [
          "Em 1979, Michael Porter publicou no Harvard Business Review um artigo que mudou para sempre como o mundo pensa sobre estratégia competitiva. Ele argumentou que a rentabilidade de uma indústria não depende apenas do esforço das empresas, mas de cinco forças estruturais que determinam a intensidade da concorrência. Entender essas forças é o que separa um gestor estratégico de um gestor operacional.",
          "As cinco forças são: (1) Rivalidade entre concorrentes existentes — quão intensamente as empresas do setor competem entre si por preço, produto e clientes. (2) Ameaça de novos entrantes — quão fácil é para novas empresas entrar no mercado e roubar participação. (3) Poder de barganha dos fornecedores — quanto os fornecedores conseguem ditar preços e condições. (4) Poder de barganha dos compradores — quanta pressão os clientes conseguem exercer sobre preços. (5) Ameaça de produtos substitutos — quão facilmente o cliente pode trocar seu produto por uma alternativa diferente.",
          "Aplicando ao setor de streaming: rivalidade é altíssima (Netflix, Disney+, Amazon, Max, Apple TV+ disputando o mesmo tempo de tela). Novos entrantes têm barreira alta (produzir conteúdo original custa bilhões). Fornecedores (estúdios e criadores) têm poder médio-alto — por isso a Netflix gastou US$17 bilhões em conteúdo em 2023. Compradores têm poder crescente — cancelamento é a um clique. Substitutos abundam: YouTube, TikTok, jogos, podcasts. Resultado: margens sob pressão crescente. Isso explica por que a Netflix passou a cobrar por compartilhamento de senhas — tentando aumentar receita num ambiente cada vez mais competitivo.",
          "Para usar Porter estrategicamente: primeiro, mapeie cada força do seu setor de 1 (fraca) a 5 (forte). Depois, identifique as forças mais ameaçadoras e pergunte: o que posso fazer para me proteger delas? Uma empresa pode construir barreiras de entrada (patentes, escala, contratos de longo prazo com clientes), reduzir dependência de fornecedores específicos (múltiplos fornecedores), ou criar custo de troca alto para o cliente (ecossistemas integrados como o da Apple). Estratégia é, essencialmente, moldar essas forças ao seu favor."
        ]
      },
      {
        id: "pestel-tam",
        title: "Mapeando Macro e Mercado: PESTEL e TAM",
        xpReward: 75,
        content: [
          "Se a SWOT olha a empresa e o Porter olha o setor, o PESTEL olha o ambiente macro que afeta todos os negócios. PESTEL mapeia seis dimensões: Político (estabilidade governamental, regulação, políticas fiscais), Econômico (crescimento do PIB, taxa de juros, inflação, câmbio), Social (demografia, tendências de comportamento, valores culturais), Tecnológico (inovações, automação, ritmo de mudança digital), Ambiental (legislação climática, escassez de recursos, ESG), Legal (legislação trabalhista, proteção ao consumidor, LGPD). Um evento em qualquer um desses fatores pode transformar — ou destruir — um modelo de negócio.",
          "Exemplo concreto: a alta da taxa Selic no Brasil (fator Econômico) em 2022-2023 afetou todo o ecossistema de startups. Com juros em 13,75% ao ano, o dinheiro que estava barato e disponível para investir em startups de alto risco migrou para renda fixa segura. Mais de 70 startups brasileiras demitem em massa. A Loft, avaliada em US$2,9 bilhões em 2021, enfrentou cortes severos. Isso não foi falha de produto — foi consequência de um fator PESTEL que as empresas não souberam prever ou se proteger adequadamente.",
          "TAM, SAM e SOM são as métricas de tamanho de mercado que todo investidor e estrategista precisa dominar. TAM (Total Addressable Market) é o mercado total disponível se você vendesse para todos os clientes possíveis. SAM (Serviceable Addressable Market) é a parcela que sua solução atual consegue servir. SOM (Serviceable Obtainable Market) é o que você realisticamente vai capturar nos próximos 2-3 anos. Para o iFood no Brasil: TAM poderia ser todo gasto com alimentação fora de casa (R$300 bilhões/ano). SAM seria o segmento de delivery por app em cidades com cobertura (R$40 bilhões). SOM atual é de aproximadamente R$12 bilhões em GMV. Essas métricas definem se um negócio tem potencial de escala.",
          "A combinação SWOT + Porter + PESTEL forma o toolkit básico de qualquer analista estratégico. Consultoras como McKinsey, Bain e BCG cobram de R$500.000 a R$5 milhões por projetos de estratégia que aplicam exatamente essas ferramentas — mais dados proprietários e experiência de setor. O que torna esses consultores valiosos não é conhecer os frameworks, mas saber combiná-los para gerar insights únicos sobre situações específicas. É exatamente o que você está aprendendo a fazer."
        ]
      },
      {
        id: "missao-estrategia",
        title: "Missão Prática: analisando a Netflix no Brasil",
        xpReward: 100,
        content: [
          "Você foi contratado como analista estratégico junior de uma consultoria para avaliar a posição competitiva da Netflix no Brasil e propor uma recomendação estratégica para os próximos dois anos. O cliente quer saber: a Netflix deveria investir mais em conteúdo nacional, reduzir preços, ou diversificar para outros serviços? Use os três frameworks que acabou de aprender.",
          "SWOT da Netflix Brasil: Forças — maior base de assinantes (14 milhões no Brasil), reputação de qualidade, algoritmo de recomendação superior, capacidade de produção local (Vai Rir?, Round 6 em coprodução). Fraquezas — preço premium dificulta penetração em classes C/D, ausência de conteúdo ao vivo (esportes, notícias), custo de conteúdo impossível de reduzir sem perder qualidade. Oportunidades — 60 milhões de smartphones sem Netflix instalado, crescimento da internet rural (Starlink), co-produções com Globo e Bandeirantes. Ameaças — Globoplay crescendo 40% ao ano com Premiere (futebol), Disney+ e HBO Max com IPs imbatíveis, pirataria resiliente.",
          "Porter para streaming no Brasil: rivalidade altíssima (6+ plataformas competindo). Novos entrantes com barreira crescente (custo de conteúdo). Fornecedores (Globo, Record, Warner) com poder real — negociar direitos de conteúdo custa fortunas. Compradores com poder máximo — churn (cancelamento) instantâneo a qualquer momento. Substitutos abundam: YouTube (gratuito), TikTok, Twitch. Conclusão Porter: indústria com margens estruturalmente pressionadas. PESTEL relevante: Selic alta comprime renda disponível das famílias (fator Econômico), regulação de streaming em discussão no Congresso (fator Político/Legal).",
          "Recomendação estratégica: a análise integrada aponta para INVESTIMENTO EM CONTEÚDO NACIONAL + PARCERIA DE FUTEBOL. Justificativa: a principal ameaça (Globoplay com futebol) explora a principal fraqueza (ausência de esportes). A resposta não é reduzir preço — isso destrói margem sem diferenciar. É criar conteúdo que nenhum concorrente tem: séries brasileiras exclusivas de alto impacto + direitos de competições esportivas regionais que a Globo não domina (NBB, Basquete, CBF). TAM do esporte brasileiro é R$5 bilhões/ano e crescendo. Essa recomendação usa Força (capacidade de produção) para capturar Oportunidade (demanda por conteúdo nacional) e neutralizar a maior Ameaça (Globoplay). É estratégia integrada, não intuição."
        ]
      }
    ]
  },

  {
    id: "financas-corporativas",
    journeyId: "gestao-estrategica",
    title: "Finanças Corporativas Avançadas",
    subtitle: "Como CEOs leem números e tomam decisões de bilhões",
    emoji: "📈",
    color: "#1d4ed8",
    bgGradient: "from-indigo-600 to-blue-800",
    order: 10,
    tier: 2,
    tierLabel: "Aprendiz",
    tierEmoji: "📚",
    tierColor: "#2563eb",
    reviewConcepts: ["Lucro", "Fluxo de Caixa", "Break-even"],
    bossQuote: "Contabilidade é a linguagem dos negócios. — Warren Buffett",
    nextModuleTeaser: "Próximo: entre na jornada de Liderança Corporativa e aprenda a liderar pessoas de alto desempenho com OKRs e cultura organizacional.",
    lessons: [
      {
        id: "dre-balanco",
        title: "DRE e Balanço Patrimonial: a radiografia financeira",
        xpReward: 75,
        content: [
          "Todo CFO (Chief Financial Officer) de uma empresa precisa dominar dois documentos fundamentais: o Demonstrativo de Resultados do Exercício (DRE) e o Balanço Patrimonial. O DRE mostra o que aconteceu com o dinheiro em um período — é o filme da empresa. O Balanço mostra a fotografia da empresa num momento específico: o que ela tem (Ativos), o que deve (Passivos) e o que pertence aos sócios (Patrimônio Líquido). São linguagens obrigatórias para qualquer pessoa que queira trabalhar em gestão, finanças ou empreendedorismo.",
          "O DRE começa pela Receita Bruta (tudo que entrou de vendas), subtrai impostos e devoluções para chegar à Receita Líquida, subtrai o Custo dos Produtos Vendidos (CPV) para chegar ao Lucro Bruto, subtrai as despesas operacionais (marketing, administrativo, pesquisa) para chegar ao EBIT (lucro operacional), e depois deduz juros e impostos para chegar ao Lucro Líquido. Cada linha dessa cascata revela algo específico sobre a saúde do negócio. Uma empresa com Receita alta mas Lucro Bruto baixo tem problema de precificação ou custo de produção. Uma empresa com Lucro Bruto alto mas EBIT baixo tem despesas operacionais descontroladas.",
          "O Balanço Patrimonial segue a equação fundamental: Ativos = Passivos + Patrimônio Líquido. Ativos são o que a empresa possui: caixa, contas a receber, estoques, máquinas, imóveis, marcas (intangíveis). Passivos são o que ela deve: fornecedores, empréstimos, impostos a pagar, salários. Patrimônio Líquido é o que sobrou para os sócios — a diferença entre o que a empresa tem e o que ela deve. Se o PL é negativo, a empresa está tecnicamente insolvente: deve mais do que possui.",
          "Indicadores financeiros calculados a partir desses documentos são o vocabulário do mundo corporativo. EBITDA (lucro antes de juros, impostos, depreciação e amortização) é o indicador mais usado para comparar empresas de setores diferentes. Margem Líquida (Lucro Líquido ÷ Receita) mostra quanto de cada real vendido vira lucro real. ROE (Return on Equity) mede quanto os sócios ganham sobre o capital investido. Um ROE de 20% significa que para cada R$100 investido pelos sócios, a empresa gerou R$20 de lucro — excelente em praticamente qualquer setor."
        ]
      },
      {
        id: "valuation",
        title: "Valuation: quanto vale uma empresa?",
        xpReward: 75,
        content: [
          "Valuation é o processo de determinar o valor econômico de uma empresa. É o que bancos de investimento fazem quando uma empresa quer abrir capital na Bolsa, o que fundos de venture capital fazem antes de investir em startups, o que compradores avaliam antes de adquirir um negócio. Entender valuation é entender a lógica por trás de toda grande transação financeira — por que a Microsoft pagou US$69 bilhões pela Activision, por que o Nubank foi avaliado em US$45 bilhões no IPO, por que a lanchonete do bairro foi vendida por R$250.000.",
          "O método mais rigoroso é o DCF (Discounted Cash Flow — Fluxo de Caixa Descontado). A lógica é simples: o valor de qualquer empresa é o total de caixa que ela vai gerar no futuro, trazido a valor presente com uma taxa de desconto que reflete o risco. Se uma empresa vai gerar R$100.000 de caixa livre por ano pelos próximos 10 anos, e a taxa de desconto adequada (custo de capital) é 12% ao ano, o valor presente dessas entradas é aproximadamente R$565.000 — não R$1 milhão. O dinheiro futuro vale menos que o dinheiro hoje por causa do risco e da inflação.",
          "Múltiplos de mercado são o método mais rápido e amplamente usado por analistas. O mais comum é o Múltiplo de EBITDA: valor da empresa ÷ EBITDA. Se empresas similares do setor de varejo são vendidas por 8x EBITDA, e sua empresa tem EBITDA de R$2 milhões, o valuation de referência é R$16 milhões. Outros múltiplos comuns: P/L (Preço/Lucro) para ações na bolsa, EV/Receita para startups em crescimento ainda sem lucro. A Salesforce foi avaliada por anos a mais de 20x receita — porque o mercado precificava o crescimento futuro, não o resultado presente.",
          "Startups usam lógicas de valuation diferentes das empresas estabelecidas. Uma startup em estágio inicial pode ser avaliada sem receita alguma — com base no tamanho do mercado endereçável, na força do time fundador e na tração inicial (usuários ativos, taxa de crescimento). O Airbnb não tinha lucro quando foi avaliado em US$10 bilhões — mas tinha crescimento de 300% ao ano e um modelo de negócio com potencial global comprovado. Valuation não é ciência exata: é a arte de quantificar o futuro com rigor analítico e bom julgamento estratégico."
        ]
      },
      {
        id: "alavancagem",
        title: "Alavancagem financeira e gestão de risco",
        xpReward: 75,
        content: [
          "Alavancagem financeira é usar capital de terceiros (dívida) para amplificar o retorno sobre o capital próprio. É como um pé de cabra: aumenta o que você consegue mover com a mesma força. Funciona brilhantemente quando as coisas vão bem — e pode ser catastrófico quando vão mal. Compreender alavancagem é fundamental porque ela está por trás de todas as grandes fortunas construídas rapidamente e de todas as falências espetaculares da história corporativa.",
          "Exemplo numérico direto: você tem R$100.000 para comprar um imóvel comercial e alugar. Cenário A (sem alavancagem): paga R$100.000 à vista, aluga por R$10.000/ano — retorno de 10% sobre seu capital. Cenário B (com alavancagem): paga R$30.000 de entrada, toma R$70.000 de empréstimo a 8% ao ano (custo de R$5.600/ano). Aluga por R$10.000 e paga R$5.600 de juros — sobram R$4.400 líquidos sobre R$30.000 investidos = retorno de 14,7%. A alavancagem aumentou seu retorno de 10% para 14,7%. Se o imóvel se valoriza 20%, no Cenário A você ganha R$20.000 (20% do capital). No Cenário B, ganha os mesmos R$20.000 mas sobre R$30.000 investidos — retorno de 66%.",
          "O lado perigoso: se o imóvel desvalorizar 30% no Cenário A, você perde R$30.000 (30% do capital). No Cenário B, perde R$30.000 sobre R$30.000 investidos — perdeu 100% do capital próprio e ainda deve o banco. É por isso que a crise financeira de 2008 foi tão devastadora: bancos americanos estavam alavancados em 30x ou mais. Quando os ativos (hipotecas) perderam valor, o capital próprio evaporou em dias. O Lehman Brothers, fundado em 1850, faliu em setembro de 2008 com alavancagem de 31x.",
          "Gestão de risco financeiro é o conjunto de práticas que protege a empresa de eventos adversos. Empresas saudáveis monitoram três indicadores de alavancagem: Dívida Líquida/EBITDA (quanto tempo levaria para pagar toda a dívida com o caixa operacional — abaixo de 3x é saudável para maioria dos setores), Índice de Cobertura de Juros (EBIT ÷ Despesa de Juros — acima de 3x significa que a empresa ganha pelo menos 3 vezes o que paga de juros), e Índice de Liquidez Corrente (Ativo Circulante ÷ Passivo Circulante — acima de 1,5 significa que tem folga para honrar compromissos de curto prazo). Monitorar esses índices é o que separa empresas resilientes das que quebram na primeira crise."
        ]
      },
      {
        id: "missao-financas-corp",
        title: "Missão Prática: avaliando uma startup para investimento",
        xpReward: 100,
        content: [
          "Você é analista de um fundo de venture capital e recebeu o pitch de uma startup de EdTech brasileira: a EducaMax. Ela oferece cursos profissionalizantes online para trabalhadores da indústria e quer R$5 milhões em troca de 20% da empresa (implicando valuation de R$25 milhões). Sua tarefa: analisar a proposta financeira e recomendar investir ou não — com justificativa baseada nos frameworks que aprendeu.",
          "Dados financeiros da EducaMax: Receita atual R$800.000/ano, crescendo 80% ao mês (acelerado, mas ainda em fase inicial). EBITDA negativo: -R$200.000/mês (queimando R$2,4 milhões/ano). CAC (Custo de Aquisição de Cliente) R$120. LTV (Lifetime Value — receita total que um cliente gera) R$600. Margem bruta 65% (boa para SaaS/EdTech). Time: ex-Google, ex-Sebrae, ex-Fundação Getúlio Vargas. Mercado: 40 milhões de trabalhadores industriais, penetração atual de EdTech de 2%.",
          "Análise do valuation: com receita de R$800.000 e crescendo 80% ao mês, a receita anualizada em 12 meses será de aproximadamente R$5-7 milhões se o ritmo se mantiver. Um valuation de R$25 milhões implica múltiplo de EV/Receita de ~31x atual — alto, mas comparável a EdTechs globais em crescimento acelerado (Duolingo foi avaliada a 40x receita no IPO). O múltiplo se justifica se o crescimento se sustentar. LTV/CAC de 5x (R$600 ÷ R$120) é excelente — indica que cada R$1 investido em aquisição traz R$5 de valor. Margem bruta de 65% é consistente com negócios escaláveis.",
          "Recomendação e estrutura do deal: INVESTIR, com condições. A EducaMax apresenta os fundamentos de um negócio escalável: unit economics saudáveis, mercado grande e sub-penetrado, time qualificado. O risco principal é o burn rate (R$2,4M/ano) — os R$5M dão 25 meses de runway, suficiente para atingir break-even se CAC continuar caindo com escala. Estrutura sugerida: R$5M em duas tranches — R$3M imediatos e R$2M condicionados à EducaMax atingir R$3M de ARR (receita anual recorrente) em 12 meses. Essa estrutura protege o investidor de risco de execução enquanto capitaliza adequadamente a empresa para crescer. Esse tipo de análise e negociação é o trabalho real de analistas de VC no Brasil — e você acaba de fazê-lo."
        ]
      }
    ]
  },

  // ─── JORNADA 3: LIDERANÇA CORPORATIVA ───────────────────────────────────

  {
    id: "lideranca-executiva",
    journeyId: "lideranca-corporativa",
    title: "Liderança Executiva e Cultura Organizacional",
    subtitle: "Construa equipes que performam no alto nível",
    emoji: "🏢",
    color: "#d97706",
    bgGradient: "from-amber-500 to-orange-600",
    order: 11,
    tier: 1,
    tierLabel: "Explorador",
    tierEmoji: "🔭",
    tierColor: "#d97706",
    reviewConcepts: ["Liderança", "Equipes", "Planejamento Estratégico"],
    bossQuote: "A cultura come a estratégia no café da manhã. — Peter Drucker",
    nextModuleTeaser: "Próximo: domine marketing digital e growth hacking — as alavancas de crescimento que startups unicórnio usam.",
    lessons: [
      {
        id: "estilos-lideranca",
        title: "Estilos de Liderança: do comando ao coaching",
        xpReward: 100,
        content: [
          "A pesquisa mais influente sobre estilos de liderança foi conduzida por Daniel Goleman, o criador do conceito de Inteligência Emocional. Goleman identificou seis estilos distintos que líderes eficazes dominam e alternam conforme o contexto. O insight central é que não existe um único estilo correto — existe o estilo correto para cada situação e para cada pessoa liderada. Líderes rígidos que usam apenas um estilo têm performance consistentemente inferior aos que navegam entre diferentes abordagens.",
          "Os seis estilos: (1) Coercitivo — 'faça o que eu digo.' Útil em crises imediatas, mas destrói moral e criatividade se usado cronicamente. (2) Visionário — 'venha comigo.' Inspira com uma visão clara e deixa autonomia no caminho. É o estilo com maior impacto positivo no clima organizacional. (3) Afiliativo — 'as pessoas primeiro.' Constrói harmonia e vínculos, mas pode tolerar baixa performance. (4) Democrático — 'o que você acha?' Gera engajamento e boas ideias, mas é lento para decisões urgentes. (5) Marcador de Ritmo — 'faça como eu faço.' Funciona para times de alta performance, mas sobrecarrega equipes medianas. (6) Coaching — 'tente desta forma.' Desenvolve as pessoas para o longo prazo. Pouco usado por líderes impacientes.",
          "OKRs (Objectives and Key Results) é o sistema de metas que o Google adotou em 1999 e que hoje é usado por Amazon, Spotify, LinkedIn, Airbnb e milhares de outras empresas de alto crescimento. O Objective (Objetivo) é qualitativo e inspirador — 'Tornar nossa marca referência em sustentabilidade no varejo brasileiro'. Os Key Results (Resultados-Chave) são quantitativos e verificáveis — '1. Atingir NPS de 70 nos clientes corporativos; 2. Reduzir emissões de carbono em 30%; 3. Publicar relatório ESG auditado.' A mágica dos OKRs: alinham toda a organização em torno das mesmas prioridades, criam transparência radical e permitem identificar o que está bloqueando o progresso.",
          "Cultura organizacional é o conjunto de valores, comportamentos e práticas que definem 'como as coisas funcionam aqui'. É o que uma empresa faz quando ninguém está olhando. A cultura da Amazon está codificada nos 16 Leadership Principles que todo funcionário conhece de cor. A cultura da Netflix está no famoso Culture Deck de 2009 que viralizou globalmente — com princípios como 'Liberdade com Responsabilidade' e 'Contexto, não controle'. Culturas fortes não eliminam conflito — gerenciam-no construtivamente. Quando a cultura é clara, líderes gastam menos tempo explicando decisões e mais tempo executando."
        ]
      },
      {
        id: "gestao-conflitos",
        title: "Gestão de Conflitos e Times de Alta Performance",
        xpReward: 100,
        content: [
          "Patrick Lencioni, autor de 'Os Cinco Desafios das Equipes', identificou a pirâmide de disfunções que destrói times: ausência de confiança → medo de conflito → falta de comprometimento → fuga de responsabilidade → desatenção aos resultados. A maioria dos líderes tenta resolver o último item (resultados ruins) sem atacar a causa raiz (ausência de confiança). Times de alta performance não evitam conflito — eles conflitam produtivamente, com respeito mútuo e foco em soluções.",
          "Google conduziu um estudo de dois anos (Projeto Aristóteles) para descobrir o que tornava times eficazes. A descoberta surpreendeu até os próprios pesquisadores: o fator número um não era a inteligência dos membros, nem as qualificações, nem a personalidade do líder. Era a Segurança Psicológica — a crença de que é seguro assumir riscos interpessoais sem medo de punição ou humilhação. Times com alta segurança psicológica cometem mais erros confessados (e por isso aprendem mais rápido), têm maior inovação e entregam resultados 35% superiores em projetos complexos.",
          "Dar feedback de alta qualidade é uma das habilidades mais raras e valiosas em gestão. O modelo SBI (Situation, Behavior, Impact) estrutura feedbacks difíceis de forma não defensiva: descreva a Situação específica ('na reunião de quarta-feira com o cliente'), o Comportamento observado ('você interrompeu o cliente três vezes enquanto ele apresentava suas preocupações') e o Impacto concreto ('ele ficou visivelmente desconfortável e reduziu o escopo do contrato proposto'). Sem julgamento de caráter, sem generalização, sem emoção. Apenas fatos e consequências. Esse modelo é ensinado em Harvard, INSEAD e em programas de liderança das maiores empresas do mundo.",
          "Times de alto desempenho têm quatro características em comum, segundo pesquisas da Gallup e McKinsey: clareza de papéis (cada pessoa sabe exatamente o que é responsável), accountability mútua (cobram uns aos outros, não apenas ao líder), diversidade cognitiva (pensamentos diferentes geram soluções melhores), e rituais de aprendizagem (retrospectivas, debriefs, celebração de aprendizados de falhas). Um gestor que constrói times com essas quatro características multiplica o impacto da sua organização — e isso é o que diferencia um líder operacional de um líder estratégico."
        ]
      },
      {
        id: "missao-lideranca",
        title: "Missão Prática: reestruturando uma equipe em crise",
        xpReward: 125,
        content: [
          "Você acaba de ser promovido a Diretor de Operações da Logistics.io, startup de logística com 45 funcionários. O time de tecnologia (12 pessoas) está entregando com atraso, a rotatividade é de 40% ao ano (altíssima — a média do setor é 15%) e o clima interno está classificado em 4,5/10 no Glassdoor. O CEO quer uma solução em 90 dias. Use os frameworks de liderança para montar seu plano de ação.",
          "Diagnóstico (semanas 1-2): antes de agir, entenda. Realize 1-on-1s de 30 minutos com cada membro da equipe usando perguntas abertas: 'O que te dá energia no trabalho? O que te esgota? O que você mudaria se fosse gestor hoje? O que te faria considerar sair?' Paralelamente, analise os dados: quais projetos atrasaram? Por quê? Há dependências bloqueantes não resolvidas? Revise as métricas de processo (velocidade de entrega, bugs em produção, tempo de resposta). O diagnóstico bem feito economiza semanas de tentativa e erro.",
          "Intervenções estruturais (semanas 3-6): com base nos 1-on-1s, você descobriu três problemas raiz: (1) ausência de OKRs claros — cada pessoa tinha uma lista diferente de prioridades; (2) reuniões excessivas (média de 4h/dia por desenvolvedor, impedindo trabalho focado); (3) ausência de reconhecimento — ninguém sabia quando havia entregado bem. Ações: implementar OKRs trimestrais com check-ins semanais de 15 minutos (não 1 hora); criar 'dias sem reunião' (terças e quintas até as 14h são bloqueadas para foco); implementar ritual semanal de reconhecimento público de contribuições.",
          "Resultado esperado em 90 dias e aprendizado: redução de atraso de entregas de 40% para abaixo de 15%, melhora do clima para acima de 7/10 e sinalização de redução de turnover (resultados de turnover levam 6-12 meses para aparecer nas estatísticas). O aprendizado mais importante desta missão: a maioria dos problemas de time não são problemas de habilidade técnica — são problemas de sistema, clareza e reconhecimento. Líderes que atacam processos antes de pessoas resolvem mais rápido, com menos trauma organizacional e mais resultados duradouros."
        ]
      }
    ]
  },

  {
    id: "marketing-growth",
    journeyId: "lideranca-corporativa",
    title: "Marketing Digital e Growth Strategy",
    subtitle: "As alavancas de crescimento que unicórnios usam",
    emoji: "📣",
    color: "#ea580c",
    bgGradient: "from-orange-500 to-red-600",
    order: 12,
    tier: 2,
    tierLabel: "Explorador",
    tierEmoji: "🔭",
    tierColor: "#d97706",
    reviewConcepts: ["Marketing", "Clientes", "Canais de Distribuição"],
    bossQuote: "Se você está não envergonhado da v1 do seu produto, você lançou tarde demais. — Reid Hoffman",
    nextModuleTeaser: "Próximo: entre na jornada Master Executivo — governança, ESG e o futuro dos negócios com IA.",
    lessons: [
      {
        id: "funil-conversao",
        title: "Funil de Conversão e Jornada do Cliente Digital",
        xpReward: 100,
        content: [
          "O funil de marketing é o modelo que descreve a jornada do cliente desde o primeiro contato com a marca até a compra e recomendação. No topo do funil (TOFU — Top of Funnel) estão os visitantes que nem sabem que precisam do seu produto: o objetivo aqui é criar consciência. No meio do funil (MOFU) estão os leads interessados que estão considerando opções: o objetivo é educar e criar preferência. No fundo do funil (BOFU) estão os prospects prontos para comprar: o objetivo é converter. Depois da compra vem a retenção e a indicação — o estágio mais valioso e mais ignorado pela maioria das empresas.",
          "Métricas do funil digital que todo gestor precisa dominar: CPA (Custo Por Aquisição) — quanto custa adquirir cada cliente pago. CTR (Click-Through Rate) — porcentagem de pessoas que clicaram num anúncio. Taxa de Conversão — porcentagem de visitantes que realizaram a ação desejada (compra, cadastro, download). ROAS (Return on Ad Spend) — receita gerada por cada real investido em publicidade. Uma campanha com ROAS de 4x significa que cada R$1 em anúncio gerou R$4 em receita. LTV/CAC maior que 3x é o benchmark mínimo para um negócio de assinatura saudável.",
          "SEO (Search Engine Optimization) e Google Ads são os dois grandes canais de busca. SEO é orgânico — você cria conteúdo valioso que aparece naturalmente nas buscas sem pagar por clique. É lento para construir (3-6 meses para ver resultados) mas gera tráfego de altíssima qualidade a custo marginal zero. Google Ads é pago — você paga por cada clique ou por cada mil impressões. É imediato mas para quando você para de pagar. A estratégia vencedora combina os dois: Ads para resultados imediatos e testes de hipótese, SEO para construir ativo de longo prazo. O Nubank, por exemplo, tem um blog com conteúdo financeiro que gera milhões de visitas orgânicas por mês — reduzindo drasticamente seu CAC.",
          "Email marketing e automação de marketing continuam sendo os canais com maior ROI em marketing digital — em média, R$42 retornados para cada R$1 investido, segundo dados da DMA. A chave não é volume (mandar mil emails genéricos), mas relevância (mandar o email certo, para a pessoa certa, no momento certo). Ferramentas como RD Station, HubSpot e Mailchimp permitem criar jornadas automatizadas: quando alguém baixa um e-book, recebe automaticamente uma sequência de emails educativos sobre o tema ao longo de 10 dias, com uma oferta de produto no momento de maior interesse. Essa automação, bem configurada, trabalha para você 24 horas por dia."
        ]
      },
      {
        id: "growth-hacking",
        title: "Growth Hacking: crescimento exponencial com recursos limitados",
        xpReward: 100,
        content: [
          "Growth Hacking é a mentalidade e o conjunto de táticas que startups usam para crescer exponencialmente com orçamentos limitados, combinando criatividade, dados e experimentação rápida. O termo foi cunhado por Sean Ellis em 2010 ao perceber que startups precisavam de profissionais obcecados com crescimento — não com marca ou awarness genérico, mas com métricas concretas de aquisição e retenção de usuários. O growth hacker não pergunta 'como vou anunciar isso?' mas sim 'qual alavanca específica vai mover o número que importa?'",
          "Os casos mais icônicos de growth hacking: Hotmail colocou no rodapé de cada email enviado 'PS: I Love You. Get your free email at Hotmail' com um link de cadastro. Em 18 meses saiu de zero para 12 milhões de usuários. Dropbox criou um programa de indicação em que quem indicava um amigo ganhava 500MB extra de armazenamento grátis — o que é praticamente custo zero para a empresa, mas altamente valioso para o usuário. Cresceu de 100.000 para 4 milhões de usuários em 15 meses. Airbnb integrou com o Craigslist (plataforma de classificados) para publicar automaticamente suas listagens — acessando 50 milhões de usuários sem pagar um centavo em publicidade. Instagram cresceu parcialmente porque os usuários compartilhavam fotos no Facebook e Twitter, onde aparecia 'compartilhado via Instagram' — publicidade gratuita a cada post.",
          "O framework AARRR (Acquisition, Activation, Retention, Revenue, Referral — apelidado de 'Métricas Pirata') criado por Dave McClure mapeia toda a jornada do usuário em cinco estágios mensuráveis. Aquisição: como as pessoas chegam ao produto? Ativação: qual é o momento 'aha!' em que o usuário percebe o valor? Retenção: as pessoas voltam? Com qual frequência? Revenue: como e quando o usuário paga? Referral: os usuários recomendam o produto espontaneamente? A maioria das empresas investe quase todo o orçamento em Aquisição e ignora os outros estágios — especialmente Ativação e Retenção, que determinam se o dinheiro gasto em aquisição foi bem aplicado.",
          "Cultura de experimentação é a base do growth: formular uma hipótese ('se mudarmos o botão de CTA de azul para laranja, a conversão vai aumentar 15%'), criar um teste A/B, medir o resultado com significância estatística e escalar o que funciona. Empresas como Amazon, Google e Booking.com rodam centenas de experimentos simultâneos todos os dias. A Amazon tem uma famosa regra de 'One-Way vs Two-Way Doors': decisões irreversíveis (abrir uma nova fábrica) exigem deliberação longa. Decisões reversíveis (testar uma nova funcionalidade com 10% dos usuários) devem ser tomadas rápido e com dados mínimos. A velocidade de experimentação é vantagem competitiva real."
        ]
      },
      {
        id: "missao-growth",
        title: "Missão Prática: plano de growth para um app de saúde",
        xpReward: 125,
        content: [
          "A FitBrasil é um app de treinos e nutrição com 50.000 usuários cadastrados mas apenas 8.000 usuários ativos mensais (MAU) — uma taxa de retenção de 16%, muito abaixo do benchmark de 30-40% para apps de saúde. O CEO quer triplicar o MAU em 6 meses sem aumentar o orçamento de marketing. Você lidera o time de growth. Como faria?",
          "Diagnóstico com framework AARRR: Aquisição está funcionando (50K cadastros). O problema está em Ativação e Retenção. Análise dos dados: 70% dos usuários que baixam o app nunca completam o primeiro treino. Dos que completam, 60% não voltam na semana seguinte. O momento 'aha!' (quando o usuário percebe o valor real do app) não está acontecendo rápido o suficiente. Hipótese: o onboarding (processo de boas-vindas) é muito longo e genérico, e o app não cria hábito nas primeiras semanas.",
          "Plano de growth em três frentes: (1) Otimização de Ativação: reduzir o onboarding de 8 etapas para 3 (nome, objetivo de saúde, disponibilidade de horário). Criar um treino personalizado para a primeira sessão que pode ser completado em 12 minutos. Meta: elevar a taxa de usuários que completam o primeiro treino de 30% para 70%. (2) Gamificação de Retenção: implementar sistema de streaks (sequência de dias), badges de conquista e ranking semanal entre amigos. Notificações inteligentes baseadas no horário de treino histórico de cada usuário. Meta: elevar retenção semana 1 de 40% para 65%. (3) Loop viral de Referral: integrar compartilhamento de treinos concluídos no Instagram Stories com branding do FitBrasil. Programa de indicação: indique 3 amigos, ganhe 1 mês premium.",
          "Métricas de sucesso e aprendizado: se o plano funcionar, o MAU deve crescer de 8K para 20K+ em 6 meses sem aumento de orçamento — puramente por melhorar a jornada do usuário e ativar o loop viral. O aprendizado central desta missão: a maioria das empresas de app perdem usuários não porque o produto é ruim, mas porque falham em mostrar o valor certo, para a pessoa certa, no momento certo. Growth não é publicidade — é design de jornada. E a grande alavanca de crescimento mais subutilizada não é aquisição: é retenção. Um ponto percentual a mais de retenção ao longo de 12 meses vale muito mais do que dobrar o orçamento de anúncios."
        ]
      }
    ]
  },

  // ─── JORNADA 4: MASTER EXECUTIVO ──────────────────────────────────────────

  {
    id: "governanca-esg",
    journeyId: "master-executivo",
    title: "Governança Corporativa e ESG",
    subtitle: "Os pilares que definem empresas de classe mundial",
    emoji: "🏛️",
    color: "#e11d48",
    bgGradient: "from-rose-600 to-red-700",
    order: 23,
    tier: 1,
    tierLabel: "Master",
    tierEmoji: "🚀",
    tierColor: "#e11d48",
    reviewConcepts: ["Estrutura Corporativa", "Estratégia", "Liderança Executiva"],
    bossQuote: "A governança não é sobre evitar riscos — é sobre assumir os riscos certos, com transparência e responsabilidade.",
    nextModuleTeaser: "Próximo: O Futuro dos Negócios com IA — como inteligência artificial, plataformas digitais e disrupção vão remodelar o mundo.",
    lessons: [
      {
        id: "board-governanca",
        title: "O Conselho de Administração e a Governança Corporativa",
        xpReward: 125,
        content: [
          "Governança corporativa é o sistema pelo qual empresas são dirigidas, monitoradas e controladas. É o conjunto de mecanismos que garante que os interesses dos acionistas (proprietários), do conselho, da diretoria executiva e de outros stakeholders sejam equilibrados e que a empresa opere com transparência, ética e eficiência de longo prazo. Nos últimos 30 anos, escândalos como Enron (EUA), Odebrecht (Brasil) e Wirecard (Alemanha) — todos com bilhões em fraude — demonstraram o custo devastador de governança fraca. Cada um deles destruiu não apenas a empresa, mas reputações, empregos e a confiança em mercados inteiros.",
          "O Conselho de Administração (Board of Directors) é o órgão máximo de uma empresa de capital aberto. Sua função é supervisionar a gestão executiva (o CEO e sua equipe), aprovar a estratégia de longo prazo, garantir a integridade dos controles internos e representar os interesses dos acionistas. Um Board eficaz tem: independência (conselheiros sem vínculos com a gestão), diversidade (gênero, experiência, background geográfico), e engajamento ativo (não apenas aprovar tudo que a diretoria propõe). O Board que questiona, desafia e exige accountability da gestão é o que cria valor duradouro. O Board que apenas homologa decisões é onde nascem os escândalos.",
          "Os quatro pilares do Instituto Brasileiro de Governança Corporativa (IBGC) são: Transparência (divulgação de informações além do exigido por lei), Equidade (tratamento justo de todos os acionistas, inclusive minoritários), Prestação de Contas (responsabilização dos agentes por seus atos), e Responsabilidade Corporativa (consideração do impacto nos stakeholders — funcionários, fornecedores, comunidade, meio ambiente). Empresas que adotam esses pilares têm custo de capital menor (investidores cobram prêmio de risco menor por empresas mais transparentes), menor risco de litígios e reputação mais sólida para atrair talentos e parceiros.",
          "No Brasil, o Novo Mercado da B3 é o nível máximo de governança: exige que 100% das ações sejam ordinárias (com direito a voto), que o Board tenha pelo menos 20% de conselheiros independentes, e que a empresa publique demonstrações financeiras em inglês segundo padrões internacionais (IFRS). Empresas no Novo Mercado como Lojas Renner, WEG e Localiza têm, historicamente, valuation e performance superiores à média do Ibovespa. A governança não é custo — é investimento que se paga através de maior acesso a capital, melhores talentos e decisões estratégicas mais sólidas."
        ]
      },
      {
        id: "esg-impacto",
        title: "ESG: da tendência ao imperativo estratégico",
        xpReward: 125,
        content: [
          "ESG — Environmental, Social and Governance — passou de conceito de nicho para imperativo estratégico global em menos de uma década. Em 2006, apenas 63 institucionalistas assinaram os Princípios para Investimento Responsável da ONU. Em 2023, os signatários representavam mais de US$120 trilhões em ativos sob gestão — mais do que o PIB de todos os países do mundo combinados. Larry Fink, CEO da BlackRock (maior gestora de ativos do planeta, com US$9 trilhões), escreve anualmente uma carta aberta aos CEOs de todas as empresas em que investe, cobrando planos concretos de transição para net zero e metas sociais mensuráveis. ESG não é mais filantropia corporativa — é critério de acesso a capital.",
          "O pilar Ambiental (E) abrange as práticas de uma empresa em relação ao meio ambiente: emissões de carbono, uso de água, gestão de resíduos, impacto na biodiversidade. A Agenda 2030 da ONU e o Acordo de Paris (reduzir emissões para limitar o aquecimento global a 1,5°C) criaram um framework regulatório que afeta diretamente o planejamento estratégico de empresas com operações em qualquer país desenvolvido. A Europa já exige que empresas que vendem no mercado europeu divulguem seu 'carbon footprint' de forma auditada. Empresas brasileiras exportadoras — do agronegócio à indústria — estão sob crescente pressão para demonstrar práticas sustentáveis na cadeia de suprimentos inteira.",
          "O pilar Social (S) vai além de RSC (Responsabilidade Social Corporativa) antiga: abrange diversidade e inclusão na força de trabalho, condições de trabalho em toda a cadeia de fornecimento, impacto nas comunidades locais, e privacidade e segurança de dados dos usuários. Empresas que ignoram o 'S' do ESG pagam um preço crescente: dificuldade de recrutar talentos (Geração Z recusa trabalhar em empresas sem propósito), crises de reputação nas redes sociais, boicotes de consumidores e, cada vez mais, exclusão de portfólios de grandes fundos. A Magazine Luiza se tornou referência global em diversidade racial ao anunciar programa de trainees exclusivo para pessoas negras — resultado: reputação elevada, recrutamento facilitado e cobertura de mídia de US$200M+ em earned media.",
          "Como mensurar e reportar ESG: os frameworks mais adotados globalmente são GRI (Global Reporting Initiative), SASB (Sustainability Accounting Standards Board) e, a partir de 2025, os IFRS Sustainability Disclosure Standards obrigatórios para grandes empresas em vários países. No Brasil, a CVM (Comissão de Valores Mobiliários) tornou obrigatória a divulgação de informações ESG para empresas listadas na B3 a partir de 2024. Para pequenas e médias empresas, a estratégia mais prática é começar por medir o que impacta mais diretamente o negócio — consumo de energia, gestão de resíduos, índice de satisfação dos funcionários — e criar um plano de melhoria anual. A credibilidade vem de metas concretas e progresso verificável, não de declarações genéricas."
        ]
      },
      {
        id: "missao-governanca",
        title: "Missão Executiva: construindo o Board de uma empresa em crescimento",
        xpReward: 150,
        content: [
          "A AgriTech.io é uma startup brasileira de tecnologia agrícola com R$25 milhões de receita, 120 funcionários e planos de abrir capital na B3 em três anos. O CEO fundador reconhece que precisa de governança profissional para atrair investidores institucionais e preparar a empresa para o IPO. Ele te contratou como consultora de governança para estruturar o Conselho de Administração e o programa ESG da empresa.",
          "Estrutura de Board recomendada: 7 conselheiros (número ímpar evita impasse em votações). Composição proposta: 2 fundadores (CEO e CTO — representam a visão original), 2 investidores institucionais (VC e private equity que já participaram do último round), 3 conselheiros independentes (sem vínculo com a empresa ou investidores). Perfis para os independentes: (1) executivo sênior do agronegócio com rede de relacionamentos em cooperativas e traders; (2) CFO experiente com vivência em IPOs e mercado de capitais; (3) especialista em ESG e sustentabilidade agrícola — fundamental dado que o cliente da AgriTech são fazendeiros que precisarão de certificações para exportar. Comitês mínimos: Auditoria (fiscal e controles internos), Remuneração (avaliar compensação do CEO e diretoria) e ESG.",
          "Programa ESG prioritário para uma AgriTech: no pilar Ambiental, medir e reportar o impacto da tecnologia da empresa na redução de uso de defensivos e água pelos clientes (agricultores) — transformar externalidade positiva em vantagem competitiva e diferencial de pricing. No pilar Social, mapear toda a cadeia de fornecimento dos clientes para garantir ausência de trabalho análogo à escravidão (requisito crescente de exportadores para Europa e EUA) e criar programa de capacitação de pequenos agricultores no uso da tecnologia. No pilar Governança, implementar os quatro pilares do IBGC, criar política de gestão de riscos e canal de denúncias anônimas.",
          "Preparo para IPO e aprendizado: com esse Board e programa ESG, a AgriTech.io terá as condições básicas para listar no Novo Mercado da B3 em três anos. Isso significa: acesso a bilhões em capital de investidores institucionais, valuation premium (empresas com boa governança no Novo Mercado costumam negociar 20-30% acima de pares no mercado tradicional), e credibilidade para crescimento internacional. O aprendizado mais importante desta missão: governança e ESG não são custos de conformidade — são instrumentos estratégicos que constroem valor, reduzem risco e abrem portas que dinheiro sozinho não abre. Os líderes que entendem isso constroem empresas que atravessam décadas."
        ]
      }
    ]
  },

  {
    id: "futuro-ia",
    journeyId: "master-executivo",
    title: "O Futuro dos Negócios com Inteligência Artificial",
    subtitle: "Como liderar na era das máquinas inteligentes",
    emoji: "🤖",
    color: "#9333ea",
    bgGradient: "from-purple-700 to-violet-900",
    order: 24,
    tier: 2,
    tierLabel: "Master",
    tierEmoji: "🚀",
    tierColor: "#e11d48",
    reviewConcepts: ["Inovação", "Estratégia Global", "Disrupção"],
    bossQuote: "A IA não vai substituir humanos. Humanos que usam IA vão substituir os que não usam. — Kai-Fu Lee",
    nextModuleTeaser: "Você chegou ao ápice da jornada Master Executivo. Agora você pensa, fala e age como um líder global. 🌍",
    lessons: [
      {
        id: "ia-vantagem-competitiva",
        title: "Inteligência Artificial como Vantagem Competitiva",
        xpReward: 125,
        content: [
          "Inteligência Artificial deixou de ser ficção científica ou ferramenta de gigantes da tecnologia para se tornar vantagem competitiva acessível a qualquer empresa que souber aplicá-la estrategicamente. O GPT-4 da OpenAI, o Gemini do Google e o Claude da Anthropic democratizaram capacidades que custavam dezenas de milhões de dólares para desenvolver internamente. Em 2024, uma PME brasileira pode usar IA para atendimento ao cliente, análise de dados financeiros, criação de conteúdo de marketing e previsão de demanda — tudo por menos de R$1.000 por mês em ferramentas. A questão não é mais 'podemos usar IA?' mas sim 'onde a IA cria mais valor no nosso modelo de negócio?'",
          "Os casos de uso de IA com maior impacto em negócios já provados: (1) Customer Service — chatbots com IA reduzem custo de atendimento em 40-70% e atendem 24h/7 em múltiplos idiomas simultaneamente. O Banco Inter atende 80% das solicitações de seus 30 milhões de clientes via IA sem intervenção humana. (2) Personalização — a Netflix economiza US$1 bilhão por ano em conteúdo graças ao algoritmo que entende o que cada usuário quer antes de procurar. O Spotify criou o Discover Weekly com IA que analisou 30 bilhões de 'eventos de escuta' para criar playlists únicas para cada usuário. (3) Previsão de demanda — o Walmart usa IA para prever demanda em cada loja com 95% de precisão, reduzindo estoque em 20% e desperdício em 15%. (4) Detecção de fraudes — bancos como Itaú e Bradesco detectam fraudes em milissegundos analisando padrões de comportamento com IA.",
          "Machine Learning (ML) é o subconjunto de IA onde o sistema aprende com dados sem ser explicitamente programado. Existem três tipos principais relevantes para negócios: Aprendizado Supervisionado (treinado com exemplos rotulados — ex: classificar emails como spam ou não-spam, prever preço de imóveis com base em dados históricos), Aprendizado Não-Supervisionado (encontra padrões em dados sem rótulos — ex: segmentar clientes em grupos por comportamento de compra) e Aprendizado por Reforço (aprende por tentativa e erro com recompensas — ex: robôs de armazém que otimizam rotas de movimentação de produtos). Gestores não precisam saber programar ML — precisam saber identificar problemas de negócio que ML pode resolver e como avaliá-los.",
          "A estratégia de IA não começa com tecnologia — começa com dados. Empresas com os melhores datasets têm vantagem competitiva durável em IA, porque modelos de ML melhoram proporcionalmente à quantidade e qualidade dos dados com que são treinados. A Amazon construiu o recomendador mais sofisticado do e-commerce porque tem décadas de dados de comportamento de compra de centenas de milhões de usuários. O Google domina busca porque indexou a web e aprendeu o que bilhões de pessoas buscam e clicam. Para qualquer empresa: comece coletando e organizando dados de qualidade hoje. Os dados de hoje são a vantagem competitiva de 2030."
        ]
      },
      {
        id: "plataformas-disrupcao",
        title: "Plataformas Digitais, Efeitos de Rede e Disrupção",
        xpReward: 125,
        content: [
          "Plataformas digitais são modelos de negócio que criam valor conectando dois ou mais grupos de usuários — sem necessariamente produzir nada. O Airbnb não possui imóveis, mas conecta anfitriões e hóspedes. O iFood não tem restaurantes nem motoboys, mas conecta restaurantes e consumidores. O Mercado Livre não tem estoque, mas conecta compradores e vendedores. Essa lógica — criar valor orquestrando encontros entre agentes que antes precisavam de intermediários caros — gerou as empresas mais valiosas da história em menos de 20 anos: Apple, Google, Amazon, Meta, Alibaba, Tencent. Todas são plataformas.",
          "Efeito de rede é o fenômeno onde um produto ou serviço se torna mais valioso à medida que mais pessoas o usam. O WhatsApp vale para você porque seus contatos estão lá. O LinkedIn vale porque profissionais e recrutadores estão presentes. O Visa vale porque estabelecimentos aceitam e consumidores carregam. Esse efeito cria um ciclo virtuoso que é extremamente difícil de quebrar: mais usuários → mais valor → mais usuários → monopólio virtual. Por isso a estratégia de startups de plataforma é crescer rápido, subsidiando usuários iniciais se necessário, para atingir 'massa crítica' — o ponto onde o efeito de rede começa a ser auto-sustentável. O Uber perdeu bilhões em subsídios de corridas no Brasil nos primeiros anos. O custo era deliberado: comprar participação de mercado rápido o suficiente para tornar-se o padrão.",
          "Disrupção é o processo pelo qual um entrante menor e com recursos inferiores substitui um líder estabelecido ao atender inicialmente um segmento ignorado de forma mais simples e barata, melhorando progressivamente até conquistar o mercado principal. Clayton Christensen, professor de Harvard que criou a teoria da inovação disruptiva, documentou dezenas de casos: a fotografia digital destruiu a Kodak (que inventou a câmera digital mas temeu canibalizar seu negócio de filmes), a Netflix destruiu a Blockbuster (que tinha 9.000 lojas e era lucrativa quando a Netflix ainda não dava dinheiro), os smartphones destruíram câmeras compactas, GPS portátil e gravadores de voz como categorias inteiras de produtos.",
          "Como se proteger da disrupção e como disromper: empresas estabelecidas podem criar unidades de negócio separadas para explorar tecnologias disruptivas sem as restrições dos processos e margens existentes (o que o Amazon fez com AWS — criando uma empresa de cloud dentro de uma varejista). Startups que querem disromper devem focar em segmentos super-servidos (onde o incumbente cobrar demais por mais do que o cliente precisa) ou não-servidos (sem alternativa acessível atual). O Nubank encontrou 50 milhões de brasileiros sem conta bancária e outros tantos insatisfeitos com tarifas abusivas — um mercado que os grandes bancos não tinham incentivo para servir bem. Esse é o ponto de entrada clássico de uma disrupção bem-sucedida."
        ]
      },
      {
        id: "missao-master-final",
        title: "Missão Master Final: sua visão de futuro",
        xpReward: 200,
        content: [
          "Você chegou ao ponto mais elevado da sua jornada no Zenitu. Passou por 14 módulos, aprendeu o que executivos de grandes empresas levam anos para acumular e agora você pensa, analisa e se comunica como um líder estratégico. Esta missão final não tem gabarito — tem perspectiva. Ela exige que você integre tudo e projete sua visão sobre o futuro dos negócios e o papel que pretende desempenhar nele.",
          "Cenário 2030: inteligência artificial avançada está presente em 80% das decisões corporativas. Plataformas digitais dominam cinco setores que eram físicos (varejo, serviços financeiros, saúde, educação, mobilidade). A regulação de IA, dados e sustentabilidade está redefinindo o que é permitido e o que é necessário para operar globalmente. O Brasil tem a maior biodiversidade do planeta, uma das maiores populações jovens do mundo e uma economia de R$12 trilhões — mas ainda exporta predominantemente commodities e importa tecnologia. A pergunta estratégica: onde está a maior oportunidade para um líder brasileiro de nova geração nesse cenário?",
          "Sua análise deve integrar: PESTEL (quais forças macro criam a janela de oportunidade?), Porter (qual estrutura de setor é mais favorável a novos entrantes com tecnologia?), SWOT pessoal (quais são suas forças únicas como brasileiro, jovem e com formação em gestão?), Valuation (qual é o potencial de mercado — TAM/SAM/SOM — da oportunidade que você identificou?), e OKRs pessoais (quais são seus três objetivos mensuráveis para os próximos dois anos para avançar nessa direção?). Escreva ou pense estruturadamente em cada dimensão.",
          "O que os líderes que constroem legado têm em comum: propósito claro além do lucro (que problema real no mundo eles resolvem?), capacidade de articular uma visão convincente que atrai talentos e capital, disposição para atualizar constantemente o próprio modelo mental enquanto o mundo muda, e coragem para agir antes de ter certeza — porque no mundo de amanhã, a velocidade de aprendizado será mais valiosa do que qualquer conhecimento fixo. Você absorveu frameworks, vocabulário e lógica de negócios de nível executivo. A diferença entre saber e fazer só você pode cruzar. O próximo capítulo não está neste aplicativo — está nas decisões e ações que você vai tomar a partir de agora."
        ]
      }
    ]
  },

  // ─── GESTÃO ESTRATÉGICA (Intermediário) ───────────────────────────────────

  {
    id: "setores-empresa",
    journeyId: "gestao-estrategica",
    title: "Estrutura Organizacional",
    subtitle: "Quem faz o quê, como cada área funciona e como todas se conectam",
    emoji: "🏗️",
    color: "#2563eb",
    bgGradient: "from-blue-600 to-indigo-700",
    order: 13,
    tier: 2,
    tierLabel: "Intermediário",
    tierEmoji: "📊",
    tierColor: "#2563eb",
    reviewConcepts: ["Organograma", "C-Suite", "Departamentos", "Sinergia", "KPI"],
    bossQuote: "Uma empresa bem estruturada não precisa de um herói — precisa de um sistema que funcione mesmo quando o herói está de férias. — Michael Gerber",
    nextModuleTeaser: "Próximo: aprenda a ler os sinais vitais de uma empresa e diagnosticar problemas antes que se tornem crises.",
    lessons: [
      {
        id: "hierarquia-csuite",
        title: "Hierarquia Empresarial: do Estagiário ao CEO",
        xpReward: 75,
        content: [
          "Toda empresa de médio e grande porte possui uma estrutura hierárquica clara, e entender essa estrutura é fundamental para qualquer profissional que queira crescer ou gerenciar negócios. No topo está o C-Suite — os executivos com o prefixo 'Chief' no título. O CEO (Chief Executive Officer) é o responsável máximo pela empresa: toma as decisões estratégicas mais importantes, responde ao Conselho de Administração e define a direção geral do negócio. Abaixo do CEO estão os outros C-levels: CFO (Finanças), COO (Operações), CMO (Marketing), CTO (Tecnologia), CHRO (Recursos Humanos) e CLO (Jurídico). Cada um comanda uma área e reporta diretamente ao CEO.",
          "Abaixo do C-Suite vêm os Diretores (ou Vice-Presidentes em empresas americanas), que traduzem a estratégia dos executivos em planos concretos para suas áreas. Em seguida, os Gerentes coordenam equipes e garantem a execução do dia a dia. Os Coordenadores e Supervisores fazem a ponte entre gerentes e a equipe operacional. Os Analistas, Assistentes e Estagiários executam as atividades e produzem os dados que sustentam as decisões de cima. Em uma empresa com 500 funcionários, essa pirâmide tipicamente tem 5 a 7 níveis hierárquicos. Em startups de alto crescimento, é comum ter apenas 3: CEO, gerentes e equipe — estruturas mais planas aceleram decisões mas exigem profissionais mais seniores em todos os níveis.",
          "O organograma é o mapa visual da estrutura de uma empresa. Ele pode ser vertical (clássico, com caixas e linhas mostrando quem reporta para quem), horizontal (poucos níveis, comum em startups e agências criativas), matricial (cada funcionário reporta para dois gestores — um funcional e um de projeto) ou em rede (times autônomos conectados por propósito, comum em empresas ágeis como Spotify e Nubank). A escolha da estrutura não é arbitrária: impacta a velocidade de decisão, a comunicação interna, a inovação e a capacidade de escalar. Empresas em crescimento rápido frequentemente passam por reestruturações orgânicas — o que era funcional com 50 pessoas quebra com 300.",
          "Cada nível hierárquico tem um perfil de competência diferente. Executivos precisam de visão sistêmica, tolerância à ambiguidade e capacidade de comunicar estratégia. Gerentes precisam de planejamento, gestão de pessoas e resolução de conflitos. Analistas e assistentes precisam de execução, atenção a detalhes e domínio técnico. O erro comum de profissionais que são promovidos é continuar fazendo o trabalho técnico que os fez ser promovidos — em vez de desenvolver as competências do novo nível. Um analista que vira gerente precisa parar de 'fazer' e começar a 'coordenar'."
        ]
      },
      {
        id: "departamentos-funcoes",
        title: "Os Departamentos e o Que Cada Um Faz",
        xpReward: 75,
        content: [
          "Uma empresa é um conjunto de áreas interdependentes. O Departamento Financeiro (ou Controladoria) é o guardião dos números: registra todas as transações, produz os demonstrativos financeiros, gerencia o fluxo de caixa, controla custos, recolhe impostos e assessora o CEO sobre a saúde financeira do negócio. Sem o financeiro, a empresa opera no escuro. Em uma empresa de médio porte, o financeiro tem quatro funções básicas: contas a pagar, contas a receber, contabilidade e tesouraria. As métricas do financeiro são: receita líquida, lucro bruto, EBITDA, margem líquida, endividamento líquido e capital de giro.",
          "O Departamento Comercial (ou Vendas) gera a receita que faz a empresa existir. É dividido em Inside Sales (vendas internas, por telefone e videoconferência) e Field Sales (representantes externo que visitam clientes). Em empresas B2B, o processo de vendas é complexo e longo: Prospecção → Qualificação → Proposta → Negociação → Fechamento → Pós-venda. O funil de vendas mede a conversão em cada etapa. KPIs comerciais: número de leads, taxa de conversão, ticket médio, ciclo de vendas, churn (perda de clientes) e LTV (valor do cliente ao longo do tempo). O Marketing alimenta o comercial com leads qualificados — quando as duas áreas não estão alinhadas, a empresa perde dinheiro dos dois lados.",
          "O Departamento de Recursos Humanos (RH ou People & Culture em empresas modernas) é responsável pelo capital humano da organização — seu ativo mais valioso e também o mais complexo. As funções do RH se dividem em: Recrutamento e Seleção (atrair e contratar as pessoas certas), Treinamento e Desenvolvimento (capacitar e desenvolver os colaboradores), Remuneração e Benefícios (estruturar salários, bônus, VR, VT, plano de saúde), Gestão de Desempenho (avaliações periódicas, feedbacks, PDIs), Administração de Pessoal (folha de pagamento, contratos, férias, rescisões) e Clima Organizacional (pesquisas de satisfação, programas de engajamento). Em empresas com mais de 50 funcionários, o RH deixa de ser opcional para se tornar crítico — a gestão ad hoc sem processos estruturados gera conflitos, rotatividade e passivos trabalhistas.",
          "O Departamento Jurídico (ou Área Legal) protege a empresa de riscos legais. Seu trabalho inclui: elaboração e revisão de contratos comerciais, trabalhistas e societários; assessoria em questões tributárias; acompanhamento de processos judiciais; garantia de conformidade regulatória (compliance); proteção da propriedade intelectual (marcas, patentes); e consultoria preventiva para evitar litígios. Em pequenas empresas, o jurídico geralmente é terceirizado para um escritório de advocacia. Em grandes corporações, o departamento jurídico interno tem dezenas de advogados especializados em diferentes áreas. A máxima do jurídico corporativo: é muito mais barato prevenir um problema legal do que litigá-lo depois. Um processo trabalhista médio no Brasil custa entre R$15.000 e R$80.000 entre honorários, custas e condenação."
        ]
      },
      {
        id: "como-areas-se-conectam",
        title: "Como os Setores se Conectam: a Empresa como Sistema",
        xpReward: 75,
        content: [
          "Empresas não são coleções de departamentos isolados — são sistemas onde tudo se conecta. Uma decisão de Marketing impacta Vendas. Uma decisão de RH impacta Operações. Uma decisão de Operações impacta Financeiro. Gestores que pensam apenas na própria área e ignoram o sistema ao redor criam subotimizações: resolvem o problema da sua área enquanto criam problemas para as outras. Um bom exemplo: o Marketing cria uma campanha que gera 300% mais pedidos do que o normal. Ótimo para Marketing. Péssimo para Operações, que não tem capacidade de produzir, e para o Financeiro, que precisa de capital de giro extra para comprar matéria-prima antes de receber dos clientes.",
          "O fluxo básico de valor em uma empresa funciona assim: o Marketing atrai potenciais clientes (leads). O Comercial converte leads em clientes pagantes. As Operações produzem e entregam o produto ou serviço. O Financeiro controla o dinheiro que entra e sai. O RH garante que as pessoas certas estão nos lugares certos executando todas essas etapas. O Jurídico garante que tudo é feito dentro da lei. A TI fornece as ferramentas tecnológicas que sustentam todos os departamentos. Quando um elo dessa cadeia falha, os efeitos se propagam. A questão não é 'qual área é mais importante?' — todas são igualmente necessárias para o sistema funcionar.",
          "Reuniões de gestão interfuncional (cross-functional) existem justamente para alinhar os departamentos. Em empresas bem geridas, líderes de diferentes áreas se reúnem semanalmente ou quinzenalmente para revisar métricas, identificar gargalos e coordenar decisões que impactam múltiplos departamentos. Um erro clássico de empresas em crescimento rápido é cada área crescer de forma isolada — o que cria silos de informação onde Marketing não sabe o que Vendas está fazendo, Operações não sabe o que Marketing prometeu e o Financeiro descobre os problemas quando o caixa está negativo. A ferramenta que combate isso é o S&OP (Sales & Operations Planning): uma reunião mensal onde todos os departamentos alinham previsões, capacidade e estratégia para os próximos 3 a 6 meses.",
          "Indicadores de performance (KPIs) de cada área devem estar conectados ao resultado final da empresa. O KPI do Marketing não pode ser apenas 'número de seguidores no Instagram' — precisa estar ligado a 'quantos leads qualificados geramos'. O KPI de Vendas não pode ser apenas 'número de ligações feitas' — precisa ser 'receita fechada e qualidade dos contratos'. O KPI de RH não pode ser apenas 'número de treinamentos realizados' — precisa incluir 'impacto na produtividade e retenção'. Quando os KPIs são bem definidos e conectados entre si, toda a organização remará na mesma direção. Quando são definidos de forma isolada, cada área pode atingir seus números enquanto a empresa perde dinheiro."
        ]
      }
    ]
  },

  {
    id: "diagnostico-empresa",
    journeyId: "gestao-estrategica",
    title: "Diagnóstico Empresarial",
    subtitle: "Como identificar se uma empresa está saudável ou em risco",
    emoji: "🔍",
    color: "#2563eb",
    bgGradient: "from-blue-600 to-indigo-700",
    order: 14,
    tier: 2,
    tierLabel: "Intermediário",
    tierEmoji: "📊",
    tierColor: "#2563eb",
    reviewConcepts: ["Margem", "EBITDA", "Fluxo de Caixa", "DRE", "Churn", "NPS"],
    bossQuote: "O que não é medido não é gerenciado. — Peter Drucker",
    nextModuleTeaser: "Próximo: a empresa diagnosticada tem problemas sérios. O que você faz agora? Aprenda a reverter um negócio que não está dando retorno.",
    lessons: [
      {
        id: "sinais-vitais-empresa",
        title: "Os Sinais Vitais de uma Empresa",
        xpReward: 75,
        content: [
          "Assim como um médico verifica pressão, temperatura e batimentos cardíacos para avaliar a saúde de um paciente, um gestor precisa monitorar os sinais vitais do negócio regularmente. Os sinais vitais financeiros fundamentais são: Receita (quanto a empresa vendeu), Custo dos Produtos Vendidos — CPV (quanto custou produzir o que vendeu), Lucro Bruto (Receita menos CPV), Despesas Operacionais (custos fixos: aluguel, salários, energia, software), EBITDA (Earnings Before Interest, Taxes, Depreciation and Amortization — o lucro operacional antes de juros, impostos e amortizações, que mede a eficiência operacional pura), Lucro Líquido (o que sobra depois de tudo) e Fluxo de Caixa (o dinheiro que efetivamente entrou e saiu da conta bancária).",
          "A diferença entre lucro e caixa é crítica e frequentemente mal compreendida. Uma empresa pode ser lucrativa no papel e quebrar por falta de caixa. Isso acontece quando: clientes pagam a prazo (60-90 dias) mas fornecedores exigem pagamento à vista; a empresa cresce rápido e precisa investir em estoque e pessoal antes de receber das vendas; ou há inadimplência elevada. O índice de liquidez corrente — Ativo Circulante dividido pelo Passivo Circulante — mede a capacidade da empresa de pagar suas obrigações de curto prazo. Um índice abaixo de 1,0 significa que a empresa não tem recursos suficientes para honrar seus compromissos imediatos: sinal de alerta grave.",
          "Os sinais vitais operacionais variam por setor, mas os mais universais são: Produtividade por funcionário (Receita ÷ Número de funcionários), Prazo médio de entrega (quanto tempo do pedido à entrega), Índice de devoluções e reclamações (qualidade do produto ou serviço), Taxa de ocupação ou utilização de capacidade (quanto da capacidade instalada está sendo usada), e NPS — Net Promoter Score (de 0 a 10, quantos clientes recomendariam a empresa: detratores 0-6, neutros 7-8, promotores 9-10; NPS = % promotores − % detratores). Um NPS acima de 50 é considerado excelente; abaixo de 0 indica crise de satisfação.",
          "Os sinais vitais de RH revelam a saúde humana da organização: Turnover (taxa de rotatividade de funcionários — acima de 15% ao ano é preocupante no Brasil), Absenteísmo (faltas e afastamentos — acima de 3% indica problema de clima ou saúde), Tempo médio de contratação (demora para preencher vagas — indica se a empresa é atrativa para o mercado), e Índice de engajamento (pesquisa de clima — menos de 60% de engajados é sinal de ambiente problemático). Combinando os sinais financeiros, operacionais e de RH, um gestor tem uma visão 360° da empresa. O erro de muitos gestores é acompanhar apenas os financeiros e ignorar os operacionais e de RH — até que o problema humano se transforme em problema financeiro."
        ]
      },
      {
        id: "demonstrativos-financeiros",
        title: "Como Ler Demonstrativos Financeiros",
        xpReward: 80,
        content: [
          "O Balanço Patrimonial é a 'foto' da empresa em um momento específico. Ele mostra o que a empresa possui (Ativos), o que deve (Passivos) e o patrimônio dos sócios (Patrimônio Líquido). A equação fundamental é: Ativo = Passivo + Patrimônio Líquido. Ativos Circulantes são recursos que se convertem em dinheiro em menos de 12 meses: caixa, contas a receber, estoques. Ativos Não-Circulantes são de longo prazo: máquinas, imóveis, investimentos. Passivos Circulantes são dívidas de curto prazo: fornecedores a pagar, salários a pagar, impostos a recolher. Passivos Não-Circulantes são dívidas de longo prazo: financiamentos, debêntures. Um balanço saudável tem Patrimônio Líquido positivo e crescente — empresa com PL negativo está tecnicamente insolvente.",
          "A Demonstração de Resultado do Exercício (DRE) é o 'filme' do desempenho da empresa durante um período (mês, trimestre, ano). Começa pela Receita Bruta (tudo que foi vendido), subtrai as devoluções e descontos para chegar à Receita Líquida, depois subtrai o Custo dos Produtos Vendidos (CPV) para obter o Lucro Bruto. As Despesas Operacionais (comerciais, administrativas, de marketing) são subtraídas para chegar ao EBIT (lucro operacional). O resultado financeiro (juros pagos menos recebidos) é somado ou subtraído para chegar ao Lucro antes dos Impostos (EBT). Após os impostos (IRPJ e CSLL — que somam 34% para grandes empresas no lucro real), chegamos ao Lucro Líquido. No Brasil, o Simples Nacional unifica impostos em uma alíquota única de 4% a 33% dependendo do porte e setor da empresa.",
          "O Fluxo de Caixa Direto mostra todas as entradas e saídas de dinheiro em três grupos: Operacional (recebimentos de clientes e pagamentos operacionais), Investimentos (compra e venda de ativos fixos) e Financiamento (empréstimos, amortizações, distribuição de lucros). O Free Cash Flow (Fluxo de Caixa Livre) é o caixa gerado pelas operações menos os investimentos necessários para manter o negócio — é o caixa disponível para pagar dividendos, amortizar dívidas ou reinvestir no crescimento. Empresas que geram FCF consistentemente e crescente são as mais valorizadas no mercado: Amazon, Apple e Microsoft são exemplos. Uma empresa pode ter lucro líquido positivo e FCF negativo quando faz grandes investimentos ou quando seu capital de giro cresce mais rápido que sua receita.",
          "Os principais indicadores de análise financeira derivados dos demonstrativos: Margem Bruta (Lucro Bruto ÷ Receita Líquida) — mede a eficiência da produção; Margem EBITDA — mede a eficiência operacional antes de itens não-caixa; Margem Líquida (Lucro Líquido ÷ Receita) — mede quanto de cada real vendido vira lucro; ROE (Return on Equity = Lucro Líquido ÷ Patrimônio Líquido) — mede o retorno sobre o capital dos sócios; ROA (Return on Assets = Lucro Líquido ÷ Ativos Totais) — mede a eficiência do uso dos ativos; e Dívida Líquida ÷ EBITDA — mede a alavancagem: abaixo de 2x é confortável, acima de 4x começa a ser preocupante para a maioria dos setores."
        ]
      }
    ]
  },

  {
    id: "empresa-sem-retorno",
    journeyId: "gestao-estrategica",
    title: "Empresa Sem Retorno",
    subtitle: "Como identificar causas, agir rapidamente e reverter um negócio em dificuldade",
    emoji: "📉",
    color: "#2563eb",
    bgGradient: "from-blue-600 to-indigo-700",
    order: 15,
    tier: 2,
    tierLabel: "Intermediário",
    tierEmoji: "📊",
    tierColor: "#2563eb",
    reviewConcepts: ["Reestruturação", "Break-even", "Giro de Estoque", "Inadimplência", "Turnaround"],
    bossQuote: "Toda empresa em crise passou por um período em que os sinais de alerta foram ignorados. — Luiz Seabra, cofundador da Natura",
    nextModuleTeaser: "Próximo: entenda a lei e o que você pode e não pode fazer como empresário e gestor.",
    lessons: [
      {
        id: "diagnostico-retorno",
        title: "Por Que a Empresa Não Está Dando Retorno?",
        xpReward: 80,
        content: [
          "Quando uma empresa não gera o retorno esperado, a causa é quase sempre uma dessas cinco: receita insuficiente, custo excessivo, margem comprimida, problema de giro (dinheiro preso em estoque ou contas a receber) ou modelo de negócio errado para o mercado. Confundir os sintomas com a causa raiz é o erro mais comum. Uma empresa que parece ter 'problema de vendas' pode, na verdade, ter um problema de precificação — está vendendo muito mas com margem tão baixa que quanto mais vende, mais perde. Uma empresa que parece ter 'problema de custo' pode ter um problema de escala — seus custos fixos são adequados para uma operação de 5 milhões de faturamento mas ela só fatura 1 milhão.",
          "A ferramenta dos 5 Porquês (criada pela Toyota) é simples e poderosa para encontrar a causa raiz. Parte de um sintoma e pergunta 'por quê?' cinco vezes até chegar à causa fundamental. Exemplo: 'A empresa não dá lucro' → Por quê? 'Porque as despesas são maiores que a receita' → Por quê? 'Porque os custos fixos cresceram 40% no último ano' → Por quê? 'Porque contratamos 8 funcionários para um projeto que não foi aprovado pelo cliente' → Por quê? 'Porque começamos a executar o projeto antes da assinatura do contrato' → Por quê? 'Porque não existe processo formal de aprovação antes do início da execução'. Causa raiz identificada: ausência de processo de aprovação formal. A solução não é demitir os funcionários — é criar o processo.",
          "O ponto de equilíbrio (break-even) é o nível de vendas onde a empresa não lucra nem perde — cobre exatamente seus custos. Calculado como: Custos Fixos Totais ÷ Margem de Contribuição Unitária (Preço de Venda − Custo Variável Unitário). Se uma empresa tem R$100.000 em custos fixos mensais e margem de contribuição de R$50 por produto, precisa vender 2.000 unidades por mês para atingir o break-even. Abaixo disso, opera no prejuízo. Acima, começa a lucrar. Empresas que não conhecem seu break-even não sabem se a meta de vendas que definiram é suficiente para ser sustentável. É um dos primeiros cálculos que qualquer gestor deve fazer ao assumir uma operação.",
          "Quando a empresa identifica que não está performando, as ações imediatas dependem da urgência: (1) Se o caixa está crítico (menos de 30 dias de capital de giro), a prioridade é estancar a hemorragia — reduzir despesas variáveis imediatamente, renegociar prazos com fornecedores, acelerar cobranças e buscar capital de giro emergencial. (2) Se o problema é estrutural mas há fôlego de caixa, o foco é no diagnóstico profundo e na reestruturação planejada — revisão de portfólio de produtos, renegociação de contratos, ajuste de quadro de pessoal e revisão de modelo comercial. (3) Se o modelo de negócio está errado para o mercado, a solução pode exigir um pivot — mudança fundamental de público-alvo, proposta de valor ou canal de distribuição. O Nubank começou como cartão sem anuidade e evoluiu para um banco completo à medida que o modelo validou."
        ]
      },
      {
        id: "acoes-turnaround",
        title: "Turnaround: Como Reverter um Negócio em Dificuldade",
        xpReward: 80,
        content: [
          "Turnaround é o processo formal de reversão de uma empresa em dificuldade. Empresas de consultoria especializadas, chamadas de 'turnaround advisors', são contratadas para conduzir esse processo em casos graves. Mas gestores internos bem preparados podem conduzir turnarounds menores sem consultoria externa. O processo tem fases definidas: (1) Estabilização — parar a sangria financeira. Isso geralmente envolve corte imediato de custos desnecessários, renegociação com credores e injeção de capital pelos sócios se necessário. (2) Diagnóstico — entender profundamente o que causou a deterioração. (3) Reestruturação — implementar mudanças estruturais no modelo, na equipe ou nos processos. (4) Crescimento — após estabilizar, voltar a crescer sobre uma base sólida.",
          "Renegociação com fornecedores é uma das primeiras e mais impactantes ações em um turnaround. Fornecedores preferem um cliente que paga devagar a um que não paga — então há espaço para negociação. Técnicas eficazes: (a) Transparência — apresentar ao fornecedor o diagnóstico da situação e o plano de recuperação. Fornecedores que entendem o problema têm mais disposição para colaborar. (b) Proposta de parcelamento — oferecer pagamento do passado em parcelas enquanto retoma o pagamento do corrente em dia. (c) Negociação de desconto por pagamento à vista de parte da dívida — muitos fornecedores aceitam 60-70 centavos por real para receber algo imediatamente. (d) Em casos extremos, renegociar o contrato de fornecimento para prazos maiores de pagamento em troca de volume garantido.",
          "A revisão de portfólio é essencial em turnarounds: nem todos os produtos ou serviços são igualmente rentáveis. A análise de margem de contribuição por SKU (produto) frequentemente revela que 20% dos produtos geram 80% do lucro enquanto outros 30% geram lucro negativo quando você considera os custos de estoque, logística e atendimento específicos. A decisão de descontinuar produtos não rentáveis libera capital de giro, simplifica operações e permite foco no que funciona. A matriz BCG (Boston Consulting Group) é uma ferramenta clássica para essa análise: classifica produtos em Estrela (alta participação, crescendo), Vaca Leiteira (alta participação, mercado maduro), Ponto de Interrogação (baixa participação, crescendo) e Abacaxi (baixa participação, mercado em declínio). Abacaxis geralmente devem ser descontinuados; Vacas Leiteiras financiam Estrelas.",
          "Se a empresa não consegue se recuperar sozinha, existem mecanismos legais de proteção. A Recuperação Judicial (Lei 11.101/2005) permite que uma empresa com dívidas suspenda temporariamente o pagamento de credores enquanto apresenta um plano de recuperação ao juiz e aos credores. O plano deve ser aprovado em assembleia de credores. Durante o processo, a empresa continua operando, mas sob supervisão judicial. É um instrumento legítimo e estratégico — não uma derrota. Grandes empresas brasileiras usaram a recuperação judicial para se reestruturar: Oi Telecom, Avianca Brasil e OAS passaram por este processo. A Falência, por outro lado, é o encerramento da empresa com liquidação de ativos para pagamento dos credores — é o último recurso quando a recuperação é inviável."
        ]
      }
    ]
  },

  {
    id: "direito-empresarial",
    journeyId: "gestao-estrategica",
    title: "Direito Empresarial",
    subtitle: "O que você pode e não pode fazer — leis, multas e responsabilidades",
    emoji: "⚖️",
    color: "#2563eb",
    bgGradient: "from-blue-600 to-indigo-700",
    order: 16,
    tier: 2,
    tierLabel: "Intermediário",
    tierEmoji: "📊",
    tierColor: "#2563eb",
    reviewConcepts: ["CNPJ", "MEI", "LTDA", "S.A.", "Contrato", "Concorrência Desleal", "Procon"],
    bossQuote: "A lei não é um obstáculo para os negócios — é o terreno sobre o qual todos os negócios competem. Quem a ignora perde o jogo antes de começar.",
    nextModuleTeaser: "Próximo: a relação com os funcionários tem regras claras. Aprenda a CLT e o que você pode e não pode fazer como empregador.",
    lessons: [
      {
        id: "tipos-empresa-brasil",
        title: "Tipos de Empresa no Brasil: MEI, LTDA, S.A. e mais",
        xpReward: 80,
        content: [
          "No Brasil, a escolha do tipo jurídico da empresa impacta diretamente a responsabilidade dos sócios, a carga tributária, as obrigações legais e as possibilidades de crescimento. O MEI (Microempreendedor Individual), criado pela Lei Complementar 128/2008, permite que uma pessoa física formalize seu negócio com faturamento anual de até R$81.000 (limite de 2024), pagamento mensal fixo de impostos (DAS — entre R$67 e R$72 em 2024, dependendo do setor), e responsabilidade ilimitada do titular (seu patrimônio pessoal responde pelas dívidas). É ideal para autônomos e microempreendedores que trabalham sozinhos — não pode ter sócios nem contratar mais de um funcionário.",
          "A LTDA (Sociedade Limitada), regulada pelo Código Civil (Lei 10.406/2002, artigos 1.052 a 1.087), é o tipo mais comum no Brasil para empresas de médio porte. A responsabilidade de cada sócio é limitada ao valor de suas cotas — portanto, em caso de falência, o patrimônio pessoal dos sócios está protegido, salvo em casos de má-fé ou confusão patrimonial (misturar dinheiro pessoal com o da empresa). A LTDA pode ter de 1 a infinitos sócios, distribui lucros proporcionalmente às cotas e é gerida pelos próprios sócios ou por administradores designados no contrato social. A tributação pode ser pelo Simples Nacional (para faturamento até R$4,8 milhões/ano), Lucro Presumido (estimativa de lucro pelo fisco) ou Lucro Real (apuração real do lucro — obrigatório para empresas com faturamento acima de R$78 milhões/ano).",
          "A S.A. (Sociedade Anônima), regida pela Lei 6.404/1976 (Lei das S.A.), é o tipo mais complexo e mais adequado para grandes empresas ou aquelas que buscam capital de terceiros (bancos ou mercado de capitais). O capital é dividido em ações, não em cotas. Pode ser de capital fechado (ações não negociadas em bolsa) ou aberto (listada na B3 — bolsa de valores brasileira). Empresas de capital aberto têm obrigações extras de transparência: publicação de demonstrações financeiras auditadas, informes de fatos relevantes à CVM (Comissão de Valores Mobiliários) e realização de assembleias de acionistas. O CNPJ — Cadastro Nacional de Pessoa Jurídica — é o número de identificação fiscal obrigatório para qualquer empresa no Brasil, emitido pela Receita Federal. Sem CNPJ, é ilegal operar comercialmente.",
          "Contratos empresariais são instrumentos legais que formalizam acordos entre partes. Para ser válido, um contrato precisa de: Partes capazes (maiores de 18 anos ou representantes legais de empresas), Objeto lícito (não pode contratar para fazer algo ilegal), Forma prescrita em lei (alguns contratos exigem escritura pública — como compra e venda de imóveis) e Manifestação de vontade livre (sem coação). Contratos empresariais mais comuns: Contrato de Prestação de Serviços, Contrato de Fornecimento, Contrato de Locação Comercial, Contrato de Distribuição, Contrato de Franquia e Acordo de Confidencialidade (NDA). Cláusulas essenciais que todo contrato deve ter: objeto (o que está sendo contratado), prazo, valor e forma de pagamento, obrigações de cada parte, consequências do descumprimento (multas) e foro de eleição (qual comarca resolve disputas)."
        ]
      },
      {
        id: "o-que-pode-nao-pode",
        title: "O Que Você Pode e Não Pode Fazer: Proibições e Multas",
        xpReward: 80,
        content: [
          "Concorrência desleal é uma prática ilegal que prejudica outros competidores por meios antiéticos ou ilegais. A Lei 9.279/1996 (Lei de Propriedade Industrial) e a Lei 12.529/2011 (Lei de Defesa da Concorrência) protegem o mercado. Práticas ilegais incluem: (a) Divulgar informações falsas sobre um concorrente para prejudicá-lo — multa de até R$5 milhões e responsabilidade civil por danos; (b) Usar marca ou nome comercial parecido com o de outra empresa para confundir consumidores (confusão de marcas) — crime com pena de detenção de 3 meses a 1 ano e multa; (c) Desviar clientela por meios fraudulentos — indenização por danos materiais e morais; (d) Praticar dumping (vender abaixo do custo para eliminar concorrentes) — pode ser investigado pelo CADE (Conselho Administrativo de Defesa Econômica) com multas de até 20% do faturamento.",
          "Publicidade enganosa e abusiva é proibida pelo Código de Defesa do Consumidor (CDC — Lei 8.078/1990) e fiscalizada pelo Procon e pelo CONAR (Conselho Nacional de Autorregulamentação Publicitária). Publicidade enganosa é qualquer comunicação que contenha informação falsa ou que, mesmo verdadeira, seja apresentada de forma que induza o consumidor ao erro. Exemplos: anunciar 'desconto de 50%' quando o preço base foi artificialmente inflado dias antes; exibir fotos de produto que não correspondem ao produto real; omitir informações relevantes como taxas adicionais em financiamentos. A multa do Procon varia de R$400 a R$7,7 milhões dependendo da gravidade e do porte da empresa. Além da multa, o fornecedor é obrigado a corrigir a publicidade e pode ser obrigado a ressarcir todos os consumidores afetados.",
          "Uso indevido de propriedade intelectual é crime e gera pesadas indenizações. No Brasil, a Lei 9.610/1998 (Lei de Direitos Autorais) protege obras criativas, e a Lei 9.279/1996 protege marcas e patentes. Usar a logo, nome, slogan, música, fotografia ou software de terceiros sem autorização é: (a) Para uso comercial: crime de violação de direito autoral com pena de 2 a 4 anos de reclusão e multa; (b) Na internet: o Marco Civil da Internet (Lei 12.965/2014) responsabiliza empresas por conteúdo infrator hospedado em seus servidores. Uma marca registrada no INPI (Instituto Nacional de Propriedade Industrial) dá ao titular o direito exclusivo de uso em todo o território nacional por 10 anos, renovável indefinidamente. Registrar a marca custa entre R$355 e R$710 por classe de produto ou serviço — um investimento pequeno diante dos riscos de não registrar.",
          "Tributação é uma obrigação inegociável e a sonegação fiscal é crime tipificado na Lei 8.137/1990 com pena de 2 a 5 anos de reclusão. Os principais impostos que uma empresa deve recolher: IRPJ (Imposto de Renda da Pessoa Jurídica — 15% + adicional de 10% sobre lucros acima de R$20.000/mês no Lucro Real), CSLL (Contribuição Social sobre o Lucro Líquido — 9%), PIS/COFINS (contribuições sobre faturamento — 3,65% no regime cumulativo ou 9,25% no não-cumulativo), ISS (Imposto Sobre Serviços — 2% a 5%, municipal, para empresas prestadoras de serviço), ICMS (Imposto sobre Circulação de Mercadorias — alíquota variável por estado, de 12% a 25%, para comércio e indústria). O não recolhimento de impostos gera: multa de 75% do valor devido + juros SELIC, inscrição em dívida ativa, execução fiscal e, em casos graves, responsabilização criminal dos sócios-administradores."
        ]
      }
    ]
  },

  {
    id: "gestao-pessoas-clt",
    journeyId: "gestao-estrategica",
    title: "Gestão de Pessoas e CLT",
    subtitle: "Direitos trabalhistas, o que o empregador pode e não pode fazer, e como evitar passivos",
    emoji: "👥",
    color: "#2563eb",
    bgGradient: "from-blue-600 to-indigo-700",
    order: 17,
    tier: 2,
    tierLabel: "Intermediário",
    tierEmoji: "📊",
    tierColor: "#2563eb",
    reviewConcepts: ["CLT", "FGTS", "INSS", "Rescisão", "Assédio", "PDI", "Turnover"],
    bossQuote: "Cuide bem dos seus funcionários e eles vão cuidar bem dos seus clientes. — Richard Branson",
    nextModuleTeaser: "Próximo: aprenda a ler e interpretar os resultados financeiros de uma empresa com profundidade.",
    lessons: [
      {
        id: "contratos-trabalho",
        title: "Contratos de Trabalho: CLT, PJ, Estágio e Aprendiz",
        xpReward: 80,
        content: [
          "O contrato de trabalho define a relação entre empregador e empregado. No Brasil, existem quatro modalidades principais. O contrato CLT (Consolidação das Leis do Trabalho — Decreto-Lei 5.452/1943) é o mais comum e protegido: garante ao trabalhador carteira assinada, FGTS (8% do salário bruto depositado mensalmente pelo empregador), INSS (de 7,5% a 14% do salário, descontado do funcionário), 13º salário (pago em duas parcelas: até 30/novembro e até 20/dezembro), férias de 30 dias por ano acrescidas de 1/3, hora extra com adicional mínimo de 50% (ou 100% em feriados), vale-transporte (descontado até 6% do salário do funcionário) e adicional noturno de 20% para quem trabalha após as 22h. O contrato pode ser por prazo determinado (máximo de 2 anos) ou indeterminado.",
          "O contrato PJ (Pessoa Jurídica) não é um contrato de emprego — é um contrato de prestação de serviços entre duas empresas. O prestador emite nota fiscal pelo serviço, paga seus próprios impostos (Simples Nacional, MEI ou IRPF) e não tem os direitos trabalhistas da CLT. É legal quando existe autonomia real: o prestador define seus próprios horários, usa seus próprios equipamentos e pode recusar demandas específicas. O que é ilegal é o contrato PJ disfarçado — quando, na prática, existe subordinação (horário fixo, metas impostas, exclusividade de cliente) mas a empresa foge dos encargos trabalhistas contratando como PJ. Isso é chamado de 'pejotização ilegal' e, quando caracterizado, gera reconhecimento de vínculo empregatício pela Justiça do Trabalho, com pagamento retroativo de todos os direitos mais multa de 40% sobre o FGTS.",
          "O contrato de estágio é regido pela Lei 11.788/2008 e não é contrato de emprego — é um instrumento de aprendizado prático. O estagiário não tem FGTS, 13º nem férias com 1/3 (só tem 30 dias de recesso remunerado por ano). A empresa paga bolsa-auxílio (obrigatória apenas para estágio não-obrigatório), vale-transporte e, opcionalmente, outros benefícios. A carga horária máxima é 6 horas diárias e 30 horas semanais para estudantes do ensino superior, ou 4 horas para ensino médio. O estágio deve ter relação com o curso do estudante e a empresa precisa de um supervisor designado. A duração máxima é 2 anos no mesmo empregador. O contrato de aprendiz (Lei 10.097/2000) é voltado para jovens de 14 a 24 anos e exige matrícula em curso de aprendizagem profissional (SENAI, SENAC etc.). Empresas com mais de 7 funcionários são obrigadas a contratar aprendizes numa cota de 5% a 15% do quadro de funcionários de cargos que exigem formação profissional.",
          "O processo de demissão é um dos momentos de maior risco legal para o empregador. Na demissão sem justa causa (iniciativa do empregador sem motivo disciplinar), o funcionário recebe: saldo de salário proporcional, 13º proporcional, férias vencidas e proporcionais com 1/3, aviso prévio (30 dias + 3 dias por ano de empresa, máximo de 90 dias) e multa de 40% sobre o saldo do FGTS. Na demissão por justa causa (falta grave do funcionário — embriaguez, abandono de emprego, improbidade, violência), o funcionário perde o aviso prévio, a multa do FGTS e o seguro-desemprego. A justa causa deve ser provada documentalmente — uma justa causa mal fundamentada pode ser revertida na Justiça do Trabalho, resultando em condenação ao pagamento de todos os direitos acrescidos de indenizações. Sempre documente advertências e suspensões antes de uma justa causa."
        ]
      },
      {
        id: "obrigacoes-proibicoes-rh",
        title: "O Que o Empregador Pode e Não Pode Fazer",
        xpReward: 75,
        content: [
          "Assédio moral é a exposição repetida e prolongada do trabalhador a situações humilhantes, constrangedoras ou vexatórias relacionadas ao trabalho. Exemplos concretos: gritar com funcionários, ridicularizá-los na frente dos colegas, dar metas impossíveis propositalmente, ignorar sistematicamente suas contribuições ou isolá-los do grupo. Não é assédio moral uma cobrança firme por resultados, críticas construtivas sobre o trabalho ou a aplicação de penalidades previstas em regulamento. O assédio moral não é tipificado como crime federal no Brasil (há projetos de lei tramitando), mas gera responsabilidade civil e trabalhista: indenização por danos morais de R$5.000 a R$50.000 ou mais, dependendo da gravidade. Empresas podem ser responsabilizadas por assédio praticado por gestores, mesmo sem a cumplicidade da diretoria. Por isso, o treinamento de liderança e os canais de denúncia internos são essenciais.",
          "Assédio sexual é o constrangimento de alguém com o intuito de obter vantagem sexual, prevalecendo-se o agente de sua condição de superior hierárquico ou ascendência inerentes ao exercício de emprego. É crime tipificado no artigo 216-A do Código Penal com pena de 1 a 2 anos de detenção (podendo dobrar se a vítima for menor de 18 anos). A empresa pode ser responsabilizada civilmente por danos morais se não tomar providências ao tomar conhecimento da situação. Toda empresa deve ter uma política formal de combate ao assédio, canal de denúncia confidencial e protocolo de investigação e punição. O não cumprimento expõe a empresa a ações trabalhistas e à responsabilização perante o Ministério do Trabalho e Emprego.",
          "Monitoramento de funcionários tem limites legais claros. O empregador pode: monitorar e-mails corporativos (desde que comunique isso ao funcionário previamente), instalar câmeras de segurança em áreas comuns de trabalho (não em banheiros ou vestiários, o que constitui crime), registrar o ponto eletrônico (obrigatório para empresas com mais de 20 funcionários, conforme portaria MTE 1.510/2009), e acompanhar o uso de equipamentos da empresa durante o horário de trabalho. O que não pode: monitorar o celular pessoal do funcionário, instalar câmeras em áreas privativas, exigir exame de polígrafo (detector de mentiras — vedado pelo TST), discriminar na contratação ou promoção por raça, sexo, religião, orientação sexual, deficiência ou estado civil (Lei 9.029/1995 — pena de 1 a 2 anos de reclusão mais multa).",
          "A folha de pagamento é um dos processos mais complexos e críticos do RH. Um erro na folha gera multas, processos trabalhistas e desconfiança dos funcionários. As principais obrigações do empregador: (a) Depositar o FGTS até o dia 7 do mês seguinte — multa de 5% sobre o valor não depositado; (b) Recolher o INSS (patronal: 20% sobre salário, mais SAT de 1% a 3% e TERCEIROS de 5,8%) até o dia 20 do mês seguinte — multa de 2% sobre o valor devido por mês de atraso; (c) Entregar o eSocial (Sistema de Escrituração Digital das Obrigações Fiscais, Previdenciárias e Trabalhistas) — plataforma digital do governo que unifica todas as obrigações trabalhistas; (d) Entregar a RAIS (Relação Anual de Informações Sociais) anualmente — multa de R$425 a R$42.500 por atraso ou erros. O custo real de um funcionário CLT para a empresa é de 1,7 a 2,0 vezes o salário bruto, considerando todos os encargos sociais."
        ]
      }
    ]
  },

  {
    id: "financas-corporativas-avancado",
    journeyId: "gestao-estrategica",
    title: "Finanças Corporativas Avançadas",
    subtitle: "Indicadores de performance, valuation e como tomar decisões financeiras estratégicas",
    emoji: "📊",
    color: "#2563eb",
    bgGradient: "from-blue-600 to-indigo-700",
    order: 18,
    tier: 2,
    tierLabel: "Intermediário",
    tierEmoji: "📊",
    tierColor: "#2563eb",
    reviewConcepts: ["WACC", "Valuation", "DCF", "ROI", "Capital de Giro", "EBITDA"],
    bossQuote: "O preço é o que você paga. O valor é o que você recebe. — Warren Buffett",
    nextModuleTeaser: "Você concluiu a trilha Intermediária. Agora entra em território avançado: Liderança Corporativa.",
    lessons: [
      {
        id: "indicadores-financeiros-avancados",
        title: "Indicadores Financeiros que Gestores Precisam Dominar",
        xpReward: 85,
        content: [
          "O EBITDA (Earnings Before Interest, Taxes, Depreciation and Amortization) é o principal indicador de eficiência operacional de uma empresa. Ele mede o lucro gerado pelas operações antes de itens que distorcem a comparação entre empresas: juros (que dependem da estrutura de capital), impostos (que variam por regime tributário), depreciação e amortização (que são gastos contábeis sem saída de caixa). Empresas de setores diferentes são comparadas por múltiplos de EBITDA: uma empresa do varejo pode valer 6-8x EBITDA; uma de tecnologia com crescimento rápido, 15-30x. O Nubank foi avaliado em mais de 100x EBITDA em seu IPO de 2021, refletindo as expectativas de crescimento do mercado de fintech brasileiro.",
          "O ROIC (Return on Invested Capital) mede quanto a empresa gera de retorno para cada real de capital investido na operação. É calculado como: NOPAT (Lucro Operacional após Impostos) ÷ Capital Investido. O Capital Investido é o Patrimônio Líquido mais a Dívida Líquida — essencialmente, todo o dinheiro que sócios e credores colocaram no negócio. Um ROIC superior ao WACC (custo médio ponderado de capital) significa que a empresa está gerando valor. Quando o ROIC é inferior ao WACC, a empresa destrói valor para seus acionistas mesmo sendo lucrativa em termos contábeis. Warren Buffett busca empresas com ROIC consistentemente alto como um dos principais critérios de investimento — empresas como Coca-Cola, Apple e Moody's mantêm ROIC de 20-50% ao ano por décadas.",
          "O capital de giro é o sangue que circula pelo corpo da empresa. Capital de Giro Líquido = Ativo Circulante − Passivo Circulante. Representa os recursos disponíveis para financiar o ciclo operacional: comprar matéria-prima, produzir, estocar, vender e receber. O Ciclo de Caixa (ou Ciclo de Conversão de Caixa) é o período entre o desembolso para compra de insumos e o recebimento das vendas: Prazo Médio de Estoques + Prazo Médio de Recebimento − Prazo Médio de Pagamento. Uma empresa que compra insumos e paga em 30 dias, produz em 15 dias, vende com prazo de 60 dias para receber, tem ciclo de caixa de 45 dias — precisa financiar 45 dias de operação sem entrada de receita. Reduzir o ciclo de caixa (negociar mais prazo com fornecedores, reduzir estoques, cobrar mais rápido) libera capital de giro sem necessidade de novos empréstimos.",
          "Valuation é o processo de determinar quanto vale uma empresa. Os métodos mais utilizados são: (a) Múltiplos de Mercado — comparar a empresa com transações recentes de empresas similares. Se empresas de e-commerce estão sendo vendidas por 2x Receita, sua empresa de e-commerce com R$10 milhões de receita vale aproximadamente R$20 milhões. (b) DCF (Discounted Cash Flow — Fluxo de Caixa Descontado) — projetar os fluxos de caixa futuros da empresa e trazê-los a valor presente usando o WACC como taxa de desconto. É o método mais rigoroso e mais usado em grandes transações e IPOs. (c) Patrimônio Líquido (ou valor contábil) — simplesmente o PL do balanço. É o método mais conservador e geralmente subestima empresas com ativos intangíveis como marca, base de clientes e tecnologia. O valuation de uma empresa startup é particularmente desafiador — como avaliar uma empresa sem histórico de lucro? O mercado usa métricas como ARR (Receita Recorrente Anual), NRR (Net Revenue Retention) e taxa de crescimento MoM."
        ]
      }
    ]
  },

  // ─── LIDERANÇA CORPORATIVA (Avançado) ─────────────────────────────────────

  {
    id: "compliance-lgpd",
    journeyId: "lideranca-corporativa",
    title: "Compliance e Proteção de Dados",
    subtitle: "LGPD, transparência corporativa e como evitar multas milionárias",
    emoji: "🛡️",
    color: "#d97706",
    bgGradient: "from-amber-500 to-orange-600",
    order: 19,
    tier: 3,
    tierLabel: "Avançado",
    tierEmoji: "🔭",
    tierColor: "#d97706",
    reviewConcepts: ["LGPD", "ANPD", "Compliance", "DPO", "Dado Sensível", "CADE"],
    bossQuote: "Privacidade não é algo que as pessoas querem. É algo de que as pessoas precisam. — Tim Cook",
    nextModuleTeaser: "Próximo: toda empresa enfrenta crises. Aprenda a agir nos momentos mais críticos para proteger reputação e operações.",
    lessons: [
      {
        id: "lgpd-completa",
        title: "LGPD na Prática: O Que Todo Gestor Precisa Saber",
        xpReward: 90,
        content: [
          "A Lei Geral de Proteção de Dados (Lei 13.709/2018 — LGPD), inspirada no GDPR europeu, entrou em vigor em setembro de 2020 com sanções a partir de agosto de 2021. Ela regula qualquer operação realizada com dados pessoais de pessoas naturais localizadas no Brasil, independentemente do meio ou do país sede da empresa. Dados pessoais são qualquer informação que identifique ou possa identificar uma pessoa: nome, CPF, endereço, e-mail, telefone, IP, cookies de navegação, localização, comportamento de compra. Dados pessoais sensíveis têm proteção reforçada: origem racial ou étnica, convicção religiosa, opinião política, filiação sindical, saúde, vida sexual, dado genético ou biométrico. Toda empresa que coleta, armazena, usa, compartilha ou exclui dados pessoais — o que é praticamente qualquer empresa — está sujeita à LGPD.",
          "As 10 bases legais da LGPD são as justificativas que autorizam o tratamento de dados. As mais usadas são: (a) Consentimento — o titular autoriza expressamente, de forma informada e inequívoca, para finalidade específica. Um checkbox 'Aceito receber comunicações' no cadastro é consentimento. Mas o consentimento pode ser revogado a qualquer momento. (b) Execução de contrato — necessário para cumprir o contrato com o titular, como processar o pagamento e entregar um pedido. (c) Legítimo interesse — quando o tratamento é necessário para interesses legítimos do controlador ou de terceiros, desde que não prejudique os direitos do titular — é a base mais complexa e exige documentação prévia (o LIA — Legitimate Interest Assessment). (d) Cumprimento de obrigação legal — quando a lei exige o tratamento, como guardar dados de funcionários para a Receita Federal.",
          "Os direitos do titular de dados estabelecidos pela LGPD: (1) Acesso — saber quais dados a empresa tem sobre ele; (2) Correção — corrigir dados incompletos ou incorretos; (3) Anonimização ou bloqueio — limitar o uso de dados desnecessários; (4) Portabilidade — receber seus dados em formato estruturado para usar em outro serviço; (5) Eliminação — solicitar a exclusão de dados tratados com base em consentimento; (6) Informação sobre compartilhamento — saber com quem a empresa compartilha seus dados; (7) Oposição — contestar o tratamento realizado sem base legal adequada. As empresas têm prazo de até 15 dias para responder às solicitações dos titulares. O não cumprimento pode gerar reclamações à ANPD (Autoridade Nacional de Proteção de Dados).",
          "As penalidades da LGPD são aplicadas pela ANPD e incluem: advertência com prazo para medidas corretivas; multa de até 2% do faturamento bruto da empresa no último exercício, limitada a R$50 milhões por infração; publicização da infração (dano reputacional); bloqueio dos dados pessoais tratados irregularmente; e, em casos graves, eliminação dos dados pessoais tratados de forma ilegal. O DPO (Data Protection Officer — Encarregado de Proteção de Dados) é o responsável pela conformidade com a LGPD na empresa. Não é obrigatório para todas as empresas (microempresas e startups em estágio inicial podem ser dispensadas), mas é fortemente recomendado para qualquer negócio que trate dados em larga escala. Além das sanções administrativas, incidentes de segurança (vazamentos) que afetem dados sensíveis ou um grande volume de dados devem ser comunicados à ANPD em prazo razoável — a demora na comunicação agrava as penalidades."
        ]
      },
      {
        id: "compliance-anticorrupcao",
        title: "Compliance, Anticorrupção e Ética Corporativa",
        xpReward: 90,
        content: [
          "Compliance (do inglês 'to comply' — cumprir) é o conjunto de políticas, processos e controles internos que garantem que uma empresa e seus colaboradores ajam em conformidade com leis, regulamentos e normas éticas. Um programa de compliance eficaz vai além de evitar multas — é um investimento em reputação, governança e sustentabilidade do negócio a longo prazo. Empresas com bom compliance atraem melhores investidores, clientes e talentos; pagam prêmios de seguro menores; e têm menos processos judiciais. Os pilares de um programa de compliance robusto: (1) Comprometimento da alta liderança (tone at the top); (2) Mapeamento e avaliação de riscos específicos do negócio; (3) Políticas e procedimentos claros; (4) Treinamento contínuo; (5) Canal de denúncias anônimas; (6) Monitoramento e auditorias periódicas; (7) Respostas a desvios.",
          "A Lei Anticorrupção (Lei 12.846/2013 — também chamada de Lei da Empresa Limpa) responsabiliza as pessoas jurídicas, de forma objetiva, por atos lesivos à administração pública nacional e estrangeira. Isso significa que a empresa pode ser punida mesmo sem provar que a diretoria sabia ou ordenou o ato corrupto — basta que um funcionário ou intermediário da empresa tenha cometido o ato em benefício da organização. As sanções incluem: multa de 0,1% a 20% do faturamento bruto do último exercício (mínimo de R$6.000 quando não for possível calcular o faturamento); publicação extraordinária da decisão condenatória; e dissolução compulsória da empresa em casos graves. O Acordo de Leniência permite que a empresa colabore com as investigações em troca de redução das penalidades — instrumento central nas investigações da Operação Lava Jato, onde empresas como Odebrecht, Braskem e JBS firmaram acordos bilionários.",
          "O Código de Conduta ou Código de Ética é o documento que estabelece os valores, princípios e regras de comportamento esperados de todos os colaboradores, prestadores e parceiros de negócio. Deve abordar: conflito de interesses (o que caracteriza e como reportar), política de presentes e hospitalidade (valor máximo aceitável — geralmente R$50 a R$300 dependendo da empresa e do setor), uso de ativos da empresa (equipamentos, dados, tempo), relações com o poder público (regras para interação com servidores e processos licitatórios), sustentabilidade e práticas ambientais, e tratamento de informações confidenciais. O Código deve ser assinado por todos os colaboradores na admissão e revisado anualmente. Não é um documento de gaveta — precisa ser vivido no dia a dia e reforçado por treinamentos e comunicação constante.",
          "O canal de denúncias (ou 'whistleblowing') é um mecanismo que permite que colaboradores, fornecedores e parceiros reportem irregularidades de forma anônima e segura. Empresas com mais de 50 colaboradores devem ter algum canal estruturado. As melhores práticas: canal externo operado por empresa terceirizada (garantia de anonimato e independência), disponível 24 horas por dia, com protocolo de investigação definido e prazos claros, e proteção formal ao denunciante contra represálias (garantida também pela Lei 13.608/2018 no contexto do setor público, com extensão de proteção ao privado pela jurisprudência). Empresas que punem denunciantes estão sujeitas a ações trabalhistas por dano moral e responsabilidade civil. Um canal bem estruturado detecta problemas antes que escalem para processos judiciais, investigações regulatórias ou crises de reputação pública."
        ]
      }
    ]
  },

  {
    id: "gestao-crise",
    journeyId: "lideranca-corporativa",
    title: "Gestão de Crise Empresarial",
    subtitle: "Como agir nos primeiros momentos, proteger a reputação e liderar sob pressão extrema",
    emoji: "🚨",
    color: "#d97706",
    bgGradient: "from-amber-500 to-orange-600",
    order: 20,
    tier: 3,
    tierLabel: "Avançado",
    tierEmoji: "🔭",
    tierColor: "#d97706",
    reviewConcepts: ["Crise Reputacional", "Stakeholders", "Recuperação Judicial", "Comunicação de Crise", "Resiliência"],
    bossQuote: "A medida de um homem não é onde ele está nos momentos de conforto, mas onde ele está em momentos de desafio e controvérsia. — Martin Luther King Jr.",
    nextModuleTeaser: "Próximo: aprenda a captar recursos para crescer — de bancos, investidores e mercado de capitais.",
    lessons: [
      {
        id: "tipos-crise-resposta",
        title: "Tipos de Crise e Como Responder nas Primeiras 24 Horas",
        xpReward: 90,
        content: [
          "Crises empresariais se classificam em quatro tipos principais: (1) Crise Financeira — fluxo de caixa negativo, inadimplência com credores, risco de insolvência. Causas típicas: queda abrupta de receita, expansão mal planejada, fraude contábil interna. (2) Crise Reputacional — evento que afeta negativamente a percepção pública da empresa. Causas: escândalo de produto defeituoso, comportamento inadequado de líderes, vazamento de dados, denúncia de prática antiética, campanha viral negativa. (3) Crise Operacional — falha grave em processos que paralisa ou degrada significativamente a operação. Causas: incêndio em fábrica, falha de sistema crítico de TI, recall de produto, acidente de trabalho fatal. (4) Crise Legal — processo judicial ou investigação regulatória que ameaça as operações ou a existência da empresa. Causas: ação coletiva de consumidores, investigação do CADE, processo trabalhista de grande escala, investigação criminal de gestores.",
          "As primeiras 24 horas de uma crise determinam 70% de como ela será percebida publicamente e o quanto de dano permanente ela causará. O protocolo de crise nas primeiras horas: (a) Confirme os fatos — não reaja a rumores; apure o que realmente aconteceu antes de qualquer comunicação externa. Uma comunicação incorreta nas primeiras horas é muito pior do que o silêncio temporário. (b) Acione a célula de crise — convoque CEO, Jurídico, Comunicação/RP, RH e os responsáveis operacionais pela área afetada. (c) Priorize as vítimas (se houver) — qualquer crise com vítimas exige que o cuidado com as pessoas seja absolutamente prioritário, antes de qualquer consideração financeira ou reputacional. (d) Avalie os públicos impactados — quem precisa ser comunicado? Em que ordem? Funcionários, clientes afetados, reguladores, parceiros e imprensa têm prioridades diferentes. (e) Defina um porta-voz único — mensagens contraditórias de fontes diferentes dentro da empresa amplificam o dano.",
          "O case da Americanas ilustra o que não fazer em uma crise. Em janeiro de 2023, o novo CEO Sérgio Rial anunciou uma inconsistência contábil de R$20 bilhões (que chegaria a R$43 bilhões) e pediu demissão após apenas 9 dias de empresa. A empresa entrou em recuperação judicial com uma das maiores dívidas da história corporativa brasileira. O que a Americanas errou: (1) A fraude existia há pelo menos dez anos — controles internos e auditores não a detectaram, ou foram omissos. (2) Quando o novo CEO descobriu, a saída abrupta sem um plano comunicado gerou pânico no mercado — as ações caíram 75% em dois dias. (3) A comunicação inicial foi insuficiente, gerando mais dúvidas do que respostas. O contraste: quando a Tylenol detectou sabotagem em frascos em 1982 nos EUA — casos de morte por cianeto — a Johnson & Johnson recolheu imediatamente 31 milhões de frascos do mercado antes de qualquer exigência regulatória. O gesto custou US$100 milhões mas salvou a marca. Tylenol recuperou 100% da participação de mercado em menos de um ano.",
          "A comunicação em crise tem regras distintas da comunicação regular. Princípios fundamentais: (a) Velocidade — comunique cedo, mesmo com informações incompletas, dizendo o que sabe e o que ainda está apurando. O silêncio cria vacuos que a especulação preenche. (b) Transparência — mentiras e omissões descobertas depois destroem a credibilidade de forma irreversível. A crise do produto é recuperável; a crise de credibilidade raramente é. (c) Empatia antes da defesa — antes de apresentar argumentos ou justificativas, demonstre que compreende o impacto sobre as pessoas afetadas. (d) Ação concreta — comunicação sem ação é vazia. Anuncie o que está sendo feito para resolver o problema e o que você vai fazer diferente para evitar a recorrência. (e) Acompanhamento — a crise não acaba no primeiro comunicado; atualize os públicos periodicamente até a situação ser resolvida."
        ]
      }
    ]
  },

  {
    id: "captacao-recursos-corp",
    journeyId: "lideranca-corporativa",
    title: "Captação de Recursos",
    subtitle: "Dívida, equity, venture capital, mercado de capitais e como financiar o crescimento",
    emoji: "💰",
    color: "#d97706",
    bgGradient: "from-amber-500 to-orange-600",
    order: 21,
    tier: 3,
    tierLabel: "Avançado",
    tierEmoji: "🔭",
    tierColor: "#d97706",
    reviewConcepts: ["VC", "IPO", "Debênture", "WACC", "Due Diligence", "Term Sheet"],
    bossQuote: "O dinheiro não é o objetivo — é o combustível. Saiba exatamente para onde está dirigindo antes de abastecer. — Mark Cuban",
    nextModuleTeaser: "Próximo: aprenda a expandir um negócio além das fronteiras do Brasil — estratégia global e internacionalização.",
    lessons: [
      {
        id: "divida-vs-equity",
        title: "Dívida vs. Equity: Como Escolher a Fonte de Capital Certa",
        xpReward: 90,
        content: [
          "Todo crescimento empresarial exige capital, e a escolha de como captá-lo é uma das decisões mais estratégicas que um gestor toma. Existem duas fontes fundamentais: dívida (capital de terceiros) e equity (capital próprio ou de novos sócios). A dívida — empréstimos bancários, linhas de crédito, debêntures — tem custo definido (a taxa de juros) e prazo de pagamento, mas não dilui a participação dos sócios. O equity — aporte de novos investidores em troca de participação societária — não tem obrigação de pagamento nem prazo, mas dilui os sócios existentes e traz novos stakeholders com voz na gestão. A decisão entre dívida e equity depende de: maturidade da empresa (startups sem fluxo de caixa previsível raramente conseguem dívida), custo do capital (se a taxa de juros é muito alta, equity pode ser mais barato no longo prazo), e planos de crescimento (se o crescimento requer capital que a dívida não comporta, equity é o caminho).",
          "O ecossistema de venture capital (VC) financia startups em troca de participação societária. As rodadas de investimento seguem uma progressão: Pré-Seed (R$100 mil a R$1 milhão — geralmente de anjos ou aceleradoras, para validar o modelo), Seed (R$1 a R$10 milhões — primeiros fundos de VC, para construir o produto e adquirir os primeiros clientes), Série A (R$10 a R$100 milhões — aceleração do crescimento com modelo validado), Série B em diante (escala agressiva, expansão geográfica). Em cada rodada, o fundo de VC recebe uma fatia da empresa (equity) em troca do capital. O termo 'valuation' nesse contexto é o valor acordado da empresa antes do aporte (pre-money). O Term Sheet é o documento que estabelece os termos básicos do investimento — participação, direitos preferenciais, cláusulas anti-diluição — antes da due diligence formal.",
          "O mercado de capitais oferece duas alternativas para empresas maduras: emissão de dívida (debêntures, CRIs, CRAs) e emissão de equity (IPO — abertura de capital). Debêntures são títulos de dívida emitidos pelas empresas e adquiridos por investidores no mercado. A empresa capta o recurso e paga juros (geralmente atrelados ao CDI ou IPCA) e devolve o principal no vencimento. Vantagem sobre empréstimos bancários: menores taxas para empresas de boa reputação, e prazos mais longos. O IPO (Initial Public Offering) é o processo pelo qual uma empresa abre seu capital na bolsa de valores, vendendo ações para investidores públicos. O processo é regulado pela CVM (Comissão de Valores Mobiliários) e exige: registro de companhia aberta, contratação de banco coordenador (banco de investimentos), elaboração do prospecto (documento detalhado sobre a empresa, riscos e uso dos recursos) e roadshow (apresentações para investidores institucionais). Empresas brasileiras que realizaram IPOs recentes: Nubank (2021 — NYSE, captou US$2,6 bilhões), Méliuz, Westwing e FRST.",
          "O BNDES (Banco Nacional de Desenvolvimento Econômico e Social) é o maior banco de desenvolvimento da América Latina e uma fonte importante de financiamento para empresas brasileiras. Suas linhas de crédito têm taxas abaixo do mercado (muitas atreladas à TLP — Taxa de Longo Prazo) e prazos longos. Principais programas: BNDES Finame (financiamento de máquinas e equipamentos), BNDES Inovação (para P&D e projetos tecnológicos), BNDES Proger Urbano (para micro e pequenas empresas — via agentes financeiros parceiros). A due diligence é o processo de investigação detalhada que compradores, investidores ou credores realizam antes de fechar um negócio. Ela analisa: aspectos financeiros (verificação dos demonstrativos, contratos, dívidas ocultas), jurídicos (processos em andamento, contratos, propriedade intelectual), operacionais (processos, tecnologia, contratos com clientes e fornecedores) e trabalhistas (passivos de RH, ações em andamento). Uma due diligence bem conduzida pode identificar riscos que justificam ajuste de preço ou até o cancelamento do negócio."
        ]
      }
    ]
  },

  {
    id: "estrategia-crescimento",
    journeyId: "lideranca-corporativa",
    title: "Estratégia de Crescimento e Expansão",
    subtitle: "Como escalar, entrar em novos mercados e competir globalmente",
    emoji: "🌍",
    color: "#d97706",
    bgGradient: "from-amber-500 to-orange-600",
    order: 22,
    tier: 3,
    tierLabel: "Avançado",
    tierEmoji: "🔭",
    tierColor: "#d97706",
    reviewConcepts: ["Internacionalização", "M&A", "Franquia", "Escala", "Pivot", "Greenfield"],
    bossQuote: "Se você quer ir rápido, vá sozinho. Se quer ir longe, vá acompanhado. — Provérbio Africano",
    nextModuleTeaser: "Você concluiu a trilha Avançada. Agora entre no nível Master — onde os grandes líderes globais operam.",
    lessons: [
      {
        id: "modos-crescimento",
        title: "Modos de Crescimento: Orgânico, M&A e Franquia",
        xpReward: 90,
        content: [
          "Crescimento orgânico é o crescimento gerado pelos recursos e esforços internos da própria empresa: mais vendas, novos produtos, novos mercados, mais eficiência operacional. É o modo mais controlado e menos arriscado, mas também o mais lento. Uma empresa pode crescer 20-30% ao ano organicamente em um mercado favorável — excepcional para uma empresa estabelecida. As alavancas do crescimento orgânico são: (a) Penetração de mercado — vender mais para os clientes atuais e capturar participação dos concorrentes com o mesmo produto; (b) Desenvolvimento de produto — criar novos produtos para os clientes atuais; (c) Desenvolvimento de mercado — levar os produtos atuais para novos mercados geográficos ou novos segmentos de clientes; (d) Diversificação — novos produtos para novos mercados (a mais arriscada das quatro).",
          "M&A (Mergers & Acquisitions — Fusões e Aquisições) é o caminho para crescimento acelerado. Uma fusão une duas empresas para criar uma nova entidade. Uma aquisição é quando uma empresa compra outra, que deixa de existir como entidade independente. As razões para M&A: (a) Aquisição de market share rapidamente — comprar um concorrente dobra ou triplica a participação de mercado instantaneamente; (b) Acesso a tecnologia ou propriedade intelectual — frequentemente mais rápido e barato do que desenvolver internamente (o Facebook comprou o Instagram por US$1 bilhão em 2012, economizando anos de desenvolvimento); (c) Aquisição de talentos ('acqui-hire') — comprar uma startup pelo seu time de engenharia ou design; (d) Integração vertical — comprar fornecedores (para garantir supply chain) ou distribuidores (para controlar o canal de venda). Os principais riscos de M&A: pagamento excessivo (overvaluation), integração cultural fracassada (60-70% das fusões destroem valor), e passivos ocultos não identificados na due diligence.",
          "A franquia é um modelo de expansão onde o franqueador (dono da marca) licencia seu modelo de negócio, marca e know-how para o franqueado, que paga uma taxa de franquia inicial e royalties mensais (geralmente 5-10% do faturamento bruto). Para o franqueador, é uma forma de expandir rapidamente com capital de terceiros (dos franqueados) e sem assumir os riscos operacionais de cada unidade. Para o franqueado, é a compra de um modelo testado com suporte contínuo. O Brasil tem o quarto maior mercado de franquias do mundo — mais de 170.000 unidades franqueadas e 160 bilhões de reais em faturamento anual (ABF, 2023). Marcas como Subway, McDonald's, O Boticário, Botica e Cacau Show demonstram a escala que o modelo permite. A Lei de Franquias (Lei 13.966/2019) exige que o franqueador entregue ao candidato a franqueado a COF (Circular de Oferta de Franquia) com no mínimo 10 dias de antecedência à assinatura de qualquer documento ou pagamento.",
          "A internacionalização de empresas brasileiras enfrenta desafios específicos: câmbio volátil, custo de logística internacional, regulações de cada país e adaptação cultural. Os modos de entrada em mercados internacionais — do menos ao mais intensivo em recursos: (a) Exportação direta ou indireta — menor risco, menor controle; (b) Licenciamento — cede o direito de uso da marca ou tecnologia a um parceiro local em troca de royalties; (c) Joint Venture — parceria com empresa local para compartilhar riscos e conhecimento do mercado; (d) Greenfield — abertura de operação própria do zero no país destino; (e) Aquisição de empresa local. Cases brasileiros de internacionalização bem-sucedida: WEG (motor elétrico) — presente em 135 países com fábricas em 11; Embraer — tornou-se terceira maior fabricante de aeronaves comerciais do mundo; Totvs — ERP dominante no Brasil, em expansão para América Latina; Havaianas — de sandália popular a ícone global de moda, presente em 80 países. O fator crítico em todos esses cases foi a paciência estratégica: internacionalização rápida é rara, mas internacionalização disciplinada e sustentada cria vantagens competitivas duradouras."
        ]
      }
    ]
  },
];

export function getModuleById(id: string): Module | undefined {
  return MODULES.find(m => m.id === id);
}

export function getLessonById(moduleId: string, lessonId: string): Lesson | undefined {
  const module = getModuleById(moduleId);
  return module?.lessons.find(l => l.id === lessonId);
}
