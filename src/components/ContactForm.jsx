import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import Button from "./UI/Button";
import Checkbox from "./UI/Checkbox";
import InputField from "./UI/InputField";
import SelectField from "./UI/SelectField";
import TextareaField from "./UI/TextareaField";

const ContactForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [values, setValues] = useState({
    fullName: "",
    vehicle: "",
    year: "",
    email: "",
    mobile: "",
    address: "",
    service: "",
    addon: "",
    date: "",
    time: "",
    message: "",
  });
  const [error, setError] = useState(false);
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  const handleChange = (e) => {
    const target = e?.target;
    const value = target ? target.value : "";
    const name = target ? target.name : "";

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values.fullName || values.fullName === "") {
      setErrorMessage("Full Name is required");
      setError(true);
      return;
    }
    if (!values.email || values.email === "") {
      setErrorMessage("E-Mail is required");
      setError(true);
      return;
    }
    if (!values.mobile || values.mobile === "") {
      setErrorMessage("Mobile is required");
      setError(true);
      return;
    }
    if (!values.address || values.address === "") {
      setErrorMessage("Service Address is required");
      setError(true);
      return;
    }
    if (!values.service || values.service === "") {
      setErrorMessage("Service type is required");
      setError(true);
      return;
    }
    if (!isChecked) {
      setErrorMessage("Please accept terms and conditions");
      setError(true);
      return;
    }

    emailjs
      .send("service_2fhr2hn", "template_7dtehrt", values, "QaHYb2JsoQeJCIYVd")
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setValues({
            fullName: "",
            vehicle: "",
            year: "",
            email: "",
            mobile: "",
            address: "",
            service: "",
            addon: "",
            date: "",
            time: "",
            message: "",
          });
          setStatus("SUCCESS");
          setError(false);
          setIsChecked(false);
        },
        (error) => {
          console.log("FAILED...", error);
          setErrorMessage(error.message);
          setError(true);
        }
      );
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setError(false);
      setErrorMessage("");
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  const renderAlert = () => {
    if (status === "SUCCESS") {
      return (
        <div className="px-4 py-3 leading-normal mb-5 text-center">
          <p>Your message submitted successfully</p>
        </div>
      );
    } else if (errorMessage) {
      return (
        <div className="px-4 py-3 leading-normal mb-5 text-center text-red-500">
          <p>{errorMessage}</p>
        </div>
      );
    }
  };

  return (
    <div className="w-full  mx-auto">
      <form className="flex flex-col mx-auto md:w-full" onSubmit={handleSubmit}>
        <h3 className="text-black text-2xl mt-4 py-1 border-b border-gray">
          Tell us about
        </h3>
        <div className="w-full flex flex-col">
          <h3 className="text-black text-lg my-4 border-b border-gray py-1">
            1. Your personal details
          </h3>
          <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-2">
            <InputField
              value={values.fullName}
              handleChange={handleChange}
              label="Full Name"
              name="fullName"
              type="name"
              placeholder="John Doe"
              required={true}
            />
            <InputField
              value={values.email}
              handleChange={handleChange}
              label="Email Address"
              name="email"
              type="email"
              placeholder="jphn@example.com"
              required={true}
            />
            <InputField
              value={values.mobile}
              handleChange={handleChange}
              label="Phone Number"
              name="mobile"
              type="tel"
              placeholder="(919) 906-0099"
              required={true}
            />
            <InputField
              value={values.address}
              handleChange={handleChange}
              label="Where would you like us to serve?"
              name="address"
              type="address"
              placeholder="327 S Academy St, Cary"
              autocomplete="address"
              required={true}
            />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <h3 className="text-black text-lg my-4 border-b border-gray py-1">
            2. Your vehicle details
          </h3>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
            <InputField
              value={values.vehicle}
              handleChange={handleChange}
              label="Your Vehicle Make and Model"
              name="vehicle"
              type="text"
              placeholder="Toyota RAV4"
              required={true}
            />
            <InputField
              value={values.year}
              handleChange={handleChange}
              label="Your Vehicle Year"
              name="year"
              type="year"
              placeholder="2023"
              required={true}
            />
          </div>
        </div>
        <div>
          <h3 className="text-black text-lg my-4 border-b border-gray py-1">
            3. Select your preferred service
          </h3>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
            <SelectField
              handleChange={handleChange}
              name="service"
              label="Which service are you interested in?"
              defaultOption="Preferred service"
              options={[
                "Wash & Wax",
                "Wipe & Clean",
                "Shine & Shield",
                "Steam & Guard",
                "Full Detail",
              ]}
              value={values.service}
              required={true}
            />
            <InputField
              value={values.addon}
              handleChange={handleChange}
              label="Which addons are you interested in?"
              name="addon"
              type="text"
              placeholder="Engine Bay Detail, Pet Hair Removal etc."
            />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <h3 className="text-black text-lg my-4 border-b border-gray py-1">
            4. Select date and time what will be best for you
          </h3>
          <p className="text-black text-base my-3">
            We currently offer services on weekdays between 5 PM and 8 PM and
            weekends between 9 AM and 6 PM
          </p>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
            <InputField
              value={values.date}
              handleChange={handleChange}
              label="Preferred Date"
              name="date"
              type="date"
              placeholder="eg. 01/01/2024"
              required={true}
            />
            <InputField
              value={values.time}
              handleChange={handleChange}
              label="Preferred Time"
              name="time"
              type="time"
              placeholder="eg. 10:00 AM"
              required={true}
            />
          </div>
        </div>
        <TextareaField
          value={values.message}
          handleChange={handleChange}
          label="Anything else we should know?"
          name="message"
        />
        <div className="w-full flex justify-start items-start">
          <Checkbox
            checkHandler={checkHandler}
            name="terms"
            value={values.terms}
          />
        </div>
        {errorMessage && (
          <div className="text-red-500 text-center pt-5">{errorMessage}</div>
        )}
        {status && renderAlert()}

        <div className="flex justify-cente mt-8">
          <Button
            type="submit"
            children="SEND SERVICE REQUEST"
            color="secondary"
            className="w-full"
            disabled={error}
          />
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
