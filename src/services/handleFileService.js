import app from "./firebaseService";
import { getStorage, ref, uploadBytes, deleteObject, getDownloadURL, refFromURL } from "firebase/storage";

const storage = getStorage(app);


export const saveMediaToStorage = async (source, directory) => {
  // Tạo đường dẫn đến tập tin duy nhất
  const fileExtension = source.substring(source.lastIndexOf(".") + 1);
  const fileName = `${directory}/${new Date().getTime()}.${fileExtension}`;

  try {
    // Tải tập tin từ địa chỉ URI
    const response = await fetch(source);
    const blob = await response.blob();

    // Tạo tham chiếu đến thư mục trên Firebase Storage
    const storageRef = ref(storage, fileName);
    const up = await uploadBytes(storageRef, blob);

    // Lấy đường dẫn tải xuống của tệp
    const downloadURL = await getDownloadURL(up.ref);

    return downloadURL;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const removeWithUrlFromStorage = async (downloadURL) => {
  try {
    // Lấy đối tượng tham chiếu tới tệp theo đường dẫn URL
    const fileRef = ref(storage, downloadURL);

    // Xóa tệp đó khỏi Firebase Storage
    await deleteObject(fileRef);

    console.log(`File ${downloadURL} đã bị xóa khỏi Firebase Storage.`);

    return true;

  } catch (error) {
    return false;
  }
};
