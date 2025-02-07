import React, { useEffect } from "react";
import useProgressStore from "../../stores/progressStore";
import useComponentStore from "../../stores/componentsStore";
import { isDate, isEmail, isNumber, isRequired, isString } from '../../utils/validations';

import { toast } from "react-toastify";

const ValidationTest = () => {
  const { company, origin, phone, endDate, setCompany } = useComponentStore();
  let newC = ''

  useEffect(() => {
    console.log("Company:", company);
    console.log("Origin:", origin);
    console.log("Phone:", phone);
    console.log("End Date:", endDate);

    setCompany(newC);

    const validations = {
      company: isRequired(company) || isString(company),
      origin: isRequired(origin) || isString(origin),
      phone: isRequired(phone) || isNumber(phone),
      endDate: isRequired(endDate) || isDate(endDate),
    };

    console.log("Validation Results:", validations);

    // Display errors using toast
    Object.values(validations).forEach((result) => {
      if (result !== true) {
        toast.error(result);
      }
    });
  }, [company, origin, phone, endDate]);

  return (
    <div>
      <h2>Validation Test</h2>
      <p>Check console logs for validation results.</p>
    </div>
  );
};

export default ValidationTest;
