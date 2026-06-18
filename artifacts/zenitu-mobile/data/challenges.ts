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
  }
];

export function getChallengeByModule(moduleId: string): Challenge | undefined {
  return CHALLENGES.find(c => c.moduleId === moduleId);
}
