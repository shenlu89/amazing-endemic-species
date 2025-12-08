import type { Metadata } from "next";
import Link from "@/components/custom-link";
import { aboutPage } from "@/data/meta-data";

export const metadata: Metadata = aboutPage.metadata;

export default function About() {
  return (
    <article className="flex flex-col max-w-screen-lg container mx-auto justify-center relative prose px-4">
      <h1 id="about">About</h1>
      <p>
        Amazing Endemic Species (AES) is an open-source, community-driven SaaS
        (Species-as-a-Service) application. AES has:
      </p>
      <ul>
        <li>
          🌍 <strong>3D Dynamic Globe</strong>: AES maps endemic species all
          over the world in a 3D dynamic globe.
        </li>
        <li>
          🔍 <strong>Explore Endemic Species Dataset</strong>: Dive into
          comprehensive endemic species information that include species
          classification, geographical distribution, conservation status and
          more details from{" "}
          <Link href="https://www.wikipedia.org/">Wikipedia</Link> or{" "}
          <Link href="https://www.iucnredlist.org/">IUCN Red List</Link>.
        </li>
        <li>
          🦎 <strong>User-Friendly API Services</strong>: AES provides
          easy-to-use API services, which means you can seamlessly access AES
          data for your scientific research or any secondary development
          projects.
        </li>
        <li>
          ✨ <strong>Open-Source and Community-Driven</strong>: Being
          open-source means transparency and the opportunity for anyone to
          improve the project. Such as, you can contribute to the database,
          ensuring that the information is continually updated and accurate.
        </li>
      </ul>
      <p>
        Join the AES community and help to map and protect the world’s endemic
        species! Whether you’re contributing data, using the API for your
        research, or simply exploring the globe, every little bit helps.
      </p>
      <h2 id="contributing">Contributing</h2>
      <p>
        New contributors welcome! First off, thanks for your interest in
        contributing! 🎉
      </p>
      <h3>Add More Species</h3>
      <p>
        If you want to add more species to Amazing Endemic Species, you can
        follow the{" "}
        <Link href="#contributing-guidelines">contributing guidelines</Link> or
        or submit an{" "}
        <Link href="https://github.com/shenlu89/amazing-endemic-species/issues/new?assignees=shenlu89&labels=add-more-species&projects=&template=add_more_species.md&title=%5BAdd+More+Species%5D">
          issue
        </Link>{" "}
        labeling <code>add-more-species</code>.
      </p>
      <ul>
        <li>
          <strong>ONLY</strong> accept <code>JPG</code> images with{" "}
          <code>150x150</code> px.
        </li>
        <li>
          Ensure your photo features one species with good quality and easily
          identifiable
        </li>
      </ul>
      <h3 id="contributing-guidelines">Contributing Guidelines</h3>
      <p>
        If you experience bugs, feel free to open an{" "}
        <Link href="https://github.com/shenlu89/amazing-endemic-species/issues/new">
          issue
        </Link>
        . And if you would like to implement a new feature or bug fix, you can
        raise a pull request with the steps below.
      </p>
      <ol>
        <li>Fork the repository and clone it to your local machine.</li>
        <li>Make the necessary changes to the data or code.</li>
        <li>
          Create a pull request with a clear description of the modifications
          you've made.
        </li>
      </ol>
      <h2>FAQs</h2>
      <h3>What's the defination of endemic species in AES?</h3>
      <p>
        The defination of "endemic species" in AES refers to a species that is
        native to and restricted to a specific geographical area. This area
        means the country code,{" "}
        <Link href="https://en.wikipedia.org/wiki/ISO_3166">ISO 3166</Link>.
      </p>
      <h3>Why should we pay attention for endemic species?</h3>
      <p>
        Endemic species are not found naturally anywhere else in the world.
        These species have typically evolved in isolation over long periods,
        adapting to their unique environment, and can be highly sensitive to
        changes in their habitat. Endemism is significant in conservation
        biology because endemic species are often more vulnerable to extinction
        due to their limited distribution and specialized habitat requirements.
      </p>
      <h2>Support</h2>
      <p>Give a ⭐️ if this project helped you!</p>
      <p>
        Share this <Link href="https://aes.shenlu.me">site</Link> with your
        social network if you like it.
      </p>
      <p>
        <Link href="https://github.com/shenlu89/amazing-endemic-species/discussions/new?category=show-and-tell">
          Tell me
        </Link>{" "}
        if you've made something cool by using{" "}
        <Link href="/api">Amazing Endemic Species API</Link>.
      </p>
      <h2>Donate</h2>
      <p>
        All the information about species is from the{" "}
        <Link href="https://www.iucnredlist.org/">IUCN Red List website</Link>.
        To make the IUCN Red List a more complete Barometer of Life. Donate via
        this link:{" "}
        <Link href="https://www.iucnredlist.org/support/donate">
          https://www.iucnredlist.org/support/donate
        </Link>
        .
      </p>
      <h2>Contact</h2>
      <p>
        Email:{" "}
        <Link href="mailto:shenlu89dev@gmail.com">shenlu89dev@gmail.com</Link>
      </p>
    </article>
  );
}
