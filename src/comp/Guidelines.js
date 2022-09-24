import React from "react";
import FAQ from "./FAQ";
import Nav from "./Nav";
const Guidelines = () => {
  return (
    <div id="bg-black">
      <section className="bg-black text-gray-400">
        <Nav />
        <div className="container mx-auto flex flex-col p-6">
          <h2 className="py-4 text-3xl font-bold text-center text-white">
            Guidelines
          </h2>

          <div className="divide-y divide-gray-700">
            <div class="text-left flex-col items-center py-6">
              <span className="text-xl font-bold md:text-2xl">
                1. It is mandatory for each team should consist of 2-4 members.
              </span>
              <br />
              <br />
              <span className="text-xl font-bold md:text-2xl">
                2. The Organizers nor Volunteers will not be held Responsible
                for your Properties.
              </span>
              <br />
              <br />
              <span className="text-xl font-bold md:text-2xl">
                3. If we find any Damages a property/equipment of The College,
                they'll be charged the Price of the Property Damaged, this will
                be non-partial.
              </span>
              <br />
              <br />
              <span className="text-xl font-bold md:text-2xl">
                4. Participants are no needed to pay the Fees for the Venue,
                Food , Facilities, etc...
              </span>
              <br />
              <br />
              <span className="text-xl font-bold md:text-2xl">
                5. Every Participants Should bring their laptops to Hack-on, no
                laptops or accessories will be provided by the Organizers.
              </span>
              <br />
              <br />
              <span className="text-xl font-bold md:text-2xl">
                6. Those Who want to Hack-on Hardware, they should bring their
                own Hardware Equipment. If these components bring about any
                damage to the venue, They Will be charged for the Damages.
              </span>
              <br />
              <br />
              <span className="text-xl font-bold md:text-2xl">
                7. If anyone is found out be disturbing others, The Entire Team
                get disqualified.
              </span>
              <br />
              <br />
              <span className="text-xl font-bold md:text-2xl">
                8. Attendees should Bring their College ID card with necessary
                items of their Needs for their verification.
              </span>
              <br />
              <br />
              <span className="text-xl font-bold md:text-2xl">
                9. If any attendees require accomadation before the Event, they
                should send a request to lyncfest@sairamit.edu.in.
              </span>
              <br />
              <br />
              <span className="text-xl font-bold md:text-2xl">
                10. All the Hacks should be openly available in GitHub.
              </span>
              <br />
              <br />
              <span className="text-xl font-bold md:text-2xl">
                11. Decision of the jury is final.
              </span>
              <br />
              <br />
            </div>
          </div>
        </div>
      </section>
      <FAQ />
    </div>
  );
};
export default Guidelines;
