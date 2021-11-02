import { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { companiesStateToProps } from './../../helpers';
import { addCompanies } from './../../actions';
import jsonp from 'jsonp';
import { Card } from '../../components';
import './style.css';

const Airlines = (props) => {
  const { companies, addCompanies } = props;

  const getCompanies = useCallback(() => {
    jsonp(
      'https://www.kayak.com/h/mobileapis/directory/airlines/homework',
      { param: 'jsonp' },
      (err, data) => {
        if (err) {
          console.log('Error: ', err);
        } else {
          addCompanies(data);
        }
      }
    );
  }, []);

  useEffect(() => {
    getCompanies();
  }, [getCompanies]);

  // useEffect(() => {
  //   console.log('ON');
  //   updateAirlinesList();
  // }, [filters]);

  // const updateAirlinesList = () => {
  //   const filtersOn = Object.keys(filters).filter((key) => {
  //     if (filters[key].status) {
  //       return key;
  //     }
  //   });
  //   if (filtersOn.length > 0) {
  //     const updatedCompanies = data.filter((company) => {
  //       if (filtersOn.indexOf(company.alliance) > 0) {
  //         return company;
  //       }
  //     });
  //     setFiltredCompanies(updatedCompanies);
  //     console.log('filtred');
  //   } else {
  //     setFiltredCompanies(data);
  //     console.log('all');
  //   }
  // };
  return (
    <div className="airlines-container row row-cols-4 justify-content-center">
      {companies.map((company, index) => (
        <Card key={index} company={company} />
      ))}
    </div>
  );
};

export default connect(companiesStateToProps, { addCompanies })(Airlines);
