import Link from "next/link";

export default function Introduction() {
  return (
    <div className="bg-white dark:bg-darkGray dark:text-white">
      <div className=" h-screen flex justify-center items-center">
        <p className="md:text-3xl w-1/2 font-mono md:leading-loose">
          Hello 👋 I'm Joshua David, an aspiring Software Engineer. I love to
          design and build products to solve real problems.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="h-screen">
          <p className="text-lg font-mono leading-loose">
            👨🏻‍💻 Freshman at Singapore Management University.
          </p>
          <p className="text-lg font-mono leading-loose">
             Loves black coffee, huge fan of Apple.
          </p>
          <p className="text-lg font-mono leading-loose ">
            💬{" "}
            <Link href="https://linkedin.com/in/joshuadavid99/">
              <span className="hover:underline cursor-pointer">LinkedIn</span>
            </Link>{" "}
            |{" "}
            <a href="mailto: cxang.2022@scis.smu.edu.sg">
              <span className="hover:underline cursor-pointer">Email</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
