var itemsArray = [
    {name:"uice",price:"50",quantity:"3"},
    {name:"cooki",price:"30", quantity:"9"},
    {name:"shirt",price:"880", quantity:"1"},
    {name:"pen",price:"100", quantity:"2"}];
    for(var key in itemsArray){
        var items=itemsArray[key]
        var itemprice=items.price* items.quantity
        console.log(`the Price of ${items.name}is Rs. ${itemprice} `);
        var totalprice=Addall(itemprice)
    }