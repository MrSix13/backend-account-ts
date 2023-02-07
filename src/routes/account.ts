import { Router } from 'express';
import { 
     getAllAccounts, 
     createAccount 
} from '../controllers/account.controller';

const router = Router();

router.get('/api/accounts', getAllAccounts);
router.post('/api/accounts/account', createAccount);



export {router}