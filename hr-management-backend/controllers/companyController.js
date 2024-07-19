const Company = require('../models/companyModel');

exports.createCompany = async (req, res) => {
  try {
    const newCompany = await Company.create(req.body);
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(500).json({ message: 'Error creating company', error });
  }
};

exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll();
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching companies', error });
  }
};

exports.getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching company', error });
  }
};

exports.updateCompany = async (req, res) => {
  try {
    const updatedCompany = await Company.update(req.params.id, req.body);
    if (!updatedCompany) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.status(200).json(updatedCompany);
  } catch (error) {
    res.status(500).json({ message: 'Error updating company', error });
  }
};

exports.deleteCompany = async (req, res) => {
  try {
    const deletedCompany = await Company.delete(req.params.id);
    if (!deletedCompany) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.status(200).json(deletedCompany);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting company', error });
  }
};
