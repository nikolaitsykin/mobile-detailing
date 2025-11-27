import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { addons } from "../utils/addons";
import { OLD_PHONE_NUMBER, THANK_YOU_PATH } from "../utils/constants";
import Button from "./UI/Button";
import InputField from "./UI/InputField";
import SelectField from "./UI/SelectField";
import TextareaField from "./UI/TextareaField";

const ContactForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const heading =
    location.pathname === "/contact" ? (
      "Tell Us About"
    ) : (
      <h2>
        Not Sure What You Need?
        <br /> Talk to a Specialist!
      </h2>
    );
  const headingClass =
    location.pathname === "/contact" ? "text-start" : "text-center";

  const addonsList = addons.map((addon) => addon.title);
  const servicesList = [
    "Ceramic Coating",
    "Paint Correction",
    "Express Exterior",
    "Express Interior",
    "Express Full Detailing",
    "Ultimate Exterior",
    "Ultimate Interior",
    "Ultimate Full Detailing",
    "Maintenance Detailing",
    "Odor Removal",
    "Steam and Shampoo",
  ];
  const dates = ["Today", "Tomorrow", "This Week", "Next Week", "This Month"];

  const [values, setValues] = useState({
    fullName: "",
    vehicle: "",
    email: "",
    mobile: "",
    contact: "",
    serviceOne: "",
    addonOne: "",
    date: "",
    message: "",
  });

  const [error, setError] = useState(false);
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
    if (!values.serviceOne || values.serviceOne === "") {
      setErrorMessage("Service type is required");
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
            email: "",
            mobile: "",
            contact: "",
            serviceOne: "",
            addonOne: "",
            date: "",
            message: "",
          });
          setStatus("SUCCESS");
          setError(false);
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
      console.log("SUCCESS");
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
    <div className="w-full mx-auto mb-10 mt-5">
      <form className="flex flex-col mx-auto md:w-full" onSubmit={handleSubmit}>
        <div className={`text-black text-2xl mt-4 py-1  ${headingClass}`}>
          {heading}
        </div>
        <div className="w-full flex flex-col">
          <h3 className="text-black text-lg my-4 border-b border-gray py-1">
            1. Your personal details
          </h3>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2  gap-2">
            <InputField
              value={values.fullName}
              handleChange={handleChange}
              label="First and Last Name"
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
              placeholder={OLD_PHONE_NUMBER}
              required={true}
            />
            <SelectField
              handleChange={handleChange}
              name="contact"
              label="Best Way to Reach You"
              defaultOption="Contact method"
              options={["Email", "Call", "Text"]}
              value={values.contact}
            />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <h3 className="text-black text-lg my-4 border-b border-gray py-1">
            2. Your vehicle details
          </h3>
          <div className="w-full grid grid-cols-1 gap-2">
            <InputField
              value={values.vehicle}
              handleChange={handleChange}
              label="Your Vehicle Year, Make and Model"
              name="vehicle"
              type="text"
              placeholder="Toyota RAV4"
              required={true}
            />
          </div>
        </div>
        <div>
          <h3 className="text-black text-lg my-4 border-b border-gray py-1">
            3. Select your preferred service
          </h3>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <SelectField
                handleChange={handleChange}
                name="serviceOne"
                label="Which type of service are you interested in?"
                defaultOption="Preferred service"
                options={servicesList}
                value={values.serviceOne}
                required={true}
              />
            </div>
            <div>
              <SelectField
                handleChange={handleChange}
                name="addonOne"
                label="Which add-on are you interested in?"
                defaultOption="Preferred add-on"
                options={addonsList}
                value={values.addonOne}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <h3 className="text-black text-lg my-4 border-b border-gray py-1">
            4. Select preferred date
          </h3>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
            <SelectField
              value={values.date}
              handleChange={handleChange}
              label="How soon do you need the service?"
              name="date"
              defaultOption="Preferred date?"
              options={dates}
            />
          </div>
        </div>
        <TextareaField
          value={values.message}
          handleChange={handleChange}
          label="Anything else we should know?"
          name="message"
        />
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
