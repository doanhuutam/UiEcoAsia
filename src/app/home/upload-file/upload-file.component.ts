import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from "@angular/fire/storage";

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  selectedFile!: File;
  ref!: AngularFireStorageReference;
  downloadURL: string='';
  checkUploadFile = false;
  @Output()
  giveURLtoCreate = new EventEmitter<string>();

  constructor(private afStorage: AngularFireStorage) { }

  ngOnInit(): void {
  }
  onFileChanged($event:any){
    this.selectedFile  = $event.target.files[0];
  }
  onUpload(){
    this.checkUploadFile = true;

    const id = Math.random().toString(36).substring(2); //Tạo ra 1 name riêng cho mỗi DB firebase;

    this.ref = this.afStorage.ref(id);

    this.ref.put(this.selectedFile).then(snapshot =>{
      return snapshot.ref.getDownloadURL(); //Tra ve 1 chuoi sieu van ban tren FB.
    }).then( downloadURL =>{ //chuyen giao link tu nhung component khac nhau khi su upload
      this.downloadURL = downloadURL;
      this.giveURLtoCreate.emit(this.downloadURL);
      this.checkUploadFile = false;
      return downloadURL;
    })
      .catch(error =>{
        console.log(`Failed to upload avatar and get link ${error}`);
      })
  }
}
