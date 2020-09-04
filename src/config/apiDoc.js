

     /**
     * @api {post} pedidos  Endpoint de integração
     * @apiDescription Endpoint de integração CRM PipeDrive com o Bling.
     * @apiGroup Integração do PipeDrive e Bling   
     * @apiExample {URL} Example usage:
     * http://localhost:5000/pedidos                                                    
     * 
     * 
     * @apiSuccessExample {json} Success-Response:
     *    [
     *       {
     *           "numero": "289",
     *           "idPedido": 9374228856,
     *           "valueOrder": 10,
     *           "organizationName": "tito it",
     *           "wonTime": "2020-08-30 04:44:21"
     *       },
     *       {
     *           "cod": 30,
     *           "msg": "Pedido ja cadastrado no sistema - Um pedido com o mesmo hash ja encontra-se cadastrado (286)"
     *       },
     *       {
     *           "numero": "287",
     *           "idPedido": 9374228847,
     *           "valueOrder": 50,
     *           "organizationName": "maria",
     *           "wonTime": "2020-09-04 02:57:59"
     *       },
     *       {
     *           "numero": "288",
     *           "idPedido": 9374228850,
     *           "valueOrder": 60,
     *           "organizationName": "Dark",
     *           "wonTime": "2020-09-03 00:49:50"
     *       }
     *   ]
     *  
     * @apiSuccess (Retorno do registro no Bling )          {string}     numero                   Número do pedido no Bling
     * @apiSuccess (Retorno do registro no Bling )          {number}     idPedido                 Identification code of the specific merchant. <br>format: uuid
     * @apiSuccess (Retorno do registro no Bling )          {string}     valueOrder               Total do pedido
     * @apiSuccess (Retorno do registro no Bling )          {string}     organizationName         Nome do cliente registrado no Bling 
     * @apiSuccess (Retorno do registro no Bling )          {string}     wonTime                  Data de quando ficou com staus won 
     * 
     * @apiSuccess (Retorno do registro duplicado que não foi enviado no para o Bling ) {number}     cod    Nome do cliente registrado no Bling 
     * @apiSuccess (Retorno do registro duplicado que não foi enviado no para o Bling ) {string}     msg    Data de quando ficou com staus won
     * 
     * 
     */



     /**
     * @api {get} pedidos  Consulta de pedidos
     * @apiDescription Consulta dos pedidos no mongoDB com params para filtrar a consulta.
     * @apiGroup Integração do PipeDrive e Bling   
     * @apiExample {URL} Example usage:
     * 
     * localhost:5000/pedidos
     * localhost:5000/pedidos?wonTime=2020-09-03T03:49:50.000Z
     * localhost:5000/pedidos?numero=283
     * localhost:5000/pedidos?idPedido=9374098162
     * localhost:5000/pedidos?limit=1
     * localhost:5000/pedidos?page=2
     *                                                 
     * @apiSuccessExample {json} Success-Response:
     *  {
     *      "docs": [
     *          {
     *              "_id": "5f51bc1508ff697fea79769c",
     *              "numero": 283,
     *              "idPedido": 9374098162,
     *              "valueOrder": 60,
     *              "organizationName": "Dark",
     *              "wonTime": "2020-09-03T03:49:50.000Z",
     *              "created_at": "2020-09-04T04:01:25.193Z",
     *              "updated_at": "2020-09-04T04:01:25.193Z",
     *              "__v": 0
     *          },
     *          {
     *              "_id": "5f51c5e77513de157137b846",
     *              "idPedido": 9374187745,
     *              "valueOrder": 60,
     *              "organizationName": "Dark",
     *              "wonTime": "2020-09-03T03:49:50.000Z",
     *              "created_at": "2020-09-04T04:43:19.731Z",
     *              "updated_at": "2020-09-04T04:43:19.731Z",
     *              "__v": 0
     *          },
     *          {
     *              "_id": "5f51d148e4b925263265ac9e",
     *              "numero": 288,
     *              "idPedido": 9374228850,
     *              "valueOrder": 60,
     *              "organizationName": "Dark",
     *              "wonTime": "2020-09-03T03:49:50.000Z",
     *              "created_at": "2020-09-04T05:31:52.332Z",
     *              "updated_at": "2020-09-04T05:31:52.332Z",
     *              "__v": 0
     *          }
     *      ],
     *      "total": 3,
     *      "limit": 10,
     *      "page": 1,
     *      "pages": 1
     *  }
     *  
     *  @apiSuccess (Retorno do endpoint ) {Array}   docs                    Array com os dados                                                                                               
     *  @apiSuccess (Retorno do endpoint ) {String}  docs._id                Id do mongoDB                                                                            
     *  @apiSuccess (Retorno do endpoint ) {String}  docs.numero             Número do pedido no bling                                                                        
     *  @apiSuccess (Retorno do endpoint ) {String}  docs.idPedido           Id do pedido                                                                            
     *  @apiSuccess (Retorno do endpoint ) {String}  docs.valueOrder         Valor da ordem                                                                          
     *  @apiSuccess (Retorno do endpoint ) {String}  docs.organizationName   Nome do cliente que comprou                                                                                     
     *  @apiSuccess (Retorno do endpoint ) {String}  docs.wonTime            Horario que o pedido ficou com status won                                                                            
     *  @apiSuccess (Retorno do endpoint ) {String}  docs.created_at         Data de registro no mondoDB                                                                            
     *  @apiSuccess (Retorno do endpoint ) {String}  docs.updated_at         Data de update do registro no mongoDB                                                   
     *  @apiSuccess (Retorno do endpoint ) {Number}  total                   Total de intes no mongoDB                                   
     *  @apiSuccess (Retorno do endpoint ) {Number}  limit                   Limite de itens de retorno                                               
     *  @apiSuccess (Retorno do endpoint ) {Number}  page                    Página atual                                                                        
     *  @apiSuccess (Retorno do endpoint ) {Number}  pages                   Páginas disponíveis para consulta                                                                        
     * 
     * 
     * 
     */


     /**
     * @api {get} pedidos  Consulta de consolidados de pedidos por data 
     * @apiDescription Consulta consolidado
     * @apiGroup Integração do PipeDrive e Bling   
     * @apiExample {URL} Example usage:
     * 
     *  localhost:5000/pedidos-findDate?date=2020-08-31
     *                                                 
     * @apiSuccessExample {json} Success-Response:
     *  {
     *      "data": [
     *          {
     *              "_id": "5f51bc1508ff697fea79769a",
     *              "numero": 281,
     *              "idPedido": 9374098154,
     *              "valueOrder": 10,
     *              "organizationName": "nina",
     *              "wonTime": "2020-08-31T04:42:03.000Z",
     *              "created_at": "2020-09-04T04:01:25.192Z",
     *              "updated_at": "2020-09-04T04:01:25.192Z",
     *              "__v": 0
     *          },
     *          {
     *              "_id": "5f51c5e77513de157137b844",
     *              "idPedido": 9374187748,
     *              "valueOrder": 10,
     *              "organizationName": "nina",
     *              "wonTime": "2020-08-31T04:42:03.000Z",
     *              "created_at": "2020-09-04T04:43:19.728Z",
     *              "updated_at": "2020-09-04T04:43:19.728Z",
     *              "__v": 0
     *          }
     *      ],
     *      "consolidatedDay": 20
     *  }
     *  
     *  @apiSuccess (Retorno do endpoint ) {Array}   data                    Array com os dados                                                                                               
     *  @apiSuccess (Retorno do endpoint ) {String}  docs._id                Id do mongoDB                                                                            
     *  @apiSuccess (Retorno do endpoint ) {String}  docs.numero             Número do pedido no bling                                                                        
     *  @apiSuccess (Retorno do endpoint ) {String}  docs.idPedido           Id do pedido                                                                            
     *  @apiSuccess (Retorno do endpoint ) {String}  docs.valueOrder         Valor da ordem                                                                          
     *  @apiSuccess (Retorno do endpoint ) {String}  docs.organizationName   Nome do cliente que comprou                                                                                     
     *  @apiSuccess (Retorno do endpoint ) {String}  docs.wonTime            Horario que o pedido ficou com status won                                                                            
     *  @apiSuccess (Retorno do endpoint ) {String}  docs.created_at         Data de registro no mondoDB                                                                            
     *  @apiSuccess (Retorno do endpoint ) {String}  docs.updated_at         Data de update do registro no mongoDB                                                                                                                         
     *  @apiSuccess (Retorno do endpoint ) {String}  consolidatedDay         Soma de todos os pedidos da data informada                                                                                                                         
     * 
     * 
     * 
     */
