# Portfólio de Arthur Rodrigues

Site pessoal de Arthur Gomes Rodrigues de Lima, estudante de Ciência da Computação, com projetos em desenvolvimento de software, APIs, aplicações web e IoT.

## Abrir no computador

Abra o arquivo `index.html` da pasta extraída do ZIP. O site utiliza HTML, CSS e JavaScript e funciona diretamente no navegador, sem instalação de dependências. Mantenha a pasta `assets` ao lado do `index.html`.

O ZIP de entrega reúne os arquivos na pasta `portfolio-arthur`.

## Conteúdo

- Apresentação pessoal e áreas de interesse.
- Quatro projetos com tecnologias, links e detalhes expansíveis.
- Seção sobre a formação e o aprendizado com projetos.
- Tecnologias agrupadas por uso.
- Contato por e-mail, perfil do GitHub e currículo em PDF.
- Layout para computador, tablet e celular.
- Menu para celular, navegação por teclado e respeito à preferência por movimento reduzido.

## Projetos apresentados

| Projeto | Tema | Repositório |
| --- | --- | --- |
| Sistema FreeFlow | Protótipo de pedágio com ESP32/RFID, FastAPI e análise experimental de anomalias | [SistemaFreeFlow](https://github.com/ArthurR06/SistemaFreeFlow) |
| API de Pedidos | API em camadas, PostgreSQL e Docker Compose | [APIPedidos---Sistemas-Distribuidos](https://github.com/ArthurR06/APIPedidos---Sistemas-Distribuidos) |
| SmartStock | Gestão de estoque com Java, Spring Boot e interface web | [SmartStock](https://github.com/ArthurR06/SmartStock) |
| Emergy Calc | Cálculo emergético, inventário de recursos e indicadores | [emergy_calc](https://github.com/ArthurR06/emergy_calc) |

As descrições foram preparadas a partir do código e da documentação fornecidos para esses quatro projetos. O FreeFlow é apresentado como protótipo, com pagamentos demonstrativos e IA experimental. A API de Pedidos é identificada como projeto acadêmico em dupla. As descrições não atribuem a implementação integral de trabalhos coletivos a uma única pessoa.

## Arquivos no ZIP

| Arquivo | Função |
| --- | --- |
| `index.html` | Conteúdo da página, metadados e links |
| `assets/styles.css` | Cores, tipografia, layouts, animações e adaptação para telas menores |
| `assets/script.js` | Menu para celular e destaque da seção atual |
| `assets/favicon.svg` | Ícone da aba do navegador |
| `assets/curriculo-arthur.pdf` | Currículo de uma página com links para os projetos |
| `LEIA-PRIMEIRO.txt` | Instruções rápidas de abertura e publicação |
| `docs/CURRICULO.md` | Texto editável usado como base do currículo |
| `.nojekyll` | Compatibilidade com a publicação dos arquivos estáticos |

## Personalizar

### Textos, projetos e contato

Edite `index.html` em um editor de texto, como o VS Code. Procure pelos identificadores `inicio`, `projetos`, `sobre`, `tecnologias` e `contato` para localizar as seções.

Os quatro projetos são elementos `<article>` identificados por `projeto-freeflow`, `projeto-pedidos`, `projeto-smartstock` e `projeto-emergy`. Cada um possui uma descrição, tecnologias, link do repositório e um bloco `<details>` com informações adicionais.

O conteúdo está no próprio HTML. A navegação, os links e os detalhes dos projetos continuam disponíveis se o JavaScript estiver desativado.

### Cores e fontes

As variáveis no início de `assets/styles.css`, dentro de `:root`, definem o tema. As principais são:

- `--bg`: fundo da página.
- `--surface`: fundo dos blocos.
- `--text`: cor principal dos textos.
- `--muted`: cor dos textos secundários.
- `--accent`: destaque em ciano.
- `--font-sans`: fontes do conteúdo.
- `--font-mono`: fontes do código e metadados.

As fontes utilizam alternativas instaladas no dispositivo. O site não depende de CDN, de bibliotecas JavaScript externas ou de requisições a APIs para exibir o conteúdo.

### Currículo

O PDF utiliza o nome, e-mail, formação em andamento e projetos informados. O texto editável está em `docs/CURRICULO.md`. Atualize esse texto e gere um novo PDF quando incluir instituição, previsão de conclusão, experiências ou cursos.

Ao substituir o PDF, mantenha o nome `assets/curriculo-arthur.pdf` para preservar os botões existentes. O site e o PDF têm conteúdos próprios: alterações no HTML não modificam automaticamente o currículo.

### LinkedIn

Quando tiver o endereço do perfil, adicione um link na seção `contato`, usando como base o bloco do GitHub. O portfólio já contém os canais de contato informados.

## Publicar no GitHub

O passo a passo está em `LEIA-PRIMEIRO.txt`. Os arquivos podem ser enviados diretamente pelo navegador.

Use o repositório público `ArthurR06.github.io` para o site pessoal. Se ele já existir e contiver outro site que deseja manter, crie um repositório chamado `portfolio`.

Coloque `index.html` e `assets` na raiz. Configure `Settings > Pages` para publicar a branch `main`, pasta `/(root)`, usando `Deploy from a branch`. Salve e acompanhe a publicação. [Documentação oficial da fonte de publicação](https://docs.github.com/pt/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

Depois de publicado, o endereço será `https://arthurr06.github.io/` no repositório pessoal ou `https://arthurr06.github.io/portfolio/` no repositório `portfolio`. [Tipos de site no GitHub Pages](https://docs.github.com/pt/pages/getting-started-with-github-pages/what-is-github-pages).

## Sobre este pacote

Este pacote contém a apresentação dos projetos e links para seus repositórios. Para executar cada aplicação, utilize o código e as instruções do respectivo projeto. O portfólio não precisa executar os backends para funcionar.

O botão de e-mail abre o aplicativo de e-mail configurado no dispositivo. O endereço também está visível para copiar manualmente.
