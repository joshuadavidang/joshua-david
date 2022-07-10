import DarkMode from "./DarkMode";

export default function NavBar() {
  return (
    <>
      <div className="flex justify-end items-center bg-white dark:bg-darkGray dark:text-white space-x-10 pt-12 pr-12 font-mono">
        <div>About</div>
        <div>Projects</div>
        <DarkMode />
      </div>
    </>
  );
}
