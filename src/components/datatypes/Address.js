import React from 'react';
import _ from 'lodash';

class Address extends React.Component {
  render() {
    return (
      <div>
        <div>{`${(_.get(this.props.fhirData, 'line') || []).join(' ')}`}</div>
        <div>
          {`
					${_.get(this.props.fhirData, 'city') + ',' || ''}
					${_.get(this.props.fhirData, 'state') || ''}
					${_.get(this.props.fhirData, 'postalCode') || ''}
					${_.get(this.props.fhirData, 'country') || ''}
					`}
        </div>
      </div>
    );
  }
}

export default Address;
