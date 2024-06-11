function GhostShareWorking() {
  return (
    <section className="lg:py-16 sm:pt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 pt-20">
          How to Use GhostShare
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-4">
              <h3 className="text-xl font-semibold">Problem</h3>
              <p className="mt-2">
                Sometimes, you need to share information between different
                devices(like computers and mobiles), like when you use a laptop
                at a café or a friend's house. But using email or WhatsApp can
                be a problem because it's take a lot effort to sign in your
                email or WhatsApp specailly when you forget the password 😅. And
                it's a also a security risk to somthing personal on someone else
                Laptop.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-4">
              <h3 className="text-xl font-semibold">Solution</h3>
              <p className="mt-2">
                GhostShare is the solution! You can create a secret room with a
                password, put your notes there, and then get them back later
                from any computer using the room number and password. It's easy,
                safe, and keeps your information private.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-4">
              <h3 className="text-xl font-semibold">Steps</h3>
              <p className="mt-2">
                1. Go to the home page and click on the Create Room button.{" "}
                <br />
                2. Write your note and click on the Save button. <br />
                3. Remember the room number and password. (Don't worry you can
                put simple room number and password like - room = 10 and pass =
                yourgfname 😅 but make sure to not to tell anyone 😊) <br />
                4. Go to any computer and open GhostShare. <br />
                5. Enter the room number and password. <br />
                6. Click on the Get Content button. <br />
                7. Your Content will be displayed. Enjoy! 🎉
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GhostShareWorking;
