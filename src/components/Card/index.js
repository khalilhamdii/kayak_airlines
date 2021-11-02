import React from 'react';
import './style.css';

const Card = (props) => {
  const { company } = props;
  const companyAlliance = (company) => {
    switch (company.alliance) {
      case 'OW':
        return 'Oneworld';
      case 'ST':
        return 'Sky Team';
      case 'SA':
        return 'Star Alliance';
    }
  };

  const shortenUrl = (company) => {
    let url = company.site;
    if (url.startsWith('http')) {
      url = url.replace('https://', '');
    }
    if (url.startsWith('www')) {
      url = url.replace('www.', '');
    }
    if (url.includes('/')) {
      let index = url.indexOf('/');
      url = url.substring(0, index);
    }
    return url;
  };

  return (
    <div className="card p-5 col justify-content-center align-items-center bg-white d-flex flex-row">
      <img
        src={`https://www.kayak.com${company.logoURL}`}
        className="company-logo"
        alt={company.name}
      />
      <div className="company-details d-flex flex-column">
        <span className="font-weight-bold">{company.name}</span>
        <div className="extra-details">
          <span>{companyAlliance(company)}</span>
          <span>{company.phone}</span>
          <span className="company-site">{shortenUrl(company)}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
