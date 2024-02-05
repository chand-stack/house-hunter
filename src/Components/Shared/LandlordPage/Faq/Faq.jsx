const Faq = () => {
  return (
    <div className="container mx-auto px-2 md:px-10 text-black">
      <h1 className="text-center text-3xl md:text-5xl font-bold text-black py-20">
        Frequently Asked Questions
      </h1>
      <div className="collapse collapse-plus bg-white">
        <input type="radio" name="my-accordion-1" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          How does House Hunter work for renters?
        </div>
        <div className="collapse-content">
          <p>
            House Hunter simplifies the rental process by providing a curated
            platform for discovering, booking, and settling into your ideal
            home. Browse listings, connect with property owners, and enjoy a
            seamless experience from start to finish.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-white">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What types of properties are available on House Hunter?
        </div>
        <div className="collapse-content">
          <p>
            House Hunter features a diverse range of rental properties,
            including apartments, houses, and condos. Our listings cater to
            various preferences and lifestyles.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-white">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How can I book a property on House Hunter?
        </div>
        <div className="collapse-content">
          <p>
            Booking a property is easy! Simply browse listings, submit
            inquiries, and engage in discussions with property owners through
            our platform. Once you find the perfect place, follow the simple
            booking process provided.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-white">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          Is there a support team to assist me during the renting process?
        </div>
        <div className="collapse-content">
          <p>
            Absolutely! Our dedicated support team is here to assist you with
            any questions or concerns you may have. Feel free to reach out
            through our Get in Touch section for personalized assistance.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-white">
        <input type="radio" name="my-accordion-5" />
        <div className="collapse-title text-xl font-medium">
          Can I schedule a property viewing before booking?
        </div>
        <div className="collapse-content">
          <p>
            Yes, you can! Utilize our virtual property viewing feature to take a
            virtual tour of available rentals. It&lsquo;s a convenient way to
            explore interiors and get a feel for the space before making a
            decision.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-white">
        <input type="radio" name="my-accordion-6" />
        <div className="collapse-title text-xl font-medium">
          What post-move support does House Hunter provide?
        </div>
        <div className="collapse-content">
          <p>
            Our commitment extends beyond move-in day. Benefit from our
            post-move support, offering resources, decorating tips, and ongoing
            assistance to ensure your comfort in your new home.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-white">
        <input type="radio" name="my-accordion-7" />
        <div className="collapse-title text-xl font-medium">
          Are there any hidden fees when booking through House Hunter?
        </div>
        <div className="collapse-content">
          <p>
            No hidden fees! House Hunter is transparent about all costs
            associated with the rental process. Review the terms and conditions
            of each listing to understand the complete financial picture.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-white">
        <input type="radio" name="my-accordion-8" />
        <div className="collapse-title text-xl font-medium">
          Can I communicate directly with property owners through the platform?
        </div>
        <div className="collapse-content">
          <p>
            Yes, you can! House Hunter provides a convenient chat feature that
            allows seamless communication between renters and property owners.
            Discuss details, negotiate terms, and clarify any questions.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-white">
        <input type="radio" name="my-accordion-9" />
        <div className="collapse-title text-xl font-medium">
          How can I personalize my rented space on House Hunter?
        </div>
        <div className="collapse-content">
          <p>
            Make your rental feel like home with our Time to Decorate resources.
            Find inspiration, tips, and practical advice to personalize your
            space according to your style and preferences.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-white">
        <input type="radio" name="my-accordion-10" />
        <div className="collapse-title text-xl font-medium">
          What happens if I encounter issues after moving in?
        </div>
        <div className="collapse-content">
          <p>
            We&lsquo;ve got you covered! If you encounter any issues post-move,
            reach out to our support team. We&lsquo;re dedicated to resolving
            any concerns promptly and ensuring your overall satisfaction in your
            new home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
