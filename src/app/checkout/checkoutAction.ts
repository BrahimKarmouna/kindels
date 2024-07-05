// "use server";
// export default async function checkoutAction(
//   productId: number | null,
//   countSelected: number,
//   formData: FormData
// ) {
//   if (countSelected > 0 || !productId) {
//     return 0;
//   }

//   const rawFormData = {
//     nome: formData.get("nom"),
//     prénom: formData.get("prénom"),
//     phone: formData.get("phone"),
//     address: formData.get("address"),
//     email: formData.get("email"),
//     ville: formData.get("ville"),
//   };
//   if (Object.values(rawFormData).findIndex((i) => !i) === -1) {
//     return 0;
//   }
//   const sendEmail = async (e: any) => {
//     e.preventDefault();

//     try {
//       e.target.reset();
//     } catch (error) {
//       console.log(error);
//     } finally {
//     }
//   };
// }
