//     import{ useState } from 'react';
// import axios from 'axios';

// const CloudinaryUpload = () => {
//   const [imageUrl, setImageUrl] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   // Cloudinary settings (store these in .env)
//   const cloudName = 'your_cloud_name'; // From Cloudinary dashboard
//   const uploadPreset = 'your_upload_preset'; // Create an "unsigned" preset in Cloudinary

//   const handleFileChange = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setLoading(true);
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', uploadPreset);
//     formData.append('cloud_name', cloudName);

//     try {
//       const response = await axios.post(
//         `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
//         formData
//       );
//       setImageUrl(response.data.secure_url);
//       setError('');
//     } catch (err) {
//       setError('Upload failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="file"
//         onChange={handleFileChange}
//         accept="image/*"
//         disabled={loading}
//       />
//       {loading && <p>Uploading...</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {imageUrl && (
//         <div>
//           <p>Uploaded Image:</p>
//           <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '200px' }} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default CloudinaryUpload;