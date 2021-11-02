import React from 'react';
import { connect } from 'react-redux';
import { filterStateToProps } from '../../helpers';
import { updateFilter } from '../../actions';
import { FILTERS } from './../../constants';
import './style.css';

const Filter = (props) => {
  const { filters, updateFilter } = props;

  const handleFilterChange = (id) => {
    const filter = { id: id, status: !filters[id].status };
    updateFilter(filter);
  };
  return (
    <div>
      <h1 className="title">Airlines</h1>
      <div>
        <span className="font-weight-bold">Filter by Alliances</span>
        <div className="d-flex checkbox-container">
          {Object.keys(filters).map((key) => (
            <div style={{ marginLeft: key === 'OW' ? '' : '24px' }} key={key}>
              <input
                className="form-check-input checkbox-size"
                type="checkbox"
                checked={filters[key].status}
                onChange={(e) => handleFilterChange(e.target.id)}
                id={key}
              />
              <label htmlFor="formCheck-1" className="checkbox-label">
                {filters[key].name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default connect(filterStateToProps, { updateFilter })(Filter);
