import { Nav } from "./components/Nav";
import { HeroComponent, TeamComponent, Content, About,FaqSection, 
  Newsletter,
Footer} from "./sections";


const App = () => {
  return (
    <main className='relative'>
       <Nav/>
      <section className='padding'>
       <HeroComponent/>
      </section>
      <section className='padding'>
       <About/>
      </section>
      <section className='padding'>
       <Content/>
      </section>
      <section className='padding'>
        <TeamComponent/>
      </section>
      <section className='padding'>
        <FaqSection/>
      </section>
      <section className='padding'>
        <Newsletter/>
      </section>
      <section className='padding'>
        <Footer/>
      </section>
   
    </main>
  );
};

export default App;
