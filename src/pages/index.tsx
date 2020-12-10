import Layout from "../components/Layout"
import BasicMeta from "../components/meta/BasicMeta"
import OpenGraphMeta from "../components/meta/OpenGraphMeta"
import TwitterCardMeta from "../components/meta/TwitterCardMeta"
import List from "../components/Social/List"
import styles from "./home.module.css"

const { container, handle } = styles
export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className={container}>
        <div>
          <h1>
            Hi, I'm Panhavuth (Panha) Lau<span className="fancy">.</span>
          </h1>
          <span className={handle}>@plau.dev</span>
          <h2>I'm an artist, programmer, and gamer.</h2>
          <List />
        </div>
      </div>
    </Layout>
  );
}
