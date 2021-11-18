import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '使用简单',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <p>一行命令<br/>一整个项目<br/>快速开发</p>
      </>
    ),
  },
  {
    title: '文档清晰',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <p>特清晰<br/>不会有不会<br/>好看的很</p>
      </>
    ),
  },
  {
    title: '快速构建',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <p>快<br/>飞的快<br/>更快</p>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
