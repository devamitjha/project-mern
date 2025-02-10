export const getCroppedImg = (imageSrc, croppedAreaPixels) => {
    return new Promise((resolve) => {
      const image = new Image();
      image.src = imageSrc;
      image.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
  
        canvas.width = croppedAreaPixels.width;
        canvas.height = croppedAreaPixels.height;
  
        ctx.drawImage(
          image,
          croppedAreaPixels.x,
          croppedAreaPixels.y,
          croppedAreaPixels.width,
          croppedAreaPixels.height,
          50,
          50,
          croppedAreaPixels.width,
          croppedAreaPixels.height
        );
  
        resolve(canvas.toDataURL("image/jpg"));
      };
    });
  };
  