import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';


const menuCollectionRef = collection(db, "food")
class MenuDataService {
    addMenu = (newMenu) => {
        return addDoc(menuCollectionRef, newMenu);
    }

    updateMenu = (id, updatedMenu) => {
        const menuDoc = doc(db, 'food', id);

        return updateDoc(menuDoc, updatedMenu);
    }

    deleteMenu = (id) => {
        const menuDoc = doc(db, 'food', id)

        return deleteDoc(menuDoc)
    }

    getAllMenus = () => {
        return getDocs(menuCollectionRef);
    }

    getMenu = (id) => {

        const menuDoc = doc(db, 'food', id);
        return getDoc(menuDoc);
    }

}


export default new MenuDataService();