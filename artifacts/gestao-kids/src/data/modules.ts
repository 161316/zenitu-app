export interface Lesson {
  id: string;
  title: string;
  content: string[];
  xpReward: number;
}

export interface Module {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  color: string;
  bgGradient: string;
  lessons: Lesson[];
  order: number;
}

export const MODULES: Module[] = [
  {
    id: "negocio",
    title: "O que é um Negócio?",
    subtitle: "Entenda como as empresas nascem e funcionam",
    emoji: "🏪",
    color: "#6C3CE1",
    bgGradient: "from-violet-500 to-purple-700",
    order: 1,
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
      }
    ]
  },
  {
    id: "financas",
    title: "Dinheiro e Finanças",
    subtitle: "Aprenda a cuidar do dinheiro da sua empresa",
    emoji: "💰",
    color: "#D97706",
    bgGradient: "from-amber-400 to-orange-500",
    order: 2,
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
      }
    ]
  },
  {
    id: "marketing",
    title: "Marketing e Vendas",
    subtitle: "Aprenda a divulgar e vender seu produto",
    emoji: "📣",
    color: "#DB2777",
    bgGradient: "from-pink-500 to-rose-600",
    order: 3,
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
      }
    ]
  },
  {
    id: "lideranca",
    title: "Liderança e Equipe",
    subtitle: "Saiba como liderar pessoas e trabalhar em equipe",
    emoji: "👥",
    color: "#059669",
    bgGradient: "from-emerald-500 to-teal-600",
    order: 4,
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
      }
    ]
  },
  {
    id: "planejamento",
    title: "Planejamento Estratégico",
    subtitle: "Defina metas e trace o caminho para o sucesso",
    emoji: "🎯",
    color: "#2563EB",
    bgGradient: "from-blue-500 to-indigo-600",
    order: 5,
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
      }
    ]
  },
  {
    id: "inovacao",
    title: "Inovação e Criatividade",
    subtitle: "Pense diferente e crie soluções novas",
    emoji: "💡",
    color: "#D97706",
    bgGradient: "from-yellow-400 to-amber-500",
    order: 6,
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
      }
    ]
  },
  {
    id: "clientes",
    title: "Clientes e Atendimento",
    subtitle: "Aprenda a conquistar e manter clientes",
    emoji: "🤝",
    color: "#7C3AED",
    bgGradient: "from-violet-500 to-purple-600",
    order: 7,
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
      }
    ]
  },
  {
    id: "empreendedorismo",
    title: "Empreendedorismo",
    subtitle: "Transforme suas ideias em negócios reais",
    emoji: "🚀",
    color: "#DC2626",
    bgGradient: "from-red-500 to-rose-600",
    order: 8,
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
