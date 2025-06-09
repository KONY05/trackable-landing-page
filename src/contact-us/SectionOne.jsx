import ContactItem from "../ui/ContactItem";

function SectionOne() {
  return (
    <section className="">
      <div className="flex flex-col gap-8 px-4 py-12 md:flex-row md:justify-between md:px-8 lg:px-28 lg:py-24">
        <ContactItem
          icon="contact.svg"
          title="Contact address"
          subText="Questions or queries? Get in touch!"
        >
          ***@***.com
        </ContactItem>

        <ContactItem
          icon="office.svg"
          title="Office"
          subText="Registered Locations"
        >
          Wyoming, United States
          <br />&<br />
          Rivers state, Nigeria.
        </ContactItem>

        <ContactItem
          icon="phone.svg"
          title="Phone"
          subText="Mon-Fri from 8am to 5pm."
        >
          +1 (555) 000-0000
        </ContactItem>
      </div>
    </section>
  );
}

export default SectionOne;
