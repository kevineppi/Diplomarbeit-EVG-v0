import { Component } from '@angular/core';

@Component({
  selector: 'app-admincomponent',
  templateUrl: './admincomponent.component.html',
  styleUrls: ['./admincomponent.component.css']
})
export class AdmincomponentComponent
{
  //TS Code zum Senden des Files (der Karten)

  


  //Methode zum errechnen eines Bytewertes aus einem Foto
  getByteValueFromImage(imageFile: File): Promise<Uint8Array> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      if (event.target && event.target.result) {
        const image = new Image();
        image.onload = () => {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');

          if (!context) {
            reject(new Error('Canvas 2D context not supported'));
            return;
          }

          canvas.width = image.width;
          canvas.height = image.height;
          context.drawImage(image, 0, 0);

          const imageData = context.getImageData(0, 0, image.width, image.height);
          const byteData = new Uint8Array(imageData.data.buffer);
          resolve(byteData);
        };

        image.src = event.target.result.toString();
      } else {
        reject(new Error('Failed to read image file'));
      }
    };

    reader.readAsDataURL(imageFile);
  });
}


   async sendFileToBackend() {
    //Foto holen und den Bytewert aus diesem Foto errechnen, zum weiterleiten
    const inputElement = document.getElementById('fileInput') as HTMLInputElement;
    var byteValue;
    if (inputElement && inputElement.files && inputElement.files.length > 0) {
      const imageFile = inputElement.files[0];
      try {
         byteValue = await this.getByteValueFromImage(imageFile);
        /*console.log(byteValue);*/
      } catch (error) {
        console.error('Error:', error);
      }
     }
     console.log(byteValue);
     const url = '/AdminController/GetByteFromPicture'; // Ersetze dies mit der tatsächlichen URL deines Backend-Endpunkts

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/octet-stream', // Setze den korrekten Content-Type für Binärdaten
    },
    body: byteValue,
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  })
  .catch(error => {
    console.error('Error sending byte value to backend:', error);
    throw error;
  });

  }

}
