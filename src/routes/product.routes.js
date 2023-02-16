import { Router } from "express";
import {createNewProduct, getProducts, getProductByID, deleteProductByID, getTotalProducts, updateProductById} from "../controllers/products.controller"
const router = Router();

router.get("/Products", getProducts)

router.post("/Products",createNewProduct )

router.get("/Products/count",getTotalProducts)

router.get("/Products/:id", getProductByID)

router.delete("/Products/:id", deleteProductByID )

router.put("/Products/:id", updateProductById )



export default router