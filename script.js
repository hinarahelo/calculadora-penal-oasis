// ===============================
// BASE DE ARTIGOS (65)
// ===============================
const artigos = [
  // CRIMES CONTRA A VIDA
  {id:1, categoria:"Crimes contra a Vida", nome:"Art. 1 – Direção Perigosa", meses:15, multa:2000, fianca:1500},
  {id:2, categoria:"Crimes contra a Vida", nome:"Art. 2 – Homicídio Culposo", meses:30, multa:6000, fianca:0, inaf:true},
  {id:3, categoria:"Crimes contra a Vida", nome:"Art. 3 – Homicídio Doloso", meses:40, multa:12000, fianca:0, inaf:true},
  {id:6, categoria:"Crimes contra a Vida", nome:"Art. 6 – Latrocínio", meses:45, multa:8000, fianca:0, inaf:true},
  {id:8, categoria:"Crimes contra a Vida", nome:"Art. 8 – Genocídio", meses:70, multa:7000, fianca:0, inaf:true},
  {id:9, categoria:"Crimes contra a Vida", nome:"Art. 9 – Terrorismo", meses:70, multa:10000, fianca:0, inaf:true},

  // CRIMES CONTRA O PATRIMÔNIO
  {id:4, categoria:"Crimes contra o Patrimônio", nome:"Art. 4 – Furto", meses:30, multa:4000, fianca:8500},
  {id:5, categoria:"Crimes contra o Patrimônio", nome:"Art. 5 – Roubo", meses:30, multa:3500, fianca:8500},
  {id:48, categoria:"Crimes contra o Patrimônio", nome:"Art. 48 – Desmanche de Veículo", meses:30, multa:2000, fianca:4500},
  {id:50, categoria:"Crimes contra o Patrimônio", nome:"Art. 50 – Descaminho", meses:40, multa:20000, fianca:8500},

  // CRIMES CONTRA A ADMINISTRAÇÃO
  {id:34, categoria:"Crimes contra a Administração", nome:"Art. 34 – Desacato", meses:25, multa:4000, fianca:4000},
  {id:36, categoria:"Crimes contra a Administração", nome:"Art. 36 – Desobediência", meses:25, multa:5000, fianca:5000},
  {id:38, categoria:"Crimes contra a Administração", nome:"Art. 38 – Abuso de Autoridade", meses:25, multa:4000, fianca:2500},
  {id:47, categoria:"Crimes contra a Administração", nome:"Art. 47 – Prevaricação", meses:30, multa:4000, fianca:2000},

  // DEMAIS ARTIGOS
  {id:7, categoria:"Outros Crimes", nome:"Art. 7 – Lesão Corporal", meses:20, multa:4000, fianca:7000},
  {id:10, categoria:"Outros Crimes", nome:"Art. 10 – Sequestro", meses:50, multa:5000, fianca:0, inaf:true},
  {id:11, categoria:"Outros Crimes", nome:"Art. 11 – Cárcere Privado", meses:35, multa:3000, fianca:6000},
  {id:12, categoria:"Outros Crimes", nome:"Art. 12 – Omissão de Socorro", meses:30, multa:8000, fianca:3000},
  {id:13, categoria:"Outros Crimes", nome:"Art. 13 – Maus Tratos", meses:40, multa:5000, fianca:0, inaf:true},
  {id:14, categoria:"Outros Crimes", nome:"Art. 14 – Difamação", meses:30, multa:2500, fianca:8500},
  {id:15, categoria:"Outros Crimes", nome:"Art. 15 – Injúria", meses:20, multa:2500, fianca:8500},
  {id:16, categoria:"Outros Crimes", nome:"Art. 16 – Calúnia", meses:20, multa:2500, fianca:8500},
  {id:17, categoria:"Outros Crimes", nome:"Art. 17 – Atentado Violento ao Pudor", meses:999, multa:0, fianca:0, inaf:true},
  {id:18, categoria:"Outros Crimes", nome:"
