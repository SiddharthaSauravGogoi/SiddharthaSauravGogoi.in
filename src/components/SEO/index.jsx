import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO() {
  return (
    <Helmet>
      <meta name="title" content="Siddhartha Saurav Gogoi - Software Developer" />
      <meta name="description" content="A tech blog that's geared towards deep tech software development." />
      <meta name="author" content="Siddhartha Saurav Gogoi" />
      <meta name="keywords" content="JavaScript blog, ReactJs blog, Deep Learning blog, Python blog, software development blog, devops blog, robotics blog" />
      <meta name="robots" content="index, follow" />
    </Helmet>
  )
}
