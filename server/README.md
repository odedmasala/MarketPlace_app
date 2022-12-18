# server

## Explanation of the server

## relationship between database

### Department collection:

- stand alone no relation

### Order collection:

- relation orderFromStores >>>> store collection
- relation user >>>> user collection
- relation products >>>> products collection

### Product collection:

- relation stores >>>> one store from stores collection
- relation subcategory's >>>> section collection

### Receipt collection:

- relation orderFromStores >>>> store collection
- relation user >>>> user collection
- relation products >>>> products collection

### Section collection:

- relation store >>>> store collection
- relation products >>>> products collection

### stores collection:

- relation department >>>> departments collection
- relation products >>>> products collection
- relation sections >>>> sections collection

### Store Manager collection:

- relation stores >>>> store collection

### user Manager collection:

- relation paymentBillInfo >>>> BillInfo collection
- relation stores >>>> stores collection

