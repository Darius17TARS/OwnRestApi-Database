export const queries = {
    getALLProducts: 'Select * From Products',
    addNewProduct: 'INSERT INTO Products (ProductName,UnitPrice) Values(@ProductName, @UnitPrice)',
    getProductByID: 'Select * From Products Where ProductID = @ProductId',
    deleteProduct: 'Delete from Products where ProductID = @ProductId',
    getTotalProducts: 'Select Count(*) from Products',
    updateProductById: 'UPDATE Products SET ProductName = @ProductName, UnitPrice = @UnitPrice WHERE ProductID = @productId'
}
