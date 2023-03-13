import React from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const alert = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "I Received Your Message, As Soon As Possible I Contact WIth You",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const comment = form.comment.value;
    const email = form.email.value;
    console.log(name, comment, email);

    const message = {
      name,
      comment,
      email,
    };
    fetch("http://localhost:5000/message", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(message),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert();
          event.target.reset();
        }
      });
  };

  return (
    <div className="mt-16">
      <p className="text-center text-3xl">Contact Me</p>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 mt-10 justify-center ">
        <div>
          <form
            onSubmit={handleReview}
            className="grid grid-cols-1 w-3/4 mx-auto "
          >
            <input
              type="text"
              className="mt-6 text-black h-10"
              name="name"
              placeholder="YOUR-NAME"
            />
            <input
              type="email"
              name="email"
              placeholder="YOUR EMAIL"
              className="mt-6 h-10 text-black"
            />
            <textarea
              name="comment"
              id=""
              placeholder="YOUR MESSAGE"
              className="mt-6 max-h-36 text-black"
              cols="10"
              rows="10"
            ></textarea>
            <input
              type="submit"
              value="SUBMIT"
              className="mt-6 
              h-10 text-white border text-center font-bold bg-black text-[#D7A123] "
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
