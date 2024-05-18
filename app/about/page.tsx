import { aboutPage } from "@/data/meta-data";
import { Metadata } from "next";
import Link from "@/components/custom-link";

export const metadata: Metadata = aboutPage.metadata;

export default function About() {
  return (
    <article className="flex flex-col max-w-screen-md container mx-auto justify-center relative prose">
      <h1 id="about">About</h1>
      <p>
        Amazing Endemic Species (AES) is an open source, communtiy-driven SaaS
        (Species-as-a-Service) application.
      </p>
      <ul>
        <li>Map endemic species all over the world in 3D dynamic globe.</li>
        <li>
          Provide user-friendly API services getting access to ASE data, which
          can be used in scientific research and secondary development.
        </li>
      </ul>
      <h2 id="contributing">Contributing</h2>
      <p>
        New contributors welcome! First off, thanks for your interest in
        contributing! 🎉
      </p>
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
      <p>
        For more details, see{" "}
        <Link href="https://github.com/shenlu89/amazing-endemic-species/discussions/new?category=general">
          Best Practice for Pull Requests on GitHub
        </Link>
        .
      </p>
      <h3>Add More Species</h3>
      <p>
        If you want to add more species to Amazing Endemic Species, you can
        follow the{" "}
        <Link href="#contributing-guidelines">contributing guidelines</Link> or
        open a{" "}
        <Link href="https://github.com/shenlu89/amazing-endemic-species/discussions/new?category=general">
          new discussion
        </Link>
        .
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
      <p>
        If you want to keep AES alive and develop more features in the future,
        please sponsor it via these link:{" "}
        <ul>
          <li>
            <strong>Buy Me a Coffee</strong>:{" "}
            <Link href="https://buymeacoffee.com/shenlu89">
              https://buymeacoffee.com/shenlu89
            </Link>
          </li>
          <li>
            <strong>Github Sponsors</strong>:{" "}
            <Link href="https://github.com/sponsors/shenlu89">
              https://github.com/sponsors/shenlu89
            </Link>
          </li>
        </ul>
      </p>
      <h2>Contact</h2>
      <p>
        Email:{" "}
        <Link href="mailto:shenlu89dev@gmail.com">shenlu89dev@gmail.com</Link>
      </p>
    </article>
  );
}
