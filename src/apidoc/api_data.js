define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "src/apidoc/main.js",
    "group": "/home/tito/Estudos/Desafio_linkapi/src/apidoc/main.js",
    "groupTitle": "/home/tito/Estudos/Desafio_linkapi/src/apidoc/main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/pedidos",
    "title": "Envia os pediso com status won para o Bling",
    "description": "<p>Endpoint de integração CRM PipeDrive com o Bling</p>",
    "group": "PipeDrive/Bling",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:5000/pedidos",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"numero\": \"289\",\n        \"idPedido\": 9374228856,\n        \"valueOrder\": 10,\n        \"organizationName\": \"tito it\",\n        \"wonTime\": \"2020-08-30 04:44:21\"\n    },\n    {\n        \"cod\": 30,\n        \"msg\": \"Pedido ja cadastrado no sistema - Um pedido com o mesmo hash ja encontra-se cadastrado (286)\"\n    },\n    {\n        \"numero\": \"287\",\n        \"idPedido\": 9374228847,\n        \"valueOrder\": 50,\n        \"organizationName\": \"maria\",\n        \"wonTime\": \"2020-09-04 02:57:59\"\n    },\n    {\n        \"numero\": \"288\",\n        \"idPedido\": 9374228850,\n        \"valueOrder\": 60,\n        \"organizationName\": \"Dark\",\n        \"wonTime\": \"2020-09-03 00:49:50\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "Integer",
            "optional": false,
            "field": "texto",
            "description": "<p>texto 2</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/apidoc/apiDoc.js",
    "groupTitle": "PipeDrive/Bling",
    "name": "PostPedidos"
  }
] });
