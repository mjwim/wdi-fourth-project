import React from 'react';

const TaxYearFilter = ({ handleTaxYear }) => {
  return(
    <div className="field has-addons has-addons-centered">
      <div className="control" onChange={ handleTaxYear }>
        <div className="select">
          <select>
            <option value="1970|2100">All tax years</option>
            <option value="6 April 2016| 6 April 2017">2016/17</option>
            <option value="6 April 2017| 6 April 2018">2017/18</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TaxYearFilter;
