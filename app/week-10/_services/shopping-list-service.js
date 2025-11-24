import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";


// Get user items using current user's userID
export async function getItem(userId)
{
    try {
        const userItems = await getDocs(collection(db, 'users', userId, 'items'));
        return userItems.docs.map((item) => ({
            id: item.id,
            ...item.data(),
        }));
    } catch(error) {
        console.error(`Error reading collection: users: "${error}"`);
  }
}

// Add item in items collection using current user's userID for subcollection
export async function addItem(userId, item){
    try{
        await addDoc(collection(db, 'users', userId, 'items'), item);
    }
    catch(error) {
        console.error(`Error in adding ${item.name}: ${error}`)
    }
};



