
const espressoBtn = document.getElementById("espresso")
const caramelBtn = document.getElementById("caramel")
const teaBtn = document.getElementById("tea")
const mochaBtn = document.getElementById("mocha")
const viennaBtn = document.getElementById("vienna")
const longBlackBtn = document.getElementById("long-black")
const sendBtn = document.querySelector(".send-btn")
const reqServiceEl = document.getElementById("req-serv-names")
const reqPricEl = document.getElementById("req-serv-price")
const totalAmountEl = document.getElementById("req-serv-total")

const start_btn = document.querySelector(".start_btn button")
const mainContainer = document.querySelector(".main_container")
const exit_btn = document.querySelector(".exit-btn");

start_btn.onclick = ()=>{
    mainContainer.classList.add("activeContainer"); //show Main container
}

exit_btn.onclick = ()=>{
    mainContainer.classList.remove("activeContainer"); //hide info box
}


let requestedServices = []
let requestedServPrice = []
let totalAmount = 0

// To display the services and their prices
function renderServices() {
    reqPricEl.innerHTML = ""
    reqServiceEl.innerHTML = ""
    totalAmount = 0
    for (let i = 0; i < requestedServPrice.length; i++) {
        reqServiceEl.innerHTML += requestedServices[i]
        reqPricEl.innerHTML += `<p>$${requestedServPrice[i]}</p>`
        totalAmount += requestedServPrice[i]      
    }
    totalAmountEl.textContent = `$${totalAmount}`
}



espressoBtn.addEventListener("click", function() {
    requestedServices.push("<p>Espresso</p>")
    requestedServPrice.push(25)
    renderServices()

    // So that this button can only be clicked once
    espressoBtn.disabled = true 
})

caramelBtn.addEventListener("click", function() {
    requestedServices.push("<p>Caramel Latte</p>")
    requestedServPrice.push(5)
    renderServices()
    caramelBtn.disabled = true
})

teaBtn.addEventListener("click", function() {
    requestedServices.push("<p>Tea</p>")
    requestedServPrice.push(5)
    renderServices()
    teaBtn.disabled = true
})

mochaBtn.addEventListener("click", function() {
    requestedServices.push("<p>Cafe Mocha</p>")
    requestedServPrice.push(10)
    renderServices()
    mochaBtn.disabled = true
})

viennaBtn.addEventListener("click", function() {
    requestedServices.push("<p>Vienna</p>")
    requestedServPrice.push(15)
    renderServices()
    viennaBtn.disabled = true
})

longBlackBtn.addEventListener("click", function() {
    requestedServices.push("<p>Long Black</p>")
    requestedServPrice.push(20)
    renderServices()
    longBlackBtn.disabled = true
})



sendBtn.addEventListener("click", function() {
    resetInvoice()
})

exit_btn.addEventListener("click", function() {
    resetInvoice()
})



function resetInvoice() {
    espressoBtn.disabled = false
    caramelBtn.disabled = false
    teaBtn.disabled = false
    mochaBtn.disabled = false
    viennaBtn.disabled = false
    longBlackBtn.disabled = false
    reqPricEl.innerHTML = ""
    reqServiceEl.innerHTML = ""
    totalAmount = 0
    requestedServices = []
    requestedServPrice = []
    reqPricEl.innerHTML = "_"
    totalAmountEl.textContent = "_"
}

