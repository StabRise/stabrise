import React from 'react';

interface BadgeLinksProps {
  colabLink?: string;
  testLink?: string;
  mavenLink?: string;
  licenseLink?: string;
  codacyLink?: string;
}

const BadgeLinks: React.FC<BadgeLinksProps> = ({
                                                 colabLink,
                                                 testLink,
                                                 mavenLink,
                                                 licenseLink,
                                                 codacyLink,
                                               }) => {
  return (
    <div className="flex justify-center space-x-2">
      {colabLink && (
        <a
          href={colabLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img
            alt="Open In Colab Quick Start"
            src="https://colab.research.google.com/assets/colab-badge.svg"
            className="h-4"
          />
        </a>
      )}
      {testLink && (
        <a href={testLink} className="flex items-center">
          <img
            alt="Test"
            src="https://github.com/StabRise/spark-pdf/actions/workflows/scala.yml/badge.svg"
            className="h-4"
          />
        </a>
      )}
      {mavenLink && (
        <a href={mavenLink} className="flex items-center">
          <img
            alt="Maven Central Version"
            src="https://img.shields.io/maven-central/v/com.stabrise/spark-pdf-spark35_2.12"
            className="h-4"
          />
        </a>
      )}
      {licenseLink && (
        <a href={licenseLink} className="flex items-center">
          <img
            alt="License"
            src="https://img.shields.io/badge/License-AGPL%203-blue.svg"
            className="h-4"
          />
        </a>
      )}
      {codacyLink && (
        <a
          href={codacyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img
            alt="Codacy Badge"
            src="https://app.codacy.com/project/badge/Grade/2fde782d0c754df1b60b389799f46f0f"
            className="h-4"
          />
        </a>
      )}
    </div>
  );
};

export default BadgeLinks;
