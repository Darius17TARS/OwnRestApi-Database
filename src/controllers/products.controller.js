import {getConnection, sql, queries} from "../database"


export const getProducts = async (req, res) => {
    try{
        
    const pool = await getConnection();
    const result = await pool.request().query(queries.getALLProducts);      
    res.json(result);
    } catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

export const createNewProduct = async(req, res) => {
    const {productID, ProductName} = req.body
    let { UnitPrice } = req.body
    if (productID == null || ProductName == null)
        return res.status(400).json({msg: "bad request Please fill al the fields"});
    
    if (UnitPrice == null) UnitPrice = 0;
    try{
        const pool = await getConnection()
        await pool.request()
        .input("ProductName", sql.VarChar, ProductName)
        .input("UnitPrice", sql.Int, UnitPrice)
        .query(queries.addNewProduct)
        res.json({productID, ProductName, UnitPrice})
    }catch(error){
        res.status(500);
        res.send(error.message)
    }
}

export const getProductByID = async(req,res) => {
    const {id} =  req.params;
    const pool = await getConnection()
    const result = await pool
    .request()
    .input('ProductID', id)
    .query(queries.getProductByID)
    

    res.send(result)


}


export const deleteProductByID = async(req,res) => {
    const {id} = req.params;
    const pool = await getConnection()
    const result = await pool
    .request()
    .input('ProductID', id)
    .query(queries.deleteProduct)
    

    res.sendStatus(204);


}

export const getTotalProducts = async(req,res) => {
    
    const pool = await getConnection()
    const result = await pool
    .request()
    .query(queries.getTotalProducts)
    

    res.json(result.recordset[0][""])

}


export const updateProductById = async(req, res) => {
    const {ProductName, UnitPrice} = req.body;
    const { id } = req.params

    if(ProductName == null || UnitPrice == null){
        return res.status(400).json({msg: "Bad Reques."})
    }

    const pool = await getConnection()
    const result = await pool
    .request()
    .input('ProductName', sql.VarChar, ProductName )
    //.input("ProductId", sql.Int, productId)
    .input("UnitPrice", sql.Int, UnitPrice)
    .input('ProductId', id)
    .query(queries.updateProductById)

    res.json(result)

}