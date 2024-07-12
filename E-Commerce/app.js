

async function getdata(){

    try{
        let url = "https://fakestoreapi.com/products"
    let response = await fetch(url)

    const json = await response.json()
    loadUI(json)
    // console.log(response)
    }
    catch(error){

    console.log("error" , error) 
    }
    
}

getdata()

function loadUI(ele){
    let addCards = document.getElementById("addCards")
    for(let x in ele){
        // console.log(ele[0].image)
        addCards.innerHTML += `
                    <div class="card bg-white">

                        <div class="card-thumb">
                            <img src="${ele[x].image}" alt="">
                        </div>

                        <div class="card-head bg-white">
                            <p class="card-head-text bg-white">${ele[x].title}</p>
                        </div>

                        <hr>

                        <div class="card-desc bg-white">
                            <p class="bg-white">${ele[x].description.slice(0,80)}</p>
                        </div>
                        
                        <div class="card-buy bg-white">
                            <button class="card-btn">Buy Now</button>
                            <button class="card-btn">Add to Cart</button>
                        </div>
                    </div>
        `


    }
    
}
