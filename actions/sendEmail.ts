"use server";

export const sendEmail = async (formData: FormData) => {
  console.log("Running on the server");
  console.log(formData.get("senderEmail"));
};
