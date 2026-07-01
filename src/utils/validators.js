/**
 * Validation Utilities
 */

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhone = (phone) => {
  const phoneRegex = /^[\d\s\-\(\)\+]+$/;
  return phoneRegex.test(phone) && phone.length >= 10;
};

export const isValidAmount = (amount) => {
  return !isNaN(amount) && amount > 0;
};

export const isValidDate = (dateString) => {
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date);
};

export const validateClientData = (data) => {
  const errors = [];
  
  if (!data.firstName || data.firstName.trim() === '') {
    errors.push('First name is required');
  }
  
  if (!data.lastName || data.lastName.trim() === '') {
    errors.push('Last name is required');
  }
  
  if (data.email && !isValidEmail(data.email)) {
    errors.push('Invalid email format');
  }
  
  if (data.phone && !isValidPhone(data.phone)) {
    errors.push('Invalid phone format');
  }
  
  return errors;
};

export const validateBailData = (data) => {
  const errors = [];
  
  if (!data.clientId) {
    errors.push('Client ID is required');
  }
  
  if (!data.amount || !isValidAmount(data.amount)) {
    errors.push('Valid amount is required');
  }
  
  if (data.courtDate && !isValidDate(data.courtDate)) {
    errors.push('Invalid court date format');
  }
  
  return errors;
};
