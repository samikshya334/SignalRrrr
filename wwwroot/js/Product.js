const connection = new signalR.HubConnectionBuilder().withUrl("/checkproduct").build();
connection.on("ProductSuccess", function (message) {
    document.getElementById("message").textContent = message;
    document.getElementById("productBtn").disabled = true;

});
connection.on("ProductSoldOut", function (message) {
    document.getElementById("message").textContent = message;
    document.getElementById("productBtn").disabled = true;

});
connection.on("PurchaseFailed", function (message) {
    documnet.getElementById("message").textContent = message;
    document.getElementById("productBtn").disabled = true;

});
connection.start();
document.getElementById("productBtn").addEventListener("click",function()
{
    connection.invoke("PurchaseProduct").catch(err => console.error(err));
})
