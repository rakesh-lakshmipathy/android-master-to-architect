import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return <header className={clsx('hero hero--primary', styles.heroBanner)}>
    <div className={clsx('container', styles.heroLayout)}>
      <div className={styles.author}>
        <img
          className={styles.authorPhoto}
          src="https://rakesh-lakshmipathy.github.io/assets/images/my-avatar.jpg"
          alt="Rakesh Lakshmipathy"
          width="112"
          height="112"
        />
        <span className={styles.authorName}>Rakesh Lakshmipathy</span>
      </div>
      <div className={styles.heroContent}>
        <div className="hero-kicker">FROM FIRST PRINCIPLES TO ARCHITECTURE</div>
        <Heading as="h1" className="hero__title">{siteConfig.title}</Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">Start learning</Link>
          <Link className="button button--outline button--secondary button--lg margin-left--md hero-roadmap-button" to="/docs/roadmap">Explore the roadmap</Link>
        </div>
      </div>
    </div>
  </header>;
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return <Layout title={siteConfig.title} description="Master Android from Kotlin foundations to architect-level system design.">
    <HomepageHeader />
    <main><section className="container margin-vert--xl"><div className="row">
      <div className="col col--4"><div className="learning-card"><span>01</span><h2>Understand deeply</h2><p>Mental models, runtime behavior, scenarios, and corner cases.</p></div></div>
      <div className="col col--4"><div className="learning-card"><span>02</span><h2>Run the code</h2><p>Curated Kotlin Playground labs with meaningful output.</p></div></div>
      <div className="col col--4"><div className="learning-card"><span>03</span><h2>Think like an architect</h2><p>Trade-offs, production failures, decisions, and interview reasoning.</p></div></div>
    </div></section></main>
  </Layout>;
}
