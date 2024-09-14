import {db} from '../firebase-config';
import { collection, getDocs, doc, getDoc, setDoc, addDoc, deleteDoc } from 'firebase/firestore';

async function doesCommunityExist(snapshot) {
    if (!snapshot.exists()) throw new Error('Community not found.');
}

async function getCommunities() {
    const communitiesCollection = collection(db, 'Communities');
    const communitiesSnapshot = await getDocs(communitiesCollection);
    const communitiesList = communitiesSnapshot.docs.map(doc => doc.data());
    return communitiesList;
}

async function getCommunityById(id) {
    const communityRef = doc(db, 'Communities', id);
    const communitySnapshot = await getDoc(communityRef);
    doesCommunityExist(communitySnapshot);
    return communitySnapshot.data();
}

async function doesPlayerExist(snapshot){
    if (!snapshot.exists()) throw new Error('Player not found');
}

async function getPlayers(){
    const playersCollection = collection(db, 'players');
    const playersSnapshot = await getDocs(playersCollection);
    const playersList = playersSnapshot.docs.map(doc => doc.data());
    return playersList;
}

async function getPlayerById(id) {
    const playerRef = doc(db, 'players', id);
    const playerSnapshot = await getDoc(playerRef);
    doesPlayerExist(playerSnapshot);
    return playerSnapshot.data();
}

export { getCommunities, getCommunityById, getPlayers, getPlayerById };
