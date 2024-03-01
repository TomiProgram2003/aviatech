
import Header from "./components/header/Header";
import Courses from "./components/courses/Courses";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";
import CoursesV2 from "./components/courses/CoursesV2";

export default function Home() {
  return (
      <main
        className="container mx-auto my-6 pt-[100px]"
      >
        <Header/>
        <Services />
        {/* <Courses /> */}
        <CoursesV2 />
        <Contact />
      </main>
  );
}


