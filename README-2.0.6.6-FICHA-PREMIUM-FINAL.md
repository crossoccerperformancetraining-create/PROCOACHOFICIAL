# ProCoach 2.0.6.6 - Ficha Premium Final Hotfix

Correções finais:
- Uma única imagem principal por exercício em Campo e Academia.
- PDF Premium impresso em iframe isolado: a interface da sessão não entra no papel.
- Removido fallback que imprimia a tela inteira quando popup era bloqueado.
- Quebras de página protegidas sem página inicial ou final vazia.
- Cache PWA atualizado e registro do service worker com updateViaCache=none.
- Navegação usa rede sem cache quando online para evitar carregar HTML antigo.

Deploy: substitua os arquivos da raiz pelo conteúdo deste pacote.
