# Product Category

1. npm install
2. npm start
3. mongorestore --db category dump/category

4. Get list of all the child categories of a parent product category :
   API URL : http://localhost:8000/api/category?id=5f60f83714c0a1bbf162db73
   URL : http://localhost:8000/api/category
   METHOD : GET
   Query Params : {id : 5f60f83714c0a1bbf162db73}

5. Get list of the product parent category of a child category :
   API URL : http://localhost:8000/api/category?id=5f60f95314c0a1bbf162dbb8
   URL : http://localhost:8000/api/category
   METHOD : GET
   Query Params : {id : 5f60f95314c0a1bbf162dbb8}
