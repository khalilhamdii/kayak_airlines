export const companiesStateToProps = (state) => {
  const { companies } = state.companiesReducer;
  const { filters } = state.filterReducer;
  const activeFilters = Object.keys(filters).filter((key) => {
    if (filters[key].status === true) {
      return key;
    }
  });
  if (activeFilters.length > 0) {
    const filtredCompanies = companies.filter((company) => {
      if (activeFilters.indexOf(company.alliance) > -1) {
        return company;
      }
    });
    return { companies: filtredCompanies };
  } else {
    return { companies: companies };
  }
};

export const filterStateToProps = (state) => {
  const { filterReducer } = state;

  return { filters: filterReducer.filters };
};
