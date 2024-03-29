import Head from "next/head";
import { Inter } from "next/font/google";
import { getFeaturedEvents } from "@/helpers/api-utils"; 
import EventList from "@/components/events/EventList";

const inter = Inter({ subsets: ["latin"] });
// const assetPrefix = process.env.NODE_ENV === "production" ? "/nextevents" : "";
export default function Home(props) {
  const { events } = props;
  const featuredEvents = events.filter((event) => event.isFeatured);

  return (
    <>
      <Head>
        <title>Events</title>
        <meta name="description" content="All events that will help you in your life." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={'/favicon.ico'} />
      </Head>
      <main className="">
        <div className="">
          <h1>Featured Events</h1>
          <EventList items={featuredEvents} />
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const events = await getFeaturedEvents()
  return {
    props: { events },
    revalidate:600
  };
}
