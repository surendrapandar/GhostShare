import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  Firestore,
  collection,
  doc,
  setDoc,
  getDocs,
  DocumentData,
  QuerySnapshot,
  query,
  where,
} from 'firebase/firestore';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FirebaseService {
  private readonly db: Firestore;

  constructor(private readonly configService: ConfigService) {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: this.configService.get<string>('FIREBASE_API_KEY'),
      authDomain: this.configService.get<string>('FIREBASE_AUTH_DOMAIN'),
      projectId: this.configService.get<string>('FIREBASE_PROJECT_ID'),
      storageBucket: this.configService.get<string>('FIREBASE_STORAGE_BUCKET'),
      messagingSenderId: this.configService.get<string>(
        'FIREBASE_MESSAGING_SENDER_ID',
      ),
      appId: this.configService.get<string>('FIREBASE_APP_ID'),
      measurementId: this.configService.get<string>('FIREBASE_MEASUREMENT_ID'),
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    this.db = getFirestore(app);
  }

  // Function to check if room exists in Firestore
  async checkRoomExists(room: number): Promise<boolean> {
    let exists = false;
    try {
      const q = query(
        collection(this.db, 'Notes'),
        where('roomNo', '==', room),
      );
      const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
        exists = true;
      });
    } catch (error) {
      console.error('No room no exits: ', error);
    }
    return exists;
  }

  // Function to read data from Firestore
  async readData(room: number, password: string): Promise<DocumentData[]> {
    console.log(room, password);
    console.log(typeof room, typeof password);
    const document = [];
    try {
      const q = query(
        collection(this.db, 'Notes'),
        where('roomNo', '==', room),
        where('password', '==', password),
      );
      const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
        document.push(doc.data());
      });
    } catch (error) {
      console.error('Error reading document: ', error);
    }
    return document;
  }

  // Function to write data to Firestore
  async writeData(data: DocumentData): Promise<void> {
    try {
      const docRef = doc(collection(this.db, 'Notes'));
      const response = await setDoc(docRef, data);
      console.log('Document successfully written!');
      console.log(response);
    } catch (error) {
      console.error('Error writing document: ', error);
    }
  }
}
