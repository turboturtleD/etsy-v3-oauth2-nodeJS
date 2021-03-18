const openapi = {
    "openapi": "3.0.2",
    "info": {
        "title": "Etsy OpenAPI",
        "description": "<div class=\"wt-text-body-01\"><p class=\"wt-pt-xs-2 wt-pb-xs-2\">Etsy's Open API provides a simple RESTful interface for various Etsy.com features. The API reference documents endpoints are meant to replace <a target=\"_blank\" class=\"wt-text-link wt-p-xs-0\" href=\"https://www.etsy.com/developers/documentation\">Etsy's current Open API</a> this year. Use of the API is subject to the <a target=\"_blank\" class=\"wt-text-link wt-p-xs-0\" href=\"https://www.etsy.com/legal/api\">API Terms of Use</a>.</p><p class=\"wt-pb-xs-2\">The API is currently in an experimental, alpha phase meant to validate feature and functionality requirements. During this phase, endpoints may have significant design changes but developers will have an opportunity to preview endpoints and provide feedback that will help shape Etsy's Open API functionality. The alpha API design is not stable and will likely change in response to feedback but we'll communicate changes as they are made.</p><p class=\"wt-pb-xs-2\">All of the endpoints are callable, but many endpoints are currently interface stubs and will return a \"501 Not Implemented\" response code when called; the documentation for each of these stub endpoints includes an alert calling this out.</p><p class=\"wt-pb-xs-2\">If you'd like to report an issue or provide feedback on the API design, <a target=\"_blank\" class=\"wt-text-link wt-p-xs-0\" href=\"https://github.com/etsy/open-api/issues/new/choose\">please add an issue in Github</a>. You grant us a license to use your feedback as described in Etsy's primary <a target=\"_blank\" class=\"wt-text-link wt-p-xs-0\" href=\"https://www.etsy.com/legal/terms-of-use\">Terms of Use.</a></p><p class=\"wt-pb-xs-2\">If you would like to make requests to the Open API v3 endpoints, please contact <a target=\"_blank\" class=\"wt-text-link wt-p-xs-0\" href=\"mailto:developers@etsy.com\">developers@etsy.com</a> and provide your API key and an OAuth2 callback URL for authentication.</p></div>&copy; 2021 Etsy, Inc. All Rights Reserved. Use of this code is subject to Etsy's <a class='wt-text-link wt-p-xs-0' target='_blank' href='https://www.etsy.com/legal/api'>API Developer Terms of Use</a>.",
        "termsOfService": "https://www.etsy.com/legal/api",
        "contact": {
            "email": "developers@etsy.com"
        },
        "version": "3.0.0",
        "x-logo": {
            "url": "https://img0.etsystatic.com/site-assets/open-api/etsy_logo.png",
            "backgroundColor": "#FFFFFF",
            "altText": "Etsy Logo"
        }
    },
    "servers": [
        {
            "url": "https://openapi.etsy.com",
            "description": "Base url for all Integrations endpoints."
        }
    ],
    "security": [
        {
            "api_key": []
        }
    ],
    "tags": [
        {
            "name": "User"
        },
        {
            "name": "UserFeedback"
        },
        {
            "name": "UserAddress"
        },
        {
            "name": "Shop Receipt Transactions"
        },
        {
            "name": "Shop"
        },
        {
            "name": "ShopListing"
        },
        {
            "name": "Shop Section"
        },
        {
            "name": "Shop Receipt"
        },
        {
            "name": "Payment"
        },
        {
            "name": "Ledger Entry"
        },
        {
            "name": "ShopListing VariationImage"
        },
        {
            "name": "ShopListing Translation"
        },
        {
            "name": "ShopListing ShippingProfile"
        },
        {
            "name": "ShopListing Inventory"
        },
        {
            "name": "ShopListing Offering"
        },
        {
            "name": "ShopListing Product"
        },
        {
            "name": "ShopListing Image"
        },
        {
            "name": "ShopListing File"
        },
        {
            "name": "Country"
        }
    ],
    "x-tagGroups": [
        {
            "name": "Country Management",
            "tags": ["Country"]
        },
        {
            "name": "Listing Management",
            "tags": [
                "ShopListing",
                "ShopListing File",
                "ShopListing Image",
                "ShopListing Inventory",
                "ShopListing Offering",
                "ShopListing Product",
                "ShopListing ShippingProfile",
                "ShopListing Translation",
                "ShopListing VariationImage"
            ]
        },
        {
            "name": "Payment Management",
            "tags": ["Ledger Entry", "Payment"]
        },
        {
            "name": "Receipt Management",
            "tags": ["Shop Receipt", "Shop Receipt Transactions"]
        },
        {
            "name": "Shop Management",
            "tags": ["Shop", "Shop Section"]
        },
        {
            "name": "User Management",
            "tags": ["User", "UserAddress", "UserFeedback"]
        }
    ],
    "paths": {
        "/v3/public/openapi/countries/{country_id}": {
            "get": {
                "operationId": "getCountry",
                "description": "Open API V3 to retrieve a country by ID.",
                "tags": ["Country"],
                "parameters": [
                    {
                        "name": "country_id",
                        "in": "path",
                        "description": "",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single Country",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Country"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/v3/public/openapi/countries": {
            "get": {
                "operationId": "getCountries",
                "description": "OpenAPI V3 endpoint to find all countries.",
                "tags": ["Country"],
                "responses": {
                    "200": {
                        "description": "A list of Countries",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Countries"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/v3/application/feedback": {
            "get": {
                "operationId": "getPublicUserFeedback",
                "description": "<div class=\"wt-alert wt-alert--inline wt-alert--status-02 wt-mb-xs-2\"><p class=\"wt-text-body-01\">This endpoint isn't functional but we welcome feedback on the proposed schema below.</p></div>\n\nOpen API V3 endpoint to retrieve UserFeedback written by or received by a User.",
                "tags": ["UserFeedback"],
                "parameters": [
                    {
                        "name": "creator_user_id",
                        "in": "query",
                        "description": "The numeric ID of the user who wrote this feedback.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The numeric ID of the user who wrote this feedback.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "target_user_id",
                        "in": "query",
                        "description": "The numeric ID of the user who received this feedback.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The numeric ID of the user who received this feedback.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "A limit on the number of results to be returned.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "A limit on the number of results to be returned.",
                            "minimum": 1,
                            "maximum": 100,
                            "default": 25
                        }
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The number of items to skip before starting to collect the result set.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The number of items to skip before starting to collect the result set.",
                            "minimum": 0,
                            "default": 0
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of UserFeedback records",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/PublicUserFeedbacks"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["feedback_r"]
                    }
                ]
            }
        },
        "/v3/application/listings": {
            "post": {
                "operationId": "createListing",
                "description": "Creates a new listing",
                "tags": ["ShopListing"],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "type": "object",
                                "required": [
                                    "quantity",
                                    "title",
                                    "description",
                                    "price",
                                    "who_made",
                                    "when_made",
                                    "taxonomy_id"
                                ],
                                "properties": {
                                    "quantity": {
                                        "type": "integer"
                                    },
                                    "title": {
                                        "type": "string"
                                    },
                                    "description": {
                                        "type": "string"
                                    },
                                    "price": {
                                        "type": "number",
                                        "format": "float"
                                    },
                                    "who_made": {
                                        "type": "string",
                                        "enum": [
                                            "i_did",
                                            "someone_else",
                                            "collective"
                                        ]
                                    },
                                    "when_made": {
                                        "type": "string",
                                        "enum": [
                                            "made_to_order",
                                            "2020_2020",
                                            "2010_2019",
                                            "2001_2009",
                                            "before_2001",
                                            "2000_2000",
                                            "1990s",
                                            "1980s",
                                            "1970s",
                                            "1960s",
                                            "1950s",
                                            "1940s",
                                            "1930s",
                                            "1920s",
                                            "1910s",
                                            "1900s",
                                            "1800s",
                                            "1700s",
                                            "before_1700"
                                        ]
                                    },
                                    "taxonomy_id": {
                                        "type": "integer",
                                        "minimum": 1
                                    },
                                    "type": {
                                        "type": "string",
                                        "enum": ["physical", "download"],
                                        "default": 0
                                    },
                                    "materials": {
                                        "type": "array",
                                        "nullable": true,
                                        "items": {
                                            "type": "string",
                                            "nullable": true
                                        }
                                    },
                                    "shipping_profile_id": {
                                        "type": "integer",
                                        "nullable": true,
                                        "minimum": 1
                                    },
                                    "shop_section_id": {
                                        "type": "integer",
                                        "nullable": true,
                                        "minimum": 1
                                    },
                                    "processing_min": {
                                        "type": "integer",
                                        "nullable": true
                                    },
                                    "processing_max": {
                                        "type": "integer",
                                        "nullable": true
                                    },
                                    "tags": {
                                        "type": "array",
                                        "nullable": true,
                                        "items": {
                                            "type": "string",
                                            "nullable": true
                                        }
                                    },
                                    "recipient": {
                                        "type": "string",
                                        "nullable": true,
                                        "enum": [
                                            "men",
                                            "women",
                                            "unisex_adults",
                                            "teen_boys",
                                            "teen_girls",
                                            "teens",
                                            "boys",
                                            "girls",
                                            "children",
                                            "baby_boys",
                                            "baby_girls",
                                            "babies",
                                            "birds",
                                            "cats",
                                            "dogs",
                                            "pets",
                                            "not_specified"
                                        ]
                                    },
                                    "occasion": {
                                        "type": "string",
                                        "nullable": true,
                                        "enum": [
                                            "anniversary",
                                            "baptism",
                                            "bar_or_bat_mitzvah",
                                            "birthday",
                                            "canada_day",
                                            "chinese_new_year",
                                            "cinco_de_mayo",
                                            "confirmation",
                                            "christmas",
                                            "day_of_the_dead",
                                            "easter",
                                            "eid",
                                            "engagement",
                                            "fathers_day",
                                            "get_well",
                                            "graduation",
                                            "halloween",
                                            "hanukkah",
                                            "housewarming",
                                            "kwanzaa",
                                            "prom",
                                            "july_4th",
                                            "mothers_day",
                                            "new_baby",
                                            "new_years",
                                            "quinceanera",
                                            "retirement",
                                            "st_patricks_day",
                                            "sweet_16",
                                            "sympathy",
                                            "thanksgiving",
                                            "valentines",
                                            "wedding"
                                        ]
                                    },
                                    "styles": {
                                        "type": "array",
                                        "nullable": true,
                                        "items": {
                                            "type": "string",
                                            "nullable": true
                                        }
                                    },
                                    "item_weight": {
                                        "type": "number",
                                        "format": "float",
                                        "nullable": true
                                    },
                                    "item_length": {
                                        "type": "number",
                                        "format": "float",
                                        "nullable": true
                                    },
                                    "item_width": {
                                        "type": "number",
                                        "format": "float",
                                        "nullable": true
                                    },
                                    "item_height": {
                                        "type": "number",
                                        "format": "float",
                                        "nullable": true
                                    },
                                    "item_weight_unit": {
                                        "type": "string",
                                        "nullable": true,
                                        "enum": ["oz", "lb", "g", "kg"]
                                    },
                                    "item_dimensions_unit": {
                                        "type": "string",
                                        "nullable": true,
                                        "enum": [
                                            "in",
                                            "ft",
                                            "mm",
                                            "cm",
                                            "m",
                                            "yd",
                                            "inches"
                                        ]
                                    },
                                    "is_personalizable": {
                                        "type": "boolean"
                                    },
                                    "image_ids": {
                                        "type": "array",
                                        "items": {
                                            "type": "integer",
                                            "minimum": 1
                                        }
                                    },
                                    "state": {
                                        "type": "string"
                                    },
                                    "channels": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "enum": [
                                                "etsy.com",
                                                "wholesale",
                                                "pattern",
                                                "sell_on_facebook"
                                            ]
                                        }
                                    },
                                    "is_supply": {
                                        "type": "boolean"
                                    },
                                    "is_customizable": {
                                        "type": "boolean"
                                    },
                                    "is_taxable": {
                                        "type": "boolean"
                                    },
                                    "is_private": {
                                        "type": "boolean"
                                    },
                                    "should_auto_renew": {
                                        "type": "boolean"
                                    },
                                    "is_digital": {
                                        "type": "boolean"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "A single ShopListing",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopListing"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            },
            "get": {
                "operationId": "getListings",
                "description": "Endpoint to list Listings that belong to a Shop. Listings can be filtered using the 'state' param.",
                "tags": ["ShopListing"],
                "parameters": [
                    {
                        "name": "state",
                        "in": "query",
                        "description": "listing_state",
                        "required": true,
                        "schema": {
                            "type": "string",
                            "description": "listing_state",
                            "enum": [
                                "active",
                                "inactive",
                                "removed",
                                "draft",
                                "expired",
                                "sold_out"
                            ]
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "limit",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "limit",
                            "minimum": 1,
                            "maximum": 100,
                            "default": 25
                        }
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "offset",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "offset",
                            "minimum": 0,
                            "default": 0
                        }
                    },
                    {
                        "name": "sort_on",
                        "in": "query",
                        "description": "listing_sort_on",
                        "required": false,
                        "schema": {
                            "type": "string",
                            "description": "listing_sort_on",
                            "enum": ["created", "price", "score"],
                            "default": "created"
                        }
                    },
                    {
                        "name": "sort_order",
                        "in": "query",
                        "description": "listing_sort_order",
                        "required": false,
                        "schema": {
                            "type": "string",
                            "description": "listing_sort_order",
                            "enum": [
                                "asc",
                                "ascending",
                                "desc",
                                "descending",
                                "up",
                                "down"
                            ],
                            "default": "DESC"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of Listings",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopListings"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_r"]
                    }
                ]
            }
        },
        "/v3/application/listings/{listing_id}": {
            "delete": {
                "operationId": "deleteListing",
                "description": "<div class=\"wt-alert wt-alert--inline wt-alert--status-02 wt-mb-xs-2\"><p class=\"wt-text-body-01\">This endpoint isn't functional but we welcome feedback on the proposed schema below.</p></div>\n\nOpen API V3 endpoint to delete a ShopListing.",
                "tags": ["ShopListing"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single ShopListing",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopListing"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_d"]
                    }
                ]
            },
            "get": {
                "operationId": "getListing",
                "description": "Get a listing",
                "tags": ["ShopListing"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single Listing",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopListing"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            },
            "put": {
                "operationId": "updateListing",
                "description": "<div class=\"wt-alert wt-alert--inline wt-alert--status-02 wt-mb-xs-2\"><p class=\"wt-text-body-01\">This endpoint isn't functional but we welcome feedback on the proposed schema below.</p></div>\n\nUpdates a ShopListing.",
                "tags": ["ShopListing"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "quantity": {
                                        "type": "integer",
                                        "description": "The quantity of this item available for sale. Note: The quantity is the total number of available offerings. The getInventory method will detail quantities for individual offerings."
                                    },
                                    "title": {
                                        "type": "string",
                                        "description": "The listing's title. This string is valid if it does not match the following pattern: /[^\\p{L}\\p{Nd}\\p{P}\\p{Sm}\\p{Zs}™©®]/u. The characters %, :, & and + can only be used once each."
                                    },
                                    "description": {
                                        "type": "string",
                                        "description": "A description of the item."
                                    },
                                    "price": {
                                        "type": "number",
                                        "description": "The item's price (will be treated as private for sold listings). Note: The price is the minimum possible price. The getInventory method will detail exact prices for available offerings.",
                                        "format": "float"
                                    },
                                    "materials": {
                                        "type": "array",
                                        "description": "A list of materials used in the item. A material is valid if it does not match the pattern: /[^\\p{L}\\p{Nd}\\p{Zs}]/u",
                                        "nullable": true,
                                        "items": {
                                            "type": "string",
                                            "nullable": true
                                        }
                                    },
                                    "is_renew": {
                                        "type": "boolean",
                                        "description": "To renew a listing for another four months, pass the optional parameter renew=true. A listing does not need to be expired to be renewed, however note that each renewal does not take the listing's previous expiration date into account, so any unused time remaining on the listing's old expiration date will be lost. Renewals will result in charges to a user's bill."
                                    },
                                    "shipping_profile_id": {
                                        "type": "integer",
                                        "description": "The numeric ID of the shipping profile associated with the listing.",
                                        "nullable": true,
                                        "minimum": 1
                                    },
                                    "shop_section_id": {
                                        "type": "integer",
                                        "description": "The numeric ID of the shop section for this listing.",
                                        "nullable": true,
                                        "minimum": 1
                                    },
                                    "is_customizable": {
                                        "type": "boolean",
                                        "description": "If this flag is true, a buyer may contact the seller for a customized order. Can only be set when the shop accepts custom orders and defaults to true in that case."
                                    },
                                    "item_weight": {
                                        "type": "number",
                                        "description": "How much the item weighs.",
                                        "format": "float",
                                        "nullable": true
                                    },
                                    "item_length": {
                                        "type": "number",
                                        "description": "How long the item is.",
                                        "format": "float",
                                        "nullable": true
                                    },
                                    "item_width": {
                                        "type": "number",
                                        "description": "How wide the item is.",
                                        "format": "float",
                                        "nullable": true
                                    },
                                    "item_height": {
                                        "type": "number",
                                        "description": "How tall the item is.",
                                        "format": "float",
                                        "nullable": true
                                    },
                                    "item_weight_unit": {
                                        "type": "string",
                                        "description": "The units used to represent the weight of this item.",
                                        "nullable": true,
                                        "enum": ["oz", "lb", "g", "kg"]
                                    },
                                    "item_dimensions_unit": {
                                        "type": "string",
                                        "description": "The units used to represent the dimensions of this item.",
                                        "nullable": true,
                                        "enum": [
                                            "in",
                                            "ft",
                                            "mm",
                                            "cm",
                                            "m",
                                            "yd",
                                            "inches"
                                        ]
                                    },
                                    "is_taxable": {
                                        "type": "boolean",
                                        "description": "If this flag is true, any applicable shop tax rates will be applied to this listing on checkout."
                                    },
                                    "taxonomy_id": {
                                        "type": "integer",
                                        "description": "The seller taxonomy id of the listing",
                                        "minimum": 1
                                    },
                                    "tags": {
                                        "type": "array",
                                        "description": "A list of tags for the item. A tag is valid if it does not match the pattern: /[^\\p{L}\\p{Nd}\\p{Zs}\\-'™©®]/u",
                                        "nullable": true,
                                        "items": {
                                            "type": "string",
                                            "nullable": true
                                        }
                                    },
                                    "who_made": {
                                        "type": "string",
                                        "description": "Who made the item being listed",
                                        "enum": [
                                            "i_did",
                                            "someone_else",
                                            "collective"
                                        ]
                                    },
                                    "when_made": {
                                        "type": "string",
                                        "description": "When was the item made.",
                                        "enum": [
                                            "made_to_order",
                                            "2020_2020",
                                            "2010_2019",
                                            "2001_2009",
                                            "before_2001",
                                            "2000_2000",
                                            "1990s",
                                            "1980s",
                                            "1970s",
                                            "1960s",
                                            "1950s",
                                            "1940s",
                                            "1930s",
                                            "1920s",
                                            "1910s",
                                            "1900s",
                                            "1800s",
                                            "1700s",
                                            "before_1700"
                                        ]
                                    },
                                    "processing_min": {
                                        "type": "integer",
                                        "description": "The minimum number of days for processing for this listing.",
                                        "nullable": true,
                                        "minimum": 0
                                    },
                                    "processing_max": {
                                        "type": "integer",
                                        "description": "The maximum number of days for processing for this listing.",
                                        "nullable": true,
                                        "minimum": 0
                                    },
                                    "featured_rank": {
                                        "type": "integer",
                                        "description": "Position in the featured listings portion of the shop",
                                        "nullable": true
                                    },
                                    "image_ids": {
                                        "type": "array",
                                        "description": "An array of images for the listing, can include up to 10 images.",
                                        "items": {
                                            "type": "integer",
                                            "minimum": 1
                                        }
                                    },
                                    "is_auto_renew": {
                                        "type": "boolean",
                                        "description": "True if this listing has been set to automatically renew."
                                    },
                                    "sku": {
                                        "type": "string",
                                        "description": "A list of distinct SKUs applied to a listing."
                                    },
                                    "is_personalizable": {
                                        "type": "boolean",
                                        "description": "Indicates if listing is personalizable"
                                    },
                                    "is_private": {
                                        "type": "boolean",
                                        "description": "Is this listing a private listing that is intendend for a specific buyer and hidden from shop view."
                                    },
                                    "type": {
                                        "type": "string",
                                        "description": "Indicates whether the listing is physical or a digital download.",
                                        "enum": ["physical", "download"],
                                        "default": 0
                                    },
                                    "state": {
                                        "type": "string",
                                        "description": "One of active, removed, sold_out, expired, alchemy, edit, create, private, or unavailable.",
                                        "enum": [
                                            "active",
                                            "inactive",
                                            "removed",
                                            "draft",
                                            "expired",
                                            "sold_out"
                                        ],
                                        "default": 0
                                    },
                                    "channels": {
                                        "type": "array",
                                        "description": "A channel is a venue for sellers to reach buyers in order to make sales.",
                                        "items": {
                                            "type": "string",
                                            "enum": [
                                                "etsy.com",
                                                "wholesale",
                                                "pattern",
                                                "sell_on_facebook"
                                            ]
                                        },
                                        "default": ["etsy.com"]
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A single ShopListing",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopListing"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            }
        },
        "/v3/application/listings/{listing_id}/files/{listing_file_id}": {
            "delete": {
                "operationId": "deleteListingFile",
                "description": "Deletes a ShopListingFile from the given ShopListing. If the ShopListingFile being deleted is the last ShopListingFile for a digital ShopListing, the ShopListing will be converted to a physical ShopListing. Returns the remaining ShopListingFile records associated with the given ShopListing.",
                "tags": ["ShopListing File"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "listing_file_id",
                        "in": "path",
                        "description": "The unique ID of a digital ListingFile associated with a digital ShopListing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of a digital ListingFile associated with a digital ShopListing.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of remaining ShopListingFile resources attached to the Listing.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopListingFiles"
                                }
                            }
                        }
                    },
                    "409": {
                        "description": "There was a request conflict with current state of the target resource. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            },
            "get": {
                "operationId": "getListingFile",
                "description": "Get a single ShopListingFile associated with the given digital ShopListing. The endpoint will return an empty result set for physical ShopListing records.",
                "tags": ["ShopListing File"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "listing_file_id",
                        "in": "path",
                        "description": "The unique ID of a digital ListingFile associated with a digital ShopListing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of a digital ListingFile associated with a digital ShopListing.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A ShopListingFile resource.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopListingFile"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_r"]
                    }
                ]
            }
        },
        "/v3/application/listings/{listing_id}/files": {
            "get": {
                "operationId": "getAllListingFiles",
                "description": "Get all ShopListingFile records for the given digital ShopListing. This endpoint will return an empty result set for physical ShopListing records.",
                "tags": ["ShopListing File"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of ShopListingFile resources.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopListingFiles"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_r"]
                    }
                ]
            },
            "post": {
                "operationId": "uploadListingFile",
                "description": "<div class=\"wt-alert wt-alert--inline wt-alert--status-02 wt-mb-xs-2\"><p class=\"wt-text-body-01\">This endpoint isn't functional but we welcome feedback on the proposed schema below.</p></div>\n\nUpload a new ListingFile, or attach an existing file to the given ShopListing. You must either provide the listing_file_id of an existing ListingFile, or the name and file data of a new ListingFile that you are uploading. If you are attaching a ListingFile to a physical ShopListing, the ShopListing will be converted to a digital ShopListing. This will cause the ShopListing to have free shipping and will remove any variations.",
                "tags": ["ShopListing File"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    }
                ],
                "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "listing_file_id": {
                                        "type": "integer",
                                        "description": "The unique ID of a digital ListingFile associated with a digital ShopListing.",
                                        "minimum": 1
                                    },
                                    "file": {
                                        "type": "string",
                                        "description": "A digital file to upload.",
                                        "format": "binary"
                                    },
                                    "name": {
                                        "type": "string",
                                        "description": "A name for the file being uploaded."
                                    },
                                    "rank": {
                                        "type": "integer",
                                        "description": "The position of the resource in a list, starting at 1.",
                                        "minimum": 1,
                                        "default": 1
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A ShopListingFile resource.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopListingFile"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            }
        },
        "/v3/application/listings/active": {
            "get": {
                "operationId": "findAllListingsActive",
                "description": "<div class=\"wt-alert wt-alert--inline wt-alert--status-02 wt-mb-xs-2\"><p class=\"wt-text-body-01\">This endpoint isn't functional but we welcome feedback on the proposed schema below.</p></div>\n\nA list of all active listings on Etsy paginated by their creation date. Without sort_order listings will be returned newest-first by default.",
                "tags": ["ShopListing"],
                "parameters": [
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "A limit on the number of results to be returned.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "A limit on the number of results to be returned.",
                            "minimum": 1,
                            "maximum": 100,
                            "default": 25
                        }
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The number of items to skip before starting to collect the result set.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The number of items to skip before starting to collect the result set.",
                            "minimum": 0,
                            "default": 0
                        }
                    },
                    {
                        "name": "keywords",
                        "in": "query",
                        "description": "Search term or phrase to use to narrow down a set of results for a resource",
                        "required": false,
                        "schema": {
                            "type": "string",
                            "description": "Search term or phrase to use to narrow down a set of results for a resource",
                            "default": null
                        }
                    },
                    {
                        "name": "sort_on",
                        "in": "query",
                        "description": "The value to sort a search result of listings on. NOTE: sort_on only works when combined with one of the search options (keywords, region, etc.). ",
                        "required": false,
                        "schema": {
                            "type": "string",
                            "description": "The value to sort a search result of listings on. NOTE: sort_on only works when combined with one of the search options (keywords, region, etc.). ",
                            "enum": ["created", "price", "score"],
                            "default": "created"
                        }
                    },
                    {
                        "name": "sort_order",
                        "in": "query",
                        "description": "The ascending(up) or descending(down) order to sort listings by. NOTE: sort_order only works when combined with one of the search options (keywords, region, etc.).",
                        "required": false,
                        "schema": {
                            "type": "string",
                            "description": "The ascending(up) or descending(down) order to sort listings by. NOTE: sort_order only works when combined with one of the search options (keywords, region, etc.).",
                            "enum": [
                                "asc",
                                "ascending",
                                "desc",
                                "descending",
                                "up",
                                "down"
                            ],
                            "default": "descending"
                        }
                    },
                    {
                        "name": "min_price",
                        "in": "query",
                        "description": "The minimum price of listings to be returned by a search result",
                        "required": false,
                        "schema": {
                            "type": "number",
                            "description": "The minimum price of listings to be returned by a search result",
                            "format": "float",
                            "default": null
                        }
                    },
                    {
                        "name": "max_price",
                        "in": "query",
                        "description": "The maximum price of listings to be returned by a search result",
                        "required": false,
                        "schema": {
                            "type": "number",
                            "description": "The maximum price of listings to be returned by a search result",
                            "format": "float",
                            "default": null
                        }
                    },
                    {
                        "name": "taxonomy_id",
                        "in": "query",
                        "description": "The seller taxonomy id of the listing",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The seller taxonomy id of the listing",
                            "minimum": 1,
                            "default": null
                        }
                    },
                    {
                        "name": "lat",
                        "in": "query",
                        "description": "A valid numeric latitude, between -90.0 and 90.0",
                        "required": false,
                        "schema": {
                            "type": "number",
                            "description": "A valid numeric latitude, between -90.0 and 90.0",
                            "format": "float",
                            "minimum": -90,
                            "maximum": 90,
                            "default": null
                        }
                    },
                    {
                        "name": "lon",
                        "in": "query",
                        "description": "A valid numeric longitude, between -180.0 and 180.0",
                        "required": false,
                        "schema": {
                            "type": "number",
                            "description": "A valid numeric longitude, between -180.0 and 180.0",
                            "format": "float",
                            "minimum": -180,
                            "maximum": 180,
                            "default": null
                        }
                    },
                    {
                        "name": "region",
                        "in": "query",
                        "description": "An ISO 3166-1 alpha 2 country code. Currently supported values: US, CA, AU, GB, DE, FR, NL, IT, ES, RU, PT, GR, IE, JP, NZ, PL",
                        "required": false,
                        "schema": {
                            "type": "string",
                            "description": "An ISO 3166-1 alpha 2 country code. Currently supported values: US, CA, AU, GB, DE, FR, NL, IT, ES, RU, PT, GR, IE, JP, NZ, PL",
                            "default": null
                        }
                    },
                    {
                        "name": "geo_level",
                        "in": "query",
                        "description": "The geographic level enum(city, state, country) within which to search for listings",
                        "required": false,
                        "schema": {
                            "type": "string",
                            "description": "The geographic level enum(city, state, country) within which to search for listings",
                            "default": "city"
                        }
                    },
                    {
                        "name": "accepts_gift_cards",
                        "in": "query",
                        "description": "Filter for only those listings that accept gift cards",
                        "required": false,
                        "schema": {
                            "type": "boolean",
                            "description": "Filter for only those listings that accept gift cards",
                            "default": false
                        }
                    },
                    {
                        "name": "translate_keywords",
                        "in": "query",
                        "description": "If translate_keywords is true, it allows for non-English language searches in conjuction with 'language'",
                        "required": false,
                        "schema": {
                            "type": "boolean",
                            "description": "If translate_keywords is true, it allows for non-English language searches in conjuction with 'language'",
                            "default": false
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of all active listings on Etsy paginated by their creation date. Without sort_order listings will be returned newest-first by default.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopListings"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/v3/application/listings/{listing_id}/images/{listing_image_id}": {
            "delete": {
                "operationId": "deleteListingImage",
                "description": "Open API V3 endpoint to delete a listing image. A copy of the file remains on our servers, and so a deleted image may be re-associated with the listing without re-uploading the original image; see uploadListingImage.",
                "tags": ["ShopListing Image"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "listing_image_id",
                        "in": "path",
                        "description": "The unique ID of a Listing Image for an Etsy.com Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of a Listing Image for an Etsy.com Listing.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single ListingImage",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingImage"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            }
        },
        "/v3/application/openapi/listings/{listing_id}/images/{listing_image_id}": {
            "get": {
                "operationId": "getListingImage",
                "description": "Retrieves a ListingImage resource by ID.",
                "tags": ["ShopListing Image"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "listing_image_id",
                        "in": "path",
                        "description": "The unique ID of a Listing Image for an Etsy.com Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of a Listing Image for an Etsy.com Listing.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single ListingImage",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingImage"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/v3/application/openapi/listings/{listing_id}/images": {
            "get": {
                "operationId": "getListingImages",
                "description": "Retrieves all ListingImage resources for Listing.",
                "tags": ["ShopListing Image"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single ListingImage",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingImages"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/v3/application/listings/{listing_id}/images": {
            "post": {
                "operationId": "uploadListingImage",
                "description": "Uploads a ListingImage.\n\nA new ListingImage can be uploaded via the image param. A previously deleted ListingImage can be re-associated with a Listing via the listing_image_id param. Only one param should be included per request; if both are present in the request, the endpoint will upload the provided image.",
                "tags": ["ShopListing Image"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    }
                ],
                "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "image": {
                                        "type": "string",
                                        "description": "A name for the file being uploaded.",
                                        "format": "binary"
                                    },
                                    "listing_image_id": {
                                        "type": "integer",
                                        "description": "The unique ID of a Listing Image for an Etsy.com Listing.",
                                        "minimum": 1
                                    },
                                    "rank": {
                                        "type": "integer",
                                        "description": "The position of the resource in a list, starting at 1.",
                                        "minimum": 0,
                                        "default": 1
                                    },
                                    "overwrite": {
                                        "type": "boolean",
                                        "description": "Whether or not to replace the existing image at a given rank.",
                                        "default": false
                                    },
                                    "is_watermarked": {
                                        "type": "boolean",
                                        "description": "Whether or not the uploaded image is watermarked.",
                                        "default": false
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A single ListingImage",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingImage"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "409": {
                        "description": "There was a request conflict with current state of the target resource. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            }
        },
        "/v3/application/listings/{listing_id}/inventory": {
            "get": {
                "operationId": "getListingInventory",
                "description": "Get the inventory for a listing. When a listing has not been edited using the Etsy.com inventory tools, it will have no inventory records. This endpoint returns SKU data if you're the owner of the inventory records being fetched.",
                "tags": ["ShopListing Inventory"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single ListingInventory record.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingInventory"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_r"]
                    }
                ]
            },
            "put": {
                "operationId": "updateListingInventory",
                "description": "<div class=\"wt-alert wt-alert--inline wt-alert--status-02 wt-mb-xs-2\"><p class=\"wt-text-body-01\">This endpoint isn't functional but we welcome feedback on the proposed schema below.</p></div>\n\nUpdate the inventory for a listing. The update will fail if the supplied values for product sku and offering quantity and price are incompatible with the supplied values of the 'on_property_*' fields. When supplying a price, supply a float equivalent to amount divided by divisor as specified in the Money resource.",
                "tags": ["ShopListing Inventory"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "required": ["products"],
                                "properties": {
                                    "products": {
                                        "type": "array",
                                        "description": "Should be a JSON array of products, even if you only send a single product. All field names in the JSON blob should be lowercase.",
                                        "items": {
                                            "$ref": "#/components/schemas/ListingProduct"
                                        }
                                    },
                                    "price_on_property": {
                                        "type": "array",
                                        "description": "An array of the property_ids of the properties which price depends on (if any).",
                                        "items": {
                                            "type": "integer"
                                        }
                                    },
                                    "quantity_on_property": {
                                        "type": "array",
                                        "description": "An array of the property_ids of the properties which quantity depends on (if any).",
                                        "items": {
                                            "type": "integer"
                                        }
                                    },
                                    "sku_on_property": {
                                        "type": "array",
                                        "description": "An array of the property_id of the properties which sku depends on (if any).",
                                        "items": {
                                            "type": "integer"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A single ListingInventory record.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingInventory"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            }
        },
        "/v3/application/listings/{listing_id}/products/{product_id}": {
            "get": {
                "operationId": "getListingProduct",
                "description": "Open API V3 endpoint to retrieve a ListingProduct by ID.",
                "tags": ["ShopListing Product"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The listing to return a ListingProduct for.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The listing to return a ListingProduct for.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "product_id",
                        "in": "path",
                        "description": "The product to return a ListingProduct for.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The product to return a ListingProduct for.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single ListingInventoryProduct",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingInventoryProduct"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            }
        },
        "/v3/application/listings/{listing_id}/products/{product_id}/offerings/{product_offering_id}": {
            "get": {
                "operationId": "getListingOffering",
                "description": "Get an Offering for a Listing",
                "tags": ["ShopListing Offering"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "product_id",
                        "in": "path",
                        "description": "",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "product_offering_id",
                        "in": "path",
                        "description": "",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single ListingInventoryProductOffering",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingInventoryProductOffering"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/v3/application/listings/{listing_id}/properties": {
            "get": {
                "operationId": "getListingProperties",
                "description": "<div class=\"wt-alert wt-alert--inline wt-alert--status-02 wt-mb-xs-2\"><p class=\"wt-text-body-01\">This endpoint isn't functional but we welcome feedback on the proposed schema below.</p></div>\n\nGet a listing's properties",
                "tags": ["ShopListing"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A Listing's Properties",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingPropertyValues"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/v3/application/listings/{listing_id}/properties/{property_id}": {
            "put": {
                "operationId": "updateListingProperty",
                "description": "<div class=\"wt-alert wt-alert--inline wt-alert--status-02 wt-mb-xs-2\"><p class=\"wt-text-body-01\">This endpoint isn't functional but we welcome feedback on the proposed schema below.</p></div>\n\nUpdate or populate properties for a Listing. Either values or value_ids is required.",
                "tags": ["ShopListing"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "property_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy ListingProperty.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy ListingProperty.",
                            "minimum": 1
                        }
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "value_ids": {
                                        "type": "array",
                                        "description": "The unique IDs of multiple Etsy ListingProperty values.",
                                        "items": {
                                            "type": "integer",
                                            "minimum": 1
                                        }
                                    },
                                    "values": {
                                        "type": "array",
                                        "description": "The values for multiple Etsy ListingProperty values.",
                                        "items": {
                                            "type": "string"
                                        }
                                    },
                                    "scale_id": {
                                        "type": "integer",
                                        "description": "The numeric ID of a single Etsy.com measurement scale.",
                                        "minimum": 1
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A single ListingProperty.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingPropertyValue"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            }
        },
        "/v3/application/listings/shipping-profiles": {
            "post": {
                "operationId": "createListingShippingProfile",
                "description": "<div class=\"wt-alert wt-alert--inline wt-alert--status-02 wt-mb-xs-2\"><p class=\"wt-text-body-01\">This endpoint isn't functional but we welcome feedback on the proposed schema below.</p></div>\n\nCreates a new ShippingProfile.",
                "tags": ["ShopListing ShippingProfile"],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "type": "object",
                                "required": [
                                    "title",
                                    "origin_country_id",
                                    "primary_cost",
                                    "secondary_cost"
                                ],
                                "properties": {
                                    "title": {
                                        "type": "string",
                                        "description": "The name of this shipping profile."
                                    },
                                    "origin_country_id": {
                                        "type": "integer",
                                        "description": "The numeric ID of the country from which the listing ships.",
                                        "minimum": 1
                                    },
                                    "primary_cost": {
                                        "type": "number",
                                        "description": "The cost of shipping to this country/region alone.",
                                        "format": "float"
                                    },
                                    "secondary_cost": {
                                        "type": "number",
                                        "description": "The cost of shipping to this country/region with another item.",
                                        "format": "float"
                                    },
                                    "destination_country_id": {
                                        "type": "integer",
                                        "description": "The numeric ID of the country to which the listing ships.",
                                        "minimum": 1,
                                        "default": null
                                    },
                                    "destination_region_id": {
                                        "type": "integer",
                                        "description": "The numeric ID of the region to which the listing ships.",
                                        "minimum": 1,
                                        "default": null
                                    },
                                    "min_processing_days": {
                                        "type": "integer",
                                        "description": "The minimum number of days for processing the listing.",
                                        "minimum": 0,
                                        "default": null
                                    },
                                    "max_processing_days": {
                                        "type": "integer",
                                        "description": "The maximum number of days for processing the listing.",
                                        "minimum": 0,
                                        "default": null
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A single ShippingProfile",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingShippingProfile"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            }
        },
        "/v3/application/listings/shipping-profiles/{shipping_profile_id}": {
            "delete": {
                "operationId": "deleteListingShippingProfile",
                "description": "<div class=\"wt-alert wt-alert--inline wt-alert--status-02 wt-mb-xs-2\"><p class=\"wt-text-body-01\">This endpoint isn't functional but we welcome feedback on the proposed schema below.</p></div>\n\nOpen API V3 endpoint to delete a ShippingProfile by given id.",
                "tags": ["ShopListing ShippingProfile"],
                "parameters": [
                    {
                        "name": "shipping_profile_id",
                        "in": "path",
                        "description": "The numeric ID of the shipping profile associated with the listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The numeric ID of the shipping profile associated with the listing.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single ShippingProfile",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingShippingProfile"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            },
            "get": {
                "operationId": "getListingShippingProfile",
                "description": "Open API V3 endpoint to retrieve a ListingShippingProfile by id.",
                "tags": ["ShopListing ShippingProfile"],
                "parameters": [
                    {
                        "name": "shipping_profile_id",
                        "in": "path",
                        "description": "The numeric ID of the shipping profile associated with the listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The numeric ID of the shipping profile associated with the listing.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single ShippingProfile",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingShippingProfile"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_r"]
                    }
                ]
            },
            "put": {
                "operationId": "updateListingShippingProfile",
                "description": "<div class=\"wt-alert wt-alert--inline wt-alert--status-02 wt-mb-xs-2\"><p class=\"wt-text-body-01\">This endpoint isn't functional but we welcome feedback on the proposed schema below.</p></div>\n\nOpen API V3 endpoint to update a ShippingProfile.",
                "tags": ["ShopListing ShippingProfile"],
                "parameters": [
                    {
                        "name": "shipping_profile_id",
                        "in": "path",
                        "description": "The numeric ID of the shipping profile associated with the listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The numeric ID of the shipping profile associated with the listing.",
                            "minimum": 1
                        }
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "title": {
                                        "type": "string",
                                        "description": "The name of this shipping profile."
                                    },
                                    "origin_country_id": {
                                        "type": "integer",
                                        "description": "The numeric ID of the country from which the listing ships.",
                                        "minimum": 1
                                    },
                                    "min_processing_days": {
                                        "type": "integer",
                                        "description": "The minimum number of days for processing the listing.",
                                        "minimum": 0
                                    },
                                    "max_processing_days": {
                                        "type": "integer",
                                        "description": "The maximum number of days for processing the listing.",
                                        "minimum": 0
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A single ShippingProfile",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingShippingProfile"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            }
        },
        "/v3/application/listings/shipping-profiles/destinations": {
            "post": {
                "operationId": "createListingShippingProfileDestination",
                "description": "<div class=\"wt-alert wt-alert--inline wt-alert--status-02 wt-mb-xs-2\"><p class=\"wt-text-body-01\">This endpoint isn't functional but we welcome feedback on the proposed schema below.</p></div>\n\nCreates a new ListingShippingProfileDestination.",
                "tags": ["ShopListing ShippingProfile"],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "type": "object",
                                "required": [
                                    "shipping_profile_id",
                                    "primary_cost",
                                    "secondary_cost"
                                ],
                                "properties": {
                                    "shipping_profile_id": {
                                        "type": "integer",
                                        "description": "The numeric ID of the shipping profile associated with the listing.",
                                        "minimum": 1
                                    },
                                    "primary_cost": {
                                        "type": "number",
                                        "description": "The cost of shipping to this country/region alone.",
                                        "format": "float"
                                    },
                                    "secondary_cost": {
                                        "type": "number",
                                        "description": "The cost of shipping to this country/region with another item.",
                                        "format": "float"
                                    },
                                    "destination_country_id": {
                                        "type": "integer",
                                        "description": "The numeric ID of the country to which the listing ships.",
                                        "minimum": 1,
                                        "default": null
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A single ListingShippingProfileDestination",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingShippingProfileDestination"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            }
        },
        "/v3/application/listings/shipping-profiles/destinations/{shipping_profile_destination_id}": {
            "delete": {
                "operationId": "deleteListingShippingProfileDestination",
                "description": "<div class=\"wt-alert wt-alert--inline wt-alert--status-02 wt-mb-xs-2\"><p class=\"wt-text-body-01\">This endpoint isn't functional but we welcome feedback on the proposed schema below.</p></div>\n\nOpen API V3 endpoint to delete a ListingShippingProfileDestination by the given id.",
                "tags": ["ShopListing ShippingProfile"],
                "parameters": [
                    {
                        "name": "shipping_profile_destination_id",
                        "in": "path",
                        "description": "The numeric ID of the shipping profile destination associated with the shipping profile of a listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The numeric ID of the shipping profile destination associated with the shipping profile of a listing.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single ListingShippingProfileDestination",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingShippingProfileDestination"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            },
            "put": {
                "operationId": "updateListingShippingProfileDestination",
                "description": "<div class=\"wt-alert wt-alert--inline wt-alert--status-02 wt-mb-xs-2\"><p class=\"wt-text-body-01\">This endpoint isn't functional but we welcome feedback on the proposed schema below.</p></div>\n\nUpdates an existing ListingShippingProfileDestination.",
                "tags": ["ShopListing ShippingProfile"],
                "parameters": [
                    {
                        "name": "shipping_profile_destination_id",
                        "in": "path",
                        "description": "The numeric ID of the shipping profile destination associated with the shipping profile of a listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The numeric ID of the shipping profile destination associated with the shipping profile of a listing.",
                            "minimum": 1
                        }
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "primary_cost": {
                                        "type": "number",
                                        "description": "The cost of shipping to this country/region alone.",
                                        "format": "float"
                                    },
                                    "secondary_cost": {
                                        "type": "number",
                                        "description": "The cost of shipping to this country/region with another item.",
                                        "format": "float"
                                    },
                                    "destination_country_id": {
                                        "type": "integer",
                                        "description": "The numeric ID of the country to which the listing ships.",
                                        "minimum": 1,
                                        "default": null
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A single ListingShippingProfileDestination",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingShippingProfileDestination"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            }
        },
        "/v3/application/listings/shipping-profiles/{shipping_profile_id}/destinations": {
            "get": {
                "operationId": "getListingShippingProfileDestinationsByShippingProfile",
                "description": "<div class=\"wt-alert wt-alert--inline wt-alert--status-02 wt-mb-xs-2\"><p class=\"wt-text-body-01\">This endpoint isn't functional but we welcome feedback on the proposed schema below.</p></div>\n\nOpen API V3 endpoint to retrieve a set of ListingShippingProfileDestination objects associated to a ListingShippingProfile.",
                "tags": ["ShopListing ShippingProfile"],
                "parameters": [
                    {
                        "name": "shipping_profile_id",
                        "in": "path",
                        "description": "The numeric ID of the shipping profile associated with the listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The numeric ID of the shipping profile associated with the listing.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "A limit on the number of results to be returned.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "A limit on the number of results to be returned.",
                            "minimum": 1,
                            "maximum": 100,
                            "default": 25
                        }
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The number of items to skip before starting to collect the result set.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The number of items to skip before starting to collect the result set.",
                            "minimum": 0,
                            "default": 0
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of ListingShippingProfileDestination resources",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingShippingProfileEntries"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_r"]
                    }
                ]
            }
        },
        "/v3/application/shipping-profiles": {
            "get": {
                "operationId": "getListingShippingProfiles",
                "description": "Open API V3 endpoint to retrieve a set of ShippingProfile objects associated to a User.",
                "tags": ["ShopListing ShippingProfile"],
                "responses": {
                    "200": {
                        "description": "A list of ShippingProfiles",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingShippingProfiles"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_r"]
                    }
                ]
            }
        },
        "/v3/application/listings/shipping-profiles/{shipping_profile_id}/upgrades": {
            "post": {
                "operationId": "createListingShippingProfileUpgrade",
                "description": "<div class=\"wt-alert wt-alert--inline wt-alert--status-02 wt-mb-xs-2\"><p class=\"wt-text-body-01\">This endpoint isn't functional but we welcome feedback on the proposed schema below.</p></div>\n\nCreates a new ListingShippingProfileUpgrade.",
                "tags": ["ShopListing ShippingProfile"],
                "parameters": [
                    {
                        "name": "shipping_profile_id",
                        "in": "path",
                        "description": "The numeric ID of the shipping profile associated with the listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The numeric ID of the shipping profile associated with the listing.",
                            "minimum": 1
                        }
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "type": "object",
                                "required": [
                                    "type",
                                    "value",
                                    "price",
                                    "secondary_price"
                                ],
                                "properties": {
                                    "type": {
                                        "type": "string",
                                        "description": "The type of the shipping upgrade. Domestic (0) or international (1).",
                                        "enum": ["0", "1"]
                                    },
                                    "value": {
                                        "type": "string",
                                        "description": "Name of the shipping upgrade, e.g. USPS Priority."
                                    },
                                    "price": {
                                        "type": "number",
                                        "description": "Additional cost of adding the shipping upgrade.",
                                        "format": "float"
                                    },
                                    "secondary_price": {
                                        "type": "number",
                                        "description": "Additional cost of adding the shipping upgrade for each additional item.",
                                        "format": "float"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A single ListingShippingProfileUpgrade",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingShippingProfileUpgrade"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            },
            "get": {
                "operationId": "getListingShippingProfileUpgrades",
                "description": "<div class=\"wt-alert wt-alert--inline wt-alert--status-02 wt-mb-xs-2\"><p class=\"wt-text-body-01\">This endpoint isn't functional but we welcome feedback on the proposed schema below.</p></div>\n\nRetrieve a set of ListingShippingProfileUpgrades associated to a ShippingProfile.",
                "tags": ["ShopListing ShippingProfile"],
                "parameters": [
                    {
                        "name": "shipping_profile_id",
                        "in": "path",
                        "description": "The numeric ID of the shipping profile associated with the listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The numeric ID of the shipping profile associated with the listing.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A set of ListingShippingProfileUpgrades",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingShippingProfileUpgrades"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_r"]
                    }
                ]
            }
        },
        "/v3/application/listings/{listing_id}/transactions": {
            "get": {
                "operationId": "getShopReceiptTransactionsByListing",
                "description": "<div class=\"wt-alert wt-alert--inline wt-alert--status-02 wt-mb-xs-2\"><p class=\"wt-text-body-01\">This endpoint isn't functional but we welcome feedback on the proposed schema below.</p></div>\n\nOpen API V3 to retrieve a set of ShopTransaction resources associated to a Listing.",
                "tags": ["Shop Receipt Transactions"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "A limit on the number of results to be returned.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "A limit on the number of results to be returned.",
                            "minimum": 1,
                            "maximum": 100,
                            "default": 25
                        }
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The number of items to skip before starting to collect the result set.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The number of items to skip before starting to collect the result set.",
                            "minimum": 0,
                            "default": 0
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of Transactions",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopReceiptTransactions"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["transactions_r"]
                    }
                ]
            }
        },
        "/v3/application/listings/{listing_id}/translations/{language}": {
            "post": {
                "operationId": "createListingTranslation",
                "description": "<div class=\"wt-alert wt-alert--inline wt-alert--status-02 wt-mb-xs-2\"><p class=\"wt-text-body-01\">This endpoint isn't functional but we welcome feedback on the proposed schema below.</p></div>\n\nCreates a ListingTranslation by listing_id and language",
                "tags": ["ShopListing Translation"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "language",
                        "in": "path",
                        "description": "The IETF language tag for the language of this translation. Ex: de, en, es, fr, it, ja, nl, pl, pt, ru.",
                        "required": true,
                        "schema": {
                            "type": "string",
                            "description": "The IETF language tag for the language of this translation. Ex: de, en, es, fr, it, ja, nl, pl, pt, ru."
                        }
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "title": {
                                        "type": "string",
                                        "description": "The title of the Listing of this Translation."
                                    },
                                    "description": {
                                        "type": "string",
                                        "description": "The description of the Listing of this Translation."
                                    },
                                    "tags": {
                                        "type": "array",
                                        "description": "The tags of the Listing of this Translation.",
                                        "items": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A single ListingTranslation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingTranslation"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            },
            "get": {
                "operationId": "getListingTranslation",
                "description": "<div class=\"wt-alert wt-alert--inline wt-alert--status-02 wt-mb-xs-2\"><p class=\"wt-text-body-01\">This endpoint isn't functional but we welcome feedback on the proposed schema below.</p></div>\n\nGet a Translation for a Listing in the given language",
                "tags": ["ShopListing Translation"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "language",
                        "in": "path",
                        "description": "The IETF language tag for the language of this translation. Ex: de, en, es, fr, it, ja, nl, pl, pt, ru.",
                        "required": true,
                        "schema": {
                            "type": "string",
                            "description": "The IETF language tag for the language of this translation. Ex: de, en, es, fr, it, ja, nl, pl, pt, ru."
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single ListingTranslation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingTranslation"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            },
            "put": {
                "operationId": "updateListingTranslation",
                "description": "<div class=\"wt-alert wt-alert--inline wt-alert--status-02 wt-mb-xs-2\"><p class=\"wt-text-body-01\">This endpoint isn't functional but we welcome feedback on the proposed schema below.</p></div>\n\nUpdates a ListingTranslation by listing_id and language",
                "tags": ["ShopListing Translation"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "language",
                        "in": "path",
                        "description": "The IETF language tag for the language of this translation. Ex: de, en, es, fr, it, ja, nl, pl, pt, ru.",
                        "required": true,
                        "schema": {
                            "type": "string",
                            "description": "The IETF language tag for the language of this translation. Ex: de, en, es, fr, it, ja, nl, pl, pt, ru."
                        }
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "title": {
                                        "type": "string",
                                        "description": "The title of the Listing of this Translation."
                                    },
                                    "description": {
                                        "type": "string",
                                        "description": "The description of the Listing of this Translation."
                                    },
                                    "tags": {
                                        "type": "array",
                                        "description": "The tags of the Listing of this Translation.",
                                        "items": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A single ListingTranslation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingTranslation"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            }
        },
        "/v3/application/listings/{listing_id}/variation-images": {
            "get": {
                "operationId": "getListingVariationImages",
                "description": "Gets all variation images on a listing.",
                "tags": ["ShopListing VariationImage"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of ListingVariationImages",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingVariationImages"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            },
            "post": {
                "operationId": "updateVariationImages",
                "description": "Creates variation images on a listing.\n\nvariation_images is an array with inputs for the property_id, value_id, and image_id fields. image_ids are associated with a ListingImage on the Listing associated with the provided listing_id. property_id and value_id pairs are associated with a ListingProduct on the Listing associated with the provided listing_id. variation_images does not contain any duplicates. variation_images does not contain more than one property_id as variation images can only be associated on one property. The update overwrites all existing variation images on a listing, so if your request is successful, the variation images on the listing will be exactly those you specify. ",
                "tags": ["ShopListing VariationImage"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "required": ["variation_images"],
                                "properties": {
                                    "variation_images": {
                                        "type": "array",
                                        "description": "A list of variation image data.",
                                        "items": {
                                            "$ref": "#/components/schemas/ListingVariationImage"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A single ListingVariationImage",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingVariationImages"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "409": {
                        "description": "There was a request conflict with current state of the target resource. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            }
        },
        "/v3/application/payment-account/ledger-entries": {
            "get": {
                "operationId": "getShopPaymentAccountLedgerEntries",
                "description": "Get a Shop Payment Account Ledger's Entries",
                "tags": ["Ledger Entry"],
                "parameters": [
                    {
                        "name": "min_created",
                        "in": "query",
                        "description": "min_created",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "min_created",
                            "minimum": 946684800
                        }
                    },
                    {
                        "name": "max_created",
                        "in": "query",
                        "description": "max_created",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "max_created",
                            "minimum": 946684800
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "limit",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "limit",
                            "minimum": 1,
                            "maximum": 100,
                            "default": 25
                        }
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "offset",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "offset",
                            "minimum": 0,
                            "default": 0
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of PaymentAccountLedgerEntries",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/PaymentAccountLedgerEntries"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["transactions_r"]
                    }
                ]
            }
        },
        "/v3/application/payment-account/ledger-entries/payments": {
            "get": {
                "operationId": "getPaymentAccountLedgerEntryPayments",
                "description": "Get a Payment from a PaymentAccount Ledger Entry ID, if applicable",
                "tags": ["Payment"],
                "parameters": [
                    {
                        "name": "ledger_entry_ids",
                        "in": "query",
                        "description": "",
                        "required": true,
                        "schema": {
                            "type": "array",
                            "items": {
                                "type": "integer",
                                "minimum": 1
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of Payments",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Payments"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["transactions_r"]
                    }
                ]
            }
        },
        "/v3/application/receipts/{receipt_id}/payments": {
            "get": {
                "operationId": "getShopPaymentByReceiptId",
                "description": "Open API V3 to get a Payment by Shop Receipt ID",
                "tags": ["Payment"],
                "parameters": [
                    {
                        "name": "receipt_id",
                        "in": "path",
                        "description": "",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single Payment",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Payments"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["transactions_r"]
                    }
                ]
            }
        },
        "/v3/application/payments": {
            "get": {
                "operationId": "getPayments",
                "description": "<div class=\"wt-alert wt-alert--inline wt-alert--status-02 wt-mb-xs-2\"><p class=\"wt-text-body-01\">This endpoint isn't functional but we welcome feedback on the proposed schema below.</p></div>\n\nGet Payments by their IDs",
                "tags": ["Payment"],
                "parameters": [
                    {
                        "name": "payment_ids",
                        "in": "query",
                        "description": "A comma-separated array of Payment IDs",
                        "required": true,
                        "schema": {
                            "type": "array",
                            "description": "A comma-separated array of Payment IDs",
                            "items": {
                                "type": "integer",
                                "minimum": 1
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of Payments",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Payments"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["transactions_r"]
                    }
                ]
            }
        },
        "/v3/application/receipts/{receipt_id}": {
            "get": {
                "operationId": "getShopReceipt",
                "description": "Open API V3 endpoint to retreive a Receipt by id",
                "tags": ["Shop Receipt"],
                "parameters": [
                    {
                        "name": "receipt_id",
                        "in": "path",
                        "description": "",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single ShopReceipt",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopReceipt"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["transactions_r"]
                    }
                ]
            }
        },
        "/v3/application/receipts": {
            "get": {
                "operationId": "getShopReceipts",
                "description": "Open API V3 endpoint to find ShopReceipt for a given Shop",
                "tags": ["Shop Receipt"],
                "parameters": [
                    {
                        "name": "min_created",
                        "in": "query",
                        "description": "Minimum unix timestamp for when this resource was created.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "Minimum unix timestamp for when this resource was created.",
                            "minimum": 946684800,
                            "default": null
                        }
                    },
                    {
                        "name": "max_created",
                        "in": "query",
                        "description": "Maximum unix timestamp for when this resource was created.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "Maximum unix timestamp for when this resource was created.",
                            "minimum": 946684800,
                            "default": null
                        }
                    },
                    {
                        "name": "min_last_modified",
                        "in": "query",
                        "description": "Minimum unix timestamp for when this resource was last modified.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "Minimum unix timestamp for when this resource was last modified.",
                            "minimum": 946684800,
                            "default": null
                        }
                    },
                    {
                        "name": "max_last_modified",
                        "in": "query",
                        "description": "Maximum unix timestamp for when this resource was last modified.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "Maximum unix timestamp for when this resource was last modified.",
                            "minimum": 946684800,
                            "default": null
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "A limit on the number of results to be returned.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "A limit on the number of results to be returned.",
                            "minimum": 1,
                            "maximum": 100,
                            "default": 25
                        }
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The number of items to skip before starting to collect the result set.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The number of items to skip before starting to collect the result set.",
                            "minimum": 0,
                            "default": 0
                        }
                    },
                    {
                        "name": "was_paid",
                        "in": "query",
                        "description": "If true, the receipt has been paid.",
                        "required": false,
                        "schema": {
                            "type": "boolean",
                            "description": "If true, the receipt has been paid.",
                            "default": null
                        }
                    },
                    {
                        "name": "was_shipped",
                        "in": "query",
                        "description": "If true, the receipt has been shipped.",
                        "required": false,
                        "schema": {
                            "type": "boolean",
                            "description": "If true, the receipt has been shipped.",
                            "default": null
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of ShopReceipts",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopReceipts"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["transactions_r"]
                    }
                ]
            }
        },
        "/v3/application/receipts/{receipt_id}/tracking": {
            "post": {
                "operationId": "createReceiptShipment",
                "description": "Submit tracking information for a ShopReceipt. If send_bcc is true, the shipping notification will be sent to the seller as well. Each time you successfully submit tracking info, a notification email will be sent to the buyer User. If tracking_code and carrier_name aren't sent the receipt is marked as shipped only. Creates a ShopReceiptShipment for the given receipt_id. ",
                "tags": ["Shop Receipt"],
                "parameters": [
                    {
                        "name": "receipt_id",
                        "in": "path",
                        "description": "The receipt to submit tracking for.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The receipt to submit tracking for.",
                            "minimum": 1
                        }
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "tracking_code": {
                                        "type": "string",
                                        "description": "The tracking code for this receipt."
                                    },
                                    "carrier_name": {
                                        "type": "string",
                                        "description": "The carrier name for this receipt."
                                    },
                                    "send_bcc": {
                                        "type": "boolean",
                                        "description": "If true, the shipping notification will be sent to the seller as well"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A single ShopReceipt",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopReceipt"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "409": {
                        "description": "There was a request conflict with current state of the target resource. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["transactions_w"]
                    }
                ]
            }
        },
        "/v3/application/receipts/{receipt_id}/transactions": {
            "get": {
                "operationId": "getShopReceiptTransactionsByReceipt",
                "description": "Retrieves a set of ShopTransaction objects associated to a ShopReceipt.",
                "tags": ["Shop Receipt Transactions"],
                "parameters": [
                    {
                        "name": "receipt_id",
                        "in": "path",
                        "description": "The receipt to return transactions for.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The receipt to return transactions for.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of Transactions",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopReceiptTransactions"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["transactions_r"]
                    }
                ]
            }
        },
        "/v3/application/shops/feedback": {
            "get": {
                "operationId": "getShopUserFeedback",
                "description": "<div class=\"wt-alert wt-alert--inline wt-alert--status-02 wt-mb-xs-2\"><p class=\"wt-text-body-01\">This endpoint isn't functional but we welcome feedback on the proposed schema below.</p></div>\n\nOpen API V3 endpoint to retrieve UserFeedback left for a Shop.",
                "tags": ["UserFeedback"],
                "parameters": [
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "A limit on the number of results to be returned.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "A limit on the number of results to be returned.",
                            "minimum": 1,
                            "maximum": 100,
                            "default": 25
                        }
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The number of items to skip before starting to collect the result set.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The number of items to skip before starting to collect the result set.",
                            "minimum": 0,
                            "default": 0
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of UserFeedback records",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/UserFeedbacks"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["feedback_r"]
                    }
                ]
            }
        },
        "/v3/application/shops/{shop_id}": {
            "get": {
                "operationId": "getShop",
                "description": "Open API V3 to retrieve a shop by ID.",
                "tags": ["Shop"],
                "parameters": [
                    {
                        "name": "shop_id",
                        "in": "path",
                        "description": "",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single Shop",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Shop"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            },
            "put": {
                "operationId": "updateShop",
                "description": "<div class=\"wt-alert wt-alert--inline wt-alert--status-02 wt-mb-xs-2\"><p class=\"wt-text-body-01\">This endpoint isn't functional but we welcome feedback on the proposed schema below.</p></div>\n\nOpen API V3 to update a shop by ID.",
                "tags": ["Shop"],
                "parameters": [
                    {
                        "name": "shop_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Shop.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Shop.",
                            "minimum": 1
                        }
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "title": {
                                        "type": "string",
                                        "description": "A brief heading for the shop's main page."
                                    },
                                    "announcement": {
                                        "type": "string",
                                        "description": "An announcement to buyers that displays on the shop's homepage."
                                    },
                                    "sale_message": {
                                        "type": "string",
                                        "description": "A message that is sent to users who buy from this shop."
                                    },
                                    "policy_welcome": {
                                        "type": "string",
                                        "description": "The introductory text from the top of the seller's policies page."
                                    },
                                    "policy_payment": {
                                        "type": "string",
                                        "description": "The seller's policy on payment."
                                    },
                                    "policy_shipping": {
                                        "type": "string",
                                        "description": "The seller's policy on shipping."
                                    },
                                    "policy_refunds": {
                                        "type": "string",
                                        "description": "The seller's policy on refunds."
                                    },
                                    "policy_additional": {
                                        "type": "string",
                                        "description": "Any additional policy information the seller provides."
                                    },
                                    "policy_privacy": {
                                        "type": "string",
                                        "description": "Privacy policy information the seller provides."
                                    },
                                    "policy_seller_info": {
                                        "type": "string",
                                        "description": "The shop's seller information."
                                    },
                                    "digital_sale_message": {
                                        "type": "string",
                                        "description": "A message that is sent to users who buy a digital item from this shop."
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A single Shop",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Shop"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["shops_r", "shops_w"]
                    }
                ]
            }
        },
        "/v3/application/users/{user_id}/shops": {
            "get": {
                "operationId": "getShopByOwnerUserId",
                "description": "Open API V3 to retrieve the Shop associated to a User.",
                "tags": ["Shop"],
                "parameters": [
                    {
                        "name": "user_id",
                        "in": "path",
                        "description": "The user to return a shop for.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The user to return a shop for.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single Shop",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Shop"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/v3/application/shops": {
            "get": {
                "operationId": "getShops",
                "description": "<div class=\"wt-alert wt-alert--inline wt-alert--status-02 wt-mb-xs-2\"><p class=\"wt-text-body-01\">This endpoint isn't functional but we welcome feedback on the proposed schema below.</p></div>\n\nOpen API V3 endpoint to find Shop resources. If there is a shop_name parameter, finds Shop resources with shop_name starting with this value.",
                "tags": ["Shop"],
                "parameters": [
                    {
                        "name": "shop_name",
                        "in": "query",
                        "description": "The shop's name.",
                        "required": false,
                        "schema": {
                            "type": "string",
                            "description": "The shop's name."
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "A limit on the number of results to be returned.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "A limit on the number of results to be returned.",
                            "minimum": 1,
                            "maximum": 100,
                            "default": 25
                        }
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The number of items to skip before starting to collect the result set.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The number of items to skip before starting to collect the result set.",
                            "minimum": 0,
                            "default": 0
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of Shops",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Shops"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/v3/application/shops/sections": {
            "post": {
                "operationId": "createShopSection",
                "description": "<div class=\"wt-alert wt-alert--inline wt-alert--status-02 wt-mb-xs-2\"><p class=\"wt-text-body-01\">This endpoint isn't functional but we welcome feedback on the proposed schema below.</p></div>\n\nOpen API V3 endpoint to create a new ShopSection.",
                "tags": ["Shop Section"],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "title": {
                                        "type": "string",
                                        "description": "The title of the section."
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A ShopSection resource",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopSection"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["shops_w"]
                    }
                ]
            }
        },
        "/v3/application/shops/{shop_id}/sections/{shop_section_id}": {
            "get": {
                "operationId": "getShopSection",
                "description": "Open API V3 to retrieve a ShopSection resource by id and shop_id.",
                "tags": ["Shop Section"],
                "parameters": [
                    {
                        "name": "shop_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Shop.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Shop.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "shop_section_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Shop Section.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Shop Section.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A ShopSection resource",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopSection"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/v3/application/shops/{shop_id}/sections": {
            "get": {
                "operationId": "getShopSections",
                "description": "Open API V3 to retrieve a set of ShopSection objects associated to a Shop.",
                "tags": ["Shop Section"],
                "parameters": [
                    {
                        "name": "shop_id",
                        "in": "path",
                        "description": "",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of ShopSections",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopSections"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/v3/application/shops/{shop_id}/sections/listings": {
            "get": {
                "operationId": "getListingsByShopSectionId",
                "description": "<div class=\"wt-alert wt-alert--inline wt-alert--status-02 wt-mb-xs-2\"><p class=\"wt-text-body-01\">This endpoint isn't functional but we welcome feedback on the proposed schema below.</p></div>\n\nFetch all Listings within a Shop's ShopSection.",
                "tags": ["ShopListing"],
                "parameters": [
                    {
                        "name": "shop_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Shop.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Shop.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "shop_section_ids",
                        "in": "query",
                        "description": "A list of unique Etsy Shop Section IDs.",
                        "required": true,
                        "schema": {
                            "type": "array",
                            "description": "A list of unique Etsy Shop Section IDs.",
                            "items": {
                                "type": "integer",
                                "minimum": 1
                            }
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "A limit on the number of results to be returned.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "A limit on the number of results to be returned.",
                            "minimum": 1,
                            "maximum": 100,
                            "default": 25
                        }
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The number of items to skip before starting to collect the result set.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The number of items to skip before starting to collect the result set.",
                            "minimum": 0,
                            "default": 0
                        }
                    },
                    {
                        "name": "sort_on",
                        "in": "query",
                        "description": "The value to sort a search result of listings on. NOTE: sort_on only works when combined with one of the search options (keywords, region, etc.). ",
                        "required": false,
                        "schema": {
                            "type": "string",
                            "description": "The value to sort a search result of listings on. NOTE: sort_on only works when combined with one of the search options (keywords, region, etc.). ",
                            "default": "created"
                        }
                    },
                    {
                        "name": "sort_order",
                        "in": "query",
                        "description": "The ascending(up) or descending(down) order to sort listings by. NOTE: sort_order only works when combined with one of the search options (keywords, region, etc.).",
                        "required": false,
                        "schema": {
                            "type": "string",
                            "description": "The ascending(up) or descending(down) order to sort listings by. NOTE: sort_order only works when combined with one of the search options (keywords, region, etc.).",
                            "enum": [
                                "asc",
                                "ascending",
                                "desc",
                                "descending",
                                "up",
                                "down"
                            ],
                            "default": "DESC"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of Listing resources.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopListings"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/v3/application/transactions/{transaction_id}": {
            "get": {
                "operationId": "getShopReceiptTransaction",
                "description": "Retrieves a ShopTransaction by id.",
                "tags": ["Shop Receipt Transactions"],
                "parameters": [
                    {
                        "name": "transaction_id",
                        "in": "path",
                        "description": "The transaction to return.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The transaction to return.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single Transaction",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopReceiptTransaction"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["transactions_r"]
                    }
                ]
            }
        },
        "/v3/application/transactions": {
            "get": {
                "operationId": "getShopReceiptTransactionsByShop",
                "description": "<div class=\"wt-alert wt-alert--inline wt-alert--status-02 wt-mb-xs-2\"><p class=\"wt-text-body-01\">This endpoint isn't functional but we welcome feedback on the proposed schema below.</p></div>\n\nOpen API V3 to retrieve a set of ShopTransaction resources associated to a Shop.",
                "tags": ["Shop Receipt Transactions"],
                "parameters": [
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "A limit on the number of results to be returned.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "A limit on the number of results to be returned.",
                            "minimum": 1,
                            "maximum": 100,
                            "default": 25
                        }
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The number of items to skip before starting to collect the result set.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The number of items to skip before starting to collect the result set.",
                            "minimum": 0,
                            "default": 0
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of Transactions",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopReceiptTransactions"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["transactions_r"]
                    }
                ]
            }
        },
        "/v3/application/user/addresses": {
            "get": {
                "operationId": "getUserAddresses",
                "description": "<div class=\"wt-alert wt-alert--inline wt-alert--status-02 wt-mb-xs-2\"><p class=\"wt-text-body-01\">This endpoint isn't functional but we welcome feedback on the proposed schema below.</p></div>\n\nOpen API V3 endpoint to retrieve UserAddresses for a User.",
                "tags": ["UserAddress"],
                "parameters": [
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "A limit on the number of results to be returned.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "A limit on the number of results to be returned.",
                            "minimum": 1,
                            "maximum": 100,
                            "default": 25
                        }
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The number of items to skip before starting to collect the result set.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The number of items to skip before starting to collect the result set.",
                            "minimum": 0,
                            "default": 0
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of UserAddress records",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/UserAddresses"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["address_r"]
                    }
                ]
            }
        },
        "/v3/application/users/feedback": {
            "get": {
                "operationId": "getMemberUserFeedback",
                "description": "<div class=\"wt-alert wt-alert--inline wt-alert--status-02 wt-mb-xs-2\"><p class=\"wt-text-body-01\">This endpoint isn't functional but we welcome feedback on the proposed schema below.</p></div>\n\nOpen API V3 endpoint to retrieve UserFeedback left by a User.",
                "tags": ["UserFeedback"],
                "parameters": [
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "A limit on the number of results to be returned.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "A limit on the number of results to be returned.",
                            "minimum": 1,
                            "maximum": 100,
                            "default": 25
                        }
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The number of items to skip before starting to collect the result set.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The number of items to skip before starting to collect the result set.",
                            "minimum": 0,
                            "default": 0
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of UserFeedback records",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/UserFeedbacks"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["feedback_r"]
                    }
                ]
            }
        },
        "/v3/application/users/{user_id}": {
            "get": {
                "operationId": "getUser",
                "description": "Open API V3 to retrieve a user by ID.",
                "tags": ["User"],
                "parameters": [
                    {
                        "name": "user_id",
                        "in": "path",
                        "description": "",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single User",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/User"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "components": {
        "securitySchemes": {
            "api_key": {
                "type": "apiKey",
                "name": "x-api-key",
                "in": "header",
                "description": "Every request to a v3 API endpoint must include this data, with your application's API key as the value."
            },
            "oauth2": {
                "type": "oauth2",
                "description": "The v3 API supports authenticating via OAuth 2.0. More information about Etsy's specific implementation of OAuth2 can be found [here](/developers/documentation/getting_started/oauth2).",
                "flows": {
                    "authorizationCode": {
                        "authorizationUrl": "https://www.etsy.com/oauth/connect",
                        "tokenUrl": "https://openapi.etsy.com/v3/public/oauth/token",
                        "scopes": {
                            "address_r": "see billing and shipping addresses",
                            "address_w": "update billing and shipping addresses",
                            "billing_r": "see all billing statement data",
                            "cart_r": "read shopping carts",
                            "cart_w": "add/remove from shopping carts",
                            "email_r": "Read a member's email address",
                            "favorites_r": "see private favorites",
                            "favorites_w": "add/remove favorites",
                            "feedback_r": "see purchase info in feedback",
                            "listings_d": "delete listings",
                            "listings_r": "see all listings (including expired etc)",
                            "listings_w": "create/edit listings",
                            "profile_r": "see all profile data",
                            "profile_w": "update user profile, avatar, etc",
                            "recommend_r": "see recommended listings",
                            "recommend_w": "accept/reject recommended listings",
                            "shops_r": "see private shop info",
                            "shops_w": "update shop",
                            "transactions_r": "see all checkout/payment data",
                            "transactions_w": "update receipts"
                        }
                    }
                }
            }
        },
        "schemas": {
            "Country": {
                "type": "object",
                "required": [
                    "country_id",
                    "iso_country_code",
                    "world_bank_country_code",
                    "name",
                    "slug",
                    "lat",
                    "lon"
                ],
                "properties": {
                    "country_id": {
                        "type": "integer",
                        "description": "The country's numeric ID.",
                        "minimum": 1
                    },
                    "iso_country_code": {
                        "type": "string",
                        "description": "The two-letter country code according to ISO 3166-1-alpha-2.",
                        "nullable": true
                    },
                    "world_bank_country_code": {
                        "type": "string",
                        "description": "The three-letter country code according to the World Bank.",
                        "nullable": true
                    },
                    "name": {
                        "type": "string",
                        "description": "The country's plain-English name.",
                        "nullable": true
                    },
                    "slug": {
                        "type": "string",
                        "description": "The country's plain-English name slugified; suitable for interpolation into a url.",
                        "nullable": true
                    },
                    "lat": {
                        "type": "number",
                        "description": "The country's latitude.",
                        "format": "float",
                        "nullable": true,
                        "minimum": -90,
                        "maximum": 90
                    },
                    "lon": {
                        "type": "number",
                        "description": "The country's longitude.",
                        "format": "float",
                        "nullable": true,
                        "minimum": -180,
                        "maximum": 180
                    }
                }
            },
            "ErrorSchema": {
                "type": "object",
                "required": ["error"],
                "properties": {
                    "error": {
                        "type": "string"
                    }
                }
            },
            "Countries": {
                "type": "object",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "description": "The number of Country resources found.",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "description": "The Country resources found.",
                        "items": {
                            "$ref": "#/components/schemas/Country"
                        }
                    }
                }
            },
            "PublicUserFeedbacks": {
                "type": "object",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "description": "The number of UserFeedback records being returned.",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "description": "An array of UserFeedback resources.",
                        "items": {
                            "$ref": "#/components/schemas/PublicUserFeedback"
                        }
                    }
                }
            },
            "PublicUserFeedback": {
                "type": "object",
                "required": ["feedback_id", "create_timestamp", "message", "value"],
                "properties": {
                    "feedback_id": {
                        "type": "integer",
                        "description": "The numeric ID for this feedback record.",
                        "minimum": 1
                    },
                    "create_timestamp": {
                        "type": "integer",
                        "description": "The date and time the transaction was created, in epoch seconds.",
                        "minimum": 946684800
                    },
                    "message": {
                        "type": "string",
                        "description": "A message left by the author, explaining the feedback."
                    },
                    "value": {
                        "type": "integer",
                        "description": "The feedback's value; 1 is positive, -1 is negative, and 0 is neutral."
                    }
                }
            },
            "ShopListing": {
                "type": "object",
                "required": [
                    "listing_id",
                    "user_id",
                    "shop_id",
                    "title",
                    "description",
                    "state",
                    "creation_timestamp",
                    "ending_timestamp",
                    "original_creation_timestamp",
                    "last_modified_timestamp",
                    "state_timestamp",
                    "quantity",
                    "shop_section_id",
                    "featured_rank",
                    "url",
                    "views",
                    "num_favorers",
                    "non_taxable",
                    "is_customizable",
                    "listing_type",
                    "tags",
                    "materials",
                    "shipping_template_id",
                    "processing_min",
                    "processing_max",
                    "who_made",
                    "when_made",
                    "item_weight",
                    "item_weight_unit",
                    "item_length",
                    "item_width",
                    "item_height",
                    "item_dimensions_unit",
                    "is_private",
                    "recipient",
                    "occasion",
                    "style",
                    "file_data",
                    "has_variations",
                    "should_auto_renew",
                    "language",
                    "price"
                ],
                "properties": {
                    "listing_id": {
                        "type": "integer",
                        "description": "The listing's numeric ID.",
                        "minimum": 1
                    },
                    "user_id": {
                        "type": "integer",
                        "description": "The numeric ID of the user who posted the item.",
                        "minimum": 1
                    },
                    "shop_id": {
                        "type": "integer",
                        "description": "The shop ID associated with the listing",
                        "minimum": 1
                    },
                    "title": {
                        "type": "string",
                        "description": "The listing's title. This string is valid if it does not match the following pattern: /[^\\p{L}\\p{Nd}\\p{P}\\p{Sm}\\p{Zs}™©®]/u. The characters %, :, & and + can only be used once each."
                    },
                    "description": {
                        "type": "string",
                        "description": "A description of the item."
                    },
                    "state": {
                        "type": "string",
                        "description": "The listing's state.",
                        "enum": [
                            "active",
                            "inactive",
                            "removed",
                            "draft",
                            "expired",
                            "sold_out"
                        ]
                    },
                    "creation_timestamp": {
                        "type": "integer",
                        "description": "Creation time, in epoch seconds.",
                        "minimum": 946684800
                    },
                    "ending_timestamp": {
                        "type": "integer",
                        "description": "The listing's expiration date and time, in epoch seconds.",
                        "minimum": 946684800
                    },
                    "original_creation_timestamp": {
                        "type": "integer",
                        "description": "The date and time the listing was originally posted, in epoch seconds.",
                        "minimum": 946684800
                    },
                    "last_modified_timestamp": {
                        "type": "integer",
                        "description": "The date and time the listing was updated, in epoch seconds.",
                        "minimum": 946684800
                    },
                    "state_timestamp": {
                        "type": "integer",
                        "description": "The time at which the listing last changed state.",
                        "minimum": 946684800
                    },
                    "quantity": {
                        "type": "integer",
                        "description": "The quantity of this item available for sale.",
                        "minimum": 0
                    },
                    "shop_section_id": {
                        "type": "integer",
                        "description": "The numeric ID of the shop section for this listing, can be null",
                        "nullable": true,
                        "minimum": 1
                    },
                    "featured_rank": {
                        "type": "integer",
                        "description": "Position in the Featured Listings portion of the shop."
                    },
                    "url": {
                        "type": "string",
                        "description": "The full URL to the listing's page on Etsy."
                    },
                    "views": {
                        "type": "integer",
                        "description": "The number of times the listing has been viewed on Etsy.com (does not include API views).",
                        "minimum": 0
                    },
                    "num_favorers": {
                        "type": "integer",
                        "description": "The number of members who've marked this Listing as a favorite.",
                        "minimum": 0
                    },
                    "non_taxable": {
                        "type": "boolean",
                        "description": "If this flag is true, any applicable shop tax rates will not be applied to this listing on checkout."
                    },
                    "is_customizable": {
                        "type": "boolean",
                        "description": "If this flag is true, a buyer may contact the seller for a customized order. Can only be set when the shop accepts custom orders and defaults to true in that case."
                    },
                    "listing_type": {
                        "type": "boolean",
                        "description": "True if this listing is for a digital download."
                    },
                    "tags": {
                        "type": "array",
                        "description": "A list of tags for the item. A tag is valid if it does not match the pattern: /[^\\p{L}\\p{Nd}\\p{Zs}\\-'™©®]/u",
                        "items": {
                            "type": "string"
                        }
                    },
                    "materials": {
                        "type": "array",
                        "description": "A list of materials used in the item. A material is valid if it does not match the pattern: /[^\\p{L}\\p{Nd}\\p{Zs}]/u",
                        "items": {
                            "type": "string"
                        }
                    },
                    "shipping_template_id": {
                        "type": "integer",
                        "description": "The numeric ID of the shipping template associated with the listing.",
                        "nullable": true,
                        "minimum": 1
                    },
                    "processing_min": {
                        "type": "integer",
                        "description": "The minimum number of days for processing for this listing.",
                        "nullable": true,
                        "minimum": 0
                    },
                    "processing_max": {
                        "type": "integer",
                        "description": "The maximum number of days for processing for this listing.",
                        "nullable": true,
                        "minimum": 0
                    },
                    "who_made": {
                        "type": "string",
                        "description": "Who made the item being listed.",
                        "nullable": true,
                        "enum": ["i_did", "someone_else", "collective"]
                    },
                    "when_made": {
                        "type": "string",
                        "description": "When was the item made.",
                        "nullable": true,
                        "enum": [
                            "made_to_order",
                            "2020_2020",
                            "2010_2019",
                            "2001_2009",
                            "before_2001",
                            "2000_2000",
                            "1990s",
                            "1980s",
                            "1970s",
                            "1960s",
                            "1950s",
                            "1940s",
                            "1930s",
                            "1920s",
                            "1910s",
                            "1900s",
                            "1800s",
                            "1700s",
                            "before_1700"
                        ]
                    },
                    "item_weight": {
                        "type": "number",
                        "description": "How much the item weighs.",
                        "format": "float",
                        "nullable": true
                    },
                    "item_weight_unit": {
                        "type": "string",
                        "description": "The units used to represent the dimensions of this item.",
                        "nullable": true,
                        "enum": ["oz", "lb", "g", "kg"]
                    },
                    "item_length": {
                        "type": "number",
                        "description": "How long the item is.",
                        "format": "float",
                        "nullable": true
                    },
                    "item_width": {
                        "type": "number",
                        "description": "How wide the item is.",
                        "format": "float",
                        "nullable": true
                    },
                    "item_height": {
                        "type": "number",
                        "description": "How tall the item is.",
                        "format": "float",
                        "nullable": true
                    },
                    "item_dimensions_unit": {
                        "type": "string",
                        "description": "The units used to represent the dimensions of this item.",
                        "nullable": true,
                        "enum": ["in", "ft", "mm", "cm", "m", "yd", "inches"]
                    },
                    "is_private": {
                        "type": "boolean",
                        "description": "Is this listing a private listing that is intended for a specific buyer and hidden from shop view. *Note*: This field is experimental and may change at any time."
                    },
                    "recipient": {
                        "type": "string",
                        "description": "Who is this listing for.",
                        "nullable": true,
                        "enum": [
                            "men",
                            "women",
                            "unisex_adults",
                            "teen_boys",
                            "teen_girls",
                            "teens",
                            "boys",
                            "girls",
                            "children",
                            "baby_boys",
                            "baby_girls",
                            "babies",
                            "birds",
                            "cats",
                            "dogs",
                            "pets",
                            "not_specified"
                        ]
                    },
                    "occasion": {
                        "type": "string",
                        "description": "What is the occasion for this listing.",
                        "nullable": true,
                        "enum": [
                            "anniversary",
                            "baptism",
                            "bar_or_bat_mitzvah",
                            "birthday",
                            "canada_day",
                            "chinese_new_year",
                            "cinco_de_mayo",
                            "confirmation",
                            "christmas",
                            "day_of_the_dead",
                            "easter",
                            "eid",
                            "engagement",
                            "fathers_day",
                            "get_well",
                            "graduation",
                            "halloween",
                            "hanukkah",
                            "housewarming",
                            "kwanzaa",
                            "prom",
                            "july_4th",
                            "mothers_day",
                            "new_baby",
                            "new_years",
                            "quinceanera",
                            "retirement",
                            "st_patricks_day",
                            "sweet_16",
                            "sympathy",
                            "thanksgiving",
                            "valentines",
                            "wedding"
                        ]
                    },
                    "style": {
                        "type": "array",
                        "description": "Style of this listing. Each style is a free-form text string such as \"Formal\", or \"Steampunk\". A Listing may have up to two styles. A style is valid if it does not match the pattern: /[^\\p{L}\\p{Nd}\\p{Zs}]/u",
                        "items": {
                            "type": "string"
                        }
                    },
                    "file_data": {
                        "type": "string",
                        "description": "Written description of the files attached to this digital listing."
                    },
                    "has_variations": {
                        "type": "boolean",
                        "description": "Variations available for this Listing."
                    },
                    "should_auto_renew": {
                        "type": "boolean",
                        "description": "True if this listing has been set to automatic renewals."
                    },
                    "language": {
                        "type": "string",
                        "description": "The IETF language tag (e.g. 'fr') for the language in which the listing is returned.",
                        "nullable": true
                    },
                    "price": {
                        "$ref": "#/components/schemas/Money"
                    }
                }
            },
            "Money": {
                "type": "object",
                "required": ["amount", "divisor", "currency_code"],
                "properties": {
                    "amount": {
                        "type": "integer",
                        "description": "The amount of represented by this data."
                    },
                    "divisor": {
                        "type": "integer",
                        "description": "The divisor to render the amount."
                    },
                    "currency_code": {
                        "type": "string",
                        "description": "The ISO currency code for this data."
                    }
                }
            },
            "ShopListingFiles": {
                "type": "object",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "description": "The number of ShopListingFiles being returned..",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "description": "An array of ShopListingFile resources.",
                        "items": {
                            "$ref": "#/components/schemas/ShopListingFile"
                        }
                    }
                }
            },
            "ShopListingFile": {
                "type": "object",
                "required": [
                    "listing_file_id",
                    "listing_id",
                    "rank",
                    "filename",
                    "filesize",
                    "size_bytes",
                    "filetype",
                    "create_timestamp"
                ],
                "properties": {
                    "listing_file_id": {
                        "type": "integer",
                        "description": "The ID of the ShopListingFile.",
                        "minimum": 1
                    },
                    "listing_id": {
                        "type": "integer",
                        "description": "The ID of the ShopListing that the ShopListingFile belongs to.",
                        "minimum": 1
                    },
                    "rank": {
                        "type": "integer",
                        "description": "The display rank of the ShopListingFile.",
                        "minimum": 0
                    },
                    "filename": {
                        "type": "string",
                        "description": "The name of the ShopListingFile."
                    },
                    "filesize": {
                        "type": "string",
                        "description": "The size of the ShopListingFile in a human-readable format."
                    },
                    "size_bytes": {
                        "type": "integer",
                        "description": "The size of the ShopListingFile in raw bytes.",
                        "minimum": 0
                    },
                    "filetype": {
                        "type": "string",
                        "description": "The ShopListingFile's mimetype."
                    },
                    "create_timestamp": {
                        "type": "integer",
                        "description": "The time when this ShopListingFile was uploaded, in epoch seconds.",
                        "minimum": 946684800
                    }
                }
            },
            "ShopListings": {
                "type": "object",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "description": "The number of ShopListing resources found.",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "description": "The ShopListing resources found.",
                        "items": {
                            "$ref": "#/components/schemas/ShopListing"
                        }
                    }
                }
            },
            "ListingImage": {
                "type": "object",
                "required": [
                    "listing_id",
                    "listing_image_id",
                    "hex_code",
                    "red",
                    "green",
                    "blue",
                    "hue",
                    "saturation",
                    "brightness",
                    "is_black_and_white",
                    "creation_tsz",
                    "rank",
                    "url_75x75",
                    "url_170x135",
                    "url_570xN",
                    "url_fullxfull",
                    "full_height",
                    "full_width"
                ],
                "properties": {
                    "listing_id": {
                        "type": "integer",
                        "description": "The numeric ID of the ListingImage.",
                        "minimum": 1
                    },
                    "listing_image_id": {
                        "type": "integer",
                        "description": "The numeric ID of the Listing the ListingImage belongs to.",
                        "minimum": 1
                    },
                    "hex_code": {
                        "type": "string",
                        "description": "The image's average color, in webhex notation.",
                        "nullable": true
                    },
                    "red": {
                        "type": "integer",
                        "description": "The image's average red value, 0-255 (RGB color).",
                        "minimum": 0
                    },
                    "green": {
                        "type": "integer",
                        "description": "The image's average green value, 0-255 (RGB color).",
                        "minimum": 0
                    },
                    "blue": {
                        "type": "integer",
                        "description": "The image's average blue value, 0-255 (RGB color).",
                        "minimum": 0
                    },
                    "hue": {
                        "type": "integer",
                        "description": "The image's average hue, 0-360 (HSV color).",
                        "minimum": 0
                    },
                    "saturation": {
                        "type": "integer",
                        "description": "The image's average saturation, 0-100 (HSV color).",
                        "minimum": 0
                    },
                    "brightness": {
                        "type": "integer",
                        "description": "The image's average brightness, 0-100 (HSV color).",
                        "minimum": 0
                    },
                    "is_black_and_white": {
                        "type": "boolean",
                        "description": "True if the image is in black & white."
                    },
                    "creation_tsz": {
                        "type": "integer",
                        "description": "Creation time, in epoch seconds.",
                        "minimum": 0
                    },
                    "rank": {
                        "type": "integer",
                        "description": "Display order.",
                        "minimum": 0
                    },
                    "url_75x75": {
                        "type": "string",
                        "description": "The url to a 75x75 thumbnail of the image."
                    },
                    "url_170x135": {
                        "type": "string",
                        "description": "The url to a 170x135 thumbnail of the image."
                    },
                    "url_570xN": {
                        "type": "string",
                        "description": "The url to a thumbnail of the image, no more than 570px width by variable height."
                    },
                    "url_fullxfull": {
                        "type": "string",
                        "description": "The url to the full-size image, up to 3000px in each dimension."
                    },
                    "full_height": {
                        "type": "integer",
                        "description": "Height of the image returned by url_fullxfull.",
                        "minimum": 0
                    },
                    "full_width": {
                        "type": "integer",
                        "description": "Width of the image returned by url_fullxfull.",
                        "minimum": 0
                    }
                }
            },
            "ListingImages": {
                "type": "object",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/ListingImage"
                        }
                    }
                }
            },
            "ListingInventory": {
                "type": "object",
                "required": [
                    "products",
                    "price_on_property",
                    "quantity_on_property",
                    "sku_on_property"
                ],
                "properties": {
                    "products": {
                        "type": "array",
                        "description": "The products available for this listing.",
                        "items": {
                            "$ref": "#/components/schemas/ListingInventoryProduct"
                        }
                    },
                    "price_on_property": {
                        "type": "array",
                        "description": "Which properties control price?",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "quantity_on_property": {
                        "type": "array",
                        "description": "Which properties control quantity?",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "sku_on_property": {
                        "type": "array",
                        "description": "Which properties control SKU?",
                        "items": {
                            "type": "integer"
                        }
                    }
                }
            },
            "ListingInventoryProduct": {
                "type": "object",
                "required": [
                    "product_id",
                    "sku",
                    "is_deleted",
                    "offerings",
                    "property_values"
                ],
                "properties": {
                    "product_id": {
                        "type": "integer",
                        "description": "The ID for the Product",
                        "minimum": 1
                    },
                    "sku": {
                        "type": "string",
                        "description": "The SKU for the Product"
                    },
                    "is_deleted": {
                        "type": "boolean",
                        "description": "Whether or not the Product is deleted"
                    },
                    "offerings": {
                        "type": "array",
                        "description": "ProductOffering data for this Product",
                        "items": {
                            "$ref": "#/components/schemas/ListingInventoryProductOffering"
                        }
                    },
                    "property_values": {
                        "type": "array",
                        "description": "PropertyValue data for this Product",
                        "items": {
                            "$ref": "#/components/schemas/ListingPropertyValue"
                        }
                    }
                }
            },
            "ListingInventoryProductOffering": {
                "type": "object",
                "required": [
                    "offering_id",
                    "quantity",
                    "is_enabled",
                    "is_deleted",
                    "price"
                ],
                "properties": {
                    "offering_id": {
                        "type": "integer",
                        "description": "The ID for the ProductOffering",
                        "minimum": 1
                    },
                    "quantity": {
                        "type": "integer",
                        "description": "The quantity the ProductOffering"
                    },
                    "is_enabled": {
                        "type": "boolean",
                        "description": "Whether or not the offering can be shown to buyers."
                    },
                    "is_deleted": {
                        "type": "boolean",
                        "description": "Whether or not the offering has been deleted."
                    },
                    "price": {
                        "$ref": "#/components/schemas/Money"
                    }
                }
            },
            "ListingPropertyValue": {
                "type": "object",
                "required": [
                    "property_id",
                    "property_name",
                    "scale_id",
                    "scale_name",
                    "value_ids",
                    "values"
                ],
                "properties": {
                    "property_id": {
                        "type": "integer",
                        "description": "The numeric ID of the Property.",
                        "minimum": 1
                    },
                    "property_name": {
                        "type": "string",
                        "description": "The name of the Property."
                    },
                    "scale_id": {
                        "type": "integer",
                        "description": "The numeric ID of the scale (if any).",
                        "nullable": true,
                        "minimum": 1
                    },
                    "scale_name": {
                        "type": "string",
                        "description": "The label used to describe the chosen scale (if any).",
                        "nullable": true
                    },
                    "value_ids": {
                        "type": "array",
                        "description": "The numeric IDs of the Property values",
                        "items": {
                            "type": "integer",
                            "minimum": 1
                        }
                    },
                    "values": {
                        "type": "array",
                        "description": "The Property values",
                        "items": {
                            "type": "string"
                        }
                    }
                }
            },
            "ListingProduct": {
                "type": "object",
                "required": ["property_values", "offerings"],
                "properties": {
                    "sku": {
                        "type": "string",
                        "nullable": true
                    },
                    "property_values": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/PropertyValue"
                        }
                    },
                    "offerings": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/Offering"
                        }
                    }
                }
            },
            "PropertyValue": {
                "type": "object",
                "required": ["property_id", "value_ids", "values"],
                "properties": {
                    "property_id": {
                        "type": "integer",
                        "minimum": 1
                    },
                    "value_ids": {
                        "type": "array",
                        "items": {
                            "type": "integer",
                            "minimum": 1
                        }
                    },
                    "scale_id": {
                        "type": "integer",
                        "nullable": true,
                        "minimum": 1
                    },
                    "property_name": {
                        "type": "string",
                        "nullable": true
                    },
                    "values": {
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                }
            },
            "Offering": {
                "type": "object",
                "required": ["price", "quantity", "is_enabled"],
                "properties": {
                    "price": {
                        "type": "number",
                        "format": "float"
                    },
                    "quantity": {
                        "type": "integer"
                    },
                    "is_enabled": {
                        "type": "boolean"
                    }
                }
            },
            "ListingPropertyValues": {
                "type": "object",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/ListingPropertyValue"
                        }
                    }
                }
            },
            "ListingShippingProfile": {
                "type": "object",
                "required": [
                    "shipping_profile_id",
                    "title",
                    "user_id",
                    "min_processing_days",
                    "max_processing_days",
                    "processing_days_display_label",
                    "origin_country_id"
                ],
                "properties": {
                    "shipping_profile_id": {
                        "type": "integer",
                        "description": "The numeric ID of this shipping profile.",
                        "minimum": 1
                    },
                    "title": {
                        "type": "string",
                        "description": "The name of this shipping profile."
                    },
                    "user_id": {
                        "type": "integer",
                        "description": "The numeric ID of the user who owns this shipping profile.",
                        "minimum": 1
                    },
                    "min_processing_days": {
                        "type": "integer",
                        "description": "The minimum number of days for processing the listing.",
                        "nullable": true,
                        "minimum": 0
                    },
                    "max_processing_days": {
                        "type": "integer",
                        "description": "The maximum number of days for processing the listing.",
                        "nullable": true,
                        "minimum": 0
                    },
                    "processing_days_display_label": {
                        "type": "string",
                        "description": "Translated display label for processing days."
                    },
                    "origin_country_id": {
                        "type": "integer",
                        "description": "The numeric ID of the country from which the listing ships.",
                        "minimum": 1
                    }
                }
            },
            "ListingShippingProfileDestination": {
                "type": "object",
                "required": [
                    "shipping_profile_entry_id",
                    "shipping_profile_id",
                    "origin_country_iso",
                    "destination_country_iso",
                    "primary_cost",
                    "secondary_cost"
                ],
                "properties": {
                    "shipping_profile_entry_id": {
                        "type": "integer",
                        "description": "The numeric ID of this shipping profile entry.",
                        "minimum": 1
                    },
                    "shipping_profile_id": {
                        "type": "integer",
                        "description": "The numeric ID of the profile this entry belongs to.",
                        "minimum": 1
                    },
                    "origin_country_iso": {
                        "type": "string",
                        "description": "The ISO code of the country from which the listing ships."
                    },
                    "destination_country_iso": {
                        "type": "string",
                        "description": "The ISO code of the country to which the listing ships (optional). If missing, these fees apply to all destinations."
                    },
                    "primary_cost": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "secondary_cost": {
                        "$ref": "#/components/schemas/Money"
                    }
                }
            },
            "ListingShippingProfileEntries": {
                "type": "object",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/ListingShippingProfileDestination"
                        }
                    }
                }
            },
            "ListingShippingProfiles": {
                "type": "object",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/ListingShippingProfile"
                        }
                    }
                }
            },
            "ListingShippingProfileUpgrade": {
                "type": "object",
                "required": [
                    "shipping_profile_id",
                    "value_id",
                    "value",
                    "type",
                    "rank",
                    "language",
                    "price",
                    "secondary_price"
                ],
                "properties": {
                    "shipping_profile_id": {
                        "type": "integer",
                        "description": "The numeric ID of the parent shipping profile.",
                        "minimum": 1
                    },
                    "value_id": {
                        "type": "integer",
                        "description": "The identifier for the value.",
                        "minimum": 1
                    },
                    "value": {
                        "type": "string",
                        "description": "Name of the shipping upgrade, e.g. USPS Priority."
                    },
                    "type": {
                        "type": "string",
                        "description": "The type of the shipping upgrade.",
                        "enum": ["0", "1"]
                    },
                    "rank": {
                        "type": "integer",
                        "description": "The display rank.",
                        "minimum": 0
                    },
                    "language": {
                        "type": "string",
                        "description": "The language of the shipping ugprade."
                    },
                    "price": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "secondary_price": {
                        "$ref": "#/components/schemas/Money"
                    }
                }
            },
            "ListingShippingProfileUpgrades": {
                "type": "object",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/ListingShippingProfileUpgrade"
                        }
                    }
                }
            },
            "ShopReceiptTransactions": {
                "type": "object",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "description": "The number of ShopReceiptTransaction resources found."
                    },
                    "results": {
                        "type": "array",
                        "description": "The ShopReceiptTransaction resources found.",
                        "items": {
                            "$ref": "#/components/schemas/ShopReceiptTransaction"
                        }
                    }
                }
            },
            "ShopReceiptTransaction": {
                "type": "object",
                "required": [
                    "transaction_id",
                    "title",
                    "description",
                    "seller_user_id",
                    "buyer_user_id",
                    "create_timestamp",
                    "paid_timestamp",
                    "shipped_timestamp",
                    "quantity",
                    "image_listing_id",
                    "receipt_id",
                    "is_digital",
                    "file_data",
                    "listing_id",
                    "seller_feedback_id",
                    "buyer_feedback_id",
                    "transaction_type",
                    "product_id",
                    "price",
                    "shipping_cost"
                ],
                "properties": {
                    "transaction_id": {
                        "type": "integer",
                        "description": "The numeric ID for this transaction.",
                        "minimum": 1
                    },
                    "title": {
                        "type": "string",
                        "description": "The title of the listing for this transaction."
                    },
                    "description": {
                        "type": "string",
                        "description": "The description of the listing for this transaction."
                    },
                    "seller_user_id": {
                        "type": "integer",
                        "description": "The numeric ID for the seller of this transaction.",
                        "minimum": 1
                    },
                    "buyer_user_id": {
                        "type": "integer",
                        "description": "The numeric ID for the buyer of this transaction.",
                        "minimum": 1
                    },
                    "create_timestamp": {
                        "type": "integer",
                        "description": "The date and time the transaction was created, in epoch seconds.",
                        "minimum": 946684800
                    },
                    "paid_timestamp": {
                        "type": "integer",
                        "description": "The date and time the transaction was paid, in epoch seconds.",
                        "nullable": true,
                        "minimum": 946684800
                    },
                    "shipped_timestamp": {
                        "type": "integer",
                        "description": "The date and time the transaction was shipped, in epoch seconds.",
                        "nullable": true,
                        "minimum": 946684800
                    },
                    "quantity": {
                        "type": "integer",
                        "description": "The quantity of items in this transaction.",
                        "minimum": 0
                    },
                    "image_listing_id": {
                        "type": "integer",
                        "description": "The numeric ID of the primary listing image for this transaction.",
                        "nullable": true,
                        "minimum": 1
                    },
                    "receipt_id": {
                        "type": "integer",
                        "description": "The numeric ID for the receipt associated to this transaction.",
                        "minimum": 1
                    },
                    "is_digital": {
                        "type": "boolean",
                        "description": "True if this listing is for a digital download."
                    },
                    "file_data": {
                        "type": "string",
                        "description": "Written description of the files attached to this digital listing."
                    },
                    "listing_id": {
                        "type": "integer",
                        "description": "The numeric ID for this listing associated to this transaction.",
                        "minimum": 1
                    },
                    "seller_feedback_id": {
                        "type": "integer",
                        "description": "The numeric ID of seller's feedback.",
                        "nullable": true,
                        "minimum": 1
                    },
                    "buyer_feedback_id": {
                        "type": "integer",
                        "description": "The numeric ID for the buyer's feedback.",
                        "nullable": true,
                        "minimum": 1
                    },
                    "transaction_type": {
                        "type": "string",
                        "description": "The type of transaction, usually \"listing\""
                    },
                    "product_id": {
                        "type": "integer",
                        "description": "The numeric ID for the purchased ListingProduct",
                        "nullable": true,
                        "minimum": 1
                    },
                    "price": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "shipping_cost": {
                        "$ref": "#/components/schemas/Money"
                    }
                }
            },
            "ListingTranslation": {
                "type": "object",
                "required": [
                    "listing_id",
                    "language",
                    "title",
                    "description",
                    "tags"
                ],
                "properties": {
                    "listing_id": {
                        "type": "integer",
                        "description": "The numeric ID for the Listing.",
                        "minimum": 1
                    },
                    "language": {
                        "type": "string",
                        "description": "The IETF language tag (e.g. 'fr') for the language of this translation."
                    },
                    "title": {
                        "type": "string",
                        "description": "The title of the Listing of this Translation."
                    },
                    "description": {
                        "type": "string",
                        "description": "The description of the Listing of this Translation."
                    },
                    "tags": {
                        "type": "array",
                        "description": "The tags of the Listing of this Translation.",
                        "items": {
                            "type": "string"
                        }
                    }
                }
            },
            "ListingVariationImages": {
                "type": "object",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/ListingVariationImage"
                        }
                    }
                }
            },
            "ListingVariationImage": {
                "type": "object",
                "required": ["property_id", "value_id", "image_id"],
                "properties": {
                    "property_id": {
                        "type": "integer",
                        "description": "The numeric ID of the Property.",
                        "minimum": 1
                    },
                    "value_id": {
                        "type": "integer",
                        "description": "The numeric ID of the Value.",
                        "minimum": 1
                    },
                    "image_id": {
                        "type": "integer",
                        "description": "The numeric ID of the Image.",
                        "minimum": 1
                    }
                }
            },
            "PaymentAccountLedgerEntries": {
                "type": "object",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "description": "The number of PaymentAccountLedgerEntry resources found.",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "description": "The PaymentAccountLedgerEntry resources found.",
                        "items": {
                            "$ref": "#/components/schemas/PaymentAccountLedgerEntry"
                        }
                    }
                }
            },
            "PaymentAccountLedgerEntry": {
                "type": "object",
                "required": [
                    "entry_id",
                    "ledger_id",
                    "sequence_number",
                    "amount",
                    "currency",
                    "description",
                    "balance",
                    "create_date"
                ],
                "properties": {
                    "entry_id": {
                        "type": "integer",
                        "description": "The ledger entry's numeric ID.",
                        "minimum": 1
                    },
                    "ledger_id": {
                        "type": "integer",
                        "description": "The ledger's numeric ID.",
                        "minimum": 1
                    },
                    "sequence_number": {
                        "type": "integer",
                        "description": "The sequence allows ledger entries to be sorted chronologically. The higher the sequence, the more recent the entry.",
                        "minimum": 0
                    },
                    "amount": {
                        "type": "integer",
                        "description": "The amount of money credited to the ledger."
                    },
                    "currency": {
                        "type": "string",
                        "description": "The currency of the entry on the ledger."
                    },
                    "description": {
                        "type": "string",
                        "description": "Details what kind of ledger entry this is: a payment, refund, reversal of a failed refund, disbursement, returned disbursement, recoupment, miscellaneous credit, miscellaneous debit, or bill payment."
                    },
                    "balance": {
                        "type": "integer",
                        "description": "The amount of money in the shop's ledger the moment after this entry was applied."
                    },
                    "create_date": {
                        "type": "integer",
                        "description": "The date and time the ledger entry was created in Epoch seconds..",
                        "minimum": 0
                    }
                }
            },
            "Payments": {
                "type": "object",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "description": "The number of ShopListing resources found.",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "description": "The Payment resources found.",
                        "items": {
                            "$ref": "#/components/schemas/Payment"
                        }
                    }
                }
            },
            "Payment": {
                "type": "object",
                "required": [
                    "payment_id",
                    "buyer_user_id",
                    "shop_id",
                    "receipt_id",
                    "amount_gross",
                    "amount_fees",
                    "amount_net",
                    "currency",
                    "shop_currency",
                    "buyer_currency",
                    "shipping_user_id",
                    "shipping_address_id",
                    "billing_address_id",
                    "status",
                    "shipped_date",
                    "create_date",
                    "update_date",
                    "payment_adjustments"
                ],
                "properties": {
                    "payment_id": {
                        "type": "integer",
                        "description": "The payment's numeric ID.",
                        "minimum": 1
                    },
                    "buyer_user_id": {
                        "type": "integer",
                        "description": "The buyer's numeric ID.",
                        "minimum": 1
                    },
                    "shop_id": {
                        "type": "integer",
                        "description": "The shop's numeric ID.",
                        "minimum": 1
                    },
                    "receipt_id": {
                        "type": "integer",
                        "description": "The receipt's numeric ID.",
                        "minimum": 1
                    },
                    "amount_gross": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "amount_fees": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "amount_net": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "posted_gross": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "posted_fees": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "posted_net": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "adjusted_gross": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "adjusted_fees": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "adjusted_net": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "currency": {
                        "type": "string",
                        "description": "What currency the payment was made in."
                    },
                    "shop_currency": {
                        "type": "string",
                        "description": "The currency of the shop.",
                        "nullable": true
                    },
                    "buyer_currency": {
                        "type": "string",
                        "description": "The currency of the buyer.",
                        "nullable": true
                    },
                    "shipping_user_id": {
                        "type": "integer",
                        "description": "The numeric id of the user to which the order is being shipped.",
                        "nullable": true,
                        "minimum": 1
                    },
                    "shipping_address_id": {
                        "type": "integer",
                        "description": "The numeric id identifying the shipping address.",
                        "minimum": 1
                    },
                    "billing_address_id": {
                        "type": "integer",
                        "description": "The numeric id identifying the billing address of the buyer.",
                        "minimum": 1
                    },
                    "status": {
                        "type": "string",
                        "description": "Most commonly \"settled\" or \"authed\". Marks the current status of the payment."
                    },
                    "shipped_date": {
                        "type": "integer",
                        "description": "The date and time the payment was shipped in Epoch seconds.",
                        "nullable": true,
                        "minimum": 0
                    },
                    "create_date": {
                        "type": "integer",
                        "description": "The date and time the payment was created in Epoch seconds.",
                        "minimum": 0
                    },
                    "update_date": {
                        "type": "integer",
                        "description": "The date and time the payment was last updated in Epoch seconds.",
                        "minimum": 0
                    },
                    "payment_adjustments": {
                        "type": "array",
                        "description": "Represents refund on an Etsy Payments transaction. Please note all monetary amounts are in USD pennies unless otherwise specified.",
                        "items": {
                            "$ref": "#/components/schemas/PaymentAdjustment"
                        }
                    }
                }
            },
            "PaymentAdjustment": {
                "type": "object",
                "required": [
                    "payment_adjustment_id",
                    "payment_id",
                    "status",
                    "is_success",
                    "user_id",
                    "reason_code",
                    "total_adjustment_amount",
                    "shop_total_adjustment_amount",
                    "buyer_total_adjustment_amount",
                    "total_fee_adjustment_amount",
                    "create_date",
                    "update_date"
                ],
                "properties": {
                    "payment_adjustment_id": {
                        "type": "integer",
                        "description": "The payment adjustment's numeric ID.",
                        "minimum": 1
                    },
                    "payment_id": {
                        "type": "integer",
                        "description": "The payment's numeric ID.",
                        "minimum": 1
                    },
                    "status": {
                        "type": "string",
                        "description": "The status of the Payment Adjustment."
                    },
                    "is_success": {
                        "type": "boolean",
                        "description": "Whether the Payment Adjustment was successful or will likely be completed successfully."
                    },
                    "user_id": {
                        "type": "integer",
                        "description": "The seller's numeric ID.",
                        "minimum": 1
                    },
                    "reason_code": {
                        "type": "string",
                        "description": "A human-readable string describing the need for the refund."
                    },
                    "total_adjustment_amount": {
                        "type": "integer",
                        "description": "The total amount of the refund in the payment currency.",
                        "nullable": true,
                        "minimum": 0
                    },
                    "shop_total_adjustment_amount": {
                        "type": "integer",
                        "description": "The total amount of the refund in the shop currency.",
                        "nullable": true,
                        "minimum": 0
                    },
                    "buyer_total_adjustment_amount": {
                        "type": "integer",
                        "description": "The total amount of the refund in the buyer currency.",
                        "nullable": true,
                        "minimum": 0
                    },
                    "total_fee_adjustment_amount": {
                        "type": "integer",
                        "description": "The amount of card processing fees associated with this adjustment.",
                        "nullable": true,
                        "minimum": 0
                    },
                    "create_date": {
                        "type": "integer",
                        "description": "The date and time the payment adjustment was created in Epoch seconds.",
                        "minimum": 0
                    },
                    "update_date": {
                        "type": "integer",
                        "description": "The date and time the payment adjustment was last updated in Epoch seconds.",
                        "minimum": 0
                    }
                }
            },
            "ShopReceipt": {
                "type": "object",
                "required": [
                    "receipt_id",
                    "receipt_type",
                    "order_id",
                    "seller_user_id",
                    "buyer_user_id",
                    "name",
                    "first_line",
                    "second_line",
                    "city",
                    "state",
                    "zip",
                    "formatted_address",
                    "country_iso",
                    "payment_method",
                    "payment_email",
                    "message_from_seller",
                    "message_from_buyer",
                    "message_from_payment",
                    "is_paid",
                    "is_shipped",
                    "create_timestamp",
                    "update_timestamp",
                    "gift_message",
                    "grandtotal",
                    "subtotal",
                    "total_price",
                    "total_shipping_cost",
                    "total_tax_cost",
                    "total_vat_cost",
                    "discount_amt",
                    "gift_wrap_price",
                    "shipments"
                ],
                "properties": {
                    "receipt_id": {
                        "type": "integer",
                        "description": "The ID for the ShopReceipt.",
                        "minimum": 1
                    },
                    "receipt_type": {
                        "type": "integer",
                        "description": "The Etsy channel on which the purchase occured. 0 for Etsy.com, 1 for a Pattern shop.",
                        "minimum": 0
                    },
                    "order_id": {
                        "type": "integer",
                        "description": "The ID of the order this ShopReceipt is associated with.",
                        "minimum": 1
                    },
                    "seller_user_id": {
                        "type": "integer",
                        "description": "The ID of the seller User.",
                        "minimum": 1
                    },
                    "buyer_user_id": {
                        "type": "integer",
                        "description": "The ID of the buyer User.",
                        "minimum": 1
                    },
                    "name": {
                        "type": "string",
                        "description": "The name for the buyer's shipping address."
                    },
                    "first_line": {
                        "type": "string",
                        "description": "The first line for the buyer's shipping address."
                    },
                    "second_line": {
                        "type": "string",
                        "description": "The second line for the buyer's shipping address.",
                        "nullable": true
                    },
                    "city": {
                        "type": "string",
                        "description": "The city for the buyer's shipping address."
                    },
                    "state": {
                        "type": "string",
                        "description": "The state for the buyer's shipping address."
                    },
                    "zip": {
                        "type": "string",
                        "description": "The zip for the buyer's shipping address."
                    },
                    "formatted_address": {
                        "type": "string",
                        "description": "The locally formatted address strng of the buyer's shipping address."
                    },
                    "country_iso": {
                        "type": "string",
                        "description": "The ISO-3166 alpha-2 country code of the buyer's shipping address."
                    },
                    "payment_method": {
                        "type": "string",
                        "description": "The payment method for the ShopReceipt."
                    },
                    "payment_email": {
                        "type": "string",
                        "description": "The email address where payment confirmation is sent."
                    },
                    "message_from_seller": {
                        "type": "string",
                        "description": "An optional message from the seller.",
                        "nullable": true
                    },
                    "message_from_buyer": {
                        "type": "string",
                        "description": "An optional message from the buyer.",
                        "nullable": true
                    },
                    "message_from_payment": {
                        "type": "string",
                        "description": "The machine generated acknowledgement from the payment system",
                        "nullable": true
                    },
                    "is_paid": {
                        "type": "boolean",
                        "description": "True if the receipt is paid."
                    },
                    "is_shipped": {
                        "type": "boolean",
                        "description": "True if the item is shipped."
                    },
                    "create_timestamp": {
                        "type": "integer",
                        "description": "Creation time, in epoch seconds.",
                        "minimum": 946684800
                    },
                    "update_timestamp": {
                        "type": "integer",
                        "description": "Last update time, in epoch seconds.",
                        "minimum": 946684800
                    },
                    "gift_message": {
                        "type": "string",
                        "description": "If the purchase was marked as a gift, the message the buyer wants sent with the gift."
                    },
                    "grandtotal": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "subtotal": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "total_price": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "total_shipping_cost": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "total_tax_cost": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "total_vat_cost": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "discount_amt": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "gift_wrap_price": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "shipments": {
                        "type": "array",
                        "description": "ShopShipments for this ShopReceipt.",
                        "items": {
                            "$ref": "#/components/schemas/ShopReceiptShipment"
                        }
                    }
                }
            },
            "ShopReceiptShipment": {
                "type": "object",
                "required": [
                    "receipt_shipping_id",
                    "shipment_notification_timestamp",
                    "carrier_name",
                    "tracking_code"
                ],
                "properties": {
                    "receipt_shipping_id": {
                        "type": "integer",
                        "description": "The ID for the ShopReceiptShipment.",
                        "nullable": true,
                        "minimum": 1
                    },
                    "shipment_notification_timestamp": {
                        "type": "integer",
                        "description": "The time at which the buyer is notified of the shipment event, in epoch seconds.",
                        "minimum": 946684800
                    },
                    "carrier_name": {
                        "type": "string",
                        "description": "The name of the carrier, the company responsible for delivering the package."
                    },
                    "tracking_code": {
                        "type": "string",
                        "description": "The tracking code for the ShopReceiptShipment."
                    }
                }
            },
            "ShopReceipts": {
                "type": "object",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "description": "The number of ShopReceipt resources found."
                    },
                    "results": {
                        "type": "array",
                        "description": "The ShopReceipt resources found.",
                        "items": {
                            "$ref": "#/components/schemas/ShopReceipt"
                        }
                    }
                }
            },
            "UserFeedbacks": {
                "type": "object",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "description": "The number of UserFeedback records being returned.",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "description": "An array of UserFeedback resources.",
                        "items": {
                            "$ref": "#/components/schemas/UserFeedback"
                        }
                    }
                }
            },
            "UserFeedback": {
                "type": "object",
                "required": [
                    "feedback_id",
                    "transaction_id",
                    "creator_user_id",
                    "target_user_id",
                    "seller_user_id",
                    "buyer_user_id",
                    "create_timestamp",
                    "message",
                    "value",
                    "image_feedback_id",
                    "image_url_25x25",
                    "image_url_155x125",
                    "image_url_fullxfull"
                ],
                "properties": {
                    "feedback_id": {
                        "type": "integer",
                        "description": "The numeric ID for this feedback record.",
                        "minimum": 1
                    },
                    "transaction_id": {
                        "type": "integer",
                        "description": "The numeric ID for this transaction.",
                        "minimum": 1
                    },
                    "creator_user_id": {
                        "type": "integer",
                        "description": "The numeric ID of the user who wrote this feedback.",
                        "minimum": 1
                    },
                    "target_user_id": {
                        "type": "integer",
                        "description": "The numeric ID of the user who received this feedback.",
                        "minimum": 1
                    },
                    "seller_user_id": {
                        "type": "integer",
                        "description": "The numeric ID of the user who was the seller in this transaction.",
                        "minimum": 1
                    },
                    "buyer_user_id": {
                        "type": "integer",
                        "description": "The numeric ID of the user who was the seller in this transaction.",
                        "minimum": 1
                    },
                    "create_timestamp": {
                        "type": "integer",
                        "description": "The date and time the transaction was created, in epoch seconds.",
                        "minimum": 946684800
                    },
                    "message": {
                        "type": "string",
                        "description": "A message left by the author, explaining the feedback."
                    },
                    "value": {
                        "type": "integer",
                        "description": "The feedback's value; 1 is positive, -1 is negative, and 0 is neutral."
                    },
                    "image_feedback_id": {
                        "type": "integer",
                        "description": "The numeric ID of the feedback's image (if present).",
                        "minimum": 1
                    },
                    "image_url_25x25": {
                        "type": "string",
                        "description": "The url to a photo provided with the feedback, dimensions 25x25."
                    },
                    "image_url_155x125": {
                        "type": "string",
                        "description": "The url to a photo provided with the feedback, dimensions 155x125."
                    },
                    "image_url_fullxfull": {
                        "type": "string",
                        "description": "The url to a photo provided with the feedback, dimensions fullxfull."
                    }
                }
            },
            "Shop": {
                "type": "object",
                "required": [
                    "shop_id",
                    "user_id",
                    "shop_name",
                    "create_date",
                    "title",
                    "announcement",
                    "currency_code",
                    "is_vacation",
                    "vacation_message",
                    "sale_message",
                    "digital_sale_message",
                    "update_date",
                    "listing_active_count",
                    "digital_listing_count",
                    "login_name",
                    "accepts_custom_requests",
                    "policy_welcome",
                    "policy_payment",
                    "policy_shipping",
                    "policy_refunds",
                    "policy_additional",
                    "policy_seller_info",
                    "policy_update_date",
                    "policy_has_private_receipt_info",
                    "has_unstructured_policies",
                    "policy_privacy",
                    "vacation_autoreply",
                    "url",
                    "image_url_760x100",
                    "num_favorers",
                    "languages",
                    "icon_url_fullxfull",
                    "is_using_structured_policies",
                    "has_onboarded_structured_policies",
                    "include_dispute_form_link",
                    "is_direct_checkout_onboarded",
                    "is_calculated_eligible",
                    "is_opted_in_to_buyer_promise",
                    "is_shop_us_based"
                ],
                "properties": {
                    "shop_id": {
                        "type": "integer",
                        "description": "The shop's numeric ID.",
                        "minimum": 1
                    },
                    "user_id": {
                        "type": "integer",
                        "description": "The numeric ID of the user that owns this shop.",
                        "minimum": 1
                    },
                    "shop_name": {
                        "type": "string",
                        "description": "The shop's name."
                    },
                    "create_date": {
                        "type": "integer",
                        "description": "The date and time the shop was created, in epoch seconds.",
                        "minimum": 0
                    },
                    "title": {
                        "type": "string",
                        "description": "A brief heading for the shop's main page.",
                        "nullable": true
                    },
                    "announcement": {
                        "type": "string",
                        "description": "An announcement to buyers that displays on the shop's homepage.",
                        "nullable": true
                    },
                    "currency_code": {
                        "type": "string",
                        "description": "The ISO code (alphabetic) for the seller's currency. All prices are in this currency."
                    },
                    "is_vacation": {
                        "type": "boolean",
                        "description": "True if the seller is not currently accepting purchases."
                    },
                    "vacation_message": {
                        "type": "string",
                        "description": "The shop's message to display in case is_vacation is true.",
                        "nullable": true
                    },
                    "sale_message": {
                        "type": "string",
                        "description": "A message that is sent to users who buy from this shop.",
                        "nullable": true
                    },
                    "digital_sale_message": {
                        "type": "string",
                        "description": "A message that is sent to users who buy a digital item from this shop.",
                        "nullable": true
                    },
                    "update_date": {
                        "type": "integer",
                        "description": "The date and time the shop was last updated, in epoch seconds.",
                        "minimum": 0
                    },
                    "listing_active_count": {
                        "type": "integer",
                        "description": "The number of active listings in the shop.",
                        "minimum": 0
                    },
                    "digital_listing_count": {
                        "type": "integer",
                        "description": "Number of digital listings the shop has.",
                        "minimum": 0
                    },
                    "login_name": {
                        "type": "string",
                        "description": "The user's login name."
                    },
                    "accepts_custom_requests": {
                        "type": "boolean",
                        "description": "True if the shop accepts requests for custom items."
                    },
                    "policy_welcome": {
                        "type": "string",
                        "description": "The introductory text from the top of the seller's policies page (may be blank).",
                        "nullable": true
                    },
                    "policy_payment": {
                        "type": "string",
                        "description": "The seller's policy on payment (may be blank).",
                        "nullable": true
                    },
                    "policy_shipping": {
                        "type": "string",
                        "description": "The seller's policy on shipping (may be blank).",
                        "nullable": true
                    },
                    "policy_refunds": {
                        "type": "string",
                        "description": "The seller's policy on refunds (may be blank).",
                        "nullable": true
                    },
                    "policy_additional": {
                        "type": "string",
                        "description": "Any additional policy information the seller provides (may be blank).",
                        "nullable": true
                    },
                    "policy_seller_info": {
                        "type": "string",
                        "description": "The shop's seller information (may be blank).",
                        "nullable": true
                    },
                    "policy_update_date": {
                        "type": "integer",
                        "description": "The date and time the shop's policy was last updated, in epoch seconds.",
                        "minimum": 0
                    },
                    "policy_has_private_receipt_info": {
                        "type": "boolean",
                        "description": "True if seller has private info to show in EU receipts."
                    },
                    "has_unstructured_policies": {
                        "type": "boolean",
                        "description": "True if shop has any unstructured policy fields filled out."
                    },
                    "policy_privacy": {
                        "type": "string",
                        "description": "Privacy policy information the seller provides (may be blank).",
                        "nullable": true
                    },
                    "vacation_autoreply": {
                        "type": "string",
                        "description": "A message to buyers in response to new convos if is_vacation is true.",
                        "nullable": true
                    },
                    "url": {
                        "type": "string",
                        "description": "The URL of the shop."
                    },
                    "image_url_760x100": {
                        "type": "string",
                        "description": "The URL to the shop's banner image.",
                        "nullable": true
                    },
                    "num_favorers": {
                        "type": "integer",
                        "description": "The number of members who've marked this Shop as a favorite.",
                        "minimum": 0
                    },
                    "languages": {
                        "type": "array",
                        "description": "The languages that this Shop is enrolled in.",
                        "items": {
                            "type": "string"
                        }
                    },
                    "icon_url_fullxfull": {
                        "type": "string",
                        "description": "The url of the shop full-sized shop icon.",
                        "nullable": true
                    },
                    "is_using_structured_policies": {
                        "type": "boolean",
                        "description": "True if shop has accepted using structured policies."
                    },
                    "has_onboarded_structured_policies": {
                        "type": "boolean",
                        "description": "True if shop has viewed structured policies onboarding and accepted OR declined."
                    },
                    "include_dispute_form_link": {
                        "type": "boolean",
                        "description": "True if shop policies include a link to EU online dispute form."
                    },
                    "is_direct_checkout_onboarded": {
                        "type": "boolean",
                        "description": "True if the shop has onboarded onto Etsy Payments."
                    },
                    "is_calculated_eligible": {
                        "type": "boolean",
                        "description": "True if the shop is elegible for calculated shipping profiles (Only available in the US and Canada)."
                    },
                    "is_opted_in_to_buyer_promise": {
                        "type": "boolean",
                        "description": "True if opted in to buyer promise."
                    },
                    "is_shop_us_based": {
                        "type": "boolean",
                        "description": "True if shop is based in the US."
                    }
                }
            },
            "Shops": {
                "type": "object",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "description": "The total number of Shops",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "description": "The Shop resources.",
                        "items": {
                            "$ref": "#/components/schemas/Shop"
                        }
                    }
                }
            },
            "ShopSection": {
                "type": "object",
                "required": [
                    "shop_section_id",
                    "title",
                    "rank",
                    "user_id",
                    "active_listing_count"
                ],
                "properties": {
                    "shop_section_id": {
                        "type": "integer",
                        "description": "The numeric ID of the shop section.",
                        "minimum": 1
                    },
                    "title": {
                        "type": "string",
                        "description": "The title of the section."
                    },
                    "rank": {
                        "type": "integer",
                        "description": "Display order.",
                        "minimum": 0
                    },
                    "user_id": {
                        "type": "integer",
                        "description": "The ID of the user who owns this shop section.",
                        "minimum": 1
                    },
                    "active_listing_count": {
                        "type": "integer",
                        "description": "The number of active listings currently in the section.",
                        "minimum": 0
                    }
                }
            },
            "ShopSections": {
                "type": "object",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "description": "The total number of Shop Sections",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "description": "The Shop Section resources.",
                        "items": {
                            "$ref": "#/components/schemas/ShopSection"
                        }
                    }
                }
            },
            "UserAddresses": {
                "type": "object",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "description": "The number of UserAddress records being returned.",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "description": "An array of UserAddress resources.",
                        "items": {
                            "$ref": "#/components/schemas/UserAddress"
                        }
                    }
                }
            },
            "UserAddress": {
                "type": "object",
                "required": [
                    "user_address_id",
                    "user_id",
                    "name",
                    "first_line",
                    "second_line",
                    "city",
                    "state",
                    "zip",
                    "iso_country_code",
                    "country_name",
                    "is_default_shipping_address"
                ],
                "properties": {
                    "user_address_id": {
                        "type": "integer",
                        "description": "The numeric ID of the user's address.",
                        "minimum": 1
                    },
                    "user_id": {
                        "type": "integer",
                        "description": "The user's numeric ID.",
                        "minimum": 1
                    },
                    "name": {
                        "type": "string",
                        "description": "The user's name for this address."
                    },
                    "first_line": {
                        "type": "string",
                        "description": "The first line of the user's address."
                    },
                    "second_line": {
                        "type": "string",
                        "description": "The second line of the user's address."
                    },
                    "city": {
                        "type": "string",
                        "description": "The city field of the user's address."
                    },
                    "state": {
                        "type": "string",
                        "description": "The state field of the user's address."
                    },
                    "zip": {
                        "type": "string",
                        "description": "The zip code field of the user's address."
                    },
                    "iso_country_code": {
                        "type": "string",
                        "description": "The ISO code of the country in this address."
                    },
                    "country_name": {
                        "type": "string",
                        "description": "The name of the user's country."
                    },
                    "is_default_shipping_address": {
                        "type": "boolean",
                        "description": "Is this the user's default shipping address."
                    }
                }
            },
            "User": {
                "type": "object",
                "required": [
                    "user_id",
                    "login_name",
                    "primary_email",
                    "create_date",
                    "referred_by_user_id",
                    "awaiting_feedback_count",
                    "use_new_inventory_endpoints",
                    "feedback_info"
                ],
                "properties": {
                    "user_id": {
                        "type": "integer",
                        "description": "The user's numeric ID. This is also valid as the user's shop ID.",
                        "minimum": 1
                    },
                    "login_name": {
                        "type": "string",
                        "description": "The user's login name."
                    },
                    "primary_email": {
                        "type": "object",
                        "description": "The user's primary email address."
                    },
{
    "openapi": "3.0.2",
    "info": {
        "title": "Etsy OpenAPI",
        "description": "<div class=\"wt-text-body-01\"><p class=\"wt-pt-xs-2 wt-pb-xs-2\">Etsy's Open API provides a simple RESTful interface for various Etsy.com features. The API reference documents endpoints are meant to replace <a target=\"_blank\" class=\"wt-text-link wt-p-xs-0\" href=\"https://www.etsy.com/developers/documentation\">Etsy's current Open API</a> this year. Use of the API is subject to the <a target=\"_blank\" class=\"wt-text-link wt-p-xs-0\" href=\"https://www.etsy.com/legal/api\">API Terms of Use</a>.</p><p class=\"wt-pb-xs-5 wt-text-title-01\">If you would like to make requests to the Open API v3 endpoints, please fill out <a target=\"_blank\" class=\"wt-text-link wt-p-xs-0\" href=\"https://docs.google.com/forms/d/e/1FAIpQLSc4qzVlgjkzEkaQvpgX00xvJLjlomRoS-60G9ob_FqCfmbCrA/viewform\">the intake form</a>.</p><p class=\"wt-pb-xs-2\">The API is currently in an experimental, alpha phase meant to validate feature and functionality requirements. During this phase, endpoints may have significant design changes but developers will have an opportunity to preview endpoints and provide feedback that will help shape Etsy's Open API functionality. The alpha API design is not stable and will likely change in response to feedback but we'll communicate changes as they are made.</p><p class=\"wt-pb-xs-2\">All of the endpoints are callable, but many endpoints are currently interface stubs and will return a \"501 Not Implemented\" response code when called; the documentation for each of these stub endpoints includes an alert calling this out.</p><p class=\"wt-pb-xs-2\">If you'd like to report an issue or provide feedback on the API design, <a target=\"_blank\" class=\"wt-text-link wt-p-xs-0\" href=\"https://github.com/etsy/open-api/issues/new/choose\">please add an issue in Github</a>. You grant us a license to use your feedback as described in Etsy's primary <a target=\"_blank\" class=\"wt-text-link wt-p-xs-0\" href=\"https://www.etsy.com/legal/terms-of-use\">Terms of Use.</a></p></div>&copy; 2021 Etsy, Inc. All Rights Reserved. Use of this code is subject to Etsy's <a class='wt-text-link wt-p-xs-0' target='_blank' href='https://www.etsy.com/legal/api'>API Developer Terms of Use</a>.",
        "termsOfService": "https://www.etsy.com/legal/api",
        "contact": {
            "email": "developers@etsy.com"
        },
        "version": "3.0.0",
        "x-logo": {
            "url": "https://img0.etsystatic.com/site-assets/open-api/etsy_logo.png",
            "backgroundColor": "#FFFFFF",
            "altText": "Etsy Logo"
        }
    },
    "servers": [
        {
            "url": "https://openapi.etsy.com",
            "description": "Base url for all Integrations endpoints."
        }
    ],
    "security": [
        {
            "api_key": []
        }
    ],
    "tags": [
        {
            "name": "User"
        },
        {
            "name": "UserFeedback"
        },
        {
            "name": "UserAddress"
        },
        {
            "name": "Shop Receipt Transactions"
        },
        {
            "name": "Shop"
        },
        {
            "name": "ShopListing"
        },
        {
            "name": "Shop Section"
        },
        {
            "name": "SellerTaxonomy"
        },
        {
            "name": "Shop Receipt"
        },
        {
            "name": "Payment"
        },
        {
            "name": "Ledger Entry"
        },
        {
            "name": "ShopListing VariationImage"
        },
        {
            "name": "ShopListing Translation"
        },
        {
            "name": "ShopListing ShippingProfile"
        },
        {
            "name": "ShopListing Inventory"
        },
        {
            "name": "ShopListing Offering"
        },
        {
            "name": "ShopListing Product"
        },
        {
            "name": "ShopListing Image"
        },
        {
            "name": "ShopListing File"
        }
    ],
    "x-tagGroups": [
        {
            "name": "Listing Management",
            "tags": [
                "SellerTaxonomy",
                "ShopListing",
                "ShopListing File",
                "ShopListing Image",
                "ShopListing Inventory",
                "ShopListing Offering",
                "ShopListing Product",
                "ShopListing ShippingProfile",
                "ShopListing Translation",
                "ShopListing VariationImage"
            ]
        },
        {
            "name": "Payment Management",
            "tags": ["Ledger Entry", "Payment"]
        },
        {
            "name": "Receipt Management",
            "tags": ["Shop Receipt", "Shop Receipt Transactions"]
        },
        {
            "name": "Shop Management",
            "tags": ["Shop", "Shop Section"]
        },
        {
            "name": "User Management",
            "tags": ["User", "UserAddress", "UserFeedback"]
        }
    ],
    "paths": {
        "/v3/application/feedback": {
            "get": {
                "operationId": "getPublicUserFeedback",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nOpen API V3 endpoint to retrieve UserFeedback written by or received by a User.",
                "tags": ["UserFeedback"],
                "parameters": [
                    {
                        "name": "creator_user_id",
                        "in": "query",
                        "description": "The numeric ID of the user who wrote this feedback.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The numeric ID of the user who wrote this feedback.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "target_user_id",
                        "in": "query",
                        "description": "The numeric ID of the user who received this feedback.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The numeric ID of the user who received this feedback.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "A limit on the number of results to be returned.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "A limit on the number of results to be returned.",
                            "minimum": 1,
                            "maximum": 100,
                            "default": 25
                        }
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The number of items to skip before starting to collect the result set.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The number of items to skip before starting to collect the result set.",
                            "minimum": 0,
                            "default": 0
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of UserFeedback records",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/PublicUserFeedbacks"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["feedback_r"]
                    }
                ]
            }
        },
        "/v3/application/listings": {
            "post": {
                "operationId": "createListing",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nCreates a new listing",
                "tags": ["ShopListing"],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "type": "object",
                                "required": [
                                    "quantity",
                                    "title",
                                    "description",
                                    "price",
                                    "who_made",
                                    "when_made",
                                    "taxonomy_id"
                                ],
                                "properties": {
                                    "quantity": {
                                        "type": "integer"
                                    },
                                    "title": {
                                        "type": "string"
                                    },
                                    "description": {
                                        "type": "string"
                                    },
                                    "price": {
                                        "type": "number",
                                        "format": "float"
                                    },
                                    "who_made": {
                                        "type": "string",
                                        "enum": [
                                            "i_did",
                                            "someone_else",
                                            "collective"
                                        ]
                                    },
                                    "when_made": {
                                        "type": "string",
                                        "enum": [
                                            "made_to_order",
                                            "2020_2020",
                                            "2010_2019",
                                            "2001_2009",
                                            "before_2001",
                                            "2000_2000",
                                            "1990s",
                                            "1980s",
                                            "1970s",
                                            "1960s",
                                            "1950s",
                                            "1940s",
                                            "1930s",
                                            "1920s",
                                            "1910s",
                                            "1900s",
                                            "1800s",
                                            "1700s",
                                            "before_1700"
                                        ]
                                    },
                                    "taxonomy_id": {
                                        "type": "integer",
                                        "minimum": 1
                                    },
                                    "type": {
                                        "type": "string",
                                        "enum": ["physical", "download", "both"],
                                        "default": "physical"
                                    },
                                    "materials": {
                                        "type": "array",
                                        "nullable": true,
                                        "items": {
                                            "type": "string",
                                            "nullable": true
                                        }
                                    },
                                    "shipping_profile_id": {
                                        "type": "integer",
                                        "nullable": true,
                                        "minimum": 1
                                    },
                                    "shop_section_id": {
                                        "type": "integer",
                                        "nullable": true,
                                        "minimum": 1
                                    },
                                    "processing_min": {
                                        "type": "integer",
                                        "nullable": true
                                    },
                                    "processing_max": {
                                        "type": "integer",
                                        "nullable": true
                                    },
                                    "tags": {
                                        "type": "array",
                                        "nullable": true,
                                        "items": {
                                            "type": "string",
                                            "nullable": true
                                        }
                                    },
                                    "recipient": {
                                        "type": "string",
                                        "nullable": true,
                                        "enum": [
                                            "men",
                                            "women",
                                            "unisex_adults",
                                            "teen_boys",
                                            "teen_girls",
                                            "teens",
                                            "boys",
                                            "girls",
                                            "children",
                                            "baby_boys",
                                            "baby_girls",
                                            "babies",
                                            "birds",
                                            "cats",
                                            "dogs",
                                            "pets",
                                            "not_specified"
                                        ]
                                    },
                                    "occasion": {
                                        "type": "string",
                                        "nullable": true,
                                        "enum": [
                                            "anniversary",
                                            "baptism",
                                            "bar_or_bat_mitzvah",
                                            "birthday",
                                            "canada_day",
                                            "chinese_new_year",
                                            "cinco_de_mayo",
                                            "confirmation",
                                            "christmas",
                                            "day_of_the_dead",
                                            "easter",
                                            "eid",
                                            "engagement",
                                            "fathers_day",
                                            "get_well",
                                            "graduation",
                                            "halloween",
                                            "hanukkah",
                                            "housewarming",
                                            "kwanzaa",
                                            "prom",
                                            "july_4th",
                                            "mothers_day",
                                            "new_baby",
                                            "new_years",
                                            "quinceanera",
                                            "retirement",
                                            "st_patricks_day",
                                            "sweet_16",
                                            "sympathy",
                                            "thanksgiving",
                                            "valentines",
                                            "wedding"
                                        ]
                                    },
                                    "styles": {
                                        "type": "array",
                                        "nullable": true,
                                        "items": {
                                            "type": "string",
                                            "nullable": true
                                        }
                                    },
                                    "item_weight": {
                                        "type": "number",
                                        "format": "float",
                                        "nullable": true
                                    },
                                    "item_length": {
                                        "type": "number",
                                        "format": "float",
                                        "nullable": true
                                    },
                                    "item_width": {
                                        "type": "number",
                                        "format": "float",
                                        "nullable": true
                                    },
                                    "item_height": {
                                        "type": "number",
                                        "format": "float",
                                        "nullable": true
                                    },
                                    "item_weight_unit": {
                                        "type": "string",
                                        "nullable": true,
                                        "enum": ["oz", "lb", "g", "kg"]
                                    },
                                    "item_dimensions_unit": {
                                        "type": "string",
                                        "nullable": true,
                                        "enum": [
                                            "in",
                                            "ft",
                                            "mm",
                                            "cm",
                                            "m",
                                            "yd",
                                            "inches"
                                        ]
                                    },
                                    "is_personalizable": {
                                        "type": "boolean"
                                    },
                                    "image_ids": {
                                        "type": "array",
                                        "items": {
                                            "type": "integer",
                                            "minimum": 1
                                        }
                                    },
                                    "state": {
                                        "type": "string",
                                        "enum": [
                                            "active",
                                            "inactive",
                                            "removed",
                                            "draft",
                                            "expired",
                                            "sold_out"
                                        ]
                                    },
                                    "channels": {
                                        "type": "array",
                                        "items": {
                                            "type": "string",
                                            "enum": [
                                                "etsy.com",
                                                "wholesale",
                                                "pattern",
                                                "sell_on_facebook"
                                            ]
                                        }
                                    },
                                    "is_supply": {
                                        "type": "boolean"
                                    },
                                    "is_customizable": {
                                        "type": "boolean"
                                    },
                                    "is_taxable": {
                                        "type": "boolean"
                                    },
                                    "is_private": {
                                        "type": "boolean"
                                    },
                                    "should_auto_renew": {
                                        "type": "boolean"
                                    },
                                    "is_digital": {
                                        "type": "boolean"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "A single ShopListing",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopListing"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            },
            "get": {
                "operationId": "getListings",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nEndpoint to list Listings that belong to a Shop. Listings can be filtered using the 'state' param.",
                "tags": ["ShopListing"],
                "parameters": [
                    {
                        "name": "state",
                        "in": "query",
                        "description": "One of active, removed, sold_out, expired, alchemy, edit, create, private, or unavailable.",
                        "required": true,
                        "schema": {
                            "type": "string",
                            "description": "One of active, removed, sold_out, expired, alchemy, edit, create, private, or unavailable.",
                            "enum": [
                                "active",
                                "inactive",
                                "removed",
                                "draft",
                                "expired",
                                "sold_out"
                            ]
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "A limit on the number of results to be returned.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "A limit on the number of results to be returned.",
                            "minimum": 1,
                            "maximum": 100,
                            "default": 25
                        }
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The number of items to skip before starting to collect the result set.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The number of items to skip before starting to collect the result set.",
                            "minimum": 0,
                            "default": 0
                        }
                    },
                    {
                        "name": "sort_on",
                        "in": "query",
                        "description": "The value to sort a search result of listings on. NOTE: sort_on only works when combined with one of the search options (keywords, region, etc.). ",
                        "required": false,
                        "schema": {
                            "type": "string",
                            "description": "The value to sort a search result of listings on. NOTE: sort_on only works when combined with one of the search options (keywords, region, etc.). ",
                            "enum": ["created", "price", "score"],
                            "default": "created"
                        }
                    },
                    {
                        "name": "sort_order",
                        "in": "query",
                        "description": "The ascending(up) or descending(down) order to sort listings by. NOTE: sort_order only works when combined with one of the search options (keywords, region, etc.).",
                        "required": false,
                        "schema": {
                            "type": "string",
                            "description": "The ascending(up) or descending(down) order to sort listings by. NOTE: sort_order only works when combined with one of the search options (keywords, region, etc.).",
                            "enum": [
                                "asc",
                                "ascending",
                                "desc",
                                "descending",
                                "up",
                                "down"
                            ],
                            "default": "desc"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of Listings",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopListings"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_r"]
                    }
                ]
            }
        },
        "/v3/application/listings/{listing_id}": {
            "delete": {
                "operationId": "deleteListing",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nOpen API V3 endpoint to delete a ShopListing.",
                "tags": ["ShopListing"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single ShopListing",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopListing"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_d"]
                    }
                ]
            },
            "get": {
                "operationId": "getListing",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nGet a listing",
                "tags": ["ShopListing"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single Listing",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopListing"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            },
            "put": {
                "operationId": "updateListing",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nUpdates a ShopListing.",
                "tags": ["ShopListing"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "quantity": {
                                        "type": "integer",
                                        "description": "The quantity of this item available for sale. Note: The quantity is the total number of available offerings. The getInventory method will detail quantities for individual offerings."
                                    },
                                    "title": {
                                        "type": "string",
                                        "description": "The listing's title. This string is valid if it does not match the following pattern: /[^\\p{L}\\p{Nd}\\p{P}\\p{Sm}\\p{Zs}™©®]/u. The characters %, :, & and + can only be used once each."
                                    },
                                    "description": {
                                        "type": "string",
                                        "description": "A description of the item."
                                    },
                                    "price": {
                                        "type": "number",
                                        "description": "The item's price (will be treated as private for sold listings). Note: The price is the minimum possible price. The getInventory method will detail exact prices for available offerings.",
                                        "format": "float"
                                    },
                                    "materials": {
                                        "type": "array",
                                        "description": "A list of materials used in the item. A material is valid if it does not match the pattern: /[^\\p{L}\\p{Nd}\\p{Zs}]/u",
                                        "nullable": true,
                                        "items": {
                                            "type": "string",
                                            "nullable": true
                                        }
                                    },
                                    "is_renew": {
                                        "type": "boolean",
                                        "description": "To renew a listing for another four months, pass the optional parameter renew=true. A listing does not need to be expired to be renewed, however note that each renewal does not take the listing's previous expiration date into account, so any unused time remaining on the listing's old expiration date will be lost. Renewals will result in charges to a user's bill."
                                    },
                                    "shipping_profile_id": {
                                        "type": "integer",
                                        "description": "The numeric ID of the shipping profile associated with the listing.",
                                        "nullable": true,
                                        "minimum": 1
                                    },
                                    "shop_section_id": {
                                        "type": "integer",
                                        "description": "The numeric ID of the shop section for this listing.",
                                        "nullable": true,
                                        "minimum": 1
                                    },
                                    "is_customizable": {
                                        "type": "boolean",
                                        "description": "If this flag is true, a buyer may contact the seller for a customized order. Can only be set when the shop accepts custom orders and defaults to true in that case."
                                    },
                                    "item_weight": {
                                        "type": "number",
                                        "description": "How much the item weighs.",
                                        "format": "float",
                                        "nullable": true
                                    },
                                    "item_length": {
                                        "type": "number",
                                        "description": "How long the item is.",
                                        "format": "float",
                                        "nullable": true
                                    },
                                    "item_width": {
                                        "type": "number",
                                        "description": "How wide the item is.",
                                        "format": "float",
                                        "nullable": true
                                    },
                                    "item_height": {
                                        "type": "number",
                                        "description": "How tall the item is.",
                                        "format": "float",
                                        "nullable": true
                                    },
                                    "item_weight_unit": {
                                        "type": "string",
                                        "description": "The units used to represent the weight of this item.",
                                        "nullable": true,
                                        "enum": ["oz", "lb", "g", "kg"]
                                    },
                                    "item_dimensions_unit": {
                                        "type": "string",
                                        "description": "The units used to represent the dimensions of this item.",
                                        "nullable": true,
                                        "enum": [
                                            "in",
                                            "ft",
                                            "mm",
                                            "cm",
                                            "m",
                                            "yd",
                                            "inches"
                                        ]
                                    },
                                    "is_taxable": {
                                        "type": "boolean",
                                        "description": "If this flag is true, any applicable shop tax rates will be applied to this listing on checkout."
                                    },
                                    "taxonomy_id": {
                                        "type": "integer",
                                        "description": "The seller taxonomy id of the listing",
                                        "minimum": 1
                                    },
                                    "tags": {
                                        "type": "array",
                                        "description": "A list of tags for the item. A tag is valid if it does not match the pattern: /[^\\p{L}\\p{Nd}\\p{Zs}\\-'™©®]/u",
                                        "nullable": true,
                                        "items": {
                                            "type": "string",
                                            "nullable": true
                                        }
                                    },
                                    "who_made": {
                                        "type": "string",
                                        "description": "Who made the item being listed",
                                        "enum": [
                                            "i_did",
                                            "someone_else",
                                            "collective"
                                        ]
                                    },
                                    "when_made": {
                                        "type": "string",
                                        "description": "When was the item made.",
                                        "enum": [
                                            "made_to_order",
                                            "2020_2020",
                                            "2010_2019",
                                            "2001_2009",
                                            "before_2001",
                                            "2000_2000",
                                            "1990s",
                                            "1980s",
                                            "1970s",
                                            "1960s",
                                            "1950s",
                                            "1940s",
                                            "1930s",
                                            "1920s",
                                            "1910s",
                                            "1900s",
                                            "1800s",
                                            "1700s",
                                            "before_1700"
                                        ]
                                    },
                                    "processing_min": {
                                        "type": "integer",
                                        "description": "The minimum number of days for processing for this listing.",
                                        "nullable": true,
                                        "minimum": 0
                                    },
                                    "processing_max": {
                                        "type": "integer",
                                        "description": "The maximum number of days for processing for this listing.",
                                        "nullable": true,
                                        "minimum": 0
                                    },
                                    "featured_rank": {
                                        "type": "integer",
                                        "description": "Position in the featured listings portion of the shop",
                                        "nullable": true
                                    },
                                    "image_ids": {
                                        "type": "array",
                                        "description": "An array of images for the listing, can include up to 10 images.",
                                        "items": {
                                            "type": "integer",
                                            "minimum": 1
                                        }
                                    },
                                    "is_auto_renew": {
                                        "type": "boolean",
                                        "description": "True if this listing has been set to automatically renew."
                                    },
                                    "sku": {
                                        "type": "string",
                                        "description": "A list of distinct SKUs applied to a listing."
                                    },
                                    "is_personalizable": {
                                        "type": "boolean",
                                        "description": "Indicates if listing is personalizable"
                                    },
                                    "is_private": {
                                        "type": "boolean",
                                        "description": "Is this listing a private listing that is intendend for a specific buyer and hidden from shop view."
                                    },
                                    "type": {
                                        "type": "string",
                                        "description": "Indicates whether the listing is physical or a digital download.",
                                        "enum": ["physical", "download", "both"],
                                        "default": "physical"
                                    },
                                    "state": {
                                        "type": "string",
                                        "description": "One of active, removed, sold_out, expired, alchemy, edit, create, private, or unavailable.",
                                        "enum": [
                                            "active",
                                            "inactive",
                                            "removed",
                                            "draft",
                                            "expired",
                                            "sold_out"
                                        ],
                                        "default": "active"
                                    },
                                    "channels": {
                                        "type": "array",
                                        "description": "A channel is a venue for sellers to reach buyers in order to make sales.",
                                        "items": {
                                            "type": "string",
                                            "enum": [
                                                "etsy.com",
                                                "wholesale",
                                                "pattern",
                                                "sell_on_facebook"
                                            ]
                                        },
                                        "default": "etsy.com"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A single ShopListing",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopListing"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            }
        },
        "/v3/application/listings/{listing_id}/files/{listing_file_id}": {
            "delete": {
                "operationId": "deleteListingFile",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nDeletes a ShopListingFile from the given ShopListing. If the ShopListingFile being deleted is the last ShopListingFile for a digital ShopListing, the ShopListing will be converted to a physical ShopListing. Returns the remaining ShopListingFile records associated with the given ShopListing.",
                "tags": ["ShopListing File"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "listing_file_id",
                        "in": "path",
                        "description": "The unique ID of a digital ListingFile associated with a digital ShopListing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of a digital ListingFile associated with a digital ShopListing.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of remaining ShopListingFile resources attached to the Listing.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopListingFiles"
                                }
                            }
                        }
                    },
                    "409": {
                        "description": "There was a request conflict with current state of the target resource. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            },
            "get": {
                "operationId": "getListingFile",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nGet a single ShopListingFile associated with the given digital ShopListing. The endpoint will return an empty result set for physical ShopListing records.",
                "tags": ["ShopListing File"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "listing_file_id",
                        "in": "path",
                        "description": "The unique ID of a digital ListingFile associated with a digital ShopListing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of a digital ListingFile associated with a digital ShopListing.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A ShopListingFile resource.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopListingFile"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_r"]
                    }
                ]
            }
        },
        "/v3/application/listings/{listing_id}/files": {
            "get": {
                "operationId": "getAllListingFiles",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nGet all ShopListingFile records for the given digital ShopListing. This endpoint will return an empty result set for physical ShopListing records.",
                "tags": ["ShopListing File"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of ShopListingFile resources.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopListingFiles"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_r"]
                    }
                ]
            },
            "post": {
                "operationId": "uploadListingFile",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nUpload a new ListingFile, or attach an existing file to the given ShopListing. You must either provide the listing_file_id of an existing ListingFile, or the name and file data of a new ListingFile that you are uploading. If you are attaching a ListingFile to a physical ShopListing, the ShopListing will be converted to a digital ShopListing. This will cause the ShopListing to have free shipping and will remove any variations.",
                "tags": ["ShopListing File"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    }
                ],
                "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "listing_file_id": {
                                        "type": "integer",
                                        "description": "The unique ID of a digital ListingFile associated with a digital ShopListing.",
                                        "minimum": 1
                                    },
                                    "file": {
                                        "type": "string",
                                        "description": "A digital file to upload.",
                                        "format": "binary"
                                    },
                                    "name": {
                                        "type": "string",
                                        "description": "A name for the file being uploaded."
                                    },
                                    "rank": {
                                        "type": "integer",
                                        "description": "The position of the resource in a list, starting at 1.",
                                        "minimum": 1,
                                        "default": 1
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A ShopListingFile resource.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopListingFile"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            }
        },
        "/v3/application/listings/active": {
            "get": {
                "operationId": "findAllListingsActive",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nA list of all active listings on Etsy paginated by their creation date. Without sort_order listings will be returned newest-first by default.",
                "tags": ["ShopListing"],
                "parameters": [
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "A limit on the number of results to be returned.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "A limit on the number of results to be returned.",
                            "minimum": 1,
                            "maximum": 100,
                            "default": 25
                        }
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The number of items to skip before starting to collect the result set.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The number of items to skip before starting to collect the result set.",
                            "minimum": 0,
                            "default": 0
                        }
                    },
                    {
                        "name": "keywords",
                        "in": "query",
                        "description": "Search term or phrase to use to narrow down a set of results for a resource",
                        "required": false,
                        "schema": {
                            "type": "string",
                            "description": "Search term or phrase to use to narrow down a set of results for a resource",
                            "default": null
                        }
                    },
                    {
                        "name": "sort_on",
                        "in": "query",
                        "description": "The value to sort a search result of listings on. NOTE: sort_on only works when combined with one of the search options (keywords, region, etc.). ",
                        "required": false,
                        "schema": {
                            "type": "string",
                            "description": "The value to sort a search result of listings on. NOTE: sort_on only works when combined with one of the search options (keywords, region, etc.). ",
                            "enum": ["created", "price", "score"],
                            "default": "created"
                        }
                    },
                    {
                        "name": "sort_order",
                        "in": "query",
                        "description": "The ascending(up) or descending(down) order to sort listings by. NOTE: sort_order only works when combined with one of the search options (keywords, region, etc.).",
                        "required": false,
                        "schema": {
                            "type": "string",
                            "description": "The ascending(up) or descending(down) order to sort listings by. NOTE: sort_order only works when combined with one of the search options (keywords, region, etc.).",
                            "enum": [
                                "asc",
                                "ascending",
                                "desc",
                                "descending",
                                "up",
                                "down"
                            ],
                            "default": "desc"
                        }
                    },
                    {
                        "name": "min_price",
                        "in": "query",
                        "description": "The minimum price of listings to be returned by a search result",
                        "required": false,
                        "schema": {
                            "type": "number",
                            "description": "The minimum price of listings to be returned by a search result",
                            "format": "float",
                            "default": null
                        }
                    },
                    {
                        "name": "max_price",
                        "in": "query",
                        "description": "The maximum price of listings to be returned by a search result",
                        "required": false,
                        "schema": {
                            "type": "number",
                            "description": "The maximum price of listings to be returned by a search result",
                            "format": "float",
                            "default": null
                        }
                    },
                    {
                        "name": "taxonomy_id",
                        "in": "query",
                        "description": "The seller taxonomy id of the listing",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The seller taxonomy id of the listing",
                            "minimum": 1,
                            "default": null
                        }
                    },
                    {
                        "name": "lat",
                        "in": "query",
                        "description": "A valid numeric latitude, between -90.0 and 90.0",
                        "required": false,
                        "schema": {
                            "type": "number",
                            "description": "A valid numeric latitude, between -90.0 and 90.0",
                            "format": "float",
                            "minimum": -90,
                            "maximum": 90,
                            "default": null
                        }
                    },
                    {
                        "name": "lon",
                        "in": "query",
                        "description": "A valid numeric longitude, between -180.0 and 180.0",
                        "required": false,
                        "schema": {
                            "type": "number",
                            "description": "A valid numeric longitude, between -180.0 and 180.0",
                            "format": "float",
                            "minimum": -180,
                            "maximum": 180,
                            "default": null
                        }
                    },
                    {
                        "name": "region",
                        "in": "query",
                        "description": "An ISO 3166-1 alpha 2 country code. Currently supported values: US, CA, AU, GB, DE, FR, NL, IT, ES, RU, PT, GR, IE, JP, NZ, PL",
                        "required": false,
                        "schema": {
                            "type": "string",
                            "description": "An ISO 3166-1 alpha 2 country code. Currently supported values: US, CA, AU, GB, DE, FR, NL, IT, ES, RU, PT, GR, IE, JP, NZ, PL",
                            "default": null
                        }
                    },
                    {
                        "name": "geo_level",
                        "in": "query",
                        "description": "The geographic level enum(city, state, country) within which to search for listings",
                        "required": false,
                        "schema": {
                            "type": "string",
                            "description": "The geographic level enum(city, state, country) within which to search for listings",
                            "default": "city"
                        }
                    },
                    {
                        "name": "accepts_gift_cards",
                        "in": "query",
                        "description": "Filter for only those listings that accept gift cards",
                        "required": false,
                        "schema": {
                            "type": "boolean",
                            "description": "Filter for only those listings that accept gift cards",
                            "default": false
                        }
                    },
                    {
                        "name": "translate_keywords",
                        "in": "query",
                        "description": "If translate_keywords is true, it allows for non-English language searches in conjuction with 'language'",
                        "required": false,
                        "schema": {
                            "type": "boolean",
                            "description": "If translate_keywords is true, it allows for non-English language searches in conjuction with 'language'",
                            "default": false
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of all active listings on Etsy paginated by their creation date. Without sort_order listings will be returned newest-first by default.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopListings"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/v3/application/shop/{shop_id}/listings/active": {
            "get": {
                "operationId": "findAllActiveListingsByShop",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nA list of all active listings on Etsy paginated by their creation date.",
                "tags": ["ShopListing"],
                "parameters": [
                    {
                        "name": "shop_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Shop.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Shop.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "A limit on the number of results to be returned.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "A limit on the number of results to be returned.",
                            "minimum": 1,
                            "maximum": 100,
                            "default": 25
                        }
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The number of items to skip before starting to collect the result set.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The number of items to skip before starting to collect the result set.",
                            "minimum": 0,
                            "default": 0
                        }
                    },
                    {
                        "name": "keywords",
                        "in": "query",
                        "description": "Search term or phrase to use to narrow down a set of results for a resource",
                        "required": false,
                        "schema": {
                            "type": "string",
                            "description": "Search term or phrase to use to narrow down a set of results for a resource",
                            "default": null
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of all active listings on Etsy paginated by their creation date.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopListings"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/v3/application/listings/{listing_id}/images/{listing_image_id}": {
            "delete": {
                "operationId": "deleteListingImage",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nOpen API V3 endpoint to delete a listing image. A copy of the file remains on our servers, and so a deleted image may be re-associated with the listing without re-uploading the original image; see uploadListingImage.",
                "tags": ["ShopListing Image"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "listing_image_id",
                        "in": "path",
                        "description": "The unique ID of a Listing Image for an Etsy.com Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of a Listing Image for an Etsy.com Listing.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single ListingImage",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingImage"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            }
        },
        "/v3/application/openapi/listings/{listing_id}/images/{listing_image_id}": {
            "get": {
                "operationId": "getListingImage",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nRetrieves a ListingImage resource by ID.",
                "tags": ["ShopListing Image"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "listing_image_id",
                        "in": "path",
                        "description": "The unique ID of a Listing Image for an Etsy.com Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of a Listing Image for an Etsy.com Listing.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single ListingImage",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingImage"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/v3/application/openapi/listings/{listing_id}/images": {
            "get": {
                "operationId": "getListingImages",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nRetrieves all ListingImage resources for Listing.",
                "tags": ["ShopListing Image"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single ListingImage",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingImages"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/v3/application/listings/{listing_id}/images": {
            "post": {
                "operationId": "uploadListingImage",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nUploads a ListingImage.\\n\\nA new ListingImage can be uploaded via the image param. A previously deleted ListingImage can be re-associated with a Listing via the listing_image_id param. Only one param should be included per request; if both are present in the request, the endpoint will upload the provided image.",
                "tags": ["ShopListing Image"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    }
                ],
                "requestBody": {
                    "content": {
                        "multipart/form-data": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "image": {
                                        "type": "string",
                                        "description": "A name for the file being uploaded.",
                                        "format": "binary"
                                    },
                                    "listing_image_id": {
                                        "type": "integer",
                                        "description": "The unique ID of a Listing Image for an Etsy.com Listing.",
                                        "minimum": 1
                                    },
                                    "rank": {
                                        "type": "integer",
                                        "description": "The position of the resource in a list, starting at 1.",
                                        "minimum": 0,
                                        "default": 1
                                    },
                                    "overwrite": {
                                        "type": "boolean",
                                        "description": "Whether or not to replace the existing image at a given rank.",
                                        "default": false
                                    },
                                    "is_watermarked": {
                                        "type": "boolean",
                                        "description": "Whether or not the uploaded image is watermarked.",
                                        "default": false
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A single ListingImage",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingImage"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "409": {
                        "description": "There was a request conflict with current state of the target resource. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            }
        },
        "/v3/application/listings/{listing_id}/inventory": {
            "get": {
                "operationId": "getListingInventory",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nGet the inventory for a listing. When a listing has not been edited using the Etsy.com inventory tools, it will have no inventory records. This endpoint returns SKU data if you're the owner of the inventory records being fetched.",
                "tags": ["ShopListing Inventory"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single ListingInventory record.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingInventory"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_r"]
                    }
                ]
            },
            "put": {
                "operationId": "updateListingInventory",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nUpdate the inventory for a listing. The update will fail if the supplied values for product sku and offering quantity and price are incompatible with the supplied values of the 'on_property_*' fields. When supplying a price, supply a float equivalent to amount divided by divisor as specified in the Money resource.",
                "tags": ["ShopListing Inventory"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "required": ["products"],
                                "properties": {
                                    "products": {
                                        "type": "array",
                                        "description": "Should be a JSON array of products, even if you only send a single product. All field names in the JSON blob should be lowercase.",
                                        "items": {
                                            "type": "object",
                                            "properties": {
                                                "sku": {
                                                    "type": "string",
                                                    "nullable": true
                                                },
                                                "property_values": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "object",
                                                        "properties": {
                                                            "property_id": {
                                                                "type": "integer",
                                                                "minimum": 1
                                                            },
                                                            "value_ids": {
                                                                "type": "array",
                                                                "items": {
                                                                    "type": "integer",
                                                                    "minimum": 1
                                                                }
                                                            },
                                                            "scale_id": {
                                                                "type": "integer",
                                                                "nullable": true,
                                                                "minimum": 1
                                                            },
                                                            "property_name": {
                                                                "type": "string",
                                                                "nullable": true
                                                            },
                                                            "values": {
                                                                "type": "array",
                                                                "items": {
                                                                    "type": "string"
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                "offerings": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "object",
                                                        "properties": {
                                                            "price": {
                                                                "type": "number",
                                                                "format": "float"
                                                            },
                                                            "quantity": {
                                                                "type": "integer"
                                                            },
                                                            "is_enabled": {
                                                                "type": "boolean"
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "price_on_property": {
                                        "type": "array",
                                        "description": "An array of the property_ids of the properties which price depends on (if any).",
                                        "items": {
                                            "type": "integer"
                                        }
                                    },
                                    "quantity_on_property": {
                                        "type": "array",
                                        "description": "An array of the property_ids of the properties which quantity depends on (if any).",
                                        "items": {
                                            "type": "integer"
                                        }
                                    },
                                    "sku_on_property": {
                                        "type": "array",
                                        "description": "An array of the property_id of the properties which sku depends on (if any).",
                                        "items": {
                                            "type": "integer"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A single ListingInventory record.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingInventory"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            }
        },
        "/v3/application/listings/{listing_id}/products/{product_id}": {
            "get": {
                "operationId": "getListingProduct",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nOpen API V3 endpoint to retrieve a ListingProduct by ID.",
                "tags": ["ShopListing Product"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The listing to return a ListingProduct for.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The listing to return a ListingProduct for.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "product_id",
                        "in": "path",
                        "description": "The product to return a ListingProduct for.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The product to return a ListingProduct for.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single ListingInventoryProduct",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingInventoryProduct"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            }
        },
        "/v3/application/listings/{listing_id}/products/{product_id}/offerings/{product_offering_id}": {
            "get": {
                "operationId": "getListingOffering",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nGet an Offering for a Listing",
                "tags": ["ShopListing Offering"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "product_id",
                        "in": "path",
                        "description": "",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "product_offering_id",
                        "in": "path",
                        "description": "",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single ListingInventoryProductOffering",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingInventoryProductOffering"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/v3/application/listings/{listing_id}/properties/{property_id}": {
            "get": {
                "operationId": "getListingProperty",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nRetrieves a listing's property",
                "tags": ["ShopListing"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "property_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy ListingProperty.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy ListingProperty.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single ListingProperty.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingPropertyValue"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            },
            "put": {
                "operationId": "updateListingProperty",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nUpdate or populate properties for a Listing. Either values or value_ids is required.",
                "tags": ["ShopListing"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "property_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy ListingProperty.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy ListingProperty.",
                            "minimum": 1
                        }
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "value_ids": {
                                        "type": "array",
                                        "description": "The unique IDs of multiple Etsy ListingProperty values.",
                                        "items": {
                                            "type": "integer",
                                            "minimum": 1
                                        }
                                    },
                                    "values": {
                                        "type": "array",
                                        "description": "The values for multiple Etsy ListingProperty values.",
                                        "items": {
                                            "type": "string"
                                        }
                                    },
                                    "scale_id": {
                                        "type": "integer",
                                        "description": "The numeric ID of a single Etsy.com measurement scale.",
                                        "minimum": 1
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A single ListingProperty.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingPropertyValue"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            }
        },
        "/v3/application/listings/{listing_id}/properties": {
            "get": {
                "operationId": "getListingProperties",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nGet a listing's properties",
                "tags": ["ShopListing"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A Listing's Properties",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingPropertyValues"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/v3/application/listings/shipping-profiles": {
            "post": {
                "operationId": "createListingShippingProfile",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nCreates a new ShippingProfile. You can pass a country iso code or a region when creating a ShippingProfile, but not both.If you leave them both blank then the destination is assumed to be \"everywhere\". ",
                "tags": ["ShopListing ShippingProfile"],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "type": "object",
                                "required": [
                                    "title",
                                    "origin_country_iso",
                                    "primary_cost",
                                    "secondary_cost"
                                ],
                                "properties": {
                                    "title": {
                                        "type": "string"
                                    },
                                    "origin_country_iso": {
                                        "type": "string",
                                        "format": "ISO 3166-1 alpha-2"
                                    },
                                    "primary_cost": {
                                        "type": "number",
                                        "format": "float"
                                    },
                                    "secondary_cost": {
                                        "type": "number",
                                        "format": "float"
                                    },
                                    "destination_country_iso": {
                                        "type": "string",
                                        "format": "ISO 3166-1 alpha-2",
                                        "default": null
                                    },
                                    "destination_region": {
                                        "type": "string",
                                        "description": "The code of the region to which the listing ships. A region represents a set of countries. Supported regions are Europe Union and Non-Europe Union (countries in Europe not in EU).",
                                        "enum": ["eu", "non_eu", "none"],
                                        "default": "none"
                                    },
                                    "min_processing_days": {
                                        "type": "integer",
                                        "minimum": 0,
                                        "default": null
                                    },
                                    "max_processing_days": {
                                        "type": "integer",
                                        "minimum": 0,
                                        "default": null
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A single ShippingProfile",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingShippingProfile"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            }
        },
        "/v3/application/listings/shipping-profiles/{shipping_profile_id}": {
            "delete": {
                "operationId": "deleteListingShippingProfile",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nOpen API V3 endpoint to delete a ShippingProfile by given id.",
                "tags": ["ShopListing ShippingProfile"],
                "parameters": [
                    {
                        "name": "shipping_profile_id",
                        "in": "path",
                        "description": "The numeric ID of the shipping profile associated with the listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The numeric ID of the shipping profile associated with the listing.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single ShippingProfile",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingShippingProfile"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            },
            "get": {
                "operationId": "getListingShippingProfile",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nOpen API V3 endpoint to retrieve a ListingShippingProfile by id.",
                "tags": ["ShopListing ShippingProfile"],
                "parameters": [
                    {
                        "name": "shipping_profile_id",
                        "in": "path",
                        "description": "The numeric ID of the shipping profile associated with the listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The numeric ID of the shipping profile associated with the listing.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single ShippingProfile",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingShippingProfile"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_r"]
                    }
                ]
            },
            "put": {
                "operationId": "updateListingShippingProfile",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nOpen API V3 endpoint to update a ShippingProfile.",
                "tags": ["ShopListing ShippingProfile"],
                "parameters": [
                    {
                        "name": "shipping_profile_id",
                        "in": "path",
                        "description": "The numeric ID of the shipping profile associated with the listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The numeric ID of the shipping profile associated with the listing.",
                            "minimum": 1
                        }
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "title": {
                                        "type": "string",
                                        "description": "The name of this shipping profile."
                                    },
                                    "origin_country_iso": {
                                        "type": "string",
                                        "description": "The ISO code of the country from which the listing ships.",
                                        "format": "ISO 3166-1 alpha-2"
                                    },
                                    "min_processing_days": {
                                        "type": "integer",
                                        "description": "The minimum number of days for processing the listing.",
                                        "minimum": 0
                                    },
                                    "max_processing_days": {
                                        "type": "integer",
                                        "description": "The maximum number of days for processing the listing.",
                                        "minimum": 0
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A single ShippingProfile",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingShippingProfile"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            }
        },
        "/v3/application/listings/shipping-profiles/destinations": {
            "post": {
                "operationId": "createListingShippingProfileDestination",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nCreates a new ListingShippingProfileDestination.",
                "tags": ["ShopListing ShippingProfile"],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "type": "object",
                                "required": [
                                    "shipping_profile_id",
                                    "primary_cost",
                                    "secondary_cost"
                                ],
                                "properties": {
                                    "shipping_profile_id": {
                                        "type": "integer",
                                        "description": "The numeric ID of the shipping profile associated with the listing.",
                                        "minimum": 1
                                    },
                                    "primary_cost": {
                                        "type": "number",
                                        "description": "The cost of shipping to this country/region alone.",
                                        "format": "float"
                                    },
                                    "secondary_cost": {
                                        "type": "number",
                                        "description": "The cost of shipping to this country/region with another item.",
                                        "format": "float"
                                    },
                                    "destination_country_iso": {
                                        "type": "string",
                                        "description": "The ISO code of the country to which the listing ships.",
                                        "format": "ISO 3166-1 alpha-2",
                                        "default": null
                                    },
                                    "destination_region": {
                                        "type": "string",
                                        "description": "The code of the region to which the listing ships. A region represents a set of countries. Supported regions are Europe Union and Non-Europe Union (countries in Europe not in EU).",
                                        "enum": ["eu", "non_eu", "none"],
                                        "default": "none"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A single ListingShippingProfileDestination",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingShippingProfileDestination"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            }
        },
        "/v3/application/listings/shipping-profiles/destinations/{shipping_profile_destination_id}": {
            "delete": {
                "operationId": "deleteListingShippingProfileDestination",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nOpen API V3 endpoint to delete a ListingShippingProfileDestination by the given id.",
                "tags": ["ShopListing ShippingProfile"],
                "parameters": [
                    {
                        "name": "shipping_profile_destination_id",
                        "in": "path",
                        "description": "The numeric ID of the shipping profile destination associated with the shipping profile of a listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The numeric ID of the shipping profile destination associated with the shipping profile of a listing.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single ListingShippingProfileDestination",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingShippingProfileDestination"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            },
            "put": {
                "operationId": "updateListingShippingProfileDestination",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nUpdates an existing ListingShippingProfileDestination.",
                "tags": ["ShopListing ShippingProfile"],
                "parameters": [
                    {
                        "name": "shipping_profile_destination_id",
                        "in": "path",
                        "description": "The numeric ID of the shipping profile destination associated with the shipping profile of a listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The numeric ID of the shipping profile destination associated with the shipping profile of a listing.",
                            "minimum": 1
                        }
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "primary_cost": {
                                        "type": "number",
                                        "description": "The cost of shipping to this country/region alone.",
                                        "format": "float"
                                    },
                                    "secondary_cost": {
                                        "type": "number",
                                        "description": "The cost of shipping to this country/region with another item.",
                                        "format": "float"
                                    },
                                    "destination_country_iso": {
                                        "type": "string",
                                        "description": "The ISO code of the country to which the listing ships.",
                                        "format": "ISO 3166-1 alpha-2",
                                        "default": null
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A single ListingShippingProfileDestination",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingShippingProfileDestination"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            }
        },
        "/v3/application/listings/shipping-profiles/{shipping_profile_id}/destinations": {
            "get": {
                "operationId": "getListingShippingProfileDestinationsByShippingProfile",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nOpen API V3 endpoint to retrieve a set of ListingShippingProfileDestination objects associated to a ListingShippingProfile.",
                "tags": ["ShopListing ShippingProfile"],
                "parameters": [
                    {
                        "name": "shipping_profile_id",
                        "in": "path",
                        "description": "The numeric ID of the shipping profile associated with the listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The numeric ID of the shipping profile associated with the listing.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "A limit on the number of results to be returned.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "A limit on the number of results to be returned.",
                            "minimum": 1,
                            "maximum": 100,
                            "default": 25
                        }
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The number of items to skip before starting to collect the result set.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The number of items to skip before starting to collect the result set.",
                            "minimum": 0,
                            "default": 0
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of ListingShippingProfileDestination resources",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingShippingProfileDestinations"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_r"]
                    }
                ]
            }
        },
        "/v3/application/shipping-profiles": {
            "get": {
                "operationId": "getListingShippingProfiles",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nOpen API V3 endpoint to retrieve a set of ShippingProfile objects associated to a User.",
                "tags": ["ShopListing ShippingProfile"],
                "responses": {
                    "200": {
                        "description": "A list of ShippingProfiles",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingShippingProfiles"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_r"]
                    }
                ]
            }
        },
        "/v3/application/listings/shipping-profiles/{shipping_profile_id}/upgrades": {
            "post": {
                "operationId": "createListingShippingProfileUpgrade",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nCreates a new ListingShippingProfileUpgrade.",
                "tags": ["ShopListing ShippingProfile"],
                "parameters": [
                    {
                        "name": "shipping_profile_id",
                        "in": "path",
                        "description": "The numeric ID of the shipping profile associated with the listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The numeric ID of the shipping profile associated with the listing.",
                            "minimum": 1
                        }
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "type": "object",
                                "required": [
                                    "type",
                                    "value",
                                    "price",
                                    "secondary_price"
                                ],
                                "properties": {
                                    "type": {
                                        "type": "string",
                                        "description": "The type of the shipping upgrade. Domestic (0) or international (1).",
                                        "enum": ["0", "1"]
                                    },
                                    "value": {
                                        "type": "string",
                                        "description": "Name of the shipping upgrade, e.g. USPS Priority."
                                    },
                                    "price": {
                                        "type": "number",
                                        "description": "Additional cost of adding the shipping upgrade.",
                                        "format": "float"
                                    },
                                    "secondary_price": {
                                        "type": "number",
                                        "description": "Additional cost of adding the shipping upgrade for each additional item.",
                                        "format": "float"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A single ListingShippingProfileUpgrade",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingShippingProfileUpgrade"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            },
            "get": {
                "operationId": "getListingShippingProfileUpgrades",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nRetrieve a set of ListingShippingProfileUpgrades associated to a ShippingProfile.",
                "tags": ["ShopListing ShippingProfile"],
                "parameters": [
                    {
                        "name": "shipping_profile_id",
                        "in": "path",
                        "description": "The numeric ID of the shipping profile associated with the listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The numeric ID of the shipping profile associated with the listing.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A set of ListingShippingProfileUpgrades",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingShippingProfileUpgrades"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_r"]
                    }
                ]
            }
        },
        "/v3/application/listings/{listing_id}/transactions": {
            "get": {
                "operationId": "getShopReceiptTransactionsByListing",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nOpen API V3 to retrieve a set of ShopTransaction resources associated to a Listing.",
                "tags": ["Shop Receipt Transactions"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "A limit on the number of results to be returned.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "A limit on the number of results to be returned.",
                            "minimum": 1,
                            "maximum": 100,
                            "default": 25
                        }
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The number of items to skip before starting to collect the result set.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The number of items to skip before starting to collect the result set.",
                            "minimum": 0,
                            "default": 0
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of Transactions",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopReceiptTransactions"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["transactions_r"]
                    }
                ]
            }
        },
        "/v3/application/listings/{listing_id}/translations/{language}": {
            "post": {
                "operationId": "createListingTranslation",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nCreates a ListingTranslation by listing_id and language",
                "tags": ["ShopListing Translation"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "language",
                        "in": "path",
                        "description": "The IETF language tag for the language of this translation. Ex: de, en, es, fr, it, ja, nl, pl, pt, ru.",
                        "required": true,
                        "schema": {
                            "type": "string",
                            "description": "The IETF language tag for the language of this translation. Ex: de, en, es, fr, it, ja, nl, pl, pt, ru."
                        }
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "title": {
                                        "type": "string",
                                        "description": "The title of the Listing of this Translation."
                                    },
                                    "description": {
                                        "type": "string",
                                        "description": "The description of the Listing of this Translation."
                                    },
                                    "tags": {
                                        "type": "array",
                                        "description": "The tags of the Listing of this Translation.",
                                        "items": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A single ListingTranslation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingTranslation"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            },
            "get": {
                "operationId": "getListingTranslation",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nGet a Translation for a Listing in the given language",
                "tags": ["ShopListing Translation"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "language",
                        "in": "path",
                        "description": "The IETF language tag for the language of this translation. Ex: de, en, es, fr, it, ja, nl, pl, pt, ru.",
                        "required": true,
                        "schema": {
                            "type": "string",
                            "description": "The IETF language tag for the language of this translation. Ex: de, en, es, fr, it, ja, nl, pl, pt, ru."
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single ListingTranslation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingTranslation"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            },
            "put": {
                "operationId": "updateListingTranslation",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nUpdates a ListingTranslation by listing_id and language",
                "tags": ["ShopListing Translation"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "language",
                        "in": "path",
                        "description": "The IETF language tag for the language of this translation. Ex: de, en, es, fr, it, ja, nl, pl, pt, ru.",
                        "required": true,
                        "schema": {
                            "type": "string",
                            "description": "The IETF language tag for the language of this translation. Ex: de, en, es, fr, it, ja, nl, pl, pt, ru."
                        }
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "title": {
                                        "type": "string",
                                        "description": "The title of the Listing of this Translation."
                                    },
                                    "description": {
                                        "type": "string",
                                        "description": "The description of the Listing of this Translation."
                                    },
                                    "tags": {
                                        "type": "array",
                                        "description": "The tags of the Listing of this Translation.",
                                        "items": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A single ListingTranslation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingTranslation"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            }
        },
        "/v3/application/listings/{listing_id}/variation-images": {
            "get": {
                "operationId": "getListingVariationImages",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nGets all variation images on a listing.",
                "tags": ["ShopListing VariationImage"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of ListingVariationImages",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingVariationImages"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            },
            "post": {
                "operationId": "updateVariationImages",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nCreates variation images on a listing.\\n\\nvariation_images is an array with inputs for the property_id, value_id, and image_id fields. image_ids are associated with a ListingImage on the Listing associated with the provided listing_id. property_id and value_id pairs are associated with a ListingProduct on the Listing associated with the provided listing_id. variation_images does not contain any duplicates. variation_images does not contain more than one property_id as variation images can only be associated on one property. The update overwrites all existing variation images on a listing, so if your request is successful, the variation images on the listing will be exactly those you specify. ",
                "tags": ["ShopListing VariationImage"],
                "parameters": [
                    {
                        "name": "listing_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Listing.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Listing.",
                            "minimum": 1
                        }
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "required": ["variation_images"],
                                "properties": {
                                    "variation_images": {
                                        "type": "array",
                                        "description": "A list of variation image data.",
                                        "items": {
                                            "type": "object",
                                            "properties": {
                                                "property_id": {
                                                    "type": "integer",
                                                    "minimum": 1
                                                },
                                                "value_id": {
                                                    "type": "integer",
                                                    "minimum": 1
                                                },
                                                "image_id": {
                                                    "type": "integer",
                                                    "minimum": 1
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A single ListingVariationImage",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ListingVariationImages"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "409": {
                        "description": "There was a request conflict with current state of the target resource. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["listings_w"]
                    }
                ]
            }
        },
        "/v3/application/payment-account/ledger-entries": {
            "get": {
                "operationId": "getShopPaymentAccountLedgerEntries",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nGet a Shop Payment Account Ledger's Entries",
                "tags": ["Ledger Entry"],
                "parameters": [
                    {
                        "name": "min_created",
                        "in": "query",
                        "description": "Minimum unix timestamp for when this resource was created.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "Minimum unix timestamp for when this resource was created.",
                            "minimum": 946684800
                        }
                    },
                    {
                        "name": "max_created",
                        "in": "query",
                        "description": "Maximum unix timestamp for when this resource was created.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "Maximum unix timestamp for when this resource was created.",
                            "minimum": 946684800
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "A limit on the number of results to be returned.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "A limit on the number of results to be returned.",
                            "minimum": 1,
                            "maximum": 100,
                            "default": 25
                        }
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The number of items to skip before starting to collect the result set.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The number of items to skip before starting to collect the result set.",
                            "minimum": 0,
                            "default": 0
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of PaymentAccountLedgerEntries",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/PaymentAccountLedgerEntries"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["transactions_r"]
                    }
                ]
            }
        },
        "/v3/application/payment-account/ledger-entries/payments": {
            "get": {
                "operationId": "getPaymentAccountLedgerEntryPayments",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nGet a Payment from a PaymentAccount Ledger Entry ID, if applicable",
                "tags": ["Payment"],
                "parameters": [
                    {
                        "name": "ledger_entry_ids",
                        "in": "query",
                        "description": "",
                        "required": true,
                        "schema": {
                            "type": "array",
                            "items": {
                                "type": "integer",
                                "minimum": 1
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of Payments",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Payments"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["transactions_r"]
                    }
                ]
            }
        },
        "/v3/application/receipts/{receipt_id}/payments": {
            "get": {
                "operationId": "getShopPaymentByReceiptId",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nOpen API V3 to get a Payment by Shop Receipt ID",
                "tags": ["Payment"],
                "parameters": [
                    {
                        "name": "receipt_id",
                        "in": "path",
                        "description": "",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single Payment",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Payments"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["transactions_r"]
                    }
                ]
            }
        },
        "/v3/application/payments": {
            "get": {
                "operationId": "getPayments",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nGet Payments by their IDs",
                "tags": ["Payment"],
                "parameters": [
                    {
                        "name": "payment_ids",
                        "in": "query",
                        "description": "A comma-separated array of Payment IDs",
                        "required": true,
                        "schema": {
                            "type": "array",
                            "description": "A comma-separated array of Payment IDs",
                            "items": {
                                "type": "integer",
                                "minimum": 1
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of Payments",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Payments"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["transactions_r"]
                    }
                ]
            }
        },
        "/v3/application/receipts/{receipt_id}": {
            "get": {
                "operationId": "getShopReceipt",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nOpen API V3 endpoint to retreive a Receipt by id",
                "tags": ["Shop Receipt"],
                "parameters": [
                    {
                        "name": "receipt_id",
                        "in": "path",
                        "description": "",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single ShopReceipt",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopReceipt"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["transactions_r"]
                    }
                ]
            }
        },
        "/v3/application/receipts": {
            "get": {
                "operationId": "getShopReceipts",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nOpen API V3 endpoint to find ShopReceipt for a given Shop",
                "tags": ["Shop Receipt"],
                "parameters": [
                    {
                        "name": "min_created",
                        "in": "query",
                        "description": "Minimum unix timestamp for when this resource was created.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "Minimum unix timestamp for when this resource was created.",
                            "minimum": 946684800,
                            "default": null
                        }
                    },
                    {
                        "name": "max_created",
                        "in": "query",
                        "description": "Maximum unix timestamp for when this resource was created.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "Maximum unix timestamp for when this resource was created.",
                            "minimum": 946684800,
                            "default": null
                        }
                    },
                    {
                        "name": "min_last_modified",
                        "in": "query",
                        "description": "Minimum unix timestamp for when this resource was last modified.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "Minimum unix timestamp for when this resource was last modified.",
                            "minimum": 946684800,
                            "default": null
                        }
                    },
                    {
                        "name": "max_last_modified",
                        "in": "query",
                        "description": "Maximum unix timestamp for when this resource was last modified.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "Maximum unix timestamp for when this resource was last modified.",
                            "minimum": 946684800,
                            "default": null
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "A limit on the number of results to be returned.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "A limit on the number of results to be returned.",
                            "minimum": 1,
                            "maximum": 100,
                            "default": 25
                        }
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The number of items to skip before starting to collect the result set.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The number of items to skip before starting to collect the result set.",
                            "minimum": 0,
                            "default": 0
                        }
                    },
                    {
                        "name": "was_paid",
                        "in": "query",
                        "description": "If true, the receipt has been paid.",
                        "required": false,
                        "schema": {
                            "type": "boolean",
                            "description": "If true, the receipt has been paid."
                        }
                    },
                    {
                        "name": "was_shipped",
                        "in": "query",
                        "description": "If true, the receipt has been shipped.",
                        "required": false,
                        "schema": {
                            "type": "boolean",
                            "description": "If true, the receipt has been shipped."
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of ShopReceipts",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopReceipts"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["transactions_r"]
                    }
                ]
            }
        },
        "/v3/application/receipts/{receipt_id}/tracking": {
            "post": {
                "operationId": "createReceiptShipment",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nSubmit tracking information for a ShopReceipt. If send_bcc is true, the shipping notification will be sent to the seller as well. Each time you successfully submit tracking info, a notification email will be sent to the buyer User. If tracking_code and carrier_name aren't sent the receipt is marked as shipped only. Creates a ShopReceiptShipment for the given receipt_id. ",
                "tags": ["Shop Receipt"],
                "parameters": [
                    {
                        "name": "receipt_id",
                        "in": "path",
                        "description": "The receipt to submit tracking for.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The receipt to submit tracking for.",
                            "minimum": 1
                        }
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "tracking_code": {
                                        "type": "string",
                                        "description": "The tracking code for this receipt."
                                    },
                                    "carrier_name": {
                                        "type": "string",
                                        "description": "The carrier name for this receipt."
                                    },
                                    "send_bcc": {
                                        "type": "boolean",
                                        "description": "If true, the shipping notification will be sent to the seller as well"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A single ShopReceipt",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopReceipt"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "409": {
                        "description": "There was a request conflict with current state of the target resource. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["transactions_w"]
                    }
                ]
            }
        },
        "/v3/application/receipts/{receipt_id}/transactions": {
            "get": {
                "operationId": "getShopReceiptTransactionsByReceipt",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nRetrieves a set of ShopTransaction objects associated to a ShopReceipt.",
                "tags": ["Shop Receipt Transactions"],
                "parameters": [
                    {
                        "name": "receipt_id",
                        "in": "path",
                        "description": "The receipt to return transactions for.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The receipt to return transactions for.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of Transactions",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopReceiptTransactions"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["transactions_r"]
                    }
                ]
            }
        },
        "/v3/application/seller-taxonomy/nodes": {
            "get": {
                "operationId": "getSellerTaxonomyNodes",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nGet a list of SellerTaxonomyNodes",
                "tags": ["SellerTaxonomy"],
                "responses": {
                    "200": {
                        "description": "A set of SellerTaxonomyNode resources.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/SellerTaxonomyNodes"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/v3/application/seller-taxonomy/nodes/{taxonomy_id}/properties": {
            "get": {
                "operationId": "getPropertiesByTaxonomyId",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nGet a list of TaxonomyNodeProperty resources given a taxonomy node ID.",
                "tags": ["SellerTaxonomy"],
                "parameters": [
                    {
                        "name": "taxonomy_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy TaxonomyNode.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy TaxonomyNode.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of TaxonomyNodeProperty resources",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/TaxonomyNodeProperties"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/v3/application/shops/feedback": {
            "get": {
                "operationId": "getShopUserFeedback",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nOpen API V3 endpoint to retrieve UserFeedback left for a Shop.",
                "tags": ["UserFeedback"],
                "parameters": [
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "A limit on the number of results to be returned.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "A limit on the number of results to be returned.",
                            "minimum": 1,
                            "maximum": 100,
                            "default": 25
                        }
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The number of items to skip before starting to collect the result set.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The number of items to skip before starting to collect the result set.",
                            "minimum": 0,
                            "default": 0
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of UserFeedback records",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/UserFeedbacks"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["feedback_r"]
                    }
                ]
            }
        },
        "/v3/application/shops/{shop_id}": {
            "get": {
                "operationId": "getShop",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nOpen API V3 to retrieve a shop by ID.",
                "tags": ["Shop"],
                "parameters": [
                    {
                        "name": "shop_id",
                        "in": "path",
                        "description": "",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single Shop",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Shop"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            },
            "put": {
                "operationId": "updateShop",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nOpen API V3 to update a shop by ID.",
                "tags": ["Shop"],
                "parameters": [
                    {
                        "name": "shop_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Shop.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Shop.",
                            "minimum": 1
                        }
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "title": {
                                        "type": "string",
                                        "description": "A brief heading for the shop's main page."
                                    },
                                    "announcement": {
                                        "type": "string",
                                        "description": "An announcement to buyers that displays on the shop's homepage."
                                    },
                                    "sale_message": {
                                        "type": "string",
                                        "description": "A message that is sent to users who buy from this shop."
                                    },
                                    "policy_welcome": {
                                        "type": "string",
                                        "description": "The introductory text from the top of the seller's policies page."
                                    },
                                    "policy_payment": {
                                        "type": "string",
                                        "description": "The seller's policy on payment."
                                    },
                                    "policy_shipping": {
                                        "type": "string",
                                        "description": "The seller's policy on shipping."
                                    },
                                    "policy_refunds": {
                                        "type": "string",
                                        "description": "The seller's policy on refunds."
                                    },
                                    "policy_additional": {
                                        "type": "string",
                                        "description": "Any additional policy information the seller provides."
                                    },
                                    "policy_privacy": {
                                        "type": "string",
                                        "description": "Privacy policy information the seller provides."
                                    },
                                    "policy_seller_info": {
                                        "type": "string",
                                        "description": "The shop's seller information."
                                    },
                                    "digital_sale_message": {
                                        "type": "string",
                                        "description": "A message that is sent to users who buy a digital item from this shop."
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A single Shop",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Shop"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["shops_r", "shops_w"]
                    }
                ]
            }
        },
        "/v3/application/users/{user_id}/shops": {
            "get": {
                "operationId": "getShopByOwnerUserId",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nOpen API V3 to retrieve the Shop associated to a User.",
                "tags": ["Shop"],
                "parameters": [
                    {
                        "name": "user_id",
                        "in": "path",
                        "description": "The user to return a shop for.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The user to return a shop for.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single Shop",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Shop"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/v3/application/shops": {
            "get": {
                "operationId": "getShops",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nOpen API V3 endpoint to find Shop resources. If there is a shop_name parameter, finds Shop resources with shop_name starting with this value.",
                "tags": ["Shop"],
                "parameters": [
                    {
                        "name": "shop_name",
                        "in": "query",
                        "description": "The shop's name.",
                        "required": false,
                        "schema": {
                            "type": "string",
                            "description": "The shop's name."
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "A limit on the number of results to be returned.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "A limit on the number of results to be returned.",
                            "minimum": 1,
                            "maximum": 100,
                            "default": 25
                        }
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The number of items to skip before starting to collect the result set.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The number of items to skip before starting to collect the result set.",
                            "minimum": 0,
                            "default": 0
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of Shops",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Shops"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/v3/application/shops/sections": {
            "post": {
                "operationId": "createShopSection",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nOpen API V3 endpoint to create a new ShopSection.",
                "tags": ["Shop Section"],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "title": {
                                        "type": "string",
                                        "description": "The title of the section."
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A ShopSection resource",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopSection"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "There was a problem with the request data. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["shops_w"]
                    }
                ]
            }
        },
        "/v3/application/shops/{shop_id}/sections/{shop_section_id}": {
            "get": {
                "operationId": "getShopSection",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nOpen API V3 to retrieve a ShopSection resource by id and shop_id.",
                "tags": ["Shop Section"],
                "parameters": [
                    {
                        "name": "shop_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Shop.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Shop.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "shop_section_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Shop Section.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Shop Section.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A ShopSection resource",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopSection"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/v3/application/shops/{shop_id}/sections": {
            "get": {
                "operationId": "getShopSections",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nOpen API V3 to retrieve a set of ShopSection objects associated to a Shop.",
                "tags": ["Shop Section"],
                "parameters": [
                    {
                        "name": "shop_id",
                        "in": "path",
                        "description": "",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of ShopSections",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopSections"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/v3/application/shops/{shop_id}/sections/listings": {
            "get": {
                "operationId": "getListingsByShopSectionId",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nFetch all Listings within a Shop's ShopSection.",
                "tags": ["ShopListing"],
                "parameters": [
                    {
                        "name": "shop_id",
                        "in": "path",
                        "description": "The unique ID of an Etsy Shop.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The unique ID of an Etsy Shop.",
                            "minimum": 1
                        }
                    },
                    {
                        "name": "shop_section_ids",
                        "in": "query",
                        "description": "A list of unique Etsy Shop Section IDs.",
                        "required": true,
                        "schema": {
                            "type": "array",
                            "description": "A list of unique Etsy Shop Section IDs.",
                            "items": {
                                "type": "integer",
                                "minimum": 1
                            }
                        }
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "A limit on the number of results to be returned.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "A limit on the number of results to be returned.",
                            "minimum": 1,
                            "maximum": 100,
                            "default": 25
                        }
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The number of items to skip before starting to collect the result set.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The number of items to skip before starting to collect the result set.",
                            "minimum": 0,
                            "default": 0
                        }
                    },
                    {
                        "name": "sort_on",
                        "in": "query",
                        "description": "The value to sort a search result of listings on. NOTE: sort_on only works when combined with one of the search options (keywords, region, etc.). ",
                        "required": false,
                        "schema": {
                            "type": "string",
                            "description": "The value to sort a search result of listings on. NOTE: sort_on only works when combined with one of the search options (keywords, region, etc.). ",
                            "default": "created"
                        }
                    },
                    {
                        "name": "sort_order",
                        "in": "query",
                        "description": "The ascending(up) or descending(down) order to sort listings by. NOTE: sort_order only works when combined with one of the search options (keywords, region, etc.).",
                        "required": false,
                        "schema": {
                            "type": "string",
                            "description": "The ascending(up) or descending(down) order to sort listings by. NOTE: sort_order only works when combined with one of the search options (keywords, region, etc.).",
                            "enum": [
                                "asc",
                                "ascending",
                                "desc",
                                "descending",
                                "up",
                                "down"
                            ],
                            "default": "desc"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of Listing resources.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopListings"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/v3/application/transactions/{transaction_id}": {
            "get": {
                "operationId": "getShopReceiptTransaction",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nRetrieves a ShopTransaction by id.",
                "tags": ["Shop Receipt Transactions"],
                "parameters": [
                    {
                        "name": "transaction_id",
                        "in": "path",
                        "description": "The transaction to return.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The transaction to return.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single Transaction",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopReceiptTransaction"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["transactions_r"]
                    }
                ]
            }
        },
        "/v3/application/transactions": {
            "get": {
                "operationId": "getShopReceiptTransactionsByShop",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nOpen API V3 to retrieve a set of ShopTransaction resources associated to a Shop.",
                "tags": ["Shop Receipt Transactions"],
                "parameters": [
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "A limit on the number of results to be returned.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "A limit on the number of results to be returned.",
                            "minimum": 1,
                            "maximum": 100,
                            "default": 25
                        }
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The number of items to skip before starting to collect the result set.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The number of items to skip before starting to collect the result set.",
                            "minimum": 0,
                            "default": 0
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of Transactions",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ShopReceiptTransactions"
                                }
                            }
                        }
                    },
                    "403": {
                        "description": "The request attempted to perform an operation it is not allowed to. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["transactions_r"]
                    }
                ]
            }
        },
        "/v3/application/user/addresses/{user_address_id}": {
            "get": {
                "operationId": "getUserAddress",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nOpen API V3 endpoint to retrieve a UserAddress for a User.",
                "tags": ["UserAddress"],
                "parameters": [
                    {
                        "name": "user_address_id",
                        "in": "path",
                        "description": "The numeric ID of the user's address.",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "description": "The numeric ID of the user's address.",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single UserAddress",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/UserAddress"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["address_r"]
                    }
                ]
            }
        },
        "/v3/application/user/addresses": {
            "get": {
                "operationId": "getUserAddresses",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nOpen API V3 endpoint to retrieve UserAddresses for a User.",
                "tags": ["UserAddress"],
                "parameters": [
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "A limit on the number of results to be returned.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "A limit on the number of results to be returned.",
                            "minimum": 1,
                            "maximum": 100,
                            "default": 25
                        }
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The number of items to skip before starting to collect the result set.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The number of items to skip before starting to collect the result set.",
                            "minimum": 0,
                            "default": 0
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of UserAddress records",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/UserAddresses"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["address_r"]
                    }
                ]
            }
        },
        "/v3/application/users/feedback": {
            "get": {
                "operationId": "getMemberUserFeedback",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-01 wt-mr-xs-2\"> Feedback only </span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">Development for this endpoint is in progress. It will only return a 501 response.</p></div>\n\nOpen API V3 endpoint to retrieve UserFeedback left by a User.",
                "tags": ["UserFeedback"],
                "parameters": [
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "A limit on the number of results to be returned.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "A limit on the number of results to be returned.",
                            "minimum": 1,
                            "maximum": 100,
                            "default": 25
                        }
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The number of items to skip before starting to collect the result set.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "description": "The number of items to skip before starting to collect the result set.",
                            "minimum": 0,
                            "default": 0
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A list of UserFeedback records",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/UserFeedbacks"
                                }
                            }
                        }
                    },
                    "501": {
                        "description": "This endpoint is not functional at this time.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["feedback_r"]
                    }
                ]
            }
        },
        "/v3/application/users/{user_id}": {
            "get": {
                "operationId": "getUser",
                "description": "<div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notification-03 wt-mr-xs-2\">Alpha</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/issues/new/choose\" target=\"_blank\" rel=\"noopener noreferrer\">Give feedback</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for use as defined below, but is access-controlled and may change significantly before launch. If you'd like access, please email <a href=\"mailto:developers@etsy.com\" class=\"wt-text-link\" target=\"_blank\">developers@etsy.com</a>.</p></div>\n\nOpen API V3 to retrieve a user by ID.",
                "tags": ["User"],
                "parameters": [
                    {
                        "name": "user_id",
                        "in": "path",
                        "description": "",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "minimum": 1
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single User",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/User"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "A resource could not be found. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "The server encountered an internal error. See the error message for details.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorSchema"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": [],
                        "oauth2": ["email_r"]
                    }
                ]
            }
        }
    },
    "components": {
        "securitySchemes": {
            "api_key": {
                "type": "apiKey",
                "name": "x-api-key",
                "in": "header",
                "description": "Every request to a v3 API endpoint must include this data, with your application's API key as the value."
            },
            "oauth2": {
                "type": "oauth2",
                "description": "The v3 API supports authenticating via OAuth 2.0. More information about Etsy's specific implementation of OAuth2 can be found [here](/developers/documentation/getting_started/oauth2).",
                "flows": {
                    "authorizationCode": {
                        "authorizationUrl": "https://www.etsy.com/oauth/connect",
                        "tokenUrl": "https://openapi.etsy.com/v3/public/oauth/token",
                        "scopes": {
                            "address_r": "see billing and shipping addresses",
                            "address_w": "update billing and shipping addresses",
                            "billing_r": "see all billing statement data",
                            "cart_r": "read shopping carts",
                            "cart_w": "add/remove from shopping carts",
                            "email_r": "Read a member's email address",
                            "favorites_r": "see private favorites",
                            "favorites_w": "add/remove favorites",
                            "feedback_r": "see purchase info in feedback",
                            "listings_d": "delete listings",
                            "listings_r": "see all listings (including expired etc)",
                            "listings_w": "create/edit listings",
                            "profile_r": "see all profile data",
                            "profile_w": "update user profile, avatar, etc",
                            "recommend_r": "see recommended listings",
                            "recommend_w": "accept/reject recommended listings",
                            "shops_r": "see private shop info",
                            "shops_w": "update shop",
                            "transactions_r": "see all checkout/payment data",
                            "transactions_w": "update receipts"
                        }
                    }
                }
            }
        },
        "schemas": {
            "PublicUserFeedbacks": {
                "type": "object",
                "description": "Represents several UserFeedback records.",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "description": "The number of UserFeedback records being returned.",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "description": "An array of UserFeedback resources.",
                        "items": {
                            "$ref": "#/components/schemas/PublicUserFeedback"
                        }
                    }
                }
            },
            "PublicUserFeedback": {
                "type": "object",
                "description": "Represents feedback left by one user for another regarding a transaction.",
                "required": ["feedback_id", "create_timestamp", "message", "value"],
                "properties": {
                    "feedback_id": {
                        "type": "integer",
                        "description": "The numeric ID for this feedback record.",
                        "minimum": 1
                    },
                    "create_timestamp": {
                        "type": "integer",
                        "description": "The date and time the transaction was created, in epoch seconds.",
                        "minimum": 946684800
                    },
                    "message": {
                        "type": "string",
                        "description": "A message left by the author, explaining the feedback."
                    },
                    "value": {
                        "type": "integer",
                        "description": "The feedback's value; 1 is positive, -1 is negative, and 0 is neutral."
                    }
                }
            },
            "ErrorSchema": {
                "type": "object",
                "required": ["error"],
                "properties": {
                    "error": {
                        "type": "string"
                    }
                }
            },
            "ShopListing": {
                "type": "object",
                "description": "A Listing from a Shop. It shows the Listing information",
                "required": [
                    "listing_id",
                    "user_id",
                    "shop_id",
                    "title",
                    "description",
                    "state",
                    "creation_timestamp",
                    "ending_timestamp",
                    "original_creation_timestamp",
                    "last_modified_timestamp",
                    "state_timestamp",
                    "quantity",
                    "shop_section_id",
                    "featured_rank",
                    "url",
                    "views",
                    "num_favorers",
                    "non_taxable",
                    "is_customizable",
                    "listing_type",
                    "tags",
                    "materials",
                    "shipping_template_id",
                    "processing_min",
                    "processing_max",
                    "who_made",
                    "when_made",
                    "item_weight",
                    "item_weight_unit",
                    "item_length",
                    "item_width",
                    "item_height",
                    "item_dimensions_unit",
                    "is_private",
                    "recipient",
                    "occasion",
                    "style",
                    "file_data",
                    "has_variations",
                    "should_auto_renew",
                    "language",
                    "price"
                ],
                "properties": {
                    "listing_id": {
                        "type": "integer",
                        "description": "The listing's numeric ID.",
                        "minimum": 1
                    },
                    "user_id": {
                        "type": "integer",
                        "description": "The numeric ID of the user who posted the item.",
                        "minimum": 1
                    },
                    "shop_id": {
                        "type": "integer",
                        "description": "The shop ID associated with the listing",
                        "minimum": 1
                    },
                    "title": {
                        "type": "string",
                        "description": "The listing's title. This string is valid if it does not match the following pattern: /[^\\p{L}\\p{Nd}\\p{P}\\p{Sm}\\p{Zs}™©®]/u. The characters %, :, & and + can only be used once each."
                    },
                    "description": {
                        "type": "string",
                        "description": "A description of the item."
                    },
                    "state": {
                        "type": "string",
                        "description": "The listing's state.",
                        "enum": [
                            "active",
                            "inactive",
                            "removed",
                            "draft",
                            "expired",
                            "sold_out"
                        ]
                    },
                    "creation_timestamp": {
                        "type": "integer",
                        "description": "Creation time, in epoch seconds.",
                        "minimum": 946684800
                    },
                    "ending_timestamp": {
                        "type": "integer",
                        "description": "The listing's expiration date and time, in epoch seconds.",
                        "minimum": 946684800
                    },
                    "original_creation_timestamp": {
                        "type": "integer",
                        "description": "The date and time the listing was originally posted, in epoch seconds.",
                        "minimum": 946684800
                    },
                    "last_modified_timestamp": {
                        "type": "integer",
                        "description": "The date and time the listing was updated, in epoch seconds.",
                        "minimum": 946684800
                    },
                    "state_timestamp": {
                        "type": "integer",
                        "description": "The time at which the listing last changed state.",
                        "minimum": 946684800
                    },
                    "quantity": {
                        "type": "integer",
                        "description": "The quantity of this item available for sale.",
                        "minimum": 0
                    },
                    "shop_section_id": {
                        "type": "integer",
                        "description": "The numeric ID of the shop section for this listing, can be null",
                        "nullable": true,
                        "minimum": 1
                    },
                    "featured_rank": {
                        "type": "integer",
                        "description": "Position in the Featured Listings portion of the shop."
                    },
                    "url": {
                        "type": "string",
                        "description": "The full URL to the listing's page on Etsy."
                    },
                    "views": {
                        "type": "integer",
                        "description": "The number of times the listing has been viewed on Etsy.com (does not include API views).",
                        "minimum": 0
                    },
                    "num_favorers": {
                        "type": "integer",
                        "description": "The number of members who've marked this Listing as a favorite.",
                        "minimum": 0
                    },
                    "non_taxable": {
                        "type": "boolean",
                        "description": "If this flag is true, any applicable shop tax rates will not be applied to this listing on checkout."
                    },
                    "is_customizable": {
                        "type": "boolean",
                        "description": "If this flag is true, a buyer may contact the seller for a customized order. Can only be set when the shop accepts custom orders and defaults to true in that case."
                    },
                    "listing_type": {
                        "type": "boolean",
                        "description": "True if this listing is for a digital download."
                    },
                    "tags": {
                        "type": "array",
                        "description": "A list of tags for the item. A tag is valid if it does not match the pattern: /[^\\p{L}\\p{Nd}\\p{Zs}\\-'™©®]/u",
                        "items": {
                            "type": "string"
                        }
                    },
                    "materials": {
                        "type": "array",
                        "description": "A list of materials used in the item. A material is valid if it does not match the pattern: /[^\\p{L}\\p{Nd}\\p{Zs}]/u",
                        "items": {
                            "type": "string"
                        }
                    },
                    "shipping_template_id": {
                        "type": "integer",
                        "description": "The numeric ID of the shipping template associated with the listing.",
                        "nullable": true,
                        "minimum": 1
                    },
                    "processing_min": {
                        "type": "integer",
                        "description": "The minimum number of days for processing for this listing.",
                        "nullable": true,
                        "minimum": 0
                    },
                    "processing_max": {
                        "type": "integer",
                        "description": "The maximum number of days for processing for this listing.",
                        "nullable": true,
                        "minimum": 0
                    },
                    "who_made": {
                        "type": "string",
                        "description": "Who made the item being listed.",
                        "nullable": true,
                        "enum": ["i_did", "someone_else", "collective"]
                    },
                    "when_made": {
                        "type": "string",
                        "description": "When was the item made.",
                        "nullable": true,
                        "enum": [
                            "made_to_order",
                            "2020_2020",
                            "2010_2019",
                            "2001_2009",
                            "before_2001",
                            "2000_2000",
                            "1990s",
                            "1980s",
                            "1970s",
                            "1960s",
                            "1950s",
                            "1940s",
                            "1930s",
                            "1920s",
                            "1910s",
                            "1900s",
                            "1800s",
                            "1700s",
                            "before_1700"
                        ]
                    },
                    "item_weight": {
                        "type": "number",
                        "description": "How much the item weighs.",
                        "format": "float",
                        "nullable": true
                    },
                    "item_weight_unit": {
                        "type": "string",
                        "description": "The units used to represent the dimensions of this item.",
                        "nullable": true,
                        "enum": ["oz", "lb", "g", "kg"]
                    },
                    "item_length": {
                        "type": "number",
                        "description": "How long the item is.",
                        "format": "float",
                        "nullable": true
                    },
                    "item_width": {
                        "type": "number",
                        "description": "How wide the item is.",
                        "format": "float",
                        "nullable": true
                    },
                    "item_height": {
                        "type": "number",
                        "description": "How tall the item is.",
                        "format": "float",
                        "nullable": true
                    },
                    "item_dimensions_unit": {
                        "type": "string",
                        "description": "The units used to represent the dimensions of this item.",
                        "nullable": true,
                        "enum": ["in", "ft", "mm", "cm", "m", "yd", "inches"]
                    },
                    "is_private": {
                        "type": "boolean",
                        "description": "Is this listing a private listing that is intended for a specific buyer and hidden from shop view. *Note*: This field is experimental and may change at any time."
                    },
                    "recipient": {
                        "type": "string",
                        "description": "Who is this listing for.",
                        "nullable": true,
                        "enum": [
                            "men",
                            "women",
                            "unisex_adults",
                            "teen_boys",
                            "teen_girls",
                            "teens",
                            "boys",
                            "girls",
                            "children",
                            "baby_boys",
                            "baby_girls",
                            "babies",
                            "birds",
                            "cats",
                            "dogs",
                            "pets",
                            "not_specified"
                        ]
                    },
                    "occasion": {
                        "type": "string",
                        "description": "What is the occasion for this listing.",
                        "nullable": true,
                        "enum": [
                            "anniversary",
                            "baptism",
                            "bar_or_bat_mitzvah",
                            "birthday",
                            "canada_day",
                            "chinese_new_year",
                            "cinco_de_mayo",
                            "confirmation",
                            "christmas",
                            "day_of_the_dead",
                            "easter",
                            "eid",
                            "engagement",
                            "fathers_day",
                            "get_well",
                            "graduation",
                            "halloween",
                            "hanukkah",
                            "housewarming",
                            "kwanzaa",
                            "prom",
                            "july_4th",
                            "mothers_day",
                            "new_baby",
                            "new_years",
                            "quinceanera",
                            "retirement",
                            "st_patricks_day",
                            "sweet_16",
                            "sympathy",
                            "thanksgiving",
                            "valentines",
                            "wedding"
                        ]
                    },
                    "style": {
                        "type": "array",
                        "description": "Style of this listing. Each style is a free-form text string such as \"Formal\", or \"Steampunk\". A Listing may have up to two styles. A style is valid if it does not match the pattern: /[^\\p{L}\\p{Nd}\\p{Zs}]/u",
                        "items": {
                            "type": "string"
                        }
                    },
                    "file_data": {
                        "type": "string",
                        "description": "Written description of the files attached to this digital listing."
                    },
                    "has_variations": {
                        "type": "boolean",
                        "description": "Variations available for this Listing."
                    },
                    "should_auto_renew": {
                        "type": "boolean",
                        "description": "True if this listing has been set to automatic renewals."
                    },
                    "language": {
                        "type": "string",
                        "description": "The IETF language tag (e.g. 'fr') for the language in which the listing is returned.",
                        "nullable": true
                    },
                    "price": {
                        "$ref": "#/components/schemas/Money"
                    }
                }
            },
            "Money": {
                "type": "object",
                "description": "A representation of an amount of money.",
                "required": ["amount", "divisor", "currency_code"],
                "properties": {
                    "amount": {
                        "type": "integer",
                        "description": "The amount of represented by this data."
                    },
                    "divisor": {
                        "type": "integer",
                        "description": "The divisor to render the amount.",
                        "minimum": 0
                    },
                    "currency_code": {
                        "type": "string",
                        "description": "The ISO currency code for this data."
                    }
                }
            },
            "ShopListingFiles": {
                "type": "object",
                "description": "Represents several ShopListingFiles.",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "description": "The number of ShopListingFiles being returned..",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "description": "An array of ShopListingFile resources.",
                        "items": {
                            "$ref": "#/components/schemas/ShopListingFile"
                        }
                    }
                }
            },
            "ShopListingFile": {
                "type": "object",
                "description": "A file attached to a digital ShopListing.",
                "required": [
                    "listing_file_id",
                    "listing_id",
                    "rank",
                    "filename",
                    "filesize",
                    "size_bytes",
                    "filetype",
                    "create_timestamp"
                ],
                "properties": {
                    "listing_file_id": {
                        "type": "integer",
                        "description": "The ID of the ShopListingFile.",
                        "minimum": 1
                    },
                    "listing_id": {
                        "type": "integer",
                        "description": "The ID of the ShopListing that the ShopListingFile belongs to.",
                        "minimum": 1
                    },
                    "rank": {
                        "type": "integer",
                        "description": "The display rank of the ShopListingFile.",
                        "minimum": 0
                    },
                    "filename": {
                        "type": "string",
                        "description": "The name of the ShopListingFile."
                    },
                    "filesize": {
                        "type": "string",
                        "description": "The size of the ShopListingFile in a human-readable format."
                    },
                    "size_bytes": {
                        "type": "integer",
                        "description": "The size of the ShopListingFile in raw bytes.",
                        "minimum": 0
                    },
                    "filetype": {
                        "type": "string",
                        "description": "The ShopListingFile's mimetype."
                    },
                    "create_timestamp": {
                        "type": "integer",
                        "description": "The time when this ShopListingFile was uploaded, in epoch seconds.",
                        "minimum": 946684800
                    }
                }
            },
            "ShopListings": {
                "type": "object",
                "description": "A set of ShopListing resources.",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "description": "The number of ShopListing resources found.",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "description": "The ShopListing resources found.",
                        "items": {
                            "$ref": "#/components/schemas/ShopListing"
                        }
                    }
                }
            },
            "ListingImage": {
                "type": "object",
                "description": "A photograph of a listing for sale.",
                "required": [
                    "listing_id",
                    "listing_image_id",
                    "hex_code",
                    "red",
                    "green",
                    "blue",
                    "hue",
                    "saturation",
                    "brightness",
                    "is_black_and_white",
                    "creation_tsz",
                    "rank",
                    "url_75x75",
                    "url_170x135",
                    "url_570xN",
                    "url_fullxfull",
                    "full_height",
                    "full_width"
                ],
                "properties": {
                    "listing_id": {
                        "type": "integer",
                        "description": "The numeric ID of the ListingImage.",
                        "minimum": 1
                    },
                    "listing_image_id": {
                        "type": "integer",
                        "description": "The numeric ID of the Listing the ListingImage belongs to.",
                        "minimum": 1
                    },
                    "hex_code": {
                        "type": "string",
                        "description": "The image's average color, in webhex notation.",
                        "nullable": true
                    },
                    "red": {
                        "type": "integer",
                        "description": "The image's average red value, 0-255 (RGB color).",
                        "minimum": 0
                    },
                    "green": {
                        "type": "integer",
                        "description": "The image's average green value, 0-255 (RGB color).",
                        "minimum": 0
                    },
                    "blue": {
                        "type": "integer",
                        "description": "The image's average blue value, 0-255 (RGB color).",
                        "minimum": 0
                    },
                    "hue": {
                        "type": "integer",
                        "description": "The image's average hue, 0-360 (HSV color).",
                        "minimum": 0
                    },
                    "saturation": {
                        "type": "integer",
                        "description": "The image's average saturation, 0-100 (HSV color).",
                        "minimum": 0
                    },
                    "brightness": {
                        "type": "integer",
                        "description": "The image's average brightness, 0-100 (HSV color).",
                        "minimum": 0
                    },
                    "is_black_and_white": {
                        "type": "boolean",
                        "description": "True if the image is in black & white."
                    },
                    "creation_tsz": {
                        "type": "integer",
                        "description": "Creation time, in epoch seconds.",
                        "minimum": 0
                    },
                    "rank": {
                        "type": "integer",
                        "description": "Display order.",
                        "minimum": 0
                    },
                    "url_75x75": {
                        "type": "string",
                        "description": "The url to a 75x75 thumbnail of the image."
                    },
                    "url_170x135": {
                        "type": "string",
                        "description": "The url to a 170x135 thumbnail of the image."
                    },
                    "url_570xN": {
                        "type": "string",
                        "description": "The url to a thumbnail of the image, no more than 570px width by variable height."
                    },
                    "url_fullxfull": {
                        "type": "string",
                        "description": "The url to the full-size image, up to 3000px in each dimension."
                    },
                    "full_height": {
                        "type": "integer",
                        "description": "Height of the image returned by url_fullxfull.",
                        "minimum": 0
                    },
                    "full_width": {
                        "type": "integer",
                        "description": "Width of the image returned by url_fullxfull.",
                        "minimum": 0
                    }
                }
            },
            "ListingImages": {
                "type": "object",
                "description": "Represents several ListingImages.",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/ListingImage"
                        }
                    }
                }
            },
            "ListingInventory": {
                "type": "object",
                "description": "A representation of a listing's inventory.",
                "required": [
                    "products",
                    "price_on_property",
                    "quantity_on_property",
                    "sku_on_property"
                ],
                "properties": {
                    "products": {
                        "type": "array",
                        "description": "The products available for this listing.",
                        "items": {
                            "$ref": "#/components/schemas/ListingInventoryProduct"
                        }
                    },
                    "price_on_property": {
                        "type": "array",
                        "description": "Which properties control price?",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "quantity_on_property": {
                        "type": "array",
                        "description": "Which properties control quantity?",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "sku_on_property": {
                        "type": "array",
                        "description": "Which properties control SKU?",
                        "items": {
                            "type": "integer"
                        }
                    }
                }
            },
            "ListingInventoryProduct": {
                "type": "object",
                "description": "A representation of a product for a listing.",
                "required": [
                    "product_id",
                    "sku",
                    "is_deleted",
                    "offerings",
                    "property_values"
                ],
                "properties": {
                    "product_id": {
                        "type": "integer",
                        "description": "The ID for the Product",
                        "minimum": 1
                    },
                    "sku": {
                        "type": "string",
                        "description": "The SKU for the Product"
                    },
                    "is_deleted": {
                        "type": "boolean",
                        "description": "Whether or not the Product is deleted"
                    },
                    "offerings": {
                        "type": "array",
                        "description": "ProductOffering data for this Product",
                        "items": {
                            "$ref": "#/components/schemas/ListingInventoryProductOffering"
                        }
                    },
                    "property_values": {
                        "type": "array",
                        "description": "PropertyValue data for this Product",
                        "items": {
                            "$ref": "#/components/schemas/ListingPropertyValue"
                        }
                    }
                }
            },
            "ListingInventoryProductOffering": {
                "type": "object",
                "description": "A representation of an offering for a listing.",
                "required": [
                    "offering_id",
                    "quantity",
                    "is_enabled",
                    "is_deleted",
                    "price"
                ],
                "properties": {
                    "offering_id": {
                        "type": "integer",
                        "description": "The ID for the ProductOffering",
                        "minimum": 1
                    },
                    "quantity": {
                        "type": "integer",
                        "description": "The quantity the ProductOffering",
                        "minimum": 0
                    },
                    "is_enabled": {
                        "type": "boolean",
                        "description": "Whether or not the offering can be shown to buyers."
                    },
                    "is_deleted": {
                        "type": "boolean",
                        "description": "Whether or not the offering has been deleted."
                    },
                    "price": {
                        "$ref": "#/components/schemas/Money"
                    }
                }
            },
            "ListingPropertyValue": {
                "type": "object",
                "description": "A representation of structured data values.",
                "required": [
                    "property_id",
                    "property_name",
                    "scale_id",
                    "scale_name",
                    "value_ids",
                    "values"
                ],
                "properties": {
                    "property_id": {
                        "type": "integer",
                        "description": "The numeric ID of the Property.",
                        "minimum": 1
                    },
                    "property_name": {
                        "type": "string",
                        "description": "The name of the Property."
                    },
                    "scale_id": {
                        "type": "integer",
                        "description": "The numeric ID of the scale (if any).",
                        "nullable": true,
                        "minimum": 1
                    },
                    "scale_name": {
                        "type": "string",
                        "description": "The label used to describe the chosen scale (if any).",
                        "nullable": true
                    },
                    "value_ids": {
                        "type": "array",
                        "description": "The numeric IDs of the Property values",
                        "items": {
                            "type": "integer",
                            "minimum": 1
                        }
                    },
                    "values": {
                        "type": "array",
                        "description": "The Property values",
                        "items": {
                            "type": "string"
                        }
                    }
                }
            },
            "ListingPropertyValues": {
                "type": "object",
                "description": "Represents several ListingPropertyValues.",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/ListingPropertyValue"
                        }
                    }
                }
            },
            "ListingShippingProfile": {
                "type": "object",
                "description": "Represents a profile used to set a listing's shipping information. Please note that it's not possible to create calculated shipping templates via the API. However, you can associate calculated shipping profiles created from Shop Manager with listings using the API.",
                "required": [
                    "shipping_profile_id",
                    "title",
                    "user_id",
                    "min_processing_days",
                    "max_processing_days",
                    "processing_days_display_label",
                    "origin_country_iso",
                    "shipping_profile_destinations"
                ],
                "properties": {
                    "shipping_profile_id": {
                        "type": "integer",
                        "description": "The numeric ID of this shipping profile.",
                        "minimum": 1
                    },
                    "title": {
                        "type": "string",
                        "description": "The name of this shipping profile."
                    },
                    "user_id": {
                        "type": "integer",
                        "description": "The numeric ID of the user who owns this shipping profile.",
                        "minimum": 1
                    },
                    "min_processing_days": {
                        "type": "integer",
                        "description": "The minimum number of days for processing the listing.",
                        "nullable": true,
                        "minimum": 0
                    },
                    "max_processing_days": {
                        "type": "integer",
                        "description": "The maximum number of days for processing the listing.",
                        "nullable": true,
                        "minimum": 0
                    },
                    "processing_days_display_label": {
                        "type": "string",
                        "description": "Translated display label for processing days."
                    },
                    "origin_country_iso": {
                        "type": "string",
                        "description": "The ISO code of the country from which the listing ships.",
                        "format": "ISO 3166-1 alpha-2"
                    },
                    "shipping_profile_destinations": {
                        "type": "array",
                        "description": "Set of destinations of this shipping profile.",
                        "items": {
                            "$ref": "#/components/schemas/ListingShippingProfileDestination"
                        }
                    }
                }
            },
            "ListingShippingProfileDestination": {
                "type": "object",
                "description": "A ShippingProfileDestination represents a destination corresponding to its ShippingProfile",
                "required": [
                    "shipping_profile_entry_id",
                    "shipping_profile_id",
                    "origin_country_iso",
                    "destination_country_iso",
                    "destination_region",
                    "primary_cost",
                    "secondary_cost"
                ],
                "properties": {
                    "shipping_profile_entry_id": {
                        "type": "integer",
                        "description": "The numeric ID of this shipping profile entry.",
                        "minimum": 1
                    },
                    "shipping_profile_id": {
                        "type": "integer",
                        "description": "The numeric ID of the profile this entry belongs to.",
                        "minimum": 1
                    },
                    "origin_country_iso": {
                        "type": "string",
                        "description": "The ISO code of the country from which the listing ships.",
                        "format": "ISO 3166-1 alpha-2"
                    },
                    "destination_country_iso": {
                        "type": "string",
                        "description": "The ISO code of the country to which the listing ships (optional). If missing, these fees apply to all destinations."
                    },
                    "destination_region": {
                        "type": "string",
                        "description": "The code of the region to which the listing ships. A region represents a set of countries.",
                        "enum": ["eu", "non_eu", "none"]
                    },
                    "primary_cost": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "secondary_cost": {
                        "$ref": "#/components/schemas/Money"
                    }
                }
            },
            "ListingShippingProfileDestinations": {
                "type": "object",
                "description": "Represents several ListingShippingProfileDestinations.",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/ListingShippingProfileDestination"
                        }
                    }
                }
            },
            "ListingShippingProfiles": {
                "type": "object",
                "description": "Represents several ListingShippingProfiles.",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/ListingShippingProfile"
                        }
                    }
                }
            },
            "ListingShippingProfileUpgrade": {
                "type": "object",
                "description": "A representation of shipping upgrade info.",
                "required": [
                    "shipping_profile_id",
                    "value_id",
                    "value",
                    "type",
                    "rank",
                    "language",
                    "price",
                    "secondary_price"
                ],
                "properties": {
                    "shipping_profile_id": {
                        "type": "integer",
                        "description": "The numeric ID of the parent shipping profile.",
                        "minimum": 1
                    },
                    "value_id": {
                        "type": "integer",
                        "description": "The identifier for the value.",
                        "minimum": 1
                    },
                    "value": {
                        "type": "string",
                        "description": "Name of the shipping upgrade, e.g. USPS Priority."
                    },
                    "type": {
                        "type": "string",
                        "description": "The type of the shipping upgrade.",
                        "enum": ["0", "1"]
                    },
                    "rank": {
                        "type": "integer",
                        "description": "The display rank.",
                        "minimum": 0
                    },
                    "language": {
                        "type": "string",
                        "description": "The language of the shipping ugprade."
                    },
                    "price": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "secondary_price": {
                        "$ref": "#/components/schemas/Money"
                    }
                }
            },
            "ListingShippingProfileUpgrades": {
                "type": "object",
                "description": "Represents several ListingShippingProfileUpgrades.",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/ListingShippingProfileUpgrade"
                        }
                    }
                }
            },
            "ShopReceiptTransactions": {
                "type": "object",
                "description": "A set of ShopReceiptTransaction resources",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "description": "The number of ShopReceiptTransaction resources found."
                    },
                    "results": {
                        "type": "array",
                        "description": "The ShopReceiptTransaction resources found.",
                        "items": {
                            "$ref": "#/components/schemas/ShopReceiptTransaction"
                        }
                    }
                }
            },
            "ShopReceiptTransaction": {
                "type": "object",
                "description": "ShopReceiptTransaction objects associated to a ShopReceipt. One ShopReceiptTransaction per listing purchased in a ShopReceipt order.",
                "required": [
                    "transaction_id",
                    "title",
                    "description",
                    "seller_user_id",
                    "buyer_user_id",
                    "create_timestamp",
                    "paid_timestamp",
                    "shipped_timestamp",
                    "quantity",
                    "listing_image_id",
                    "receipt_id",
                    "is_digital",
                    "file_data",
                    "listing_id",
                    "seller_feedback_id",
                    "buyer_feedback_id",
                    "transaction_type",
                    "product_id",
                    "price",
                    "shipping_cost"
                ],
                "properties": {
                    "transaction_id": {
                        "type": "integer",
                        "description": "The numeric ID for this transaction.",
                        "minimum": 1
                    },
                    "title": {
                        "type": "string",
                        "description": "The title of the listing for this transaction."
                    },
                    "description": {
                        "type": "string",
                        "description": "The description of the listing for this transaction."
                    },
                    "seller_user_id": {
                        "type": "integer",
                        "description": "The numeric ID for the seller of this transaction.",
                        "minimum": 1
                    },
                    "buyer_user_id": {
                        "type": "integer",
                        "description": "The numeric ID for the buyer of this transaction.",
                        "minimum": 1
                    },
                    "create_timestamp": {
                        "type": "integer",
                        "description": "The date and time the transaction was created, in epoch seconds.",
                        "minimum": 946684800
                    },
                    "paid_timestamp": {
                        "type": "integer",
                        "description": "The date and time the transaction was paid, in epoch seconds.",
                        "nullable": true,
                        "minimum": 946684800
                    },
                    "shipped_timestamp": {
                        "type": "integer",
                        "description": "The date and time the transaction was shipped, in epoch seconds.",
                        "nullable": true,
                        "minimum": 946684800
                    },
                    "quantity": {
                        "type": "integer",
                        "description": "The quantity of items in this transaction.",
                        "minimum": 0
                    },
                    "listing_image_id": {
                        "type": "integer",
                        "description": "The numeric ID of the primary listing image for this transaction.",
                        "nullable": true,
                        "minimum": 1
                    },
                    "receipt_id": {
                        "type": "integer",
                        "description": "The numeric ID for the receipt associated to this transaction.",
                        "minimum": 1
                    },
                    "is_digital": {
                        "type": "boolean",
                        "description": "True if this listing is for a digital download."
                    },
                    "file_data": {
                        "type": "string",
                        "description": "Written description of the files attached to this digital listing."
                    },
                    "listing_id": {
                        "type": "integer",
                        "description": "The numeric ID for this listing associated to this transaction.",
                        "minimum": 1
                    },
                    "seller_feedback_id": {
                        "type": "integer",
                        "description": "The numeric ID of seller's feedback.",
                        "nullable": true,
                        "minimum": 1
                    },
                    "buyer_feedback_id": {
                        "type": "integer",
                        "description": "The numeric ID for the buyer's feedback.",
                        "nullable": true,
                        "minimum": 1
                    },
                    "transaction_type": {
                        "type": "string",
                        "description": "The type of transaction, usually \"listing\""
                    },
                    "product_id": {
                        "type": "integer",
                        "description": "The numeric ID for the purchased ListingProduct",
                        "nullable": true,
                        "minimum": 1
                    },
                    "price": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "shipping_cost": {
                        "$ref": "#/components/schemas/Money"
                    }
                }
            },
            "ListingTranslation": {
                "type": "object",
                "description": "Represents the translation data for a Listing.",
                "required": [
                    "listing_id",
                    "language",
                    "title",
                    "description",
                    "tags"
                ],
                "properties": {
                    "listing_id": {
                        "type": "integer",
                        "description": "The numeric ID for the Listing.",
                        "minimum": 1
                    },
                    "language": {
                        "type": "string",
                        "description": "The IETF language tag (e.g. 'fr') for the language of this translation."
                    },
                    "title": {
                        "type": "string",
                        "description": "The title of the Listing of this Translation."
                    },
                    "description": {
                        "type": "string",
                        "description": "The description of the Listing of this Translation."
                    },
                    "tags": {
                        "type": "array",
                        "description": "The tags of the Listing of this Translation.",
                        "items": {
                            "type": "string"
                        }
                    }
                }
            },
            "ListingVariationImages": {
                "type": "object",
                "description": "Represents several ListingVariationImages.",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/ListingVariationImage"
                        }
                    }
                }
            },
            "ListingVariationImage": {
                "type": "object",
                "description": "A representation of the associations of variations and images on a listing.",
                "required": ["property_id", "value_id", "image_id"],
                "properties": {
                    "property_id": {
                        "type": "integer",
                        "description": "The numeric ID of the Property.",
                        "minimum": 1
                    },
                    "value_id": {
                        "type": "integer",
                        "description": "The numeric ID of the Value.",
                        "minimum": 1
                    },
                    "image_id": {
                        "type": "integer",
                        "description": "The numeric ID of the Image.",
                        "minimum": 1
                    }
                }
            },
            "PaymentAccountLedgerEntries": {
                "type": "object",
                "description": "A set of PaymentAccountLedgerEntry resources",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "description": "The number of PaymentAccountLedgerEntry resources found.",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "description": "The PaymentAccountLedgerEntry resources found.",
                        "items": {
                            "$ref": "#/components/schemas/PaymentAccountLedgerEntry"
                        }
                    }
                }
            },
            "PaymentAccountLedgerEntry": {
                "type": "object",
                "description": "Represents an entry in a shop's ledger.",
                "required": [
                    "entry_id",
                    "ledger_id",
                    "sequence_number",
                    "amount",
                    "currency",
                    "description",
                    "balance",
                    "create_date"
                ],
                "properties": {
                    "entry_id": {
                        "type": "integer",
                        "description": "The ledger entry's numeric ID.",
                        "minimum": 1
                    },
                    "ledger_id": {
                        "type": "integer",
                        "description": "The ledger's numeric ID.",
                        "minimum": 1
                    },
                    "sequence_number": {
                        "type": "integer",
                        "description": "The sequence allows ledger entries to be sorted chronologically. The higher the sequence, the more recent the entry.",
                        "minimum": 0
                    },
                    "amount": {
                        "type": "integer",
                        "description": "The amount of money credited to the ledger."
                    },
                    "currency": {
                        "type": "string",
                        "description": "The currency of the entry on the ledger."
                    },
                    "description": {
                        "type": "string",
                        "description": "Details what kind of ledger entry this is: a payment, refund, reversal of a failed refund, disbursement, returned disbursement, recoupment, miscellaneous credit, miscellaneous debit, or bill payment."
                    },
                    "balance": {
                        "type": "integer",
                        "description": "The amount of money in the shop's ledger the moment after this entry was applied."
                    },
                    "create_date": {
                        "type": "integer",
                        "description": "The date and time the ledger entry was created in Epoch seconds..",
                        "minimum": 0
                    }
                }
            },
            "Payments": {
                "type": "object",
                "description": "Represents several Payments made with Etsy Payments. Please note all monetary amounts are in USD pennies unless otherwise specified.",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "description": "The number of ShopListing resources found.",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "description": "The Payment resources found.",
                        "items": {
                            "$ref": "#/components/schemas/Payment"
                        }
                    }
                }
            },
            "Payment": {
                "type": "object",
                "description": "Represents a Payment made with Etsy Payments. Please note all monetary amounts are in USD pennies unless otherwise specified.",
                "required": [
                    "payment_id",
                    "buyer_user_id",
                    "shop_id",
                    "receipt_id",
                    "amount_gross",
                    "amount_fees",
                    "amount_net",
                    "currency",
                    "shop_currency",
                    "buyer_currency",
                    "shipping_user_id",
                    "shipping_address_id",
                    "billing_address_id",
                    "status",
                    "shipped_timestamp",
                    "create_timestamp",
                    "update_timestamp",
                    "payment_adjustments"
                ],
                "properties": {
                    "payment_id": {
                        "type": "integer",
                        "description": "The payment's numeric ID.",
                        "minimum": 1
                    },
                    "buyer_user_id": {
                        "type": "integer",
                        "description": "The buyer's numeric ID.",
                        "minimum": 1
                    },
                    "shop_id": {
                        "type": "integer",
                        "description": "The shop's numeric ID.",
                        "minimum": 1
                    },
                    "receipt_id": {
                        "type": "integer",
                        "description": "The receipt's numeric ID.",
                        "minimum": 1
                    },
                    "amount_gross": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "amount_fees": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "amount_net": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "posted_gross": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "posted_fees": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "posted_net": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "adjusted_gross": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "adjusted_fees": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "adjusted_net": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "currency": {
                        "type": "string",
                        "description": "What currency the payment was made in."
                    },
                    "shop_currency": {
                        "type": "string",
                        "description": "The currency of the shop.",
                        "nullable": true
                    },
                    "buyer_currency": {
                        "type": "string",
                        "description": "The currency of the buyer.",
                        "nullable": true
                    },
                    "shipping_user_id": {
                        "type": "integer",
                        "description": "The numeric id of the user to which the order is being shipped.",
                        "nullable": true,
                        "minimum": 1
                    },
                    "shipping_address_id": {
                        "type": "integer",
                        "description": "The numeric id identifying the shipping address.",
                        "minimum": 1
                    },
                    "billing_address_id": {
                        "type": "integer",
                        "description": "The numeric id identifying the billing address of the buyer.",
                        "minimum": 1
                    },
                    "status": {
                        "type": "string",
                        "description": "Most commonly \"settled\" or \"authed\". Marks the current status of the payment."
                    },
                    "shipped_timestamp": {
                        "type": "integer",
                        "description": "The date and time the payment was shipped in epoch seconds.",
                        "nullable": true,
                        "minimum": 946684800
                    },
                    "create_timestamp": {
                        "type": "integer",
                        "description": "The date and time the payment was created in epoch seconds.",
                        "minimum": 946684800
                    },
                    "update_timestamp": {
                        "type": "integer",
                        "description": "The date and time the payment was last updated in epoch seconds.",
                        "minimum": 946684800
                    },
                    "payment_adjustments": {
                        "type": "array",
                        "description": "Represents refund on an Etsy Payments transaction. Please note all monetary amounts are in USD pennies unless otherwise specified.",
                        "items": {
                            "$ref": "#/components/schemas/PaymentAdjustment"
                        }
                    }
                }
            },
            "PaymentAdjustment": {
                "type": "object",
                "description": "Represents refund on an Etsy Payments transaction. Please note all monetary amounts are in USD pennies unless otherwise specified.",
                "required": [
                    "payment_adjustment_id",
                    "payment_id",
                    "status",
                    "is_success",
                    "user_id",
                    "reason_code",
                    "total_adjustment_amount",
                    "shop_total_adjustment_amount",
                    "buyer_total_adjustment_amount",
                    "total_fee_adjustment_amount",
                    "create_timestamp",
                    "update_timestamp"
                ],
                "properties": {
                    "payment_adjustment_id": {
                        "type": "integer",
                        "description": "The payment adjustment's numeric ID.",
                        "minimum": 1
                    },
                    "payment_id": {
                        "type": "integer",
                        "description": "The payment's numeric ID.",
                        "minimum": 1
                    },
                    "status": {
                        "type": "string",
                        "description": "The status of the Payment Adjustment."
                    },
                    "is_success": {
                        "type": "boolean",
                        "description": "Whether the Payment Adjustment was successful or will likely be completed successfully."
                    },
                    "user_id": {
                        "type": "integer",
                        "description": "The seller's numeric ID.",
                        "minimum": 1
                    },
                    "reason_code": {
                        "type": "string",
                        "description": "A human-readable string describing the need for the refund."
                    },
                    "total_adjustment_amount": {
                        "type": "integer",
                        "description": "The total amount of the refund in the payment currency.",
                        "nullable": true,
                        "minimum": 0
                    },
                    "shop_total_adjustment_amount": {
                        "type": "integer",
                        "description": "The total amount of the refund in the shop currency.",
                        "nullable": true,
                        "minimum": 0
                    },
                    "buyer_total_adjustment_amount": {
                        "type": "integer",
                        "description": "The total amount of the refund in the buyer currency.",
                        "nullable": true,
                        "minimum": 0
                    },
                    "total_fee_adjustment_amount": {
                        "type": "integer",
                        "description": "The amount of card processing fees associated with this adjustment.",
                        "nullable": true,
                        "minimum": 0
                    },
                    "create_timestamp": {
                        "type": "integer",
                        "description": "The date and time the payment adjustment was created in epoch seconds.",
                        "minimum": 946684800
                    },
                    "update_timestamp": {
                        "type": "integer",
                        "description": "The date and time the payment adjustment was last updated in epoch seconds.",
                        "minimum": 946684800
                    }
                }
            },
            "ShopReceipt": {
                "type": "object",
                "description": "A purchase from a shop. The ShopReceipt displays monetary values using the shop's currency.",
                "required": [
                    "receipt_id",
                    "receipt_type",
                    "order_id",
                    "seller_user_id",
                    "buyer_user_id",
                    "name",
                    "first_line",
                    "second_line",
                    "city",
                    "state",
                    "zip",
                    "formatted_address",
                    "country_iso",
                    "payment_method",
                    "payment_email",
                    "message_from_seller",
                    "message_from_buyer",
                    "message_from_payment",
                    "is_paid",
                    "is_shipped",
                    "create_timestamp",
                    "update_timestamp",
                    "gift_message",
                    "grandtotal",
                    "subtotal",
                    "total_price",
                    "total_shipping_cost",
                    "total_tax_cost",
                    "total_vat_cost",
                    "discount_amt",
                    "gift_wrap_price",
                    "shipments"
                ],
                "properties": {
                    "receipt_id": {
                        "type": "integer",
                        "description": "The ID for the ShopReceipt.",
                        "minimum": 1
                    },
                    "receipt_type": {
                        "type": "integer",
                        "description": "The Etsy channel on which the purchase occured. 0 for Etsy.com, 1 for a Pattern shop.",
                        "minimum": 0
                    },
                    "order_id": {
                        "type": "integer",
                        "description": "The ID of the order this ShopReceipt is associated with.",
                        "minimum": 1
                    },
                    "seller_user_id": {
                        "type": "integer",
                        "description": "The ID of the seller User.",
                        "minimum": 1
                    },
                    "buyer_user_id": {
                        "type": "integer",
                        "description": "The ID of the buyer User.",
                        "minimum": 1
                    },
                    "name": {
                        "type": "string",
                        "description": "The name for the buyer's shipping address."
                    },
                    "first_line": {
                        "type": "string",
                        "description": "The first line for the buyer's shipping address."
                    },
                    "second_line": {
                        "type": "string",
                        "description": "The second line for the buyer's shipping address.",
                        "nullable": true
                    },
                    "city": {
                        "type": "string",
                        "description": "The city for the buyer's shipping address."
                    },
                    "state": {
                        "type": "string",
                        "description": "The state for the buyer's shipping address."
                    },
                    "zip": {
                        "type": "string",
                        "description": "The zip for the buyer's shipping address."
                    },
                    "formatted_address": {
                        "type": "string",
                        "description": "The locally formatted address strng of the buyer's shipping address."
                    },
                    "country_iso": {
                        "type": "string",
                        "description": "The ISO-3166 alpha-2 country code of the buyer's shipping address."
                    },
                    "payment_method": {
                        "type": "string",
                        "description": "The payment method for the ShopReceipt."
                    },
                    "payment_email": {
                        "type": "string",
                        "description": "The email address where payment confirmation is sent."
                    },
                    "message_from_seller": {
                        "type": "string",
                        "description": "An optional message from the seller.",
                        "nullable": true
                    },
                    "message_from_buyer": {
                        "type": "string",
                        "description": "An optional message from the buyer.",
                        "nullable": true
                    },
                    "message_from_payment": {
                        "type": "string",
                        "description": "The machine generated acknowledgement from the payment system",
                        "nullable": true
                    },
                    "is_paid": {
                        "type": "boolean",
                        "description": "True if the receipt is paid."
                    },
                    "is_shipped": {
                        "type": "boolean",
                        "description": "True if the item is shipped."
                    },
                    "create_timestamp": {
                        "type": "integer",
                        "description": "Creation time, in epoch seconds.",
                        "minimum": 946684800
                    },
                    "update_timestamp": {
                        "type": "integer",
                        "description": "Last update time, in epoch seconds.",
                        "minimum": 946684800
                    },
                    "gift_message": {
                        "type": "string",
                        "description": "If the purchase was marked as a gift, the message the buyer wants sent with the gift."
                    },
                    "grandtotal": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "subtotal": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "total_price": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "total_shipping_cost": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "total_tax_cost": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "total_vat_cost": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "discount_amt": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "gift_wrap_price": {
                        "$ref": "#/components/schemas/Money"
                    },
                    "shipments": {
                        "type": "array",
                        "description": "ShopShipments for this ShopReceipt.",
                        "items": {
                            "$ref": "#/components/schemas/ShopReceiptShipment"
                        }
                    }
                }
            },
            "ShopReceiptShipment": {
                "type": "object",
                "description": "A shipment event for a ShopReceipt. A single ShopReceipt may have many ShopReceiptShipment events.",
                "required": [
                    "receipt_shipping_id",
                    "shipment_notification_timestamp",
                    "carrier_name",
                    "tracking_code"
                ],
                "properties": {
                    "receipt_shipping_id": {
                        "type": "integer",
                        "description": "The ID for the ShopReceiptShipment.",
                        "nullable": true,
                        "minimum": 1
                    },
                    "shipment_notification_timestamp": {
                        "type": "integer",
                        "description": "The time at which the buyer is notified of the shipment event, in epoch seconds.",
                        "minimum": 946684800
                    },
                    "carrier_name": {
                        "type": "string",
                        "description": "The name of the carrier, the company responsible for delivering the package."
                    },
                    "tracking_code": {
                        "type": "string",
                        "description": "The tracking code for the ShopReceiptShipment."
                    }
                }
            },
            "ShopReceipts": {
                "type": "object",
                "description": "A set of ShopReceipt resources.",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "description": "The number of ShopReceipt resources found."
                    },
                    "results": {
                        "type": "array",
                        "description": "The ShopReceipt resources found.",
                        "items": {
                            "$ref": "#/components/schemas/ShopReceipt"
                        }
                    }
                }
            },
            "SellerTaxonomyNodes": {
                "type": "object",
                "description": "A set of SellerTaxonomyNode resources.",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "description": "The number of SellerTaxonomyNode resources found.",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "description": "The SellerTaxonomyNode resources found.",
                        "items": {
                            "$ref": "#/components/schemas/SellerTaxonomyNode"
                        }
                    }
                }
            },
            "SellerTaxonomyNode": {
                "type": "object",
                "description": "A node in the tree of categories that are used for Listings.",
                "required": [
                    "id",
                    "level",
                    "name",
                    "parent",
                    "path",
                    "category_id",
                    "children",
                    "children_ids",
                    "full_path_taxonomy_ids"
                ],
                "properties": {
                    "id": {
                        "type": "integer",
                        "description": "The unique ID of this taxonomy node.",
                        "minimum": 1
                    },
                    "level": {
                        "type": "integer",
                        "description": "Depth in the taxonomy, roots are at level 0.",
                        "minimum": 0
                    },
                    "name": {
                        "type": "string",
                        "description": "Human readable name for this taxonomy node."
                    },
                    "parent": {
                        "type": "string",
                        "description": "Path of our parent node."
                    },
                    "parent_id": {
                        "type": "integer",
                        "description": "ID of our parent node.",
                        "nullable": true,
                        "minimum": 1,
                        "default": null
                    },
                    "path": {
                        "type": "string",
                        "description": "Path from the root to this node, separated by periods."
                    },
                    "category_id": {
                        "type": "integer",
                        "description": "The corresponding ID in Etsy's Category API resource.",
                        "minimum": 1
                    },
                    "children": {
                        "type": "array",
                        "description": "The child Taxonomy nodes, embedded directly in the response.",
                        "items": {
                            "$ref": "#/components/schemas/SellerTaxonomyNode"
                        }
                    },
                    "children_ids": {
                        "type": "array",
                        "description": "The taxonomy_ids of our child nodes.",
                        "items": {
                            "type": "integer",
                            "minimum": 1
                        }
                    },
                    "full_path_taxonomy_ids": {
                        "type": "array",
                        "description": "The taxonomy_ids of this node and all its parents. They are listed in order from root to leaf.",
                        "items": {
                            "type": "integer",
                            "minimum": 1
                        }
                    }
                }
            },
            "TaxonomyNodeProperties": {
                "type": "object",
                "description": "A set of TaxonomyNodeProperty resources.",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "description": "The number of TaxonomyNodeProperty resources found.",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "description": "The TaxonomyNodeProperty resources found.",
                        "items": {
                            "$ref": "#/components/schemas/TaxonomyNodeProperty"
                        }
                    }
                }
            },
            "TaxonomyNodeProperty": {
                "type": "object",
                "description": "A property from tge node in the tree of categories that are used for Listings.",
                "required": [
                    "property_id",
                    "name",
                    "display_name",
                    "scales",
                    "is_required",
                    "supports_attributes",
                    "supports_variations",
                    "is_multivalued",
                    "possible_values",
                    "selected_values"
                ],
                "properties": {
                    "property_id": {
                        "type": "integer",
                        "description": "The ID of the property.",
                        "minimum": 1
                    },
                    "name": {
                        "type": "string",
                        "description": "The name of the property."
                    },
                    "display_name": {
                        "type": "string",
                        "description": "The name used in user interfaces."
                    },
                    "scales": {
                        "type": "array",
                        "description": "A list of available scales.",
                        "items": {
                            "$ref": "#/components/schemas/TaxonomyPropertyScale"
                        }
                    },
                    "is_required": {
                        "type": "boolean",
                        "description": "Is this attribute required for listings in this category?"
                    },
                    "supports_attributes": {
                        "type": "boolean",
                        "description": "Can this property be used in listing attributes?"
                    },
                    "supports_variations": {
                        "type": "boolean",
                        "description": "Can this property be used in listing variations?"
                    },
                    "is_multivalued": {
                        "type": "boolean",
                        "description": "Can this property have multiple values?"
                    },
                    "possible_values": {
                        "type": "array",
                        "description": "A list of allowed values.",
                        "items": {
                            "$ref": "#/components/schemas/TaxonomyPropertyValue"
                        }
                    },
                    "selected_values": {
                        "type": "array",
                        "description": "A list of values that are always selected for the given category.",
                        "items": {
                            "$ref": "#/components/schemas/TaxonomyPropertyValue"
                        }
                    }
                }
            },
            "TaxonomyPropertyScale": {
                "type": "object",
                "description": "A representation of a scale for a property.",
                "required": ["scale_id", "display_name", "description"],
                "properties": {
                    "scale_id": {
                        "type": "integer",
                        "description": "The ID of the scale.",
                        "minimum": 1
                    },
                    "display_name": {
                        "type": "string",
                        "description": "How to label the scale."
                    },
                    "description": {
                        "type": "string",
                        "description": "A description of the scale."
                    }
                }
            },
            "TaxonomyPropertyValue": {
                "type": "object",
                "description": "A representation of structured data values.",
                "required": ["value_id", "name", "scale_id", "equal_to"],
                "properties": {
                    "value_id": {
                        "type": "integer",
                        "description": "The numeric ID of this value.",
                        "nullable": true,
                        "minimum": 1
                    },
                    "name": {
                        "type": "string",
                        "description": "How to display the value."
                    },
                    "scale_id": {
                        "type": "integer",
                        "description": "The ID of the scale this belongs to (if any).",
                        "nullable": true,
                        "minimum": 1
                    },
                    "equal_to": {
                        "type": "array",
                        "description": "The list of values this value is equal to (if any).",
                        "items": {
                            "type": "integer",
                            "minimum": 0
                        }
                    }
                }
            },
            "UserFeedbacks": {
                "type": "object",
                "description": "Represents several UserFeedback records.",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "description": "The number of UserFeedback records being returned.",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "description": "An array of UserFeedback resources.",
                        "items": {
                            "$ref": "#/components/schemas/UserFeedback"
                        }
                    }
                }
            },
            "UserFeedback": {
                "type": "object",
                "description": "Represents feedback left by one user for another regarding a transaction.",
                "required": [
                    "feedback_id",
                    "transaction_id",
                    "creator_user_id",
                    "target_user_id",
                    "seller_user_id",
                    "buyer_user_id",
                    "create_timestamp",
                    "message",
                    "value",
                    "image_feedback_id",
                    "image_url_25x25",
                    "image_url_155x125",
                    "image_url_fullxfull"
                ],
                "properties": {
                    "feedback_id": {
                        "type": "integer",
                        "description": "The numeric ID for this feedback record.",
                        "minimum": 1
                    },
                    "transaction_id": {
                        "type": "integer",
                        "description": "The numeric ID for this transaction.",
                        "minimum": 1
                    },
                    "creator_user_id": {
                        "type": "integer",
                        "description": "The numeric ID of the user who wrote this feedback.",
                        "minimum": 1
                    },
                    "target_user_id": {
                        "type": "integer",
                        "description": "The numeric ID of the user who received this feedback.",
                        "minimum": 1
                    },
                    "seller_user_id": {
                        "type": "integer",
                        "description": "The numeric ID of the user who was the seller in this transaction.",
                        "minimum": 1
                    },
                    "buyer_user_id": {
                        "type": "integer",
                        "description": "The numeric ID of the user who was the seller in this transaction.",
                        "minimum": 1
                    },
                    "create_timestamp": {
                        "type": "integer",
                        "description": "The date and time the transaction was created, in epoch seconds.",
                        "minimum": 946684800
                    },
                    "message": {
                        "type": "string",
                        "description": "A message left by the author, explaining the feedback."
                    },
                    "value": {
                        "type": "integer",
                        "description": "The feedback's value; 1 is positive, -1 is negative, and 0 is neutral."
                    },
                    "image_feedback_id": {
                        "type": "integer",
                        "description": "The numeric ID of the feedback's image (if present).",
                        "minimum": 1
                    },
                    "image_url_25x25": {
                        "type": "string",
                        "description": "The url to a photo provided with the feedback, dimensions 25x25."
                    },
                    "image_url_155x125": {
                        "type": "string",
                        "description": "The url to a photo provided with the feedback, dimensions 155x125."
                    },
                    "image_url_fullxfull": {
                        "type": "string",
                        "description": "The url to a photo provided with the feedback, dimensions fullxfull."
                    }
                }
            },
            "Shop": {
                "type": "object",
                "description": "A store created by a member.",
                "required": [
                    "shop_id",
                    "user_id",
                    "shop_name",
                    "create_date",
                    "title",
                    "announcement",
                    "currency_code",
                    "is_vacation",
                    "vacation_message",
                    "sale_message",
                    "digital_sale_message",
                    "update_date",
                    "listing_active_count",
                    "digital_listing_count",
                    "login_name",
                    "accepts_custom_requests",
                    "policy_welcome",
                    "policy_payment",
                    "policy_shipping",
                    "policy_refunds",
                    "policy_additional",
                    "policy_seller_info",
                    "policy_update_date",
                    "policy_has_private_receipt_info",
                    "has_unstructured_policies",
                    "policy_privacy",
                    "vacation_autoreply",
                    "url",
                    "image_url_760x100",
                    "num_favorers",
                    "languages",
                    "icon_url_fullxfull",
                    "is_using_structured_policies",
                    "has_onboarded_structured_policies",
                    "include_dispute_form_link",
                    "is_direct_checkout_onboarded",
                    "is_calculated_eligible",
                    "is_opted_in_to_buyer_promise",
                    "is_shop_us_based"
                ],
                "properties": {
                    "shop_id": {
                        "type": "integer",
                        "description": "The shop's numeric ID.",
                        "minimum": 1
                    },
                    "user_id": {
                        "type": "integer",
                        "description": "The numeric ID of the user that owns this shop.",
                        "minimum": 1
                    },
                    "shop_name": {
                        "type": "string",
                        "description": "The shop's name."
                    },
                    "create_date": {
                        "type": "integer",
                        "description": "The date and time the shop was created, in epoch seconds.",
                        "minimum": 0
                    },
                    "title": {
                        "type": "string",
                        "description": "A brief heading for the shop's main page.",
                        "nullable": true
                    },
                    "announcement": {
                        "type": "string",
                        "description": "An announcement to buyers that displays on the shop's homepage.",
                        "nullable": true
                    },
                    "currency_code": {
                        "type": "string",
                        "description": "The ISO code (alphabetic) for the seller's currency. All prices are in this currency."
                    },
                    "is_vacation": {
                        "type": "boolean",
                        "description": "True if the seller is not currently accepting purchases."
                    },
                    "vacation_message": {
                        "type": "string",
                        "description": "The shop's message to display in case is_vacation is true.",
                        "nullable": true
                    },
                    "sale_message": {
                        "type": "string",
                        "description": "A message that is sent to users who buy from this shop.",
                        "nullable": true
                    },
                    "digital_sale_message": {
                        "type": "string",
                        "description": "A message that is sent to users who buy a digital item from this shop.",
                        "nullable": true
                    },
                    "update_date": {
                        "type": "integer",
                        "description": "The date and time the shop was last updated, in epoch seconds.",
                        "minimum": 0
                    },
                    "listing_active_count": {
                        "type": "integer",
                        "description": "The number of active listings in the shop.",
                        "minimum": 0
                    },
                    "digital_listing_count": {
                        "type": "integer",
                        "description": "Number of digital listings the shop has.",
                        "minimum": 0
                    },
                    "login_name": {
                        "type": "string",
                        "description": "The user's login name."
                    },
                    "accepts_custom_requests": {
                        "type": "boolean",
                        "description": "True if the shop accepts requests for custom items."
                    },
                    "policy_welcome": {
                        "type": "string",
                        "description": "The introductory text from the top of the seller's policies page (may be blank).",
                        "nullable": true
                    },
                    "policy_payment": {
                        "type": "string",
                        "description": "The seller's policy on payment (may be blank).",
                        "nullable": true
                    },
                    "policy_shipping": {
                        "type": "string",
                        "description": "The seller's policy on shipping (may be blank).",
                        "nullable": true
                    },
                    "policy_refunds": {
                        "type": "string",
                        "description": "The seller's policy on refunds (may be blank).",
                        "nullable": true
                    },
                    "policy_additional": {
                        "type": "string",
                        "description": "Any additional policy information the seller provides (may be blank).",
                        "nullable": true
                    },
                    "policy_seller_info": {
                        "type": "string",
                        "description": "The shop's seller information (may be blank).",
                        "nullable": true
                    },
                    "policy_update_date": {
                        "type": "integer",
                        "description": "The date and time the shop's policy was last updated, in epoch seconds.",
                        "minimum": 0
                    },
                    "policy_has_private_receipt_info": {
                        "type": "boolean",
                        "description": "True if seller has private info to show in EU receipts."
                    },
                    "has_unstructured_policies": {
                        "type": "boolean",
                        "description": "True if shop has any unstructured policy fields filled out."
                    },
                    "policy_privacy": {
                        "type": "string",
                        "description": "Privacy policy information the seller provides (may be blank).",
                        "nullable": true
                    },
                    "vacation_autoreply": {
                        "type": "string",
                        "description": "A message to buyers in response to new convos if is_vacation is true.",
                        "nullable": true
                    },
                    "url": {
                        "type": "string",
                        "description": "The URL of the shop."
                    },
                    "image_url_760x100": {
                        "type": "string",
                        "description": "The URL to the shop's banner image.",
                        "nullable": true
                    },
                    "num_favorers": {
                        "type": "integer",
                        "description": "The number of members who've marked this Shop as a favorite.",
                        "minimum": 0
                    },
                    "languages": {
                        "type": "array",
                        "description": "The languages that this Shop is enrolled in.",
                        "items": {
                            "type": "string"
                        }
                    },
                    "icon_url_fullxfull": {
                        "type": "string",
                        "description": "The url of the shop full-sized shop icon.",
                        "nullable": true
                    },
                    "is_using_structured_policies": {
                        "type": "boolean",
                        "description": "True if shop has accepted using structured policies."
                    },
                    "has_onboarded_structured_policies": {
                        "type": "boolean",
                        "description": "True if shop has viewed structured policies onboarding and accepted OR declined."
                    },
                    "include_dispute_form_link": {
                        "type": "boolean",
                        "description": "True if shop policies include a link to EU online dispute form."
                    },
                    "is_direct_checkout_onboarded": {
                        "type": "boolean",
                        "description": "True if the shop has onboarded onto Etsy Payments."
                    },
                    "is_calculated_eligible": {
                        "type": "boolean",
                        "description": "True if the shop is elegible for calculated shipping profiles (Only available in the US and Canada)."
                    },
                    "is_opted_in_to_buyer_promise": {
                        "type": "boolean",
                        "description": "True if opted in to buyer promise."
                    },
                    "is_shop_us_based": {
                        "type": "boolean",
                        "description": "True if shop is based in the US."
                    }
                }
            },
            "Shops": {
                "type": "object",
                "description": "A set of Shop records.",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "description": "The total number of Shops",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "description": "The Shop resources.",
                        "items": {
                            "$ref": "#/components/schemas/Shop"
                        }
                    }
                }
            },
            "ShopSection": {
                "type": "object",
                "description": "A section within a user's shop.",
                "required": [
                    "shop_section_id",
                    "title",
                    "rank",
                    "user_id",
                    "active_listing_count"
                ],
                "properties": {
                    "shop_section_id": {
                        "type": "integer",
                        "description": "The numeric ID of the shop section.",
                        "minimum": 1
                    },
                    "title": {
                        "type": "string",
                        "description": "The title of the section."
                    },
                    "rank": {
                        "type": "integer",
                        "description": "Display order.",
                        "minimum": 0
                    },
                    "user_id": {
                        "type": "integer",
                        "description": "The ID of the user who owns this shop section.",
                        "minimum": 1
                    },
                    "active_listing_count": {
                        "type": "integer",
                        "description": "The number of active listings currently in the section.",
                        "minimum": 0
                    }
                }
            },
            "ShopSections": {
                "type": "object",
                "description": "All shop sections related to a Shop.",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "description": "The total number of Shop Sections",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "description": "The Shop Section resources.",
                        "items": {
                            "$ref": "#/components/schemas/ShopSection"
                        }
                    }
                }
            },
            "UserAddress": {
                "type": "object",
                "description": "Represents a user's address.",
                "required": [
                    "user_address_id",
                    "user_id",
                    "name",
                    "first_line",
                    "second_line",
                    "city",
                    "state",
                    "zip",
                    "iso_country_code",
                    "country_name",
                    "is_default_shipping_address"
                ],
                "properties": {
                    "user_address_id": {
                        "type": "integer",
                        "description": "The numeric ID of the user's address.",
                        "minimum": 1
                    },
                    "user_id": {
                        "type": "integer",
                        "description": "The user's numeric ID.",
                        "minimum": 1
                    },
                    "name": {
                        "type": "string",
                        "description": "The user's name for this address."
                    },
                    "first_line": {
                        "type": "string",
                        "description": "The first line of the user's address."
                    },
                    "second_line": {
                        "type": "string",
                        "description": "The second line of the user's address."
                    },
                    "city": {
                        "type": "string",
                        "description": "The city field of the user's address."
                    },
                    "state": {
                        "type": "string",
                        "description": "The state field of the user's address."
                    },
                    "zip": {
                        "type": "string",
                        "description": "The zip code field of the user's address."
                    },
                    "iso_country_code": {
                        "type": "string",
                        "description": "The ISO code of the country in this address."
                    },
                    "country_name": {
                        "type": "string",
                        "description": "The name of the user's country."
                    },
                    "is_default_shipping_address": {
                        "type": "boolean",
                        "description": "Is this the user's default shipping address."
                    }
                }
            },
            "UserAddresses": {
                "type": "object",
                "description": "Represents several UserAddress records.",
                "required": ["count", "results"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "description": "The number of UserAddress records being returned.",
                        "minimum": 0
                    },
                    "results": {
                        "type": "array",
                        "description": "An array of UserAddress resources.",
                        "items": {
                            "$ref": "#/components/schemas/UserAddress"
                        }
                    }
                }
            },
            "User": {
                "type": "object",
                "description": "Represents a single user of the site",
                "required": [
                    "user_id",
                    "login_name",
                    "primary_email",
                    "create_timestamp",
                    "referred_by_user_id",
                    "awaiting_feedback_count",
                    "use_new_inventory_endpoints",
                    "feedback_info"
                ],
                "properties": {
                    "user_id": {
                        "type": "integer",
                        "description": "The user's numeric ID. This is also valid as the user's shop ID.",
                        "minimum": 1
                    },
                    "login_name": {
                        "type": "string",
                        "description": "The user's login name."
                    },
                    "primary_email": {
                        "type": "string",
                        "description": "The user's primary email address.",
                        "format": "email",
                        "nullable": true
                    },
                    "create_timestamp": {
                        "type": "integer",
                        "description": "The date and time the user was created, in epoch seconds.",
                        "minimum": 946684800
                    },
                    "referred_by_user_id": {
                        "type": "integer",
                        "description": "The numeric ID of the user that referred this user.",
                        "nullable": true,
                        "minimum": 1
                    },
                    "awaiting_feedback_count": {
                        "type": "integer",
                        "description": "The total number of transactions the user has available for a new review.",
                        "minimum": 0
                    },
                    "use_new_inventory_endpoints": {
                        "type": "boolean",
                        "description": "Should this user's listings be created or edited using the new Inventory endpoints?"
                    },
                    "feedback_info": {
                        "$ref": "#/components/schemas/UserFeedbackInfo"
                    }
                }
            },
            "UserFeedbackInfo": {
                "type": "object",
                "required": ["count", "score"],
                "properties": {
                    "count": {
                        "type": "integer",
                        "description": "The number of feedbacks.",
                        "minimum": 0
                    },
                    "score": {
                        "type": "integer",
                        "description": "The feedback score percentage.",
                        "nullable": true,
                        "minimum": 0
                    }
                }
            }
        }
    }
}

module.exports.openapi = openapi