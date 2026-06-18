export interface Question {
  id: string;
  type: 'multiple' | 'truefalse' | 'fill';
  question: string;
  options?: string[];
  correct: string;
  explanation: string;
}

export interface Challenge {
  moduleId: string;
  questions: Question[];
}

export const CHALLENGES: Challenge[] = [
  {
    moduleId: "negocio",
    questions: [
      {
        id: "neg-1",
        type: "multiple",
        question: "O que define um negócio?",
        options: ["Ter muitos funcionários", "Criar valor para pessoas e receber dinheiro em troca", "Ter um prédio grande", "Vender apenas produtos físicos"],
        correct: "Criar valor para pessoas e receber dinheiro em troca",
        explanation: "Um negócio é qualquer organização que cria valor para as pessoas e recebe pagamento por isso — desde um carrinho de pipoca até a Petrobras!"
      },
      {
        id: "neg-2",
        type: "truefalse",
        question: "Um serviço é algo físico que você pode tocar e guardar.",
        options: ["Verdadeiro", "Falso"],
        correct: "Falso",
        explanation: "Serviço é uma ação realizada por alguém para você — como cortar cabelo ou dar aulas. Você não leva nada físico, mas recebe algo de valor."
      },
      {
        id: "neg-3",
        type: "multiple",
        question: "O que é o 'cliente' de uma empresa?",
        options: ["O dono da empresa", "O funcionário que trabalha mais", "A pessoa que compra o produto ou serviço", "O fornecedor de materiais"],
        correct: "A pessoa que compra o produto ou serviço",
        explanation: "Cliente é quem compra! Sem clientes, não há vendas e sem vendas, não há empresa. Por isso, entender o cliente é fundamental."
      },
      {
        id: "neg-4",
        type: "fill",
        question: "A Amazon começou como uma _____ online na garagem de Jeff Bezos.",
        options: ["livraria", "loja de roupas", "farmácia"],
        correct: "livraria",
        explanation: "Em 1994, Jeff Bezos fundou a Amazon como uma livraria online — tudo começou na garagem da sua casa! Hoje é uma das maiores empresas do mundo, vendendo de tudo."
      },
      {
        id: "neg-5",
        type: "multiple",
        question: "Qual é a ordem correta para criar um negócio?",
        options: [
          "Agir → Planejar → Ter ideia",
          "Planejar → Agir → Ter ideia",
          "Ter ideia → Planejar → Agir",
          "Ter ideia → Agir → Planejar"
        ],
        correct: "Ter ideia → Planejar → Agir",
        explanation: "Primeiro você percebe uma oportunidade (ideia), depois planeja como vai executar (planejamento) e então coloca em prática (ação). Pular etapas aumenta o risco de erro!"
      }
    ]
  },
  {
    moduleId: "financas",
    questions: [
      {
        id: "fin-1",
        type: "multiple",
        question: "Se você vende 10 brigadeiros a R$5 cada e gasta R$20 para produzi-los, qual é o seu lucro?",
        options: ["R$50", "R$20", "R$30", "R$70"],
        correct: "R$30",
        explanation: "Receita = 10 × R$5 = R$50. Custo = R$20. Lucro = R$50 - R$20 = R$30. Sempre lembre: lucro é o que SOBRA depois de pagar os custos!"
      },
      {
        id: "fin-2",
        type: "truefalse",
        question: "Receita e lucro são a mesma coisa.",
        options: ["Verdadeiro", "Falso"],
        correct: "Falso",
        explanation: "Receita é tudo que entra (vendas totais). Lucro é o que sobra depois de pagar todas as despesas. Uma empresa pode ter alta receita e ter prejuízo!"
      },
      {
        id: "fin-3",
        type: "multiple",
        question: "Qual destes é um exemplo de despesa FIXA?",
        options: ["Matéria-prima", "Embalagens", "Comissão de vendas", "Aluguel"],
        correct: "Aluguel",
        explanation: "Despesa fixa não muda com o volume de produção. O aluguel você paga todo mês, independente de ter vendido muito ou pouco. Matéria-prima, embalagens e comissões são variáveis!"
      },
      {
        id: "fin-4",
        type: "fill",
        question: "Orçamento é um _____ de quanto você pretende ganhar e gastar.",
        options: ["plano", "presente", "problema"],
        correct: "plano",
        explanation: "Orçamento é exatamente isso: um plano financeiro. Você prevê receitas e despesas antes de elas acontecerem, assim pode se organizar melhor!"
      },
      {
        id: "fin-5",
        type: "multiple",
        question: "Por que o mesmo café pode custar R$3 em uma padaria e R$18 num café chique?",
        options: [
          "O café chique usa ingredientes 6x mais caros",
          "É ilegal cobrar R$3 por café",
          "Por causa do valor percebido: ambiente, experiência e marca",
          "Café chique tem mais cafeína"
        ],
        correct: "Por causa do valor percebido: ambiente, experiência e marca",
        explanation: "Preço não é só custo — é também sobre o valor que o cliente percebe! O cliente paga mais pela experiência, pelo ambiente e pelo status, não pelo ingrediente."
      }
    ]
  },
  {
    moduleId: "marketing",
    questions: [
      {
        id: "mkt-1",
        type: "multiple",
        question: "O que significa os '4 Ps do Marketing'?",
        options: [
          "Pessoas, Poder, Progresso, Promoção",
          "Produto, Preço, Praça e Promoção",
          "Produto, Pagamento, Praça, Pessoa",
          "Planejamento, Produto, Praça, Promoção"
        ],
        correct: "Produto, Preço, Praça e Promoção",
        explanation: "Os 4 Ps são o mix de marketing: Produto (o que vende), Preço (quanto cobra), Praça (onde vende) e Promoção (como comunica). Juntos, formam uma estratégia completa!"
      },
      {
        id: "mkt-2",
        type: "truefalse",
        question: "Persona é um perfil fictício do cliente ideal de uma empresa.",
        options: ["Verdadeiro", "Falso"],
        correct: "Verdadeiro",
        explanation: "Persona é um personagem semi-fictício com nome, idade, hobbies e problemas. Ajuda a entender exatamente para quem a empresa faz o marketing — e torna tudo muito mais eficiente!"
      },
      {
        id: "mkt-3",
        type: "multiple",
        question: "A Coca-Cola é um exemplo de empresa que vende:",
        options: ["Apenas refrigerante", "Felicidade e experiências (não só bebida)", "Saúde e bem-estar", "Energia e força"],
        correct: "Felicidade e experiências (não só bebida)",
        explanation: "A genialidade do marketing da Coca-Cola é vender emoções, não apenas bebida. Os comerciais mostram família, festa, alegria — não os ingredientes do refrigerante."
      },
      {
        id: "mkt-4",
        type: "fill",
        question: "Contar histórias emocionantes no marketing se chama _____.",
        options: ["storytelling", "brainstorming", "benchmarking"],
        correct: "storytelling",
        explanation: "Storytelling é a arte de contar histórias para conectar emocionalmente com o público. Histórias são mais memoráveis que fatos — e muito mais convincentes para vender!"
      },
      {
        id: "mkt-5",
        type: "multiple",
        question: "Qual tipo de conteúdo funciona MELHOR nas redes sociais para negócios?",
        options: [
          "Propaganda direta o tempo todo",
          "Conteúdo que educa, entretém ou inspira",
          "Apenas fotos dos produtos",
          "Apenas preços e promoções"
        ],
        correct: "Conteúdo que educa, entretém ou inspira",
        explanation: "As pessoas não gostam de ser interrompidas por propagandas. Quando você oferece valor gratuitamente — dicas, histórias, inspiração — as pessoas confiam em você e ficam mais propensas a comprar!"
      }
    ]
  },
  {
    moduleId: "lideranca",
    questions: [
      {
        id: "lid-1",
        type: "multiple",
        question: "Qual é a principal diferença entre um chefe e um líder?",
        options: [
          "O chefe ganha mais dinheiro",
          "O líder tem mais funcionários",
          "O chefe manda, o líder inspira e orienta",
          "O líder trabalha menos horas"
        ],
        correct: "O chefe manda, o líder inspira e orienta",
        explanation: "O chefe usa autoridade para que as pessoas façam o que ele quer. O líder usa inspiração. A diferença é sutil mas enorme: pessoas seguem líderes por escolha, não por obrigação!"
      },
      {
        id: "lid-2",
        type: "truefalse",
        question: "Liderança é um talento que só algumas pessoas nascem tendo.",
        options: ["Verdadeiro", "Falso"],
        correct: "Falso",
        explanation: "Liderança é uma habilidade que se desenvolve! Todo grande líder aprendeu ao longo do tempo — praticando, cometendo erros, observando outros líderes e buscando melhorar."
      },
      {
        id: "lid-3",
        type: "multiple",
        question: "Segundo estudos, o que é mais importante para o sucesso de um líder?",
        options: [
          "Conhecimento técnico (85%) e habilidades interpessoais (15%)",
          "Habilidades interpessoais (85%) e conhecimento técnico (15%)",
          "Ambos têm peso igual (50% cada)",
          "Apenas o conhecimento técnico importa"
        ],
        correct: "Habilidades interpessoais (85%) e conhecimento técnico (15%)",
        explanation: "Pesquisas da Harvard mostram que 85% do sucesso de um líder vem de habilidades com pessoas: comunicação, empatia, motivação. Apenas 15% vem de conhecimento técnico!"
      },
      {
        id: "lid-4",
        type: "fill",
        question: "O líder _____ toma todas as decisões sozinho e exige que a equipe siga suas ordens.",
        options: ["autocrático", "democrático", "coach"],
        correct: "autocrático",
        explanation: "O líder autocrático centraliza as decisões. Funciona em emergências, mas no dia a dia sufoca a criatividade e o engajamento da equipe."
      },
      {
        id: "lid-5",
        type: "multiple",
        question: "O que é 'escuta ativa'?",
        options: [
          "Ouvir música enquanto trabalha",
          "Fingir que está ouvindo",
          "Prestar atenção genuína ao que o outro diz, sem pensar na resposta",
          "Gravar o que as pessoas falam"
        ],
        correct: "Prestar atenção genuína ao que o outro diz, sem pensar na resposta",
        explanation: "Escuta ativa é uma das habilidades mais raras e valiosas! Quando você realmente ouve alguém — sem já pensar na sua resposta — a pessoa se sente valorizada e confiante."
      }
    ]
  },
  {
    moduleId: "planejamento",
    questions: [
      {
        id: "plan-1",
        type: "multiple",
        question: "O que é uma meta SMART?",
        options: [
          "Uma meta muito difícil de atingir",
          "Uma meta específica, mensurável, atingível, relevante e com prazo",
          "Uma meta que só os mais inteligentes fazem",
          "Uma meta que usa tecnologia"
        ],
        correct: "Uma meta específica, mensurável, atingível, relevante e com prazo",
        explanation: "SMART é a sigla: Specific (específico), Measurable (mensurável), Achievable (atingível), Relevant (relevante) e Time-bound (com prazo). Uma meta vaga é só um sonho!"
      },
      {
        id: "plan-2",
        type: "truefalse",
        question: "'Quero vender mais' é um exemplo de meta SMART.",
        options: ["Verdadeiro", "Falso"],
        correct: "Falso",
        explanation: "É uma meta vaga! Uma meta SMART seria: 'Quero aumentar as vendas em 30% até 31 de dezembro através de campanhas no Instagram.' Tem número, prazo e estratégia!"
      },
      {
        id: "plan-3",
        type: "multiple",
        question: "O que a análise SWOT avalia?",
        options: [
          "Vendas, Wajax, Operações e Tempo",
          "Forças, Fraquezas, Oportunidades e Ameaças",
          "Salários, Trabalho, Objetivos e Tecnologia",
          "Sistema, Work, Organização e Times"
        ],
        correct: "Forças, Fraquezas, Oportunidades e Ameaças",
        explanation: "SWOT = Strengths (Forças), Weaknesses (Fraquezas), Opportunities (Oportunidades), Threats (Ameaças). Ajuda a entender a empresa por dentro e por fora!"
      },
      {
        id: "plan-4",
        type: "fill",
        question: "A estratégia da Apple foi criada por Steve _____ quando ele voltou à empresa em 1997.",
        options: ["Jobs", "Gates", "Bezos"],
        correct: "Jobs",
        explanation: "Em 1997, com a Apple quase falindo, Steve Jobs criou uma estratégia clara: poucos produtos, design excepcional, público específico. Essa estratégia a tornou a empresa mais valiosa do mundo!"
      },
      {
        id: "plan-5",
        type: "multiple",
        question: "O que significa o '5W2H' no plano de ação?",
        options: [
          "5 wins e 2 hints (dicas)",
          "What, Why, Who, When, Where + How e How much",
          "5 objetivos e 2 hipóteses",
          "5 semanas e 2 horas de trabalho"
        ],
        correct: "What, Why, Who, When, Where + How e How much",
        explanation: "O 5W2H é uma ferramenta: O quê? Por quê? Quem? Quando? Onde? Como? Quanto custa? Responder essas perguntas para cada ação garante que nada seja esquecido no planejamento!"
      }
    ]
  },
  {
    moduleId: "inovacao",
    questions: [
      {
        id: "inov-1",
        type: "multiple",
        question: "O que é inovação disruptiva?",
        options: [
          "Melhorar um produto existente gradualmente",
          "Criar algo novo que muda completamente um setor",
          "Reduzir o preço de um produto",
          "Fazer propaganda de um produto"
        ],
        correct: "Criar algo novo que muda completamente um setor",
        explanation: "Inovação disruptiva transforma completamente um mercado! O Uber disruptou os táxis, o Airbnb disruptou hotéis, o Netflix disruptou videolocadoras. Nada mais é igual depois!"
      },
      {
        id: "inov-2",
        type: "truefalse",
        question: "A Kodak inventou a câmera digital mas não quis lançá-la por medo de prejudicar seu negócio de filmes.",
        options: ["Verdadeiro", "Falso"],
        correct: "Verdadeiro",
        explanation: "Essa é uma das histórias mais trágicas dos negócios! A Kodak inventou a câmera digital em 1975 mas escondeu a tecnologia. Quando as câmeras digitais dominaram, a Kodak faliu. Inovar é necessidade!"
      },
      {
        id: "inov-3",
        type: "multiple",
        question: "O que é um MVP?",
        options: [
          "Most Valuable Player (jogador mais valioso)",
          "Mínimo Produto Viável — versão inicial para testar a ideia",
          "Máximo Produto Vendido",
          "Modelo Padrão de Vendas"
        ],
        correct: "Mínimo Produto Viável — versão inicial para testar a ideia",
        explanation: "MVP é a versão mais simples do produto que ainda pode ser testada com clientes reais. O objetivo é aprender rápido sem gastar muito. 'Falhe rápido e barato para aprender rápido!'"
      },
      {
        id: "inov-4",
        type: "fill",
        question: "O _____ é uma técnica criativa onde um grupo gera muitas ideias livremente, sem julgamento.",
        options: ["brainstorming", "benchmarking", "balanceamento"],
        correct: "brainstorming",
        explanation: "Brainstorming (tempestade de ideias) é a técnica de gerar o máximo de ideias possível sem criticar nenhuma delas. Quantidade antes de qualidade — as melhores ideias surgem dessa liberdade!"
      },
      {
        id: "inov-5",
        type: "multiple",
        question: "O Nubank foi fundado porque seu fundador David Vélez ficou frustrado com:",
        options: [
          "A falta de tecnologia no Brasil",
          "O processo complicado e demorado para abrir conta em banco",
          "A ausência de aplicativos financeiros",
          "As altas taxas de internet"
        ],
        correct: "O processo complicado e demorado para abrir conta em banco",
        explanation: "David Vélez demorou meses para abrir uma conta bancária no Brasil e ficou indignado. Em vez de reclamar, criou o Nubank — hoje o maior banco digital do mundo, com mais de 100 milhões de clientes!"
      }
    ]
  },
  {
    moduleId: "clientes",
    questions: [
      {
        id: "cli-1",
        type: "multiple",
        question: "O que é 'lifetime value' (LTV) de um cliente?",
        options: [
          "A primeira compra que o cliente faz",
          "O valor total que o cliente gera durante toda a relação com a empresa",
          "O tempo que o cliente demora para comprar",
          "O desconto dado ao cliente fiel"
        ],
        correct: "O valor total que o cliente gera durante toda a relação com a empresa",
        explanation: "Um cliente que compra R$100/mês por 3 anos vale R$3.600 para a empresa. Por isso, manter um cliente existente é muito mais lucrativo que conquistar um novo!"
      },
      {
        id: "cli-2",
        type: "truefalse",
        question: "Manter um cliente existente custa até 7 vezes menos do que conquistar um novo.",
        options: ["Verdadeiro", "Falso"],
        correct: "Verdadeiro",
        explanation: "Verdade! Conquistar um cliente novo exige marketing, publicidade e muito esforço. Manter um cliente já existente é muito mais barato — e clientes fiéis ainda indicam para amigos!"
      },
      {
        id: "cli-3",
        type: "multiple",
        question: "O que é B2B?",
        options: [
          "Business to Baby (empresa para bebês)",
          "Business to Business (empresa comprando de empresa)",
          "Back to Business (voltar ao trabalho)",
          "Best to Buy (melhor para comprar)"
        ],
        correct: "Business to Business (empresa comprando de empresa)",
        explanation: "B2B = Business to Business: quando uma empresa vende para outra empresa. O fornecedor de ingredientes que vende para restaurantes é B2B. Já a pizzaria que vende para você é B2C (Business to Consumer)!"
      },
      {
        id: "cli-4",
        type: "fill",
        question: "O _____ mede a satisfação dos clientes perguntando: 'qual a probabilidade de você nos recomendar a um amigo?'",
        options: ["NPS", "MVP", "CEO"],
        correct: "NPS",
        explanation: "Net Promoter Score (NPS) é essa métrica simples e poderosa. Quem responde 9-10 são Promotores (fãs), 7-8 são Neutros e 0-6 são Detratores. Alto NPS = empresa amada pelos clientes!"
      },
      {
        id: "cli-5",
        type: "multiple",
        question: "Por que Jeff Bezos deixava uma cadeira vazia nas reuniões de diretoria?",
        options: [
          "Para quem chegasse atrasado",
          "Como símbolo do cliente, lembrando que decisões devem ser feitas pensando nele",
          "Era superstição pessoal dele",
          "Para o acionista principal da Amazon"
        ],
        correct: "Como símbolo do cliente, lembrando que decisões devem ser feitas pensando nele",
        explanation: "A cadeira vazia representava o cliente — a parte mais importante de qualquer reunião. Era um lembrete constante: todas as decisões da Amazon devem ser feitas pensando em quem compra!"
      }
    ]
  },
  {
    moduleId: "empreendedorismo",
    questions: [
      {
        id: "emp-1",
        type: "multiple",
        question: "O que significa 'empreender'?",
        options: [
          "Apenas abrir uma empresa formal",
          "Identificar oportunidades e criar algo novo, assumindo riscos",
          "Trabalhar como funcionário em grandes empresas",
          "Investir dinheiro em ações na bolsa"
        ],
        correct: "Identificar oportunidades e criar algo novo, assumindo riscos",
        explanation: "Empreender é muito mais que abrir empresa! É uma forma de pensar e agir — identificar oportunidades onde outros veem problemas e ter coragem de agir. Você pode empreender em qualquer lugar!"
      },
      {
        id: "emp-2",
        type: "truefalse",
        question: "Henry Ford, Walt Disney e Steve Jobs nunca falharam antes de atingir o sucesso.",
        options: ["Verdadeiro", "Falso"],
        correct: "Falso",
        explanation: "Todos eles falharam! Ford faliu duas vezes, Disney foi demitido por 'falta de criatividade' e Jobs foi demitido da própria Apple. O sucesso não é ausência de falhas — é continuar depois delas!"
      },
      {
        id: "emp-3",
        type: "multiple",
        question: "O que é 'pivotar' no contexto de startups?",
        options: [
          "Desistir do negócio e começar algo completamente diferente",
          "Mudar a direção estratégica mantendo o que foi aprendido",
          "Contratar um novo CEO para a empresa",
          "Abrir uma filial em outro país"
        ],
        correct: "Mudar a direção estratégica mantendo o que foi aprendido",
        explanation: "Pivotar é diferente de desistir! Você mantém a equipe, os aprendizados e a missão, mas muda o produto ou o mercado. O Instagram pivotou de um aplicativo complexo para focar apenas em fotos — e deu certo!"
      },
      {
        id: "emp-4",
        type: "fill",
        question: "A _____ de crescimento é a crença de que habilidades podem ser desenvolvidas com esforço e aprendizagem.",
        options: ["mentalidade", "garantia", "fórmula"],
        correct: "mentalidade",
        explanation: "Growth Mindset (mentalidade de crescimento) é a crença de que você pode melhorar qualquer habilidade! Em vez de 'eu não consigo', pense 'eu ainda não consigo'. Essa mentalidade transforma empreendedores!"
      },
      {
        id: "emp-5",
        type: "multiple",
        question: "Por que validar uma ideia de negócio antes de investir muito tempo e dinheiro?",
        options: [
          "Para copiar os concorrentes",
          "É obrigação legal no Brasil",
          "Para descobrir se as pessoas realmente pagariam pelo produto antes de construí-lo",
          "Para impressionar os investidores"
        ],
        correct: "Para descobrir se as pessoas realmente pagariam pelo produto antes de construí-lo",
        explanation: "Validar salva empreendedores de construir produtos que ninguém quer! Antes de investir tudo, teste a ideia com clientes reais. Muitas startups de sucesso mudaram completamente após a validação!"
      }
    ]
  },
  {
    moduleId: "analise-estrategica",
    questions: [
      {
        id: "aest-1",
        type: "multiple",
        question: "O poder de barganha dos compradores é ALTO quando:",
        options: [
          "Há muitos concorrentes e produtos fortemente diferenciados",
          "Há poucos compradores grandes e o produto é commodity",
          "O produto tem alto custo de mudança (switching cost)",
          "Há muitos compradores fragmentados e dispersos"
        ],
        correct: "Há poucos compradores grandes e o produto é commodity",
        explanation: "Poucos compradores + produto sem diferenciação = compradores ditam o preço! Vendedores de commodities (ferro, soja, aço) para grandes indústrias vivem isso. Diversificar clientes e diferenciar o produto são as saídas estratégicas."
      },
      {
        id: "aest-2",
        type: "truefalse",
        question: "Na análise SWOT, as Oportunidades e Ameaças representam fatores INTERNOS da empresa que ela pode controlar diretamente.",
        options: ["Verdadeiro", "Falso"],
        correct: "Falso",
        explanation: "Errado! Oportunidades e Ameaças são fatores EXTERNOS (mercado, concorrência, tecnologia, regulação). Forças e Fraquezas são fatores internos. A estratégia emerge do cruzamento: usar Forças para aproveitar Oportunidades e mitigar Fraquezas expostas a Ameaças."
      },
      {
        id: "aest-3",
        type: "multiple",
        question: "A Tesla tem margens brutas de 15-20% e a Toyota tem margens de 8-10%, mesmo vendendo em volumes muito maiores. Qual estratégia genérica de Porter a Tesla usa?",
        options: [
          "Liderança em custo (cost leadership)",
          "Diferenciação",
          "Foco em nicho de custo",
          "Estratégia híbrida (custo + diferenciação)"
        ],
        correct: "Diferenciação",
        explanation: "Tesla não compete em preço — compete em inovação, tecnologia, software e marca. Clientes pagam R$350.000+ por um Model S porque percebem valor único. Essa é diferenciação pura de Porter: cobrar prêmio por valor percebido superior."
      }
    ]
  },
  {
    moduleId: "financas-corporativas",
    questions: [
      {
        id: "fcorp-1",
        type: "multiple",
        question: "Uma empresa tem EBITDA de R$5M e o setor negocia em múltiplo de 8x EBITDA. Usando valuation por múltiplos, o valor estimado da empresa é:",
        options: ["R$5M", "R$8M", "R$40M", "R$13M"],
        correct: "R$40M",
        explanation: "Valuation por múltiplos: Valor = EBITDA × Múltiplo = R$5M × 8 = R$40M. Esse método rápido compara empresas similares do setor. O múltiplo certo depende do crescimento, risco e margens da empresa — é um ponto de partida, não um valor definitivo."
      },
      {
        id: "fcorp-2",
        type: "truefalse",
        question: "No Fluxo de Caixa Descontado (DCF), quanto maior a taxa de desconto (WACC), maior o valor presente da empresa.",
        options: ["Verdadeiro", "Falso"],
        correct: "Falso",
        explanation: "É o contrário! Taxa de desconto maior = fluxos futuros valem menos hoje. Uma empresa arriscada usa WACC alto, reduzindo seu valor estimado. Por isso startups sem receita têm valuations tão sensíveis a mudanças na taxa de juros do mercado."
      },
      {
        id: "fcorp-3",
        type: "fill",
        question: "O _____ mede o percentual de cada real de receita que sobra como lucro após descontar apenas os custos diretos de produção (CMV).",
        options: ["margem bruta", "EBITDA", "liquidez corrente"],
        correct: "margem bruta",
        explanation: "Margem Bruta = (Receita − CMV) / Receita. Se uma empresa fatura R$1M e o CMV é R$600k, a margem bruta é 40%. Ela mede eficiência produtiva antes das despesas operacionais. Software tem margens brutas de 70-90%; supermercados, de 20-25%."
      }
    ]
  },
  {
    moduleId: "lideranca-executiva",
    questions: [
      {
        id: "lexec-1",
        type: "multiple",
        question: "Jeff Bezos criou a regra da 'equipe das 2 pizzas' na Amazon. O objetivo era:",
        options: [
          "Reduzir gastos com alimentação nos escritórios",
          "Limitar o tamanho das equipes para maximizar agilidade e comunicação direta",
          "Garantir que todos os times almoçassem juntos diariamente",
          "Padronizar a cultura de informalidade da empresa"
        ],
        correct: "Limitar o tamanho das equipes para maximizar agilidade e comunicação direta",
        explanation: "Times pequenos (6-8 pessoas) tomam decisões mais rápidas, comunicam com menos ruído e têm maior responsabilidade. Grandes times geram burocracia, reuniões intermináveis e diluição de accountability. Menos cabeças, mais clareza!"
      },
      {
        id: "lexec-2",
        type: "truefalse",
        question: "OKRs são mais eficazes quando o time atinge 100% das metas consistentemente — pois isso prova que o sistema está funcionando.",
        options: ["Verdadeiro", "Falso"],
        correct: "Falso",
        explanation: "Andy Grove (inventor dos OKRs na Intel) definia que 70% de atingimento é 'sucesso' em OKRs. Se o time bate 100% sempre, as metas estão conservadoras demais. OKRs são para esticar — se não há risco de não atingir, o objetivo não é ambicioso o suficiente."
      },
      {
        id: "lexec-3",
        type: "multiple",
        question: "O conceito 'a cultura come a estratégia no café da manhã' (atribuído a Peter Drucker) significa:",
        options: [
          "Cultura e estratégia têm sempre o mesmo peso nas organizações",
          "Uma estratégia brilhante falha se a cultura da organização não a suportar",
          "O café da manhã coletivo é parte essencial da cultura de alta performance",
          "Estratégia deve ser definida pela liderança operacional, não pela alta direção"
        ],
        correct: "Uma estratégia brilhante falha se a cultura da organização não a suportar",
        explanation: "A Kodak tinha estratégia de inovação digital — mas sua cultura protegia o negócio de filmes. A Enron tinha 'integridade' escrita na parede — mas sua cultura real era fraude. Quando estratégia e cultura conflitam, a cultura vence. Sempre."
      }
    ]
  },
  {
    moduleId: "marketing-growth",
    questions: [
      {
        id: "mgrowth-1",
        type: "multiple",
        question: "Um SaaS tem CAC de R$500 e LTV de R$1.200 (12 meses × R$100/mês). A razão LTV/CAC é 2,4x. Como classificar isso?",
        options: [
          "Excelente — LTV muito acima do CAC",
          "Abaixo do ideal — empresas SaaS saudáveis buscam LTV/CAC ≥ 3x",
          "Crítico — a empresa está perdendo dinheiro em cada cliente",
          "Impossível avaliar sem dados do mercado"
        ],
        correct: "Abaixo do ideal — empresas SaaS saudáveis buscam LTV/CAC ≥ 3x",
        explanation: "LTV/CAC < 3x indica aquisição ineficiente ou churn alto demais. Com 2,4x, cada R$1 em aquisição retorna R$2,40 — mas depois de custos operacionais e de produto, a margem real pode não justificar a escala. Prioridade: aumentar retenção ou reduzir CAC."
      },
      {
        id: "mgrowth-2",
        type: "truefalse",
        question: "Growth Hacking é essencialmente sobre encontrar 'atalhos' antiéticos para crescer rapidamente sem investir em produto de qualidade.",
        options: ["Verdadeiro", "Falso"],
        correct: "Falso",
        explanation: "Growth Hacking é o uso criativo e baseado em dados de estratégias que combinam produto, marketing e engenharia. O Dropbox cresceu 3.900% com um programa de referência totalmente ético. O Hotmail adicionou uma assinatura simples e explodiu. Crescimento real requer produto real."
      },
      {
        id: "mgrowth-3",
        type: "fill",
        question: "O _____ é o percentual de usuários que cancelam ou deixam de usar o produto num determinado período — quando alto, inviabiliza o crescimento mesmo com forte aquisição.",
        options: ["churn", "NPS", "CAC"],
        correct: "churn",
        explanation: "Churn alto é o 'balde furado' do crescimento. Com 5% de churn mensal, em 14 meses você perdeu metade da base. Nenhuma estratégia de aquisição sustenta churn crônico. É por isso que o framework AARRR prioriza Retenção antes de Receita e Referral."
      }
    ]
  },
  {
    moduleId: "governanca-esg",
    questions: [
      {
        id: "gesg-1",
        type: "multiple",
        question: "O que é o segmento 'Novo Mercado' da B3 em termos de governança corporativa?",
        options: [
          "Um mercado financeiro criado recentemente pela bolsa brasileira",
          "O nível premium de listagem com maiores exigências: conselho independente, 100% tag along, apenas ações ordinárias",
          "Um índice que reúne as ações de melhor desempenho ESG",
          "Uma regulamentação exclusiva para startups abrirem capital"
        ],
        correct: "O nível premium de listagem com maiores exigências: conselho independente, 100% tag along, apenas ações ordinárias",
        explanation: "No Novo Mercado: ≥20% de conselheiros independentes, tag along de 100% (minoritários têm os mesmos direitos em venda do controle), apenas ações ordinárias (1 ação = 1 voto). Empresas que adotam captam capital mais barato — boa governança é ativo financeiro real."
      },
      {
        id: "gesg-2",
        type: "truefalse",
        question: "Greenwashing ocorre quando uma empresa genuinamente melhora sua performance ambiental mas ainda assim causa algum impacto negativo ao meio ambiente.",
        options: ["Verdadeiro", "Falso"],
        correct: "Falso",
        explanation: "Greenwashing é propaganda verde SEM mudanças reais nos processos. É a falsidade — marketing sustentável sem substância. Uma empresa que realmente melhora (ainda que imperfeitamente) está progredindo. Greenwashing é engano deliberado, não impacto residual de esforço genuíno."
      },
      {
        id: "gesg-3",
        type: "multiple",
        question: "Por que investidores institucionais de longo prazo (fundos de pensão) dão crescente importância ao 'G' (Governança) do ESG?",
        options: [
          "Por exigência legal específica da CVM no Brasil",
          "Má governança está associada a riscos de fraude e destruição de valor que afetam diretamente o retorno",
          "Governança é mais fácil de quantificar do que impactos ambientais",
          "Por pressão de ativistas climáticos internacionais"
        ],
        correct: "Má governança está associada a riscos de fraude e destruição de valor que afetam diretamente o retorno",
        explanation: "Enron, WorldCom, Americanas — os grandes escândalos têm raízes em falhas de governança. Fundos de pensão gerenciam capital de décadas e não podem perder tudo numa fraude. Governança forte reduz o risco de 'evento catastrófico' que destrói anos de retorno."
      }
    ]
  },
  {
    moduleId: "futuro-ia",
    questions: [
      {
        id: "futia-1",
        type: "multiple",
        question: "O ChatGPT atingiu 1 milhão de usuários em 5 dias e 100 milhões em 2 meses — o crescimento mais rápido da história. O principal fator foi:",
        options: [
          "Grande orçamento de marketing da OpenAI",
          "A IA generativa chegou ao ponto onde qualquer pessoa percebe seu valor imediatamente, sem treinamento",
          "Parceria exclusiva e obrigatória com Microsoft e Google",
          "Exigência de governos para que empresas adotassem IA"
        ],
        correct: "A IA generativa chegou ao ponto onde qualquer pessoa percebe seu valor imediatamente, sem treinamento",
        explanation: "É o 'momento iPhone' da IA: quando a tecnologia finalmente ficou acessível às massas. Diferente de IA anterior (que precisava de especialistas), qualquer pessoa conseguia usar e ver resultado em segundos. Isso é adoção viral orgânica em escala sem precedentes."
      },
      {
        id: "futia-2",
        type: "truefalse",
        question: "Plataformas como Uber e Airbnb possuem os principais ativos que oferecem — carros e imóveis — assim como hotéis possuem quartos e táxis possuem veículos.",
        options: ["Verdadeiro", "Falso"],
        correct: "Falso",
        explanation: "Esse é o paradoxo das plataformas! O Uber não tem carros, o Airbnb não tem imóveis, o iFood não tem restaurantes. O ativo delas é a plataforma, os dados e o efeito de rede. Esse modelo permite crescimento massivo sem investimento proporcional em ativos físicos."
      },
      {
        id: "futia-3",
        type: "fill",
        question: "O modelo de negócios onde o produto central é gratuito mas recursos premium são pagos se chama _____.",
        options: ["freemium", "assinatura", "marketplace"],
        correct: "freemium",
        explanation: "Freemium = free + premium. Spotify, LinkedIn, Dropbox e Duolingo usam esse modelo. A versão gratuita gera escala e hábito. Uma fração dos usuários converte para o pago. O desafio: a versão gratuita precisa ser boa o suficiente para viralizar, mas a paga boa o suficiente para converter."
      }
    ]
  },

  // ─── GESTÃO ESTRATÉGICA ───────────────────────────────────────────────────

  {
    moduleId: "setores-empresa",
    questions: [
      {
        id: "setemp-1",
        type: "multiple",
        question: "O que significa C-Suite dentro de uma empresa?",
        options: [
          "O conjunto de salas de reunião do andar executivo",
          "Os executivos de mais alto nível com 'Chief' no título (CEO, CFO, COO...)",
          "A área de atendimento ao cliente (Customer Suite)",
          "O departamento de tecnologia da informação"
        ],
        correct: "Os executivos de mais alto nível com 'Chief' no título (CEO, CFO, COO...)",
        explanation: "C-Suite vem de 'Chief'. CEO é o executivo-chefe, CFO cuida das finanças, COO das operações, CMO do marketing, CTO da tecnologia. Todos reportam diretamente ao CEO e definem a estratégia da empresa."
      },
      {
        id: "setemp-2",
        type: "truefalse",
        question: "Em uma estrutura matricial, cada funcionário reporta para apenas um gestor — o seu chefe funcional de área.",
        options: ["Verdadeiro", "Falso"],
        correct: "Falso",
        explanation: "Na estrutura matricial, o funcionário reporta para dois gestores simultaneamente: o funcional (da sua área, ex: gerente de marketing) e o de projeto (responsável pelo projeto em que está atuando). Isso aumenta a colaboração mas pode gerar conflito de prioridades."
      },
      {
        id: "setemp-3",
        type: "multiple",
        question: "Qual é o principal risco de uma empresa crescer de 50 para 300 funcionários sem revisar sua estrutura organizacional?",
        options: [
          "Os funcionários passam a trabalhar menos horas",
          "A empresa perde acesso ao Simples Nacional",
          "Surgem silos de informação — cada área cresce isolada e a comunicação entre departamentos quebra",
          "O CEO passa a ter menos poder de decisão automaticamente"
        ],
        correct: "Surgem silos de informação — cada área cresce isolada e a comunicação entre departamentos quebra",
        explanation: "Silos organizacionais são o maior inimigo do crescimento: Marketing não sabe o que Vendas prometeu, Operações não tem capacidade para o que Marketing vendeu, e o Financeiro descobre os problemas quando o caixa já está negativo. A reestruturação periódica é essencial."
      },
      {
        id: "setemp-4",
        type: "fill",
        question: "A reunião mensal onde todos os departamentos alinham previsões de vendas com capacidade operacional para os próximos 3-6 meses é chamada de _____.",
        options: ["S&OP", "OKR", "AGO"],
        correct: "S&OP",
        explanation: "S&OP (Sales & Operations Planning) é a reunião interfuncional que combate os silos. Marketing, Vendas, Operações e Financeiro alinham juntos: o que vamos vender, conseguimos produzir, e temos dinheiro para isso? Sem esse alinhamento, cada área otimiza o próprio resultado e a empresa perde eficiência global."
      },
      {
        id: "setemp-5",
        type: "multiple",
        question: "Por que um analista excelente que é promovido a gerente frequentemente tem dificuldade no novo cargo?",
        options: [
          "Porque gerentes ganham menos do que analistas seniores",
          "Porque ele continua fazendo trabalho técnico em vez de desenvolver as competências de coordenação, gestão de pessoas e planejamento do novo nível",
          "Porque gerentes precisam trabalhar menos horas por lei",
          "Porque a empresa normalmente corta os benefícios na promoção"
        ],
        correct: "Porque ele continua fazendo trabalho técnico em vez de desenvolver as competências de coordenação, gestão de pessoas e planejamento do novo nível",
        explanation: "É o 'paradoxo da promoção': a habilidade que te fez ser promovido não é a habilidade que você precisa no novo cargo. Um analista promovido precisa parar de 'fazer' e começar a 'liderar' — delegar, dar feedback, planejar, resolver conflitos. Quem não faz essa transição trava no nível gerencial."
      }
    ]
  },

  {
    moduleId: "diagnostico-empresa",
    questions: [
      {
        id: "diagno-1",
        type: "multiple",
        question: "Uma empresa tem Receita Líquida de R$1 milhão e Lucro Líquido de R$80.000. Qual é sua margem líquida?",
        options: ["80%", "8%", "0,8%", "12%"],
        correct: "8%",
        explanation: "Margem Líquida = Lucro Líquido ÷ Receita Líquida × 100 = R$80.000 ÷ R$1.000.000 × 100 = 8%. Significa que de cada R$100 vendidos, R$8 viram lucro. Margens líquidas variam muito por setor: supermercados operam com 1-3%, farmacêuticas com 15-25%, e empresas de software SaaS com 20-40%."
      },
      {
        id: "diagno-2",
        type: "truefalse",
        question: "Uma empresa pode ter lucro líquido positivo e mesmo assim quebrar por falta de caixa.",
        options: ["Verdadeiro", "Falso"],
        correct: "Verdadeiro",
        explanation: "Lucro contábil ≠ caixa disponível. Se a empresa vende a prazo (90 dias para receber) mas paga fornecedores à vista, ela pode ter lucro no papel e caixa negativo. Isso é chamado de 'armadilha do crescimento': quanto mais ela vende, mais precisa de capital de giro antes de receber. É a causa de falência de muitas empresas lucrativas."
      },
      {
        id: "diagno-3",
        type: "multiple",
        question: "O índice de liquidez corrente de uma empresa é 0,7. O que isso significa?",
        options: [
          "A empresa tem R$0,70 de ativo circulante para cada R$1,00 de dívida de curto prazo — sinal de alerta",
          "A empresa gera 70% de retorno sobre o capital investido",
          "70% dos clientes pagam as faturas em dia",
          "A empresa cresceu 70% no último trimestre"
        ],
        correct: "A empresa tem R$0,70 de ativo circulante para cada R$1,00 de dívida de curto prazo — sinal de alerta",
        explanation: "Índice de Liquidez Corrente = Ativo Circulante ÷ Passivo Circulante. Abaixo de 1,0 significa que a empresa não tem recursos suficientes para honrar seus compromissos de curto prazo — está tecnicamente ilíquida. Não necessariamente vai à falência amanhã, mas é um sinal grave que exige ação imediata."
      },
      {
        id: "diagno-4",
        type: "fill",
        question: "O NPS é calculado como porcentagem de promotores _____ porcentagem de detratores.",
        options: ["menos", "mais", "dividido pela"],
        correct: "menos",
        explanation: "NPS = % Promotores (nota 9-10) − % Detratores (nota 0-6). Neutros (7-8) não entram no cálculo. Um NPS de 50 significa que há 50 pontos percentuais mais promotores do que detratores. Acima de 50 é considerado excelente; abaixo de 0 indica crise de satisfação. Apple, Amazon e Nubank historicamente têm NPS acima de 70."
      },
      {
        id: "diagno-5",
        type: "multiple",
        question: "Uma empresa tem turnover anual de 35%. O que isso indica para a gestão?",
        options: [
          "Excelente — significa que 35% dos funcionários receberam promoção",
          "Normal — a CLT estabelece turnover de até 35% como saudável",
          "Preocupante — a empresa está perdendo mais que 1 em cada 3 funcionários por ano, o que custa caro em recontratação e treinamento",
          "Irrelevante — turnover só importa em empresas acima de 1.000 funcionários"
        ],
        correct: "Preocupante — a empresa está perdendo mais que 1 em cada 3 funcionários por ano, o que custa caro em recontratação e treinamento",
        explanation: "Turnover acima de 15% ao ano já é preocupante no Brasil. A 35%, a empresa está substituindo mais de um terço do quadro anualmente. O custo de cada reposição varia de 50% a 200% do salário anual do cargo (recrutamento, seleção, integração, curva de aprendizado). Além do custo financeiro, há perda de conhecimento e queda de produtividade."
      }
    ]
  },

  {
    moduleId: "empresa-sem-retorno",
    questions: [
      {
        id: "empret-1",
        type: "multiple",
        question: "Uma empresa tem custos fixos mensais de R$120.000 e margem de contribuição de R$40 por unidade. Qual é seu ponto de equilíbrio (break-even)?",
        options: ["3.000 unidades", "4.800 unidades", "2.000 unidades", "1.500 unidades"],
        correct: "3.000 unidades",
        explanation: "Break-even = Custos Fixos ÷ Margem de Contribuição Unitária = R$120.000 ÷ R$40 = 3.000 unidades. Abaixo de 3.000 unidades/mês a empresa opera no prejuízo; acima, começa a lucrar. Saber o break-even é o ponto de partida para qualquer decisão de metas de vendas."
      },
      {
        id: "empret-2",
        type: "truefalse",
        question: "Quando uma empresa entra em recuperação judicial, ela é obrigada a encerrar as operações e liquidar seus ativos.",
        options: ["Verdadeiro", "Falso"],
        correct: "Falso",
        explanation: "Recuperação judicial (Lei 11.101/2005) é o oposto de encerramento! A empresa continua operando enquanto apresenta um plano de reestruturação para seus credores. É uma proteção legal para empresas viáveis atravessarem uma crise financeira temporária. Falência, sim, implica encerramento — mas recuperação judicial é uma segunda chance."
      },
      {
        id: "empret-3",
        type: "multiple",
        question: "Qual das etapas abaixo está na ordem correta de um turnaround?",
        options: [
          "Crescimento → Reestruturação → Diagnóstico → Estabilização",
          "Estabilização → Diagnóstico → Reestruturação → Crescimento",
          "Diagnóstico → Estabilização → Crescimento → Reestruturação",
          "Reestruturação → Diagnóstico → Estabilização → Crescimento"
        ],
        correct: "Estabilização → Diagnóstico → Reestruturação → Crescimento",
        explanation: "A ordem importa muito! Primeiro você para a sangria (estabilização), depois entende a causa raiz (diagnóstico), depois faz as mudanças estruturais (reestruturação) e só então volta a crescer. Tentar crescer antes de estabilizar é como aumentar a velocidade com o motor pegando fogo."
      },
      {
        id: "empret-4",
        type: "fill",
        question: "A ferramenta que encontra a causa raiz de um problema perguntando 'por quê?' repetidamente até chegar à origem do problema é chamada de análise dos _____ porquês.",
        options: ["5", "3", "7"],
        correct: "5",
        explanation: "Os '5 Porquês' foram criados por Taiichi Ohno na Toyota. Cada resposta vira a próxima pergunta. Exemplo: 'A empresa não lucra' → Por quê? 'Custos altos' → Por quê? 'Contratamos sem projeto aprovado' → Por quê? 'Sem processo de aprovação' → Por quê? 'Nunca foi formalizado' → Por quê? 'Gestão informal desde a fundação'. Causa raiz: ausência de processos formais."
      },
      {
        id: "empret-5",
        type: "multiple",
        question: "Na análise de portfólio BCG, um produto com alta participação de mercado em um setor de crescimento lento (maduro) é classificado como:",
        options: ["Estrela", "Ponto de Interrogação", "Vaca Leiteira", "Abacaxi"],
        correct: "Vaca Leiteira",
        explanation: "Vaca Leiteira: alta participação + mercado maduro (crescimento lento). Gera caixa de forma consistente com baixo investimento — é o 'motor de caixa' da empresa. Esse dinheiro deve financiar as Estrelas (alto crescimento) e avaliar os Pontos de Interrogação. Abacaxis (baixa participação + mercado em declínio) geralmente devem ser descontinuados."
      }
    ]
  },

  {
    moduleId: "direito-empresarial",
    questions: [
      {
        id: "diremp-1",
        type: "multiple",
        question: "Um sócio de uma LTDA pode perder seus bens pessoais para pagar dívidas da empresa? Em qual situação?",
        options: [
          "Nunca — a responsabilidade é sempre limitada ao valor das cotas",
          "Sempre — qualquer dívida da empresa pode ser cobrada dos sócios",
          "Sim, quando há confusão patrimonial (mistura do dinheiro pessoal com o da empresa) ou má-fé comprovada",
          "Somente quando a empresa deve impostos à Receita Federal"
        ],
        correct: "Sim, quando há confusão patrimonial (mistura do dinheiro pessoal com o da empresa) ou má-fé comprovada",
        explanation: "A responsabilidade limitada da LTDA protege os sócios em condições normais. Mas o juiz pode aplicar a 'desconsideração da personalidade jurídica' (art. 50 do Código Civil) quando há abuso: confundir o patrimônio pessoal com o da empresa, ou cometendo fraude. Por isso, nunca misture sua conta pessoal com a da empresa!"
      },
      {
        id: "diremp-2",
        type: "truefalse",
        question: "Uma empresa pode anunciar um produto com preço incorreto por erro no site e se recusar a honrar esse preço ao consumidor.",
        options: ["Verdadeiro", "Falso"],
        correct: "Falso",
        explanation: "O CDC (Lei 8.078/1990) determina que o fornecedor é obrigado a cumprir o preço anunciado, mesmo que seja fruto de erro. O consumidor pode exigir o produto pelo preço exibido, aceitar a devolução do valor já pago, ou escolher outro produto equivalente. Ignorar isso configura prática abusiva e sujeita a empresa a multa do Procon."
      },
      {
        id: "diremp-3",
        type: "multiple",
        question: "Qual é a pena para sonegação fiscal no Brasil (Lei 8.137/1990)?",
        options: [
          "Apenas multa administrativa — não há pena criminal",
          "Advertência formal da Receita Federal",
          "Reclusão de 2 a 5 anos e multa, além de autuação com multa de 75% do imposto devido",
          "Suspensão do CNPJ por 30 dias"
        ],
        correct: "Reclusão de 2 a 5 anos e multa, além de autuação com multa de 75% do imposto devido",
        explanation: "Sonegação fiscal é crime com pena de 2 a 5 anos de reclusão (pode chegar a 150% de multa em caso de fraude comprovada). Os responsáveis legais da empresa (diretores, sócios administradores) respondem pessoalmente. O Código Tributário Nacional (art. 135) permite cobrar as dívidas fiscais diretamente do bolso dos administradores quando há dolo ou excesso de poder."
      },
      {
        id: "diremp-4",
        type: "fill",
        question: "O órgão federal responsável por investigar cartéis, fusões anticompetitivas e abuso de posição dominante no mercado brasileiro é o _____.",
        options: ["CADE", "Procon", "BACEN"],
        correct: "CADE",
        explanation: "CADE (Conselho Administrativo de Defesa Econômica) é o antitruste brasileiro. Ele aprova ou rejeita fusões e aquisições (M&A) acima de R$750 milhões de faturamento combinado, investiga cartéis (multa de até 20% do faturamento), e garante que nenhuma empresa abuse de posição dominante para eliminar concorrentes."
      },
      {
        id: "diremp-5",
        type: "multiple",
        question: "Uma startup registrou sua marca no INPI. Por quanto tempo essa proteção é válida e o que acontece após esse período?",
        options: [
          "5 anos — depois a marca entra em domínio público automaticamente",
          "10 anos — renovável indefinidamente por períodos iguais",
          "20 anos — igual a uma patente de invenção",
          "Vitalício — a marca nunca precisa ser renovada"
        ],
        correct: "10 anos — renovável indefinidamente por períodos iguais",
        explanation: "O registro de marca no INPI tem validade de 10 anos a partir da concessão e pode ser renovado indefinidamente por novos períodos de 10 anos. O custo de renovação varia de R$355 a R$710 por classe de produto/serviço. Se não renovar, a marca perde a proteção e pode ser registrada por outra empresa."
      }
    ]
  },

  {
    moduleId: "gestao-pessoas-clt",
    questions: [
      {
        id: "gepclt-1",
        type: "multiple",
        question: "Um funcionário trabalhou 3 anos na empresa e foi demitido sem justa causa. Qual é o prazo mínimo de aviso prévio ao qual ele tem direito?",
        options: ["30 dias", "39 dias", "90 dias", "15 dias"],
        correct: "39 dias",
        explanation: "Aviso prévio = 30 dias base + 3 dias por ano completo de empresa. Com 3 anos: 30 + (3×3) = 39 dias. O máximo legal é 90 dias. O aviso pode ser trabalhado (funcionário continua trabalhando) ou indenizado (empresa paga os dias sem exigir presença). Na prática, a maioria das empresas opta pelo aviso indenizado."
      },
      {
        id: "gepclt-2",
        type: "truefalse",
        question: "Um contrato PJ sempre é ilegal quando existe relação de trabalho com uma empresa.",
        options: ["Verdadeiro", "Falso"],
        correct: "Falso",
        explanation: "O contrato PJ é legal quando existe autonomia real: o prestador define seus próprios horários, usa equipamentos próprios, pode recusar demandas e não tem exclusividade. O que é ilegal é a 'pejotização': quando na prática existe subordinação (horário fixo, metas, exclusividade) mas a empresa usa PJ para fugir dos encargos trabalhistas. A Justiça do Trabalho reconhece o vínculo e cobra todos os direitos retroativamente."
      },
      {
        id: "gepclt-3",
        type: "multiple",
        question: "Qual é o custo real aproximado de um funcionário CLT para a empresa em relação ao salário bruto contratado?",
        options: [
          "Exatamente o salário bruto — os encargos são de responsabilidade do funcionário",
          "10% a 20% acima do salário bruto",
          "70% a 100% acima do salário bruto (o funcionário 'custa' de 1,7x a 2x o salário)",
          "50% abaixo — os benefícios fiscais compensam"
        ],
        correct: "70% a 100% acima do salário bruto (o funcionário 'custa' de 1,7x a 2x o salário)",
        explanation: "Para cada R$5.000 de salário bruto, a empresa paga aproximadamente: FGTS (8% = R$400), INSS patronal (20% = R$1.000), SAT e terceiros (aprox. 6,8% = R$340), férias com 1/3 (11,1% = R$555), 13º (8,3% = R$415), mais benefícios (VR, VT, plano de saúde). Total: R$8.500 a R$10.000/mês para um salário de R$5.000."
      },
      {
        id: "gepclt-4",
        type: "fill",
        question: "A plataforma digital do governo que unifica todas as obrigações trabalhistas, previdenciárias e fiscais do empregador — admissões, demissões, folha, afastamentos — se chama _____.",
        options: ["eSocial", "RAIS", "CAGED"],
        correct: "eSocial",
        explanation: "O eSocial (Sistema de Escrituração Digital das Obrigações Fiscais, Previdenciárias e Trabalhistas) é obrigatório para todas as empresas e substitui diversas obrigações acessórias como GFIP, CAGED e RAIS. Todas as informações sobre a relação de emprego devem ser registradas em tempo real. Erros e atrasos geram multas automáticas."
      },
      {
        id: "gepclt-5",
        type: "multiple",
        question: "Um gerente grita com sua equipe na frente de todos regularmente, chama funcionários de 'incompetentes' e ignora contribuições de certos colaboradores sistematicamente. Isso configura:",
        options: [
          "Gestão por pressão — técnica legítima de alta performance",
          "Assédio moral — exposição repetida e humilhante que pode gerar condenação de R$5.000 a R$100.000 ou mais em danos morais",
          "Feedback construtivo conforme a CLT",
          "Apenas mal-estar temporário sem consequências legais"
        ],
        correct: "Assédio moral — exposição repetida e humilhante que pode gerar condenação de R$5.000 a R$100.000 ou mais em danos morais",
        explanation: "Assédio moral é a exposição repetida e prolongada a situações humilhantes no ambiente de trabalho. Gritar, ridicularizar publicamente e ignorar sistematicamente são exemplos clássicos. A empresa pode ser responsabilizada mesmo que a diretoria não saiba — basta que o gestor pratique e a empresa não tenha tomado providências quando notificada."
      }
    ]
  },

  {
    moduleId: "financas-corporativas-avancado",
    questions: [
      {
        id: "fincorp-1",
        type: "multiple",
        question: "Uma empresa tem EBITDA de R$10M e Dívida Líquida de R$45M. Qual é sua alavancagem (Dívida Líquida/EBITDA) e como interpretá-la?",
        options: [
          "4,5x — começa a ser preocupante para a maioria dos setores",
          "0,45x — empresa extremamente endividada",
          "45% — dentro do padrão aceitável",
          "4,5% — nível baixo de endividamento"
        ],
        correct: "4,5x — começa a ser preocupante para a maioria dos setores",
        explanation: "Dívida Líquida/EBITDA = R$45M ÷ R$10M = 4,5x. Isso significa que levaria 4,5 anos para pagar toda a dívida líquida usando o EBITDA atual. Abaixo de 2x é confortável; entre 2x e 3x é administrável; acima de 4x começa a ser perigoso para a maioria dos setores. Em crises de mercado, empresas muito alavancadas são as primeiras a entrar em dificuldade."
      },
      {
        id: "fincorp-2",
        type: "truefalse",
        question: "O ROIC (Retorno sobre Capital Investido) acima do WACC (custo médio de capital) indica que a empresa está destruindo valor para os acionistas.",
        options: ["Verdadeiro", "Falso"],
        correct: "Falso",
        explanation: "É o contrário! ROIC > WACC = cria valor. Se o custo do capital é 12% (WACC) e a empresa retorna 18% (ROIC), ela está gerando 6 pontos percentuais de valor acima do custo. Quando ROIC < WACC, a empresa destrói valor — mesmo sendo lucrativa contabilmente, remunera o capital abaixo do que ele custaria investido em outro lugar."
      },
      {
        id: "fincorp-3",
        type: "multiple",
        question: "O Balanço Patrimonial de uma empresa mostra Ativo Total de R$8M e Passivo Total de R$9,5M. O que isso indica?",
        options: [
          "Empresa saudável com patrimônio positivo de R$1,5M",
          "Patrimônio Líquido negativo de R$1,5M — empresa tecnicamente insolvente",
          "Índice normal para empresas em crescimento",
          "Empresa com excelente liquidez corrente"
        ],
        correct: "Patrimônio Líquido negativo de R$1,5M — empresa tecnicamente insolvente",
        explanation: "PL = Ativo − Passivo = R$8M − R$9,5M = −R$1,5M. Patrimônio Líquido negativo significa que as dívidas superam os ativos — a empresa deve mais do que possui. Não implica falência imediata (pode ter bom fluxo de caixa), mas é um sinal grave: credores estão financiando operações que não geram valor suficiente para cobrir as obrigações."
      },
      {
        id: "fincorp-4",
        type: "fill",
        question: "O método de valuation que projeta os fluxos de caixa futuros de uma empresa e os traz a valor presente usando o custo de capital como taxa de desconto é chamado de DCF, sigla em inglês para _____.",
        options: ["Discounted Cash Flow", "Direct Cash Formula", "Debt Coverage Factor"],
        correct: "Discounted Cash Flow",
        explanation: "DCF (Discounted Cash Flow — Fluxo de Caixa Descontado) é o método mais rigoroso de valuation. Um real daqui a 5 anos vale menos que um real hoje (inflação, risco, custo de oportunidade). O WACC é a taxa de desconto: quanto maior o risco da empresa, maior o WACC, menor o valor presente dos fluxos futuros e menor o valor da empresa."
      },
      {
        id: "fincorp-5",
        type: "multiple",
        question: "Uma empresa de e-commerce tem ciclo de caixa de 60 dias: paga fornecedores em 30 dias, vende com estoque de 15 dias e recebe em 75 dias. Como ela pode reduzir seu ciclo sem mudar o volume de vendas?",
        options: [
          "Aumentar o prazo de recebimento dos clientes para 120 dias",
          "Negociar mais prazo com fornecedores (ex: 60 dias) e reduzir dias de estoque",
          "Contratar mais funcionários para o estoque",
          "Abrir uma nova filial para aumentar o faturamento"
        ],
        correct: "Negociar mais prazo com fornecedores (ex: 60 dias) e reduzir dias de estoque",
        explanation: "Ciclo de Caixa = Dias Estoque + Dias Recebimento − Dias Pagamento = 15 + 75 − 30 = 60 dias. Para reduzir: negociar 60 dias com fornecedores (−30 dias) e reduzir estoque de 15 para 7 dias (−8 dias) → novo ciclo = 7 + 75 − 60 = 22 dias. Isso libera capital de giro sem precisar de empréstimo!"
      }
    ]
  },

  // ─── LIDERANÇA CORPORATIVA ────────────────────────────────────────────────

  {
    moduleId: "compliance-lgpd",
    questions: [
      {
        id: "cplgpd-1",
        type: "multiple",
        question: "Um e-commerce coleta o endereço de entrega dos clientes para processar pedidos. Qual é a base legal da LGPD que justifica esse tratamento de dados?",
        options: [
          "Consentimento — precisa pedir autorização explícita para o endereço",
          "Execução de contrato — o dado é necessário para cumprir o pedido de compra",
          "Legítimo interesse — a empresa tem interesse legítimo em saber onde o cliente mora",
          "Não é necessário base legal para dados de entrega"
        ],
        correct: "Execução de contrato — o dado é necessário para cumprir o pedido de compra",
        explanation: "A base legal 'execução de contrato' (art. 7º, V da LGPD) autoriza o tratamento de dados pessoais necessários para cumprir o contrato com o titular. Entregar um pedido exige o endereço — sem ele, o contrato de compra não pode ser cumprido. Usar consentimento aqui seria errado: o cliente não poderia revogar o consentimento de entrega e continuar com o pedido."
      },
      {
        id: "cplgpd-2",
        type: "truefalse",
        question: "A multa máxima por infração à LGPD é de R$50 milhões, independente do faturamento da empresa.",
        options: ["Verdadeiro", "Falso"],
        correct: "Falso",
        explanation: "A multa é de ATÉ 2% do faturamento bruto do último exercício, LIMITADA a R$50 milhões por infração. Para uma empresa com faturamento de R$100M, a multa máxima seria R$2M (2%), não R$50M. Já para uma empresa com R$5 bilhões de faturamento, o limite de R$50M seria atingido antes dos 2%. São dois limitadores: o percentual E o teto absoluto."
      },
      {
        id: "cplgpd-3",
        type: "multiple",
        question: "Qual dos dados abaixo é considerado 'dado sensível' pela LGPD e requer proteção reforçada?",
        options: [
          "Endereço de entrega de uma loja online",
          "Nome completo e e-mail corporativo",
          "Prontuário médico com diagnóstico de doença",
          "Número de pedido de compra"
        ],
        correct: "Prontuário médico com diagnóstico de doença",
        explanation: "Dados sensíveis pela LGPD incluem: origem racial/étnica, convicção religiosa, opinião política, filiação sindical, saúde, vida sexual, dado genético e biométrico. Dados de saúde (diagnósticos, medicamentos, exames) exigem consentimento específico e destacado ou outra base legal qualificada. Vazamento de dados sensíveis gera penalidades mais graves e danos morais potencialmente maiores."
      },
      {
        id: "cplgpd-4",
        type: "fill",
        question: "A Lei Anticorrupção brasileira (Lei 12.846/2013) responsabiliza as empresas de forma _____, ou seja, mesmo sem provar que a diretoria ordenou o ato corrupto.",
        options: ["objetiva", "subjetiva", "solidária"],
        correct: "objetiva",
        explanation: "Responsabilidade objetiva = independe de culpa ou dolo. Basta que um funcionário ou intermediário tenha cometido o ato em benefício da empresa para que ela seja punida. Isso cria um incentivo fortíssimo para que empresas invistam em programas de compliance e controles internos — pois não adianta dizer 'eu não sabia' se o ato foi praticado em seu nome."
      },
      {
        id: "cplgpd-5",
        type: "multiple",
        question: "Uma empresa descobre que um gerente está assediando moralmente sua equipe. Qual deve ser a resposta correta da organização?",
        options: [
          "Ignorar — assédio moral não é crime no Brasil e a empresa não tem responsabilidade",
          "Transferir o gerente para outra área para resolver o problema sem exposição",
          "Investigar formalmente via canal de denúncias, tomar medidas disciplinares proporcionais e documentar tudo para evitar responsabilidade civil futura",
          "Esperar que a equipe resolva entre si antes de se envolver"
        ],
        correct: "Investigar formalmente via canal de denúncias, tomar medidas disciplinares proporcionais e documentar tudo para evitar responsabilidade civil futura",
        explanation: "A empresa pode ser responsabilizada por assédio praticado por seus gestores. Ao tomar conhecimento e não agir, a omissão torna-se cumplicidade. A resposta correta: investigar (canal de denúncias), aplicar medida disciplinar (advertência, suspensão ou demissão, conforme gravidade), documentar todo o processo e comunicar a equipe sobre a resolução — sem revelar detalhes que violem a privacidade dos envolvidos."
      }
    ]
  },

  {
    moduleId: "gestao-crise",
    questions: [
      {
        id: "gcrise-1",
        type: "multiple",
        question: "A Americanas descobriu uma inconsistência contábil de R$20 bilhões em janeiro de 2023. O CEO anunciou a descoberta e pediu demissão após 9 dias. Qual foi o principal erro de gestão de crise nessa situação?",
        options: [
          "Anunciar o problema publicamente — deveria ter mantido em sigilo",
          "A saída abrupta do CEO sem um plano comunicado gerou pânico e colapso no valor das ações (queda de 75% em dois dias)",
          "Contratar um novo CEO muito rapidamente",
          "Comunicar ao mercado antes de comunicar aos funcionários"
        ],
        correct: "A saída abrupta do CEO sem um plano comunicado gerou pânico e colapso no valor das ações (queda de 75% em dois dias)",
        explanation: "Em crises, o vácuo de liderança é tão perigoso quanto o problema em si. Quando o CEO saiu sem apresentar um plano de solução, o mercado interpretou como 'não há solução'. A descoberta da fraude era inevitável — o erro foi na gestão da comunicação pós-descoberta. Crises precisam de liderança visível, transparência sobre o que se sabe e um plano de ação concreto."
      },
      {
        id: "gcrise-2",
        type: "truefalse",
        question: "Em uma crise com vítimas, a primeira prioridade da empresa deve ser proteger sua reputação e evitar responsabilidades legais antes de cuidar das pessoas afetadas.",
        options: ["Verdadeiro", "Falso"],
        correct: "Falso",
        explanation: "O case da Tylenol (1982) é o manual de como fazer certo: a Johnson & Johnson recolheu 31 milhões de frascos do mercado ANTES de qualquer exigência legal, colocando a segurança dos consumidores acima de qualquer outro cálculo. Custou US$100M mas salvou a marca. Empresas que priorizam a imagem antes das pessoas em crises com vítimas invariavelmente sofrem danos reputacionais irreversíveis."
      },
      {
        id: "gcrise-3",
        type: "multiple",
        question: "Nas primeiras horas de uma crise reputacional, qual é a ação mais importante antes de qualquer comunicação externa?",
        options: [
          "Publicar imediatamente nas redes sociais para controlar a narrativa",
          "Contratar uma agência de relações públicas externa",
          "Confirmar os fatos internamente — não reaja a rumores antes de saber o que realmente aconteceu",
          "Acionar o departamento jurídico para preparar defesa imediata"
        ],
        correct: "Confirmar os fatos internamente — não reaja a rumores antes de saber o que realmente aconteceu",
        explanation: "Comunicar informação incorreta nas primeiras horas é pior do que o silêncio temporário. Uma vez que você disse 'não aconteceu' e depois se prova que aconteceu, a crise de produto vira crise de credibilidade — muito mais difícil de recuperar. Confirme os fatos, convoque a célula de crise, defina um porta-voz único e só então comunique: o que sabemos, o que ainda estamos apurando e o que já estamos fazendo."
      },
      {
        id: "gcrise-4",
        type: "fill",
        question: "O período de proteção legal durante uma recuperação judicial, em que as ações e execuções contra a empresa ficam temporariamente suspensas, é chamado de _____ period.",
        options: ["stay", "lock", "hold"],
        correct: "stay",
        explanation: "Stay period: os 180 dias (prorrogável) após o deferimento da recuperação judicial em que credores não podem executar dívidas nem leiloar bens da empresa. É o 'fôlego' para que a empresa apresente e execute o plano de recuperação. Durante esse período, a empresa continua operando normalmente — funcionários, fornecedores e clientes não são afetados diretamente."
      },
      {
        id: "gcrise-5",
        type: "multiple",
        question: "Uma empresa enfrenta uma crise operacional grave (incêndio em galpão principal). Qual é a ordem correta de stakeholders a comunicar?",
        options: [
          "Imprensa → Clientes → Funcionários → Reguladores",
          "Funcionários afetados e reguladores relevantes → Clientes impactados → Parceiros → Imprensa (com fatos confirmados)",
          "Apenas imprensa — ela vai comunicar todos os outros",
          "Reguladores → Imprensa → Clientes → Funcionários"
        ],
        correct: "Funcionários afetados e reguladores relevantes → Clientes impactados → Parceiros → Imprensa (com fatos confirmados)",
        explanation: "Prioridade 1: pessoas que podem estar em risco (funcionários) e reguladores obrigatórios (bombeiros, vigilância sanitária, CVM se for companhia aberta). Prioridade 2: quem será impactado operacionalmente (clientes com pedidos pendentes). Prioridade 3: parceiros e fornecedores. Imprensa por último — com fatos confirmados e porta-voz único. Nunca deixe a imprensa saber antes dos seus funcionários."
      }
    ]
  },

  {
    moduleId: "captacao-recursos-corp",
    questions: [
      {
        id: "caprec-1",
        type: "multiple",
        question: "Qual é a principal diferença entre captar via dívida (empréstimo) e via equity (vender participação societária)?",
        options: [
          "Dívida é sempre mais cara — equity é sempre preferível",
          "Dívida tem custo definido (juros) e prazo de pagamento, mas não dilui os sócios. Equity não tem obrigação de pagamento, mas traz novos sócios com voz na gestão",
          "Equity exige garantias reais — dívida, não",
          "Ambos são equivalentes: a diferença é apenas contábil"
        ],
        correct: "Dívida tem custo definido (juros) e prazo de pagamento, mas não dilui os sócios. Equity não tem obrigação de pagamento, mas traz novos sócios com voz na gestão",
        explanation: "Essa é a decisão central de estrutura de capital. Dívida: você paga juros e devolve o principal — mas mantém 100% da empresa. Equity: você 'vende' uma fatia da empresa para sempre — mas não tem obrigação de pagar se der errado. Startups sem receita previsível geralmente preferem equity (VC); empresas maduras com fluxo de caixa previsível preferem dívida (menor custo, não dilui)."
      },
      {
        id: "caprec-2",
        type: "truefalse",
        question: "O Term Sheet assinado durante uma rodada de investimento de venture capital já constitui um contrato definitivo e vinculante sobre todos os termos do investimento.",
        options: ["Verdadeiro", "Falso"],
        correct: "Falso",
        explanation: "O Term Sheet é um documento de intenções que estabelece os termos preliminares (valuation, participação, direitos preferenciais) antes da due diligence formal. Ele geralmente não é vinculante em sua totalidade — apenas certas cláusulas como exclusividade e confidencialidade costumam ser vinculantes. O contrato definitivo e vinculante é assinado após a due diligence, quando todas as partes confirmaram as informações."
      },
      {
        id: "caprec-3",
        type: "multiple",
        question: "Uma startup está em Série A captando R$30M. O fundo oferece R$30M por 20% da empresa. Qual é o valuation pre-money implícito nessa proposta?",
        options: ["R$30M", "R$120M", "R$150M", "R$180M"],
        correct: "R$120M",
        explanation: "Se R$30M = 20% da empresa pós-investimento, então 100% pós-money = R$150M. Pre-money = Post-money − Investimento = R$150M − R$30M = R$120M. O fundo está valorizando a empresa em R$120M antes de entrar. Fundadores precisam dominar essa matemática para negociar: cada ponto percentual cedido a mais nessa rodada reduz permanentemente o equity dos fundadores."
      },
      {
        id: "caprec-4",
        type: "fill",
        question: "O processo pelo qual uma empresa abre seu capital na bolsa de valores, vendendo ações para o público pela primeira vez, é chamado de _____.",
        options: ["IPO", "M&A", "LBO"],
        correct: "IPO",
        explanation: "IPO (Initial Public Offering). O processo envolve: registro na CVM, contratação de banco coordenador (BTG, XP, Itaú BBA), elaboração do prospecto, roadshow com investidores institucionais e precificação das ações. O Nubank fez seu IPO na NYSE em dezembro de 2021, captando US$2,6 bilhões e atingindo valuation de US$41,5 bilhões — o maior IPO de fintech da história."
      },
      {
        id: "caprec-5",
        type: "multiple",
        question: "O que é due diligence e por que é tão importante em M&A e rodadas de investimento?",
        options: [
          "É o processo de marketing para atrair investidores — o roadshow",
          "É a investigação detalhada financeira, jurídica, operacional e trabalhista que compradores ou investidores realizam antes de fechar o negócio",
          "É a aprovação obrigatória pelo CADE para qualquer transação acima de R$1M",
          "É o termo para a assinatura do contrato definitivo de investimento"
        ],
        correct: "É a investigação detalhada financeira, jurídica, operacional e trabalhista que compradores ou investidores realizam antes de fechar o negócio",
        explanation: "Due diligence é o 'exame médico' antes de comprar ou investir em uma empresa. Verifica: demonstrativos financeiros auditados, contratos com clientes/fornecedores, processos judiciais (trabalhistas, fiscais, cíveis), propriedade intelectual, estrutura societária, passivos ocultos. Uma due diligence bem feita pode identificar riscos que justificam ajuste de preço, cláusulas protetoras no contrato ou até o cancelamento do negócio."
      }
    ]
  },

  {
    moduleId: "estrategia-crescimento",
    questions: [
      {
        id: "estcre-1",
        type: "multiple",
        question: "Na análise BCG para expansão geográfica, uma empresa que quer entrar em um novo país está diante de qual tipo de decisão?",
        options: [
          "Vaca Leiteira — mercado já maduro, sem crescimento",
          "Ponto de Interrogação — alta incerteza: o mercado pode crescer muito, mas a participação inicial é baixa",
          "Abacaxi — mercado em declínio",
          "Estrela — participação alta e crescimento garantido"
        ],
        correct: "Ponto de Interrogação — alta incerteza: o mercado pode crescer muito, mas a participação inicial é baixa",
        explanation: "Entrar em novo mercado = começar do zero com participação baixa em um mercado de potencial incerto. É o quadrante do Ponto de Interrogação: pode virar Estrela (se o mercado crescer e você ganhar share) ou Abacaxi (se o mercado não crescer ou você não conseguir penetração). Por isso, internacionalização exige análise de mercado rigorosa antes do comprometimento de capital."
      },
      {
        id: "estcre-2",
        type: "truefalse",
        question: "Segundo a Lei de Franquias (Lei 13.966/2019), o franqueador pode exigir o pagamento da taxa de franquia no mesmo dia da apresentação da proposta.",
        options: ["Verdadeiro", "Falso"],
        correct: "Falso",
        explanation: "A Lei de Franquias exige que o franqueador entregue a COF (Circular de Oferta de Franquia) ao candidato com mínimo de 10 dias de antecedência à assinatura de qualquer documento ou pagamento. Esse prazo existe para que o candidato analise calmamente todos os termos, visite outras unidades e consulte advogado antes de comprometer capital. Exigir pagamento antes ou negar a COF é ilegal."
      },
      {
        id: "estcre-3",
        type: "multiple",
        question: "A WEG (fabricante de motores elétricos) está presente em 135 países com fábricas em 11. Qual modo de entrada ela utilizou para construir essa presença global?",
        options: [
          "Apenas exportação direta — nunca abriu operações no exterior",
          "Combinação de exportação, aquisições estratégicas e greenfield (operações próprias do zero) ao longo de décadas",
          "Exclusivamente licenciamento — cedeu sua tecnologia para fabricantes locais",
          "Joint ventures com concorrentes em cada país"
        ],
        correct: "Combinação de exportação, aquisições estratégicas e greenfield (operações próprias do zero) ao longo de décadas",
        explanation: "A WEG é um dos cases mais impressionantes de internacionalização brasileira. Começou exportando na década de 1970, depois abriu escritórios comerciais, depois fábricas (greenfield) e usou aquisições para acelerar em mercados específicos. A paciência estratégica foi chave: levou 50 anos para construir essa presença global. Internacionalização bem feita é maratona, não sprint."
      },
      {
        id: "estcre-4",
        type: "fill",
        question: "Quando uma empresa compra outra principalmente pelo seu time de engenharia ou design (e não pelo produto ou receita), essa operação é chamada de _____-hire.",
        options: ["acqui", "talent", "team"],
        correct: "acqui",
        explanation: "Acqui-hire (acquisition + hire) é a compra de uma startup pelo seu talento humano. O produto pode até ser descontinuado — o objetivo é integrar o time. Facebook, Google e Apple fizeram diversas acqui-hires para contratar times de engenharia de elite de startups que não tinham escalado. É muitas vezes mais eficiente do que recrutar individualmente profissionais top de mercado."
      },
      {
        id: "estcre-5",
        type: "multiple",
        question: "Uma empresa com crescimento orgânico de 20% ao ano quer triplicar de tamanho nos próximos 3 anos. Qual estratégia é mais adequada para atingir esse objetivo?",
        options: [
          "Apenas crescimento orgânico — em 3 anos com 20% ao ano chega a 73% de crescimento total",
          "M&A (aquisição) de concorrentes ou complementares para crescimento inorgânico acelerado, combinado com integração cultural rigorosa",
          "Redução de custos agressiva para aumentar a margem e depois reinvestir",
          "Abertura de capital (IPO) imediata — o capital do IPO garante triplicar em 3 anos"
        ],
        correct: "M&A (aquisição) de concorrentes ou complementares para crescimento inorgânico acelerado, combinado com integração cultural rigorosa",
        explanation: "Com crescimento orgânico de 20% ao ano: após 3 anos = 1,2³ = 1,73x (crescimento de 73%) — bem abaixo de 3x (200% de crescimento). Para triplicar em 3 anos, o crescimento orgânico é insuficiente. M&A é o caminho — mas atenção: 60-70% das fusões destroem valor. O sucesso depende da qualidade da due diligence, do preço pago e, acima de tudo, da integração cultural pós-aquisição."
      }
    ]
  }
];

export function getChallengeByModule(moduleId: string): Challenge | undefined {
  return CHALLENGES.find(c => c.moduleId === moduleId);
}
