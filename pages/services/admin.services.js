import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase';


const adminCollectionRef = collection(db, "admin")
class AdminDataService {


    getAllAdmins = () => {
        return getDocs(adminCollectionRef);
    }


}


export default new AdminDataService();