# Valuation 2.0 Lista de Espera
## Web Client para mobiles by Varos

Abstração do [projeto proposto e documentado no FIGMA](https://www.figma.com/file/Vm2qWYda5YoQ8FGnOdFt9r/Lista-de-Espera-VZA-2.0-(Copy)?node-id=1:3) para formulação de um SPA voltado para **WebView Mobile** redigido em [Typescript](https://www.typescriptlang.org) e lib [React](https://pt-br.reactjs.org).

## Arquivo de Configuração de Módulos
No fim da página possue módulos com tempo estimado, então criei um arquivo de configuração dentro da pasta `/src/components/Schedule/config.ts`, seguindo princípio de Single Package by Feature. Dessa forma pode-se conectar posteriormente a uma API com maior facilidade.

## Teste de Formulário
Instale as dependências do `/server`

### Dentro da pasta Server Execute
```bash
npm install
// ou
yarn install
```

E depois inicie o servidor: 

```bash
npm start
// ou
yarn start
```
A rota definida para o formulário é `POST:` `http://localhost:8000/subscribe`

Agora basta ir no formulário e preenche-lo corretamente, em caso de formulário enviado e aceito o servidor retornará **status 201**, em caso de falha o servidor retornará **status 400**.
### Tecnologias utilizadas
- [React.js](https://pt-br.reactjs.org)
- [Styled Components](styled-components.com/)
- [Axios](https://axios-http.com/docs/intro)
- [Figma](https://www.figma.com)
- [Esforço](https://github.com/PhelipeF)

### License
[MIT](LICENSE)