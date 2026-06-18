export interface Lei {
  id: string;
  numero: string;
  nome: string;
  categoria: LeiCategoria;
  resumo: string;
  oQueRegula: string;
  oQueNaoPode: string[];
  multas: string[];
  orgaoFiscalizador: string;
  link?: string;
}

export type LeiCategoria =
  | "trabalhista"
  | "tributaria"
  | "societaria"
  | "consumidor"
  | "dados"
  | "concorrencia"
  | "propriedade-intelectual"
  | "anticorrupcao"
  | "recuperacao"
  | "ambiental";

export const CATEGORIAS_LEIS: Record<LeiCategoria, { label: string; emoji: string; color: string }> = {
  trabalhista: { label: "Trabalhista", emoji: "👷", color: "#f59e0b" },
  tributaria: { label: "Tributária", emoji: "🧾", color: "#ef4444" },
  societaria: { label: "Societária", emoji: "🏢", color: "#3b82f6" },
  consumidor: { label: "Consumidor", emoji: "🛒", color: "#22c55e" },
  dados: { label: "Dados e Privacidade", emoji: "🔒", color: "#a78bfa" },
  concorrencia: { label: "Concorrência", emoji: "⚖️", color: "#f97316" },
  "propriedade-intelectual": { label: "Propriedade Intelectual", emoji: "💡", color: "#06b6d4" },
  anticorrupcao: { label: "Anticorrupção", emoji: "🚫", color: "#e11d48" },
  recuperacao: { label: "Falência e Recuperação", emoji: "📉", color: "#64748b" },
  ambiental: { label: "Ambiental", emoji: "🌿", color: "#16a34a" },
};

export const LEIS: Lei[] = [
  // ─── TRABALHISTA ────────────────────────────────────────────────────────────
  {
    id: "clt",
    numero: "Decreto-Lei nº 5.452/1943",
    nome: "Consolidação das Leis do Trabalho (CLT)",
    categoria: "trabalhista",
    resumo: "A CLT é a principal legislação trabalhista do Brasil. Regula todos os aspectos da relação de emprego formal: contratação, jornada, remuneração, férias, rescisão e segurança no trabalho.",
    oQueRegula: "Contrato de trabalho com carteira assinada (CTPS), jornada máxima de 8h/dia e 44h/semana, horas extras (adicional mínimo de 50%), férias de 30 dias com acréscimo de 1/3, 13º salário, aviso prévio (30 dias + 3 dias por ano de empresa, máximo 90 dias), FGTS (8% do salário depositado mensalmente pelo empregador), adicional noturno (20% para trabalho após 22h), NR's (Normas Regulamentadoras de segurança e saúde no trabalho).",
    oQueNaoPode: [
      "Exigir jornada superior a 10 horas diárias (máximo legal incluindo horas extras), salvo acordo coletivo específico",
      "Descontar do salário do funcionário itens além dos previstos em lei (apenas INSS, IR, vale-transporte acima de 6% e dívidas reconhecidas por ele)",
      "Obrigar o funcionário a trabalhar no 1º de Maio (Dia do Trabalho) sem pagamento de hora extra em dobro",
      "Discriminar na contratação ou demissão por raça, sexo, religião, orientação sexual ou deficiência (Lei 9.029/1995)",
      "Demitir funcionária grávida (estabilidade até 5 meses após o parto), funcionário em afastamento por doença ou acidente de trabalho",
      "Exigir atestado de gravidez ou exame de HIV como condição de contratação ou manutenção do emprego",
    ],
    multas: [
      "Não depositar FGTS: multa de 5% sobre o valor não depositado + SELIC por mês de atraso",
      "Não assinar a CTPS em até 48 horas da admissão: multa de R$3.000 por empregado",
      "Excesso de jornada sem compensação: auto de infração com multa de R$1.595 a R$40.000 por empregado",
      "Trabalho informal (sem registro): multa de R$800 por empregado, dobrada na reincidência",
      "Assédio moral ou sexual: indenização por danos morais de R$5.000 a R$100.000 ou mais, definida pelo juiz",
    ],
    orgaoFiscalizador: "Ministério do Trabalho e Emprego (MTE), Procuradoria Regional do Trabalho (PRT), Justiça do Trabalho",
  },
  {
    id: "lei-estagio",
    numero: "Lei nº 11.788/2008",
    nome: "Lei do Estágio",
    categoria: "trabalhista",
    resumo: "Regula o estágio de estudantes de educação superior, profissional, médio, especial e dos anos finais do ensino fundamental. Define obrigações de empresas e instituições de ensino.",
    oQueRegula: "Estágio obrigatório (parte curricular obrigatória, sem bolsa necessária) e não obrigatório (remunerado com bolsa e vale-transporte obrigatórios). Carga máxima de 6h/dia e 30h/semana para superior; 4h/dia e 20h/semana para ensino médio. Duração máxima de 2 anos no mesmo empregador. O estagiário não é empregado — não tem FGTS, 13º salário nem INSS obrigatório. Tem direito a recesso remunerado de 30 dias por ano. A empresa deve designar um supervisor com formação compatível.",
    oQueNaoPode: [
      "Contratar estagiário para executar atividades sem relação com o curso de graduação",
      "Manter o mesmo estagiário por mais de 2 anos na empresa",
      "Exceder a cota máxima: empresas até 25 funcionários podem ter até 5 estagiários; acima disso, até 20% do quadro",
      "Exigir jornada superior ao limite legal como condição do estágio",
    ],
    multas: [
      "Caracterização de vínculo empregatício: pagamento retroativo de todos os direitos trabalhistas (FGTS, 13º, férias, aviso prévio) + multa de 40% do FGTS",
      "Não formalizar termo de compromisso com a instituição de ensino: nulidade do estágio e reconhecimento de vínculo",
    ],
    orgaoFiscalizador: "Ministério do Trabalho e Emprego (MTE), Ministério da Educação (MEC)",
  },

  // ─── TRIBUTÁRIA ─────────────────────────────────────────────────────────────
  {
    id: "simples-nacional",
    numero: "Lei Complementar nº 123/2006",
    nome: "Simples Nacional (Estatuto Nacional da Microempresa e da Empresa de Pequeno Porte)",
    categoria: "tributaria",
    resumo: "O Simples Nacional é um regime tributário simplificado que unifica em uma guia única (DAS) o recolhimento de 8 impostos federais, estaduais e municipais para microempresas (ME) e empresas de pequeno porte (EPP).",
    oQueRegula: "MEI (Microempreendedor Individual): faturamento até R$81.000/ano; ME: até R$360.000/ano; EPP: até R$4.800.000/ano. Alíquotas variam de 4% a 33% dependendo do faturamento e do Anexo (atividade econômica). Impostos incluídos no DAS: IRPJ, CSLL, PIS, COFINS, IPI, CPP (contribuição patronal), ICMS e ISS. Desobriga de algumas obrigações acessórias exigidas do Lucro Real e Presumido.",
    oQueNaoPode: [
      "Ter sócios pessoas jurídicas (outra empresa)",
      "Ser filial, sucursal, agência ou representação de pessoa jurídica com sede no exterior",
      "Participar do capital de outra empresa como sócia com mais de 10% do capital daquela empresa",
      "Exercer certas atividades excluídas do Simples (bancos, seguradoras, factoring, fabricação de automóveis)",
      "Ter débitos tributários sem parcelamento aprovado (perde o enquadramento)",
    ],
    multas: [
      "Omissão de receitas ou declaração incorreta no PGDAS-D: multa de 75% do imposto não pago",
      "Atraso no pagamento do DAS: multa de 2% ao mês, juros SELIC acumulada",
      "Não apresentação da DEFIS (declaração anual): multa de R$500 por mês de atraso",
    ],
    orgaoFiscalizador: "Receita Federal do Brasil (RFB), SEFAZ Estadual, Secretaria Municipal de Finanças",
  },
  {
    id: "sonegacao-fiscal",
    numero: "Lei nº 8.137/1990",
    nome: "Crimes Contra a Ordem Tributária",
    categoria: "tributaria",
    resumo: "Define os crimes tributários — sonegação, fraude fiscal e demais condutas que lesam o fisco — e estabelece as penas aplicáveis às pessoas físicas e jurídicas.",
    oQueRegula: "Constitui crime: omitir informação ou prestar declaração falsa às autoridades fazendárias; fraudar fiscalização tributária; falsificar documentos fiscais; elaborar arquivo falso para alterar apuração de tributos; utilizar crédito fiscal indevido; deixar de recolher tributos descontados de terceiros (INSS dos funcionários, por exemplo).",
    oQueNaoPode: [
      "Emitir notas fiscais com valores subfaturados para reduzir ICMS ou IPI",
      "Usar CPF ou CNPJ de terceiros ('laranjas') para ocultar faturamento real",
      "Simular transações com empresas do exterior para ocultar lucros tributáveis",
      "Deixar de recolher o INSS descontado dos funcionários na folha de pagamento",
      "Omitir receitas no Imposto de Renda da empresa",
    ],
    multas: [
      "Multa de 75% do imposto não pago (pode chegar a 150% em caso de fraude comprovada)",
      "Pena de 2 a 5 anos de reclusão para os responsáveis legais (diretores, sócios administradores)",
      "Inclusão em dívida ativa com execução fiscal e penhora de bens",
      "Responsabilização solidária dos sócios com poderes de gestão (Código Tributário Nacional, art. 135)",
    ],
    orgaoFiscalizador: "Receita Federal do Brasil, SEFAZ, Polícia Federal (em casos de organização criminosa), Ministério Público Federal",
  },

  // ─── SOCIETÁRIA ─────────────────────────────────────────────────────────────
  {
    id: "codigo-civil-contratos",
    numero: "Lei nº 10.406/2002",
    nome: "Código Civil Brasileiro — Contratos e Direito Empresarial",
    categoria: "societaria",
    resumo: "O Código Civil regula os contratos e as sociedades empresariais, estabelecendo as regras para a constituição, operação e dissolução de empresas e as obrigações contratuais entre partes.",
    oQueRegula: "Requisitos de validade dos contratos (arts. 104-114): partes capazes, objeto lícito e forma prescrita. Sociedade Simples e Sociedade Limitada (LTDA) — arts. 982-1.102: constituição, responsabilidade dos sócios, administração, dissolução. Nome empresarial: cada empresa deve ter denominação ou firma registrada na Junta Comercial. Responsabilidade limitada dos sócios de LTDA ao valor de suas cotas (art. 1.052) — o patrimônio pessoal está protegido, salvo desconsideração da personalidade jurídica.",
    oQueNaoPode: [
      "Misturar o patrimônio pessoal com o da empresa (confusão patrimonial — gera desconsideração da personalidade jurídica e os sócios respondem com bens pessoais pelas dívidas da empresa)",
      "Celebrar contratos com objeto ilícito ou simulado (são nulos de pleno direito)",
      "Usar nome empresarial igual ou semelhante ao de empresa já registrada na mesma Junta Comercial",
      "Praticar atos de gestão sem poderes outorgados no contrato social",
    ],
    multas: [
      "Desconsideração da personalidade jurídica (art. 50 CC): sócios respondem com patrimônio pessoal pelas dívidas da empresa quando há abuso da personalidade jurídica",
      "Irregularidade no registro da empresa: multa da Junta Comercial de R$50 a R$5.000 e nulidade de atos praticados",
    ],
    orgaoFiscalizador: "Junta Comercial Estadual (JUCESP, JUCERJA etc.), Ministério Público Estadual, Poder Judiciário",
  },
  {
    id: "lei-sa",
    numero: "Lei nº 6.404/1976",
    nome: "Lei das Sociedades por Ações (Lei das S.A.)",
    categoria: "societaria",
    resumo: "Regula as sociedades anônimas (S.A.) no Brasil — tanto as de capital fechado quanto as abertas (listadas em bolsa). Estabelece governança, direitos dos acionistas, obrigações de transparência e responsabilidade dos administradores.",
    oQueRegula: "Tipos de ações: ordinárias (com direito a voto) e preferenciais (prioridade em dividendos, geralmente sem voto). Conselho de Administração (CA): obrigatório em companhias abertas, define estratégia e fiscaliza a diretoria. Diretoria: responsável pela gestão executiva. Conselho Fiscal: fiscaliza os administradores e os demonstrativos financeiros. Assembleia Geral de Acionistas (AGO): reunião obrigatória anual para aprovação de demonstrativos e destinação de lucros. Dividendo obrigatório mínimo: 25% do lucro líquido ajustado (salvo exceções para reinvestimento). Insider trading: negociar ações com base em informações privilegiadas é crime.",
    oQueNaoPode: [
      "Diretores e conselheiros negociar ações da própria empresa com base em informações não públicas (insider trading — crime com pena de 1 a 5 anos de reclusão, Lei 6.385/1976)",
      "Distribuir dividendos se a empresa tiver prejuízo acumulado ou reservas insuficientes",
      "Companhias abertas: praticar atos relevantes sem divulgação imediata ao mercado via fato relevante à CVM",
      "Administradores agirem em conflito de interesse com a empresa sem declarar formalmente e se abster da decisão",
    ],
    multas: [
      "Insider trading: pena de reclusão de 1 a 5 anos + multa de até 3 vezes o ganho ilícito obtido (CVM)",
      "Omissão de informações relevantes ao mercado: multa da CVM de R$500 a R$500 milhões",
      "Responsabilidade civil dos administradores por prejuízos causados à companhia por atos contrários à lei ou ao estatuto",
    ],
    orgaoFiscalizador: "CVM (Comissão de Valores Mobiliários), B3, Ministério Público",
  },

  // ─── CONSUMIDOR ─────────────────────────────────────────────────────────────
  {
    id: "cdc",
    numero: "Lei nº 8.078/1990",
    nome: "Código de Defesa do Consumidor (CDC)",
    categoria: "consumidor",
    resumo: "O CDC protege os consumidores em todas as relações de consumo no Brasil, estabelecendo direitos básicos, proibindo práticas abusivas, e determinando a responsabilidade objetiva do fornecedor por defeitos e vícios do produto ou serviço.",
    oQueRegula: "Direitos básicos do consumidor: informação adequada, proteção contra publicidade enganosa, proteção contratual, prevenção de danos. Prazo de arrependimento: 7 dias para compras fora do estabelecimento (internet, telefone) — art. 49. Garantia legal de 30 dias para produtos não duráveis e 90 dias para duráveis, além da garantia contratual. Responsabilidade pelo fato do produto: fornecedor responde objetivamente (independente de culpa) por danos causados por defeito do produto. Proibição de cláusulas abusivas em contratos (art. 51).",
    oQueNaoPode: [
      "Veicular publicidade enganosa — qualquer informação falsa ou que induza ao erro sobre características, qualidade, quantidade, preço ou origem do produto",
      "Publicidade abusiva: que explore medo, superstição, discrimine grupos, induza criança ao consumo ou desrespeite valores ambientais",
      "Cobrar preço diferente do anunciado ou exposto (a empresa é obrigada a honrar o preço exibido, mesmo que seja erro)",
      "Negar atendimento a consumidor deficiente ou dificultar o exercício de seus direitos",
      "Incluir cláusulas que exonerem o fornecedor de responsabilidade por defeito do produto (nulas de pleno direito)",
      "Enviar produtos ou prestar serviços sem solicitação prévia e cobrar por eles",
    ],
    multas: [
      "Procon: de R$400 a R$10,7 milhões dependendo da gravidade e do porte da empresa",
      "Publicidade enganosa: além da multa, obrigação de veicular publicidade corretiva",
      "Venda casada (condicionar venda de um produto à compra de outro): infração com multa administrativa e responsabilidade civil",
      "Não atender prazo de entrega informado: consumidor pode exigir troca, reembolso total ou abatimento proporcional",
    ],
    orgaoFiscalizador: "Procon Estadual e Municipal, SENACON (Secretaria Nacional do Consumidor — MJSP), Ministério Público, Poder Judiciário",
  },

  // ─── DADOS E PRIVACIDADE ────────────────────────────────────────────────────
  {
    id: "lgpd",
    numero: "Lei nº 13.709/2018",
    nome: "Lei Geral de Proteção de Dados Pessoais (LGPD)",
    categoria: "dados",
    resumo: "A LGPD regula o tratamento de dados pessoais de pessoas naturais no Brasil por qualquer pessoa física ou jurídica, de direito público ou privado. Define os direitos dos titulares, as obrigações dos controladores e operadores, e as penalidades pelo descumprimento.",
    oQueRegula: "Dado pessoal: qualquer informação que identifique ou possa identificar uma pessoa (nome, CPF, e-mail, IP, localização, cookies). Dado sensível: origem racial/étnica, religião, opinião política, saúde, vida sexual, dado genético ou biométrico — exige proteção reforçada. 10 bases legais que autorizam o tratamento de dados (consentimento, execução de contrato, obrigação legal, legítimo interesse, entre outras). DPO (Data Protection Officer / Encarregado): responsável pela conformidade. Notificação de incidentes de segurança à ANPD.",
    oQueNaoPode: [
      "Coletar dados pessoais sem base legal definida e documentada",
      "Usar os dados para finalidade diferente da informada ao titular no momento da coleta",
      "Transferir dados a terceiros sem as garantias adequadas (cláusulas contratuais padrão ou certificação de conformidade)",
      "Reter dados pessoais por prazo superior ao necessário para a finalidade declarada",
      "Tratar dados de crianças (menores de 12 anos) sem consentimento específico dos pais ou responsáveis",
      "Negar ao titular o acesso aos seus dados, a correção de erros ou a exclusão quando solicitado",
    ],
    multas: [
      "Advertência com prazo para medidas corretivas",
      "Multa de até 2% do faturamento bruto da empresa no último exercício, limitada a R$50 milhões por infração — aplicada pela ANPD",
      "Publicização da infração (dano reputacional significativo)",
      "Bloqueio ou eliminação dos dados pessoais tratados irregularmente",
      "Suspensão total ou parcial do banco de dados por até 6 meses (prorrogável por igual período)",
    ],
    orgaoFiscalizador: "ANPD (Autoridade Nacional de Proteção de Dados), Poder Judiciário, SENACON",
  },
  {
    id: "marco-civil",
    numero: "Lei nº 12.965/2014",
    nome: "Marco Civil da Internet",
    categoria: "dados",
    resumo: "O Marco Civil da Internet estabelece os princípios, garantias, direitos e deveres para o uso da internet no Brasil, regulando a responsabilidade de provedores de aplicações e a proteção de dados dos usuários.",
    oQueRegula: "Neutralidade de rede: todos os pacotes de dados devem ser tratados de forma isonômica pelos provedores de conexão. Guarda de registros: provedores de conexão devem guardar dados de conexão por 1 ano; provedores de aplicações (apps, sites), por 6 meses. Responsabilidade dos provedores: provedores de aplicação só respondem por conteúdo gerado por terceiros após ordem judicial descumprida (exceto material de nudez não consentida e pornografia infantil). Privacidade: provedores não podem usar os dados de usuários para fins não comunicados.",
    oQueNaoPode: [
      "Provedores de conexão e aplicações monitorarem dados de usuários para publicidade comportamental sem consentimento expresso",
      "Empresas fornecedoras de serviços de internet discriminarem o tráfego de dados por tipo de conteúdo, origem ou destino (violação da neutralidade de rede)",
      "Exigir dados pessoais para acesso a conteúdo que não necessite identificação",
    ],
    multas: [
      "Advertência, com indicação de prazo para adoção de medidas corretivas",
      "Multa de até 10% do faturamento do grupo econômico no Brasil no último exercício",
      "Suspensão temporária das atividades que envolvam os atos infratores",
      "Proibição de exercício das atividades que envolvam os atos infratores",
    ],
    orgaoFiscalizador: "ANPD, Ministério das Comunicações, Anatel, Poder Judiciário",
  },

  // ─── CONCORRÊNCIA ───────────────────────────────────────────────────────────
  {
    id: "lei-concorrencia",
    numero: "Lei nº 12.529/2011",
    nome: "Lei de Defesa da Concorrência (Lei Antitruste)",
    categoria: "concorrencia",
    resumo: "Estrutura o Sistema Brasileiro de Defesa da Concorrência (SBDC), define as infrações à ordem econômica e estabelece o processo de controle de atos de concentração (fusões e aquisições) pelo CADE.",
    oQueRegula: "Infrações à ordem econômica: cartel (acordo entre concorrentes para fixar preços, dividir mercado ou eliminar concorrência), abuso de posição dominante, dumping predatório. Controle de concentrações (M&A): fusões e aquisições que envolvam grupos com faturamento combinado acima de R$750 milhões devem ser aprovadas pelo CADE antes de serem consumadas. O CADE pode aprovar, reprovar ou aprovar com restrições (remédios) os atos de concentração.",
    oQueNaoPode: [
      "Combinar preços com concorrentes (cartel — crime com pena de 2 a 5 anos de reclusão, Lei 12.529/2011, art. 4º)",
      "Dividir territórios ou clientes com concorrentes",
      "Boicotar fornecedores ou distribuidores para prejudicar um concorrente específico",
      "Praticar vendas casadas abusivas: condicionar venda de produto dominante à compra de outro",
      "Consumar fusão ou aquisição sujeita à aprovação do CADE antes da autorização (gun jumping) — multa de R$60.000 a R$60 milhões",
    ],
    multas: [
      "Cartel: multa de 0,1% a 20% do faturamento bruto da empresa no último ano, acrescida de 1/3 nos casos de liderança do cartel",
      "Gun jumping: multa de R$60.000 a R$60 milhões",
      "Pena criminal para pessoas físicas que participem de cartel: 2 a 5 anos de reclusão",
      "Programa de Leniência: empresa que denunciar cartel ao CADE antes da investigação pode obter imunidade total ou redução de 1/3 a 2/3 da multa",
    ],
    orgaoFiscalizador: "CADE (Conselho Administrativo de Defesa Econômica), Ministério Público Federal",
  },

  // ─── PROPRIEDADE INTELECTUAL ─────────────────────────────────────────────────
  {
    id: "lei-pi",
    numero: "Lei nº 9.279/1996",
    nome: "Lei de Propriedade Industrial",
    categoria: "propriedade-intelectual",
    resumo: "Regula os direitos e obrigações relativos à propriedade industrial no Brasil: marcas, patentes, desenhos industriais e indicações geográficas. Fundamental para empresas que desenvolvem produtos, tecnologias ou identidade de marca.",
    oQueRegula: "Marca: sinal distintivo que identifica produtos ou serviços — registro no INPI garante uso exclusivo por 10 anos, renovável indefinidamente, por classe de produto/serviço. Patente de invenção: protege a solução técnica nova e inventiva — vigência de 20 anos. Patente de modelo de utilidade: protege nova forma de objeto de uso prático — vigência de 15 anos. Desenho industrial: protege a forma ornamental de um objeto — vigência de 10 anos, renovável por 3 períodos de 5 anos. Segredo industrial: proteção por confidencialidade sem registro formal, mas sujeito a risco de revelação.",
    oQueNaoPode: [
      "Usar marca registrada de terceiro no mesmo ramo de atividade sem autorização — crime de violação de marca com pena de detenção de 3 meses a 1 ano e multa",
      "Fabricar, importar ou vender produto protegido por patente sem licença do titular — crime de violação de patente com pena de 3 meses a 1 ano de detenção e multa",
      "Reproduzir design de produto protegido por registro de desenho industrial",
      "Usar indicação geográfica falsa em produto (ex: chamar vinho de outra região de 'Champagne') — concorrência desleal",
    ],
    multas: [
      "Violação de marca: além das penas criminais, indenização civil pelos danos causados — calculada sobre o tempo de uso indevido e o valor da marca",
      "Violação de patente: indenização que pode incluir lucros cessantes e danos emergentes",
      "Registro de má-fé (registrar marca alheia conhecida para explorar): nulidade do registro + indenização por danos",
    ],
    orgaoFiscalizador: "INPI (Instituto Nacional de Propriedade Industrial), Polícia Federal, Receita Federal (para contrafação na importação), Poder Judiciário",
  },
  {
    id: "direitos-autorais",
    numero: "Lei nº 9.610/1998",
    nome: "Lei de Direitos Autorais (LDA)",
    categoria: "propriedade-intelectual",
    resumo: "Regula os direitos dos autores sobre obras intelectuais: textos, músicas, fotografias, vídeos, softwares, obras de arte e demais criações do espírito. Fundamentais para negócios que criam ou usam conteúdo.",
    oQueRegula: "O autor de uma obra tem o direito exclusivo de reproduzir, publicar, distribuir e adaptar sua criação. Os direitos morais (autoria) são inalienáveis; os patrimoniais (exploração econômica) podem ser cedidos. Prazo de proteção: 70 anos após a morte do autor. Softwares são protegidos como obras literárias pela LDA e também pela Lei 9.609/1998 (Lei do Software). Uso justo (fair use): pequenas citações com menção da fonte são permitidas para fins educativos, jornalísticos ou críticos.",
    oQueNaoPode: [
      "Usar texto, foto, música, vídeo ou software de terceiros em material comercial sem licença",
      "Reproduzir obra fotográfica em site, app ou material de marketing sem autorização do fotógrafo",
      "Realizar covers musicais para fins comerciais sem registro na ECAD e pagamento de royalties",
      "Modificar obra de terceiro e apresentar como própria (plágio)",
      "Usar fontes tipográficas (fonts) pagas sem licença comercial adequada",
    ],
    multas: [
      "Violação de direitos autorais: pena de 3 meses a 1 ano de detenção e multa (uso pessoal) ou 2 a 4 anos de reclusão e multa (uso comercial)",
      "Indenização civil: mínimo de 3.000 exemplares do valor unitário do produto infrator, independente dos exemplares efetivamente reproduzidos",
      "Música: ECAD pode cobrar retroativamente todos os períodos de uso sem licença + juros e correção monetária",
    ],
    orgaoFiscalizador: "ECAD (Escritório Central de Arrecadação e Distribuição — para música), Ministério Público, Poder Judiciário",
  },

  // ─── ANTICORRUPÇÃO ──────────────────────────────────────────────────────────
  {
    id: "lei-anticorrupcao",
    numero: "Lei nº 12.846/2013",
    nome: "Lei Anticorrupção (Lei da Empresa Limpa)",
    categoria: "anticorrupcao",
    resumo: "Responsabiliza as pessoas jurídicas, de forma objetiva (independente de culpa), por atos lesivos praticados contra a administração pública nacional ou estrangeira. Uma das legislações anticorrupção mais rígidas do mundo.",
    oQueRegula: "Responsabilidade objetiva da empresa: mesmo sem provar que a diretoria ordenou ou sabia do ato corrupto, a empresa pode ser punida se um funcionário ou intermediário agiu em seu benefício. Atos lesivos: prometer ou pagar vantagem indevida a agente público; financiar, custear ou patrocinar ato ilícito; criar pessoa jurídica de fachada; fraudar processo licitatório. Acordo de Leniência: cooperação premiada para pessoa jurídica que colaborar com as investigações em troca de redução de penalidades.",
    oQueNaoPode: [
      "Oferecer presentes, hospitalidade ou vantagens a agentes públicos além de brindes de valor nominal simbólico (R$50 a R$100, dependendo da política interna da empresa pública)",
      "Patrocinar viagens, hospedagem ou entretenimento para servidores públicos no contexto de processo licitatório ou regulatório",
      "Constituir empresa de fachada para ocultar a identidade do beneficiário real",
      "Fraudar qualquer etapa de processo licitatório público",
      "Pagar a agentes públicos estrangeiros para facilitar negócios no exterior (FCPA americano também se aplica a empresas com operações nos EUA)",
    ],
    multas: [
      "Multa de 0,1% a 20% do faturamento bruto do último exercício (mínimo de R$6.000 quando não calculável pelo faturamento)",
      "Publicação extraordinária da decisão condenatória às custas da empresa",
      "Dissolução compulsória da pessoa jurídica, proibição de receber benefícios públicos por até 5 anos",
      "Acordo de Leniência pode reduzir a multa em até 2/3, isentar de publicação e não acarretar dissolução compulsória",
    ],
    orgaoFiscalizador: "CGU (Controladoria-Geral da União), AGU (Advocacia-Geral da União), CADE, Ministério Público, TCU",
  },

  // ─── RECUPERAÇÃO E FALÊNCIA ──────────────────────────────────────────────────
  {
    id: "recuperacao-judicial",
    numero: "Lei nº 11.101/2005",
    nome: "Lei de Recuperação Judicial, Extrajudicial e de Falência do Empresário e da Sociedade Empresária",
    categoria: "recuperacao",
    resumo: "Regula o processo de recuperação judicial e extrajudicial de empresas em crise e a falência de empresários e sociedades empresárias, buscando preservar a empresa viável e sua função social.",
    oQueRegula: "Recuperação Judicial: pedido feito ao juiz quando a empresa está em crise econômico-financeira mas é viável. O devedor apresenta um plano de recuperação em 60 dias, que deve ser aprovado pelos credores em assembleia. Após o deferimento, há uma suspensão de 180 dias das ações e execuções contra a empresa (stay period). Recuperação Extrajudicial: negociação direta com credores sem intervenção judicial, homologada pelo juiz. Falência: quando a recuperação é inviável — os bens da empresa são arrecadados, liquidados e o produto distribuído aos credores na ordem legal.",
    oQueNaoPode: [
      "Após o deferimento da recuperação judicial, contrair dívidas ou alienar bens fora do curso ordinário do negócio sem autorização judicial",
      "O devedor em falência não pode abandonar ou ocultar bens — crime de fraude à execução",
      "Preferir credores em detrimento de outros nos 3 meses anteriores ao pedido de recuperação ou falência (ato de favorecimento — anulável)",
    ],
    multas: [
      "Fraude à falência: pena de 2 a 6 anos de reclusão + multa (arts. 168-178 da Lei 11.101/2005)",
      "Administrador que, abusando de confiança, desvia bens do devedor: pena de 2 a 6 anos de reclusão",
      "Violação do stay period pelos credores pode resultar em nulidade dos atos praticados e responsabilização civil",
    ],
    orgaoFiscalizador: "Poder Judiciário (Vara Empresarial ou Vara Cível competente), Ministério Público, Administrador Judicial nomeado pelo juiz",
  },

  // ─── AMBIENTAL ──────────────────────────────────────────────────────────────
  {
    id: "lei-crimes-ambientais",
    numero: "Lei nº 9.605/1998",
    nome: "Lei de Crimes Ambientais",
    categoria: "ambiental",
    resumo: "Estabelece sanções penais e administrativas por condutas e atividades lesivas ao meio ambiente. Responsabiliza pessoas físicas e jurídicas por danos ambientais, permitindo a desconsideração da personalidade jurídica quando constitui obstáculo ao ressarcimento.",
    oQueRegula: "Crimes contra a fauna (matar, perseguir, caçar, apanhar espécies silvestres), flora (desmatar, cortar ou danificar florestas sem autorização), poluição (emitir efluentes, gases ou dejetos acima dos limites legais, polução de mananciais). Infrações administrativas: advertência, multa simples de R$50 a R$50 milhões, apreensão de produtos e instrumentos, suspensão de atividades, embargo de obra ou atividade. Responsabilidade da pessoa jurídica: empresa pode ser condenada criminalmente por crimes ambientais — penas são multas, restrição de direitos e prestação de serviços à comunidade.",
    oQueNaoPode: [
      "Lançar efluentes líquidos (esgotos industriais) em rios, lagos ou mar sem tratamento e licença ambiental",
      "Emitir gases poluentes acima dos limites da CONAMA e do órgão estadual competente",
      "Realizar supressão de vegetação nativa sem Autorização de Supressão Vegetal (ASV) do IBAMA ou órgão estadual",
      "Exercer atividade potencialmente poluidora sem Licença Ambiental (LO — Licença de Operação)",
      "Destruir nascentes, veredas ou matas ciliares (Áreas de Preservação Permanente — APP, Código Florestal, Lei 12.651/2012)",
    ],
    multas: [
      "Multa administrativa de R$50 a R$50 milhões por infração (IBAMA, órgãos estaduais e municipais)",
      "Pena criminal para pessoas físicas: de 1 mês a 3 anos de detenção, podendo dobrar nos casos de dano irreversível",
      "Indenização civil por danos ambientais: responsabilidade objetiva (independente de culpa) — A empresa que causou o dano é obrigada a remediar o passivo ambiental integralmente",
      "Embargo e paralização das atividades — impacto direto na operação e no faturamento",
    ],
    orgaoFiscalizador: "IBAMA (federal), órgãos estaduais de meio ambiente (CETESB em SP, INEA no RJ etc.), Ministério Público, SISNAMA",
  },
];

export function getLeiById(id: string): Lei | undefined {
  return LEIS.find(l => l.id === id);
}

export function getLeisByCategoria(categoria: LeiCategoria): Lei[] {
  return LEIS.filter(l => l.categoria === categoria);
}
