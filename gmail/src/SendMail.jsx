import React from "react";
import "./SendMail.css";
import { Close } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { dBase } from "./firebase";
import firebase from "firebase";

const SendMail = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch(closeSendMessage);

  const onSubmit = (formData) => {
    dBase.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMail__error">Email is Required!</p>}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail__error">Subject is Required!</p>
        )}

        <input
          name="message"
          placeholder="Message..."
          className="sendMail__message"
          type="text"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail__error">Message is Required!</p>
        )}

        <div className="sendMailOptions">
          <Button
            className="sendMail__send"
            color="primary"
            type="submit"
            variant="contained"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
