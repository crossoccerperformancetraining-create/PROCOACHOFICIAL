# ProCoach MAX 2.0.5 — Convocação & Match Day

Base usada: os arquivos FINAL 2026.09 mais recentes do ProCoach MAX.

## Nova função
- Seleção em lote de convocados no módulo Convocação.
- Botões para selecionar todos os atletas visíveis ou limpar a seleção.
- Editor estruturado de Match Day: horário do jogo, competição, local, apresentação, uniforme, documentos, nutrição e cronograma completo.
- Modelos rápidos: jogo em casa, jogo fora e viagem.
- Publicação única para todos os convocados selecionados.
- Internamente é criado um compromisso individual para cada atleta convocado, preservando respostas e mensagens individuais.
- Push imediato é disparado individualmente para cada convocado quando a API /api/send-notification está disponível.
- Athlete exibe cartão de convocação na tela Hoje e a programação completa em Agenda.
- Athlete pode responder: Confirmo / Tenho um problema / Falar com comissão.
- Comissão acompanha Confirmados / Atenção / Pendentes na própria tela de convocação.
- No dia da partida, o Athlete ativa visual Match Day também pela data da programação, mesmo que o microciclo ainda não esteja marcado como JOGO.

## Publicação
Substitua apenas `index.html` e `atleta.html` na raiz do site atual.
Mantenha os assets já existentes da instalação atual (`manifest.json`, `athlete-manifest.json`, `sw.js`, `logo.png` e demais arquivos do backend/PWA).

## Push D-1 e Dia do Jogo
A programação e a convocação ficam disponíveis no app assim que publicadas. O envio imediato de push para todos os convocados é feito individualmente pela API existente. Para push automático em horário futuro (D-1 e manhã do jogo) com o app fechado, é necessário que o backend tenha um scheduler/Cloud Function agendada; esta versão preserva no `nextGame.matchDayPlan` todos os dados necessários para essa automação.
