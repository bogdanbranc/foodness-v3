import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase';


const orderCollectionRef = collection(db, "order")
class OrderDataService {
    addOrder = (newMenu) => {
        return addDoc(orderCollectionRef, newMenu);
    }

    updateOrder = (id, updatedOrder) => {
        const orderDoc = doc(db, 'order', id);

        return updateDoc(orderDoc, updatedOrder);
    }

    deleteOrder = (id) => {
        const orderDoc = doc(db, 'order', id)

        return deleteDoc(orderDoc)
    }

    getAllOrders = async () => {
        const q = query(collection(db, "order"), where("livrat", "==", false));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {

            console.log(doc.id, " => ", doc.data());
        });

        return querySnapshot;
    }

    getOrderForUser = async (user) => {
        const q = query(collection(db, "order"), where("user", "==", user));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {

            console.log(doc.id, " => ", doc.data());
        });

        return querySnapshot;
    }

    getOrderSent = async () => {
        const q = query(collection(db, "order"), where("livrat", "==", true));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {

            console.log(doc.id, " => ", doc.data());
        });

        return querySnapshot;
    }


}


export default new OrderDataService();