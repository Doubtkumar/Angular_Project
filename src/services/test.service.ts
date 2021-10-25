import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }

  employee:any[]=["rohit","ravi","vishal","Arun"];

  object:any={
    "_embedded":{
       "product":[
          {
             "sku":"BOOK-TECH-1000",
             "name":"JavaScript - The Fun Parts",
             "description":"Learn JavaScript",
             "unitPrice":19.99,
             "imageUrl":"assets/images/products/placeholder.png",
             "active":true,
             "unitInStocks":100,
             "dateCreated":"2021-09-15T22:40:56.000+00:00",
             "lastUpdated":null,
             "_links":{
                "self":{
                   "href":"http://localhost:8080/api/products/1"
                },
                "product":{
                   "href":"http://localhost:8080/api/products/1"
                },
                "category":{
                   "href":"http://localhost:8080/api/products/1/category"
                }
             }
          },
          {
             "sku":"BOOK-TECH-1001",
             "name":"Spring Framework Tutorial",
             "description":"Learn Spring",
             "unitPrice":29.99,
             "imageUrl":"assets/images/products/placeholder.png",
             "active":true,
             "unitInStocks":100,
             "dateCreated":"2021-09-15T22:40:56.000+00:00",
             "lastUpdated":null,
             "_links":{
                "self":{
                   "href":"http://localhost:8080/api/products/2"
                },
                "product":{
                   "href":"http://localhost:8080/api/products/2"
                },
                "category":{
                   "href":"http://localhost:8080/api/products/2/category"
                }
             }
          },
          {
             "sku":"BOOK-TECH-1002",
             "name":"Kubernetes - Deploying Containers",
             "description":"Learn Kubernetes",
             "unitPrice":24.99,
             "imageUrl":"assets/images/products/placeholder.png",
             "active":true,
             "unitInStocks":100,
             "dateCreated":"2021-09-15T22:40:56.000+00:00",
             "lastUpdated":null,
             "_links":{
                "self":{
                   "href":"http://localhost:8080/api/products/3"
                },
                "product":{
                   "href":"http://localhost:8080/api/products/3"
                },
                "category":{
                   "href":"http://localhost:8080/api/products/3/category"
                }
             }
          },
          {
             "sku":"BOOK-TECH-1003",
             "name":"Internet of Things (IoT) - Getting Started",
             "description":"Learn IoT",
             "unitPrice":29.99,
             "imageUrl":"assets/images/products/placeholder.png",
             "active":true,
             "unitInStocks":100,
             "dateCreated":"2021-09-15T22:40:56.000+00:00",
             "lastUpdated":null,
             "_links":{
                "self":{
                   "href":"http://localhost:8080/api/products/4"
                },
                "product":{
                   "href":"http://localhost:8080/api/products/4"
                },
                "category":{
                   "href":"http://localhost:8080/api/products/4/category"
                }
             }
          },
          {
             "sku":"BOOK-TECH-1004",
             "name":"The Go Programming Language: A to Z",
             "description":"Learn Go",
             "unitPrice":24.99,
             "imageUrl":"assets/images/products/placeholder.png",
             "active":true,
             "unitInStocks":100,
             "dateCreated":"2021-09-15T22:40:56.000+00:00",
             "lastUpdated":null,
             "_links":{
                "self":{
                   "href":"http://localhost:8080/api/products/5"
                },
                "product":{
                   "href":"http://localhost:8080/api/products/5"
                },
                "category":{
                   "href":"http://localhost:8080/api/products/5/category"
                }
             }
          }
       ]
    },
    "_links":{
       "self":{
          "href":"http://localhost:8080/api/products"
       },
       "profile":{
          "href":"http://localhost:8080/api/profile/products"
       }
    },
    "page":{
       "size":20,
       "totalElements":5,
       "totalPages":1,
       "number":0
    }
 }

  getEmployee(){
    return this.object;
  }

  getPost(){
     return this.http.get('http://localhost:8080/api/products');
  }
}
