import db from "../dbConfig.js";
import { insertQuery } from "../queries/InsertQuery.js";

// Insert data to the table *
export const insertData = async (req, res) => {
  const database = await db();

  try {
    const result = await database.query(insertQuery, [
      {
        name: "Invoice_Type",
        type: database.sql.NVarChar,
        value: req.body.invoice_type,
      },
      { name: "Name", type: database.sql.NVarChar, value: req.body.name },
      {
        name: "Invoice_date",
        type: database.sql.Date,
        value: req.body.invoice_date,
      },
      {
        name: "Invoice_#",
        type: database.sql.NVarChar,
        value: req.body.invoice_number,
      },
      { name: "Stage", type: database.sql.NVarChar, value: req.body.stage },
      { name: "Company", type: database.sql.NVarChar, value: req.body.company },
      {
        name: "Responsible_person",
        type: database.sql.NVarChar,
        value: req.body.responsible_person,
      },
      {
        name: "Products",
        type: database.sql.NVarChar,
        value: req.body.products,
      },
      {
        name: "Amount_Currency",
        type: database.sql.NVarChar,
        value: req.body.amount_currency,
      },
      { name: "Amount", type: database.sql.Decimal, value: req.body.amount },
      {
        name: "Currency",
        type: database.sql.NVarChar,
        value: req.body.currency,
      },
      { name: "Contact", type: database.sql.NVarChar, value: req.body.contact },
      {
        name: "Customer",
        type: database.sql.NVarChar,
        value: req.body.customer,
      },
      {
        name: "Created_on",
        type: database.sql.DateTime,
        value: req.body.created_on,
      },
      {
        name: "Updated_by",
        type: database.sql.NVarChar,
        value: req.body.updated_by,
      },
      {
        name: "Updated_on",
        type: database.sql.DateTime,
        value: req.body.updated_on,
      },
      {
        name: "Created_by",
        type: database.sql.NVarChar,
        value: req.body.created_by,
      },
      {
        name: "Available_to_everyone",
        type: database.sql.Bit,
        value: req.body.available_to_everyone,
      },
      {
        name: "Sales_Date",
        type: database.sql.Date,
        value: req.body.sales_date,
      },
      {
        name: "Created_by_CRM_form",
        type: database.sql.NVarChar,
        value: req.body.created_by_crm_form,
      },
      {
        name: "Moved_by",
        type: database.sql.NVarChar,
        value: req.body.moved_by,
      },
      {
        name: "Moved_on",
        type: database.sql.DateTime,
        value: req.body.moved_on,
      },
      {
        name: "Previous_stage",
        type: database.sql.NVarChar,
        value: req.body.previous_stage,
      },
      {
        name: "Your_company_details",
        type: database.sql.NVarChar,
        value: req.body.your_company_details,
      },
      { name: "Source", type: database.sql.NVarChar, value: req.body.source },
      {
        name: "Source_information",
        type: database.sql.NVarChar,
        value: req.body.source_information,
      },
      { name: "Deals", type: database.sql.Int, value: req.body.deals },
      {
        name: "Estimates",
        type: database.sql.Decimal,
        value: req.body.estimates,
      },
      {
        name: "Pay_before",
        type: database.sql.Date,
        value: req.body.pay_before,
      },
      { name: "Project", type: database.sql.NVarChar, value: req.body.project },
      {
        name: "Sales_Amount",
        type: database.sql.Decimal,
        value: req.body.sales_amount,
      },
      {
        name: "Sales_Base_of_the_Commission",
        type: database.sql.Decimal,
        value: req.body.sales_base_of_the_commission,
      },
      {
        name: "Title_Deed_Amount",
        type: database.sql.Decimal,
        value: req.body.title_deed_amount,
      },
      { name: "Seller", type: database.sql.NVarChar, value: req.body.seller },
      {
        name: "Project_Sales_Company",
        type: database.sql.NVarChar,
        value: req.body.project_sales_company,
      },
      {
        name: "Invoice_Company_Contact",
        type: database.sql.NVarChar,
        value: req.body.invoice_company_contact,
      },
      {
        name: "Total_Commission_without_VAT",
        type: database.sql.Decimal,
        value: req.body.total_commission_without_vat,
      },
      {
        name: "Customer_Downpayment_Date",
        type: database.sql.Date,
        value: req.body.customer_downpayment_date,
      },
      {
        name: "Service_Fee_Due_Date",
        type: database.sql.Date,
        value: req.body.service_fee_due_date,
      },
      {
        name: "Commission_Rate",
        type: database.sql.Decimal,
        value: req.body.commission_rate,
      },
      {
        name: "VAT_Rate",
        type: database.sql.Decimal,
        value: req.body.vat_rate,
      },
      {
        name: "Account_Manager",
        type: database.sql.NVarChar,
        value: req.body.account_manager,
      },
      {
        name: "Seller_Total_Commission_without_VAT",
        type: database.sql.Decimal,
        value: req.body.seller_total_commission_without_vat,
      },
      {
        name: "Location",
        type: database.sql.NVarChar,
        value: req.body.location,
      },
      {
        name: "Property_Type",
        type: database.sql.NVarChar,
        value: req.body.property_type,
      },
      {
        name: "Seller_Invoice_Amount_without_VAT",
        type: database.sql.Decimal,
        value: req.body.seller_invoice_amount_without_vat,
      },
      {
        name: "Seller_Commission_VAT_Amount",
        type: database.sql.Decimal,
        value: req.body.seller_commission_vat_amount,
      },
      {
        name: "Seller_Commission_with_VAT",
        type: database.sql.Decimal,
        value: req.body.seller_commission_with_vat,
      },
      {
        name: "Buyer_Total_Commission_without_VAT",
        type: database.sql.Decimal,
        value: req.body.buyer_total_commission_without_vat,
      },
      {
        name: "Buyer_Invoice_Amount_without_VAT",
        type: database.sql.Decimal,
        value: req.body.buyer_invoice_amount_without_vat,
      },
      {
        name: "Buyer_Commission_VAT_Amount",
        type: database.sql.Decimal,
        value: req.body.buyer_commission_vat_amount,
      },
      {
        name: "Buyer_Commission_with_VAT",
        type: database.sql.Decimal,
        value: req.body.buyer_commission_with_vat,
      },
      {
        name: "Corporate_Tax",
        type: database.sql.Decimal,
        value: req.body.corporate_tax,
      },
      {
        name: "Total_VAT",
        type: database.sql.Decimal,
        value: req.body.total_vat,
      },
      {
        name: "Total_Distributed_Commision",
        type: database.sql.Decimal,
        value: req.body.total_distributed_commision,
      },
      {
        name: "Net_Income",
        type: database.sql.Decimal,
        value: req.body.net_income,
      },
      {
        name: "Commission_Calculation_Base_Amount",
        type: database.sql.Decimal,
        value: req.body.commission_calculation_base_amount,
      },
      {
        name: "Deal_Responsible",
        type: database.sql.NVarChar,
        value: req.body.deal_responsible,
      },
      {
        name: "Deal_Responsible_Commission",
        type: database.sql.Decimal,
        value: req.body.deal_responsible_commission,
      },
      {
        name: "Viewing_Responsible",
        type: database.sql.NVarChar,
        value: req.body.viewing_responsible,
      },
      {
        name: "Viewing_Responsible_Commission",
        type: database.sql.Decimal,
        value: req.body.viewing_responsible_commission,
      },
      {
        name: "Deal_Office_Manager",
        type: database.sql.NVarChar,
        value: req.body.deal_office_manager,
      },
      {
        name: "Deal_Office_Manager_Commission",
        type: database.sql.Decimal,
        value: req.body.deal_office_manager_commission,
      },
      {
        name: "Viewing_Office_Manager_1",
        type: database.sql.NVarChar,
        value: req.body.viewing_office_manager_1,
      },
      {
        name: "Viewing_Office_Manager_1_Commission",
        type: database.sql.Decimal,
        value: req.body.viewing_office_manager_1_commission,
      },
      {
        name: "Viewing_Office_Manager_2",
        type: database.sql.NVarChar,
        value: req.body.viewing_office_manager_2,
      },
      {
        name: "Viewing_Office_Manager_2_Commission",
        type: database.sql.Decimal,
        value: req.body.viewing_office_manager_2_commission,
      },
      {
        name: "Viewing_Office_Manager_3",
        type: database.sql.NVarChar,
        value: req.body.viewing_office_manager_3,
      },
      {
        name: "Viewing_Office_Manager_3_Commission",
        type: database.sql.Decimal,
        value: req.body.viewing_office_manager_3_commission,
      },
      {
        name: "Viewing_Office_Manager_4",
        type: database.sql.NVarChar,
        value: req.body.viewing_office_manager_4,
      },
      {
        name: "Viewing_Office_Manager_4_Commission",
        type: database.sql.Decimal,
        value: req.body.viewing_office_manager_4_commission,
      },
      {
        name: "Viewing_Office_Manager_5",
        type: database.sql.NVarChar,
        value: req.body.viewing_office_manager_5,
      },
      {
        name: "Viewing_Office_Manager_5_Commission",
        type: database.sql.Decimal,
        value: req.body.viewing_office_manager_5_commission,
      },
      {
        name: "Viewing_Office_Manager_6",
        type: database.sql.NVarChar,
        value: req.body.viewing_office_manager_6,
      },
      {
        name: "Viewing_Office_Manager_6_Commission",
        type: database.sql.Decimal,
        value: req.body.viewing_office_manager_6_commission,
      },
      {
        name: "Assistant_Office_Manager_1",
        type: database.sql.NVarChar,
        value: req.body.assistant_office_manager_1,
      },
      {
        name: "Assistant_Office_Manager_1_Commission",
        type: database.sql.Decimal,
        value: req.body.assistant_office_manager_1_commission,
      },
      {
        name: "Assistant_Office_Manager_2",
        type: database.sql.NVarChar,
        value: req.body.assistant_office_manager_2,
      },
      {
        name: "Assistant_Office_Manager_2_Commission",
        type: database.sql.Decimal,
        value: req.body.assistant_office_manager_2_commission,
      },
      {
        name: "Assistant_Office_Manager_3",
        type: database.sql.NVarChar,
        value: req.body.assistant_office_manager_3,
      },
      {
        name: "Assistant_Office_Manager_3_Commission",
        type: database.sql.Decimal,
        value: req.body.assistant_office_manager_3_commission,
      },
      {
        name: "Assistant_Office_Manager_4",
        type: database.sql.NVarChar,
        value: req.body.assistant_office_manager_4,
      },
      {
        name: "Assistant_Office_Manager_4_Commission",
        type: database.sql.Decimal,
        value: req.body.assistant_office_manager_4_commission,
      },
      {
        name: "Assistant_Office_Manager_5",
        type: database.sql.NVarChar,
        value: req.body.assistant_office_manager_5,
      },
      {
        name: "Assistant_Office_Manager_5_Commission",
        type: database.sql.Decimal,
        value: req.body.assistant_office_manager_5_commission,
      },
      {
        name: "Assistant_Office_Manager_6",
        type: database.sql.NVarChar,
        value: req.body.assistant_office_manager_6,
      },
      {
        name: "Assistant_Office_Manager_6_Commission",
        type: database.sql.Decimal,
        value: req.body.assistant_office_manager_6_commission,
      },
      {
        name: "Portfolio_Supervisor",
        type: database.sql.NVarChar,
        value: req.body.portfolio_supervisor,
      },
      {
        name: "Portfolio_Supervisor_Commission",
        type: database.sql.Decimal,
        value: req.body.portfolio_supervisor_commission,
      },
      {
        name: "Lead_Partner",
        type: database.sql.NVarChar,
        value: req.body.lead_partner,
      },
      {
        name: "Lead_Partner_Commission_without_VAT",
        type: database.sql.Decimal,
        value: req.body.lead_partner_commission_without_vat,
      },
      {
        name: "Lead_Partner_Invoice_Amount_without_VAT",
        type: database.sql.Decimal,
        value: req.body.lead_partner_invoice_amount_without_vat,
      },
      {
        name: "Listing_Partner",
        type: database.sql.NVarChar,
        value: req.body.listing_partner,
      },
      {
        name: "Listing_Partner_Commission_without_VAT",
        type: database.sql.Decimal,
        value: req.body.listing_partner_commission_without_vat,
      },
      {
        name: "Listing_Partner_Invoice_Amount_without_VAT",
        type: database.sql.Decimal,
        value: req.body.listing_partner_invoice_amount_without_vat,
      },
      {
        name: "Partner_Manager",
        type: database.sql.NVarChar,
        value: req.body.partner_manager,
      },
      {
        name: "Partner_Manager_Commission",
        type: database.sql.Decimal,
        value: req.body.partner_manager_commission,
      },
      {
        name: "Partner_Supervisor",
        type: database.sql.NVarChar,
        value: req.body.partner_supervisor,
      },
      {
        name: "Partner_Supervisor_Commission",
        type: database.sql.Decimal,
        value: req.body.partner_supervisor_commission,
      },
      {
        name: "Responsible_Lawyer",
        type: database.sql.NVarChar,
        value: req.body.responsible_lawyer,
      },
      {
        name: "Lawyer_Commission",
        type: database.sql.Decimal,
        value: req.body.lawyer_commission,
      },
      {
        name: "Partner_Lawyer",
        type: database.sql.NVarChar,
        value: req.body.partner_lawyer,
      },
      {
        name: "Partner_Lawyer_Commission_without_VAT",
        type: database.sql.Decimal,
        value: req.body.partner_lawyer_commission_without_vat,
      },
      {
        name: "Partner_Lawyer_Invoice_Amount_without_VAT",
        type: database.sql.Decimal,
        value: req.body.partner_lawyer_invoice_amount_without_vat,
      },
      {
        name: "After_Sales_Responsible",
        type: database.sql.NVarChar,
        value: req.body.after_sales_responsible,
      },
      {
        name: "After_Sales_Responsible_Commission",
        type: database.sql.Decimal,
        value: req.body.after_sales_responsible_commission,
      },
      {
        name: "Administration_Pool",
        type: database.sql.Decimal,
        value: req.body.administration_pool,
      },
      {
        name: "Operations_Local_Portal_Pool",
        type: database.sql.Decimal,
        value: req.body.operations_local_portal_pool,
      },
      {
        name: "Trade_Management_Pool",
        type: database.sql.Decimal,
        value: req.body.trade_management_pool,
      },
      {
        name: "Sales_Expenses",
        type: database.sql.Decimal,
        value: req.body.sales_expenses,
      },
      {
        name: "Group_Company",
        type: database.sql.NVarChar,
        value: req.body.group_company,
      },
      {
        name: "Group_Company_Share",
        type: database.sql.Decimal,
        value: req.body.group_company_share,
      },
      {
        name: "Commission_Due_Date",
        type: database.sql.Date,
        value: req.body.commission_due_date,
      },
      {
        name: "Seller_Scanned_Invoice",
        type: database.sql.NVarChar,
        value: req.body.seller_scanned_invoice,
      },
      {
        name: "Buyer_Scanned_Invoice",
        type: database.sql.NVarChar,
        value: req.body.buyer_scanned_invoice,
      },
      {
        name: "Payment_Method",
        type: database.sql.NVarChar,
        value: req.body.payment_method,
      },
      {
        name: "Sold_Property_Reference_Number",
        type: database.sql.NVarChar,
        value: req.body.sold_property_reference_number,
      },
      {
        name: "Location_Country",
        type: database.sql.NVarChar,
        value: req.body.location_country,
      },
      {
        name: "Location_Province",
        type: database.sql.NVarChar,
        value: req.body.location_province,
      },
      {
        name: "Location_District",
        type: database.sql.NVarChar,
        value: req.body.location_district,
      },
      {
        name: "Location_Neighborhood",
        type: database.sql.NVarChar,
        value: req.body.location_neighborhood,
      },
      {
        name: "Main_Language",
        type: database.sql.NVarChar,
        value: req.body.main_language,
      },
      {
        name: "Secondary_Language",
        type: database.sql.NVarChar,
        value: req.body.secondary_language,
      },
      {
        name: "Third_Language",
        type: database.sql.NVarChar,
        value: req.body.third_language,
      },
      {
        name: "Nationality",
        type: database.sql.NVarChar,
        value: req.body.nationality,
      },
      {
        name: "Country_of_Residence",
        type: database.sql.NVarChar,
        value: req.body.country_of_residence,
      },
      {
        name: "Deposit_Payment_Method",
        type: database.sql.NVarChar,
        value: req.body.deposit_payment_method,
      },
      {
        name: "Deposit_Payment_Date",
        type: database.sql.Date,
        value: req.body.deposit_payment_date,
      },
      {
        name: "Deposit_Amount",
        type: database.sql.Decimal,
        value: req.body.deposit_amount,
      },
      {
        name: "Sales_Office",
        type: database.sql.NVarChar,
        value: req.body.sales_office,
      },
      {
        name: "Selling_Office_Country",
        type: database.sql.NVarChar,
        value: req.body.selling_office_country,
      },
      {
        name: "Sales_Currency",
        type: database.sql.NVarChar,
        value: req.body.sales_currency,
      },
      {
        name: "After_Sales_SPA_ID",
        type: database.sql.NVarChar,
        value: req.body.after_sales_spa_id,
      },
      {
        name: "Responsible_Lawyer_Commission_Rate",
        type: database.sql.Decimal,
        value: req.body.responsible_lawyer_commission_rate,
      },
      {
        name: "RL_Fixed_Commission_Amount",
        type: database.sql.Decimal,
        value: req.body.rl_fixed_commission_amount,
      },
      {
        name: "VISA_DR_Commission_Rate",
        type: database.sql.Decimal,
        value: req.body.visa_dr_commission_rate,
      },
      {
        name: "VISA_DR_Fixed_Commission_Amount",
        type: database.sql.Decimal,
        value: req.body.visa_dr_fixed_commission_amount,
      },
      {
        name: "Is_AP_exist",
        type: database.sql.Bit,
        value: req.body.is_ap_exist,
      },
      {
        name: "Downpayment_WF_is_running",
        type: database.sql.Bit,
        value: req.body.downpayment_wf_is_running,
      },
      {
        name: "Waiting_Downpayment",
        type: database.sql.Bit,
        value: req.body.waiting_downpayment,
      },
      {
        name: "Downpayment_Received",
        type: database.sql.Decimal,
        value: req.body.downpayment_received,
      },
      {
        name: "Invoice_Agreed",
        type: database.sql.Bit,
        value: req.body.invoice_agreed,
      },
      {
        name: "Invoice_Sent",
        type: database.sql.Bit,
        value: req.body.invoice_sent,
      },
      {
        name: "Commission_Received",
        type: database.sql.Bit,
        value: req.body.commission_received,
      },
      {
        name: "All_Commissions_Paid",
        type: database.sql.Bit,
        value: req.body.all_commissions_paid,
      },
      {
        name: "Sales_Cancelled",
        type: database.sql.Bit,
        value: req.body.sales_cancelled,
      },
      {
        name: "Received_Commission_Amount",
        type: database.sql.Decimal,
        value: req.body.received_commission_amount,
      },
      {
        name: "Received_Commission_Currency",
        type: database.sql.NVarChar,
        value: req.body.received_commission_currency,
      },
      {
        name: "Received_Currency_Exchange_Rate",
        type: database.sql.Decimal,
        value: req.body.received_currency_exchange_rate,
      },
      {
        name: "Received_Commission_Amount_in_TRY",
        type: database.sql.Decimal,
        value: req.body.received_commission_amount_in_try,
      },
      {
        name: "First_name",
        type: database.sql.NVarChar,
        value: req.body.first_name,
      },
      {
        name: "Last_name",
        type: database.sql.NVarChar,
        value: req.body.last_name,
      },
      {
        name: "CRM_URL_ID_1",
        type: database.sql.NVarChar,
        value: req.body.crm_url_id_1,
      },
      {
        name: "Citizenship_ID",
        type: database.sql.NVarChar,
        value: req.body.citizenship_id,
      },
      {
        name: "Product_ID",
        type: database.sql.NVarChar,
        value: req.body.product_id,
      },
      {
        name: "Project_Name",
        type: database.sql.NVarChar,
        value: req.body.project_name,
      },
      {
        name: "Invoice_Company_ID",
        type: database.sql.NVarChar,
        value: req.body.invoice_company_id,
      },
      {
        name: "Company_name",
        type: database.sql.NVarChar,
        value: req.body.company_name,
      },
      {
        name: "Last_name_contact_card",
        type: database.sql.NVarChar,
        value: req.body.last_name_contact_card,
      },
      { name: "Tax_ID", type: database.sql.NVarChar, value: req.body.tax_id },
      {
        name: "CRM_URL_ID_2",
        type: database.sql.NVarChar,
        value: req.body.crm_url_id_2,
      },
      {
        name: "Name_Last_Name",
        type: database.sql.NVarChar,
        value: req.body.name_last_name,
      },
      {
        name: "Responsible_Person_ID",
        type: database.sql.NVarChar,
        value: req.body.responsible_person_id,
      },
      {
        name: "Responsible_Person_Name",
        type: database.sql.NVarChar,
        value: req.body.responsible_person_name,
      },
      {
        name: "Responsible_Person_Office",
        type: database.sql.NVarChar,
        value: req.body.responsible_person_office,
      },
      {
        name: "Responsible_Person_Office_Name",
        type: database.sql.NVarChar,
        value: req.body.responsible_person_office_name,
      },
      {
        name: "Source_2",
        type: database.sql.NVarChar,
        value: req.body.source_2,
      },
      {
        name: "Nationality_M",
        type: database.sql.NVarChar,
        value: req.body.nationality_m,
      },
      {
        name: "Country_of_Residance_M",
        type: database.sql.NVarChar,
        value: req.body.country_of_residance_m,
      },
      {
        name: "Main_Language_M",
        type: database.sql.NVarChar,
        value: req.body.main_language_m,
      },
      {
        name: "Lead_Create",
        type: database.sql.NVarChar,
        value: req.body.lead_create,
      },
      {
        name: "Pasaport_Number",
        type: database.sql.NVarChar,
        value: req.body.pasaport_number,
      },
      {
        name: "TC_ID_or_Tax_Number",
        type: database.sql.NVarChar,
        value: req.body.tc_id_or_tax_number,
      },
      {
        name: "Contact_Kart_URL",
        type: database.sql.NVarChar,
        value: req.body.contact_kart_url,
      },
      {
        name: "Deal_Link_URL",
        type: database.sql.NVarChar,
        value: req.body.deal_link_url,
      },
    ]);
    console.log(`(${result.rowsAffected} row affected)`);
    res.status(201).json({ message: `(${result.rowsAffected} row affected)` });
  } catch (err) {
    console.error("Query Error:", err);
  } finally {
    await database.close();
  }
};

// Get data from the table

export const fetchData = async () => {
  const database = await db();

  try {
    const result = await database.query("SELECT * FROM TEST --WHERE id = @id", [
      { name: "id", type: database.sql.Int, value: 1 },
    ]);
    console.log(result.recordset);
  } catch (err) {
    console.error("Query Error:", err);
  } finally {
    await database.close();
  }
};
