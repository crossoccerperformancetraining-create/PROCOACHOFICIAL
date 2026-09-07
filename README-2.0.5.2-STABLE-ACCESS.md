# ProCoach 2.0.5.2 — Stable Athlete Access + Match Day

Hotfix de estabilização do acesso do Athlete depois do Match Day.

## Causa corrigida
A ramificação 2.0.5 misturou dois modelos de acesso e dois projetos Firebase. O portal estável V6.5 usa o projeto **procoachoficial** e links individuais por token (`atleta.html?token=...`). A ramificação MAX/FINAL mais nova usava `prosaude-e9130` e links `id + uid`, o que gerava `Missing or insufficient permissions` e `LINK INCOMPLETO` quando combinado com a tela antiga de Portal do Atleta.

## Esta versão
- mantém Firebase `procoachoficial`;
- mantém `athletePortal/{token}`;
- mantém login anônimo do Athlete e o token salvo no aparelho;
- preserva PSQ, PSE, vídeos, academia, rotinas e Player V6.5;
- adiciona Convocação & Match Day em lote;
- seleciona 18/22/vários atletas de uma vez;
- programação única com horários, apresentação, local, uniforme, documentos e nutrição;
- cada atleta confirma individualmente;
- painel sincroniza `Confirmado / Tenho problema / Falar com comissão / Pendente`;
- Cloud Function reconhece nova convocação para push imediato quando FCM estiver realmente configurado.

## Publicação
1. Publique `index.html`, `atleta.html`, `service-worker.js`, manifestos e demais arquivos desta pasta.
2. No Firebase Console, confirme que está no projeto **PROCOACHOFICIAL / procoachoficial**.
3. Em Firestore > Rules, publique o arquivo `firestore.rules` deste pacote.
4. Confirme que Authentication tem Email/Password e Anonymous habilitados.
5. No Portal do Atleta, para um atleta que ficou com token da ramificação quebrada, clique **Gerar novo acesso** uma vez e depois **Copiar link**.
6. No Athlete antigo, toque **Limpar acesso salvo** e abra o novo link. Depois disso o token fica salvo normalmente.

Não use arquivos ou configurações `prosaude-e9130` junto com este pacote.
