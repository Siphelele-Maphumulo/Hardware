import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";

admin.initializeApp();

// ✅ Load email credentials from environment config
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

// ✅ Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// ✅ Define data interface
interface ReceiptData {
  email: string;
  receipt: {
    id: string;
    amount: number;
    date: string;
    items?: string[];
    [key: string]: any;
  };
}

// ✅ Main function
export const sendReceiptEmail = functions.https.onCall(
  async (request: functions.https.CallableRequest<ReceiptData>) => {
    const {email, receipt} = request.data;

    // 🔍 Input validation
    if (!email || !receipt || !receipt.id || !receipt.amount || !receipt.date) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        "Missing required fields: email, receipt.id, receipt.amount, or receipt.date."
      );
    }

    // ✉️ Compose the email
    const mailOptions = {
      from: `"Your Store" <${gmailEmail}>`,
      to: email,
      subject: `Your Receipt - ${receipt.id}`,
      html: `
        <h2>Thank you for your purchase!</h2>
        <p><strong>Receipt ID:</strong> ${receipt.id}</p>
        <p><strong>Amount:</strong> $${receipt.amount}</p>
        <p><strong>Date:</strong> ${receipt.date}</p>
        ${
  receipt.items?.length ?
    `<p><strong>Items:</strong> ${receipt.items.join(", ")}</p>` :
    ""
}
      `,
    };

    try {
      // ✅ Send the email
      await transporter.sendMail(mailOptions);

      // ✅ Save the receipt to Firestore
      await admin.firestore().collection("receipts").add({
        email,
        receipt,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
      });

      return {
        success: true,
        message: "Receipt email sent and saved to Firestore.",
      };
    } catch (error: any) {
      console.error("❌ Failed to send email or save receipt:", error);
      throw new functions.https.HttpsError(
        "internal",
        "Could not send email or store receipt.",
        error.message
      );
    }
  }
);
