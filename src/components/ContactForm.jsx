import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { THANK_YOU_PATH } from "../utils/constants";
import Button from "./UI/Button";
import Checkbox from "./UI/Checkbox";
import InputField from "./UI/InputField";
import SelectField from "./UI/SelectField";
import TextareaField from "./UI/TextareaField";

const ContactForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  const heading =
    location.pathname === "/contact" ? "Tell Us About" : "Contact Us";
  const [isChecked, setIsChecked] = useState(false);
  const [values, setValues] = useState({
    fullName: "",
    vehicle: "",
    year: "",
    email: "",
    mobile: "",
    contact: "",
    address: "",
    serviceOne: "",
    serviceTwo: "",
    serviceThree: "",
    addonOne: "",
    addonTwo: "",
    addonThree: "",
    date: "",
    time: "",
    message: "",
  });

  const [error, setError] = useState(false);
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const checkHandler = () => {
    console.log(isChecked);
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
    if (!values.serviceOne || values.serviceOne === "") {
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
      .send("service_2fhr2hn", "template_5wl1qp6", values, "QaHYb2JsoQeJCIYVd")
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setValues({
            fullName: "",
            vehicle: "",
            year: "",
            email: "",
            mobile: "",
            contact: "",
            address: "",
            serviceOne: "",
            serviceTwo: "",
            serviceThree: "",
            addonOne: "",
            addonTwo: "",
            addonThree: "",
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
        navigate(THANK_YOU_PATH);
      }, 1500);
    }
  }, [status, location.pathname]);

  const renderAlert = () => {
    if (status === "SUCCESS") {
      return (
        <div className="px-4 py-3 leading-normal mb-5 text-center bg-blue text-white rounded-md">
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
    <div className="w-full mx-auto mb-10">
      <form className="flex flex-col mx-auto md:w-full" onSubmit={handleSubmit}>
        <h3 className="text-black text-2xl mt-4 py-1 border-b border-gray">
          {heading}
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
              placeholder="john@example.com"
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
            <SelectField
              handleChange={handleChange}
              name="contact"
              label="Preferred contact method?"
              defaultOption="Contact method"
              options={["Email", "Phone"]}
              value={values.contact}
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
            <div>
              <SelectField
                handleChange={handleChange}
                name="serviceOne"
                label="Which service are you interested in?"
                defaultOption="Preferred service"
                options={[
                  "Wash & Wax",
                  "Wipe & Clean",
                  "Shine & Shield",
                  "Steam & Guard",
                  "Base Detailing",
                  "Complete Detailing",
                  "Deep Cleaning",
                  "Ceramic Coating",
                ]}
                value={values.serviceOne}
                required={true}
              />
              <SelectField
                handleChange={handleChange}
                name="serviceTwo"
                defaultOption="Preferred service"
                options={[
                  "Wash & Wax",
                  "Wipe & Clean",
                  "Shine & Shield",
                  "Steam & Guard",
                  "Base Detailing",
                  "Complete Detailing",
                  "Deep Cleaning",
                  "Ceramic Coating",
                ]}
                value={values.serviceTwo}
              />
              <SelectField
                handleChange={handleChange}
                name="serviceThree"
                defaultOption="Preferred service"
                options={[
                  "Wash & Wax",
                  "Wipe & Clean",
                  "Shine & Shield",
                  "Steam & Guard",
                  "Base Detailing",
                  "Complete Detailing",
                  "Deep Cleaning",
                  "Ceramic Coating",
                ]}
                value={values.serviceThree}
              />
            </div>
            <div>
              <SelectField
                handleChange={handleChange}
                name="addonOne"
                label="Which add-on are you interested in?"
                defaultOption="Preferred add-on"
                options={[
                  "Engine Detailing",
                  "Excessice Hair/Sand Removal",
                  "Seats/Carpet Shampoo",
                  "Ceramic Coating",
                ]}
                value={values.addonOne}
              />
              <SelectField
                handleChange={handleChange}
                name="addonTwo"
                defaultOption="Preferred add-on"
                options={[
                  "Engine Detailing",
                  "Excessice Hair/Sand Removal",
                  "Seats/Carpet Shampoo",
                  "Ceramic Coating",
                ]}
                value={values.addonTwo}
              />
              <SelectField
                handleChange={handleChange}
                name="addonThree"
                defaultOption="Preferred add-on"
                options={[
                  "Engine Detailing",
                  "Excessice Hair/Sand Removal",
                  "Seats/Carpet Shampoo",
                  "Ceramic Coating",
                ]}
                value={values.addonThree}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <h3 className="text-black text-lg my-4 border-b border-gray py-1">
            4. Select date and time what will be best for you
          </h3>
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
            label="I guarantee that access to power and water will be provided and accessible at the time of service"
          />
        </div>
        {errorMessage && (
          <div className="text-red-500 text-center pt-5">{errorMessage}</div>
        )}
        {status && renderAlert()}
        <div className="flex justify-cente mt-8">
          <Button
            type="submit"
            children="Request Quote"
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
