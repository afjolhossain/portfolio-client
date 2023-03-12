import React from "react";

const Contact = () => {
  return (
    <div className="mt-16">
      <p className="text-center text-3xl">Contact Me</p>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 mt-10 justify-center ">
        <div>
          <form className="grid grid-cols-1 w-3/4 mx-auto ">
            <input type="text" className="mt-6 h-10" placeholder="YOUR-NAME" />
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="mt-6 h-10"
            />
            <textarea
              name="message"
              id=""
              placeholder="YOUR MESSAGE"
              className="mt-6 max-h-36 text-red-300"
              cols="10"
              rows="10"
            ></textarea>
            <input
              type="text"
              value="submit"
              className="mt-6 
              h-10 text-red-300 text-center font-bold bg-black text-[#D7A123] "
            />
          </form>
        </div>
        <div className="grid md:grid-cols-2 sm:mt-10 mx-auto">
          <div className="flex gap-x-4">
            <ion-icon
              style={{ fontSize: "50px" }}
              name="mail-outline"
            ></ion-icon>
            <div>
              <p className="text-[#D7A123]">Email</p>
              <p>afjolhossain020@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-x-4">
            <ion-icon
              style={{ fontSize: "50px" }}
              name="call-outline"
            ></ion-icon>
            <div>
              <p className="text-[#D7A123]">Phone-number </p>
              <p>(088) 01741147274</p>
            </div>
          </div>
          <div className="flex gap-x-4">
            <ion-icon
              style={{ fontSize: "40px" }}
              name="logo-linkedin"
            ></ion-icon>
            <div>
              <p className="text-[#D7A123]">Linkedin</p>
              <a href="https://www.linkedin.com/in/afjol-hossain/">
                Linkedin Profile
              </a>
            </div>
          </div>
          <div className="flex gap-x-4">
            <ion-icon
              style={{ fontSize: "40px" }}
              name="location-outline"
            ></ion-icon>
            <div>
              <p className="text-[#D7A123]">Location</p>
              <p>Golapgonj,Sylhet,Bangladesh</p>
            </div>
          </div>
          <p>I am avilable for Remote JOB & Freelancing Work</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
