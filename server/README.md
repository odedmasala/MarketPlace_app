# server

## Explanation of the server

## relationship between database

### Department collection:

- stand alone no relation

### Order collection:

- relation orderFromStores >>>> store collection
- relation user_id >>>> user collection
- relation products >>>> products collection

### Product collection:

- relation storeId >>>> one store from stores collection
- relation subcategory's >>>> section collection

### Receipt collection:

- relation orderFromStores >>>> store collection
- relation user_id >>>> user collection
- relation productIds >>>> products collection

### Section collection:

- relation storeId >>>> store collection
- relation productIds >>>> products collection

### stores collection:

- relation departments_id >>>> departments collection
- relation product_ids >>>> products collection
- relation sections_ids >>>> sections collection

### Store Manager collection:

- relation store_ids >>>> store collection

### user Manager collection:

- relation paymentBillInfo >>>> BillInfo collection
- relation stores_ids >>>> stores collection

