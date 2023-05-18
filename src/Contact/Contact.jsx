import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { TextField } from "@mui/material";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_sxvsi68",
        "template_r55gocz",
        form.current,
        "7ThCWqR-QDwlzLT8z"
      )
      .then(
        (result) => {
          alert(result.status);
          document.getElementById("reset").reset();
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <form ref={form} id="reset" onSubmit={sendEmail} className="grid gap-4 ms-20 w-8/12">
      <label className="text-4xl font-semibold">Contact Directly</label>
      <TextField name="From" variant="filled" label="From" />
      <textarea
        name="message"
        placeholder="Message"
        rows={8}
        className="border-2 border-gray-300 p-2 rounded-md"
      />
      <div className="text-center">
        {" "}
        <input
          type="submit"
          value="Send"
          className="bg-indigo-500 px-6 py-1 text-center font-semibold rounded-md text-xl border-2 border-indigo-500 hover:text-indigo-500 hover:bg-white"
        />
      </div>
    </form>
  );
};
