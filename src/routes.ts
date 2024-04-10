import { Router } from 'express';
import multer from "multer";

import { isAuthenticated } from './middlewares/isAuthenticated';

// Users
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

// Categories
import { CreatedCategoryController } from './controllers/category/CreatedCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { DeleteCategoryController } from './controllers/category/DeleteCategoryController';

// Products
import { ListByCategoryController } from './controllers/products/ListByCategoryController';
import { CreatedProductsController } from './controllers/products/CreatedProductsController';
import { ListProductsController } from './controllers/products/ListProductsController';
import { ListProductsActiveController } from './controllers/products/ListProductsActivesController';
import { UpdateProductController } from './controllers/products/UpdateProductController';

// Tables
import { CreateOrderController } from './controllers/orders/Table/CreateOrderController';
import { RemoveOrderController } from './controllers/orders/Table/RemoveOrderController';
import { ListOrdersOpenController } from './controllers/orders/Table/ListOrdesOpenController';

// Outra coisa
import { AddItemController } from './controllers/orders/Item/AddItemController';
import { RemoveItemController } from './controllers/orders/Item/RemoveItemController';
import { SendOrderController } from './controllers/orders/Details-order/SendOrderController';
import { ListOrdersController } from './controllers/orders/Finish-orders/ListOrdersController';
import { FinishOrderController } from './controllers/orders/Finish-orders/FinishOrderController';
import { DetailOrderController } from './controllers/orders/Details-order/DetailOrderController';

import uploadConfig from './config/multer';

const router = Router();
const upload = multer(uploadConfig.upload("./temp"));

// 
router.post('/login', new AuthUserController().handle);

// Users
router.post('/new-users', isAuthenticated, new CreateUserController().handle);
router.get('/logged-user', isAuthenticated, new DetailUserController().handle);

// Category
router.post('/new-category', isAuthenticated, new CreatedCategoryController().handle);
router.get('/categories', isAuthenticated, new ListCategoryController().handle);
router.delete('/category', isAuthenticated, new DeleteCategoryController().handle);

// Products
router.post('/new-product', isAuthenticated, upload.single('banner'), new CreatedProductsController().handle);
router.get('/products', isAuthenticated, new ListProductsController().handle);
router.get('/products/active', isAuthenticated, new ListProductsActiveController().handle);
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle);
router.put('/product', isAuthenticated, upload.single('banner'), new UpdateProductController().handle);

//Ordens
router.get('/orders-list', isAuthenticated, new ListOrdersOpenController().handle);
router.post('/create-orders', isAuthenticated, new CreateOrderController().handle);
router.delete('/order', isAuthenticated, new RemoveOrderController().handle);

router.post('/order/add', isAuthenticated, new AddItemController().handle);
router.delete('/order/item', isAuthenticated, new RemoveItemController().handle);

router.put('/order/send', isAuthenticated, new SendOrderController().handle)
router.get('/orders', isAuthenticated, new ListOrdersController().handle)
router.get('/order/detail', isAuthenticated, new DetailOrderController().handle)

router.put('/order/finish', isAuthenticated, new FinishOrderController().handle)

export { router }; 