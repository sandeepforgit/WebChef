import React from "react";

function About() {
  return (
    <div class="flex items-center justify-center m-32 h-screen sm:h-full">
      <section class=" w-72 h-72 rounded-lg shadow-lg p-6">
        <span class="flex gap-3 items-center m-3">
          <h1 class="font-semibold text-lg">Name:</h1>
          <h1>Sandeep</h1>
        </span>
        <span class="flex gap-3 items-center m-3">
          <h1 class="font-semibold text-lg">Email:</h1>
          <h1>Sandeep##@fmail.com</h1>
        </span>
        <span class="flex gap-3 items-center m-3">
          <h1 class="font-semibold text-lg">Country:</h1>
          <h1>India</h1>
        </span>
      </section>
    </div>
  );
}

export default About;
