export default {
    likeClicked
}

function likeClicked(product) {
    let newProduct = JSON.parse(JSON.stringify(product))
    if (!product.likes.isDissable) {
        product.likes.isPressed ? newProduct.likes.counter-- : newProduct.likes.counter++
        newProduct.likes.isPressed = !product.likes.isPressed
    }
    return Promise.resolve(newProduct)
}