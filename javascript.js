let totalamt=0;
function print(n)
{
    let unorder=document.getElementById("cart-items");
    let liitem=document.createElement("li");
    liitem.classList.add("cart_li");
    document.getElementById("liitem");
    let text=document.createTextNode(n);
    liitem.appendChild(text);
    unorder.appendChild(liitem);
    alert("ITEM ADDED SUCCESSFULLY")
}
function show()
{
    const cartbox=document.getElementById("cart");
    cartbox.style.display="block";
    let setamt=document.getElementById("price")
    setamt.innerHTML="Total Bill : "+totalamt;
}
function price(amt)
{
    console.log(amt);
    totalamt+=amt;
}
function checkout()
{
    const cartbox=document.getElementById("cart");
    cartbox.style.display="none";
}