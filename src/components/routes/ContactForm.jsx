import { useEffect, useState } from "react";
import InputField from "../UI/InputField";
import SelectField from "../UI/SelectField";
import TextareaField from "../UI/TextareaField";
import emailjs from "@emailjs/browser";
import Button from "../UI/Button";

const ContactForm = () => {
  const [values, setValues] = useState({
    fullName: "",
    vehicle: "",
    email: "",
    mobile: "",
    package: "",
    message: "",
    address: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_2fhr2hn", "template_7dtehrt", values, "QaHYb2JsoQeJCIYVd")
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setValues({
            fullName: "",
            vehicle: "",
            email: "",
            mobile: "",
            package: "",
            message: "",
            address: "",
          });
          setStatus("SUCCESS");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="w-[70%] mx-auto">
      {status && renderAlert()}
      <form
        className="flex flex-col items-center justify-center w-full"
        onSubmit={handleSubmit}
      >
        <h3 className="text-black text-lg pt-3">Send us message</h3>
        <InputField
          value={values.fullName}
          handleChange={handleChange}
          label="Full Name"
          name="fullName"
          type="text"
          placeholder="John Doe"
        />
        <InputField
          value={values.vehicle}
          handleChange={handleChange}
          label="Vehicle Details"
          name="vehicle"
          type="text"
          placeholder="2023 Toyota RAV4 White"
        />
        <InputField
          value={values.email}
          handleChange={handleChange}
          label="E-Mail"
          name="email"
          type="email"
          placeholder="jphn@example.com"
        />
        <InputField
          value={values.mobile}
          handleChange={handleChange}
          label="Mobile"
          name="mobile"
          type="tel"
          placeholder="267 123 4567"
        />
        <InputField
          value={values.address}
          handleChange={handleChange}
          label="Service Address"
          name="address"
          type="text"
          placeholder="327 S Academy St, Cary"
          autocomplete="address"
        />
        <SelectField
          handleChange={handleChange}
          name="package"
          label="Choose Package"
        />
        <TextareaField
          value={values.message}
          handleChange={handleChange}
          label="Your message here"
          name="message"
        />
        <div className="flex justify-cente py-3">
          <Button
            type="submit"
            children="Submit"
            color={"secondary"}
            className="w-full"
          />
        </div>
      </form>
    </div>
  );
};

const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
    <p>your message submitted successfully</p>
  </div>
);

export default ContactForm;
