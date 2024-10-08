import React from "react";

const NewletterBox = () => {
  const onsubmithandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe Now & Get 20% off{" "}
      </p>
      <p className="text-gray-400 m-3 ">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis
        maiores rem earum suscipit dolor quis facilis autem, a aliquam quaerat
        mollitia quod hic fugiat iste nostrum beatae quas labore.
      </p>

      <form
        onSubmit={onsubmithandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter Your Email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          {" "}
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewletterBox;
