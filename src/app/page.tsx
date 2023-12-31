import Image from 'next/image';

export default function Portfolio() {
  const icons8ApiKey = 'YOUR_ICONS8_API_KEY';

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Header Section */}
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* ... (existing code for header) */}
      </div>

      {/* Hero Section */}
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      {/* About Me Section */}
      <section className="mb-8 text-center lg:max-w-5xl lg:w-full lg:mb-0">
        <h1 className="text-4xl font-bold mb-4">Hello, I'm Ankush Singh!</h1>
        <p className="text-lg opacity-70">
          I'm a passionate software developer with expertise in building web applications using technologies like Next.js.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-8 text-center lg:max-w-5xl lg:w-full lg:mb-0">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex justify-center space-x-4">
          {/* Use Icons8 API for logos */}
          
          <Image
            src={`https://img.icons8.com/color/48/000000/html-5--v1.png`}
            alt="HTML"
            width={40}
            height={40}
          />
          <Image
            src={`https://img.icons8.com/color/48/000000/css3.png`}
            alt="CSS"
            width={40}
            height={40}
          />
          <Image
            src={`https://img.icons8.com/color/48/000000/typescript.png`}
            alt="TypeScript"
            width={40}
            height={40}
          />
          <Image
            src={`https://img.icons8.com/color/48/000000/react-native.png`}
            alt="React"
            width={40}
            height={40}
          />
          <Image
            src={`https://img.icons8.com/plasticine/100/000000/react.png`}
            alt="React Native"
            width={40}
            height={40}
          />
        </div>
      </section>

      {/* Social Profiles Section */}
      <section className="mb-8 flex justify-center space-x-4">
        {/* GitHub */}
        <a
          href="https://github.com/ankushsde"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={`https://img.icons8.com/color/48/000000/github--v1.png`}
            alt="GitHub"
            width={40}
            height={40}
          />
        </a>
 
        

        {/* CodeChef */}
        <a
          href="https://www.codechef.com/users/ankushs5252"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={`https://img.icons8.com/color/48/000000/codechef.png`}
            alt="CodeChef"
            width={40}
            height={40}
          />
        </a>

        {/* AlgoDaily */}
         
      </section>

      {/* Projects Section */}
      <section className="mb-8 grid grid-cols-1 gap-8 lg:max-w-5xl lg:w-full lg:grid-cols-2">
        {/* Add your project cards here with links to the projects */}
      </section>

      {/* Contact Section */}
      <section className="text-center lg:max-w-5xl lg:w-full">
        <h2 className="text-2xl font-semibold mb-4">Let's Connect!</h2>
        <p className="opacity-70 mb-6">
          If you're interested in collaborating or have any questions, feel free to reach out to me.
        </p>
        {/* Add your contact information or social media links */}
      </section>

      

      {/* Footer Section */}
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        {/* ... (existing code for footer) */}
      </div>
    </main>
  );
}
