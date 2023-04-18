export function getFileBase64(file: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    const str = JSON.stringify(file);
    const bytes = new TextEncoder().encode(str);
    const blob = new Blob([bytes], {
      type: "application/json;charset=utf-8"
    });
    reader.readAsDataURL(blob);
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };
  });
}
