<h1 align="center"> Projeto Pedagógico do Curso de Front End - Sistemas de Controle de Versão (Git e GitHub) </h1>

## 📖Apresentação
<p align="justify">O controle de versão consiste basicamente em um sistema que permite registrar alterações feitas no desenvolvimento de um software.
É a partir dele que toda a equipe envolvida no projeto tem acesso ao histórico das versões anteriores do software, podendo recuperar uma versão específica ou compreender quais mudanças foram feitas por outros colaboradores.
Atualmente, nos projetos de desenvolvimento de software, a principal ferramenta de versionamento de software é o Git.
Ele é usado inclusive como a base para serviços de gerenciamento de repositórios como Github.

## 🎯Objetivo
<p align="justify">O Objetivo deste projeto é capacitar o estudante do Curso de Front End do SENAI, referente à utilização de ferramentas de versionamento em projetos de TI, neste caso o GIt e GitHub, aplicando os principais comandos.  

## Comandos do Git
O projeto utiliza os seguinte comandos:
### Comandos mais utilizados

### git init

Cria a estrutura inicial do repositório Git no computador local

```css
$ git init
```

### git status

Verifica o status/condição da branch em que você está trabalhando, arquivos modificados, criados e exluídos

```css
$ git status
```

### git add 

<p align="justify">Após criar um arquivo, adicione o arquivo no rastreamento do Git. No Terminal, use o comando `git add` seguido do nome do arquivo ou somente `.` para adicionar todos os arquivos ainda não rastreados.

```css
$ git add
```

### git commit

<p align="justify">Depois de adicionar o arquivo a ser rastreado, confirme as alterações a serem rastreadas usando o Git. No Terminal, use `git commit - m` seguido por uma mensagem curta para confirmar as mudanças.

```css
$ git commit -m "commit inicial"
```

Dica: Tente tornar as mensagens curtas, mas significativas. 

#### Exemplo

```css
$ git commit -m "Alteração do Arquivo Git.txt"
```

### git log

Exibe uma lista de todos os commits feitos em um repositório

```css
$ git log
```

### git reset --hard

Redefine o índice e a árvore de trabalho. Quaisquer alterações nos arquivos rastreados na árvore de trabalho desde *commit* serão descartados.

```css
$ git reset --hard
```

### git push

<p align="justify">Depois de confirmar as alterações, envie as alterações de sua máquina local para o repositório remoto. No Terminal, use o comando `git push` seguido do nome da branch que você está enviando.

#### Exemplo

```css
$ git push origin main
```

### git clone "link"

Clona a pasta do repositório remoto

```css
$ git clone "link"
```

### git pull

Comando usado para atualizar suas branches locais de acordo com as branches remotas

```css
$ git pull
```

### git branch

Comando usado para criar, listar e excluir as branches

```css
$ git branch
```

### git checkout

É uma forma de alternar entre versões de arquivos, commits ou branches

```css
$ git checkout
```

## 💻Autora do Projeto

🙋Tacimar Palheta
