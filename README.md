Documentação da API

Visão Geral

Esta API permite a gestão de categorias e produtos. Ela fornece endpoints para criar, ler, atualizar e deletar informações sobre categorias e produtos.

Base URL
http://localhost:3000/api/v1

Endpoints
1. Categorias
    1.1 Listar Todas as Categorias

        Método: GET
        Endpoint: /categories
        Descrição: Retorna uma lista de todas as categorias.
        Resposta Exemplo:

        json

        {
        "categories": [
            {
            "id": 1,
            "name": "Confectionaries",
            "createdAt": "2024-10-18T22:29:34.522Z",
            "updatedAt": "2024-10-18T22:29:34.522Z"
            },
            {
            "id": 2,
            "name": "Drinks",
            "createdAt": "2024-10-18T22:29:34.522Z",
            "updatedAt": "2024-10-18T22:29:34.522Z"
            }
        ]
        }

    1.2 Criar uma Nova Categoria

        Método: POST
        Endpoint: /categories
        Descrição: Cria uma nova categoria.
        Corpo da Requisição:

        json

    {
        "id": 3,
        "name": "Instrumentos",
        "createdAt": "2024-10-18T23:42:30.032Z",
        "updatedAt": "2024-10-18T23:42:30.032Z"
    }

    Resposta Exemplo:

    json

        {
        "category": {
            "id": 3,
            "name": "Instrumentos",
            "createdAt": "2024-10-18T23:42:30.032Z",
            "updatedAt": "2024-10-19T01:25:24.657Z"
        }
    }

    1.3 Obter uma Categoria por ID

        Método: GET
        Endpoint: /categories/:id
        Descrição: Retorna detalhes de uma categoria específica.
        Parâmetros:
            id (Inteiro): ID da categoria.
        Resposta Exemplo:

        json

        {
        "id": 1,
        "name": "Confectionaries",
        "createdAt": "2024-10-18T22:29:34.522Z",
        "updatedAt": "2024-10-18T22:29:34.522Z"
        }

    1.4 Atualizar uma Categoria

        Método: PUT
        Endpoint: /categories/:id
        Descrição: Atualiza uma categoria existente.
        
        Corpo da Requisição:

        json

            {
            "name": "Categoria Atualizada"
            }

    Resposta Exemplo:

    json

        {
            "category": {
                "id": 1,
                "name": "Instrumento",
                "createdAt": "2024-10-19T01:12:32.197Z",
                "updatedAt": "2024-10-19T01:34:57.161Z",
                "Products": [
                    {
                        "id": 1,
                        "name": "Bread",
                        "quantity": 4,
                        "inStock": true,
                        "productImage": "https://res.cloudinary.com/morelmiles/image/upload/v1649765314/download_nwfpru.jpg",
                        "price": 500,
                        "expiryDate": "2024-10-19T01:12:32.205Z",
                        "createdAt": "2024-10-19T01:12:32.205Z",
                        "updatedAt": "2024-10-19T01:12:32.205Z",
                        "categoryId": 1
                    }
                ]
            }
        }
    
    1.5 Deletar uma Categoria

        Método: DELETE
        Endpoint: /categories/:id
        Descrição: Deleta uma categoria.
   




2. Produtos
    2.1 Listar Todos os Produtos

        Método: GET
        Endpoint: /products
        Descrição: Retorna uma lista de todos os produtos.
        Resposta Exemplo:

        json

        {
        "products": [
            {
            "id": 1,
            "name": "Bread",
            "quantity": 4,
            "price": 500,
            "inStock": true,
            "productImage": "https://...",
            "expiryDate": "2024-10-18T22:29:34.522Z",
            "createdAt": "2024-10-18T22:29:34.522Z",
            "updatedAt": "2024-10-18T22:29:34.522Z",
            "categoryId": "a52467a3-3a71-45c4-bf1c-9ace5ad3668f"
            }
        ]
        }

    2.2 Criar um Novo Produto

        Método: POST
        Endpoint: /products
        Descrição: Cria um novo produto.
        Corpo da Requisição:

        json

            {
            "id": 3,   
            "name": "Novo Produto",
            "quantity": 10,
            "price": 1000,
            "inStock": true,
            "productImage": "https://...",
            "expiryDate": "2025-01-01T00:00:00Z",
            "categoryId": "a52467a3-3a71-45c4-bf1c-9ace5ad3668f"
            }

    Resposta Exemplo:

    json

        {
        "product": {
            "id": 3,
            "name": "Novo Produto",
            "quantity": 10,
            "price": 1000,
            "inStock": true,
            "productImage": "https://...",
            "expiryDate": "2025-01-01T00:00:00.000Z",
            "categoryId": 1,
            "updatedAt": "2024-10-19T14:08:46.514Z",
            "createdAt": "2024-10-19T14:08:46.514Z"
        }
}
    2.3 Obter um Produto por ID

        Método: GET
        Endpoint: /products/:id
        Descrição: Retorna detalhes de um produto específico.
        Parâmetros:
            id (string): ID do produto.
        Resposta Exemplo:

        json

        {
        "id": 1,
        "name": "Bread",
        "quantity": 4,
        "price": 500,
        "inStock": true,
        "productImage": "https://...",
        "expiryDate": "2024-10-18T22:29:34.522Z",
        "createdAt": "2024-10-18T22:29:34.522Z",
        "updatedAt": "2024-10-18T22:29:34.522Z",
        "categoryId": 1
        }

    2.4 Atualizar um Produto

        Método: PUT
        Endpoint: /products/:id
        Descrição: Atualiza um produto existente.
        Corpo da Requisição:

        json

        {
        "name": "Produto Atualizado",
        "quantity": 5,
        "price": 1200,
        "inStock": false,
        "productImage": "https://...",
        "expiryDate": "2025-01-01T00:00:00Z",
        "categoryId": "33a9e6e0-9395-4f6c-b1cd-3cf1f87e195a"
        }

    Resposta Exemplo:

    json
{
    "product": {
        "id": 1,
        "name": "Produto Atualizado",
        "quantity": 5,
        "inStock": false,
        "productImage": "https://...",
        "price": 1200,
        "expiryDate": "2025-01-01T00:00:00.000Z",
        "createdAt": "2024-10-19T01:12:32.205Z",
        "updatedAt": "2024-10-19T14:14:18.624Z",
        "categoryId": 1
    }
}

    2.5 Deletar um Produto

        Método: DELETE
        Endpoint: /products/:id
        Descrição: Deleta um produto.