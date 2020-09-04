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
    "type": "get",
    "url": "pedidos",
    "title": "Consulta de pedidos",
    "description": "<p>Consulta dos pedidos no mongoDB com params para filtrar a consulta.</p>",
    "group": "Integração_do_PipeDrive_e_Bling",
    "examples": [
      {
        "title": "Example usage:",
        "content": "\nlocalhost:5000/pedidos\nlocalhost:5000/pedidos?wonTime=2020-09-03T03:49:50.000Z\nlocalhost:5000/pedidos?numero=283\nlocalhost:5000/pedidos?idPedido=9374098162\nlocalhost:5000/pedidos?limit=1\nlocalhost:5000/pedidos?page=2",
        "type": "URL"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"docs\": [\n        {\n            \"_id\": \"5f51bc1508ff697fea79769c\",\n            \"numero\": 283,\n            \"idPedido\": 9374098162,\n            \"valueOrder\": 60,\n            \"organizationName\": \"Dark\",\n            \"wonTime\": \"2020-09-03T03:49:50.000Z\",\n            \"created_at\": \"2020-09-04T04:01:25.193Z\",\n            \"updated_at\": \"2020-09-04T04:01:25.193Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5f51c5e77513de157137b846\",\n            \"idPedido\": 9374187745,\n            \"valueOrder\": 60,\n            \"organizationName\": \"Dark\",\n            \"wonTime\": \"2020-09-03T03:49:50.000Z\",\n            \"created_at\": \"2020-09-04T04:43:19.731Z\",\n            \"updated_at\": \"2020-09-04T04:43:19.731Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5f51d148e4b925263265ac9e\",\n            \"numero\": 288,\n            \"idPedido\": 9374228850,\n            \"valueOrder\": 60,\n            \"organizationName\": \"Dark\",\n            \"wonTime\": \"2020-09-03T03:49:50.000Z\",\n            \"created_at\": \"2020-09-04T05:31:52.332Z\",\n            \"updated_at\": \"2020-09-04T05:31:52.332Z\",\n            \"__v\": 0\n        }\n    ],\n    \"total\": 3,\n    \"limit\": 10,\n    \"page\": 1,\n    \"pages\": 1\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Retorno do endpoint": [
          {
            "group": "Retorno do endpoint",
            "type": "Array",
            "optional": false,
            "field": "docs",
            "description": "<p>Array com os dados</p>"
          },
          {
            "group": "Retorno do endpoint",
            "type": "String",
            "optional": false,
            "field": "docs._id",
            "description": "<p>Id do mongoDB</p>"
          },
          {
            "group": "Retorno do endpoint",
            "type": "String",
            "optional": false,
            "field": "docs.numero",
            "description": "<p>Número do pedido no bling</p>"
          },
          {
            "group": "Retorno do endpoint",
            "type": "String",
            "optional": false,
            "field": "docs.idPedido",
            "description": "<p>Id do pedido</p>"
          },
          {
            "group": "Retorno do endpoint",
            "type": "String",
            "optional": false,
            "field": "docs.valueOrder",
            "description": "<p>Valor da ordem</p>"
          },
          {
            "group": "Retorno do endpoint",
            "type": "String",
            "optional": false,
            "field": "docs.organizationName",
            "description": "<p>Nome do cliente que comprou</p>"
          },
          {
            "group": "Retorno do endpoint",
            "type": "String",
            "optional": false,
            "field": "docs.wonTime",
            "description": "<p>Horario que o pedido ficou com status won</p>"
          },
          {
            "group": "Retorno do endpoint",
            "type": "String",
            "optional": false,
            "field": "docs.created_at",
            "description": "<p>Data de registro no mondoDB</p>"
          },
          {
            "group": "Retorno do endpoint",
            "type": "String",
            "optional": false,
            "field": "docs.updated_at",
            "description": "<p>Data de update do registro no mongoDB</p>"
          },
          {
            "group": "Retorno do endpoint",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total de intes no mongoDB</p>"
          },
          {
            "group": "Retorno do endpoint",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Limite de itens de retorno</p>"
          },
          {
            "group": "Retorno do endpoint",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Página atual</p>"
          },
          {
            "group": "Retorno do endpoint",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Páginas disponíveis para consulta</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/config/apiDoc.js",
    "groupTitle": "Integração_do_PipeDrive_e_Bling",
    "name": "GetPedidos"
  },
  {
    "type": "get",
    "url": "pedidos-findDate",
    "title": "Consulta de consolidados de pedidos por data",
    "description": "<p>Consulta consolidado</p>",
    "group": "Integração_do_PipeDrive_e_Bling",
    "examples": [
      {
        "title": "Example usage:",
        "content": "\nlocalhost:5000/pedidos-findDate?date=2020-08-31",
        "type": "URL"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": [\n        {\n            \"_id\": \"5f51bc1508ff697fea79769a\",\n            \"numero\": 281,\n            \"idPedido\": 9374098154,\n            \"valueOrder\": 10,\n            \"organizationName\": \"nina\",\n            \"wonTime\": \"2020-08-31T04:42:03.000Z\",\n            \"created_at\": \"2020-09-04T04:01:25.192Z\",\n            \"updated_at\": \"2020-09-04T04:01:25.192Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5f51c5e77513de157137b844\",\n            \"idPedido\": 9374187748,\n            \"valueOrder\": 10,\n            \"organizationName\": \"nina\",\n            \"wonTime\": \"2020-08-31T04:42:03.000Z\",\n            \"created_at\": \"2020-09-04T04:43:19.728Z\",\n            \"updated_at\": \"2020-09-04T04:43:19.728Z\",\n            \"__v\": 0\n        }\n    ],\n    \"consolidatedDay\": 20\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Retorno do endpoint": [
          {
            "group": "Retorno do endpoint",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>Array com os dados</p>"
          },
          {
            "group": "Retorno do endpoint",
            "type": "String",
            "optional": false,
            "field": "docs._id",
            "description": "<p>Id do mongoDB</p>"
          },
          {
            "group": "Retorno do endpoint",
            "type": "String",
            "optional": false,
            "field": "docs.numero",
            "description": "<p>Número do pedido no bling</p>"
          },
          {
            "group": "Retorno do endpoint",
            "type": "String",
            "optional": false,
            "field": "docs.idPedido",
            "description": "<p>Id do pedido</p>"
          },
          {
            "group": "Retorno do endpoint",
            "type": "String",
            "optional": false,
            "field": "docs.valueOrder",
            "description": "<p>Valor da ordem</p>"
          },
          {
            "group": "Retorno do endpoint",
            "type": "String",
            "optional": false,
            "field": "docs.organizationName",
            "description": "<p>Nome do cliente que comprou</p>"
          },
          {
            "group": "Retorno do endpoint",
            "type": "String",
            "optional": false,
            "field": "docs.wonTime",
            "description": "<p>Horario que o pedido ficou com status won</p>"
          },
          {
            "group": "Retorno do endpoint",
            "type": "String",
            "optional": false,
            "field": "docs.created_at",
            "description": "<p>Data de registro no mondoDB</p>"
          },
          {
            "group": "Retorno do endpoint",
            "type": "String",
            "optional": false,
            "field": "docs.updated_at",
            "description": "<p>Data de update do registro no mongoDB</p>"
          },
          {
            "group": "Retorno do endpoint",
            "type": "String",
            "optional": false,
            "field": "consolidatedDay",
            "description": "<p>Soma de todos os pedidos da data informada</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/config/apiDoc.js",
    "groupTitle": "Integração_do_PipeDrive_e_Bling",
    "name": "GetPedidosFinddate"
  },
  {
    "type": "post",
    "url": "pedidos",
    "title": "Endpoint de integração",
    "description": "<p>Endpoint de integração CRM PipeDrive com o Bling.</p>",
    "group": "Integração_do_PipeDrive_e_Bling",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:5000/pedidos",
        "type": "URL"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " [\n    {\n        \"numero\": \"289\",\n        \"idPedido\": 9374228856,\n        \"valueOrder\": 10,\n        \"organizationName\": \"tito it\",\n        \"wonTime\": \"2020-08-30 04:44:21\"\n    },\n    {\n        \"cod\": 30,\n        \"msg\": \"Pedido ja cadastrado no sistema - Um pedido com o mesmo hash ja encontra-se cadastrado (286)\"\n    },\n    {\n        \"numero\": \"287\",\n        \"idPedido\": 9374228847,\n        \"valueOrder\": 50,\n        \"organizationName\": \"maria\",\n        \"wonTime\": \"2020-09-04 02:57:59\"\n    },\n    {\n        \"numero\": \"288\",\n        \"idPedido\": 9374228850,\n        \"valueOrder\": 60,\n        \"organizationName\": \"Dark\",\n        \"wonTime\": \"2020-09-03 00:49:50\"\n    }\n]",
          "type": "json"
        }
      ],
      "fields": {
        "Retorno do registro no Bling": [
          {
            "group": "Retorno do registro no Bling",
            "type": "string",
            "optional": false,
            "field": "numero",
            "description": "<p>Número do pedido no Bling</p>"
          },
          {
            "group": "Retorno do registro no Bling",
            "type": "number",
            "optional": false,
            "field": "idPedido",
            "description": "<p>Identification code of the specific merchant. <br>format: uuid</p>"
          },
          {
            "group": "Retorno do registro no Bling",
            "type": "string",
            "optional": false,
            "field": "valueOrder",
            "description": "<p>Total do pedido</p>"
          },
          {
            "group": "Retorno do registro no Bling",
            "type": "string",
            "optional": false,
            "field": "organizationName",
            "description": "<p>Nome do cliente registrado no Bling</p>"
          },
          {
            "group": "Retorno do registro no Bling",
            "type": "string",
            "optional": false,
            "field": "wonTime",
            "description": "<p>Data de quando ficou com staus won</p>"
          }
        ],
        "Retorno do registro duplicado que não foi enviado no para o Bling": [
          {
            "group": "Retorno do registro duplicado que não foi enviado no para o Bling",
            "type": "number",
            "optional": false,
            "field": "cod",
            "description": "<p>Nome do cliente registrado no Bling</p>"
          },
          {
            "group": "Retorno do registro duplicado que não foi enviado no para o Bling",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>Data de quando ficou com staus won</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/config/apiDoc.js",
    "groupTitle": "Integração_do_PipeDrive_e_Bling",
    "name": "PostPedidos"
  }
] });
