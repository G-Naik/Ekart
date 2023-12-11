export default async function service () {
    let storeProducts = await fetch("http://localhost:4000/products");
    if(storeProducts){
        storeProducts = await storeProducts.json();
        return storeProducts
    }else{
        throw new Error("Error While Fetching The Data")
    }
}
