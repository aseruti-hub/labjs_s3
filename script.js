// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.PostMessage",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "accuracy_confidence_experiment",
    "description": "",
    "repository": "",
    "contributors": "Amanda Seruti"
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Fast",
      "content": [
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "keypress(Space)": "Next"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Instruction_fast",
          "content": "\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Ch1 style=\"text-align:center; max-width:1000px; margin:0 auto;\"\u003E\r\nInstruções\r\n\u003C\u002Fh1\u003E\r\n\r\n\u003Cp style=\"max-width:1000px; margin:30px auto; text-align:center; line-height:1.5; font-size: 24px;\"\u003E\r\nNesta fase, uma série de informações será apresentada no centro do ecrã. \r\n\u003Cbr\u003E\r\nSua tarefa será responder a duas perguntas em sequência.\r\n\u003C\u002Fp\u003E\r\n\r\n\u003Cp style=\"max-width:1000px; margin:30px auto; text-align:center; line-height:1.5; font-size: 24px;\"\u003E\r\nPrimeiro, deve avaliar quão precisa a informação é numa escala de 1 a 4.\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\nUse o teclado para responder:\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Ckbd\u003E1\u003C\u002Fkbd\u003E \u003Ci\u003Enada precisa\u003C\u002Fi\u003E,\r\n\u003Ckbd\u003E2\u003C\u002Fkbd\u003E \u003Ci\u003Eum pouco precisa\u003C\u002Fi\u003E,\r\n\u003Ckbd\u003E3\u003C\u002Fkbd\u003E \u003Ci\u003Epossui alguma precisão\u003C\u002Fi\u003E,\r\n\u003Ckbd\u003E4\u003C\u002Fkbd\u003E \u003Ci\u003Emuito precisa\u003C\u002Fi\u003E.\r\n\u003C\u002Fp\u003E\r\n\r\n\u003Cp style=\"max-width:1000px; margin:30px auto; text-align:center; line-height:1.5; font-size: 24px;\"\u003E\r\nDepois deverá responder o quanto confia na resposta que acabou de fornecer numa escala de 1 a 6:\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\nUse o teclado para responder:\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Ckbd\u003E1\u003C\u002Fkbd\u003E \u003Ci\u003Enada confiante\u003C\u002Fi\u003E,\r\n\u003Ckbd\u003E2\u003C\u002Fkbd\u003E \u003Ci\u003Eum pouco confiante\u003C\u002Fi\u003E,\r\n\u003Ckbd\u003E3\u003C\u002Fkbd\u003E \u003Ci\u003Econfiança média\u003C\u002Fi\u003E,\r\n\u003Ckbd\u003E4\u003C\u002Fkbd\u003E \u003Ci\u003Econfiante\u003C\u002Fi\u003E,\r\n\u003Ckbd\u003E5\u003C\u002Fkbd\u003E \u003Ci\u003Emuito confiante\u003C\u002Fi\u003E,\r\n\u003Ckbd\u003E6\u003C\u002Fkbd\u003E \u003Ci\u003Etotalmente confiante\u003C\u002Fi\u003E.\r\n\u003C\u002Fp\u003E\r\n\r\n\u003Cp style=\"max-width:1000px; margin:30px auto; text-align:center; line-height:1.5; font-size: 24px;\"\u003E\r\nNo entanto deve responder a essas questões com a primeira resposta que lhes vier a mente! A velocidade é importante nesta tarefa. \r\n\u003C\u002Fp\u003E\r\n\u003Cp style=\"max-width:1000px; margin:30px auto; text-align:center; line-height:1.5; font-size: 26px;\"\u002Fh3\u003E\r\n\u003Cb\u003E Responda da melhor forma possível, o mais RÁPIDO possível!\r\n  \u003C\u002Fb\u003E\r\n\u003C\u002Fp\u003E\r\n\u003Cbr\u003E\r\n\r\n\u003Cp style=\"text-align:center; margin-top:40px;\"\u003E\r\n\u003Ci\u003EPressiona a tecla \"espaço\" para iniciar uma fase de treino.\r\n\u003C\u002Fi\u003E\u003C\u002Fp\u003E"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "condition": "1T",
              "text": "Paris é a capital da França."
            },
            {
              "condition": "2T",
              "text": "A água ferve a aproximadamente 100°C ao nível do mar."
            },
            {
              "condition": "3T",
              "text": "A Austrália é o maior país do mundo em área territorial."
            },
            {
              "condition": "4T",
              "text": "O Sol gira em torno da Terra."
            },
            {
              "condition": "Opt2T",
              "text": "Escolha a opção 2."
            },
            {
              "condition": "Opt3T",
              "text": "Escolha a opção 3."
            }
          ],
          "sample": {
            "mode": "draw-shuffle",
            "n": "Use all"
          },
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "trainning_loop",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Sequence_trainning",
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": -25,
                    "angle": 0,
                    "width": 18,
                    "height": 40.68,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "x",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "36",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Fixation_cross",
                "timeout": "700"
              },
              {
                "type": "lab.html.Screen",
                "files": {},
                "responses": {
                  "keypress(1)": "accuracy",
                  "keypress(2)": "accuracy",
                  "keypress(3)": "accuracy",
                  "keypress(4)": "accuracy"
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
setTimeout(() => {
  const el = document.getElementById("warning");
  if (el) el.style.display = "block";
}, 9000);
}
                },
                "title": "Accuracy_trainning",
                "content": "\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cdiv id=\"warning\" style=\"\r\n  display: none;\r\n  text-align: center;\r\n  margin-top: 30px;\r\n  font-size: 22px;\r\n  color: red;\r\n\"\u003E\u003Cb\u003E\r\n  RESPONDA O MAIS RÁPIDO POSSÍVEL!\r\n  \u003C\u002Fb\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\r\n\u003Ch2 style=\"\r\n  text-align: center;\r\n  max-width: 700px;\r\n  margin: 0 auto;\r\n\"\u003E\r\n  ${ parameters.text }\r\n\u003C\u002Fh2\u003E\r\n\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\r\n\u003Cmain style=\"text-align: center; font-size: 26px;\"\u003E\r\nQuão precisa esta informação é?\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\r\n\u003Cfooter\u003E \u003Cdiv style=\"text-align:center; font-size:20px; opacity:0.7;\"\u003E\r\n  Nada precisa    Um pouco precisa    Possui alguma precisão    Muito precisa\r\n\u003C\u002Fdiv\u003E \u003C\u002Ffooter\u003E\r\n\u003Cfooter\u003E \u003Cdiv style=\"text-align:center; font-size:34px; opacity:0.7;\"\u003E\r\n\u003Ckbd\u003E1\u003C\u002Fkbd\u003E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\u003Ckbd\u003E2\u003C\u002Fkbd\u003E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\u003Ckbd\u003E3\u003C\u002Fkbd\u003E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\u003Ckbd\u003E4\u003C\u002Fkbd\u003E\r\n\u003C\u002Fdiv\u003E \u003C\u002Ffooter\u003E"
              },
              {
                "type": "lab.html.Screen",
                "files": {},
                "responses": {
                  "keypress(1)": "confidence",
                  "keypress(2)": "confidence",
                  "keypress(3)": "confidence",
                  "keypress(4)": "confidence",
                  "keypress(5)": "confidence",
                  "keypress(6)": "confidence"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Confidence_trainning",
                "content": "\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cp style=\"\r\n  text-align: center;\r\n  max-width: 700px;\r\n  margin: 0 auto;\r\n    font-size:26px;\r\n\"\u003E\r\n  Quão confiante está na sua resposta?\r\n\u003C\u002Fp\u003E\r\n\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\r\n\u003Cfooter\u003E \u003Cdiv style=\"text-align:center; font-size:20px; opacity:0.7;\"\u003E\r\n  Nada confiante    Pouco confiante    Confiança média    Confiante    Muito Confiante    Totalmente confiante\r\n\u003C\u002Fdiv\u003E \u003C\u002Ffooter\u003E\r\n\u003Cfooter\u003E \u003Cdiv style=\"text-align:center; font-size:18px; opacity:0.7;\"\u003E\r\n\u003Ckbd\u003E1\u003C\u002Fkbd\u003E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\u003Ckbd\u003E2\u003C\u002Fkbd\u003E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\u003Ckbd\u003E3\u003C\u002Fkbd\u003E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\u003Ckbd\u003E4\u003C\u002Fkbd\u003E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\u003Ckbd\u003E5\u003C\u002Fkbd\u003E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\u003Ckbd\u003E6\u003C\u002Fkbd\u003E\r\n\u003C\u002Fdiv\u003E \u003C\u002Ffooter\u003E"
              }
            ]
          }
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "keypress(Space)": "Next"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Preparation",
          "content": "\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Ch3 style=\"text-align:center; max-width:900px; margin:0 auto;font-size: 24px;\"\u003E\r\nA fase de treino acabou\r\n\u003C\u002Fh3\u003E\r\n\r\n\r\n\u003Cp style=\"text-align:center; margin-top:40px; font-size: 24px;\"\u003E\r\n\u003Ci\u003EPressiona a tecla \"espaço\" para iniciar uma fase de treino.\r\n\u003C\u002Fi\u003E\u003C\u002Fp\u003E\r\n\r\n\r\n\u003Cp style=\"max-width:900px; margin:30px auto; text-align:center; line-height:1.5; font-size: 22px;\"\u003E\r\nNão esqueça de avaliar as informações o mais rápido possível\r\n\u003C\u002Fp\u003E"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "condition": "1Frw",
              "text": "Os imigrantes e minorias cometem 50% dos crimes em Portugal."
            },
            {
              "condition": "2Frw",
              "text": "Criminalidade tem crescido com aumento de imigrantes em Portugal."
            },
            {
              "condition": "3Frw",
              "text": "Ao fim de 8 anos de governo socialista, a taxa de pobreza aumentou 17% em 2022 e prevêse mais em 2023."
            },
            {
              "condition": "4Frw",
              "text": "Portugal tem 88% das cadeias ocupadas por imigrantes, a maioria do Brasil e de Cabo Verde."
            },
            {
              "condition": "1Trw",
              "text": "Pessoas em situação de sem abrigo aumentaram 78% em quatro anos, sob governo socialista."
            },
            {
              "condition": "2Trw",
              "text": "Empresa de pai de Pedro Nuno Santos soma 1,1 milhões de euros em contratos com o Estado."
            },
            {
              "condition": "3Trw",
              "text": "Foi o Governo do PS liderado por José Sócrates que aumentou o IVA para 23%."
            },
            {
              "condition": "4Trw",
              "text": "O PS perdeu cerca de um terço da expressão eleitoral."
            },
            {
              "condition": "1Flw",
              "text": "Iniciativa liberal propõe aumentar a semana de trabalho para 50 horas."
            },
            {
              "condition": "2Flw",
              "text": "O PS sempre lutou pela redução das portagens no Interior do país."
            },
            {
              "condition": "3Flw",
              "text": "Projeto do PSD era fazer um corte adicional de 600 milhões de euros nas pensões."
            },
            {
              "condition": "4Flw",
              "text": "Ventura posou em frente a uma bandeira com suástica nazi."
            },
            {
              "condition": "1Tlw",
              "text": "Ventura já quis extinguir ministérios da Educação e da Saúde."
            },
            {
              "condition": "2Tlw",
              "text": "SNS fez mais cirurgias e consultas no governo do PS do que em 2015."
            },
            {
              "condition": "3Tlw",
              "text": "Durante os debates de preparação para as legislativas de 2024, líderes da esquerda (PS, BE, PCP) fizeram menos afirmações falsas ou imprecisas do que líderes da direita (PSD, IL, Chega)."
            },
            {
              "condition": "4Tlw",
              "text": "Tribunal Constitucional chumbou tentativas do PSD para que os cortes das pensões fossem permanentes."
            },
            {
              "condition": "Opt2",
              "text": "Por favor, escolha a opção 2."
            },
            {
              "condition": "Opt3",
              "text": "Leia esta mensagem e escolha a opção 3."
            }
          ],
          "sample": {
            "mode": "draw-shuffle",
            "n": "Use all"
          },
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "Fast_loop",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Sequence_Fast",
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 18,
                    "height": 40.68,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "x",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "36",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Fixation_cross",
                "timeout": "700"
              },
              {
                "type": "lab.html.Screen",
                "files": {},
                "responses": {
                  "keypress(1)": "accuracy_fast",
                  "keypress(2)": "accuracy_fast",
                  "keypress(3)": "accuracy_fast",
                  "keypress(4)": "accuracy_fast"
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
setTimeout(() => {
  const el = document.getElementById("warning");
  if (el) el.style.display = "block";
}, 9000);
}
                },
                "title": "Accuracy_fast",
                "content": "\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cdiv id=\"warning\" style=\"\r\n  display: none;\r\n  text-align: center;\r\n  margin-top: 30px;\r\n  font-size: 22px;\r\n  color: red;\r\n\"\u003E\u003Cb\u003E\r\n  RESPONDA O MAIS RÁPIDO POSSÍVEL!\r\n  \u003C\u002Fb\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\r\n\u003Ch2 style=\"\r\n  text-align: center;\r\n  max-width: 700px;\r\n  margin: 0 auto;\r\n\"\u003E\r\n  ${ parameters.text }\r\n\u003C\u002Fh2\u003E\r\n\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\r\n\u003Cmain style=\"text-align: center; font-size: 26px;\"\u003E\r\nQuão precisa esta informação é?\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\r\n\u003Cfooter\u003E \u003Cdiv style=\"text-align:center; font-size:20px; opacity:0.7;\"\u003E\r\n  Nada precisa    Um pouco precisa    Possui alguma precisão    Muito precisa\r\n\u003C\u002Fdiv\u003E \u003C\u002Ffooter\u003E\r\n\u003Cfooter\u003E \u003Cdiv style=\"text-align:center; font-size:34px; opacity:0.7;\"\u003E\r\n\u003Ckbd\u003E1\u003C\u002Fkbd\u003E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\u003Ckbd\u003E2\u003C\u002Fkbd\u003E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\u003Ckbd\u003E3\u003C\u002Fkbd\u003E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\u003Ckbd\u003E4\u003C\u002Fkbd\u003E\r\n\u003C\u002Fdiv\u003E \u003C\u002Ffooter\u003E"
              },
              {
                "type": "lab.html.Screen",
                "files": {},
                "responses": {
                  "keypress(1)": "confidence_fast",
                  "keypress(2)": "confidence_fast",
                  "keypress(3)": "confidence_fast",
                  "keypress(4)": "confidence_fast",
                  "keypress(5)": "confidence_fast",
                  "keypress(6)": "confidence_fast"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Confidence_fast",
                "content": "\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cp style=\"\r\n  text-align: center;\r\n  max-width: 700px;\r\n  margin: 0 auto;\r\n    font-size:26px;\r\n\"\u003E\r\n  Quão confiante está na sua resposta?\r\n\u003C\u002Fp\u003E\r\n\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\r\n\u003Cfooter\u003E \u003Cdiv style=\"text-align:center; font-size:20px; opacity:0.7;\"\u003E\r\n  Nada confiante    Pouco confiante    Confiança média    Confiante    Muito Confiante    Totalmente confiante\r\n\u003C\u002Fdiv\u003E \u003C\u002Ffooter\u003E\r\n\u003Cfooter\u003E \u003Cdiv style=\"text-align:center; font-size:18px; opacity:0.7;\"\u003E\r\n\u003Ckbd\u003E1\u003C\u002Fkbd\u003E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\u003Ckbd\u003E2\u003C\u002Fkbd\u003E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\u003Ckbd\u003E3\u003C\u002Fkbd\u003E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\u003Ckbd\u003E4\u003C\u002Fkbd\u003E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\u003Ckbd\u003E5\u003C\u002Fkbd\u003E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\u003Ckbd\u003E6\u003C\u002Fkbd\u003E\r\n\u003C\u002Fdiv\u003E \u003C\u002Ffooter\u003E"
              }
            ]
          }
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Slow",
      "content": [
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "keypress(Space)": "next"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Instruction_slow",
          "content": "\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Ch1 style=\"text-align:center; max-width:900px; margin:0 auto;\"\u003E\r\nInstruções\r\n\u003C\u002Fh1\u003E\r\n\r\n\u003Cp style=\"max-width:900px; margin:30px auto; text-align:center; line-height:1.5; font-size: 24px;\"\u003E\r\nNesta segunda fase, terá a oportunidade de reavaliar as informações mais cuidadosamente. \r\n\u003Cbr\u003E\r\nSua tarefa será responder avaliar quão precisa cada informação é numa escala de 1 a 4; e o quanto confia na sua resposta numa escala de 1 a 6.\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\nDeverá novamente usar o teclado para responder. Mas, desta vez, o objetivo é refletir cautelosamente antes de fornecer a sua resposta.\r\n\u003C\u002Fp\u003E\r\n\r\n\u003Cp style=\"max-width:900px; margin:30px auto; text-align:center; line-height:1.5; font-size: 24px;\"\u002Fh3\u003E\r\n\u003Cb\u003E Responda da melhor forma possível, usando o tempo que for necessário!\r\n  \u003C\u002Fb\u003E\r\n\u003C\u002Fp\u003E\r\n\u003Cbr\u003E\r\n\r\n\u003Cp style=\"text-align:center; margin-top:40px;\"\u003E\r\n\u003Ci\u003EPressiona a tecla \"espaço\" para iniciar a tarefa.\r\n\u003C\u002Fi\u003E\u003C\u002Fp\u003E"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "condition": "1Frw",
              "text": "Os imigrantes e minorias cometem 50% dos crimes em Portugal."
            },
            {
              "condition": "2Frw",
              "text": "Criminalidade tem crescido com aumento de imigrantes em Portugal."
            },
            {
              "condition": "3Frw",
              "text": "Ao fim de 8 anos de governo socialista, a taxa de pobreza aumentou 17% em 2022 e prevêse mais em 2023."
            },
            {
              "condition": "4Frw",
              "text": "Portugal tem 88% das cadeias ocupadas por imigrantes, a maioria do Brasil e de Cabo Verde."
            },
            {
              "condition": "1Trw",
              "text": "Pessoas em situação de sem abrigo aumentaram 78% em quatro anos, sob governo socialista."
            },
            {
              "condition": "2Trw",
              "text": "Empresa de pai de Pedro Nuno Santos soma 1,1 milhões de euros em contratos com o Estado."
            },
            {
              "condition": "3Trw",
              "text": "Foi o Governo do PS liderado por José Sócrates que aumentou o IVA para 23%."
            },
            {
              "condition": "4Trw",
              "text": "O PS perdeu cerca de um terço da expressão eleitoral."
            },
            {
              "condition": "1Flw",
              "text": "Iniciativa liberal propõe aumentar a semana de trabalho para 50 horas."
            },
            {
              "condition": "2Flw",
              "text": "O PS sempre lutou pela redução das portagens no Interior do país."
            },
            {
              "condition": "3Flw",
              "text": "Projeto do PSD era fazer um corte adicional de 600 milhões de euros nas pensões."
            },
            {
              "condition": "4Flw",
              "text": "Ventura posou em frente a uma bandeira com suástica nazi."
            },
            {
              "condition": "1Tlw",
              "text": "Ventura já quis extinguir ministérios da Educação e da Saúde."
            },
            {
              "condition": "2Tlw",
              "text": "SNS fez mais cirurgias e consultas no governo do PS do que em 2015."
            },
            {
              "condition": "3Tlw",
              "text": "Durante os debates de preparação para as legislativas de 2024, líderes da esquerda (PS, BE, PCP) fizeram menos afirmações falsas ou imprecisas do que líderes da direita (PSD, IL, Chega)."
            },
            {
              "condition": "4Tlw",
              "text": "Tribunal Constitucional chumbou tentativas do PSD para que os cortes das pensões fossem permanentes."
            },
            {
              "condition": "Opt2",
              "text": "Por favor, escolha a opção 2."
            },
            {
              "condition": "Opt3",
              "text": "Leia esta mensagem e escolha a opção 3."
            }
          ],
          "sample": {
            "mode": "draw-shuffle",
            "n": "Use all"
          },
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "Slow_loop",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Sequence_slow",
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 18,
                    "height": 40.68,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "x",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "36",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Fixation_cross",
                "timeout": "700"
              },
              {
                "type": "lab.html.Screen",
                "files": {},
                "responses": {
                  "keypress(1)": "accuracy_slow",
                  "keypress(2)": "accuracy_slow",
                  "keypress(3)": "accuracy_slow",
                  "keypress(4)": "accuracy_slow"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Accuracy_slow",
                "content": "\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Ch2 style=\"\r\n  text-align: center;\r\n  max-width: 700px;\r\n  margin: 0 auto;\r\n\"\u003E\r\n  ${ parameters.text }\r\n\u003C\u002Fh2\u003E\r\n\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\r\n\u003Cmain style=\"text-align: center; font-size: 26px;\"\u003E\r\nQuão precisa esta informação é?\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\r\n\u003Cfooter\u003E \u003Cdiv style=\"text-align:center; font-size:20px; opacity:0.7;\"\u003E\r\n  Nada precisa    Um pouco precisa    Possui alguma precisão    Muito precisa\r\n\u003C\u002Fdiv\u003E \u003C\u002Ffooter\u003E\r\n\u003Cfooter\u003E \u003Cdiv style=\"text-align:center; font-size:34px; opacity:0.7;\"\u003E\r\n\u003Ckbd\u003E1\u003C\u002Fkbd\u003E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\u003Ckbd\u003E2\u003C\u002Fkbd\u003E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\u003Ckbd\u003E3\u003C\u002Fkbd\u003E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\u003Ckbd\u003E4\u003C\u002Fkbd\u003E\r\n\u003C\u002Fdiv\u003E \u003C\u002Ffooter\u003E"
              },
              {
                "type": "lab.html.Screen",
                "files": {},
                "responses": {
                  "keypress(1)": "confidence_slow",
                  "keypress(2)": "confidence_slow",
                  "keypress(3)": "confidence_slow",
                  "keypress(4)": "confidence_slow",
                  "keypress(5)": "confidence_slow",
                  "keypress(6)": "confidence_slow"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Confidence_slow",
                "content": "\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cp style=\"\r\n  text-align: center;\r\n  font-size:26px;\r\n  max-width: 700px;\r\n  margin: 0 auto;\r\n\"\u003E\r\n  Quão confiante está na sua resposta?\r\n\u003C\u002Fp\u003E\r\n\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\r\n\u003Cfooter\u003E \u003Cdiv style=\"text-align:center; font-size:20px; opacity:0.7;\"\u003E\r\n  Nada confiante    Pouco confiante    Confiança média    Confiante    Muito Confiante    Totalmente confiante\r\n\u003C\u002Fdiv\u003E \u003C\u002Ffooter\u003E\r\n\u003Cfooter\u003E \u003Cdiv style=\"text-align:center; font-size:18px; opacity:0.7;\"\u003E\r\n\u003Ckbd\u003E1\u003C\u002Fkbd\u003E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\u003Ckbd\u003E2\u003C\u002Fkbd\u003E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\u003Ckbd\u003E3\u003C\u002Fkbd\u003E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\u003Ckbd\u003E4\u003C\u002Fkbd\u003E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\u003Ckbd\u003E5\u003C\u002Fkbd\u003E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\u003Ckbd\u003E6\u003C\u002Fkbd\u003E\r\n\u003C\u002Fdiv\u003E \u003C\u002Ffooter\u003E"
              }
            ]
          }
        },
        {
          "type": "lab.canvas.Screen",
          "content": [],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
window.parent.postMessage({
  type: "labjs_data",
  status: "finished",
  id: participant_id,
  results: results
}, "*");
}
          },
          "title": "End"
        }
      ]
    }
  ]
})

// Let's go!
study.run()