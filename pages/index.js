import axios from 'axios';
import EpisodeSection from '../components/EpisodeSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ListenSection from '../components/ListenSection';
import NavBar from '../components/ResponsiveAppBar';
import TopEpisodes from '../components/TopEpisodes';
import FormSection from './../components/FormSection';

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <ListenSection />
      <TopEpisodes />
      <EpisodeSection />
      <FormSection />
      <Footer />
    </>
  );
}

// export async function getStaticProps() {
//   let token;

//   axios('https://accounts.spotify.com/api/token', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       Authorization:
//         'Basic ' +
//         btoa(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_SECRET),
//     },
//     data: 'grant_type=client_credentials',
//   }).then((tokenResponse) => {
//     token = tokenResponse.data.access_token;
//   });

//   return {
//     props: { token },
//   };
// }
