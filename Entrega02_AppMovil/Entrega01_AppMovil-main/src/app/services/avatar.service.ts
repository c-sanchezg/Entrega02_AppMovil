import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { addDoc, collection, collectionData, doc, docData, Firestore, setDoc ,updateDoc} from '@angular/fire/firestore';
import { getDownloadURL, ref, Storage, uploadString } from '@angular/fire/storage';
import { Photo } from '@capacitor/camera';
import { base64 } from '@firebase/util';
import { Observable } from 'rxjs';
import { Usuario } from '../services/usuario';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(private auth:Auth,
    private firestore:Firestore,
    private storage:Storage) { }

    getUserProfile(){
      const user = this.auth.currentUser;
      const userDocRef = doc(this.firestore,`users/${user.uid}`);
      return docData(userDocRef);
    }

    async addUsuario(usuario: Usuario){
      const user = this.auth.currentUser;
      try {
        const userDocRef = doc(this.firestore,`users/${user.uid}`);
        await setDoc(userDocRef,{
          name: usuario.name,
          lastname: usuario.lastname,
          gender: usuario.gender,
          email: usuario.email,
          age: usuario.age,
          image: usuario.image,
          perfil: usuario.perfil
        });

        return true;
      } catch (error) {
        return false;
      }
    }
    getUser(){
      const user = this.auth.currentUser;
      return user.uid;
    }

    
    getEmail(){
      const user = this.auth.currentUser;
      return user.email;
    }


    async Getavatar(cameraFile:Photo){
      const user = this.auth.currentUser;
      const path = `uploads/${user.uid}/profile.png`;
      const storageRef = ref(this.storage,path);
        await uploadString(storageRef,cameraFile.base64String || '', 'base64');

        const imageUrl = await Promise.resolve(getDownloadURL(storageRef));
        const imagen: string =imageUrl;
        return imagen;
          
  
  }

  updateUsuario(usuario: Usuario){
    const usuarioRef = doc(this.firestore, `users/${this.auth.currentUser.uid}`);
    return updateDoc(usuarioRef, 
      {
       name: usuario.name,
       lastname: usuario.lastname,
       gender: usuario.gender,
       email: usuario.email,
       age: usuario.age,
       image: usuario.image,
      });
  }

  getUsuarioById(): Observable<Usuario>{
    const usuarioDocRef = doc(this.firestore, `users/${this.auth.currentUser.uid}`);
    return docData(usuarioDocRef) as Observable<Usuario>;
  }

}
