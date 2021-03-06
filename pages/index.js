import EpisodeSection from '../components/EpisodeSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ListenSection from '../components/ListenSection';
import NavBar from '../components/ResponsiveAppBar';
import TopEpisodes from '../components/TopEpisodes';
import FormSection from './../components/FormSection';
import classes from '../styles/index.module.css';

export default function Home() {
  return (
    <div className={classes.text}>
      <NavBar />
      <Header />
      <ListenSection />
      <TopEpisodes />
      <EpisodeSection />
      <FormSection />
      <Footer />
    </div>
  );
}
