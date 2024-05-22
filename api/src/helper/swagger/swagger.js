

const swaggerAPi = {
  "openapi": "3.1.0",
  "info": {
    "title": "Technical Test",
    "description": "API REST - Technical Test",
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "http://localhost:5000"
    }
  ],




  "tags": [
    {
      "name": "Sales",
      "description": "Operations about sales"
    }
  ],

  "paths": {

    "/api/v1/sales/create": {
      "post": {
        "summary": "create sales",
        "tags": ["Sales"],
        "description": "create sales",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/sale create"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Sales created successfully"
          },
          "400": {
            "description": "Error in the shipping data"
          },
          "500": {
            "description": "Error in the server"
          }
        }
      }
    },

    "/api/v1/sales/list": {
      "get": {
        "summary": "List sales",
        "tags": ["Sales"],
        "description": "List sales",

        "responses": {
          "200": {
            "description": "Sales get successfully"
          },
          "400": {
            "description": "Error in the shipping data"
          },
          "500": {
            "description": "Error in the server"
          }
        }
      }
    },

    "/api/v1/sales/update/{id}": {
      "put": {
        "summary": "update sales",
        "tags": ["Sales"],
        "description": "update sales",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "string",
              "example": "e7990dd3-8aac-476a-810a-3a00753f010b"
            },
            "required": true,
            "description": "id de la venta"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/sale update"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Sales updated successfully"
          },
          "400": {
            "description": "Error in the shipping data"
          },
          "500": {
            "description": "Error in the server"
          }
        }
      }
    },

    "/api/v1/sales/delete/{id}": {
      "delete": {
        "summary": "delete sales",
        "tags": ["Sales"],
        "description": "delete sales",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "string",
              "example": "e7990dd3-8aac-476a-810a-3a00753f010b"
            },
            "required": true,
            "description": "sale id"
          }
        ],
        "responses": {
          "200": {
            "description": "Sales deleted successfully"
          },
          "400": {
            "description": "Error in the shipping data"
          },
          "500": {
            "description": "Error in the server"
          }
        }
      }
    },

    //productos

    "/api/v1/products/create": {
      "post": {
        "summary": "create products",
        "tags": ["Products"],
        "description": "create products",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/products create"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Product created successfully"
          },
          "400": {
            "description": "Error in the shipping data"
          },
          "500": {
            "description": "Error in the server"
          }
        }
      }
    },

    "/api/v1/products/list": {
      "get": {
        "summary": "List products",
        "tags": ["Products"],
        "description": "List products",

        "responses": {
          "200": {
            "description": "Products get successfully"
          },
          "400": {
            "description": "Error in the shipping data"
          },
          "500": {
            "description": "Error in the server"
          }
        }
      }
    },

    //Roles

    "/api/v1/roles/create": {
      "post": {
        "summary": "create roles",
        "tags": ["Roles"],
        "description": "create Roles",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/role create"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Roles created successfully"
          },
          "400": {
            "description": "Error in the shipping data"
          },
          "500": {
            "description": "Error in the server"
          }
        }
      }
    },

    "/api/v1/roles/update/assignUser": {
      "put": {
        "summary": "update roles",
        "tags": ["Roles"],
        "description": "update roles",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/role update"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Roles updated successfully"
          },
          "400": {
            "description": "Error in the shipping data"
          },
          "500": {
            "description": "Error in the server"
          }
        }
      }
    },


    // Users

    "/api/v1/users/create": {
      "post": {
        "summary": "create users",
        "tags": ["Users"],
        "description": "create users",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/user create"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "User created successfully"
          },
          "400": {
            "description": "Error in the shipping data"
          },
          "500": {
            "description": "Error in the server"
          }
        }
      }
    },

    "/api/v1/users/list": {
      "get": {
        "summary": "List users",
        "tags": ["Users"],
        "description": "List users",

        "responses": {
          "200": {
            "description": "Users get successfully"
          },
          "400": {
            "description": "Error in the shipping data"
          },
          "500": {
            "description": "Error in the server"
          }
        }
      }
    },

    "/api/v1/users/delete/{id}": {
      "delete": {
        "summary": "delete users",
        "tags": ["Users"],
        "description": "delete users",  
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "string",
              "example": "e832bdf7-0f89-4e68-8650-d2ef829d4b1a"
            },
            "required": true,
            "description": "user id"
          }
        ],
        "responses": {
          "200": {
            "description": "Users deleted successfully"
          },
          "400": {
            "description": "Error in the shipping data"
          },
          "500": {
            "description": "Error in the server"
          }
        }
      }
    },




  },


  // Shemas

  "components": {
    "schemas": {
      "sale create": {
        "type": "object",
        "properties": {
          "productId": {
            "type": "string",
            "example": "e7990dd3-8aac-476a-810a-3a00753f010b"
          },
          "qty": {
            "type": "integer",
            "example": 1
          },
          "usersId": {
            "type": "string",
            "example": "e7990dd3-8aac-476a-810a-3a00753f010b"
          },
        },
        "required": [
          "productId",
          "qty",
          "usersId"
        ]
      },

      "sale list": {
        "type": "object",
        "properties": {
          "productId": {
            "type": "string",
            "example": "e7990dd3-8aac-476a-810a-3a00753f010b"
          },
          "qty": {
            "type": "integer",
            "example": 1
          },
          "usersId": {
            "type": "string",
            "example": "e7990dd3-8aac-476a-810a-3a00753f010b"
          },
          "deliveryTime": {
            "type": "string",
            "example": 4.5
          }
        },
        "required": [
          "productId",
          "qty",
          "usersId",
          "deliveryTime"
        ]
      },

      "sale update": {
        "type": "object",
        "properties": {
          "productId": {
            "type": "string",
            "example": "e7990dd3-8aac-476a-810a-3a00753f010b"
          },
          "qty": {
            "type": "integer",
            "example": 1
          },
          "usersId": {
            "type": "string",
            "example": "e7990dd3-8aac-476a-810a-3a00753f010b"
          },

        },
        "required": [
          "productId",
          "qty",
          "usersId",
        ]
      },

      //productos
      "products create": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "example": "Coca Cola"
          },
          "price": {
            "type": "integer",
            "example": 1
          },
          "description": {
            "type": "string",
            "example": "Bebida gaseosa"
          },
        },
        "required": [
          "name",
          "price",
          "description",
        ]
      },

      //Roles
      "role create": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "example": "Admin"
          },

        },
        "required": [
          "name",
        ]
      },

      "role update": {
        "type": "object",
        "properties": {
          "userId": {
            "type": "string",
            "example": "e7990dd3-8aac-476a-810a-3a00753f010b"
          },
          "roleId": {
            "type": "string",
            "example": "e7990dd3-8aac-476a-810a-3a00753f010b"
          },
        },
        "required": [
          "userId",
          "roleId",
        ]
      },

      // Users
      "user create": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "example": "Example"
          },
          "lastName": {
            "type": "string",
            "example": "Lastname"
          },
          "document": {
            "type": "string",
            "example": "document.123"
          },
          "rolesId": {
            "type": "string",
            "example": "b25180e1-7393-4f76-9e61-bfe3d98daa0d"
          },

        },
        "required": [
          "name",
          "lastName",
          "document",
          "rolesId",
        ]

      },

    }
  }

}


export default swaggerAPi;