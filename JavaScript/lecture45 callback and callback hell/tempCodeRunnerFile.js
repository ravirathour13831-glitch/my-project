async function searchPizza(params) {
  try {
    let price = await addTocard()
    await payment(price)
    console.log('bus aa hi gaya pizza')

    
  } catch (error) {
    
  }
  
}
