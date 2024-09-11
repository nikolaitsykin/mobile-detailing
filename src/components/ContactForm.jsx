import { useEffect, useState } from "react";
import InputField from "./UI/InputField";
import SelectField from "./UI/SelectField";
import TextareaField from "./UI/TextareaField";
import emailjs from "@emailjs/browser";
import Button from "./UI/Button";

const ContactForm = () => {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(false);
  const [errorCheckbox, setErrorCheckbox] = useState(null);

  const handleCheckBoxChange = (event) => {
    if (event.target.checked) {
      setChecked(true);
      setErrorCheckbox(null);
      console.log("ACCEPTED TERMS");
    } else {
      setChecked(false);
      console.log("DIDN'T ACCEPT TERMS");
      setErrorCheckbox("You must accept the terms");
    }
  };

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
  const [errorMessage, setErrorMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    if (checked === false) {
      setError(true);
      setErrorCheckbox("You must accept the terms");
    } else {
      e.preventDefault();
      e.preventDefault();

      if (values.fullName === "") {
        setErrorMessage("Full Name is required");
        return;
      }
      if (values.email === "") {
        setErrorMessage("E-Mail is required");
        return;
      }
      if (values.mobile === "") {
        setErrorMessage("Mobile is required");
        return;
      }
      if (values.address === "") {
        setErrorMessage("Service Address is required");
        return;
      }
      if (values.service === "") {
        setErrorMessage("Service type is required");
        return;
      }
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
    const target = e.target;
    const value = target ? target.value : "";
    const name = target ? target.name : "";
    /* clear error on change */
    if (errorMessage !== "") {
      setErrorMessage("");
    }
    if (name) {
      setValues((values) => ({
        ...values,
        [name]: value,
      }));
    }
  };

  const renderAlert = () => {
    if (status === "SUCCESS") {
      return (
        <div className="px-4 py-3 leading-normal mb-5 text-center">
          <p>Your message submitted successfully</p>
        </div>
      );
    }
  };

  return (
    <div className="w-full  mx-auto">
      <form className="flex flex-col w-full" onSubmit={handleSubmit}>
        <h3 className="text-black text-2xl my-4 border-b border-gray font-syne font-semibold">
          Contact us today
        </h3>
        <div className="w-full flex flex-col">
          <h3 className="text-black font-syne font-semibold text-lg my-4 border-b border-gray py-1">
            1. Your personal details
          </h3>
          <div className="w-full grid grid-cols-1 md:grid-cols-2">
            <InputField
              value={values.fullName}
              handleChange={handleChange}
              label="Full Name"
              name="fullName"
              type="text"
              placeholder="John Doe"
              required
            />
            <InputField
              value={values.email}
              handleChange={handleChange}
              label="Email Address"
              name="email"
              type="email"
              placeholder="jphn@example.com"
              required
            />
            <InputField
              value={values.mobile}
              handleChange={handleChange}
              label="Phone Number"
              name="mobile"
              type="tel"
              placeholder="267 123 4567"
              required
            />
            <InputField
              value={values.address}
              handleChange={handleChange}
              label="Where would you like us to serve?"
              name="address"
              type="text"
              placeholder="327 S Academy St, Cary"
              autocomplete="address"
            />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <h3 className="text-black font-syne font-semibold text-lg my-4 border-b border-gray py-1">
            2. Your vehicle details
          </h3>
          <div className="w-full grid grid-cols-1 md:grid-cols-2">
            <InputField
              value={values.vehicle}
              handleChange={handleChange}
              label="Your Vehicle Make and Model"
              name="vehicle"
              type="text"
              placeholder="Toyota RAV4"
            />
            <InputField
              value={values.year}
              handleChange={handleChange}
              label="Your Vehicle Year"
              name="year"
              type="text"
              placeholder="2023"
            />
          </div>
        </div>
        <div>
          <h3 className="text-black font-syne font-semibold text-lg my-4 border-b border-gray py-1">
            3. Select your preferred service
          </h3>
          <div className="w-full grid grid-cols-1 md:grid-cols-2">
            <SelectField
              handleChange={handleChange}
              name="service"
              label="Which service are you interested in?"
              defaultOption={"Preferred service"}
              options={[
                "Basic Detail",
                "Prime Detail",
                // "Deluxe Detail"
              ]}
              value={values.service}
              required
            />
            {/* <SelectField
            handleChange={handleChange}
            name="addon"
            label="Which add-on are you interested in?"
            defaultOption={"Choose your add-on"}
            options={[
              "Headlights Restoration",
              "Engine Bay Cleaning",
              "Excessive Pet Hair Removal",
              "Headliner Cleaning",
            ]}
          /> */}
          </div>
        </div>
        <div className="w-full flex flex-col">
          <h3 className="text-black font-syne font-semibold text-lg my-4 border-b border-gray py-1">
            4. Select date and time what will be best for you
          </h3>
          <p className="text-black text-base my-1 p-0.5">
            We currently offer services on weekends between 9 AM and 6 PM
          </p>
          <div className="w-full grid grid-cols-1 md:grid-cols-2">
            <InputField
              value={values.date}
              handleChange={handleChange}
              label="Preferred Date"
              name="date"
              type="text"
              placeholder="eg. 01/01/2024"
            />
            <InputField
              value={values.time}
              handleChange={handleChange}
              label="Preferred Time"
              name="time"
              type="text"
              placeholder="eg. 10:00 AM"
            />
          </div>
        </div>
        <TextareaField
          value={values.message}
          handleChange={handleChange}
          label="Anything else we should know?"
          name="message"
        />{" "}
        <div className="w-full flex justify-start items-start">
          <input
            type="checkbox"
            className="w-4 h-4"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="terms">
            I understand that the detailing service requires access to power and
            water, and I guarantee that both will be provided and accessible at
            the time of service
          </label>
        </div>
        <div className="flex justify-cente py-3 ">
          <Button
            // {checked ? "disabled" : "enabled"}
            type="submit"
            children="SEND SERVICE REQUEST"
            color={"secondary"}
            className="w-full"
          />
        </div>
      </form>
      {status && renderAlert()}
      {errorMessage && (
        <div className="text-red-500 text-center">{errorMessage}</div>
      )}
    </div>
  );
};
export default ContactForm;
