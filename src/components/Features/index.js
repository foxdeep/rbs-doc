import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Grasp visitor flow',
    media: <img
      src={require('@site/static/img/identity.png').default}
      alt="Example banner"
    />
  },
  {
    title: 'Rapid identity confirmation',
    media: <img
      src={require('@site/static/img/identity.png').default}
      alt="Example banner"
    />
  },
  {
    title: 'Paperless and eco-friendly environment',
    media: <img
      src={require('@site/static/img/identity.png').default}
      alt="Example banner"
    />
  },
  {
    title: 'Manage activity records',
    media: <img
      src={require('@site/static/img/identity.png').default}
      alt="Example banner"
    />
  },
  {
    title: 'Ensure visitor /employee safety',
    media: <img
      src={require('@site/static/img/identity.png').default}
      alt="Example banner"
    />
  },
];

function Feature({ title, media }) {
  return (
    <div className={clsx('col')}>
      <div className="text--center">
        {media}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
