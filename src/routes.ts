import { Router } from 'express';
import multer from "multer";

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreatedCategoryController } from './controllers/category/CreatedCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreatedProductsController } from './controllers/products/CreatedProductsController';
import { ListByCategoryController } from './controllers/products/ListByCategoryController';
import { CreateOrderController } from './controllers/orders/CreateOrderController';
import { RemoveOrderController } from './controllers/orders/RemoveOrderController';
import { AddItemController } from './controllers/orders/AddItemController';
import { RemoveItemController } from './controllers/orders/RemoveItemController';
import { SendOrderController } from './controllers/orders/SendOrderController';
import { ListOrdersController } from './controllers/orders/ListOrdersController';
import { FinishOrderController } from './controllers/orders/FinishOrderController';
import { DetailOrderController } from './controllers/orders/DetailOrderController';

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

// Products
router.post('/new-product', isAuthenticated, upload.single('file'), new CreatedProductsController().handle);
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle);

//Ordens
router.post('/order', isAuthenticated, new CreateOrderController().handle);
router.delete('/order', isAuthenticated, new RemoveOrderController().handle);

router.post('/order/add', isAuthenticated, new AddItemController().handle);
router.delete('/order/item', isAuthenticated, new RemoveItemController().handle);

router.put('/order/send', isAuthenticated, new SendOrderController().handle )
router.get('/orders', isAuthenticated, new ListOrdersController().handle )
router.get('/order/detail', isAuthenticated, new DetailOrderController().handle )

router.put('/order/finish', isAuthenticated, new FinishOrderController().handle )

export { router }; 