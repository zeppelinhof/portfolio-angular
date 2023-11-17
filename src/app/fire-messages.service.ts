import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireMessagesService {

  colId = 'messages';
  docId = 'rmUKJgN31AI5hMdcOBUC';

  constructor() { }

  firestore: Firestore = inject(Firestore);

  getMessageRef() {
    return collection(this.firestore, 'messages');
  }

  getSingleDocRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }

  async addMessage(item: {}) {
    await addDoc(this.getMessageRef(), item).catch(
      (err) => {console.log(err)}
    ).then(
      (docRef)=>{console.log("Dokument geschrieben mit ID:", docRef?.id)}
    )
  }

  async updateMessages(item: {}) {
    if (this.docId) {
      await updateDoc(this.getSingleDocRef(this.colId, this.docId), item).catch(
        (err) => { console.log(err); }
      );
    }
  }


}
