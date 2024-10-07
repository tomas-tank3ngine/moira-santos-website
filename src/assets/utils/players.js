import { db } from '../../firebaseConfig';
import { collection, getDocs, doc, getDoc, setDoc, addDoc, deleteDoc } from 'firebase/firestore';

async function doesPlayerExist(snapshot) {
    if (!snapshot.exists()) throw new Error('Player not found');
}

async function getPlayers() {
    const playersCollection = collection(db, 'players');
    const playersSnapshot = await getDocs(playersCollection);
    const playersList = playersSnapshot.docs.map((doc) => doc.data());
    return playersList;
}

async function getPlayerById(id) {
    const playerRef = doc(db, 'players', id);
    const playerSnapshot = await getDoc(playerRef);
    doesPlayerExist(playerSnapshot);
    return playerSnapshot.data();
}

//TESTING
async function addPlayer(player) {
    if (!player.firstName || !player.jerseyNumber || !player.lastName || !player.positionPrimary) {
        throw new Error('Required fields missing.');
    }
    const newPlayerRef = await addDoc(collection(db, 'players'), player);
    return newPlayerRef.id;
}

// The shouldMerge parameter is optional and defaults to false.
// If set to true, the player object will be merged with the existing document and will not overwrite any existing fields.
// If set to false, the player object will overwrite the existing document.
async function updatePlayer(id, player, shouldMerge = false) {
    const playerRef = doc(db, 'players', id);
    const playerSnapshot = await getDoc(playerRef);
    doesPlayerExist(playerSnapshot);
    await setDoc(playerRef, player, { merge: shouldMerge });
}

async function deletePlayer(id) {
    const playerRef = doc(db, 'players', id);
    const playerSnapshot = await getDoc(playerRef);
    doesPlayerExist(playerSnapshot);
    await deleteDoc(playerRef);
}

export { getPlayers, getPlayerById, addPlayer, updatePlayer, deletePlayer };
