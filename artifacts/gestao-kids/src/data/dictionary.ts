export interface DictionaryWord {
  word: string;
  pronunciation: string;
  definition: string;
  etymology: string;
  etymologyDetail: string;
  example: string;
  funFact: string;
  relatedWords: string[];
  moduleId: string;
  emoji: string;
}

export const DICTIONARY: DictionaryWord[] = [
  {
    word: "Lucro",
    pronunciation: "LU-cro",
    definition: "Lucro é o dinheiro que sobra depois de pagar todas as despesas. Se você vende brigadeiros por R$5 e gasta R$2 para fazê-los, seu lucro é R$3. É a recompensa do empreendedor pelo seu trabalho!",
    etymology: "Latim",
    etymologyDetail: "Vem do latim 'lucrum', que significa ganho, vantagem ou proveito. Os romanos usavam essa palavra para descrever qualquer tipo de benefício financeiro obtido em uma troca comercial.",
    example: "A Ana vendeu 50 brigadeiros e teve um lucro de R$150 no fim do dia.",
    funFact: "A palavra 'lucro' deu origem à expressão 'lucrar', que usamos quando conseguimos ganhar dinheiro com algo. No inglês, a palavra equivalente é 'profit', que vem do latim 'profectus' (progresso).",
    relatedWords: ["Receita", "Despesa", "Margem"],
    moduleId: "financas",
    emoji: "💰"
  },
  {
    word: "Receita",
    pronunciation: "re-CEI-ta",
    definition: "Receita é todo o dinheiro que entra na sua empresa quando você vende algo. Se você vendeu R$500 em produtos hoje, sua receita é R$500. Atenção: receita não é o mesmo que lucro!",
    etymology: "Latim",
    etymologyDetail: "Vem do latim 'recepta', que significa 'coisas recebidas'. É o particípio passado do verbo 'recipere' (receber). No contexto financeiro, é o total de coisas recebidas (dinheiro) em troca de produtos ou serviços.",
    example: "A loja de roupas teve uma receita de R$10.000 em dezembro, mas depois de pagar os custos, o lucro foi de R$2.000.",
    funFact: "A palavra 'receita' também é usada para falar de uma lista de ingredientes na culinária! Os dois usos vêm do mesmo radical: em ambos os casos, é algo que você 'recebe' — ingredientes ou dinheiro.",
    relatedWords: ["Lucro", "Faturamento", "Despesa"],
    moduleId: "financas",
    emoji: "📈"
  },
  {
    word: "Despesa",
    pronunciation: "des-PE-za",
    definition: "Despesa é todo o dinheiro que sai da sua empresa — os gastos. Aluguel, salários, matéria-prima, conta de luz: tudo isso são despesas. Para ter lucro, suas receitas precisam ser maiores que suas despesas.",
    etymology: "Latim",
    etymologyDetail: "Vem do latim 'dispensa', derivado de 'dispendere', que significa 'gastar, distribuir ou pesar'. A ideia original era de 'pesar' (balancear) o dinheiro que sai. A palavra 'despensa' (onde se guardam alimentos) tem a mesma origem.",
    example: "As despesas do restaurante incluem: aluguel R$3.000, funcionários R$5.000, ingredientes R$4.000 — total de R$12.000 por mês.",
    funFact: "A palavra 'dispensar' (dar de presente ou deixar ir embora) tem a mesma raiz latina que despesa. Nos dois casos, você está 'soltando' algo — dinheiro ou uma pessoa.",
    relatedWords: ["Custo", "Receita", "Orçamento"],
    moduleId: "financas",
    emoji: "📉"
  },
  {
    word: "Orçamento",
    pronunciation: "or-ça-MEN-to",
    definition: "Orçamento é um plano que mostra quanto você pretende ganhar e gastar em um período. É como uma previsão do futuro financeiro da sua empresa. Com orçamento, você não gasta mais do que pode!",
    etymology: "Latim/Português",
    etymologyDetail: "Vem de 'orçar', que por sua vez vem do latim 'ordinare' (ordenar, organizar). A ideia é de 'ordenar' ou 'calcular' os gastos futuros. A palavra também tem influência do árabe 'arz' (estimativa).",
    example: "Antes da festa da escola, a turma fez um orçamento: R$200 para decoração, R$300 para comida e R$100 para música. Total: R$600.",
    funFact: "Na Europa Medieval, 'budget' (inglês para orçamento) era literalmente uma bolsa de couro onde se guardavam documentos financeiros. O Tesouro britânico ainda chama o orçamento nacional de 'Budget'.",
    relatedWords: ["Planejamento", "Despesa", "Fluxo de Caixa"],
    moduleId: "financas",
    emoji: "📊"
  },
  {
    word: "Investimento",
    pronunciation: "in-ves-ti-MEN-to",
    definition: "Investimento é gastar dinheiro hoje para ganhar mais dinheiro no futuro. Quando você compra uma máquina de fazer brigadeiros para produzir mais e vender mais, está investindo. É diferente de despesa porque traz retorno!",
    etymology: "Latim/Italiano",
    etymologyDetail: "Vem do latim 'investire', que significa 'cobrir, envolver ou vestir'. Na Idade Média, era usado para descrever quando se colocava dinheiro em algo (como 'vestir' o capital). Em italiano, 'investire' evoluiu para incluir o sentido financeiro.",
    example: "Pedro investiu R$500 em ingredientes melhores para seus bolos. Com isso, conseguiu cobrar mais caro e faturar R$1.500 — um retorno de 3x!",
    funFact: "Warren Buffett, considerado o maior investidor de todos os tempos, já foi o homem mais rico do mundo. Ele começou a investir com apenas 11 anos de idade, comprando ações de uma empresa por US$38 cada.",
    relatedWords: ["Lucro", "Capital", "Retorno"],
    moduleId: "financas",
    emoji: "💎"
  },
  {
    word: "Empreendedor",
    pronunciation: "em-pre-en-de-DOR",
    definition: "Empreendedor é a pessoa que cria e gerencia um negócio, assumindo riscos para obter lucro. É quem tem a ideia, toma a iniciativa e trabalha para transformar um sonho em realidade. Todo negócio começa com um empreendedor!",
    etymology: "Francês",
    etymologyDetail: "Vem do francês 'entrepreneur', derivado de 'entreprendre', que significa 'tomar a iniciativa de algo, empreender'. O radical 'prendre' significa 'pegar, tomar'. A palavra foi popularizada pelo economista irlandês Richard Cantillon no século XVIII.",
    example: "Júlia, 15 anos, é empreendedora: ela cria pulseiras artesanais, vende para amigos e reinveste o lucro para comprar mais materiais.",
    funFact: "A palavra 'entrepreneur' foi usada pela primeira vez em sentido moderno pelo economista francês Jean-Baptiste Say em 1800. Ele descrevia o empreendedor como alguém que move recursos de áreas de baixa produtividade para áreas de alta produtividade.",
    relatedWords: ["Startup", "Inovação", "Negócio"],
    moduleId: "empreendedorismo",
    emoji: "🚀"
  },
  {
    word: "Marketing",
    pronunciation: "MAR-ke-ting",
    definition: "Marketing é o conjunto de estratégias que uma empresa usa para criar, comunicar e entregar valor aos clientes. É a arte de fazer as pessoas quererem o que você vende — e ainda se sentirem felizes pela compra!",
    etymology: "Inglês",
    etymologyDetail: "Vem do inglês 'market' (mercado), que por sua vez vem do latim 'mercatus' (comércio, mercado). O sufixo '-ing' indica uma ação contínua. 'Marketing' literalmente significa 'a ação de ir ao mercado' ou 'as atividades relacionadas ao mercado'.",
    example: "O marketing do sorvete Magnum usa chocolates finos e atores bonitos nas propagandas para fazer o produto parecer luxuoso.",
    funFact: "Philip Kotler, chamado de 'pai do marketing moderno', disse que 'marketing não é a arte de vender o que você faz, mas saber o que fazer para satisfazer o cliente'. Ele transformou o marketing em uma ciência.",
    relatedWords: ["Marca", "Publicidade", "Vendas"],
    moduleId: "marketing",
    emoji: "📣"
  },
  {
    word: "Estratégia",
    pronunciation: "es-tra-TÉ-gia",
    definition: "Estratégia é um plano de longo prazo que define como uma empresa vai alcançar seus objetivos. É como um mapa que mostra o caminho para chegar onde você quer — mas no mundo dos negócios, não no mundo físico!",
    etymology: "Grego",
    etymologyDetail: "Vem do grego 'strategia', que significa 'arte de ser general'. É formada por 'stratos' (exército) + 'agein' (liderar). Originalmente era um termo militar — a habilidade de um general em planejar e liderar batalhas. Com o tempo, passou a ser usada nos negócios.",
    example: "A estratégia da Amazon é ser o lugar onde você encontra qualquer produto com entrega rápida e preço competitivo. Tudo que Jeff Bezos decidiu foi baseado nessa estratégia.",
    funFact: "A palavra 'estratégia' tem mais de 2.500 anos! Sun Tzu, um general chinês, escreveu 'A Arte da Guerra' por volta de 500 a.C. — um livro sobre estratégia militar que hoje é estudado em MBA's de negócios do mundo inteiro.",
    relatedWords: ["Planejamento", "Meta", "Missão"],
    moduleId: "planejamento",
    emoji: "🎯"
  },
  {
    word: "Cliente",
    pronunciation: "cli-EN-te",
    definition: "Cliente é qualquer pessoa (ou empresa) que compra seus produtos ou contrata seus serviços. O cliente é a razão de existir de qualquer negócio — sem clientes, não há empresa!",
    etymology: "Latim",
    etymologyDetail: "Vem do latim 'cliens', que na Roma Antiga significava 'aquele que segue ou depende de outro'. Era usado para descrever cidadãos que dependiam da proteção de pessoas mais poderosas (patronos). Com o tempo, evoluiu para o sentido comercial de 'quem compra'.",
    example: "A loja de games tem 500 clientes cadastrados. Quando lança um jogo novo, envia mensagem para todos — e as vendas disparam!",
    funFact: "Em marketing, existe o conceito de 'Customer Lifetime Value' (Valor do Tempo de Vida do Cliente). A Amazon calcula que um cliente Prime vale em média US$2.500 ao longo da vida — por isso investe tanto em fidelidade!",
    relatedWords: ["Consumidor", "Público-alvo", "Fidelização"],
    moduleId: "clientes",
    emoji: "👤"
  },
  {
    word: "Fornecedor",
    pronunciation: "for-ne-ce-DOR",
    definition: "Fornecedor é a empresa ou pessoa que vende produtos ou serviços para outra empresa usar na sua produção. A padaria compra farinha do fornecedor. O restaurante compra legumes do fornecedor. Sem fornecedores, a maioria das empresas não consegue funcionar!",
    etymology: "Latim/Português",
    etymologyDetail: "Vem de 'fornecer', derivado do latim 'furnire' (prover, equipar). 'Furnus' em latim era um forno, e 'furnire' originalmente significava equipar ou prover (como abastecer um forno). O sufixo '-edor' indica a pessoa que pratica a ação.",
    example: "A sorveteria tem três fornecedores: um para o leite, um para as frutas e um para as embalagens. Cada um é fundamental para o produto final.",
    funFact: "A relação com fornecedores é tão importante que tem até um nome: 'supply chain' (cadeia de fornecimento). A Apple tem mais de 200 fornecedores em 43 países — e gerencia todos eles com rigorosos contratos de qualidade.",
    relatedWords: ["Parceria", "Cadeia de Suprimentos", "Insumo"],
    moduleId: "negocio",
    emoji: "🏭"
  },
  {
    word: "Produto",
    pronunciation: "pro-DU-to",
    definition: "Produto é algo físico que uma empresa fabrica ou vende. Você pode tocar, guardar e usar um produto. Uma camiseta, um celular, um sorvete, um livro — todos são produtos. O oposto de produto é serviço.",
    etymology: "Latim",
    etymologyDetail: "Vem do latim 'productum', particípio passado de 'producere', que significa 'trazer para frente, criar, fabricar'. O radical 'ducere' (conduzir, levar) aparece em várias palavras: produzir, conduzir, reduzir.",
    example: "O produto mais vendido da Apple é o iPhone — mais de 200 milhões de unidades por ano em todo o mundo.",
    funFact: "Em marketing, existe o conceito de 'ciclo de vida do produto': lançamento, crescimento, maturidade e declínio. O DVD estava na fase de declínio quando o streaming surgiu e o substituiu completamente.",
    relatedWords: ["Serviço", "Fabricação", "Estoque"],
    moduleId: "negocio",
    emoji: "📦"
  },
  {
    word: "Serviço",
    pronunciation: "ser-VI-ço",
    definition: "Serviço é uma ação que uma empresa realiza para o cliente — algo que você não pode tocar, mas que tem muito valor. Cortar cabelo, dar aulas, consertar computadores, fazer entrega: todos são serviços!",
    etymology: "Latim",
    etymologyDetail: "Vem do latim 'servitium', derivado de 'servus' (escravo, servidor). Originalmente significava 'estado de servo' ou 'trabalho realizado para outro'. Com o tempo, perdeu o sentido negativo e passou a significar simplesmente 'trabalho ou atividade prestada a alguém'.",
    example: "O Spotify oferece um serviço: você paga mensalmente e tem acesso a mais de 80 milhões de músicas. Não existe produto físico — é tudo digital.",
    funFact: "A economia de serviços representa mais de 70% do PIB (riqueza total) de países desenvolvidos. O Brasil também está nessa tendência: mais da metade da economia brasileira já é composta por serviços.",
    relatedWords: ["Produto", "Atendimento", "Terceirização"],
    moduleId: "negocio",
    emoji: "🎪"
  },
  {
    word: "Inovação",
    pronunciation: "i-no-va-ÇÃO",
    definition: "Inovação é criar algo novo — ou melhorar algo existente — de uma forma que gere valor para as pessoas. Pode ser um produto novo, uma forma diferente de fazer algo, ou um modelo de negócio nunca visto antes!",
    etymology: "Latim",
    etymologyDetail: "Vem do latim 'innovatio', derivado de 'innovare', que significa 'tornar novo'. É formada por 'in' (em, para dentro) + 'novus' (novo). A ideia é de 'introduzir algo novo'. O economista Joseph Schumpeter foi quem popularizou o conceito no século XX.",
    example: "O Uber inovou ao criar um aplicativo que conecta motoristas e passageiros sem a necessidade de táxis tradicionais — mudou o transporte do mundo inteiro.",
    funFact: "A Apple registrou mais de 40.000 patentes de inovação ao longo dos anos. Mas Steve Jobs dizia que a maior inovação da Apple não era tecnológica — era combinar tecnologia com arte e humanidade.",
    relatedWords: ["Criatividade", "Startup", "Tecnologia"],
    moduleId: "inovacao",
    emoji: "💡"
  },
  {
    word: "Liderança",
    pronunciation: "li-de-RAN-ça",
    definition: "Liderança é a capacidade de influenciar e inspirar outras pessoas a trabalharem em direção a um objetivo comum. Um líder não é quem manda — é quem orienta, motiva e dá o exemplo para a equipe!",
    etymology: "Inglês/Português",
    etymologyDetail: "Vem do inglês 'leader' (líder), que por sua vez vem do nórdico antigo 'leiðari', derivado de 'leiða' (conduzir, guiar). O sufixo '-ança' foi adicionado em português para criar o substantivo. A palavra chegou ao português através do francês 'leader' no século XIX.",
    example: "Bernardinho, técnico de vôlei, é considerado um dos maiores exemplos de liderança no esporte brasileiro — levou o Brasil a múltiplos títulos olímpicos e mundiais.",
    funFact: "Um estudo da Universidade de Harvard mostrou que 85% do sucesso de um líder depende de habilidades interpessoais (comunicação, empatia, relacionamento) e apenas 15% de conhecimento técnico. Liderar é principalmente sobre pessoas!",
    relatedWords: ["Gestão", "Motivação", "Equipe"],
    moduleId: "lideranca",
    emoji: "👑"
  },
  {
    word: "Meta",
    pronunciation: "ME-ta",
    definition: "Meta é um objetivo específico e mensurável que você quer atingir. É diferente de um sonho vago — uma meta tem número, prazo e plano. 'Quero ganhar dinheiro' é um sonho. 'Quero faturar R$1.000 por mês até dezembro' é uma meta!",
    etymology: "Grego/Latim",
    etymologyDetail: "Vem do latim 'meta', que na Roma Antiga era o poste de mármore que marcava o fim de uma pista de corrida ou o ponto de virada. Significava literalmente 'objetivo final, ponto de chegada'. Os romanos usavam a palavra tanto em corridas de bigas quanto para objetivos da vida.",
    example: "A meta de Carla é conquistar 100 seguidores no Instagram do seu negócio de artesanato até o fim do mês — e ela faz 3 posts por dia para chegar lá.",
    funFact: "A técnica de metas SMART (Específica, Mensurável, Atingível, Relevante, com Prazo) foi desenvolvida por George Doran em 1981 e é usada até hoje pelas maiores empresas do mundo, incluindo Google, Microsoft e Amazon.",
    relatedWords: ["Objetivo", "Estratégia", "Planejamento"],
    moduleId: "planejamento",
    emoji: "🎯"
  },
  {
    word: "Feedback",
    pronunciation: "FID-bek",
    definition: "Feedback é o retorno que você recebe sobre algo que fez — pode ser positivo ou construtivo. No mundo dos negócios, feedback é quando um cliente ou colega te diz o que funcionou e o que pode melhorar. É um presente valioso!",
    etymology: "Inglês",
    etymologyDetail: "Vem do inglês 'feed' (alimentar) + 'back' (de volta). Literalmente significa 'alimentar de volta' — a ideia é que a informação retorna ao ponto de origem para melhorar o sistema. O termo foi usado originalmente em eletrônica e sistemas de controle antes de ser adotado no contexto humano.",
    example: "Depois de apresentar seu projeto na escola, João pediu feedback para a professora. Ela elogiou a criatividade e sugeriu melhorar a organização das ideias.",
    funFact: "Jeff Bezos, fundador da Amazon, deixava uma cadeira vazia em todas as reuniões de diretoria como símbolo do cliente. Era um lembrete constante de que todas as decisões precisavam ser baseadas no feedback e nas necessidades de quem compra.",
    relatedWords: ["Avaliação", "Melhoria", "Comunicação"],
    moduleId: "clientes",
    emoji: "💬"
  },
  {
    word: "Startup",
    pronunciation: "STAR-tap",
    definition: "Startup é uma empresa jovem que busca um modelo de negócio inovador e escalável — ou seja, que pode crescer muito rapidamente! Startups geralmente usam tecnologia e buscam resolver um problema grande de forma diferente.",
    etymology: "Inglês",
    etymologyDetail: "Vem do inglês 'start up', que significa 'dar partida, iniciar'. O termo foi popularizado no Vale do Silício (California, EUA) nos anos 1990, durante o boom das empresas de internet. Hoje é usado globalmente para descrever empresas jovens e inovadoras.",
    example: "O Nubank começou como uma startup em 2013 com apenas 3 funcionários. Hoje tem mais de 85 milhões de clientes e é o maior banco digital do mundo.",
    funFact: "O termo 'unicórnio' no mundo das startups descreve uma empresa que vale mais de US$1 bilhão. O nome é irônico — eram tão raras quanto unicórnios! Mas hoje existem mais de 1.000 unicórnios no mundo. O Brasil tem vários, como Nubank, iFood e VTEX.",
    relatedWords: ["Empreendedor", "Inovação", "Investimento"],
    moduleId: "inovacao",
    emoji: "🦄"
  },
  {
    word: "Marca",
    pronunciation: "MAR-ca",
    definition: "Marca é a identidade de uma empresa — o nome, o logo, as cores, a forma como ela se comunica e como as pessoas a percebem. Uma marca forte faz com que as pessoas escolham seu produto mesmo quando há opções mais baratas!",
    etymology: "Germânico",
    etymologyDetail: "Vem do germânico antigo 'mark' ou 'marka', que significava 'sinal, limite ou impressão'. Na Idade Média, artesãos e fazendeiros marcavam seus produtos e animais com sinais para identificá-los — exatamente como marcas de gado. Com o tempo, evoluiu para o sentido comercial moderno.",
    example: "A Nike tem uma das marcas mais valiosas do mundo. O swoosh (aquele símbolo em forma de asa) é reconhecido em mais de 160 países e vale bilhões de dólares.",
    funFact: "A designer Carolyn Davidson criou o famoso logo da Nike (o swoosh) em 1971 por apenas US$35! Quando a Nike foi crescendo, ela recebeu ações da empresa como agradecimento — que valeram muito mais com o tempo.",
    relatedWords: ["Marketing", "Logo", "Identidade Visual"],
    moduleId: "marketing",
    emoji: "✨"
  },
  {
    word: "Concorrência",
    pronunciation: "con-cor-RÊN-cia",
    definition: "Concorrência são as outras empresas que oferecem produtos ou serviços similares aos seus para os mesmos clientes. Coca-Cola e Pepsi são concorrentes. McDonald's e Burger King são concorrentes. A concorrência é saudável — ela força as empresas a melhorar!",
    etymology: "Latim",
    etymologyDetail: "Vem do latim 'concurrentia', derivado de 'concurrere', que significa 'correr junto'. É formada por 'con' (junto) + 'currere' (correr). A ideia é de várias pessoas ou empresas 'correndo juntas' em direção ao mesmo objetivo (os clientes).",
    example: "A concorrência entre Uber e 99 no Brasil beneficia os passageiros: ambos os aplicativos baixam preços e melhoram o serviço para atrair mais clientes.",
    funFact: "Em alguns países, existe uma lei chamada 'lei antitruste' que proíbe uma empresa de dominar completamente um mercado e eliminar a concorrência. Isso porque sem concorrência, as empresas tendem a aumentar preços e piorar a qualidade.",
    relatedWords: ["Mercado", "Diferenciação", "Vantagem Competitiva"],
    moduleId: "negocio",
    emoji: "⚔️"
  },
  {
    word: "Mercado",
    pronunciation: "mer-CA-do",
    definition: "Mercado é o espaço (físico ou virtual) onde compradores e vendedores se encontram para negociar. Também usamos 'mercado' para descrever o conjunto de todos os clientes potenciais de um produto. O mercado de smartphones, o mercado de alimentos, o mercado de educação.",
    etymology: "Latim",
    etymologyDetail: "Vem do latim 'mercatus', derivado de 'mercari' (comerciar, negociar), que por sua vez vem de 'merx' (mercadoria). Essa raiz também deu origem às palavras 'mercado', 'mercadoria', 'comércio', 'comerciante' e até 'Mercúrio' — o deus romano do comércio.",
    example: "O mercado de streaming de vídeo movimenta mais de US$100 bilhões por ano no mundo e cresce mais de 10% ao ano.",
    funFact: "Os mercados mais antigos de que se tem registro ficavam na Mesopotâmia (hoje Iraque), por volta de 3.000 a.C. Os sumérios já usavam um sistema de preços, dívidas e contratos comerciais — uma das primeiras formas de economia organizada!",
    relatedWords: ["Demanda", "Oferta", "Segmento"],
    moduleId: "negocio",
    emoji: "🏬"
  },
  {
    word: "Demanda",
    pronunciation: "de-MAN-da",
    definition: "Demanda é a quantidade de um produto ou serviço que os consumidores querem comprar a um determinado preço. Quando muita gente quer algo e há pouco disponível, a demanda é alta. Quanto maior a demanda, mais caro o produto tende a ser!",
    etymology: "Latim/Francês",
    etymologyDetail: "Vem do latim 'demandare', que significa 'pedir, exigir, encomendar'. É formada por 'de' (intensificador) + 'mandare' (ordenar, comandar). A palavra chegou ao português através do francês 'demande'. A mesma raiz deu origem a 'mandar', 'comando' e 'demanda'.",
    example: "Durante a pandemia, a demanda por máscaras cirúrgicas disparou — o preço subiu de R$0,50 para R$5,00 porque tinha muito mais gente querendo comprar do que havia disponível.",
    funFact: "A lei da demanda diz que quando o preço de um produto sobe, a quantidade comprada tende a cair — e vice-versa. Essa relação foi descrita pelo economista Adam Smith em 1776 no livro 'A Riqueza das Nações', que fundou a economia moderna.",
    relatedWords: ["Oferta", "Preço", "Mercado"],
    moduleId: "negocio",
    emoji: "📊"
  },
  {
    word: "Fluxo de Caixa",
    pronunciation: "FLU-xo de CAI-xa",
    definition: "Fluxo de caixa é o controle de todo o dinheiro que entra e sai da empresa ao longo do tempo. É como um extrato bancário, mas mostrando não só o passado mas também as previsões futuras. Uma empresa pode ter lucro mas falir por falta de dinheiro no caixa!",
    etymology: "Inglês/Latim",
    etymologyDetail: "É uma tradução de 'cash flow' do inglês. 'Cash' vem do antigo francês 'casse' (caixa), que por sua vez vem do latim 'capsa' (caixa, cofre). 'Flow' vem do inglês antigo 'flowan' (fluir). A metáfora é de dinheiro 'fluindo' como água em uma caixa.",
    example: "A padaria tem fluxo de caixa positivo: entra R$15.000 por mês e saem R$12.000. Os R$3.000 restantes são o superávit do caixa.",
    funFact: "Warren Buffett disse que a primeira regra dos negócios é nunca ficar sem dinheiro no caixa. Muitas empresas com excelentes produtos faliram não por falta de lucro, mas por falta de dinheiro disponível para pagar as contas do dia a dia.",
    relatedWords: ["Orçamento", "Receita", "Despesa"],
    moduleId: "financas",
    emoji: "💸"
  },
  {
    word: "Missão",
    pronunciation: "mis-SÃO",
    definition: "Missão é a declaração de por que a empresa existe — o seu propósito fundamental. Não é sobre lucro (embora lucro seja importante). É sobre o que a empresa faz pelo mundo. Uma missão clara guia todas as decisões da empresa!",
    etymology: "Latim",
    etymologyDetail: "Vem do latim 'missio', derivado de 'mittere' (enviar, mandar). Originalmente significava 'o ato de ser enviado para uma tarefa'. A Igreja Católica usou a palavra para descrever o envio de religiosos para converter povos. Com o tempo, o sentido evoluiu para 'propósito, objetivo fundamental'.",
    example: "A missão do Google é 'organizar as informações do mundo e torná-las universalmente acessíveis e úteis'. Simples, mas guia tudo que o Google faz.",
    funFact: "A missão da Tesla é 'acelerar a transição do mundo para energia sustentável'. Elon Musk disse que qualquer decisão que afaste a Tesla dessa missão é errada — por isso eles licenciam tecnologia para concorrentes: mais carros elétricos significa missão cumprida!",
    relatedWords: ["Visão", "Valores", "Estratégia"],
    moduleId: "planejamento",
    emoji: "🌟"
  },
  {
    word: "Visão",
    pronunciation: "vi-ZÃO",
    definition: "Visão é como a empresa quer ser no futuro — onde ela quer chegar daqui a 10 ou 20 anos. É o sonho grande da organização, que motiva e orienta todos. Uma visão inspiradora é o que diferencia empresas extraordinárias das comuns!",
    etymology: "Latim",
    etymologyDetail: "Vem do latim 'visio', derivado de 'videre' (ver). Originalmente significava 'o ato de ver' ou 'aparição, revelação'. Com o tempo, ganhou o sentido metafórico de 'capacidade de ver o futuro' ou 'imagem mental do futuro desejado'.",
    example: "Em 1994, a visão da Amazon era 'ser a empresa mais centrada no cliente da Terra'. Era ambiciosa — mas eles foram atrás e hoje são uma das maiores empresas do mundo.",
    funFact: "Em 1961, o presidente americano John F. Kennedy disse 'iremos à lua antes do final desta década'. Essa visão clara mobilizou 400.000 pessoas e US$25 bilhões. Em 1969, o homem pisou na lua. Visões claras e ousadas mudam o mundo!",
    relatedWords: ["Missão", "Valores", "Estratégia"],
    moduleId: "planejamento",
    emoji: "🔭"
  },
  {
    word: "Capital",
    pronunciation: "ca-pi-TAL",
    definition: "Capital é o dinheiro (ou bens) que uma empresa tem disponível para investir e crescer. É o combustível do negócio! Sem capital, a empresa não consegue comprar máquinas, contratar funcionários ou estoque de produtos.",
    etymology: "Latim",
    etymologyDetail: "Vem do latim 'capitalis', derivado de 'caput' (cabeça). Na Roma Antiga, a riqueza era medida em gado — e a cabeça (caput) era a unidade de contagem. 'Capitale' era o principal valor de um bem, a 'cabeça' do patrimônio. A mesma raiz deu 'capital de país' (cidade principal) e 'decapitar'.",
    example: "Para abrir seu salão de beleza, Ana precisou de R$15.000 de capital inicial para pagar o aluguel, comprar equipamentos e ter dinheiro para os primeiros meses.",
    funFact: "O Banco Mundial e o FMI (Fundo Monetário Internacional) emprestam capital para países que precisam de dinheiro para se desenvolver — funcionam como o 'banco dos países'. O Brasil já pegou empréstimos nessas instituições em momentos de crise.",
    relatedWords: ["Investimento", "Patrimônio", "Financiamento"],
    moduleId: "financas",
    emoji: "🏦"
  },
  {
    word: "Gestão",
    pronunciation: "ges-TÃO",
    definition: "Gestão é o processo de planejar, organizar, liderar e controlar os recursos de uma empresa para atingir seus objetivos. Quem faz gestão usa os recursos (pessoas, dinheiro, tempo) da melhor forma possível!",
    etymology: "Latim",
    etymologyDetail: "Vem do latim 'gestio', derivado de 'gerere', que significa 'carregar, conduzir, administrar'. A ideia é de 'conduzir' uma empresa ou equipe. A mesma raiz deu origem a 'gerente', 'gerar' e 'gesticular'. Em inglês, a tradução é 'management'.",
    example: "Uma boa gestão da lanchonete inclui: comprar os ingredientes certos, treinar bem os funcionários, controlar o dinheiro e garantir que os clientes saiam satisfeitos.",
    funFact: "Peter Drucker, considerado o pai da administração moderna, disse que 'a melhor maneira de prever o futuro é criá-lo'. Ele também foi o primeiro a usar a expressão 'trabalhador do conhecimento' — pessoas que criam valor com ideias, não com trabalho físico.",
    relatedWords: ["Liderança", "Administração", "Planejamento"],
    moduleId: "lideranca",
    emoji: "⚙️"
  },
  {
    word: "Planejamento",
    pronunciation: "pla-ne-ja-MEN-to",
    definition: "Planejamento é o processo de definir onde você quer chegar e como vai chegar lá antes de começar a agir. É como fazer um mapa antes de uma viagem longa. Quem planeja bem tem muito mais chance de sucesso!",
    etymology: "Latim/Italiano",
    etymologyDetail: "Vem de 'plano', que por sua vez vem do latim 'planus' (plano, liso, nivelado). Em italiano, 'piano' significa tanto plano (superfície plana) quanto projeto. A ideia de um plano como uma superfície plana onde se projeta algo evoluiu para o sentido de 'projeto, estratégia'.",
    example: "Antes de abrir seu food truck, Rafael passou 3 meses planejando: pesquisou o ponto, criou o cardápio, calculou os custos e projetou as vendas. Resultado: o negócio deu certo desde o primeiro mês!",
    funFact: "Benjamin Franklin disse 'ao falhar em planejar, você está planejando falhar'. Ele era um dos maiores empreendedores da história americana — além de político e inventor, fundou várias empresas de sucesso no século XVIII.",
    relatedWords: ["Estratégia", "Organização", "Meta"],
    moduleId: "planejamento",
    emoji: "📋"
  },
  {
    word: "Valor",
    pronunciation: "va-LOR",
    definition: "Valor é a percepção do cliente sobre o benefício que um produto ou serviço traz para ele. Não é sobre o preço — é sobre o quanto o produto resolve o problema dele. Quando o valor percebido é alto, o cliente paga mais sem reclamar!",
    etymology: "Latim",
    etymologyDetail: "Vem do latim 'valor', derivado de 'valere' (ser forte, ser saudável, ter força). A ideia é que algo 'vale' tanto quanto tem 'força' para satisfazer uma necessidade. A mesma raiz deu 'válido', 'valorizar' e 'equivalente'.",
    example: "O iPhone custa R$8.000, mas milhões de pessoas compram porque percebem um valor enorme: design, status, ecossistema Apple, câmera de qualidade. Eles sentem que o valor supera o preço.",
    funFact: "No séc. XIX, economistas como Karl Marx e Adam Smith debateram intensamente o que determina o valor de algo: o trabalho necessário para produzi-lo ou o quanto as pessoas desejam o produto? Hoje sabemos que é a combinação dos dois — e que o marketing influencia muito essa percepção!",
    relatedWords: ["Preço", "Benefício", "Percepção"],
    moduleId: "marketing",
    emoji: "⭐"
  },
  {
    word: "Contrato",
    pronunciation: "con-TRA-to",
    definition: "Contrato é um acordo formal entre duas ou mais partes, com direitos e obrigações para todos. É como uma promessa com regras e consequências caso alguém não cumpra. Na empresa, contratos garantem que todos honrem seus compromissos!",
    etymology: "Latim",
    etymologyDetail: "Vem do latim 'contractus', particípio passado de 'contrahere', que significa 'reunir, ligar, apertar junto'. É formado por 'con' (junto) + 'trahere' (puxar, arrastar). A ideia é de dois lados sendo 'puxados juntos' por um acordo. A mesma raiz deu 'contrair' e 'trator'.",
    example: "Quando você assina um contrato de aluguel, fica comprometido a pagar o aluguel todo mês. O dono do imóvel fica comprometido a deixar você usar o espaço.",
    funFact: "Os contratos mais antigos de que se tem registro foram encontrados na Mesopotâmia (atual Iraque), gravados em tabuletas de argila por volta de 2.600 a.C. Eram contratos de venda de terras, escravidão e empréstimos — a humanidade tem feito acordos formais há mais de 4.600 anos!",
    relatedWords: ["Acordo", "Obrigação", "Direito"],
    moduleId: "negocio",
    emoji: "📝"
  },
  {
    word: "Salário",
    pronunciation: "sa-LÁ-rio",
    definition: "Salário é a remuneração que um funcionário recebe por seu trabalho em uma empresa. É o dinheiro que o empregado ganha mensalmente pelo tempo, esforço e habilidades que coloca no trabalho.",
    etymology: "Latim",
    etymologyDetail: "Vem do latim 'salarium', derivado de 'sal' (sal). Na Roma Antiga, soldados recebiam parte de seu pagamento em sal, que era um bem extremamente valioso na antiguidade (antes da refrigeração, o sal era usado para conservar alimentos). A expressão 'vale o seu sal' vem daí!",
    example: "Um gerente de marketing em São Paulo ganha em média um salário de R$6.000 a R$12.000 por mês, dependendo da empresa e experiência.",
    funFact: "A expressão em inglês 'not worth his salt' (não vale o seu sal) vem exatamente dessa origem romana. E a palavra 'salary' (salário em inglês) também! O sal foi literalmente a moeda de pagamento dos soldados romanos — e de onde vem a palavra 'salário' até hoje.",
    relatedWords: ["Funcionário", "Remuneração", "Benefício"],
    moduleId: "lideranca",
    emoji: "💵"
  },
  {
    word: "Patrimônio",
    pronunciation: "pa-tri-MÔ-nio",
    definition: "Patrimônio é o conjunto de todos os bens e direitos que uma empresa ou pessoa possui, menos o que deve. É como fazer uma fotografia de quanto você vale! Patrimônio = o que você TEM - o que você DEVE.",
    etymology: "Latim",
    etymologyDetail: "Vem do latim 'patrimonium', derivado de 'pater' (pai). Era o conjunto de bens herdados do pai — a herança paterna. Com o tempo, o significado expandiu para incluir qualquer conjunto de bens acumulados, seja herdado ou construído. A mesma raiz deu 'patrício', 'patrão' e 'padrei'.",
    example: "João tem: uma moto (R$8.000), uma poupança (R$3.000) e deve R$2.000 de empréstimo. Seu patrimônio é R$8.000 + R$3.000 - R$2.000 = R$9.000.",
    funFact: "O homem mais rico do mundo, Elon Musk, tem um patrimônio de mais de US$200 bilhões. Mas esse número sobe e cai todos os dias conforme o preço das ações de suas empresas (Tesla, SpaceX) muda. Já perdeu e recuperou dezenas de bilhões em um único dia!",
    relatedWords: ["Ativo", "Passivo", "Capital"],
    moduleId: "financas",
    emoji: "🏆"
  },
  {
    word: "Franquia",
    pronunciation: "fran-QUI-a",
    definition: "Franquia é um modelo de negócio onde uma empresa (franqueadora) vende o direito de usar sua marca, produto e modelo de negócio para outras pessoas (franqueados). É como comprar uma receita de sucesso já testada!",
    etymology: "Francês/Germânico",
    etymologyDetail: "Vem do francês 'franchise', que por sua vez vem do germânico antigo 'frank' (livre, franco). Na Idade Média, 'franchise' era um privilégio ou direito especial concedido pelo rei a um cidadão. Com o tempo, evoluiu para o sentido comercial moderno de 'direito de operar um negócio'.",
    example: "O McDonald's é uma das maiores franquias do mundo. Existem mais de 40.000 restaurantes McDonald's em 100 países — a maioria pertence a franqueados locais!",
    funFact: "O Boticário é a maior rede de franquias do Brasil, com mais de 4.000 lojas. O Sistema de Franquias brasileiro é um dos maiores do mundo — só perde para os EUA. Existem mais de 180.000 unidades franqueadas no país, gerando mais de 1,5 milhão de empregos.",
    relatedWords: ["Modelo de Negócio", "Marca", "Expansão"],
    moduleId: "negocio",
    emoji: "🍔"
  },
  {
    word: "Custo",
    pronunciation: "CUS-to",
    definition: "Custo é o gasto necessário para produzir ou fornecer um produto ou serviço. É quanto custa FAZER o que você vende — matéria-prima, embalagem, mão de obra. Diferente de despesa (que são gastos gerais para manter a empresa).",
    etymology: "Latim",
    etymologyDetail: "Vem do latim 'constare' (custar, estar em pé), que significa 'ser pago', 'ter um valor'. A ideia original era de 'quanto é preciso para se manter em pé' — quanto é necessário para que algo exista. A mesma raiz deu 'constar', 'constante' e 'constar'.",
    example: "O custo de um par de tênis da Nike inclui: R$30 de materiais, R$20 de mão de obra e R$10 de logística. Total: R$60 de custo. Mas ele é vendido por R$300!",
    funFact: "A diferença entre o custo de produção e o preço de venda pode ser enorme. Um iPhone que custa US$500 tem partes que custam em torno de US$200. Os outros US$300 cobrem design, software, marketing, distribuição e — principalmente — o lucro da Apple.",
    relatedWords: ["Despesa", "Preço", "Margem"],
    moduleId: "financas",
    emoji: "🔢"
  },
  {
    word: "Preço",
    pronunciation: "PRE-ço",
    definition: "Preço é o valor monetário que o cliente paga por um produto ou serviço. Definir o preço certo é uma das decisões mais importantes de um negócio — muito alto afasta clientes, muito baixo pode causar prejuízo.",
    etymology: "Latim",
    etymologyDetail: "Vem do latim 'pretium', que significa 'valor, recompensa, prêmio'. A mesma raiz deu 'precioso' (de grande valor) e 'depreciar' (diminuir o valor). Em algumas línguas, como o espanhol ('precio') e o italiano ('prezzo'), a palavra é quase idêntica.",
    example: "O Starbucks cobra R$22 por um café que custa R$2 para fazer. O preço alto é justificado pelo ambiente, pelo atendimento personalizado e pelo status da marca.",
    funFact: "A psicologia de preços é um campo inteiro de estudo! Por que preços terminam em R$9,99 em vez de R$10,00? Porque nosso cérebro lê os dígitos da esquerda para a direita — o primeiro dígito (9) parece menor que 10, mesmo a diferença sendo de apenas R$0,01.",
    relatedWords: ["Custo", "Valor", "Margem"],
    moduleId: "financas",
    emoji: "🏷️"
  },
  {
    word: "Brainstorming",
    pronunciation: "BREN-is-tor-ming",
    definition: "Brainstorming é uma técnica criativa onde um grupo gera o máximo de ideias possível em um curto período de tempo, sem julgar ou criticar nenhuma delas. O objetivo é quantidade — quanto mais ideias, mais chances de encontrar uma ótima!",
    etymology: "Inglês",
    etymologyDetail: "Vem do inglês 'brain' (cérebro) + 'storm' (tempestade). Literalmente, 'tempestade cerebral'. A técnica foi desenvolvida pelo publicitário americano Alex Osborn em 1953, no livro 'Applied Imagination'. A ideia é de criar uma 'tempestade' de ideias na mente.",
    example: "Para criar o nome do novo produto, a equipe fez um brainstorming: em 20 minutos, geraram 47 nomes diferentes. Depois, selecionaram os 5 melhores e fizeram uma votação.",
    funFact: "O Post-it (aquelas notas adesivas coloridas) foi criado durante um brainstorming na 3M. O químico Spencer Silver tinha criado uma cola fraca (que colava mas soltava facilmente) — inicialmente considerada um fracasso. Depois, alguém teve a ideia de usá-la em pedaços de papel. Hoje, a 3M vende bilhões de Post-its por ano!",
    relatedWords: ["Criatividade", "Inovação", "Design Thinking"],
    moduleId: "inovacao",
    emoji: "🧠"
  },
  {
    word: "Persona",
    pronunciation: "per-SO-na",
    definition: "Persona (ou buyer persona) é um personagem semi-fictício que representa o cliente ideal de uma empresa. Tem nome, idade, profissão, hobbies, sonhos e dores. Ela ajuda a criar produtos e mensagens que falem diretamente com as pessoas certas!",
    etymology: "Latim",
    etymologyDetail: "Vem do latim 'persona', que originalmente significava a máscara usada por atores no teatro greco-romano. Cada máscara representava um personagem diferente (alegre, triste, nobre, plebeu). Com o tempo, passou a significar 'personagem, papel social, identidade'. Em psicologia, Jung usou o termo para o 'papel social' que desempenhamos.",
    example: "A persona do Duolingo é 'João, 25 anos, quer aprender inglês para trabalho mas não tem tempo para aulas. Usa o celular no metrô e quer aprender em pequenas doses diárias'.",
    funFact: "O conceito de persona em marketing foi popularizado por Alan Cooper, designer americano, em 1999. Antes dele, as empresas criavam produtos para 'o usuário médio' — que na verdade não existe! Pensar em personas específicas revolucionou o design de produtos e serviços.",
    relatedWords: ["Marketing", "Segmentação", "Cliente Ideal"],
    moduleId: "marketing",
    emoji: "👤"
  },
  {
    word: "MVP",
    pronunciation: "M-V-P",
    definition: "MVP significa Mínimo Produto Viável (em inglês: Minimum Viable Product). É a versão mais simples do seu produto que ainda pode ser lançada e testada com clientes reais. O objetivo é aprender rápido sem gastar muito!",
    etymology: "Inglês",
    etymologyDetail: "É uma sigla inglesa criada por Frank Robinson em 2001 e popularizada por Eric Ries no livro 'A Startup Enxuta' (2011). 'Minimum' (mínimo), 'Viable' (viável, que funciona) e 'Product' (produto). A ideia é de criar o menor produto que ainda funcione e entregue valor para o cliente.",
    example: "O MVP do Airbnb era simples: Brian Chesky fotografou seu próprio apartamento, criou um site básico e alugou para estranhos. Funcionou! Então eles construíram a plataforma completa.",
    funFact: "O Twitter começou como um MVP interno na empresa Odeo — era apenas uma ferramenta para funcionários se comunicarem. Quando perceberam que a ideia era boa, transformaram em produto público. Em 2022, Elon Musk comprou o Twitter por US$44 bilhões — de um MVP!",
    relatedWords: ["Startup", "Prototipagem", "Validação"],
    moduleId: "inovacao",
    emoji: "🔧"
  },
  {
    word: "NPS",
    pronunciation: "N-P-S",
    definition: "NPS (Net Promoter Score) é uma métrica simples que mede a satisfação e lealdade dos clientes. É calculado perguntando: 'Em uma escala de 0 a 10, qual a probabilidade de você nos recomendar a um amigo?' Empresas com alto NPS crescem mais!",
    etymology: "Inglês",
    etymologyDetail: "É uma sigla inglesa criada por Fred Reichheld, consultor da Bain & Company, em 2003. 'Net' (líquido, resultado final), 'Promoter' (promotor, quem indica) e 'Score' (pontuação). Foi publicada na Harvard Business Review e rapidamente adotada pelas maiores empresas do mundo.",
    example: "A Apple tem um dos maiores NPS do mundo (acima de 70). Isso significa que a grande maioria dos clientes da Apple recomenda os produtos para amigos e família.",
    funFact: "Warren Buffett disse que você descobre o caráter de alguém (ou empresa) vendo o que acontece quando algo dá errado. O NPS é mais alto em empresas que tratam bem os clientes mesmo nos momentos difíceis — quando há um problema e a empresa resolve rapidamente, o cliente frequentemente se torna ainda mais fiel.",
    relatedWords: ["Satisfação", "Fidelização", "Feedback"],
    moduleId: "clientes",
    emoji: "📊"
  },
  {
    word: "Stakeholder",
    pronunciation: "STÉIK-hol-der",
    definition: "Stakeholder é qualquer pessoa ou grupo que tem interesse em uma empresa e pode ser afetado pelas suas decisões. Inclui funcionários, clientes, fornecedores, investidores, comunidade e governo. Uma empresa de sucesso considera todos os stakeholders!",
    etymology: "Inglês",
    etymologyDetail: "Vem do inglês 'stake' (aposta, estaca, participação) + 'holder' (detentor, possuidor). Originalmente, 'stake holder' era o árbitro neutro que guardava as apostas em jogos. Com o tempo, evoluiu para 'aquele que tem participação (stake) em algo'. O conceito moderno foi popularizado pelo filósofo R. Edward Freeman em 1984.",
    example: "Quando uma fábrica quer expandir, seus stakeholders incluem: funcionários (querem mais emprego), vizinhos (preocupados com barulho e poluição), prefeitura (quer os impostos), e investidores (querem o lucro).",
    funFact: "Antes do conceito de stakeholders, empresas pensavam apenas nos acionistas (shareholders). A mudança de 'shareholder' para 'stakeholder' representa uma revolução no pensamento empresarial: a empresa tem responsabilidade com toda a sociedade, não apenas com quem investe dinheiro.",
    relatedWords: ["Gestão", "Responsabilidade Social", "Governança"],
    moduleId: "negocio",
    emoji: "🤝"
  },
  {
    word: "Pivô",
    pronunciation: "pi-VÔ",
    definition: "Pivotar (fazer um pivô) significa mudar a direção estratégica de uma startup mantendo o que foi aprendido. É diferente de desistir — você mantém a missão e a equipe, mas muda o produto ou o mercado com base no que aprendeu.",
    etymology: "Francês/Inglês",
    etymologyDetail: "Vem do francês 'pivot' (eixo, ponto de giro). Em francês, é a peça central ao redor da qual algo gira. No basquete, 'pivotar' é girar em torno de um pé. No mundo das startups, o conceito foi popularizado por Eric Ries no livro 'A Startup Enxuta' (2011) para descrever uma mudança de estratégia fundamentada em aprendizado.",
    example: "O Instagram pivotou: começou como um aplicativo de check-in com muitas funções (chamado Burbn) e pivotou para focar apenas em fotos com filtros. Resultado: um dos aplicativos mais baixados da história!",
    funFact: "O Slack, hoje um dos aplicativos de comunicação empresarial mais usados do mundo, começou como um jogo de RPG chamado 'Glitch'. O jogo fracassou, mas a ferramenta de comunicação que a equipe criou para se comunicar enquanto desenvolvia o jogo virou o produto principal — um pivô que gerou uma empresa de US$26 bilhões!",
    relatedWords: ["Startup", "MVP", "Inovação"],
    moduleId: "inovacao",
    emoji: "🔄"
  },
  {
    word: "Escala",
    pronunciation: "es-CA-la",
    definition: "Um negócio escalável é aquele que pode crescer muito sem que os custos cresçam na mesma proporção. Se você vende 1 ou 1 milhão de cópias de um aplicativo, o custo de produção é quase o mesmo. Isso é alta escalabilidade!",
    etymology: "Latim",
    etymologyDetail: "Vem do latim 'scala' (escada, degraus). A metáfora é subir uma escada — cada degrau representa um nível maior. 'Escalar' um negócio é 'subir' para volumes maiores de operação. No inglês, 'scale' tem a mesma raiz e o mesmo sentido.",
    example: "A Netflix é altamente escalável: os custos de produção do conteúdo são fixos, mas cada novo assinante gera mais receita sem aumentar custos. Podem ter 1 ou 300 milhões de assinantes sem construir nada novo!",
    funFact: "Um quiosque de limonada é de baixa escalabilidade — para dobrar as vendas, você precisa de mais limonadas, mais copos, mais trabalho. Um aplicativo é altamente escalável — para dobrar os usuários, você não precisa praticamente de nada extra. É por isso que empresas de tecnologia podem se tornar as mais valiosas do mundo tão rapidamente!",
    relatedWords: ["Startup", "Crescimento", "Modelo de Negócio"],
    moduleId: "empreendedorismo",
    emoji: "📈"
  }
];

export function getWordsByModule(moduleId: string): DictionaryWord[] {
  return DICTIONARY.filter(w => w.moduleId === moduleId);
}

export function getWordByName(word: string): DictionaryWord | undefined {
  return DICTIONARY.find(w => w.word.toLowerCase() === word.toLowerCase());
}

export const DICTIONARY_WORD_NAMES = DICTIONARY.map(w => w.word);
