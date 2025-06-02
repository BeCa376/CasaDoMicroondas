Relatório de melhorias do site: Casa do Microondas

Camila Custódio Fedeli, Maria Eduarda Becher Santos, Natália Custódio Cunha, Sófia Helena Rodrigues Villalba
Professor: Sidney Leandro de Oliveira

1. Introdução
   
O site Casa do Microondas é especializado na prestação de serviços e na comercialização de produtos voltados para o segmento de micro-ondas. Nele, os clientes encontram acessórios e aparelhos novos e seminovos, além de um serviço técnico especializado em consertos, manutenção preventiva e troca de componentes.
A plataforma se destaca por oferecer um atendimento rápido, personalizado e com garantia de qualidade, reunindo todas as soluções necessárias para quem deseja reparar, adquirir ou manter o micro-ondas em perfeito funcionamento. Além disso, o site disponibiliza diversas formas de contato, incluindo WhatsApp, telefone e formulário online, garantindo praticidade e eficiência para os seus clientes.
Entretanto, o site apresenta uma navegação pouco intuitiva, com informações desatualizadas e, por vezes, confusas, além da presença de materiais antigos que comprometem a clareza das informações apresentadas. Apesar do compromisso com a excelência no atendimento e do destaque ao serviço de conserto em até 30 minutos, o layout atual não favorece a comunicação direta e eficiente com o usuário.

2. Desenvolvimento
O site original possui uma barra de menu com seis divisões, sendo elas: "Home", "Localização", "Fotos", "Busca e Entrega", "Para conserto em 30 minutos clique aqui" e "Contato".
Para a aplicação e desenvolvimento de melhorias, foram escolhidos outros estilos de menu, organizados de forma mais direta e objetiva, a saber: "Home", "Serviços" e "Contato".
A seguir, detalham-se as mudanças que foram implementadas no site, contemplando nova identidade visual e páginas otimizadas.
4. Estrutura do Projeto Implementada
3.1 Arquitetura de Arquivos
O projeto foi organizado com uma estrutura modular e profissional:

CasaDoMicroondas/

├── static/

│   ├── assets/

│   │   ├── font/

│   │   │   └── Garet-Book.ttf

│   │   └── img/

│   │       └── [várias imagens do projeto]

│   ├── components/

│   │   ├── header.html

│   │   └── footer.html

│   ├── css/

│   │   ├── index.css

│   │   ├── main.css

│   │   ├── homestyle.css

│   │   ├── servicosstyle.css

│   │   └── contatostyle.css

│   └── js/

│       └── index.js

├── templates/

│   ├── home.html

│   ├── servicos.html

│   └── contato.html

└── README.md

3.2 Sistema de Componentes Reutilizáveis

Foi implementado um sistema de componentes modulares utilizando JavaScript para carregar dinamicamente o header e footer em todas as páginas, garantindo consistência visual e facilidade de manutenção.

4. Páginas Implementadas

4.1 Página Home
   
A página inicial foi desenvolvida com foco na apresentação da empresa e seus diferenciais principais:
Seções implementadas:

•	Apresentação principal: Título de boas-vindas e subtítulo explicativo sobre os serviços
•	Seção de destaque do conserto rápido: Área com imagem ilustrativa e texto explicativo sobre o diferencial do conserto em 30 minutos
•	Seção institucional: Informações sobre horário de funcionamento e facilidades como estacionamento próprio
•	Galeria de clientes satisfeitos: Seção visual com três imagens de depoimentos de clientes

Características técnicas:

•	Layout responsivo com sistema de grid flexível
•	Imagens com bordas arredondadas e sombras sutis
•	Textos alinhados à esquerda para melhor legibilidade
•	Espaçamento otimizado entre seções (120px entre blocos principais)

4.2 Página Serviços

Esta página centraliza todos os serviços oferecidos pela empresa em um layout organizado e visualmente atrativo:
Serviços detalhados:

1.	Conserto de Micro-ondas: Destaque para o conserto em 30 minutos, estoque de mais de 2 mil componentes
2.	Conserto de Forno Elétrico: Serviço em até 4 horas com reformas completas
3.	Reformas de Micro-ondas: Foco em aparelhos antigos com vida útil estendida
4.	Venda de Acessórios: Lista detalhada de peças disponíveis (pratos, roldanas, cruzetas)
5.	Venda e Locação: Aparelhos novos e usados com parcelamento em até 6x sem juros
6.	Busca e Entrega: Cobertura em toda Curitiba com retirada e devolução no local
   
Layout implementado:

•	Grid responsivo com auto-fit e largura mínima de 250px
•	Cards com fundo levemente colorido (#fffaf7) e sombras suaves
•	Gap de 40px entre elementos para respiração visual
•	Tipografia hierárquica com títulos em laranja (#ff5926)

4.3 Página Contato

Página focada na comunicação direta com o cliente:

Elementos implementados:

•	Seção de endereços: Grid com três localizações da empresa
•	Informações de contato: Telefone centralizado e destacado
•	Formulário de contato: Layout em duas colunas com campos para nome, email, telefone e mensagem
•	Botão de ação: Estilizado com a cor principal da marca e efeito hover

Endereços cadastrados:

•	Avenida Presidente Kennedy, 410 – Rebouças, Curitiba
•	Rua Saturnino Miranda, 84 – Santa Felicidade, Curitiba
•	Av. Rui Barbosa, 8706 – Centro, São José dos Pinhais - PR

5. Identidade Visual Implementada
   
5.1 Paleta de Cores Aplicada

Cor principal: #ff5926 (Laranja queimado)
•	Utilizada em títulos, botões de ação e elementos de destaque
•	Presente no footer e elementos de navegação ativa

Cores de apoio:

•	#fffaf7 (Bege muito claro) - Fundos de cards e campos de formulário
•	#333 (Cinza escuro) - Textos principais
•	#FFFFFF (Branco) - Fundo principal e header
•	rgba(124, 122, 122, 0.5) - Sombras e bordas sutis

5.2 Tipografia

Fonte principal: Garet-Book

•	Importada via @font-face do arquivo local
•	Fallback para Arial e sans-serif
•	Tamanho base de 16px com variações hierárquicas

Hierarquia tipográfica implementada:

•	H1: 36px (Títulos principais)
•	H2: 20-22px (Subtítulos)
•	H3: 25px (Seções especiais)
•	Texto corrido: 16-18px

7. Tecnologias e Frameworks Utilizados
   
6.1 HTML5 Semântico

•	Estrutura com tags semânticas (<header>, <main>, <section>, <footer>)
•	Meta tags para responsividade e SEO
•	Estrutura acessível para leitores de tela

6.2 CSS3 Avançado

•	CSS Grid e Flexbox: Layout responsivo e moderno
•	Animações CSS: Transições suaves em hover states
•	Media queries: Adaptação para dispositivos móveis
•	Box-shadow e border-radius: Elementos visuais modernos
•	Keyframes: Animação infinita no carrossel de marcas

6.3 JavaScript Moderno

•	Async/Await: Carregamento assíncrono de componentes
•	Fetch API: Requisições para arquivos HTML externos
•	Event Listeners: Controle de scroll para efeito de header
•	Manipulação do DOM: Adição dinâmica de classes CSS

6.4 Frameworks e Bibliotecas Externas

•	Bootstrap 5.3.3: Sistema de grid e componentes responsivos
•	ScrollReveal.js: Animações de entrada durante o scroll da página

7. Recursos Interativos Implementados
    
7.1 Header Dinâmico

•	Header fixo no topo com efeito de sombra ao fazer scroll
•	Navegação centralizada com estados hover e active
•	Logo posicionado à esquerda com dimensões otimizadas

7.2 Footer com Carrossel

•	Carrossel animado das principais marcas atendidas
•	Animação CSS infinita com deslizamento contínuo
•	Logos das marcas: Brastemp, Consul, Philco, LG, Electrolux, Panasonic, Samsung

7.3 Sistema de Formulários

•	Formulário de contato responsivo em duas colunas
•	Campos obrigatórios com validação HTML5
•	Botão com efeitos hover e design consistente

8. Responsividade e Acessibilidade
   
8.1 Design Responsivo

•	Breakpoint principal em 768px para dispositivos móveis
•	Grid flexível que se adapta automaticamente
•	Imagens responsivas com width: auto e height: auto
•	Formulários que se transformam em coluna única em telas menores

8.2 Otimizações de Performance

•	Imagens otimizadas e comprimidas
•	CSS modularizado e importado via @import
•	JavaScript minificado e carregamento assíncrono
•	Uso de CDN para Bootstrap e ScrollReveal

9. Considerações Finais
    
A reformulação do site Casa do Microondas foi executada com sucesso, atendendo aos objetivos propostos de modernização, organização da informação e melhoria da experiência do usuário. A equipe trabalhou de forma colaborativa, implementando uma solução técnica robusta e visualmente atrativa.
Principais conquistas:

•	Redução de 6 para 3 itens no menu principal, simplificando a navegação
•	Implementação de arquitetura modular para facilitar manutenção
•	Design responsivo que funciona perfeitamente em todos os dispositivos
•	Identidade visual coesa e profissional
•	Conteúdo organizado de forma clara e objetiva
O projeto demonstra uma evolução significativa em relação ao site original, oferecendo uma experiência de usuário moderna, intuitiva e eficiente, mantendo o foco nos diferenciais competitivos da empresa, especialmente o serviço de conserto rápido em até 30 minutos.

Equipe responsável:

•	Desenvolvimento técnico: Camila e Sofia
•	Elaboração textual: Maria Eduarda e Natália

O resultado final representa um avanço considerável na presença digital da Casa do Microondas, proporcionando uma plataforma que reflete adequadamente a qualidade e profissionalismo dos serviços oferecidos pela empresa.
para micro-ondas na região de Curitiba.

Referencências: 
Color Hunts, acesso em 26 de mar de 2025. Acesso em: 
https://colorhunt.co/palette/fe5d26f2c078faedcac1dbb3 

Repertório do GitHub - CasaDoMicroondas , criado em 26 de mar de 2025. 
Acesso em: https://github.com/BeCa376/CasaDoMicroondas
 
Casa do microondas, acesso em: 26 de mar de 2025. Acesso em: 
https://www.casadomicroondas.com.br/ 

HESTERBERG, Tim. Bootstrap. Wiley Interdisciplinary Reviews: Computational 
Statistics, v. 3, n. 6, p. 497-526, 2011. 

THAPA, Shovit. Modern web elements, development methods and techniques. 
2016.
