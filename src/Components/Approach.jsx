import React from "react";

const Approach = () => {
  return (
    <div className="bg-neutral-900">
      {/* Approach */}
      <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 mx-auto">
        {/* Title */}
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
            Our approach
          </h2>
          <p className="mt-1 text-neutral-400">
            Dive into a world of knowledge with our intuitive map, where every
            topic is just a click away!
          </p>
        </div>
        {/* End Title */}

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
          <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
            <img
              className="w-full object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image Description"
            />
          </div>
          {/* End Col */}

          {/* Timeline */}
          <div>
            {/* Heading */}
            <div className="mb-4">
              <h3 className="text-xs font-medium uppercase text-[#ff0]">
                QuickGrab
              </h3>
            </div>
            {/* End Heading */}

            {/* Item */}

            {/* Right Content */}
            <div className="grow pt-0.5 pb-8 sm:pb-12">
              <p className="text-sm lg:text-base text-neutral-400">
                Step into a world of endless possibilities with our innovative
                search app. Designed with you in mind, our intuitive map
                transforms the way you explore information, making every topic
                just a click away. No more sifting through cluttered pages or
                getting lost in endless searches – our app brings clarity and
                efficiency to your fingertips. With a sleek, user-friendly
                interface, discovering new insights has never been easier or
                more enjoyable. Whether you're diving into a new subject or
                revisiting a favorite topic, our app is your gateway to
                knowledge, effortlessly guiding you through a rich landscape of
                information. Experience the joy of seamless exploration and let
                your curiosity lead the way!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
